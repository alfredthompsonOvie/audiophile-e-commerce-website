<template>
	<section class="summaryList">
		<section>
			<!-- <SummaryItem
				v-for="item in store.displayItems"
				:key="item.prodName"
				:product="item"
			/> -->
      <SummaryItem v-for="product in products" :key="product.prodName" :product="product"/>
		</section>
	</section>
</template>

<script setup>
// import { useCartStore } from "../stores/cart";
import SummaryItem from "../components/SummaryItem.vue";

// const store = useCartStore();

defineProps({
  products: {
    type: Object,
    required: true,
  }
})

</script>

<style scoped>
.summaryList {
	/* margin-bottom: 1em; */
  /* padding: 1em; */
}
</style>
