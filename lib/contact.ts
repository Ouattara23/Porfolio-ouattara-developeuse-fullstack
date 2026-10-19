export interface ContactFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactErrors = Partial<Record<keyof ContactFields, string>>;

/**
 * Passer à `true` une fois un service d'envoi d'e-mails branché (le cahier des
 * charges prévoit cette intégration plus tard). Tant que c'est `false`, le
 * formulaire est validé mais aucun message n'est transmis, et le visiteur en
 * est clairement informé.
 */
export const CONTACT_SENDING_ENABLED = false;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(values: ContactFields): ContactErrors {
  const errors: ContactErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Indiquez votre nom (2 caractères minimum).";
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Indiquez une adresse e-mail valide.";
  }
  if (values.subject.trim().length < 3) {
    errors.subject = "Indiquez un sujet (3 caractères minimum).";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Votre message doit contenir au moins 10 caractères.";
  }

  return errors;
}
