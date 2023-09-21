<script>
  import wolf from "$lib/images/wolf/wolf3.jpg";
  import gaya from "$lib/images/gaya/gaya6.jpg";
  import pups from "$lib/images/pups/pups.jpg";
</script>

<div class="gallery-wrapper">
  <h1>Gallery</h1>
  <div class="ouders">
    <a href="/gallerij/wolf">
      <div class="img-card wolf">
        <img src={wolf} alt="Wolf" />

        <div class="img-card-text">
          <h2>Wolf</h2>
        </div>
      </div>
    </a>
    <a href="/gallerij/gaya">
      <div class="img-card gaya">
        <img src={gaya} alt="Gaya" />
        <div class="img-card-text">
          <h2>Gaya</h2>
        </div>
      </div>
    </a>
  </div>

  <div class="puppies">
    <a href="/gallerij/pups">
      <div class="img-card pups">
        <img src={pups} alt="Pups" />
        <div class="img-card-text">
          <h2>Pups</h2>
        </div>
      </div>
    </a>
  </div>
</div>

<style>
  .gallery-wrapper {
    background-color: var(--grey-color);
    width: 100%;
    min-height: 110vh;
    padding: 2rem;
  }
  .gallery-wrapper h1 {
    font-family: "Dancing Script", cursive;
    font-size: 4rem;
    text-align: center;
    margin-top: 2rem;
  }
  .ouders {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 2rem;
    justify-items: center;
  }

  .puppies {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }

  .ouders a {
    text-decoration: none;
    color: var(--dark-color);
  }

  .puppies a {
    text-decoration: none;
    color: var(--dark-color);
  }

  .img-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--light-color);
    width: 400px;
    height: 450px;
    margin: 2rem;
    box-shadow: 0 0 10px var(--dark-color);
    border: 1px inset var(--dark-color);
  }

  .img-card img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin-top: 2rem;
    border-radius: 5px;
  }

  .wolf {
    transform: rotate(5deg);
  }

  .gaya {
    transform: rotate(-5deg);
  }

  .wolf img {
    border: 2px solid blue;
  }

  .gaya img {
    border: 2px solid purple;
  }

  .pups img {
    border: 2px solid limegreen;
  }

  .img-card-text {
    font-family: "Dancing Script", cursive;
    font-size: 2rem;
    margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    .ouders {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    .img-card {
      width: 250px;
      height: 300px;
    }
    .img-card img {
      width: 200px;
      height: 200px;
    }
    .img-card-text {
      font-size: 1.5rem;
    }
  }
</style>
