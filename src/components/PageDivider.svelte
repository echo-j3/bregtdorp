<div class="divider-container">
	<div class="divider" />
	<div class="divider" />
	<div class="divider" />
</div>

<style>
	.divider-container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 2rem auto;
	}

	.divider {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: var(--primary-color);
		margin: 0 2rem;
		border: 2px solid var(--secondary-color);
	}

	@media (max-width: 768px) {
		.divider {
			width: 30px;
			height: 30px;
		}
	}
</style>
