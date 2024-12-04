<header>
  <a href="/" title="Revenir sur la page d'accueil de b2seomds">
    <img
      src="/logo/logo_transp_512.webp"
      alt="Logo de l'agence web b2seomds"
      width="100%"
      height="100%"
    />
  </a>

  <nav>
    <ul>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/portfolio">Projets</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>

  <form action="/search" method="get">
    <button type="submit" class="default" title="Valider la recherche">🔍</button>
    <input type="search" name="q" id="query" required placeholder="Rechercher sur notre site web" />
  </form>
</header>

<style lang="scss">
  @use '$lib/scss/colors' as *;
  $header-height: 75px;

  :global(:root) {
    --scroll-padding: 10px;
    scroll-padding-top: calc($header-height + var(--scroll-padding));
  }

  header {
    position: sticky;
    top: 0;
    left: 0;
    height: $header-height;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5px 15px;
    backdrop-filter: blur(15px);

    z-index: 20;

    > a,
    img {
      height: 100% !important;
      width: unset !important;
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

    > form {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      > * {
        height: 75%;
        border: none;
        background-color: $interaction;
        color: $text;
        outline: none;
      }
      > button {
        aspect-ratio: 1 / 1;
        border-radius: 999px 0 0 999px;
        cursor: pointer;
      }

      @media screen and (max-width: 750px) {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 50%;
        @at-root :global(:root) {
          --scroll-padding: 40px;
        }

        > * {
          border-radius: 0 !important;
          height: 100% !important;
        }
        > input {
          width: 100%;
        }
      }
    }
  }
</style>
