<script>
	import { onMount } from 'svelte';
	import { Jumper } from 'svelte-loading-spinners';

	import Navbar from '$components/Navbar.svelte';
	import Footer from '$components/Footer.svelte';

	let loading = true;

	onMount(() => {
		loading = false;
	});
</script>

<!-- Set Headers -->
<svelte:head>
	<!-- Fonts Import/Link -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600&family=Karma:wght@400;600&display=swap"
		rel="stylesheet"
	/>

	<!-- Font Awesome -->
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
	/>
</svelte:head>

<!-- Set Layout -->
{#if loading}
	<div class="page-loader">
		<Jumper size="60" color="#FF3E00" unit="px" duration="1s" />
	</div>
{:else}
	<Navbar />

	<div class="content-wrapper">
		<slot />
	</div>

	<Footer />
{/if}

<style>
	/* CSS Variables */
	:root {
		--primary-color: #2a4524;
		--secondary-color: #dd7c23;
		--light-color: #fefefe;
		--dark-color: #1a1a1a;
		--grey-color: #d9d9d9;
		--background-color: rgba(221, 124, 35, 0.6);
	}

	/* Global */
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		font-family: 'karma', sans-serif;
		background-color: var(--background-color);
		transition: 0.2s ease-in-out;
	}

	:global(a) {
		text-decoration: none;
		color: var(--light-color);
	}

	/* Content wrapper */
	.content-wrapper {
		max-width: 1200px;
		background-color: var(--light-color);
		margin: auto;
		padding-bottom: 2rem;
	}

	.page-loader {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: var(--light-color);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 999;
	}

	/* Media Queries */
	@media (max-width: 768px) {
		:global(body) {
			overflow-x: hidden;
			background-color: var(--light-color);
		}
		.content-wrapper {
			width: 100vw;
		}
	}
</style>
