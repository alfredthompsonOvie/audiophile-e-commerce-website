<template>
	<main>
		<section class="grid product__DetailsPage">
			<section class="grid__content">
				<button type="button" class="btn--backBtn" @click.prevent="handleClick">
					go back
				</button>

				<section class="product__DetailsPage__contents">
					<section class="product__details">
						<picture>
							<source
								:srcset="`${getImageUrl(
									productDetail[0].detailsPreviewImage.desktop
								)}`"
								media="(min-width: 992px)"
							/>
							<source
								:srcset="`${getImageUrl(
									productDetail[0].detailsPreviewImage.tablet
								)}`"
								media="(min-width: 600px)"
							/>
							<img
								:src="`${getImageUrl(
									productDetail[0].detailsPreviewImage.mobile
								)}`"
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

							<form>
								<section class="form__group">
									<button 
									type="button" 
									class="btn--decreaseQuantity"
									@click.prevent="decreaseCount"
									>-</button>
									<label for="productQuantity"></label>
									<input type="text" name="productQuantity" id="productQuantity" class="form__control" v-model="productQuantity">
									<button 
									type="button" 
									class="btn--increaseQuantity"
									@click.prevent="increaseCount"
									>+</button>
								</section>
								<button type="submit" class="cta cta--prim submit">Add to cart</button>
							</form>
						</section>
					</section>

					<section class="features">
						<section class="features__description">
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
							<div>
								<div
									v-for="content in productDetail[0].contents"
									:key="content"
								>
									<p v-for="(value, key) in content" :key="key">
										<span class="quantity">{{ value }}x </span>
										<span class="description">
											{{ key.split("_").join(" ") }}</span
										>
									</p>
								</div>
							</div>
						</section>
					</section>
				</section>
				<!-- showcase -->
				<section class="showcase">
					<picture class="showcase--one">
						<source srcset="" media="(min-width: 992px)">
						<source srcset="" media="(min-width: 992px)">
						<img src="" alt="">
					</picture>
					<picture class="showcase--two">
						<source srcset="" media="(min-width: 992px)">
						<source srcset="" media="(min-width: 992px)">
						<img src="" alt="">
					</picture>
					<picture class="showcase--three">
						<source srcset="" media="(min-width: 992px)">
						<source srcset="" media="(min-width: 992px)">
						<img src="" alt="">
					</picture>
				</section>
				<!-- otherProducts -->
				<section class="moreProduct"></section>
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
import { ref } from "vue";
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

const productQuantity = ref(1);
const increaseCount = () => {
	return productQuantity.value++
}
const decreaseCount = () => {
	if (productQuantity.value === 1) {
		return 1
	}
	return productQuantity.value--
}
</script>

<style scoped>
.product__DetailsPage__contents {
	text-align: left;
}
.product__new {
	/* font-weight: 400; */
	/* font-size: 14px; */
	/* line-height: 19px; */
	/* letter-spacing: 10px; */
	/* text-transform: uppercase; */

	/* color: #D87D4A; */
	margin-top: 1.5em;
}
.product__title {
	/* text-align: left; */
	margin-inline: 0;
	margin-top: 0em;
}
.product__DetailsPage {
	margin-top: 1.5em;
}
.btn--backBtn {
	margin-bottom: 1.5em;
	cursor: pointer;
	font-weight: 500;
	font-size: 15px;
	line-height: 25px;
	color: #000;
	opacity: 0.5;
}
img {
	/* width: 100%; */
}
.price {
	font-weight: 700;
	font-size: 18px;
	line-height: 25px;
	letter-spacing: 1.28571px;
	color: #000;
}
form {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 1em;
	flex-wrap: wrap;
	/* background-color: red; */
}
.form__group {
	display: flex;
	align-items: center;
}
.btn--increaseQuantity,
.btn--decreaseQuantity, .product__quantity, .form__control {
	background-color: #f1f1f1;
	font-weight: 700;
	line-height: 18px;
	text-align: center;
	letter-spacing: 1px;
	color: #000;
}
.btn--increaseQuantity,
.btn--decreaseQuantity, input, .cta {
	/* font-size: clamp(10px, 2vw, 13px); */
	font-size: 13px;

}
.btn--increaseQuantity,
.btn--decreaseQuantity {
	padding: 1em 1em;
	width: 30px;
	height: 40px;
	display: inline-block;
}
.form__control {
	border: 0;
	padding: 1em;
	line-height: 0;
	max-width: 60px;
}


.cta {
	/* flex: 1; */
	color: #fff;
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
	margin-right: 0.8em;
}
.categoryLinks {
	margin-top: 5em;
	padding-inline: 0;
}

@media (min-width: 600px) {
	.product__details {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 500px;
		gap: 2em;
	}
	.product__content {
		align-self: center;
	}
	img {
		/* width: 100%; */
	}
	.product__details img {
		max-height: 500px;
		height: 100%;
		object-fit: cover;
		border-radius: 8px;
	}
	.product__title {
		margin-top: 0em;
	}
	.contents {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: auto;
		margin-top: 4em;
	}
	.contents h1 {
		margin-top: 0;
	}
}
@media (min-width: 800px) {
	.product__details {
		gap: 4em;
	}
}
@media (min-width: 992px) {
	.features {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 2em;
		margin-top: 5em;
	}
	.features h1 {
		margin-top: 0;
	}
	.contents {
		display: block;
		margin-top: 0em;
	}
}
</style>
