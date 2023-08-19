<script lang="ts">
	import Landing from './Landing.svelte';
	import Intro from './Intro.svelte';

	import Promoter from '../components/Promoter.svelte';
	import PageDivider from '../components/PageDivider.svelte';
	import Button from '../components/Button.svelte';
	import Blog from '../components/Blog.svelte';

	export let data;

	$: ({ nodes } = data);
</script>

<Landing />
<PageDivider />
<Intro />
<PageDivider />
<h1>Het Laatste Nieuws</h1>
{#each nodes as { title, number, createdAt, slug }, i}
	<Blog {title} {number} {slug} {createdAt} />
{/each}
<div class="btn">
	<a href="/over-ons#blog"><Button buttonType="primary">Bekijk Meer</Button></a>
</div>
<PageDivider />
<Promoter />

<style>
	h1 {
		text-align: center;
		font-size: 2rem;
		padding-top: 2rem;
		margin: 2rem 0;
		text-decoration: underline;
		text-decoration-color: var(--primary-color);
	}
	.btn {
		display: flex;
		justify-content: center;
	}
</style>
