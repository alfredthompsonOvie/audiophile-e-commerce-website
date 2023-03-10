<template>
	<footer class="grid">
		<section class="footer__contents grid__content">
			<router-link to="/" class="brand">
				<img
					src="@/assets/images/audiophile.svg"
					alt="audiophile home button"
				/>
			</router-link>

			<BaseNavMenu class="navLists" />

			<p class="description">
				Audiophile is an all in one stop to fulfill your audio needs. We're a
				small team of music lovers and sound specialists who are devoted to
				helping you get the most out of personal audio. Come and visit our demo
				facility - we’re open 7 days a week.
			</p>
			<p class="copyright">Copyright 2021. All Rights Reserved</p>

			<ul class="social__media">
				<li>
					<router-link to="https://www.facebook.com" class="social__link">
						<font-awesome-icon icon="fa-brands fa-square-facebook" />
					</router-link>
				</li>
				<li>
					<router-link to="https://www.twitter.com" class="social__link">
						<font-awesome-icon icon="fa-brands fa-twitter" />
					</router-link>
				</li>
				<li>
					<router-link to="https://www.instagram.com" class="social__link">
						<font-awesome-icon icon="fa-brands fa-instagram" />
					</router-link>
				</li>
			</ul>
			<span class="rect"></span>
		</section>
	</footer>
</template>

<script setup>
import BaseNavMenu from "./BaseNavMenu.vue";
</script>

<style scoped>
footer {
	background-color: #000;
	color: #fff;
	margin-top: 4em;
}
.footer__contents {
	position: relative;
	padding: 4em 0 3em;
	text-align: center;
}
.rect {
	position: absolute;
	width: 101px;
	height: 4px;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	background-color: #d87d4a;
}
.brand {
	display: inline-block;
	margin-bottom: 1.2em;
}
p {
	font-size: 15px;
	line-height: 25px;
	color: #fff;
	opacity: 0.5;
}
.description {
	margin: 1.5em 0;
	font-weight: 500;
}
.copyright {
	font-weight: 700;
}
.social__media {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1em;
	margin: 1.2em 0 0;
}
.social__link {
  font-size: 1.4rem;
}
.social__link:hover {
  color: #d87d4a;
}
@media (min-width: 600px) {
	.rect {
		left: 0;
		transform: translateX(0%);
	}
	.footer__contents {
		text-align: left;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(4, auto);
	}
	.brand {
		grid-column: 1/-1;
		grid-row: 1;
	}
	.navLists {
		grid-column: 1/-1;
		grid-row: 2;
	}
	.description {
		grid-column: 1/-1;
		grid-row: 3;
	}
	.copyright {
		grid-column: 1/-1;
		grid-row: 4;
	}

	.social__media {
		grid-column: 2;
		grid-row: 4;
		margin: 0;
		justify-self: end;
	}
}
@media (min-width: 992px) {
  .footer__contents {
		text-align: left;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(3, auto);
	}
	.brand {
		grid-column: 1;
		grid-row: 1;
    margin: 0;
	}
	.navLists {
		grid-column: 2;
		grid-row: 1;
    align-self: start;
    justify-self: end;
	}
	.description {
		grid-column: 1;
		grid-row: 2;
	}
	.copyright {
		grid-column: 1/-1;
		grid-row: 3;
	}

	.social__media {
		grid-column: 2;
		grid-row: 2;
		margin: 0;
		justify-self: end;
    align-self: end;
	}
}
</style>
