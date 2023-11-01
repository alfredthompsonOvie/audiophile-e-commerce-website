<template>
	<section class="about grid">
		<section class="about__contents grid__content">
			<picture>
				<source
					srcset="@/assets/images/dude-desktop.svg"
					media="(min-width: 992px)"
				/>
				<source
					srcset="@/assets/images/dude-tablet.svg"
					media="(min-width: 600px)"
				/>
				<img src="@/assets/images/dude-mobile.svg" alt="" />
			</picture>
			<section class="about__content">
				<h1 class="heading__about">
					Bringing you the <span class="heading--span"> best </span> audio gear
				</h1>
				<p>
					Located at the heart of New York City, Audiophile is the premier store
					for high end headphones, earphones, speakers, and audio accessories.
					We have a large showroom and luxury demonstration rooms available for
					you to browse and experience a wide range of our products. Stop by our
					store to meet some of the fantastic people who make Audiophile the
					best place to buy your portable audio equipment.
				</p>
			</section>
		</section>
	</section>
</template>

<script setup></script>

<style scoped>
.about {
	margin-top: 5em;
}
.about__contents {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(2, auto);
	gap: 2em;
}
/* picture {
	background-color: red;
} */
img {
	display: block;
  width: 100%;
	border-radius: 8px;
	max-height: 300px;
}
.about__content {
	text-align: center;
}

h1 {
	font-weight: 700;
	font-size: 28px;
	line-height: 38px;
	/*  */
	letter-spacing: 1px;
	text-transform: uppercase;

	color: #000000;
	max-width: 400px;
	margin-inline: auto;
}
span {
	color: #d87d4a;
}
p {
	font-weight: 500;
	font-size: 15px;
	line-height: 25px;
	color: #000;
	opacity: 0.5;
	margin-top: 1.2em;
	max-width: 600px;
	margin-inline: auto;
}
@media (min-width: 600px) {
  img {
    max-height: initial;
  }

}
@media (min-width: 992px) {
	.about__contents {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: auto;
    gap: 4em;
	}
	picture {
		grid-column: 2;
		grid-row: 1;
	}
	img {
		max-height: initial;
	}
	.about__content {
		grid-column: 1;
		grid-row: 1;
		text-align: left;
		align-self: center;
	}
	h1 {
		max-width: 400px;
		margin-inline: 0;
	}
	p {
    max-width: 450px; 
		margin-inline: 0;
	}
}
</style>
