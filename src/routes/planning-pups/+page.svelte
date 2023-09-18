<script>
  const planningText1 =
    "Na een zoektocht naar karakter, gezondheid en COI berekeningen kijkend, hebben we contact gemaakt met de baas van Wolf. Gezamenlijk een wandeling gemaakt in het Norgerbos omdat wij het belangrijk vonden dat ook de honden het goed met elkaar hebben. In overleg met de baas van Wolf besloten dat bij de eerstvolgende loopsheid een dekking kan worden gepland. Wij zijn blij dat Wolf de vader wil gaan worden, als de natuur dat ook wil, van ons toekomstig nestje omdat door embark blijkt dat het COI (inteeld) percentage laag (28%) is en beide honden ook geen recessieve afwijkingen hebben.";
  const planningText2 =
    "Wil je in aanmerking komen voor een pup en je de tijd, de ruimte en energie hebt om voor de hond te zorgen. Stuur dan even een email naar: quennvonkatum@gmail.com of bericht op facebook Quenn vonKaTum, Een brief naar kennel van het Bregtdorp met motivatie en gegevens kan natuurlijk ook.";
  const planningDetail = [
    "HD A",
    "ED vrij",
    "DM vrij",
    "HdG vrij",
    "Embark en DNA Getest",
  ];
  import planningpic1 from "$lib/images/wolf/wolf7.jpg";
  import planningpic2 from "$lib/images/gaya/gaya6.jpg";
</script>

<div class="container">
  <div class="header-planning">
    <h1>Planning & Pups</h1>
    <h3>Onze Planning voor dekking Sept/Okt 2023</h3>
  </div>
  <div class="intro-planning">
    <p>{planningText1}</p>
  </div>
  <div class="pictures">
    <div class="wolf picture">
      <img src={planningpic1} alt="Wolf" />
      <div class="picture-text">
        <h2>Wolf</h2>
        <ul>
          {#each planningDetail as detail}
            <li>{detail}</li>
          {/each}
        </ul>
      </div>
    </div>
    <div class="picture gaya">
      <img src={planningpic2} alt="Gaya" />
      <div class="picture-text">
        <h2>Gaya</h2>
        <ul>
          {#each planningDetail as detail}
            <li>{detail}</li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
  <div class="outro-planning">
    <p>{planningText2}</p>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 80%;
  }
  .header-planning {
    text-align: center;
    margin: 0 auto;
    padding: 2rem;
  }
  .header-planning h1 {
    font-size: 2rem;
    text-decoration: underline 2px solid var(--primary-color);
    margin: 2rem auto;
  }
  .header-planning h3 {
    font-size: 1.5rem;
  }
  .intro-planning,
  .outro-planning {
    width: 100%;
    margin: 0 auto;
    padding: 2rem;
    font-size: 1.5rem;
    line-height: 1.5;
  }
  .pictures {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
  .picture {
    width: 40%;
  }

  .picture img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 5px;
  }

  .wolf img {
    border: 2px solid blue;
  }

  .gaya img {
    border: 2px solid purple;
  }

  .picture-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
    color: var(--light-color);
    padding: 1rem;
    border-radius: 5px;
  }

  .picture-text h2 {
    font-size: 2rem;
  }

  .picture-text ul {
    list-style: none;
    padding: 0;
  }

  .picture-text ul li {
    font-size: 1.25rem;
    margin: 0.5rem;
  }

  .picture-text ul li::before {
    content: "";
    background-image: url(https://jellema.cc/resources/images/static/paw.png);
    background-size: contain;
    border-radius: 5rem;
    display: inline-block;
    width: 1em;
    height: 1em;
    position: relative;
    top: 0.2rem;
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    h1,
    h3,
    p {
      font-size: 75%;
    }
    .container {
      width: 90%;
    }
    .pictures {
      flex-direction: column;
      justify-content: center;
    }
    .picture {
      width: 100%;
      margin: 1rem auto;
    }
  }
</style>
