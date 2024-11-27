<script lang="ts">
  // Ce fichier englobe tous les articles

  import { type ArticleProps } from '$lib/server/articles';
  import authors from '$lib/data/authors.json';
  import type { PageData } from '../../routes/$types';
  import Article from './article.svelte';
  export let title: ArticleProps['title'];
  export let description: ArticleProps['description'];
  export let tags: ArticleProps['tags'];
  export let author: ArticleProps['author'];
  export let created: ArticleProps['created'];

  export let category: ArticleProps['category'];

  const author_data = author in authors ? authors[author as keyof typeof authors] : null;
  export let data: PageData;

  /**
   * A list of featured article (maximum 3)
   */
  const featured_articles = data.articles
    .filter((article) => article.metadata.title !== title)
    .sort(() => Math.random() - 0.5)
    .slice(undefined, 3);
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:type" content="article" />

  <meta property="article:section" content={category} />
  <meta property="article:published_time" content={created} />

  {#if tags}
    {#each tags as tag}
      <meta property="article:tag" content={tag} />
    {/each}
  {/if}
  {#if author_data}
    {@const { first_name, gender, last_name, username } = author_data}
    <meta property="article:author" content={username} />

    <meta property="profile:first_name" content={first_name} />
    <meta property="profile:last_name" content={last_name} />
    <meta property="profile:username" content={username} />
    <meta property="profile:gender" content={gender} />
  {/if}
</svelte:head>

<header>
  <h1>{title}</h1>
</header>

<article>
  <slot />
</article>

<!-- Le [if] ci-dessous ne devrait normalement jamais être faux, mais on ne sait jamais -->
{#if featured_articles.length}
  <footer>
    <h2>Envie de lire d'autres articles ?</h2>
    <p>N'hésitez pas à lire notre sélection d'articles qui pourrait sûrement vous intéresser :</p>
    <ul>
      {#each featured_articles as article (article.id)}
        <li id={article.id}>
          <Article data={article.metadata} url={article.url} />
        </li>
      {/each}
    </ul>
  </footer>
{/if}
