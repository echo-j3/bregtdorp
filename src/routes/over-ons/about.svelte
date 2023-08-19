<script lang="ts">
	const about1 = 'https://jellema.cc/resources/images/static/about1.jpg';
	const about2 = 'https://jellema.cc/resources/images/static/about2.jpg';
	const about3 = 'https://jellema.cc/resources/images/static/about3.jpg';
	const about4 = 'https://jellema.cc/resources/images/static/about4.jpg';
	const aboutText =
		'Wij zijn Carin en Arno Jellema en wonen in het mooie dorp Schoorl. Onze eerste oudduitse herder, Tommy kwam vijftien jaar geleden in ons gezin en sindsdien zijn wij enorm verbonden met dit ras. Na zijn dood kwam Gaya bij ons, een teef, die onze andere hond een Tibetaanse terrier die we Teuntje genoemd hebben, gezelschap kwam geven. Beiden zijn heel erg verschillend, maar onafscheidelijk en lief voor elkaar.';

	const aboutText2 =
		'Ze gaan altijd met ons mee op vakantie met de auto of de camper het maakt ze niet uit en nooit uit hun evenwicht. Het is heel fijn om dit samen te kunnen doen. Wij willen nu heel graag met Gaya hobbymatig een nestje fokken volgens de regels van de rasvereniging. Wij hebben daar nu de tijd voor en kunnen ons daar volledig voor inzetten en van genieten.';
</script>

<section id="about">
	<div class="text-about">
		<div class="about-us">
			<h1>Over Ons</h1>
			<p>
				{aboutText}
			</p>
		</div>
		<div class="about-dog">
			<h1>Onze Hond</h1>
			<p>{aboutText2}</p>
		</div>
	</div>
	<div class="img-about">
		<ul>
			<li>
				<img src={about1} alt="Gaya als pup" />
			</li>
			<li>
				<img src={about2} alt="Gaya samen met Toshi" />
			</li>
			<li>
				<img src={about3} alt="Gaya buiten op het terras" />
			</li>
			<li>
				<img src={about4} alt="Gaya met teun op pad" />
			</li>
		</ul>
	</div>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 2fr 1fr;
	}
	.text-about {
		padding: 1rem;
		margin: 5rem;
	}
	.text-about h1 {
		font-size: 2rem;
		text-decoration: underline;
		text-decoration-color: var(--primary-color);
		text-decoration-thickness: 0.2rem;
		padding: 1rem 1rem 1rem 0;
	}

	.text-about p {
		font-size: 1.5rem;
		line-height: 1.5;
	}

	.img-about {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.img-about ul li {
		list-style: none;
		margin: 2rem auto;
	}

	.img-about ul li:nth-child(even) {
		margin-left: 5rem;
	}
	.img-about ul li img {
		width: 10rem;
		height: 10rem;
		object-fit: cover;
		border-radius: 50%;
		border: 3px solid var(--secondary-color);
	}

	@media (max-width: 1199px) {
		.text-about p {
			font-size: 1.2rem;
		}
	}

	@media (max-width: 768px) {
		section {
			grid-template-columns: 3fr 1fr;
		}

		.img-about ul li:nth-child(even) {
			margin-left: 2rem;
		}
		.text-about {
			margin: 2rem 0 0 0;
		}
		.text-about h1 {
			font-size: 1.5rem;
		}
		.text-about p {
			font-size: 1.2rem;
		}
		.img-about {
			padding: 5rem 0;
		}
		.img-about ul li img {
			width: 6rem;
			height: 6rem;
			margin-right: 1rem;
			margin-top: 5rem;
		}
	}
</style>
