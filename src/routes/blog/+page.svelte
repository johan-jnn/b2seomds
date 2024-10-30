<script lang="ts">
  import app from "$lib/data/app.json";

  export let data;
  console.log(data.articles);
</script>

<h2>Découvrez nos articles</h2>

<p>Vous souhaitez en connaître plus sur l'agence {app.keyword} ?</p>
<p>Lisez notre série d'article écrit par nos rédacteurs professionels engagés par {app.keyword}.</p>

<ol>
  {#each data.articles as article (article.id)}
    <li id={article.id}>
      <a href={article.url}>{article.metadata.title}</a>
    </li>
  {/each}
</ol>
