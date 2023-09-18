<script lang="ts">
  import Button from "../components/Button.svelte";

  import gaya from "../lib/images/gayatroon.jpg";
  import strand from "$lib/images/strand.jpg";

  const text1 =
    "In de luwte van de duinen, dichtbij het strand, de zee en het bos, ligt Kennel van het Bregtdorp";
  const text2 =
    "Een kleinschalige kennel voor de Oudduitse Herder, uit liefde voor het ras";
</script>

<section class="intro">
  <div class="intro-container">
    <div class="pic1">
      <img src={gaya} alt="Gaya buiten op het terras" />
    </div>
    <div class="text1"><p>{text1}</p></div>
    <div class="text2">
      <p>{text2}</p>
      <a href="/over-ons#about"><Button>Meer Info</Button></a>
    </div>
    <div class="pic2">
      <img src={strand} alt="Gaya op het strand" />
    </div>
  </div>
</section>

<style>
  .intro {
    margin: 0 auto;
  }
  .intro-container {
    display: grid;
    grid-template-areas:
      "pic1 text1"
      "text2 pic2";
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .pic1,
  .pic2 {
    height: 100%;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 15vw;
    height: 40vh;
    object-fit: cover;
    border-radius: 5px;
    border: 3px solid #dd7c23;
  }

  .text1,
  .text2 {
    font-size: 1.5rem;
    text-align: center;
    margin: auto;
    max-width: 70%;
  }

  p {
    line-height: 1.5;
  }

  .pic1 {
    grid-column: 1;
    grid-row: 1 / 3;
  }

  .pic2 {
    grid-column: 3;
    grid-row: 1 / 3;
  }

  .text1 {
    grid-column: 2;
    grid-row: 1;
  }
  .text2 {
    grid-column: 2;
    grid-row: 2;
  }

  @media (max-width: 1200px) {
    .intro-container {
      grid-template-columns: 1fr 1fr;
    }
    .pic1 {
      grid-column: 1;
      grid-row: 1;
    }
    .text1 {
      grid-column: 2;
      grid-row: 1;
    }
    .text2 {
      grid-column: 1;
      grid-row: 2;
    }
    .pic2 {
      grid-column: 2;
      grid-row: 2;
    }
    img {
      width: 80%;
      height: 80%;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 70%;
    }
  }
</style>
