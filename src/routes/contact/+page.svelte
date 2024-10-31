<svelte:head>
  <title>b2seomds - Contactez nous !</title>
  <meta name="description" content="Découvrez de blog de notre agence web b2seomds !" />
</svelte:head>

<h1>Contactez b2seomds</h1>

<h2>Prenez contact et venez nous rencontrer</h2>

<form method="get" action="/search">
  <fieldset>
    <legend>Parlez-nous de votre projet</legend>

    <input type="text" name="subject" id="subject" placeholder="Sujet de contact" required/>
    <textarea name="content" id="content" placeholder="Votre message" required></textarea>
  </fieldset>
  <fieldset>
    <legend>Pour vous recontacter</legend>

    <label for="name">
      Votre nom
      <input type="text" name="name" id="name" required placeholder="John Boubac" />
    </label>
    <label for="phone">
      Votre numéro de téléphone
      <input type="tel" name="phone" id="phone" placeholder="01 02 03 04 05" />
    </label>
  </fieldset>
  <button type="submit">Envoyer</button>
</form>

<style lang="scss">
  fieldset {
    padding: 15px;
  }
  input {
    display: block;
    width: 100%;
    padding: 5px 15px;
  }
  textarea {
    resize: vertical;
    width: 100%;
    padding: 15px;
  }
  button {
    display: block;
    margin: 15px auto;
  }
</style>
