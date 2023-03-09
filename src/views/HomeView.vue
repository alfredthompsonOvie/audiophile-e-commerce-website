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
					<router-link :to="{ name: '' }" class="cta cta--prim"
						>see product</router-link
					>
				</section>
			</section>
		</section>
		<section class="category">
			<ul class="dropdown">
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
			</ul>
		</section>
		<section class="product">
			<section class="product__speaker--zx9">
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
					<router-link :to="{ name: '' }" class="cta cta--sec"
						>see product</router-link
					>
				</section>
			</section>
			<section class="product__zx7-speaker">
				<router-link :to="{ name: '' }" class="cta cta--alt"
					>see product</router-link
				>
			</section>
			<section class="product__earphones">
				<router-link :to="{ name: '' }" class="cta cta--alt"
					>see product</router-link
				>
			</section>
		</section>
	</main>
</template>

<script setup></script>

<style scoped>
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
	padding: 1em;
}
.product {
	margin-top: 4em;
	padding: 1em;
}
.product__speaker--zx9 {
	background-color: #d87d4a;
	border-radius: 8px;
	padding: 4em 1em;
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
	/* mix-blend-mode: normal; */
	opacity: 0.75;
	margin: 0 auto 1em;
	max-width: 300px;
}
@media (min-width: 600px) {
	.category {
		margin-top: 3em;
	}
	.dropdown {
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
	}
	.btn--cart {
		margin-left: auto;
	}
	.product__speaker--zx9 {
		background-image: url(@/assets/images/oval-tablet.svg);
	}
	.product__speaker--zx9 p {
		max-width: 350px;
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
		background-image: url(@/assets/images/oval-tablet.svg);
    background-position: 7em 12em;
    background-size: contain;
		text-align: left;

		display: flex;
		align-items: flex-end;
    justify-content: center;
    gap: 8em;
		padding-bottom: 0;
    overflow: hidden;
	}
  .product__speaker--zx9 img {
    position: relative;
    bottom: -.4em;
  }
	.product__content {
		align-self: flex-start;
		/* margin-top: 1em; */
	}
	.product__speaker--zx9 h1 {
		max-width: auto;
		margin-inline: 0;
		font-weight: 700;
		font-size: 56px;
		line-height: 58px;
		letter-spacing: 2px;
	}
	.product__speaker--zx9 p {
    margin-bottom: 2em;
	}
}

/* @media (min-width: 992px) {
} */
</style>
