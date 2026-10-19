# DECISIONS DU PROJET

## Lot 1 — Initialisation

- [x] Projet Next.js créé (create-next-app, App Router, sans dossier `src/`, alias d'import `@/*`)
- [x] TypeScript configuré
- [x] Tailwind CSS configuré (Tailwind v4 via `@tailwindcss/postcss`)
- [x] ESLint configuré
- [x] Architecture créée : `components/`, `data/`, `types/`, `public/images/`
- [x] Fichiers de base créés : `types/index.ts`, `data/projects.ts`, `data/skills.ts`, `data/technologies.ts` (tableaux vides, alimentés dans les lots suivants)
- [x] Git initialisé (commit initial de create-next-app)
- [x] `decision.md` créé
- [x] Cahier des charges conservé à la racine : `cahier-de-charge.md`

### Décisions techniques

- Versions installées : Next.js 16.3.8, React 19.2.8, Tailwind CSS 4, TypeScript 5.
- Gestionnaire de paquets : npm.
- Police : Geist (via `next/font/google`), conservée depuis le gabarit et appliquée au `body`.
- `app/layout.tsx` : `lang="fr"`, title et description issus du cahier des charges (section 24). Le reste du SEO (Open Graph, sitemap, robots) est prévu au Lot 14.
- `app/page.tsx` : simple page d'attente, aucune section développée.
- Contenu de démonstration de create-next-app supprimé (page d'accueil et images `public/*.svg` inutilisées).
- Le dossier `components/` ne contient que `.gitkeep` : les composants seront créés lot par lot.
- Mode sombre : le gabarit applique `prefers-color-scheme` ; le vrai Dark Mode avec bouton dans la navbar est prévu au Lot 12.
- Aucune donnée inventée : informations manquantes à marquer `[À RENSEIGNER]`.


### Vérification du Lot 1 (06/10/2026)

- [x] `npx tsc --noEmit` : aucune erreur
- [x] `npm run lint` : aucune erreur
- [x] `npm run build` : compilation réussie (routes `/` et `/_not-found` statiques)
- [x] Serveur de production démarré : la page d'accueil répond HTTP 200, `lang="fr"` et title conformes
- [ ] Point ouvert : `package-lock.json` (npm) et `pnpm-lock.yaml` / `pnpm-workspace.yaml` (pnpm) coexistent, alors que le gestionnaire retenu est npm. À trancher avant le Lot 2.
- [ ] Point ouvert : les fichiers du Lot 1 ne sont pas encore commités (seul le commit initial de create-next-app existe).

### Lot 1 — Suivi des points ouverts (06/10/2026)

- [x] Gestionnaire de paquets : **pnpm retenu** (décision de l'utilisatrice). Cela remplace la mention « npm » du Lot 1. `package-lock.json` supprimé, `pnpm-lock.yaml` conservé. Commandes : `pnpm dev`, `pnpm build`, `pnpm lint`.
- [x] Pas de commit Git pour l'instant (décision de l'utilisatrice) : tout le travail reste en modifications locales.
- [x] Les lots suivants s'enchaînent sans pause de validation entre eux (décision de l'utilisatrice, qui prime sur la règle de la section 30 du cahier des charges). Les autres étapes de la section 30 restent appliquées à chaque lot.
- [x] Dépendance ajoutée : `react-icons` (seule bibliothèque d'icônes ; `lu` pour l'interface, `si` pour les technologies, `fa6` pour LinkedIn).

## Lot 2 — Navbar

- [x] Navbar sticky : marque « YAH. » (point doré), 7 liens, CTA « Me contacter »
- [x] Menu mobile : bouton hamburger (`aria-expanded`, `aria-controls`), fermeture après sélection d'un lien et avec la touche Échap
- [x] Lien d'évitement « Aller au contenu principal » (accessibilité clavier)
- [x] Palette posée dans `app/globals.css` sous forme de variables sémantiques (`background`, `surface`, `foreground`, `muted`, `border`, `primary`, `accent`, `accent-text`) : indigo profond, off-white, gris neutre, doré discret. Le doré sert au décor ; `accent-text` est la variante assez contrastée pour du texte.
- [x] Données séparées : `data/navigation.ts` (liens + identifiants de sections `SECTION_IDS`), `data/profile.ts`, `data/socials.ts`
- [x] Helper `lib/placeholder.ts` : `PLACEHOLDER` (`[À RENSEIGNER]`) et `isFilled()`. Toute coordonnée ou tout lien manquant reste affiché comme `[À RENSEIGNER]` et n'est pas cliquable.
- [x] Navbar visible à partir de 1024px (`lg`), hamburger en dessous : 7 liens + CTA ne tiennent pas proprement à 768px.
- [x] Bloc `prefers-color-scheme` du gabarit retiré : le Dark Mode (bouton dans la navbar, préférence conservée) est traité au Lot 12.
- [x] Tests : aucun défilement horizontal de 320px à 1920px, aucune erreur console, menu mobile ouvert/fermé (clic, lien, Échap), `tsc` et `lint` sans erreur.

## Lot 3 — Hero

- [x] Section Hero : badge « Disponible pour des opportunités », « Développeuse Web » mis en évidence, titre, description, CTA « Voir mes projets » et « Me contacter », CTA secondaire « Télécharger mon CV »
- [x] Photo de profil via `next/image` (`fill`, `object-cover`, `priority`, `sizes`) attendue dans `public/images/profile.jpg`. Tant que le fichier n'existe pas, un emplacement avec les initiales et `[À RENSEIGNER]` s'affiche (détection côté serveur) ; la photo apparaîtra d'elle-même une fois déposée.
- [x] CV : le bouton n'est actif que si `cvUrl` est renseigné dans `data/profile.ts` ; sinon il s'affiche avec `[À RENSEIGNER]`.
- [x] Composants communs créés : `ButtonLink` (variantes primary / secondary / ghost, tailles sm / md) et `PlaceholderTag`. La navbar utilise désormais `ButtonLink`.
- [x] Environnement : `NODE_ENV=production` est défini globalement sur le poste. Next le signale pour `pnpm dev`. Le serveur de développement est donc lancé avec `NODE_ENV=development` pour ce seul processus. À corriger sur le poste : sinon un `pnpm install` risque d'ignorer les devDependencies.
- [x] Tests : aucun défilement horizontal de 320px à 1920px, console sans erreur, rendu vérifié en capture à 1440px, `tsc` sans erreur.

## Lot 4 — À propos

- [x] Section « À propos » : titre « De la géographie au développement web », trois paragraphes courts, parcours en trois étapes (Géographie, Numérique, Développement web)
- [x] Texte rédigé uniquement à partir du cahier des charges (section 11) : aucune date, aucun chiffre, aucune expérience inventés. À relire par l'utilisatrice.
- [x] Composant commun `Section` créé (repère, titre accessible via `aria-labelledby`, espacement, fond `muted` en alternance)
- [x] Contenu séparé de la présentation : `data/about.ts`
- [x] Tests : aucun défilement horizontal de 320px à 1920px, console sans erreur, rendu vérifié en capture à 375px, `tsc` sans erreur.

## Lot 5 — Compétences & technologies

- [x] Section Compétences : catégories Frontend, Backend, Bases de données, Outils (badges) et carte **ERP / CRM — Dolibarr ERP/CRM** mise en avant en premier, avec filet doré
- [x] Section Technologies : 14 cartes avec icônes (HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React, Next.js, Node.js, Express, MongoDB, Firebase, Git, GitHub, Dolibarr), grille de 2 à 7 colonnes selon l'écran
- [x] Données séparées : `data/skills.ts`, `data/technologies.ts` ; types `SkillCategory` (champs `featured`, `description`) et `TechnologyId`
- [x] Composants communs : `Card` (survol discret avec `motion-reduce`), `Badge`, `TechIcon` (correspondance identifiant → icône `react-icons/si`)
- [x] Les listes reprennent exactement celles du cahier des charges (sections 12 et 13) : rien n'a été ajouté.
- [x] Tests : aucun défilement horizontal de 320px à 1920px, console sans erreur, rendu vérifié en capture à 1440px, `tsc` sans erreur.
- [x] Outillage de test : le serveur de développement est arrêté entre deux échanges ; un script de test le relance si besoin (hors projet, dans `%TEMP%\pw-check`).

## Lot 6 — Projets

- [x] Section Projets : 3 cartes (BudgetApp, Elegance Parfum, Dolibarr ERP/CRM) avec aperçu, description, technologies, liens « Voir le projet » et GitHub
- [x] Descriptions et technologies reprises telles quelles du cahier des charges (section 14). BudgetApp : « Firebase / IndexedDB » avec la mention que le stockage dépend de la version finale.
- [x] Aperçus : aucune capture fournie. Un emplacement avec `[À RENSEIGNER]` s'affiche ; pour une vraie image, déposer le fichier dans `public/images/projects/` puis renseigner `image` dans `data/projects.ts` (rendu via `next/image`).
- [x] Liens : `projectUrl` et `githubUrl` valent `[À RENSEIGNER]` (non cliquables) tant qu'ils ne sont pas fournis ; une fois renseignés, ils s'ouvrent dans un nouvel onglet (`rel="noopener noreferrer"`).
- [x] Type `Project` étendu (`highlights`, `note`, URL obligatoires avec marqueur par défaut)
- [x] Tests : aucun défilement horizontal de 320px à 1920px, console sans erreur, rendu vérifié en capture à 1440px, `tsc` sans erreur.

## Lot 7 — Parcours

- [x] Timeline verticale : Baccalauréat (2019), Licence en Géographie (Université Alassane Ouattara), DigiFemmes Academy, Bootcamp GoMyCode (Développement Logiciel avec compétences en IA, avec les 17 technologies étudiées), formation Dolibarr
- [x] Seule l'année 2019 figure dans le cahier des charges : les autres périodes restent `[À RENSEIGNER]` (marqueur visible) dans `data/experience.ts`
- [x] Type `TimelineItem` ; composant `Experience` ; section sur fond `muted`
- [x] Tests : aucun défilement horizontal de 320px à 1920px, console sans erreur, rendu vérifié en capture à 375px, `tsc` sans erreur.

## Lot 8 — Services

- [x] Section Services : titre « Ce que je peux vous aider à réaliser » et 5 cartes avec icône (Développement Web, Sites vitrines, Intégration Dolibarr, Intégration Frontend, Maintenance), libellés repris du cahier des charges (section 16)
- [x] Bouton « Parlons de votre projet » vers la section Contact
- [x] Données : `data/services.ts` ; type `Service` / `ServiceId` ; correspondance identifiant → icône dans le composant (les données restent sans code React)
- [x] Tests : aucun défilement horizontal de 320px à 1920px, console sans erreur, `tsc` sans erreur.

## Lot 9 — Intelligence artificielle

- [x] Section « Le développement web à l'ère de l'IA » : introduction, 5 usages (Apprendre, Explorer, Prototyper, Accélérer certaines tâches, Améliorer le workflow) et 9 outils (ChatGPT / Codex, Claude, Gemini, Cursor, Antigravity, Google AI Studio, DeepSeek, Lovable, Manus)
- [x] Les outils sont présentés comme des outils de travail, avec une phrase qui les distingue des compétences techniques (consigne « Important » de la section 17). Ils ne figurent ni dans Compétences ni dans Technologies.
- [x] L'introduction est rédigée par nous, sans chiffre ni affirmation de maîtrise ; à relire par l'utilisatrice.
- [x] Données : `data/ai.ts` ; types `AIContent`, `AIUse` ; composant `AISection`
- [x] Tests : aucun défilement horizontal de 320px à 1920px, console sans erreur, rendu vérifié en capture à 1440px, `tsc` sans erreur.

## Lot 10 — Contact

- [x] Section Contact : titre « Construisons quelque chose ensemble. », texte du cahier des charges, coordonnées (e-mail, LinkedIn, GitHub, WhatsApp) et formulaire (Nom, E-mail, Sujet, Message, bouton « Envoyer »)
- [x] Validation côté client (`lib/contact.ts`, déjà présent) : champs reliés à leurs labels, erreurs reliées par `aria-describedby`, `aria-invalid`, focus sur le premier champ invalide, zone de statut `aria-live`
- [x] **Aucun envoi réel** : le cahier des charges prévoit le service d'e-mails plus tard. Un formulaire valide affiche donc clairement qu'aucun message n'a été transmis et renvoie vers les coordonnées de la page (`CONTACT_SENDING_ENABLED = false`). Pour activer l'envoi : appeler le service dans `components/ContactForm.tsx` (commentaire « À brancher »), puis passer l'indicateur à `true`.
- [x] Coordonnées : tant que `data/socials.ts` vaut `[À RENSEIGNER]`, elles sont affichées avec le marqueur et ne sont pas cliquables ; une fois renseignées, e-mail (`mailto:`) et réseaux (nouvel onglet, `rel="noopener noreferrer"`) deviennent des liens.
- [x] Composants et helpers : `Contact`, `ContactForm`, `SocialIcon`, `lib/socials.ts` (`getSocialHref`)
- [x] Tests : formulaire vide (4 erreurs, focus), e-mail invalide refusé, cas valide avec message honnête, aucun défilement horizontal de 320px à 1920px, console sans erreur, rendu vérifié en capture à 1440px, `tsc` sans erreur.

## Lot 11 — Footer

- [x] Footer : nom, « Développeuse Web | Intégratrice Dolibarr ERP/CRM », liens LinkedIn / GitHub / E-mail, copyright « © 2026 Ouattara Yah. Tous droits réservés. » (année dans `data/profile.ts`)
- [x] Liens non renseignés : affichés avec `[À RENSEIGNER]`, sans lien, comme dans la section Contact (mêmes helpers `SocialIcon` et `getSocialHref`)
- [x] Landmark `<footer>` unique, placé après `<main>` dans `app/page.tsx`
- [x] Tests : contenu et copyright vérifiés, aucun défilement horizontal de 320px à 1920px, console sans erreur, `tsc` sans erreur.

## Lot 12 — Dark Mode

- [x] Thème sombre dans `app/globals.css` : variables sémantiques redéfinies sous `.dark` (même identité : indigo clair, off-white, doré), `color-scheme` clair/sombre, variante Tailwind `dark:` déclarée. Les composants n'ont pas eu besoin d'être modifiés : tous utilisaient déjà les variables de palette (seul le point vert de disponibilité est une couleur fixe, lisible dans les deux thèmes).
- [x] Bouton de bascule `ThemeToggle` dans la navbar (desktop et mobile), libellé accessible qui change (« Passer en mode sombre / clair »). Il s'abonne à la classe `dark` de `<html>` (`useSyncExternalStore`) au lieu de dupliquer un état.
- [x] Préférence conservée dans `localStorage` (clé `theme`, `lib/theme.ts`). À défaut de préférence, le thème du système est suivi. Une préférence enregistrée l'emporte sur le système. Si le stockage est indisponible (navigation privée), le thème bascule quand même sans erreur.
- [x] Pas de flash au chargement : un petit script dans `<head>` (`app/layout.tsx`) applique le thème avant le premier affichage ; `suppressHydrationWarning` sur `<html>`.
- [x] Contraste corrigé : le doré pour le texte (`accent-text`) en thème clair passe de `#8a6a24` à `#846420` (4,39 → 4,78 sur le fond beige, sous le seuil de 4,5 auparavant). Toutes les paires de texte testées atteignent au moins 4,5 dans les deux thèmes.
- [x] Tests : bascule, mémorisation après rechargement et dans un nouvel onglet, thème système, priorité de la préférence enregistrée, stockage bloqué, 18 mesures de contraste, console sans erreur, rendu vérifié en captures (Hero et Projets en sombre), `tsc` sans erreur.

## Lot 13 — Responsive & animations

- [x] Animations discrètes (section 21), toutes conditionnées à `prefers-reduced-motion: no-preference` : entrée en cascade des éléments du Hero (CSS pur, `animate-hero`), apparition au défilement des sections (`Reveal`), défilement doux vers les ancres, survol des cartes (`Card`) et des boutons (déjà en place aux lots précédents).
- [x] `Reveal` : le contenu est visible par défaut (HTML serveur, JavaScript désactivé, animations réduites). Il n'est masqué que s'il est sous la ligne de flottaison, via l'attribut `data-reveal` que React ne gère pas : pas de re-rendu, pas de clignotement. Masquer est instantané ; seule l'apparition est animée. Intégré une seule fois dans `Section` (en-tête + contenu), donc toutes les sections en profitent sans duplication.
- [x] Aucune bibliothèque d'animation ajoutée (CSS + `IntersectionObserver`).
- [x] Tests : titre du Hero animé puis pleinement visible ; défilement doux actif ; lien « Contact » : la section arrive à 80px du haut, sous la navbar, contenu révélé ; après un défilement complet, plus aucun bloc masqué ; avec animations réduites : rien masqué, Hero statique, défilement instantané ; sans JavaScript : tout le contenu reste lisible ; mobile 375px ; aucun défilement horizontal de 320px à 1920px ; console sans erreur ; `tsc` sans erreur.
- [x] Note : `components/Hero.tsx` avait été reformaté en indentation à 4 espaces entre deux sessions (probablement par l'éditeur). Ce style a été conservé dans les modifications de ce lot.

## Lot 14 — SEO & performance

- [x] Métadonnées (`app/layout.tsx`) : title et description du cahier des charges (section 24) dans `data/seo.ts`, Open Graph (type, locale `fr_FR`, nom du site, titre, description), carte Twitter `summary_large_image`, auteur, `theme-color` clair / sombre (`viewport`).
- [x] Image de partage Open Graph générée au build (`app/opengraph-image.tsx`, 1200×630, palette du site) : aucun fichier binaire à maintenir. Next en dérive aussi l'image Twitter.
- [x] Icônes : `app/icon.svg` (monogramme « Y » indigo avec point doré), `app/apple-icon.tsx` (180×180 généré), `app/favicon.ico` (48×48) généré à partir du même SVG. Le favicon par défaut de Next.js a été remplacé.
- [x] `app/robots.ts` et `app/sitemap.ts`.
- [x] **Adresse publique du site (`SITE_URL`) à renseigner avant la mise en ligne** (voir `.env.example`, à copier en `.env.local` ; `lib/site.ts`). Tant qu'elle manque : sitemap vide, pas de lien canonique ni d'`og:url`, pas de ligne `Sitemap` dans robots.txt, et les URL absolues de l'image de partage retombent sur `localhost`. Vérifié avec une adresse de test : canonical, `og:url`, `og:image` absolue, `Sitemap:` et `<loc>` sont corrects. `.gitignore` : `.env.example` est désormais suivi par Git.
- [x] Performance : police Geist Mono supprimée (non utilisée), une seule police (Geist, via `next/font`) préchargée ; images via `next/image` (aucune balise `<img>` brute) ; seuls 4 composants sont clients (Navbar, ThemeToggle, ContactForm, Reveal) ; icônes allégées par l'import ciblé (7 icônes seulement côté navigateur) ; aucune bibliothèque d'animation. Build : 9 routes, toutes statiques.
- [x] Mesures (build de production) : HTML 199 Ko brut / 35 Ko gzip (dont 112 Ko de données de rendu serveur intégrées), CSS 6,3 Ko gzip, JavaScript 141 Ko gzip pour un navigateur moderne (socle React + Next.js ; le polyfill de 110 Ko n'est chargé que par les très vieux navigateurs).
- [x] Incident d'outillage : l'outil d'écriture a corrompu `app/icon.svg` (6 octets aléatoires), ce qui bloquait tout le site en développement. Fichier réécrit par PowerShell et contrôlé octet par octet ; favicon régénéré après coup. À retenir : vérifier les fichiers `.svg` après écriture.
- [x] Tests : `tsc` sans erreur ; `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, `/apple-icon`, `/icon.svg`, `/favicon.ico` répondent 200 ; image de partage et favicon contrôlés visuellement.

## Lot 15 — Tests & finalisation

- [x] **Audit complet sur le build de production** (`next build` puis `next start`), rejoué en entier après les dernières modifications : `tsc --noEmit --noUnusedLocals --noUnusedParameters` sans erreur, `eslint` sans erreur ni avertissement, build réussi (7 routes statiques : `/`, `/_not-found`, `/apple-icon`, `/icon.svg`, `/opengraph-image`, `/robots.txt`, `/sitemap.xml`).
- [x] Code : 0 `any`, 0 `console.*`, 0 `TODO`, 0 `@ts-ignore`, 0 `eslint-disable`, 0 balise `<img>` brute ; aucun composant, donnée ou helper importé nulle part. Seule dépendance ajoutée au gabarit : `react-icons`. Composants clients : Navbar, ThemeToggle, ContactForm, Reveal uniquement.
- [x] Navigateur (Edge piloté par script) : aucun défilement horizontal à 320, 375, 425, 768, 1024, 1440 et 1920px ; menu mobile et navbar desktop ; thèmes clair et sombre ; animations ; footer ; console sans erreur ni avertissement ni requête en échec.
- [x] Accessibilité (axe-core, règles WCAG 2.x A/AA et bonnes pratiques, thèmes clair et sombre, 375px et 1440px) : 0 violation. Un seul `h1`, 31 titres sans saut de niveau, aucun `id` dupliqué, toutes les ancres `#…` mènent à une section existante, `alt` partout, un seul `header`/`main`/`footer`, `lang="fr"`, liens externes en `noopener`. Clavier : le lien d'évitement est le premier arrêt, le focus est visible partout, pas de piège clavier. Limite : axe signale une vérification de contraste « non concluante » à 375px (une zone qu'il ne sait pas évaluer) ; les contrastes ont été mesurés à part au Lot 12.
- [x] Formulaire : 4 champs reliés à leur label ; formulaire vide → 4 erreurs et focus sur le premier champ invalide ; e-mail invalide → seul ce champ est refusé ; cas valide → message honnête, aucune requête d'envoi émise.
- [x] Routes SEO : `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, `/apple-icon`, `/icon.svg`, `/favicon.ico` répondent 200.
- [x] Critères d'acceptation (section 32) : sections présentes, responsive, menu mobile, Dark Mode, projets affichés, formulaire validé côté client, console propre, TypeScript propre, accès clavier, images via `next/image`, SEO de base, code propre, `decision.md` complet. Réserve : « les liens fonctionnent » n'est vrai que pour ceux renseignés (voir ci-dessous).

### Coordonnées et photo (ajoutées pendant le Lot 15, à la demande de l'utilisatrice)

- [x] `data/socials.ts` : e-mail, téléphone (`+225 07 89 16 47 08`, lien `tel:`), LinkedIn, GitHub renseignés. Le préfixe `+225` (Côte d'Ivoire) a été ajouté au numéro fourni sans indicatif. L'adresse LinkedIn a été nettoyée de son paramètre de suivi `?isSelfProfile=true`.
- [x] Nouveau type de coordonnée « phone » (`SocialLink`), icône `LuPhone`, lien `tel:` ; `opensInNewTab()` dans `lib/socials.ts` remplace la condition dupliquée dans `Contact` et `Footer` (e-mail et téléphone restent dans le même onglet, les sites externes s'ouvrent dans un nouvel onglet en `noopener noreferrer`).
- [x] Test dédié des liens de contact (href exact, nouvel onglet ou non, footer) : OK à 375px et 1440px.
- [x] Photo : `public/images/photo_hero.jpeg` (déposée par l'utilisatrice) est branchée via `profile.photo`. Nouveau champ optionnel `photoPosition` (`50% 70%`) pour recentrer sur le visage, car la partie haute de l'image est floue. Rendu vérifié en capture à 1440px.

### Reste à renseigner ou à décider (non bloquant)

- [ ] WhatsApp : toujours `[À RENSEIGNER]`. Si le numéro fourni est aussi sur WhatsApp : `https://wa.me/2250789164708`.
- [ ] CV : déposer le PDF dans `public/` puis renseigner `cvUrl` dans `data/profile.ts` (le bouton est actuellement affiché avec `[À RENSEIGNER]`).
- [ ] Projets : liens (site et GitHub) et captures d'aperçu de BudgetApp, Elegance Parfum et Dolibarr.
- [ ] Parcours : périodes des étapes autres que le baccalauréat 2019.
- [ ] Mise en ligne : renseigner `SITE_URL` (voir `.env.example`) pour le sitemap, le lien canonique et l'image de partage.
- [ ] Envoi des messages du formulaire : brancher un service d'e-mails (`components/ContactForm.tsx`, puis `CONTACT_SENDING_ENABLED = true`).
- [ ] Poste de travail : retirer `NODE_ENV=production` des variables d'environnement globales (risque d'ignorer les devDependencies à l'installation).
- [ ] Git : aucun commit effectué (décision de l'utilisatrice).

## Mises à jour après le Lot 15 (WhatsApp, CV, captures, lien BudgetApp)

- [x] **WhatsApp** (10/10/2026) : `https://wa.me/2250789164708`, affiché « +225 07 89 16 47 08 » (même numéro que le téléphone, indicatif `+225` ajouté). Plus aucun `[À RENSEIGNER]` dans Contact ni dans le footer.
- [x] **CV** (19/10/2026) : le PDF fourni (`CV_Ouattara_Yah_Developpeuse_Web.pdf`, 1 page, 302 424 octets) est copié dans `public/cv-ouattara-yah.pdf`, avec une empreinte SHA-256 identique à l'original. `cvUrl` vaut `"/cv-ouattara-yah.pdf"` dans `data/profile.ts` : le bouton « Télécharger mon CV » du Hero est actif (attribut `download`). Pour mettre le CV à jour, écraser ce fichier en gardant le même nom.
- [x] **Captures des projets** (19/10/2026) : `public/images/projects/budgetapp.png` (1344×630) et `public/images/projects/elegance-parfum.png` (1350×632), copiées depuis `Pictures\Screenshots` après vérification de l'empreinte SHA-256 (identiques aux images envoyées). Renseignées via `image` dans `data/projects.ts`.
- [x] Cadre d'aperçu de `components/Projects.tsx` : ratio `16/10` remplacé par `32/15` (ratio des captures) pour les afficher en entier, sans rognage. La carte Dolibarr garde son emplacement `[À RENSEIGNER]` au même gabarit : les 3 cartes restent alignées.
- [x] **Lien BudgetApp** : `projectUrl` = `https://budget-app-gestion-projet-final-j2r.vercel.app/`. Contrôlé le 19/10/2026 : HTTP 200, page « BudgetApp - Gérez votre budget simplement ». Le bouton « Voir le projet » s'ouvre dans un nouvel onglet (`noopener noreferrer`). Le GitHub de BudgetApp reste `[À RENSEIGNER]`.
- [x] Nettoyage : import `PLACEHOLDER` retiré de `data/socials.ts` et de `data/profile.ts` (devenu inutile).
- [x] Tests rejoués sur le build de production : `tsc --noEmit --noUnusedLocals --noUnusedParameters`, `eslint` et `next build` sans erreur ; aucun défilement horizontal de 320 à 1920px, menu, axe-core (0 violation, clair et sombre), thème, footer, formulaire, coordonnées de contact. Nouveau test « Projets et CV » à 375, 768 et 1440px : bouton CV (href, `download`, clic qui déclenche bien le téléchargement de `cv-ouattara-yah.pdf`), PDF servi en HTTP 200 `application/pdf` avec les 302 424 octets attendus, captures chargées avec leur `alt`, cadre à 2,133:1, cartes de même hauteur, lien BudgetApp, console sans erreur.
- [x] Note de test : un premier essai du test des cadres a échoué (2 px d'écart) à cause de mon script, qui mesurait l'intérieur du cadre de la carte Dolibarr sans sa bordure. Le site n'était pas en cause ; le script a été corrigé et relancé.
- [ ] Reste ouvert : lien du site Elegance Parfum, liens GitHub des trois projets, lien et capture Dolibarr, périodes du Parcours (le CV fourni contient des dates de formations et d'expériences qui pourraient les renseigner, à valider avec l'utilisatrice avant de les reprendre), `SITE_URL` pour la mise en ligne, service d'envoi d'e-mails du formulaire, `NODE_ENV=production` défini globalement sur le poste, aucun commit Git (décision de l'utilisatrice).
