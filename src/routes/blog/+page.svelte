<script lang="ts">
  export let data;
  console.log(data.articles);
</script>

<h2>Découvrez nos articles</h2>

<p>Vous souhaitez en connaître plus sur l'agence b2seomds ?</p>
<p>
  Lisez notre série d'article écrit par nos rédacteurs professionels engagés par b2seomds.
</p>

<ol>
  {#each data.articles as article (article.id)}
    <li id={article.id}>
      <a href={article.url}>{article.metadata.title}</a>
    </li>
  {/each}
</ol>
