<script>
	import { fly } from 'svelte/transition';

	import Button from './Button.svelte';

	export let title;
	export let number;
	export let createdAt;
	export let slug;

	const date = createdAt.split('T')[0].split('-').reverse().join('-');
</script>

<div in:fly={{ y: 200, duration: 2000 }} class="blog-container">
	<div class="blog">
		<div class="blog__date">
			<p>{date}</p>
		</div>
		<div class="blog__title">
			<h2>{title}</h2>
		</div>

		<div class="blog__button">
			<a href="/over-ons/{slug}-{number}">
				<Button buttonType="secondary">Lees Meer</Button>
			</a>
		</div>
	</div>
</div>

<style>
	.blog-container {
		max-width: 75%;
		margin: 0 auto;
	}

	.blog {
		margin: 2rem auto;
		background-color: #f4f4f4;
		padding: 20px;
		box-shadow: inset 0 0 0 1px var(--primary-color), 0 0 5px 1px var(--primary-color);
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
		justify-content: center;
		align-items: center;
	}

	.blog__title {
		width: 100%;
		text-align: center;
	}

	.blog__date {
		width: 100%;
		text-align: center;
	}

	.blog__button {
		width: 100%;
		text-align: center;
	}

	@media (max-width: 768px) {
		.blog {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 2fr 1fr;
			max-height: 250px;
		}

		.blog__date {
			margin: 1rem 0;
		}
	}
</style>
