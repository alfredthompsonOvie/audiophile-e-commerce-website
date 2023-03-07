<template>
	<nav class="grid">
		<section class="grid__content nav__content">
			<!-- hamburger -->
			<section class="hamburger" v-if="isMobile">
				<button 
        class="openMenu" 
        v-if="!isMenuOpen"
        @click="isMenuOpen = !isMenuOpen"
        >
					<font-awesome-icon icon="fa-solid fa-bars" />
				</button>
				<button 
        class="closeMenu" 
        v-if="isMenuOpen"
        @click="isMenuOpen = !isMenuOpen"
        >
					<font-awesome-icon icon="fa-solid fa-xmark" />
				</button>
			</section>

			<router-link to="/" class="brand">
				<img src="@/assets/images/audiophile.svg" alt="" />
			</router-link>

			<!-- menu -->
			<!-- mobile  -->
      <transition
      :css="false"
      @enter="onEnter"
      @leave="onLeave"
      >
        <ul class="dropdown" v-show="isMenuOpen">
          <li class="dropdown__item">
            <router-link :to="{ name: 'product' }" class="dropdown__link">
              <img src="@/assets/images/image-headphone-menu.svg" alt="" />
              <p>Headphones</p>
              <span>
                <span class="span__text"> shop </span>
                <font-awesome-icon icon="fa-solid fa-angle-right" />
              </span>
            </router-link>
          </li>
          <li class="dropdown__item">
            <router-link :to="{ name: 'product' }" class="dropdown__link">
              <img src="@/assets/images/image-speakers-menu.svg" alt="" />
              <p>Speakers</p>
              <span>
                <span class="span__text"> shop </span>
                <font-awesome-icon icon="fa-solid fa-angle-right" />
              </span>
            </router-link>
          </li>
          <li class="dropdown__item">
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
      </transition>
			<!-- desktop nav -->
			<ul class="nav__menu" v-if="!isMobile">
				<li>
					<router-link :to="{ name: '' }">Home</router-link>
				</li>
				<li>
					<router-link :to="{ name: '' }">Headphones</router-link>
				</li>
				<li>
					<router-link :to="{ name: '' }">Speakers</router-link>
				</li>
				<li>
					<router-link :to="{ name: '' }">Earphones</router-link>
				</li>
			</ul>
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
onMounted(() => {
  checkScreen();
  window.addEventListener("resize", checkScreen)
})
const tl = gsap.timeline()

const onEnter = (el, done) => {
  el.addEventListener('transitionEnd', () => {
    console.log('end');
    
  })
  tl
    .from(el.children, {
      autoAlpha:0.01,
      x: -50,
      stagger: 0.3,
      onComplete: () => {
        gsap.from(el.children, {
          clearProps: true
        })
        done();
      },
    })
  
}
const onLeave = (el, done) => {
  tl
    .to(el.children, {
      y: -50,
      stagger: 0.1,
      autoAlpha: 0.01,
      onComplete: () => {
        gsap.from(el.children, {
          clearProps: true
        })
        done();
      },
    })
}

</script>

<style scoped>
nav {
	background-color: #000;
	height: 5em;
	position: relative;
	z-index: 99;
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
.dropdown__item {
	background: #f1f1f1;
	border-radius: 8px;
}
.dropdown__item + .dropdown__item {
	margin-top: 4em;
}
.dropdown__link {
	position: relative;
	display: block;
	text-align: center;
	padding: 5em 2em 2em;
	font-size: 15px;
}
.dropdown__link img {
	position: absolute;
	top: -50px;
	left: 50%;
	transform: translateX(-50%);
}
.dropdown__link p {
	color: #000;
	text-transform: uppercase;
	font-weight: 700;
	letter-spacing: 1.07143px;
	line-height: 20px;
	margin-bottom: 0.7em;
}
.dropdown__link span {
	display: inline-flex;
	align-items: center;
	gap: 0.5em;
}
.span__text {
	letter-spacing: 1px;
	text-transform: uppercase;
	color: #000000;
	mix-blend-mode: normal;
	opacity: 0.5;
	font-weight: 700;
	font-size: 13px;
}
.fa-angle-right {
	color: #d87d4a;
}
/* color: #D87D4A;
 */
.nav__menu {
  display: flex;
  align-items: center;
  gap: 2em;
}
.nav__menu a {
  font-size: 13px;
  /* font-weight: 700; */
line-height: 25px;
letter-spacing: 2px;
/* transition: all .3s linear; */
position: relative;
}

.nav__menu a::before {
  content: "";
  position: absolute;
  width: 0%;
  height: 150%;
  left: 50%;
  transition: all .3s linear;
  background-color: #D87D4A;
  mix-blend-mode: multiply;
}

.nav__menu a:hover::before {
  left: 0%;
  width: 100%;
}


@media (min-width: 600px) and (max-width: 991px) {
	.nav__content {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 2em;
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
</style>
