<template>
	<main>
		<section class="hero">
			<section class="hero__contents">
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
					<router-link :to="{ name: 'productDetail', params: { id: 'headphones/xx99-mark-II-headphones' }}" class="cta cta--prim"
						>see product</router-link
					>
					<!-- <router-link :to="{ name: 'headphoneDetails', params: { id: `${'xx99 mark ii headphones'.split(' ').join('-')}`} }" class="cta cta--prim"
						>see product</router-link
					> -->
				</section>
			</section>
		</section>
		<section class="category grid">
			<!-- <ul class="dropdown">
				<li class="dropdown__item menuItem">
					<router-link :to="{ name: 'product' }" class="dropdown__link">
						<img src="@/assets/images/image-headphone-menu.svg" alt="" />
						<p>Headphones</p>
						<span>
							<span class="span__text"> shop </span>
							<font-awesome-icon icon="fa-solid fa-angle-right" />
						</span>
					</router-link>
				</li>
				<li class="dropdown__item menuItem">
					<router-link :to="{ name: 'product' }" class="dropdown__link">
						<img src="@/assets/images/image-speakers-menu.svg" alt="" />
						<p>Speakers</p>
						<span>
							<span class="span__text"> shop </span>
							<font-awesome-icon icon="fa-solid fa-angle-right" />
						</span>
					</router-link>
				</li>
				<li class="dropdown__item menuItem">
					<router-link :to="{ name: 'product' }" class="dropdown__link">
						<img src="@/assets/images/image-earphone-menu.png" alt="" />
						<p>Earphones</p>
						<span>
							<span class="span__text"> shop </span>
							<font-awesome-icon icon="fa-solid fa-angle-right" />
						</span>
					</router-link>
				</li>
			</ul> -->
			<BaseCategoryLinks class="grid__content dropdown" />
		</section>
		<section class="products grid">
			<section class="grid__content">
				<section class="product__contents product__speaker--zx9">
					<picture>
						<source
							srcset="@/assets/images/image-zx9-speaker-preview-desktop.svg"
							media="(min-width: 992px)"
						/>
						<img src="@/assets/images/image-zx9-speaker-preview.svg" alt="" />
					</picture>
					<section class="product__content">
						<h1 class="heading">zx9 Speakers</h1>
						<p>
							Upgrade to premium speakers that are phenomenally built to deliver
							truly remarkable sound.
						</p>
						<!-- <router-link
							:to="{ name: 'speakerDetails', params: { id: 'zx9-speakers' } }"
							class="cta cta--sec"
							>see product</router-link
						> -->
						<router-link :to="{ name: 'productDetail', params: { id: 'speakers/zx9-speaker' }}" class="cta cta--sec"
						>see product</router-link
					>
					</section>
				</section>
				<!--  -->
				<!--  -->
				<!--  -->
				<section class="product__contents product--zx7-speakers">
					<picture>
						<source
							srcset="@/assets/images/zx7-speaker-desktop.svg"
							media="(min-width: 992px)"
						/>
						<source
							srcset="@/assets/images/zx7-speaker-tablet.svg"
							media="(min-width: 500px)"
						/>
						<img src="@/assets/images/zx7-speaker-mobile.svg" alt="" />
					</picture>
					<section class="product__content--zx7">
						<h1 class="heading--alt">zx7 Speakers</h1>
						<!-- <router-link
							:to="{ name: 'speakerDetails', params: { id: 'zx7-speaker' } }"
							class="cta cta--alt"
							>see product</router-link
						> -->
						<router-link :to="{ name: 'productDetail', params: { id: 'speakers/zx7-speaker' }}" class="cta cta--alt"
						>see product</router-link
					>
					</section>
				</section>
				<!--  -->
				<!--  -->
				<!--  -->
				<section class="product__contents product--earphones">
					<picture>
						<source
							srcset="@/assets/images/yx1-earphones-desktop.svg"
							media="(min-width: 992px)"
						/>
						<source
							srcset="@/assets/images/yx1-earphones-tablet.svg"
							media="(min-width: 600px)"
						/>
						<img src="@/assets/images/yx1-earphones-mobile.svg" alt="" />
					</picture>
					<section class="product__content--yx1">
						<h1 class="heading--alt">yx1 earphones</h1>
						<!-- <router-link :to="{ name: 'earphoneDetails', params: { id: 'yx1-earphones'} }" class="cta cta--alt"
							>see product</router-link
						> -->
						<router-link :to="{ name: 'productDetail', params: { id: 'earphones/YX1-WIRELESS-EARPHONES' }}" class="cta cta--alt"
						>see product</router-link
					>
					</section>
				</section>
			</section>
		</section>

		<BaseAbout/> 
		
	</main>
</template>

<script setup>
import BaseCategoryLinks from "../components/BaseCategoryLinks.vue";
import BaseAbout from "../components/BaseAbout.vue";
</script>

<style scoped>
.dropdown {
	padding-inline: 0;
}
.hero {
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color: #0e0e0e;
}

.hero__details .heading {
	margin: 0.5em 0;
}
.hero__details .text {
	margin-bottom: 1.5em;
}
.category {
	margin-top: 5em;
}
.products {
	margin-top: 4em;
}
.product__speaker--zx9 {
	background-color: #d87d4a;

	padding: 3em 1em;
	text-align: center;
	color: #fff;
	background-image: url(@/assets/images/oval.svg);
	background-repeat: no-repeat;
	background-position: top center;
}
.product__speaker--zx9 h1 {
	max-width: 200px;
	margin: 0.5em auto;
}
.product__speaker--zx9 p {
	font-weight: 500;
	font-size: 15px;
	line-height: 25px;
	color: #ffffff;
	opacity: 0.75;
	margin: 0 auto 1.5em;
	max-width: 300px;
}
/* products */
.product__contents {
	border-radius: 8px;
	overflow: hidden;
}
.product__contents + .product__contents {
	margin-top: 2em;
}
.product--zx7-speakers {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 12.5em;
	grid-template-rows: 18.5em;
	grid-template-rows: 15.5em;
	grid-template-rows: 320px;
	grid-template-rows: auto;
}
.product--zx7-speakers picture {
	grid-row: 1/-1;
	grid-column: 1/-1;

	background-color: red;
}
.product--zx7-speakers img {
	display: block;
	width: 100%;
	/* height: 320px; */

	/* object-fit: cover; */
}
.product__content--zx7 {
	grid-row: 1;
	grid-column: 1/-1;
	align-self: center;
	padding: 1em;
}
.heading--alt {
	font-weight: 700;
	font-size: clamp(22px, 3vw, 28px);
	line-height: 38px;
	letter-spacing: 2px;
	text-transform: uppercase;
	color: #000;
	margin-bottom: 0.8em;
}
.product--earphones {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(2, auto);
	gap: 1em;
	overflow: hidden;
}
.product--earphones img {
	border-radius: 8px;
	display: block;
	width: 100%;
}
.product__content--yx1 {
	/* text-align: center; */
	/* margin-top: 1em; */
	background: #f1f1f1;
	border-radius: 8px;
	padding: 2em;
}
@media (min-width: 600px) {
	.category {
		margin-top: 3em;
	}
	/* .dropdown {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1em;
		padding: 5em 2em 4em;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
	}
	.dropdown__item + .dropdown__item {
		margin-top: 0;
	}
	.dropdown__item {
		flex: 1;
	} */
	.btn--cart {
		margin-left: auto;
	}
	.product__speaker--zx9 {
		background-image: url(@/assets/images/oval-tablet.svg);
		background-size: contain;
	}
	.product__speaker--zx9 p {
		max-width: 350px;
	}
	.product__content--zx7 {
		padding-left: 3em;
	}
	.product--earphones {
		/* flex-direction: row; */
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
	}
	/* .product--earphones img {
	flex: 1;
} */
	.product__content--yx1 {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}
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

	.hero__contents picture {
		grid-column: 3;
		grid-row: 1;
		width: 100%;
	}
	.hero__contents img {
		object-fit: cover;
		object-position: bottom;
	}
	.hero__details {
		grid-column: 2;
		grid-row: 1;
		text-align: left;
		max-width: auto;
		margin: 0;
	}
	.product__speaker--zx9 {
		background-image: url(@/assets/images/oval-desktop.svg);
		background-position: left;
		background-size: contain;
		text-align: left;

		display: flex;
		align-items: flex-end;
		justify-content: center;
		gap: 6em;

		padding-bottom: 0em;
		padding-left: 5em;
		padding-right: 7em;
		overflow: hidden;
	}
	.product__speaker--zx9 img {
		align-self: flex-end;
		display: block;
	}
	.product__content {
		align-self: flex-start;
		/* margin-top: 1em; */
		/* border-radius: 0; */
	}
	.product__speaker--zx9 h1 {
		max-width: auto;
		margin-inline: 0;
		font-weight: 700;
		font-size: 56px;
		line-height: 58px;

		font-size: 40px;
		line-height: 40px;

		font-size: clamp(40px, 4vw, 56px);
		letter-spacing: 2px;
	}
	.product__speaker--zx9 p {
		margin-bottom: 2em;
	}
	.product__content--zx7 {
		padding-left: 5em;
	}
		.product__content--yx1 {
		padding-left: 5em;
	}
}

/* @media (min-width: 992px) {
} */
</style>
