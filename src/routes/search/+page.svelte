<script lang="ts">
  import { page } from '$app/stores';
  import Article from '$lib/components/article.svelte';
  export let data;
</script>

<h1>Résultat de recherche pour <strong>{$page.url.searchParams.get('q')}</strong> :</h1>

<ul>
  {#each data.articles.sort(() => Math.random() - 0.5) as article}
    <li id={article.id}>
      <Article data={article.metadata} url={article.url} />
    </li>
  {/each}
</ul>
