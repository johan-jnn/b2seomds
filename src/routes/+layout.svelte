<script lang="ts">
  import Footer from '$lib/components/footer.svelte';
  import Header from '$lib/components/header.svelte';
  import '$lib/scss/app.scss';
</script>

<svelte:head>
  <link
    rel="preload"
    as="font"
    href="/fonts/notosans_variable.woff2"
    type="font/ttf"
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    as="font"
    href="/fonts/notosans_variable_italic.woff2"
    type="font/ttf"
    crossorigin="anonymous"
  />
  <meta property="og:site_name" content="b2seomds" />
</svelte:head>

<Header />

<main>
  <slot />
</main>

<Footer />
