<script lang="ts">
  // Ce fichier englobe tous les articles

  import { type ArticleProps } from '$lib/server/articles';
  import authors from '$lib/data/authors.json';
  export let title: ArticleProps['title'];
  export let description: ArticleProps['description'];
  export let tags: ArticleProps['tags'];
  export let author: ArticleProps['author'];
  export let created: ArticleProps['created'];

  export let category: ArticleProps['category'];

  const author_data = author in authors ? authors[author as keyof typeof authors] : null;
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
