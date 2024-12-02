<script lang="ts">
  import { page } from '$app/stores';
  import Article from '$lib/components/article.svelte';
  export let data;
</script>

<svelte:head>
  <title>b2seomds - Résultat de la recherche</title>
  <meta
    name="description"
    content="Résultat de la recherche '{$page.url.searchParams.get(
      'q'
    )}' sur la base de donnée de notre agence web b2seomds."
  />
</svelte:head>

<h1>Résultat de recherche pour <strong>{$page.url.searchParams.get('q')}</strong> :</h1>
<h2>
  Retrouvez le résultat de votre recherche sur la base de données de notre agence web <strong
    >b2seomds</strong
  > ci-dessous.
</h2>

<ul>
  {#each data.found as article}
    <li id={article.id}>
      <Article data={article.metadata} url={article.url} />
    </li>
  {/each}
</ul>
