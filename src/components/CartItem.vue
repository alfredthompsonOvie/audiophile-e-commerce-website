<template>
	<section>
		<img :src="`${getImageUrl(item.prodImg)}`" alt="" />
		<div>
			<p class="prodName">{{ item.prodName }}</p>
			<p class="prodPrice">$ {{ formatNumber(item.prodPrice) }}</p>
		</div>
		<div class="btnContainer">
			<button
      type="button"
      @click.prevent="decreaseQuantity(item)"
      >-</button>
			<span class="quantity">{{ item.prodQuantity }}</span>
			<button
      type="button"
      @click.prevent="increaseQuantity(item)"
      >+</button>
		</div>
    <button class="deleteItem" @click.prevent="deleteItem(item)">
      <font-awesome-icon icon="fa-solid fa-trash" class="deleteItemIcon"/>
    </button>
	</section>
</template>

<script setup>
// import { storeToRefs } from 'pinia';
import { useCartStore } from '../stores/cart';
defineProps({
	item: {
		type: Object,
		required: true,
	},
});
function getImageUrl(name) {
	return new URL(`/src/assets/images/${name}`, import.meta.url).href;
}
const store = useCartStore();

const decreaseQuantity = (cartItem) => {
  // console.log("decrease", cartItem);
  store.decreaseQuantity(cartItem);
}
const increaseQuantity = (cartItem) => {
  // console.log("increase", cartItem);
  store.incrementItemQuantity(cartItem);
}
const deleteItem = (item) => {
  store.deleteItem(item);
}
function formatNumber(num) {
	return parseInt(num).toLocaleString("en-US")
}
</script>

<style scoped>
section {
  display: flex;
  align-items: center;
  gap: 1em;
}
section + section {
  margin-top: 1em;
}
img {
  width: 50px;
}
.prodName {
  font-weight: 700;
font-size: 15px;
line-height: 25px;
/* identical to box height, or 167% */


color: #000000;
}
.prodPrice {
  font-weight: 700;
font-size: 14px;
line-height: 25px;
/* identical to box height, or 179% */


color: #000000;

mix-blend-mode: normal;
opacity: 0.5;
}
.btnContainer {
  margin-left: auto;
  background-color: #fcfcfc;
  width: 96px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: .5em 1em; */
}
.btnContainer > * {
  flex: 1;
  text-align: center;
}
.quantity {
	font-weight: 700;
}
.deleteItemIcon {
  color: var(--main);
  /* color: maroon; */
}
</style>
