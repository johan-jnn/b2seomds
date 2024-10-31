<script lang="ts">
  import app from '$lib/data/app.json';
</script>

<header>
  <a href="/" title="Revenir sur la page d'accueil de {app.keyword}">
    <img src="/logo_transp.webp" alt="Logo de l'agence web {app.keyword}" />
  </a>

  <nav>
    <ul>
      <li><a href="/">Homepage</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>

<style lang="scss">
  header {
    position: sticky;
    top: 0;
    left: 0;
    height: 75px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5px 15px;
    backdrop-filter: blur(15px);

    > a,
    img {
      height: 100%;
    }
  }
</style>
