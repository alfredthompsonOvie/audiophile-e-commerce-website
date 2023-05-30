<template>
	<section class="modal">
		<div class="feedback">
			<section>
				<img
					src="@/assets/images/checkmark.svg"
					alt="checkmark"
					class="checkmark"
				/>
				<h1 class="feedback__title">Thank you for your order</h1>
				<p class="feedback__text">
					You will receive an email confirmation shortly.
				</p>
			</section>
			<section class="summary__result">
				<section class="summary__lists">
					<!-- <section v-for="product in items" :key="product.name">
						<img
							:src="`${getImageUrl(product.prodImg)}`"
							alt=""
							class="productImage"
						/>
						<div>
							<p class="prodName">{{ product.prodName }}</p>
							<p class="prodPrice">$ {{ formatNumber(product.prodPrice) }}</p>
						</div>
						<p class="productQuatity">x{{ product.prodQuantity }}</p>
					</section> -->

					<SummaryList :products="items" />

					<button
						type="button"
						@click.prevent="toggleSummaryItems"
						class="toggleSummaryItemsBtn"
					>
						{{ buttonText }}
					</button>
				</section>
				<section class="summary__grandTotal">
					<p class="summary__title">grand total</p>
					<p class="summary__total">
						$ {{ formatNumber(store.grandTotal) }}
					</p>
				</section>
			</section>
			<button type="button" @click.prevent="goHome" class="cta cta--prim">
				back to home
			</button>
		</div>
	</section>
</template>

<script setup>
import { computed, ref } from "vue";
import { useCartStore } from "../stores/cart";
import SummaryList from "./SummaryList.vue";
import { useRouter } from "vue-router";

const store = useCartStore();
const router = useRouter();

const viewAllItems = ref(false);
// const allItems = ref([]);

const items = computed(() => {
	if (!viewAllItems.value) {
		return store.displayItems.slice(0, 1);
	}
	return store.displayItems;
});

const buttonText = computed(() => {
	return viewAllItems.value
		? "View less"
		: `and ${store.itemsCount} other item(s)`;
});
const toggleSummaryItems = () => {
	if (viewAllItems.value) {
		return (viewAllItems.value = false);
	}
	return (viewAllItems.value = true);
};

function goHome() {
	store.$reset();
	router.push({ name: "home" });
}
// function getImageUrl(name) {
// 	return new URL(`/src/assets/images/${name}`, import.meta.url).href;
// }
function formatNumber(num) {
	return parseInt(num).toLocaleString("en-US");
}
</script>

<style scoped>
.modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;

	background-color: rgba(0, 0, 0, 0.4);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1em 2em;
}
.feedback {
	background-color: #fff;
	padding: 2em;
	border-radius: 8px;
	max-width: 540px;
	width: 100%;
  margin-top: 5em;
}
.checkmark {
	width: 64px;
	height: 64px;
	margin-bottom: 2em;
}
.feedback__title {
	font-weight: 700;
	font-size: 24px;
	line-height: 28px;
	letter-spacing: 0.857143px;
	text-transform: uppercase;
	color: #000000;
	max-width: 284px;
	width: 100%;
}
.feedback__text {
	font-weight: 500;
	font-size: 15px;
	line-height: 25px;
	/* identical to box height, or 167% */

	color: #000000;

	mix-blend-mode: normal;
	opacity: 0.5;
	margin: 1em 0;
}
.summary__result {
	/* display: grid;
	grid-template-columns: 1.5fr 1fr;
	grid-template-rows: repeat(2, auto); */
	border-radius: 8px;
  overflow: hidden;
  margin: 2.5em 0;

}
.summary__lists {
	background-color: #f1f1f1;
  padding: 1em 1.5em 0em 1em;
}
.toggleSummaryItemsBtn {
	margin-top: 1em;
	/* border-top: 1px solid; */

	font-weight: 700;
	font-size: 12px;
	line-height: 16px;
	/* letter-spacing: -0.214286px; */

	color: #000000;

	/* mix-blend-mode: normal; */
	opacity: 0.5;
  position: relative;
  padding: 1.5em;
  width: 100%;
}
.toggleSummaryItemsBtn::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
  width: 100%;
  height: 1px;
	background: #000000;
	/* mix-blend-mode: normal; */
	opacity: 0.08;
}

.summary__grandTotal {
	background-color: #000000;
/* border-radius: 0px 8px 8px 0px; */
padding: 2em;
}

p.summary__title {
	font-weight: 500;
	font-size: 15px;
	line-height: 25px;
	/* identical to box height, or 167% */

	color: #ffffff;

	mix-blend-mode: normal;
	opacity: 0.5;
	text-transform: uppercase;

}
p.summary__total {
	font-weight: 700;
	font-size: 18px;
	line-height: 25px;
	/* identical to box height */

	/* text-align: right; */
	text-transform: uppercase;

	color: #ffffff;
}
.cta {
	width: 100%;
	text-align: center;
	font-weight: 700;
	font-size: 13px;
	line-height: 18px;
	/* identical to box height */

	text-align: center;
	letter-spacing: 1px;
	text-transform: uppercase;

	color: #ffffff;
}
@media (min-width: 768px) {
	.feedback__title {
		font-size: 32px;
		line-height: 36px;
		letter-spacing: 1.14286px;
	}
  .summary__result {
	display: grid;
	grid-template-columns: 1.5fr 1fr;
	grid-template-rows: repeat(2, auto);
}
.summary__grandTotal {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
}
</style>
