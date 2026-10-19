"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { LuCircleAlert, LuCircleCheck, LuSend } from "react-icons/lu";
import { buttonClassName } from "@/components/ButtonLink";
import {
  CONTACT_SENDING_ENABLED,
  validateContact,
  type ContactErrors,
  type ContactFields,
} from "@/lib/contact";

type FormStatus = "idle" | "invalid" | "sent" | "not-configured";

const EMPTY_VALUES: ContactFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const FIELD_ORDER: (keyof ContactFields)[] = [
  "name",
  "email",
  "subject",
  "message",
];

const inputClassName =
  "w-full rounded-lg border bg-surface px-4 py-3 text-base text-foreground placeholder:text-muted/70 transition-colors duration-200 focus-visible:border-primary";

function fieldId(field: keyof ContactFields): string {
  return `contact-${field}`;
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactFields>(EMPTY_VALUES);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange =
    (field: keyof ContactFields) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }));
      if (errors[field]) {
        setErrors((current) => ({ ...current, [field]: undefined }));
      }
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateContact(values);
    const firstInvalid = FIELD_ORDER.find((field) => nextErrors[field]);
    setErrors(nextErrors);

    if (firstInvalid) {
      setStatus("invalid");
      document.getElementById(fieldId(firstInvalid))?.focus();
      return;
    }

    // À brancher : appeler ici le service d'envoi d'e-mails, puis passer
    // CONTACT_SENDING_ENABLED à `true` dans lib/contact.ts.
    if (CONTACT_SENDING_ENABLED) {
      setValues(EMPTY_VALUES);
      setStatus("sent");
      return;
    }
    setStatus("not-configured");
  };

  const renderField = (
    field: keyof ContactFields,
    label: string,
    control: "input" | "textarea",
    extra: { type?: string; autoComplete?: string } = {},
  ) => {
    const id = fieldId(field);
    const errorId = `${id}-erreur`;
    const error = errors[field];
    const sharedProps = {
      id,
      name: field,
      value: values[field],
      onChange: handleChange(field),
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? errorId : undefined,
      className: `${inputClassName} ${error ? "border-danger" : "border-border"}`,
    };

    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium">
          {label}
        </label>
        <div className="mt-2">
          {control === "textarea" ? (
            <textarea {...sharedProps} rows={5} className={`${sharedProps.className} resize-y`} />
          ) : (
            <input
              {...sharedProps}
              type={extra.type ?? "text"}
              autoComplete={extra.autoComplete}
            />
          )}
        </div>
        {error ? (
          <p id={errorId} className="mt-2 text-sm text-danger">
            {error}
          </p>
        ) : null}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {renderField("name", "Nom", "input", { autoComplete: "name" })}
        {renderField("email", "E-mail", "input", {
          type: "email",
          autoComplete: "email",
        })}
      </div>
      {renderField("subject", "Sujet", "input")}
      {renderField("message", "Message", "textarea")}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" className={buttonClassName("primary", "md", "w-full sm:w-auto")}>
          Envoyer
          <LuSend aria-hidden="true" className="size-4" />
        </button>
      </div>

      <div role="status" aria-live="polite" className="text-sm">
        {status === "invalid" ? (
          <p className="flex items-start gap-2 text-danger">
            <LuCircleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
            Merci de corriger les champs signalés avant d&apos;envoyer.
          </p>
        ) : null}
        {status === "not-configured" ? (
          <p className="flex items-start gap-2 text-muted">
            <LuCircleCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-text" />
            Votre message est valide, mais l&apos;envoi par ce formulaire n&apos;est pas encore
            activé : aucun message n&apos;a été transmis. En attendant, vous pouvez me contacter
            directement avec les coordonnées indiquées sur cette page.
          </p>
        ) : null}
        {status === "sent" ? (
          <p className="flex items-start gap-2 text-foreground">
            <LuCircleCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-text" />
            Merci, votre message a bien été envoyé.
          </p>
        ) : null}
      </div>
    </form>
  );
}
