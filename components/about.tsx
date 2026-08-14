import { Section } from "@/components/section";

export function About() {
  return (
    <Section id="sobre" label="02 — Sobre">
      <div className="max-w-2xl space-y-6 font-sans text-lg leading-relaxed">
        <p className="font-serif text-title">
          Placeholder — a frase que resume a forma como trabalho.
        </p>
        <p className="text-muted">
          Dois ou três parágrafos curtos: o padrão de entrar cedo e montar
          design do zero, como isso se traduz em pesquisa, sistema e entrega, e
          o tipo de equipa em que isto funciona melhor.
        </p>
        <p className="text-muted">
          Espaço para o segundo parágrafo — método, colaboração com engenharia e
          produto, e o que procuro a seguir.
        </p>
      </div>
    </Section>
  );
}
