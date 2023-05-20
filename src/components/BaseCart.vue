<template>
	<section 
	class="cart__wrapper"
	@click.prevent.self="handleClick"
	>
		<section class="cart">
			<header>
				<h1>
					<span>cart</span>
					<span>({{ numberOfItems }})</span>
				</h1>
				<button
					class="btn btn--removeAll"
					type="button"
					@click.prevent="removeAllItems"
					v-show="numberOfItems"
				>
					Remove all
				</button>
			</header>

			<section class="cartList">
				<template v-if="numberOfItems">
					<cartItem
						v-for="item in cart.displayItems"
						:key="item.prodName"
						:item="item"
					/>
				</template>
				<p class="emptyCart" v-else>
					Your cart is empty!
				</p>
			</section>

			<template v-if="numberOfItems">
				<section class="cartTotal">
					<p>total</p>
					<p class="totalAmount">$ {{ cart.totalPrice.toLocaleString("en-US") }}</p>
				</section>
				<button class="cta cta--prim" @click.prevent="goToCheckout">checkout</button>
			</template>
		</section>
	</section>
</template>

<script setup>
import { computed } from "vue";
import cartItem from "./CartItem.vue";
import { useCartStore } from "../stores/cart";
// import { Router } from "vue-router";
import { useRouter } from "vue-router";

const emit = defineEmits(['closeCart'])

const cart = useCartStore();

// const numberOfItems = ref(cart.itemsCount);
const numberOfItems = computed(() => {
	return cart.itemsCount
})

const removeAllItems = () => {
	console.log("remove all");
	cart.removeAllItems();
};
const handleClick = () => {
  emit('closeCart')
	// console.log("self");
}
const router = useRouter();
const goToCheckout = () => {
	// handleClick();
	emit('closeCart')
	router.push({name: 'checkout'})
}
</script>

<style scoped>
.cart__wrapper {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	padding-top: 2em;
	background-color: rgba(0, 0, 0, 0.4);
	/* background-color: rgba(0, 0, 0, 1); */
	z-index: 10;

	display: grid;
	grid-template-columns: 1fr 10fr 1fr;
	grid-template-rows: auto;
}
/* .overlay {
	position: absolute;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #000;
	opacity: 0.4;
	z-index: 2;
} */
.cart {
	grid-column: 2;
	align-self: start;
	border-radius: 8px;
	background-color: #fff;
	max-width: 300px;
	max-width: 350px;
	width: 100%;
	margin-left: auto;
	padding: 1.5em;
	opacity: 1;
	z-index: 5;
	margin-top: 5em;
}
header {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
header h1 {
	font-weight: 700;
	font-size: 18px;
	line-height: 25px;
	letter-spacing: 1.28571px;
	text-transform: uppercase;
	color: #000;
}
.btn--removeAll {
	font-weight: 500;
	font-size: 15px;
	line-height: 25px;

	text-decoration-line: underline;

	color: #000;
	opacity: 0.5;
}
.cartList {
	margin: 1em 0;
}
.cartTotal {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.cta--prim {
	color: #fff;
	width: 100%;
	margin-top: 1em;
}
.emptyCart {
	text-align: center;
	font-style: italic;
	opacity: .8;
}
.totalAmount {
	font-weight: 700;
}
</style>
