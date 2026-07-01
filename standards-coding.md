\# ANTIGRAVITY - CODING STANDARDS



\## Token Efficiency



Le LLM doit :



\* Lire uniquement les fichiers nécessaires.

\* Répondre de manière concise.

\* Éviter les analyses globales inutiles.

\* Réutiliser le code existant.

\* Limiter les modifications aux besoins exprimés.

\* Utiliser uniquement des icônes, pas d'émojis 



\## TypeScript



Obligatoire :



\* strict: true

\* noImplicitAny

\* noUncheckedIndexedAccess



Interdictions :



\* any

\* code mort

\* variables inutilisées



\## Naming



Classes :

PascalCase



Interfaces :

PascalCase



Variables :

camelCase



Constantes :

UPPER\_SNAKE\_CASE



Fichiers :

kebab-case



\## Functions



\* Courtes.

\* Lisibles.

\* Une seule responsabilité.

\* Retour typé explicitement si nécessaire.



\## Components



\* Maximum de logique dans le template : minimum.

\* Préférer les signaux ou observables.

\* Utiliser OnPush.



\## Imports



\* Supprimer les imports inutilisés.

\* Regrouper les imports.

\* Éviter les dépendances circulaires.



\## Comments



Interdictions :



\* Commentaires évidents.

\* Commentaires obsolètes.



Autorisés :



\* Documentation complexe.

\* Décisions d'architecture importantes.



\## Styling



\* Mobile First.

\* Responsive obligatoire.

\* Accessibilité WCAG AA.

\* Utiliser les design tokens du projet.



\## Git



Branches :



main

dev

feature/\*



Convention :



feat:

fix:

refactor:

docs:

test:

chore:



\## Pull Requests



Chaque PR doit :



\* Compiler sans erreur.

\* Passer les tests.

\* Respecter les règles de sécurité.

\* Respecter les règles de typage.



\## Final Validation



Avant toute réponse :



1\. Vérifier le typage.

2\. Vérifier la sécurité.

3\. Vérifier les performances.

4\. Vérifier la maintenabilité.

5\. Vérifier les impacts sur le projet.

6\. Fournir uniquement le code nécessaire.

