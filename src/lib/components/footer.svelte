<footer>
  <h2>Retrouvez <b>b2seomds</b> sur vos réseaux sociaux</h2>

  <ul>
    <li>
      <a href="https://www.instagram.com/b2seomds" target="_blank">
        Instagram de b2seomds <img
          src="/imgs/instagram.svg"
          alt="Logo du réseau social Instagram"
        />
      </a>
    </li>

    <li>
      <a href="https://x.com/b2seomds" target="_blank">
        X de b2seomds<img src="/imgs/x.svg" alt="Logo du forum Twitter (X)" />
      </a>
    </li>
  </ul>

  <a href="/blog">Découvrez les blogs de <strong>b2seomds</strong> juste ici !</a>
  <a href="/mentions">Mentions légales et informations sur le site</a>
</footer>

<style lang="scss">
  ul {
    list-style: none;
  }

  footer {
    border-top: 1px solid white;
    padding: 30px;

    h2 {
      text-align: center;
    }

    ul {
      margin: 50px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30%;

      img {
        width: 60px;
        height: 60px;
        object-fit: cover;
      }

      li {
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 20px;
        }
      }
    }

    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 10px 0;
    }
  }
</style>
