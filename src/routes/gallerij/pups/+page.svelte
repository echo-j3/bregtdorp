<script>
  let pics = [];
</script>

<div class="container">
  {#if pics.length === 0}
    <div class="text">
      <h1>Geen foto's gevonden</h1>
      <p>Zodra er pups zijn zullen er foto's geplaatst worden.</p>
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
    min-height: 80vh;
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

  h1 {
    margin: 5rem;
    padding: 0;
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
