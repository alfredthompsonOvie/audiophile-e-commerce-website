<template>
	<nav class="grid navBar">
		<section class="grid__content navBar__content">
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
				<img
					src="@/assets/images/audiophile.svg"
					alt="audiophile home button"
				/>
			</router-link>

			<!-- menu -->
			<!-- mobile  -->
			<BaseCategoryLinks class="mobileMenu" v-if="isMenuOpen"/>

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
			<button
				type="button"
				class="btn--cart"
				@click.prevent="showCart = !showCart"
			>
				<img src="@/assets/images/cart.svg" alt="" />
				<transition name="fade" appear>
					<span class="itemsInCart" v-if="store.itemsCount">{{
						store.itemsCount
					}}</span>
				</transition>
			</button>
		</section>
	</nav>
	<div class="overlay" v-if="isMenuOpen"></div>
	<Transition name="fade" appear>
		<BaseCart v-if="showCart" @close-cart="showCart = !showCart" />
	</Transition>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import BaseCategoryLinks from "./BaseCategoryLinks.vue";
import BaseNavMenu from "./BaseNavMenu.vue";
import BaseCart from "./BaseCart.vue";
import { useCartStore } from "../stores/cart";

const isMenuOpen = ref(null);
const isMobile = ref(null);
const windowWidth = ref(null);

const showCart = ref(false);
const store = useCartStore();

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

// const tl = gsap.timeline({
// 	reversed: true,
// 	onStart: () => {
// 		isMenuOpen.value = !isMenuOpen.value;
// 	},
// 	onReverseComplete: () => {
// 		isMenuOpen.value = !isMenuOpen.value;
// 	},
// });
onMounted(() => {
	checkScreen();
	window.addEventListener("resize", checkScreen);

	// tl.from(".mobileMenu .menuItem", {
	// 	autoAlpha: 0.01,
	// 	x: -50,
	// 	stagger: 0.3,
	// });
});

const handleClick = () => {
	console.log("clicked");
	// tl.reversed(!tl.reversed());
	isMenuOpen.value = !isMenuOpen.value;

};
</script>

<style scoped>
.navBar {
	background-color: #0e0e0e;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	width: 100%;
	height: 6em;
	z-index: 99;
}
.navBar__content {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.hamburger {
	position: relative;
	z-index: 99;
}
.brand {
	font-weight: 700;
	position: relative;
	z-index: 99;
}
.mobileMenu {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.2);
	display: grid;
	grid-template-columns: 1fr 10fr 1fr;
	grid-template-rows: 10em auto;
	z-index: 20;
}
.overlay {
	background-color: rgba(0, 0, 0, 0.2);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	width: 100%;
	z-index: 10;
}
/* nav menu */
.btn--cart {
	position: relative;
}

.itemsInCart {
	background-color: var(--grayishWhite);
	position: absolute;
	top: -0.8em;
	left: 1.6em;
	padding: 0.2em;
	border-radius: 50%;
	font-size: 0.7rem;
}
/* VUE TRANSITION =======================================================*/
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
	transition: 0.5s all linear;
}
@media (min-width: 600px) {
	nav {
		border-bottom: 0;
	}
	.navBar__content {
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}
	.mobileMenu {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.2);
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 5em auto;
		z-index: 20;
	}
	
}
@media (min-width: 600px) and (max-width: 991px) {
	.navBar__content {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 2em;
	}
	/* .dropdown__overlay {
		padding: 5em 2em 4em;
	} */

	.btn--cart {
		margin-left: auto;
	}
	/* .overlay {
		background-color: rgba(0, 0, 0, 0.2);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100%;
		width: 100%;
		z-index: 10;
	} */
}
@media (min-width: 992px) {
	nav {
		background-color: #121212;
	}
}
</style>
