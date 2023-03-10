<template>
	<a
		:href="to"
		v-bind="$attrs"
		rel="noopener"
		target="_blank"
		v-if="isExternal"
	>
		<slot />
	</a>

	<router-link v-else v-bind="$props"><slot /></router-link>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
	...RouterLink.props,
});
const isExternal = computed(() => {
	return typeof props.to === "string" && props.to.startsWith("http");
});
</script>

<style scoped></style>
