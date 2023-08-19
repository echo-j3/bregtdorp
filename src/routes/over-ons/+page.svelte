<script lang="ts">
	import About from './about.svelte';
	import Blog from '../../components/Blog.svelte';
	import Button from '../../components/Button.svelte';
	import PageDivider from '../../components/PageDivider.svelte';

	export let data;
	$: ({ nodes } = data);
</script>

<About />
<PageDivider />

<h1 id="blog">Het Laatste Nieuws</h1>
{#each nodes as { title, number, createdAt, slug }, i}
	<Blog {title} {number} {slug} {createdAt} />
{/each}
<div class="btn-top">
	<a href="/over-ons#blog">
		<Button>Naar Boven</Button>
	</a>
</div>

<style>
	h1 {
		text-align: center;
		font-size: 2rem;
		padding-top: 2rem;
		margin: 2rem;
		text-decoration: underline;
		text-decoration-color: var(--primary-color);
	}
	.btn-top {
		text-align: center;
		margin: 2rem;
	}
</style>
