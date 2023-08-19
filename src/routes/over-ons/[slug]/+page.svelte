<script>
	import { onMount } from 'svelte';
	import { Jumper } from 'svelte-loading-spinners';
	import Button from '../../../components/Button.svelte';
	export let data;
	$: ({ discussion } = data);

	let loadingBlog = true;

	onMount(() => {
		loadingBlog = false;
	});
</script>

{#if loadingBlog}
	<div class="loading">
		<Jumper />
	</div>
{:else}
	<div class="blog">
		<h1>{discussion.title}</h1>
		{@html discussion.bodyHTML}
		<a href="/over-ons#blog">
			<Button>Terug</Button>
			<p>naar laatste nieuws</p>
		</a>
	</div>
{/if}

<style>
	.blog {
		padding: 2rem;
		height: 80vh;
		max-width: 75%;
		margin: 0 auto;
		overflow-y: scroll;
	}

	.loading {
		height: 80vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 768px) {
		.blog {
			max-width: 100%;
		}
	}
</style>
