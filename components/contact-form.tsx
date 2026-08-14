"use client";

import { useActionState, useState } from "react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle" };

const fieldClass =
  "mt-2 w-full border-b border-line bg-transparent py-2 font-sans text-base outline-none focus:border-accent";
const labelClass =
  "block font-sans text-xs uppercase tracking-[0.18em] text-muted";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );
  const [renderedAt] = useState(() => Date.now());

  if (state.status === "success") {
    return (
      <p className="mt-10 max-w-lg font-sans text-base text-muted">
        Thanks — I&apos;ll get back to you shortly.
      </p>
    );
  }

  return (
    <form action={formAction} className="mt-10 max-w-lg space-y-5">
      <input type="hidden" name="renderedAt" value={renderedAt} />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          margin: -1,
          padding: 0,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          autoComplete="name"
          className={fieldClass}
        />
        {state.fieldErrors?.name && (
          <p className="mt-1 font-sans text-sm text-red-600">
            {state.fieldErrors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
        />
        {state.fieldErrors?.email && (
          <p className="mt-1 font-sans text-sm text-red-600">
            {state.fieldErrors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone <span className="normal-case">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={4}
          className={`${fieldClass} resize-none`}
        />
        {state.fieldErrors?.message && (
          <p className="mt-1 font-sans text-sm text-red-600">
            {state.fieldErrors.message}
          </p>
        )}
      </div>

      {state.status === "error" && state.message && (
        <p className="font-sans text-sm text-red-600">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="font-sans text-sm text-accent underline-offset-4 hover:underline disabled:opacity-50"
      >
        {isPending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
