<script>
	const path = 'https://jellema.cc/resources/images/wolf/';
	let pics = [];

	export let data;

	for (let i = 1; i < data.res; i++) {
		pics.push(path + 'wolf' + i + '.jpg');
	}
</script>

<div class="container">
	{#if data.res === 0}
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
