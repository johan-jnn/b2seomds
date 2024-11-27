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

<style lang="scss">
  @use '$lib/scss/colors' as *;

  article {
    border: 1px dashed $secondary;
    border-radius: 15px;
    transition: 0.25s;

    > a {
      display: block;
      padding: 10px;
      text-decoration: none;
      > h3 {
        font-size: 20px;
      }

      > footer {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        gap: 15px;
        font-size: 0.75em;

        > hr {
          margin: 0;
        }
      }
    }

    &:hover {
      background-color: $interaction;
      box-shadow: 0 4px 15px rgba($interaction, 0.75);
    }
  }
</style>
