import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { LuMail, LuPhone } from "react-icons/lu";
import type { SocialLink } from "@/types";

const icons: Record<SocialLink["id"], IconType> = {
  email: LuMail,
  phone: LuPhone,
  linkedin: FaLinkedinIn,
  github: FaGithub,
  whatsapp: FaWhatsapp,
};

interface SocialIconProps {
  id: SocialLink["id"];
  className?: string;
}

/** Icône décorative d'un réseau ou d'une coordonnée (le libellé est affiché à côté). */
export default function SocialIcon({ id, className }: SocialIconProps) {
  const Icon = icons[id];
  return <Icon aria-hidden="true" className={className} />;
}
