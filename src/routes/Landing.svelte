<script lang="ts">
	const bregtdorp = 'https://jellema.cc/resources/images/static/bregtdorp.jpg';
</script>

<section class="landing">
	<div class="welcome-text-img">
		<h1 class="welcome-text">Welkom bij Kennel van het Bregtdorp</h1>
		<img src={bregtdorp} alt="De prachtige duinen" />
	</div>
</section>

<style>
	.welcome-text-img {
		width: 100%;
	}

	.welcome-text {
		font-family: 'Dancing Script', cursive;
		font-size: 3rem;
		position: absolute;
		color: var(--light-color);
		width: 700px;
		left: calc(50% - 350px);
		top: 20%;
	}

	.welcome-text-img img {
		width: 100%;
		height: 100vh;
		object-fit: cover;
	}

	@media (max-width: 1200px) {
		.welcome-text {
			font-size: 2.2rem;
			width: 500px;
			left: calc(50% - 250px);
		}
		.welcome-text-img {
			left: 0;
		}
	}

	@media (max-width: 768px) {
		section {
			width: 100vw;
		}
		.welcome-text {
			font-size: 2rem;
			width: 300px;
			left: calc(50% - 150px);
			text-align: center;
		}
		.welcome-text-img {
			left: 0;
		}
	}
</style>
