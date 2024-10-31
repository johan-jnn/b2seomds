<footer>
  <h2>Retrouvez <b>b2seomds</b> sur vos réseaux sociaux</h2>

  <ul>
    <a href="https://www.instagram.com/b2seomds?igsh=bDZkNmkwbGNwdjh3">
      <li>
        Instagram de b2seomds <img src="/imgs/instagram.webp" alt="Instagram de b2seomds" />
      </li></a
    >
    <a href="https://x.com/b2seomds?s=21">
      <li>Twitter de b2seomds <img src="/imgs/twitter.webp" alt="Twitter de b2seomds" /></li></a
    >
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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
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
