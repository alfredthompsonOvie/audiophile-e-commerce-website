<template>
	<section>
		<img :src="`${getImageUrl(product.prodImg)}`" alt="" class="productImage"/>
		<div>
			<p class="prodName">{{ product.prodName }}</p>
			<p class="prodPrice">$ {{ formatNumber(product.prodPrice) }}</p>
		</div>
		<p class="productQuatity">x{{ product.prodQuantity }}</p>
		<!-- <div class="btnContainer">
										<button
											type="button"
											@click.prevent="decreaseQuantity(item)"
										>
											-
										</button>
										<span class="quantity">{{ item.prodQuantity }}</span>
										<button
											type="button"
											@click.prevent="increaseQuantity(item)"
										>
											+
										</button>
									</div>
									<button class="deleteItem" @click.prevent="deleteItem(item)">
										<font-awesome-icon
											icon="fa-solid fa-trash"
											class="deleteItemIcon"
										/>
									</button> -->
	</section>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})

function getImageUrl(name) {
	return new URL(`/src/assets/images/${name}`, import.meta.url).href;
}
function formatNumber(num) {
	return parseInt(num).toLocaleString("en-US");
}
</script>

<style scoped>
/* ====================SUMMARY============================ */
/* ====================SUMMARY============================ */
/* ====================SUMMARY============================ */
section {
  display: flex;
  align-items: center;
  gap: 1em;
}
section + section {
  margin-top: 1em;
}
.productImage {
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
/* .btnContainer {
	margin-left: auto;
	background-color: #fcfcfc;
	width: 96px;
	height: 32px;
	display: flex;
	justify-content: space-between;
	align-items: center;
} */
.btnContainer > * {
	flex: 1;
	text-align: center;
}
.productQuatity {
	font-weight: 700;
  margin-left: auto;
  font-weight: 700;
	font-size: 14px;
	line-height: 25px;
	/* identical to box height, or 179% */

	color: #000000;

	mix-blend-mode: normal;
	opacity: 0.5;
}

</style>
