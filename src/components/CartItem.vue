<template>
	<section>
		<img :src="`${getImageUrl(item.prodImg)}`" alt="" />
		<div>
			<p class="prodName">{{ item.prodName }}</p>
			<p class="prodPrice">{{ item.prodPrice }}</p>
		</div>
		<div class="btnContainer">
			<button
      type="button"
      @click.prevent="reduceQuantity"
      >-</button>
			<span>{{ item.prodQuantity }}</span>
			<button
      type="button"
      @click.prevent="increaseQuantity(item)"
      >+</button>
		</div>
	</section>
</template>

<script setup>
defineProps({
	item: {
		type: Object,
		required: true,
	},
});
function getImageUrl(name) {
	return new URL(`/src/assets/images/${name}`, import.meta.url).href;
}

const increaseQuantity = (cartItem) => {
  console.log(cartItem);
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
</style>
