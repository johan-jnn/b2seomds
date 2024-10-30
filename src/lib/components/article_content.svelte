<script lang="ts">
  // Ce fichier englobe tous les articles

  export let title: string;
  export let description: string;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description}>
</svelte:head>

<header>
  <h1>{title}</h1>
</header>

<article>
  <slot />
</article>
