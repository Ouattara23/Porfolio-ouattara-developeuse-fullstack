import type { AIContent } from "@/types";

/**
 * Les outils d'IA sont présentés comme des outils de travail, jamais comme des
 * langages ou frameworks maîtrisés (cahier des charges, section 17).
 */
export const ai: AIContent = {
  title: "Le développement web à l'ère de l'IA",
  intro:
    "J'intègre progressivement l'intelligence artificielle dans ma façon de travailler : un outil au service de mon apprentissage et de mon workflow, qui accompagne ma compréhension du code sans la remplacer.",
  uses: [
    { id: "learn", label: "Apprendre" },
    { id: "explore", label: "Explorer" },
    { id: "prototype", label: "Prototyper" },
    { id: "accelerate", label: "Accélérer certaines tâches" },
    { id: "workflow", label: "Améliorer le workflow" },
  ],
  toolsTitle: "Outils que j'explore",
  tools: [
    "ChatGPT / Codex",
    "Claude",
    "Gemini",
    "Cursor",
    "Antigravity",
    "Google AI Studio",
    "DeepSeek",
    "Lovable",
    "Manus",
  ],
  toolsNote:
    "Ce sont des outils de travail, à distinguer de mes compétences techniques présentées plus haut.",
};
