<template>
	<button type="button" class="btn--backBtn" @click.prevent="handleClick">
		go back
	</button>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const handleClick = () => {
	router.go(-1);
};
</script>

<style scoped>
.btn--backBtn {
	margin-bottom: 1.5em;
	cursor: pointer;
	font-weight: 500;
	font-size: 15px;
	line-height: 25px;
	color: #000;
	opacity: 0.5;
}
</style>
