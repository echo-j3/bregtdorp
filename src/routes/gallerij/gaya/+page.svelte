<script>
  import gaya0 from "$lib/images/gaya/gaya0.jpg";
  import gaya1 from "$lib/images/gaya/gaya1.jpg";
  import gaya2 from "$lib/images/gaya/gaya2.jpg";
  import gaya3 from "$lib/images/gaya/gaya3.jpg";
  import gaya4 from "$lib/images/gaya/gaya4.jpg";
  import gaya5 from "$lib/images/gaya/gaya5.jpg";
  import gaya6 from "$lib/images/gaya/gaya6.jpg";
  import gaya7 from "$lib/images/gaya/gaya7.jpg";

  const pics = [gaya0, gaya1, gaya2, gaya3, gaya4, gaya5, gaya6, gaya7];
</script>

<div class="container">
  {#if pics.length === 0}
    <div class="text">
      <h1>Geen foto's gevonden</h1>
      <a href="/gallerij">Ga Terug</a>
    </div>
  {:else}
    {#each pics as pic}
      <a href={pic} target="_blank">
        <img src={pic} alt="" />
      </a>
    {/each}
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 100vh;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .text a {
    text-decoration: none;
    color: var(--secondary-color);
    font-size: 1.5rem;
    margin: 1rem;
  }

  img {
    width: 300px;
    height: 300px;
    object-fit: contain;
    margin: 10px;
    border: none;
    outline: none;
  }
</style>
