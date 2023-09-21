<script>
  import wolf0 from "$lib/images/wolf/wolf0.jpg";
  import wolf1 from "$lib/images/wolf/wolf1.jpg";
  import wolf2 from "$lib/images/wolf/wolf2.jpg";
  import wolf3 from "$lib/images/wolf/wolf3.jpg";

  const pics = [wolf0, wolf1, wolf2, wolf3];
</script>

<div class="container">
  {#if pics.length === 0}
    <div class="text">
      <h1>Geen foto's gevonden</h1>
      <a href="/gallerij">Ga Terug</a>
    </div>
  {:else}
    {#each pics as pic}
      <a href={pic}>
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
