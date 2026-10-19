/** Clé `localStorage` où la préférence de thème de la visiteuse est conservée. */
export const THEME_STORAGE_KEY = "theme";

/**
 * Script exécuté avant le premier affichage : applique le thème enregistré, ou à
 * défaut celui du système, pour éviter un flash de mauvais thème au chargement.
 * Les accès au stockage sont protégés : ils peuvent échouer (navigation privée, etc.).
 */
export const THEME_INIT_SCRIPT = `(function(){try{var s=null;try{s=localStorage.getItem("${THEME_STORAGE_KEY}")}catch(e){}var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}})();`;
