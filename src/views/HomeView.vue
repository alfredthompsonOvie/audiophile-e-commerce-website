<template>
	<main>
		<section class="hero">
			<section class="hero__contents">
				<!-- <picture>
        <source srcset="@/assets/images/xx99-mark-II-headphones.svg" media="(min-width: 992px)">
        <source srcset="@/assets/images/xx99-mark-II-headphones-tablet.svg" media="(min-width: 450px)">
        <img src="@/assets/images/xx99-mark-II-headphones-mobile.svg" alt="">
      </picture> -->
				<picture>
					<source
						srcset="@/assets/images/mark-II-headphones-desktop.svg"
						media="(min-width: 992px)"
					/>
					<source
						srcset="@/assets/images/mark-II-headphones-tablet.svg"
						media="(min-width: 450px)"
					/>
					<img src="@/assets/images/mark-II-headphones-mobile.svg" alt="" />
				</picture>
				<section class="hero__details">
					<h1 class="subHeading">new product</h1>
					<h2 class="heading">xx99 mark ii headphones</h2>
					<p class="text">
						Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast.
					</p>
					<router-link :to="{ name: '' }" class="cta cta--prim"
						>see product</router-link
					>
				</section>
			</section>
		</section>
	</main>
</template>

<script setup></script>

<style scoped>
.hero {
	background-color: #191919;
	/* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
	background-color: #000;
	background-color: #101010;
	background-color: #0f0f0f;
	background-color: #0e0e0e;
	/* background-color: #121212; */
	/* background-image: linear-gradient(to right, #191919, #000); */
	/* background-image: linear-gradient(to right, #191919, #101010); */
	/* background-image: linear-gradient(to right, #101010, #191919 ); */
	/* background-image: radial-gradient(farthest-corner, #191919, #000);
background-image: radial-gradient(center right, #191919, #000); */
}

.hero__details .heading {
	margin: 0.5em 0;
}
.hero__details .text {
	margin-bottom: 1.5em;
}
@media (min-width: 600px) and (max-width: 992px) {
	.hero__contents img {
		/* width: 100%;
	height: 100%; */
		object-fit: contain;
		object-position: center;
	}
}

@media (min-width: 992px) {
	.hero {
		background-color: #121212;
	}
	.hero__contents {
		display: grid;
		grid-template-columns: 1fr 4fr 6fr 1fr;
		grid-template-rows: calc(100vh - 5em);
	}

	picture {
		grid-column: 3;
		grid-row: 1;
		width: 100%;
	}
	.hero__contents img {
		object-fit:cover;
    object-position: bottom;
	}
	.hero__details {
		grid-column: 2;
		grid-row: 1;
		text-align: left;
		max-width: auto;
		margin: 0;
	}
}
</style>
