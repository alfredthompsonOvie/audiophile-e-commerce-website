<template>
  <main>
		<h1 class="categoryHeading">
			{{ route.name }}
		</h1>
		<section class="product__container grid">
			<section class="grid__content">
				<section
					class="product"
					v-for="earphone in earphones"
					:key="earphone.title"
				>
					<picture>
						<source
							:srcset="`${getImageUrl(earphone.previewImage.desktop)}`"
							media="(min-width: 992px)"
						/>
						<source
							:srcset="`${getImageUrl(earphone.previewImage.tablet)}`"
							media="(min-width: 600px)"
						/>
						<img
							:src="`${getImageUrl(earphone.previewImage.mobile)}`"
							alt=""
						/>
					</picture>
					<section class="product__content">
						<small class="product__new" v-if="earphone.new"> new product</small>
						<h1 class="product__title">{{ earphone.title }}</h1>
						<p class="product__description">
							{{ earphone.description }}
						</p>
						<router-link :to="{ name: 'earphoneDetails', params: { id: `${earphone.title.split(' ').join('')}` } }" class="cta cta--prim"
							>see product</router-link
						>
					</section>
				</section>
        <BaseCategoryLinks class="categoryLinks"/>
			</section>
		</section>
    <BaseAbout />

	</main>
</template>

<script setup>
import { useRoute } from "vue-router";
import data from "@/data/data.json";
import { computed } from "vue";
import BaseCategoryLinks from "@/components/BaseCategoryLinks.vue"
import BaseAbout from "@/components/BaseAbout.vue";

const route = useRoute();
const earphones = computed(() => data.earphones);

function getImageUrl(name) {
	return new URL(`/src/assets/images/${name}`, import.meta.url).href;
}

// console.log('hey tommy'.split(" ").join(''));
// const joinWords = (word) => {
//   return word.split(" ").join('')
// }
</script>

<style scoped>

img {
  display: inline-block;
  margin-bottom: 2em;

}
.categoryLinks {
  margin: 8em 0 1em;
}
.product__title {
  max-width: 300px;
}
@media (min-width: 900px){
  img {
    border-radius: 8px;
    height: 100%;
    flex: 1;
    object-fit: cover;
  }
}
</style>