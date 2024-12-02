<script lang="ts">
  // Ce fichier englobe tous les articles

  import { type ArticleProps, type Article as ArticleType } from '$lib/server/articles';
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

  function isSimilarArticle({ metadata }: ArticleType) {
    if (metadata.title === title) return false;
    return (
      metadata.category === category ||
      (metadata.tags?.filter((tag) => tags?.includes(tag)).length || 0) >= 1
    );
  }
  /**
   * A list of featured article (maximum 3)
   */
  const featured_articles = data.articles
    .filter(isSimilarArticle)
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
  <ul class="tags">
    {#each Object.entries( { Catégorie: category, 'Date de publication': new Date(created).toLocaleDateString(), Auteur: `${author_data?.first_name} ${author_data?.last_name}` } ) as [label, content] (label)}
      <li>
        <span class="label">{label}</span>
        <p>
          {content}
        </p>
      </li>
    {/each}
  </ul>
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

<style lang="scss">
  .tags {
    margin: 15px 0;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    list-style: none;

    > li {
      padding: 10px 20px;
      border: dashed 1px;
      border-radius: 999px;
      text-align: center;
      margin: 0;

      > span {
        font-size: 0.75em;
        opacity: 0.75;
        font-style: italic;
        margin-bottom: 0.25em;
        display: block;
      }
      > p {
        margin: 0;
      }
    }
  }
</style>
