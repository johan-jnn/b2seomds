<script lang="ts">
  import type { ArticleProps } from '$lib/server/articles';

  export let data: ArticleProps;
  export let url: string;
</script>

<article>
  <a href={url}>
    <h3>{data.title}</h3>
    <p>{data.description}</p>
    <footer>
      <p>Publié le {new Date(data.created).toLocaleDateString()}</p>
      <hr />
      <p>Publié par {data.author}</p>
    </footer>
  </a>
</article>
