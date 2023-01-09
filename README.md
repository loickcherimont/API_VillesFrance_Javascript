# API_VillesFrance_Javascript :fr:

##  :information_source: Introduction
API récupérant les données sur la ville demandée par l'utilisateur.

## :wrench: Outils
- [API de Découpage Administratif](https://api.gouv.fr/documentation/api-geo)
- JavaScript
- Bootstrap 5.3 via liens CDN

## :inbox_tray: Installation
### Avec Terminal (Shell Bash) et Git 
1. Lancer votre terminal
2. Récupérer le projet dans votre espace de travail avec la commande suivante:
```bash
git clone https://github.com/loickcherimont/API_VillesFrance_Javascript
```
3. Entrer dans le dossier créer et lancer le projet avec les lignes suivantes:
```bash
cd API_VillesFrance_Javascript
start index.html
```
### Avec UI
1. Télécharger le projet en utilisant le bouton `Code` et le dézipper dans un espace de travail
2. Cliquer sur le dossier proposé et lancer le fichier `index.html`

## Améliorations et corrections
<!-- AVIS DE CHANGEMENT DE PROJET : Ne plus ajouter de tâches, les terminer! -->
### API en elle-même :gear:
- [x] Traiter les doublons (Saint-Denis), créer de nouvelles cartes d'informations pour chacun
- [ ] Si en France, afficher par défaut la ville de l'utilisateur

#### Prioritaires :warning:
- [x] Sécuriser l'API contre les malfaiteurs (Injection code, etc)
- [ ] Permettre à l'utilisateur d'entrer des valeurs sans accents

### Donnons lui du beau :sparkles:
- [ ] Formater l'affichage des **codes postaux**
- [x] Afficher message d'erreur si nom de ville non identifiée/vide
- [x] Rendre le formulaire case-insensitive
- [x] Préparer la requête avant soumission (trim, ...)
- [ ] Afficher les villes en grille (Flexbox) en gardant les résultats au-dessus

### Structurer le code
- [ ] Scinder la fonction `getCityInformations` en d'autres fonctions (trop de logiques!)

## :construction_worker: Développeur
[Loick Chérimont](https://github.com/loickcherimont)



