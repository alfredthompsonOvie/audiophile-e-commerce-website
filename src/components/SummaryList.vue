<template>
	<section class="summaryList">
		<section>
			<SummaryItem
				v-for="item in store.displayItems"
				:key="item.prodName"
				:product="item"
			/>
		</section>
	</section>
</template>

<script setup>
import { useCartStore } from "../stores/cart";
import SummaryItem from "../views/SummaryItem.vue";

const store = useCartStore();

</script>

<style scoped>
.summaryList {
	margin-bottom: 1em;
}
</style>
