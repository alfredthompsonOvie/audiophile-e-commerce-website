<template>
	<section class="cart__wrapper grid">
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
				>
					Remove all
				</button>
			</header>
			
      
      <!-- <ul class="cart__items">
				<li>
					<img src="" alt="" />
					<p>
						<span></span>
						<span></span>
					</p>
				</li>
			</ul> -->

      <section class="cartList">
       <cartItem  
       v-for="item in cart.displayItems"
        :key="item.prodName"
        :item="item"
        />
      </section>

      <section class="cartTotal">
        <p>total</p>
        <p>${{ cart.totalPrice }}</p>
      </section>

		</section>
    <section 
    class="overlay"
    @click.prevent="handleClick"
    ></section>
	</section>
</template>

<script setup>
import { ref } from "vue";
import cartItem from "./CartItem.vue";
import { useCartStore } from "../stores/cart";

const numberOfItems = ref(3);
// const prodQuantity = ref(1)
// const total = ref(5, 396)
const emit = defineEmits(['closeCart'])

const cart = useCartStore()

const removeAllItems = () => {
  console.log("remove all");
  cart.removeAllItems();
};
const handleClick = () => {
  emit('closeCart')
}

</script>

<style scoped>
.cart__wrapper {
padding-top: 2em;

}
.overlay{
  position: absolute;
  position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #000;
opacity: .4;
z-index: 2;
}
.cart {
  z-index: 5;
	border-radius: 8px;
	background-color: #fff;
	/* background-color: #ff0; */
	max-width: 300px;
	max-width: 350px;
  width: 100%;
	margin-left: auto;
  padding: 1.5em;
  /* padding: 1.5em 1.5em; */
  opacity: 1;
  grid-column: 2;
  align-self: start;
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
</style>
