<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	// Navbar Links
	const navItems = [
		{ label: 'Home', href: '/', navIndex: '0' },
		{ label: 'Over Ons', href: '/over-ons', navIndex: '1' },
		{ label: 'Planning & Pups', href: '/planning-pups', navIndex: '2' },
		{ label: 'Gallerij', href: '/gallerij', navIndex: '3' }
	];

	// Mobile Menu State
	export let mobileMenuOpen = false;
	export let smallScreen = false;
	let activelink = navItems.findIndex((item) => item.href === window.location.pathname);

	// Event handlers
	const mobileMenuClick = () => {
		mobileMenuOpen = !mobileMenuOpen;
	};
	const handleLinkClick = (e) => {
		mobileMenuOpen = false;
	};

	// Attach media query listener on mount hook
	onMount(() => {
		// Attach resize observer
		const resizeObserver = new ResizeObserver((entries) => {
			const entry = entries.at(0);

			smallScreen = entry.contentRect.width < 1200;
		});
		resizeObserver.observe(document.body);

		return () => {
			resizeObserver.unobserve(document.body);
		};
	});
</script>

<svelte:head>
	{#if mobileMenuOpen && smallScreen}
		<style>
			@media (max-width: 1200px) {
				body {
					overflow: hidden;
				}
			}
		</style>
	{/if}
</svelte:head>

<nav data-sveltekit-reload>
	<!-- Logo left top -->
	<div class="logo">
		<a href="/"><h1>Kennel van het Bregtdorp</h1></a>
	</div>

	<!-- Mobile Menu Icon -->
	<button on:click={mobileMenuClick}>
		<svg
			class:open={mobileMenuOpen}
			viewBox="0 0 100 100"
			fill="none"
			stroke="currentColor"
			stroke-width="5"
			width="80"
		>
			<path
				class="top"
				d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
			/>
			<path class="middle" d="m 30,50 h 40" />
			<path
				class="bottom"
				d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
			/>
		</svg>
	</button>

	<!-- List Menu -->
	{#if !smallScreen}
		<div class="nav-list">
			<ul>
				{#each navItems as { href, label, navIndex }}
					<li>
						<a
							class:underline={navIndex == activelink}
							on:click={handleLinkClick}
							on:keydown={() => {}}
							{href}>{label}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	{:else if smallScreen && mobileMenuOpen}
		<div id="mobile-nav-list" transition:fade class="nav-list">
			<ul>
				{#each navItems as { href, label, navIndex }}
					<li>
						<a
							class:underline={navIndex == activelink}
							on:click={handleLinkClick}
							on:keydown={() => {}}
							{href}>{label}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>

<style>
	/* Basic Styling Nav */
	nav {
		background-color: var(--primary-color);
		height: 5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0;
		position: relative;
	}
	nav a h1 {
		font-size: 2rem;
		font-family: 'Dancing Script', cursive;
	}
	nav a h1:hover {
		color: var(--secondary-color);
	}
	.logo,
	.nav-list {
		margin: 3rem;
	}

	/* Active path */
	.underline {
		color: var(--secondary-color);
	}

	/* Mobile Menu */
	button {
		cursor: pointer;
		display: none;
		align-items: center;
		overflow: hidden;
		background: none;
		border: none;
	}

	svg {
		transition: transform 400ms;
		display: hidden;
		color: var(--light-color);
	}

	.top {
		stroke-dasharray: 40 160;
		transition: stroke-dashoffset 400ms;
	}

	.middle {
		transform-origin: 50%;
		transition: transform 400ms;
	}

	.bottom {
		stroke-dasharray: 40 85;
		transition: stroke-dashoffset 400ms;
	}

	.open {
		transform: rotate(45deg);
	}

	.open .top,
	.open .bottom {
		stroke-dashoffset: -64px;
	}

	.open .middle {
		transform: rotate(90deg);
	}
	/* List Menu */
	.nav-list ul {
		display: flex;
		list-style: none;
	}
	.nav-list ul li {
		font-size: 1rem;
		margin: 0 2rem;
	}

	.nav-list ul a:hover {
		color: var(--secondary-color);
	}

	/* Screen functionality */

	@media (max-width: 1200px) {
		nav a h1 {
			font-size: 1.5rem;
		}
		button {
			display: flex;
		}
		svg {
			display: block;
		}
		.nav-list {
			position: absolute;
			top: 5rem;
			right: 0;
			margin: 0;

			width: 100%;
			height: 95vh;
			background-color: var(--primary-color);
			opacity: 90%;
			transition: all 1s ease-in-out;
			z-index: 3;
		}

		/* List Menu */

		.nav-list ul {
			padding: 2rem;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			height: 100%;
			width: 100%;
		}
		.nav-list ul li {
			font-size: 1.25rem;
			margin: 1rem;
			border-bottom: 1px solid var(--light-color);
		}
	}

	@media (max-width: 768px) {
		nav a h1 {
			font-size: 1.3rem;
		}
		.logo {
			margin: 1rem;
		}
	}
</style>
