# CAHIER DES CHARGES

## Création d'un portfolio professionnel — Ouattara Yah

**Version :** 1.0
**Date :** 06 octobre 2026
**Technologies principales :** Next.js, TypeScript, React, Tailwind CSS

---

# 1. PRÉSENTATION DU PROJET

## 1.1 Nom du projet

**Portfolio professionnel — Ouattara Yah**

## 1.2 Nature du projet

Création d'un portfolio personnel professionnel permettant de présenter le profil, les compétences, le parcours, les projets et les services de **Ouattara Yah**, développeuse web et intégratrice Dolibarr ERP/CRM.

Le portfolio devra être accessible depuis ordinateur, tablette et smartphone.

## 1.3 Objectif principal

Le site doit permettre à un visiteur de comprendre rapidement :

* qui est Ouattara Yah ;
* ce qu'elle fait ;
* quelles sont ses compétences ;
* quels projets elle a réalisés ;
* quel est son parcours ;
* quels services elle propose ;
* comment la contacter.

Le portfolio devra servir à la fois pour :

* les candidatures professionnelles ;
* les opportunités freelance ;
* la recherche de missions ;
* la prospection client ;
* le networking ;
* la présentation de projets ;
* le partage sur LinkedIn et GitHub.

---

# 2. POSITIONNEMENT PROFESSIONNEL

## 2.1 Profil

**Nom :**

Ouattara Yah

**Titre principal :**

> Développeuse Web | Intégratrice Dolibarr ERP/CRM

Le positionnement devra rester réaliste et crédible.

Le site ne devra pas présenter Ouattara Yah comme une développeuse senior ou comme une experte dans des technologies qu'elle ne maîtrise pas.

## 2.2 Positionnement souhaité

Le portfolio doit transmettre les valeurs suivantes :

* professionnalisme ;
* sérieux ;
* créativité ;
* curiosité ;
* apprentissage continu ;
* autonomie ;
* sens du détail ;
* intérêt pour les nouvelles technologies ;
* capacité à transformer une idée en solution concrète.

---

# 3. OBJECTIFS DU SITE

## Objectif 1 — Présenter le profil

Présenter clairement l'identité et le positionnement professionnel.

## Objectif 2 — Valoriser les compétences

Mettre en avant les technologies et domaines maîtrisés.

## Objectif 3 — Présenter les réalisations

Créer une vitrine permettant de consulter les projets réalisés.

## Objectif 4 — Faciliter le recrutement

Permettre à un recruteur de comprendre rapidement le profil.

## Objectif 5 — Faciliter la prospection

Présenter les services pouvant être proposés à des entreprises ou particuliers.

## Objectif 6 — Faciliter le contact

Rendre les coordonnées et les moyens de contact facilement accessibles.

---

# 4. PUBLIC CIBLE

Le portfolio s'adresse principalement à :

### Recruteurs

Entreprises recherchant une développeuse web junior ou un profil en développement logiciel.

### Entreprises / PME

Entreprises ayant besoin :

* d'un site web ;
* d'une application ;
* d'une présence numérique ;
* d'une solution ERP/CRM ;
* d'une intégration Dolibarr.

### Clients freelance

Entrepreneurs, commerçants, indépendants et petites entreprises souhaitant développer leur présence numérique.

### Professionnels du numérique

Développeurs, designers, agences et professionnels susceptibles de proposer des collaborations.

---

# 5. IDENTITÉ VISUELLE

## 5.1 Style général

Le design devra être :

* moderne ;
* minimaliste ;
* élégant ;
* professionnel ;
* premium ;
* responsive ;
* épuré ;
* technologique.

Le portfolio ne doit pas avoir l'apparence d'un template générique.

Il doit avoir une identité visuelle reconnaissable.

## 5.2 Palette de couleurs

Couleurs principales :

* blanc ;
* beige / off-white ;
* indigo / bleu profond ;
* gris neutre.

Couleur d'accent :

* doré discret.

Les couleurs doivent rester sobres.

## 5.3 Typographie

Utiliser une typographie moderne et lisible.

Suggestions :

* Geist ;
* Inter ;
* Manrope.

## 5.4 Style des composants

Les composants devront utiliser :

* bordures légères ;
* coins légèrement arrondis ;
* ombres très discrètes ;
* espaces généreux ;
* transitions fluides.

Éviter :

* les effets 3D excessifs ;
* les animations agressives ;
* les couleurs criardes ;
* les éléments visuels inutiles.

---

# 6. TECHNOLOGIES

Le projet devra utiliser :

* Next.js ;
* React ;
* TypeScript ;
* Tailwind CSS ;
* Lucide React ou React Icons ;
* Git ;
* GitHub.

Le projet devra utiliser **Next.js App Router**.

---

# 7. ARCHITECTURE TECHNIQUE

L'architecture devra être modulaire.

Structure recommandée :

```text
portfolio/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── ...
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Technologies.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Services.tsx
│   ├── AISection.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
│
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── technologies.ts
│
├── types/
│   └── index.ts
│
├── public/
│   └── images/
│
└── decision.md
```

Les composants devront être réutilisables.

Les données devront être séparées de la présentation lorsque cela est pertinent.

---

# 8. ARBORESCENCE DU SITE

Le site sera constitué des sections suivantes :

1. Navbar
2. Hero
3. À propos
4. Compétences
5. Technologies
6. Projets
7. Parcours
8. Services
9. Intelligence artificielle
10. Contact
11. Footer

---

# 9. NAVBAR

## Objectif

Permettre au visiteur de naviguer facilement dans le portfolio.

## Contenu

Logo ou nom :

**Ouattara Yah**

ou :

**YAH.**

Liens :

* Accueil
* À propos
* Compétences
* Projets
* Parcours
* Services
* Contact

CTA :

**Me contacter**

## Responsive

Sur mobile :

* afficher un bouton hamburger ;
* ouvrir un menu mobile ;
* permettre la navigation vers les différentes sections ;
* fermer le menu après sélection.

La navbar pourra être sticky.

---

# 10. HERO

## Objectif

Présenter immédiatement le profil professionnel.

## Contenu

Badge :

**Disponible pour des opportunités**

Titre :

> Je transforme des idées en expériences web modernes.

Mettre en évidence :

**Développeuse Web**

Description :

> Je conçois et développe des interfaces web modernes, responsives et fonctionnelles avec les technologies JavaScript modernes. J'aime transformer une idée en produit concret tout en continuant à apprendre et à évoluer.

CTA :

**Voir mes projets**

**Me contacter**

CTA secondaire :

**Télécharger mon CV**

## Image

Prévoir une photo professionnelle :

```text
/public/images/profile.jpg
```

La photo devra être présentée de manière élégante sans être déformée.

---

# 11. SECTION À PROPOS

## Objectif

Présenter le parcours et la personnalité professionnelle.

Le contenu devra expliquer le passage :

**Géographie → numérique → développement web**

Présenter notamment :

* formation initiale en Géographie ;
* Licence à l'Université Alassane Ouattara ;
* formation DigiFemmes ;
* formation actuelle à GoMyCode ;
* développement logiciel ;
* compétences en IA ;
* intérêt pour le développement web ;
* parcours autour de Dolibarr ERP/CRM.

Le texte devra être authentique, professionnel et relativement court.

---

# 12. SECTION COMPÉTENCES

Créer des catégories.

## Frontend

* HTML
* CSS
* Tailwind CSS
* Bootstrap
* JavaScript
* TypeScript
* React
* Next.js

## Backend

* Node.js
* Express.js
* API REST

## Bases de données

* MongoDB
* Mongoose
* Firebase
* IndexedDB

## Outils

* Git
* GitHub
* Postman

## ERP / CRM

**Dolibarr ERP/CRM**

Cette compétence devra être particulièrement visible.

---

# 13. SECTION TECHNOLOGIES

Présenter les technologies sous forme de cartes ou badges.

Technologies :

* HTML
* CSS
* Tailwind CSS
* JavaScript
* TypeScript
* React
* Next.js
* Node.js
* Express
* MongoDB
* Firebase
* Git
* GitHub
* Dolibarr

Utiliser des icônes lorsque cela est pertinent.

---

# 14. SECTION PROJETS

## Objectif

Présenter les réalisations de manière visuelle et professionnelle.

Chaque projet devra contenir :

* image ;
* nom ;
* description ;
* technologies ;
* lien vers le projet ;
* lien GitHub si disponible.

## Projet 1 — BudgetApp

### Description

Application de gestion de budget permettant de gérer les budgets et les transactions.

### Technologies

* Next.js
* TypeScript
* React
* Tailwind CSS
* Firebase / IndexedDB selon la version finale.

---

## Projet 2 — Elegance Parfum

### Description

Site vitrine professionnel pour une marque de parfum située à Abidjan-Koumassi.

### Technologies

* HTML
* CSS
* responsive design.

---

## Projet 3 — Dolibarr

Présenter les compétences et réalisations liées à :

**Dolibarr ERP/CRM**

Notamment :

* intégration ;
* configuration ;
* personnalisation ;
* digitalisation ;
* accompagnement utilisateur.

---

# 15. SECTION PARCOURS

Créer une timeline verticale.

### 2019

**Baccalauréat**

### Université Alassane Ouattara

**Licence en Géographie**

### DigiFemmes Academy

Formation numérique et développement de compétences web.

### GoMyCode

**Bootcamp Développement Logiciel avec compétences en IA**

Technologies étudiées :

HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, ES6, React, TypeScript, Node.js, Next.js, Express, MongoDB, Mongoose, API REST, GitHub, Postman et Firebase.

### Dolibarr

Formation et montée en compétences dans l'intégration Dolibarr ERP/CRM.

---

# 16. SECTION SERVICES

Titre :

**Ce que je peux vous aider à réaliser**

Créer les services suivants :

### Développement Web

Création d'interfaces et applications web modernes.

### Sites vitrines

Création de sites professionnels responsives.

### Intégration Dolibarr

Installation, configuration, personnalisation et accompagnement.

### Intégration Frontend

Transformation de maquettes ou idées en interfaces web.

### Maintenance

Correction et amélioration de projets web existants.

---

# 17. SECTION INTELLIGENCE ARTIFICIELLE

## Objectif

Montrer l'intégration progressive de l'IA dans le workflow de développement.

Titre :

**Le développement web à l'ère de l'IA**

Présenter l'IA comme un outil permettant notamment :

* d'apprendre ;
* d'explorer ;
* de prototyper ;
* d'accélérer certaines tâches ;
* d'améliorer le workflow.

Outils pouvant être mentionnés :

* ChatGPT / Codex ;
* Claude ;
* Gemini ;
* Cursor ;
* Antigravity ;
* Google AI Studio ;
* DeepSeek ;
* Lovable ;
* Manus.

**Important :**

Ces outils ne doivent pas être présentés comme des langages ou frameworks maîtrisés.

---

# 18. SECTION CONTACT

## Titre

**Construisons quelque chose ensemble.**

## Texte

> Vous avez un projet, une opportunité ou simplement envie d'échanger ? N'hésitez pas à me contacter.

## Informations

Prévoir :

* email ;
* LinkedIn ;
* GitHub ;
* WhatsApp si souhaité.

## Formulaire

Champs :

* Nom ;
* Email ;
* Sujet ;
* Message.

Bouton :

**Envoyer**

Prévoir une validation côté client.

L'intégration d'un service d'envoi d'email pourra être réalisée ultérieurement.

---

# 19. FOOTER

Contenu :

**Ouattara Yah**

**Développeuse Web | Intégratrice Dolibarr ERP/CRM**

Liens :

* LinkedIn ;
* GitHub ;
* Email.

Copyright :

> © 2026 Ouattara Yah. Tous droits réservés.

---

# 20. RESPONSIVE DESIGN

Le site doit fonctionner correctement sur :

* 320px ;
* 375px ;
* 425px ;
* 768px ;
* 1024px ;
* 1440px ;
* 1920px.

Il ne doit y avoir aucune barre de défilement horizontale.

Les éléments doivent s'adapter automatiquement à la taille de l'écran.

---

# 21. ANIMATIONS

Utiliser des animations discrètes :

* apparition au scroll ;
* hover des cartes ;
* transitions des boutons ;
* animation légère des éléments du Hero ;
* smooth scrolling.

Les animations ne doivent jamais nuire à la lisibilité ou aux performances.

---

# 22. DARK MODE

Prévoir un mode sombre.

Le changement de thème devra être accessible depuis la navbar.

La préférence de l'utilisateur devra être conservée.

Le Dark Mode devra respecter la même identité visuelle.

---

# 23. ACCESSIBILITÉ

Respecter :

* HTML sémantique ;
* attributs `alt` ;
* labels de formulaires ;
* navigation clavier ;
* contraste suffisant ;
* focus visible ;
* boutons accessibles.

---

# 24. SEO

Configurer :

* title ;
* description ;
* Open Graph ;
* favicon ;
* metadata ;
* sitemap ;
* robots.txt si nécessaire.

### Title

**Ouattara Yah | Développeuse Web & Intégratrice Dolibarr**

### Description

> Portfolio professionnel de Ouattara Yah, développeuse web spécialisée dans la création d'expériences web modernes et l'intégration Dolibarr ERP/CRM.

---

# 25. PERFORMANCE

Optimiser :

* images avec `next/image` ;
* chargement des images ;
* polices ;
* composants ;
* JavaScript ;
* performances mobiles.

Éviter les dépendances inutiles.

---

# 26. DONNÉES MODIFIABLES

Prévoir des fichiers de données permettant de modifier facilement :

* projets ;
* technologies ;
* compétences ;
* services ;
* réseaux sociaux ;
* informations personnelles.

L'objectif est de pouvoir mettre à jour le portfolio sans modifier plusieurs composants.

---

# 27. RÈGLES DE DÉVELOPPEMENT

Le code doit être :

* propre ;
* maintenable ;
* modulaire ;
* fortement typé ;
* réutilisable.

Éviter :

* `any` inutile ;
* duplication ;
* composants trop volumineux ;
* code mort ;
* dépendances inutiles ;
* mauvaises pratiques React.

---

# 28. GESTION DU PROJET PAR LOTS

Le développement devra obligatoirement être réalisé progressivement.

## LOT 1 — Initialisation

* création du projet Next.js ;
* configuration TypeScript ;
* configuration Tailwind ;
* architecture ;
* Git ;
* fichier `decision.md`.

## LOT 2 — Navbar

Développement de la navbar desktop et mobile.

## LOT 3 — Hero

Création de la section Hero.

## LOT 4 — À propos

Création de la section About.

## LOT 5 — Compétences & technologies

Création des sections Skills et Technologies.

## LOT 6 — Projets

Création du système de présentation des projets.

## LOT 7 — Parcours

Création de la timeline.

## LOT 8 — Services

Création de la section Services.

## LOT 9 — Intelligence artificielle

Création de la section IA.

## LOT 10 — Contact

Création de la section Contact et du formulaire.

## LOT 11 — Footer

Création du footer.

## LOT 12 — Dark Mode

Implémentation du thème sombre.

## LOT 13 — Responsive & animations

Optimisation de l'expérience mobile et ajout des animations.

## LOT 14 — SEO & performance

Optimisation SEO et performances.

## LOT 15 — Tests & finalisation

Audit complet du portfolio.

---

# 29. FICHIER DE SUIVI — DECISION.MD

Créer un fichier :

```text
decision.md
```

Ce fichier servira de journal de bord du projet.

Après chaque lot terminé, ajouter les décisions et tâches réalisées.

Exemple :

```md
# DECISIONS DU PROJET

## Lot 1 — Initialisation

- [x] Projet Next.js créé
- [x] TypeScript configuré
- [x] Tailwind CSS configuré
- [x] Architecture créée
- [x] Git initialisé

## Lot 2 — Navbar

- [x] Navbar desktop
- [x] Navbar mobile
- [x] CTA ajouté
```

Ne jamais supprimer les anciennes décisions.

---

# 30. RÈGLE DE VALIDATION DES LOTS

Après chaque lot, le développeur devra :

1. développer uniquement les éléments du lot ;
2. vérifier que le projet compile ;
3. corriger les erreurs ;
4. tester le rendu ;
5. vérifier le responsive lorsque pertinent ;
6. mettre à jour `decision.md` ;
7. présenter brièvement le travail effectué ;
8. s'arrêter.

**Ne jamais commencer automatiquement le lot suivant.**

Le lot suivant ne pourra commencer qu'après validation explicite.

---

# 31. RÈGLES IMPORTANTES

## Ne pas inventer de données

Ne jamais inventer :

* clients ;
* entreprises ;
* diplômes ;
* certifications ;
* statistiques ;
* années d'expérience ;
* projets ;
* compétences.

Lorsqu'une information manque, utiliser :

```text
[À RENSEIGNER]
```

## Ne pas surcharger le design

Le portfolio doit rester :

**simple + professionnel + élégant + moderne.**

## Priorité à l'utilisateur

Le visiteur doit pouvoir comprendre le profil en quelques secondes.

Les CTA principaux doivent rester facilement accessibles :

**Voir mes projets**

**Me contacter**

---

# 32. CRITÈRES D'ACCEPTATION

Le projet sera considéré comme terminé lorsque :

* [ ] toutes les sections sont présentes ;
* [ ] le site est responsive ;
* [ ] le menu mobile fonctionne ;
* [ ] le Dark Mode fonctionne ;
* [ ] les projets sont affichés correctement ;
* [ ] les liens fonctionnent ;
* [ ] le formulaire est validé côté client ;
* [ ] aucune erreur importante n'apparaît dans la console ;
* [ ] TypeScript ne présente pas d'erreurs ;
* [ ] le site est accessible au clavier ;
* [ ] les images sont optimisées ;
* [ ] le SEO de base est configuré ;
* [ ] le code est propre et maintenable ;
* [ ] `decision.md` contient l'historique complet du projet.

---

# 33. PREMIÈRE MISSION

Commencer uniquement par :

## LOT 1 — INITIALISATION

Ne pas développer les sections du portfolio pour le moment.

La première mission consiste uniquement à :

1. créer le projet Next.js ;
2. configurer TypeScript ;
3. configurer Tailwind CSS ;
4. créer l'architecture de dossiers ;
5. créer les fichiers de base ;
6. initialiser Git ;
7. créer `decision.md` ;
8. vérifier que le projet démarre correctement.

Une fois le Lot 1 terminé :

* vérifier le projet ;
* corriger les éventuelles erreurs ;
* mettre à jour `decision.md` ;
* expliquer brièvement ce qui a été réalisé ;
* attendre la validation avant de commencer le **Lot 2 — Navbar**.

**Ne pas anticiper les lots suivants.**
