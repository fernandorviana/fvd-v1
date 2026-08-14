"use server";

const CASADIGITAL_API_URL =
  process.env.CASADIGITAL_API_URL ?? "https://www.casadigital.pt";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot: real visitors never fill this hidden field.
  if (String(formData.get("company") ?? "").trim() !== "") {
    return { status: "success" };
  }

  // Time trap: reject submits faster than a human could fill the form.
  const renderedAt = Number(formData.get("renderedAt") ?? 0);
  if (renderedAt && Date.now() - renderedAt < 2000) {
    return { status: "success" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: ContactFormState["fieldErrors"] = {};
  if (name.length < 2) fieldErrors.name = "Enter your name.";
  if (!EMAIL_PATTERN.test(email)) fieldErrors.email = "Enter a valid email.";
  if (message.length < 10) fieldErrors.message = "Message must be at least 10 characters.";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", fieldErrors, message: "Please fix the fields below." };
  }

  const apiKey = process.env.SITE_API_KEY;
  if (!apiKey) {
    console.error("SITE_API_KEY is not configured.");
    return {
      status: "error",
      message: "The form is temporarily unavailable — please email me directly.",
    };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(`${CASADIGITAL_API_URL}/api/v1/leads`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || undefined,
        formType: "contact",
        message,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      console.error("Casa Digital lead submission failed", response.status, await response.text());
      return {
        status: "error",
        message: "Something went wrong — please email me directly.",
      };
    }

    return { status: "success" };
  } catch (error) {
    console.error("Casa Digital lead submission error", error);
    return {
      status: "error",
      message: "Something went wrong — please email me directly.",
    };
  } finally {
    clearTimeout(timeout);
  }
}
