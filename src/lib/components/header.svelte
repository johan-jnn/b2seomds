<header>
  <a href="/" title="Revenir sur la page d'accueil de b2seomds">
    <img src="/logo/logo_transp_75.webp" alt="Logo de l'agence web b2seomds" />
  </a>

  <nav>
    <ul>
      <li><a href="/">Homepage</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>

  <form action="/search" method="get">
    <button type="submit" title="Valider la recherche">🔍</button>
    <input type="search" name="q" id="query" placeholder="Rechercher sur notre site web" />
  </form>
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

    > nav {
      flex-grow: 1;
      > ul {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 15px;

        list-style: none;
        padding-right: 25px;
      }
    }
  }
</style>
