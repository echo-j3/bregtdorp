<script lang="ts">
	let year = new Date().getFullYear();
</script>

<footer id="contact">
	<div class="footer-container">
		<div class="fb">
			<p>Volg ons op Facebook</p>
			<a href="https://www.facebook.com/profile?id=100092612247514" target="_blank">
				<i class="fa-brands fa-square-facebook" />
			</a>
		</div>
		<div class="contact">
			<p>Of stuur een E-mail</p>
			<a href="mailto:quennvonkatum@gmail.com">
				<i class="fa-regular fa-envelope" />
			</a>
		</div>
	</div>
	<p>© {year} Kennel van het Bregtdorp</p>
</footer>

<style>
	footer {
		text-align: center;
		width: 100vw;
		min-height: 10vh;
		background-color: var(--dark-color);
		color: var(--light-color);
	}
	.footer-container {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		padding: 1rem;
	}
</style>
