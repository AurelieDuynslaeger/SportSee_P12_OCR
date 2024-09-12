<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="./src/assets/sportsee_logo.svg" alt="Logo" width="200">
  </a>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table des matières</summary>
  <ol>
    <li><a href="#a-propos-du-projet">À propos du projet</a></li>
    <li><a href="#technologies-utilisees">Technologies utilisées</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#utilisation">Utilisation</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## À propos du projet

**SportSee** est le projet 12/14 de ma formation OpenClassroom.

### Mission :
En tant que développeur chez **SportSee**, une startup spécialisée dans le coaching sportif, vous êtes chargé de développer une nouvelle version de la page profil utilisateur. Cette page permet aux utilisateurs de suivre des indicateurs tels que le nombre de sessions réalisées et les calories brûlées.

L'objectif principal est de créer un tableau de bord d'analytique sportif interactif en utilisant **React**, et d'afficher des graphiques et des diagrammes basés sur des données récupérées via une **API**.

### Particularités :
- **Documentation complète** avec un ReadMe, **JSDoc**, et des **PropTypes** pour une meilleure collaboration au sein de l'équipe.
- Intégration de plusieurs types de graphiques avec la librairie **Recharts**.

<img src="./src/assets/user_dashboard.png" alt="homepage" width="500">

## Technologies utilisées

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Recharts](https://img.shields.io/badge/Recharts-3182bd?style=for-the-badge&logo=recharts&logoColor=white)](https://recharts.org/)
[![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![JSDoc](https://img.shields.io/badge/JSDoc-FDCC0C?style=for-the-badge&logo=jsdoc&logoColor=white)](https://jsdoc.app/)

## Installation

### Étapes pour configurer le projet :

1. **Cloner le dépôt du projet** :
   ```bash
   git clone https://github.com/AurelieDuynslaeger/SportSee_P12_OCR.git
   ```

2. **Cloner le dépôt de l'API** et suivre le ReadMe pour démarrer le serveur backend :
   ```bash
   git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git
   ```

3. **Installer les dépendances du projet** :
   ```bash
   npm install
   ```

4. **Lancer l'application en mode développement** :
   ```bash
   npm run dev
   ```

### Gestion des données

Le projet utilise soit des **données mockées**, soit des **données API**. Une clé d'environnement est utilisée pour basculer entre ces deux sources de données.

- Créez un fichier `.env` à la racine du projet avec la clé suivante :
  ```bash
  VITE_USE_MOCK_DATA=false
  ```

- Cette clé sert de **toggle** pour choisir entre les données :
  - `false`: Utilise les données de l'API.
  - `true`: Utilise les données mockées.

## Utilisation

### Routes disponibles pour visualiser le tableau de bord

Deux routes sont disponibles pour visualiser les données des utilisateurs enregistrés dans l'API :

- `localhost:5173/user/12` : Affiche le tableau de bord de l'utilisateur avec l'ID 12.
- `localhost:5173/user/18` : Affiche le tableau de bord de l'utilisateur avec l'ID 18.

Ces deux utilisateurs contiennent des données mockées ou récupérées de l'API selon la configuration du fichier `.env`.

## Contact

Aurélie D. - [GitHub](https://github.com/AurelieDuynslaeger/)



