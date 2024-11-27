# Challenge SEO

Référencement sur le mot-clef "b2seomds"

## TODO

- Ecrire et rajouter des articles
- Page `portfolio`

## Documentation

[Documentation Markdown](https://www.markdownguide.org/getting-started/)

[Documentation Sveltekit](https://svelte.dev/docs/kit/introduction)

[Documentation MDsveX](https://mdsvex.pngwn.io/docs)

### Créer un article

Rendez-vous dans le dossier `blog` (`/src/routes/blog`), et créez un dossier qui correspondra à l'url de l'article.
Dans ce dossier, créez un fichier ayant un des noms ci-dessous :

- `+page.md` (_Pas de support de composants_)
- `+page.svx` (_Pas de support d'ESLint_)

Cette page correspondra au contenu de l'article.
En en-tête de cette page pour pourrez inscrire les propriétés de l'article :

```yaml
---
propriété: valeur
liste:
  - val1
  - val2
  - val3
---
# Le contenu de l'article

Lorem ipsum dolor sit amet
```

Voici les valeurs à inscrire :

| clef        | optionnelle | type              | correspondance                                                                                                  |
| ----------- | ----------- | ----------------- | --------------------------------------------------------------------------------------------------------------- |
| title       | NON         | `string`          | Le titre de l'article                                                                                           |
| category    | NON         | `string`          | La catégorie de l'article                                                                                       |
| description | NON         | `string`          | Une courte description/résumé de l'article                                                                      |
| author      | NON         | `keyof: authors`  | Le nom de l'auteur de l'article. Prendre une des clefs du fichier `authors.json` (`/src/lib/data/authors.json`) |
| created     | NON         | `ANNEE-MOIS-JOUR` | La date de création de l'article en format _ISO8601_ (exemple: `2024-03-30`)                                    |
| tags        | OUI         | `string[]`        | Une liste de **mots**-clefs faisant écho au contenu de l'article                                                |

> D'autres clefs seront peut-être ajouté par la suite. Restez informé quand à cette documentation.

#### Contenu de base

Pour plus de simplicité, copiez-coller le code suivant avant de commencer à écrire les métadonnées et l'article :

```svx
---
title:
description:
category:
tags:
  -
  -
  -
author:
created:
---
```

### Contenu de l'article

Après avoir bien créer les `metadonnées` de l'article, il ne vous reste plus qu'à écrire le contenu de celui-ci.
Pour ce faire il vous suffit d'écrire au format markdown le contenu juste en dessous des métadonnées.
Ne pas inclure le titre de l'article au début du fichier car celui-ci sera automatiquement inséré.

```yaml
---
title: Mon titre
---
# Mon titre

Exemple à ne pas reproduire (dans la page finale il y aura 2 titres de niveau 1 ce qui n'est pas optimal en terme de SEO)
```

Pour insérer des images, 2 choix s'offrent à vous :

#### Image dans le même dossier que l'article

> Pour utiliser cette fonctionnalité, utilisez l'extension `.svx` (et non `.md`).

Déposez votre image dans le même dossier que votre `+page.svx`.
Dans votre fichier, copiez-coller le code suivant juste après les métadonnées de l'article :

```html
<script>
  import <nom> from "<source>"
</script>
```

A partir de ce code remplacez `<nom>` par un nom unique que vous donnerez à votre image, et `<source>` par le chemin d'accès de votre image.
Puis dans votre article utilisez l'image de la manière suivante :

```svx
<!-- ... -->

![Texte alternatif de l'image (alt)]({<nom>})

```

> N'oubliez pas de remplacer `<nom>` par le nom unique que vous avez donné à votre image

### Image à partir des assets

Dans le dossier `static` du projet (`/src/static`), créez un dossier portant le nom de votre article et insérez-y votre image.

Ensuite dans votre article vous pourrez importer votre image de la manière suivante :

```md
![Texte alternatif de l'image (alt)](/<dossier>/<nom_image>)
```

> N'oubliez pas de remplacer `<dossier>` par le nom du dossier que vous venez de créer et `<nom_image>` par le nom du fichier **en incluant l'extension** de votre image.
> Aussi, remarquez que l'url commence bien par `/` et non par `./` : cette règle est très importante et doit être respecté.
