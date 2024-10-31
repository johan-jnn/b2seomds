<footer>
  <h2>Retrouvez <b>b2seomds</b> sur vos réseaux sociaux</h2>

  <ul>
    <li>
      <a href="https://www.instagram.com/b2seomds?igsh=bDZkNmkwbGNwdjh3">
        Instagram de b2seomds <img src="/imgs/instagram.webp" alt="Instagram de b2seomds" />
      </a>
    </li>

    <li>
      <a href="https://x.com/b2seomds?s=21">
        Twitter de b2seomds<img src="/imgs/twitter.webp" alt="Twitter de b2seomds" />
      </a>
    </li>
  </ul>

  <a class="blog" href="/blog">Découvrez les blogs <b>b2seomds</b> juste ici !</a>
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

    .blog {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
</style>
