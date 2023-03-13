<template>
  <main>
		<h1 class="categoryHeading">
			{{ route.name }}
		</h1>
		<section class="product__container grid">
			<section class="grid__content">
				<section
					class="product"
					v-for="speaker in speakers"
					:key="speaker.title"
				>
					<picture>
						<source
							:srcset="`${getImageUrl(speaker.previewImage.desktop)}`"
							media="(min-width: 992px)"
						/>
						<source
							:srcset="`${getImageUrl(speaker.previewImage.tablet)}`"
							media="(min-width: 600px)"
						/>
						<img
							:src="`${getImageUrl(speaker.previewImage.mobile)}`"
							alt=""
						/>
					</picture>
					<section class="product__content">
						<small class="product__new" v-if="speaker.new"> new product</small>
						<h1 class="product__title">{{ speaker.title }}</h1>
						<p class="product__description">
							{{ speaker.description }}
						</p>
						<!-- <router-link :to="{ name: 'speakerDetails', params: { id: `${speaker.title.split(' ').join('-')}`} }" class="cta cta--prim"
							>see product</router-link
						> -->
						<router-link :to="{ name: 'productDetail', params: { id: `speakers/${speaker.title.split(' ').join('-')}` }}" class="cta cta--prim"
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
const speakers = computed(() => data.speakers);

function getImageUrl(name) {
	return new URL(`/src/assets/images/${name}`, import.meta.url).href;
}


</script>

<style scoped>

img {
  display: inline-block;
  margin-bottom: 2em;

}
.categoryLinks {
  margin: 8em 0 1em;
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