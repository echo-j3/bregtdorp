<script lang="ts">
	export let buttonType = 'primary';
	export let flat = false;
	export let inverse = false;
	export let disabled = false;
</script>

<button class={buttonType} class:flat class:inverse class:disabled>
	<slot />
</button>

<style>
	button {
		border-radius: 5px;
		margin: 2rem auto;
		padding: 15px 30px;
		font-size: 1.2rem;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		font-weight: bold;
	}
	button:hover {
		transform: scale(1.05);
	}
	button:active {
		transform: scale(0.95);
	}

	.primary {
		background-color: var(--primary-color);
		color: var(--light-color);
		border: 2px solid var(--secondary-color);
	}
	.secondary {
		background-color: var(--secondary-color);
		color: var(--primary-color);
		border: 2px solid var(--primary-color);
	}
	@media (max-width: 768px) {
		button {
			padding: 10px 20px;
			font-size: 1rem;
		}
	}
</style>
