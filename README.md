# Algérie Poste — Système d'Analyse Comptable & Réseau (Wilaya de Blida)

Application web professionnelle de gestion administrative et comptable développée sur mesure selon les maquettes de référence d'Algérie Poste.

---

## 🚀 Technologies Utilisées

- **Frontend Framework** : React 18 / 19 avec TypeScript
- **Bundler & Build Tool** : Vite
- **Design System & Styling** : Tailwind CSS v3 avec palettes de couleurs officielles d'Algérie Poste
- **Iconographie** : Lucide React (icônes professionnelles vectorielles)
- **Visualisations & Graphiques** : Recharts (courbes multi-séries, barres horizontales, jauges de classement)
- **Traitement & Export Excel** : SheetJS (xlsx) pour exports réels et analyse des fichiers reçus
- **Persistance** : LocalStorage et modèles de données modulaires

---

## 📁 Structure du Projet

```
AlgPost/
├── public/
│   ├── logo-white.png        # Logo officiel monochrome Algérie Poste
│   └── favicon.ico
│
├── src/
│   ├── assets/               # Ressources statiques
│   ├── components/
│   │   ├── common/           # Composants réutilisables (Badge, Button, Card, Input, Table, Pagination)
│   │   └── layout/           # Barre de navigation officielle (Navbar) et Gabarit global (MainLayout)
│   │
│   ├── constants/            # Données initiales et statistiques réalistes de la wilaya de Blida
│   │   └── mockData.ts
│   │
│   ├── context/              # État global réactif (Utilisateur, Rôles, Fichiers, Bureaux, Import)
│   │   └── AppContext.tsx
│   │
│   ├── pages/
│   │   ├── auth/             # Connexion (Login), Inscription (Register), Mot de passe oublié
│   │   ├── dashboard/        # Tableau de bord principal (KPI, graphiques 7j, alertes, classement)
│   │   ├── statistiques/     # Statistiques et comparaisons multi-bureaux, lecture rapide
│   │   ├── import/           # Zone glisser-déposer, validation comptable, historique
│   │   ├── fichiers/         # Fichiers comptables & Vue détaillée des opérations groupées
│   │   ├── operations/       # Moteur de recherche d'opérations par bureau et plage de dates
│   │   ├── bureaux/          # Répertoire des 100 bureaux de Blida, CRUD complet et désactivation
│   │   ├── qualite/          # Audit de conformité, retards et gestion des doublons
│   │   └── utilisateurs/     # Gestion des rôles RBAC (Administrateur, Directeur, Analyste, Agent)
│   │
│   ├── services/
│   │   ├── excelService.ts   # Génération et lecture réelle de fichiers Excel (.xlsx / .csv)
│   │   └── storageService.ts # Persistance locale automatique
│   │
│   ├── types/                # Types TypeScript stricts
│   │   └── index.ts
│   │
│   ├── App.tsx               # Routeur de l'application
│   ├── main.tsx              # Point d'entrée React
│   └── index.css             # Styles de base et utilitaires Tailwind
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

---

## 🖥️ Pages & Fonctionnalités Réalisées

1. **Authentification & Sécurité**
   - Page de connexion fidèle avec arrière-plan futuriste réseau et widgets translucides (matching screenshot).
   - Accès rapide en 1 clic pour tester les 4 profils de démonstration (Administrateur, Directeur, Analyste, Agent de bureau).
   - Page d'inscription et récupération de mot de passe.

2. **Tableau de bord (Wilaya de Blida)**
   - 4 cartes KPI principales (Bureaux actifs, Fichiers reçus jour J, Opérations, Montant total en Md DA).
   - Bannière des retards à rattraper (6 fichiers anciens).
   - Graphique linéaire interactif des opérations par jour.
   - Bloc alertes avec redirection vers le module de conformité.
   - Classement des bureaux sur 7 jours avec barres horizontales proportionnelles et codes couleurs.

3. **Statistiques et Comparaison**
   - Filtres temporels (7 jours, 30 jours, Ce mois, Personnalisée).
   - Comparaison multi-lignes interactive entre bureaux (Blida RP, Boufarik RP, Meftah, etc.).
   - Totaux de période et analyse par "Lecture rapide" des tendances clés.
   - Tableau détaillé avec calcul d'écart à la moyenne.
   - Exportation directe en Excel.

4. **Import des fichiers comptables**
   - Zone Drag & Drop pour fichiers Excel (.xlsx).
   - File d'attente avec détection d'erreurs (dates décalées, bureaux inconnus, doublons).
   - Validation en lot et intégration immédiate dans la base de données.
   - Rapport des anomalies exportable en CSV / Excel.
   - Historique des imports avec filtres (Jour J, Anciens fichiers).

5. **Fichiers & Contenu du Fichier**
   - Liste des fichiers avec recherche par code bureau (ex: `09000`) et filtres de dates.
   - Vue détaillée du contenu comptable avec regroupement par sections :
     - *Chèques postaux, Encaissements conventionnés, Opérations monétiques, Mandats, CNEP, Divers*.
   - Option pour masquer les opérations à zéro et téléchargement du fichier Excel réel.

6. **Recherche par Opération**
   - Retrouver une opération (ex: *Retrait espèces*) à travers tous les bureaux.
   - Synthèse chiffrée : Total opérations, Montant global (M DA), Bureaux concernés.
   - Découpage par bureau avec jours actifs et moyenne journalière.
   - Export Excel disponible.

7. **Gestion des Bureaux**
   - Répertoire complet des bureaux de la wilaya de Blida.
   - Formulaire d'ajout et de modification (Code postal, code comptable, nom, wilaya, CCP).
   - Confirmation de suppression sécurisée avec recommandation de désactivation pour préserver l'historique comptable.

8. **Gestion des Utilisateurs & Rôles (RBAC)**
   - Cartes explicatives des permissions pour chaque rôle :
     - *Administrateur, Directeur, Analyste, Agent de bureau*.
   - Création, modification et attribution des bureaux.

9. **Qualité & Contrôle Réseau**
   - Tableau de bord de conformité pour le suivi des retards, des doublons et des régularisations.

---

## 🏃 Comment Lancer l'Application en Local

1. Ouvrez un terminal dans le dossier du projet :
   ```bash
   cd c:\Users\LENOVO\Desktop\AlgPost
   ```
2. Installez les dépendances (si ce n'est pas déjà fait) :
   ```bash
   npm install
   ```
3. Démarrez le serveur de développement Vite :
   ```bash
   npm run dev
   ```
4. Ouvrez l'URL affichée (par exemple `http://localhost:5173`) dans votre navigateur.

Pour générer le build de production :
```bash
npm run build
```

---

## 🔌 Intégration Backend (Prochaines Étapes)

L'architecture est entièrement préparée pour le raccordement à une API REST ou GraphQL :
- Remplacez les méthodes de `storageService.ts` par des appels `fetch` ou `axios` vers vos endpoints (ex: `/api/bureaux`, `/api/fichiers`, `/api/auth/login`).
- Tous les types TypeScript dans `src/types/index.ts` sont prêts à être réutilisés pour les DTOs backend.
