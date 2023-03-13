<template>
	<main>
		<section class="grid product__Detail">
			<section class="grid__content">
				<button type="button" class="btn--backBtn" @click.prevent="handleClick">
					go back
				</button>

				<section class="product">
					<picture>
						<source
							:srcset="`${getImageUrl(productDetail[0].previewImage.desktop)}`"
							media="(min-width: 992px)"
						/>
						<source
							:srcset="`${getImageUrl(productDetail[0].previewImage.tablet)}`"
							media="(min-width: 600px)"
						/>
						<img
							:src="`${getImageUrl(productDetail[0].previewImage.mobile)}`"
							alt=""
						/>
					</picture>
					<section class="product__content">
						<small class="product__new" v-if="productDetail[0].new">
							new product</small
						>
						<h1 class="product__title">{{ productDetail[0].title }}</h1>
						<p class="product__description">
							{{ productDetail[0].description }}
						</p>

						<p class="price">{{ productDetail[0].price }}</p>
						<section class="cartBtn">
							<section class="numberOfItemContainer">
								<button>-</button>
								<input type="number" />
								<button>+</button>
							</section>
							<button class="cta cta--prim">Add to cart</button>
						</section>
					</section>
					<section class="features">
						<h1 class="title">Features</h1>
						<p
							v-for="feature in productDetail[0].features"
							:key="feature"
							class="description"
						>
							{{ feature }}
						</p>
					</section>
					<section class="contents">
						<h1 class="title">In the box</h1>
						<div v-for="content in productDetail[0].contents" :key="content">
							<p v-for="(value, key) in content" :key="key">
								<span class="quantity">{{ value }}x </span>
								<span class="description"> {{ key.split("_").join(" ") }}</span>
							</p>
						</div>
					</section>
				</section>
        <BaseCategoryLinks class="categoryLinks" />
			</section>
		</section>
    <BaseAbout />
	</main>
</template>

<script setup>
import data from "@/data/data.json";
import BaseCategoryLinks from "@/components/BaseCategoryLinks.vue";
import BaseAbout from "@/components/BaseAbout.vue";
import { useRouter } from "vue-router";
const props = defineProps({
	id: {
		type: String,
		required: true,
	},
});
const product = props.id.split("/")[1];
const category = props.id.split("/")[0];

const productDetail = data[category].filter(
	(e) => e.title.split(" ").join("-").toLowerCase() === product.toLowerCase()
);
function getImageUrl(name) {
	return new URL(`/src/assets/images/${name}`, import.meta.url).href;
}
const router = useRouter();
const handleClick = () => {
	router.go(-1);
};
</script>

<style scoped>
.product {
	text-align: left;
}
.product__title {
	/* text-align: left; */
	margin-inline: 0;
	margin-top: 1em;
}
.product__Detail {
	margin-top: 1.5em;
}
.btn--backBtn {
	margin-bottom: 1.5em;
	cursor: pointer;
}
.price {
	font-weight: 700;
	font-size: 18px;
	line-height: 25px;
	letter-spacing: 1.28571px;
	color: #000;
}
.cartBtn {
	display: flex;
	align-items: center;
	gap: 1em;
	/* background-color: red; */
}
.numberOfItemContainer {
	/* width: 120px; */
	display: flex;
	align-items: center;
	background-color: red;
}
.numberOfItemContainer button,
.numberOfItemContainer input {
	flex: 1;
}
input,
button {
	width: 30px;
}
.cta {
	flex: 1;
	color: #fff;
	/* font-size: 13px; */
	/* letter-spacing: 1px; */
	/* line-height: 18px; */
	/* font-weight: 700; */
	/* text-align: center; */
	/* text-transform: uppercase; */
}
.title {
	font-weight: 700;
	font-size: 24px;
	line-height: 36px;
	letter-spacing: 0.857143px;
	text-transform: uppercase;
	color: #000;
	margin: 1em 0;
}
.description {
	font-weight: 500;
	font-size: 15px;
	line-height: 25px;
	color: #000;
	opacity: 0.5;
}
.description + .description {
	margin-top: 2em;
}
/* .contents {
  margin-top: 1.5em;
} */
.quantity {
	font-weight: 700;
	font-size: 15px;
	line-height: 25px;
	color: #d87d4a;
  margin-right: .8em;
}
.categoryLinks {
  margin-top: 5em;
}
</style>
