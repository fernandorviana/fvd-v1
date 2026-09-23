// ============================================================================
// Fundo interactivo do hero — Three.js + SVGLoader
//
// Ideia geral:
//   1. Carregamos o pattern.svg com o SVGLoader do Three.js e convertemos
//      cada linha (subpath) do SVG em segmentos de recta 3D.
//   2. Um ShaderMaterial anima esses segmentos: uma onda ambiente ("flow")
//      mais uma ondulação localizada que segue o rato.
//   3. O grupo todo faz um ligeiro "tilt" (rotação) consoante a posição do
//      rato, para dar sensação de parallax/profundidade.
//   4. Se o browser não tiver WebGL (ou o import falhar), nada disto corre
//      — o fallback estático em CSS (ver style.css) fica visível como está,
//      porque começamos por assumir que só o fallback existe.
// ============================================================================

// ----------------------------------------------------------------------------
// CONFIGURAÇÃO — ajusta estes valores para mudar o comportamento do efeito.
// Não precisas de tocar em mais nada no ficheiro para experimentar.
// ----------------------------------------------------------------------------
const CONFIG = {
  svgUrl: "pattern.svg",

  // --- Velocidade da animação ---
  flowSpeed: 0.18, // velocidade da onda ambiente ("respiração" do padrão). Maior = mais rápido.
  parallaxEase: 0.06, // suavização do movimento do parallax (lerp por frame). Menor = mais lento/fluido, maior = mais imediato.

  // --- Intensidade do efeito ---
  flowAmplitude: 12, // profundidade (eixo Z) da onda ambiente, em unidades do SVG.
  mouseRadius: 220, // raio de influência do rato à volta do cursor, em unidades do SVG (o viewBox vai de -400 a 400).
  mouseStrength: 26, // força do "empurrão" das linhas perto do cursor.
  parallaxIntensity: 0.09, // ângulo máximo (radianos) do tilt do grupo ao mover o rato de um lado ao outro.

  // --- Câmara / enquadramento ---
  cameraFov: 45, // campo de visão da câmara perspectiva.
  cameraDistance: 520, // distância da câmara ao plano do padrão.
  coverPadding: 1.08, // overscan para o padrão nunca deixar ver bordas quando o grupo faz tilt.

  // --- Cor / aparência ---
  // A cor real é lida de --pattern-color no CSS (style.css), para que o
  // fallback estático e a versão WebGL estejam sempre sincronizados.
  lineColorVar: "--pattern-color",
  lineOpacity: 0.85,

  // Respeita a preferência do sistema por "menos movimento": nesse caso
  // nem sequer carregamos o Three.js e ficamos com o fallback estático.
  respectReducedMotion: true,
};

// ----------------------------------------------------------------------------
// Elementos DOM e detecção de suporte
// ----------------------------------------------------------------------------
const heroEl = document.getElementById("hero");
const canvasEl = document.getElementById("hero-canvas");
const fallbackEl = document.querySelector(".hero__fallback-bg");

function isWebGLAvailable() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
}

const prefersReducedMotion =
  CONFIG.respectReducedMotion &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (isWebGLAvailable() && !prefersReducedMotion) {
  initScene().catch((err) => {
    // Qualquer falha aqui (rede em baixo, CDN bloqueado, versão do
    // browser sem suporte a import maps, etc.) e ficamos simplesmente
    // com o fallback estático — que já está visível por omissão.
    console.warn(
      "[hero-flow-bg] Não foi possível iniciar a cena WebGL, a manter o fundo estático.",
      err
    );
  });
}
// Se WebGL não estiver disponível ou o utilizador preferir menos
// movimento, não fazemos nada: o fallback definido em CSS já é tudo o
// que existe no DOM.

// ----------------------------------------------------------------------------
// Shaders
// ----------------------------------------------------------------------------

// O vertex shader desloca cada ponto da linha ao longo do eixo Z:
//   - uma onda ambiente contínua (dá a sensação de "flow"/respiração)
//   - uma ondulação extra centrada em uMouse, com falloff suave (smoothstep)
const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uFlowSpeed;
  uniform float uFlowAmplitude;
  uniform float uMouseRadius;
  uniform float uMouseStrength;

  varying float vGlow;

  void main() {
    vec3 pos = position;

    // Onda ambiente: soma de dois senos desfasados no tempo para não
    // parecer um "metrónomo" repetitivo.
    float wave = sin(pos.x * 0.012 + uTime * uFlowSpeed)
               * cos(pos.y * 0.02 - uTime * uFlowSpeed * 0.7);
    pos.z += wave * uFlowAmplitude;

    // Ondulação localizada à volta do rato (em espaço local do SVG).
    float dist = distance(pos.xy, uMouse);
    float influence = smoothstep(uMouseRadius, 0.0, dist);
    pos.z += influence * uMouseStrength;

    vGlow = wave * 0.5 + influence;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

// O fragment shader só varia ligeiramente o brilho da linha consoante o
// deslocamento calculado acima, para reforçar a sensação de movimento.
const fragmentShader = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vGlow;

  void main() {
    float glow = clamp(0.75 + vGlow * 0.06, 0.5, 1.3);
    gl_FragColor = vec4(uColor * glow, uOpacity);
  }
`;

// ----------------------------------------------------------------------------
// Construção da cena
// ----------------------------------------------------------------------------
async function initScene() {
  // Import dinâmico: só descarrega o three.js (e o addon SVGLoader) depois
  // de confirmarmos que vale a pena — WebGL disponível e sem "reduced motion".
  const THREE = await import("three");
  const { SVGLoader } = await import("three/addons/loaders/SVGLoader.js");

  const renderer = new THREE.WebGLRenderer({
    canvas: canvasEl,
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    CONFIG.cameraFov,
    1, // aspect ratio real é definido em onResize()
    1,
    4000
  );
  camera.position.set(0, 0, CONFIG.cameraDistance);
  camera.lookAt(0, 0, 0);

  // --- Carrega o SVG e converte cada subpath em segmentos de recta ---
  const loader = new SVGLoader();
  const svgData = await loader.loadAsync(CONFIG.svgUrl);

  const positions = [];
  for (const path of svgData.paths) {
    for (const subPath of path.subPaths) {
      const points = subPath.getPoints();
      for (let i = 0; i < points.length - 1; i++) {
        const a = points[i];
        const b = points[i + 1];
        positions.push(a.x, a.y, 0, b.x, b.y, 0);
      }
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );

  // Centra a geometria na origem para que as rotações de parallax rodem
  // à volta do centro visual do padrão, e guarda o tamanho para o
  // cálculo de "cover-fit" em fitGroupToViewport().
  geometry.computeBoundingBox();
  const box = geometry.boundingBox;
  const center = new THREE.Vector3();
  box.getCenter(center);
  geometry.translate(-center.x, -center.y, -center.z);
  const bboxSize = new THREE.Vector2(box.max.x - box.min.x, box.max.y - box.min.y);

  // Cor lida da variável CSS --pattern-color (ver style.css), para que o
  // fallback estático e a cena WebGL usem sempre a mesma cor.
  const cssColor = getComputedStyle(document.documentElement)
    .getPropertyValue(CONFIG.lineColorVar)
    .trim();

  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    transparent: true,
    uniforms: {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uFlowSpeed: { value: CONFIG.flowSpeed },
      uFlowAmplitude: { value: CONFIG.flowAmplitude },
      uMouseRadius: { value: CONFIG.mouseRadius },
      uMouseStrength: { value: CONFIG.mouseStrength },
      uColor: { value: new THREE.Color(cssColor || "#7fe6b3") },
      uOpacity: { value: CONFIG.lineOpacity },
    },
  });

  const lines = new THREE.LineSegments(geometry, material);

  const group = new THREE.Group();
  group.add(lines);
  scene.add(group);

  // --- Enquadramento tipo "background-size: cover" ---
  // Como o SVG tem as suas próprias unidades (viewBox -400..400 / -224..224
  // aprox.), escalamos o grupo para que cubra sempre o ecrã inteiro,
  // independentemente do aspect ratio da janela. O eixo Y é invertido
  // (scale negativa) porque no SVG y cresce para baixo e no Three.js
  // cresce para cima.
  function fitGroupToViewport() {
    const vFov = (camera.fov * Math.PI) / 180;
    const visibleHeight = 2 * Math.tan(vFov / 2) * CONFIG.cameraDistance;
    const visibleWidth = visibleHeight * camera.aspect;

    const scale =
      Math.max(visibleWidth / bboxSize.x, visibleHeight / bboxSize.y) *
      CONFIG.coverPadding;

    group.scale.set(scale, -scale, scale);
  }

  function onResize(width, height) {
    // Salvaguarda: se por alguma razão ainda não houver layout (largura/altura
    // a 0), não fazemos nada — o ResizeObserver abaixo vai chamar-nos de
    // novo assim que o elemento tiver um tamanho real.
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    fitGroupToViewport();
  }

  // Usamos ResizeObserver em vez de "window.resize": corre logo na primeira
  // vez que o elemento tem layout (evitando a corrida em que clientWidth
  // ainda seria 0 no momento em que este módulo executa) e continua a
  // acompanhar mudanças de tamanho do próprio .hero, não só da janela.
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const { inlineSize, blockSize } = entry.contentBoxSize
        ? entry.contentBoxSize[0]
        : { inlineSize: entry.contentRect.width, blockSize: entry.contentRect.height };
      onResize(inlineSize, blockSize);
    }
  });
  resizeObserver.observe(heroEl);

  // --- Parallax + posição do rato ---
  const targetNDC = new THREE.Vector2(0, 0); // posição-alvo do rato em coordenadas normalizadas (-1..1)
  const currentNDC = new THREE.Vector2(0, 0); // posição suavizada (lerp), usada de facto na animação
  const raycaster = new THREE.Raycaster();
  const groundPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const hitPoint = new THREE.Vector3();
  const localMouse = new THREE.Vector3();

  function onPointerMove(event) {
    const rect = canvasEl.getBoundingClientRect();
    targetNDC.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    targetNDC.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
  }

  function onPointerLeave() {
    // Ao sair da área, o parallax e a ondulação "assentam" de volta ao centro.
    targetNDC.set(0, 0);
  }

  window.addEventListener("pointermove", onPointerMove, { passive: true });
  heroEl.addEventListener("pointerleave", onPointerLeave, { passive: true });

  // --- Loop de animação ---
  const startTime = performance.now();

  function animate(now) {
    requestAnimationFrame(animate);

    // Poupa CPU/GPU quando o separador não está visível.
    if (document.hidden) return;

    const elapsed = (now - startTime) / 1000;

    // Suaviza o movimento do rato (lerp simples).
    currentNDC.x += (targetNDC.x - currentNDC.x) * CONFIG.parallaxEase;
    currentNDC.y += (targetNDC.y - currentNDC.y) * CONFIG.parallaxEase;

    // Parallax: inclina ligeiramente o grupo consoante a posição do rato.
    group.rotation.y = currentNDC.x * CONFIG.parallaxIntensity;
    group.rotation.x = -currentNDC.y * CONFIG.parallaxIntensity;

    // Mapeia a posição do rato (NDC) para o espaço local do padrão,
    // fazendo raycast contra um plano em z=0. É uma aproximação (o plano
    // não roda com o grupo), mas como o tilt é pequeno o resultado é
    // visualmente correcto.
    raycaster.setFromCamera(currentNDC, camera);
    if (raycaster.ray.intersectPlane(groundPlane, hitPoint)) {
      localMouse.copy(hitPoint);
      group.worldToLocal(localMouse);
      material.uniforms.uMouse.value.set(localMouse.x, localMouse.y);
    }

    material.uniforms.uTime.value = elapsed;
    renderer.render(scene, camera);
  }

  requestAnimationFrame(animate);

  // Só agora, com a cena construída e o primeiro frame prestes a
  // desenhar-se, revelamos o canvas e escondemos o fallback estático.
  canvasEl.classList.add("is-ready");
  fallbackEl.classList.add("is-hidden");
}
