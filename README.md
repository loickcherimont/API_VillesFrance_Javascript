# API_VillesFrance_Javascript :fr:

<!-- replace this sample image by an app screenshot -->
![MainImageForProject](https://placehold.co/500x300)


## :information_source: A propos  

API cherchant les villes de France grâce à un formulaire  
Objectif : Travailler Javascript avec les API.


## :wrench: Outils de développement
- [API de Découpage Administratif](https://api.gouv.fr/documentation/api-geo)
- Javascript
- Bootstrap 5.3.0 (CDN)

### Prérequis

Lancer un projet via un serveur sinon erreur CORS pour l'API
<!-- explain with more details the line above -->


## :inbox_tray: Installation
### Avec Terminal (Shell Bash) et Git 
1. Lancer votre terminal
2. Récupérer le projet dans votre espace de travail avec la commande suivante:
```bash
git clone https://github.com/loickcherimont/API_VillesFrance_Javascript
```
3. Entrer dans le dossier, créer et lancer le projet avec les lignes suivantes:
```bash
cd API_VillesFrance_Javascript
start index.html
```
### Avec UI
1. Télécharger le projet en utilisant le bouton `Code` et le dézipper dans un espace de travail
2. Cliquer sur le dossier proposé et lancer le fichier `index.html`


### Comment marche -t-elle?

1. Entrer le nom d'une ville de France

> Ex: Paris (peu importe si majuscule ou minuscule)

2. Appuyer sur le bouton de **Recherche**

3. L'application renvoit une ou plusieurs cartes sur la ville recherchée avec quelques informations

<!-- replace this sample image by an app screenshot -->
![ExpectResultsAfterSetup](https://placehold.co/300x200)


## :rocket: A venir
- Régler le soucis CORS !
- Adapter l'application aux plus petits écrans : tél, tablette, ordi portable

<!-- 
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


 -->


## :key: Propriétaire

Créé par Loïck CHERIMONT  

Sous Licence MIT  

Dernière édition : 2024-07-25
