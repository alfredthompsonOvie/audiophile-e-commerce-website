<template>
	<nav class="grid">
		<section class="grid__content nav__content">
			<!-- hamburger -->
			<section class="hamburger" v-if="isMobile">
				<button class="openMenu" v-if="!isMenuOpen" @click="handleClick">
					<font-awesome-icon icon="fa-solid fa-bars" />
				</button>
				<button class="closeMenu" v-if="isMenuOpen" @click="handleClick">
					<font-awesome-icon icon="fa-solid fa-xmark" />
				</button>
			</section>

			<router-link to="/" class="brand">
				<img src="@/assets/images/audiophile.svg" alt="audiophile home button" />
			</router-link>

			<!-- menu -->
			<!-- mobile  -->
			<!-- <ul class="dropdown" v-show="isMenuOpen">
				<li class="dropdown__item menuItem">
					<router-link :to="{ name: 'headphones' }" class="dropdown__link">
						<img src="@/assets/images/image-headphone-menu.svg" alt="" />
						<p>Headphones</p>
						<span>
							<span class="span__text"> shop </span>
							<font-awesome-icon icon="fa-solid fa-angle-right" />
						</span>
					</router-link>
				</li>
				<li class="dropdown__item menuItem">
					<router-link :to="{ name: 'speakers' }" class="dropdown__link">
						<img src="@/assets/images/image-speakers-menu.svg" alt="" />
						<p>Speakers</p>
						<span>
							<span class="span__text"> shop </span>
							<font-awesome-icon icon="fa-solid fa-angle-right" />
						</span>
					</router-link>
				</li>
				<li class="dropdown__item menuItem">
					<router-link :to="{ name: 'earphones' }" class="dropdown__link">
						<img src="@/assets/images/image-earphone-menu.png" alt="" />
						<p>Earphones</p>
						<span>
							<span class="span__text"> shop </span>
							<font-awesome-icon icon="fa-solid fa-angle-right" />
						</span>
					</router-link>
				</li>
			</ul> -->
			<BaseCategoryLinks class="dropdown" v-show="isMenuOpen"/>

			<!-- desktop nav -->
			<!-- <ul class="nav__menu" v-if="!isMobile">
				<li>
					<router-link :to="{ name: 'home' }">Home</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'headphones' }">Headphones</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'speakers' }">Speakers</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'earphones' }">Earphones</router-link>
				</li>
			</ul> -->
			<BaseNavMenu v-if="!isMobile" />
			<!-- ^^^^^^^^^^menu^^^^^^^^^^^ -->
			<!-- cart -->
			<button type="button" class="btn--cart">
				<img src="@/assets/images/cart.svg" alt="" />
			</button>
		</section>
	</nav>
	<section class="overlay" v-show="isMenuOpen"></section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import BaseCategoryLinks from "./BaseCategoryLinks.vue";
import BaseNavMenu from "./BaseNavMenu.vue";

const isMenuOpen = ref(null);
const isMobile = ref(null);
const windowWidth = ref(null);

const checkScreen = () => {
	windowWidth.value = window.innerWidth;
	if (windowWidth.value <= 991) {
		isMobile.value = true;
		isMenuOpen.value = false;
		return;
	}
	isMobile.value = false;
	isMenuOpen.value = false;
	return;
};

const tl = gsap.timeline({
	reversed: true,
	onStart: () => {
		isMenuOpen.value = !isMenuOpen.value;
	},
	onReverseComplete: () => {
		isMenuOpen.value = !isMenuOpen.value;
	},
});
onMounted(() => {
	checkScreen();
	window.addEventListener("resize", checkScreen);

	tl.from(".menuItem", {
		autoAlpha: 0.01,
		x: -50,
		stagger: 0.3,
	});
});

const handleClick = () => {
	tl.reversed(!tl.reversed());
};
</script>

<style scoped>
nav {
	/* background-color: #000; */
	background-color: #0e0e0e;
	height: 5em;
	position: relative;
	z-index: 99;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.nav__content {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.brand {
	font-weight: 700;
}
.dropdown {
	position: absolute;
	top: 5em;
	left: 0;
	width: 100%;
	padding: 5em 1em 1em;
	background-color: #fff;
	z-index: 20;
}

/* nav menu */

@media (min-width: 600px) {
	nav {
		border-bottom: 0;
	}
	.nav__content {
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

}
@media (min-width: 600px) and (max-width: 991px) {
	.nav__content {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 2em;
	}
	/* .dropdown {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1em;
		padding: 5em 2em 4em;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
	} */
	.dropdown {
		padding: 5em 2em 4em;
	}

	/* .dropdown__item + .dropdown__item {
		margin-top: 0;
	}
	.dropdown__item {
		flex: 1;
	} */
	.btn--cart {
		margin-left: auto;
	}
	.overlay {
		background-color: rgba(0, 0, 0, 0.2);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100%;
		width: 100%;
		z-index: 10;
	}
}
@media (min-width: 992px){
	nav {
		background-color: #121212;
	}
}
</style>
