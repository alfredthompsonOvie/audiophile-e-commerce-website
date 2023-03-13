<template>
  <!-- <main>
    <h1>details page</h1>
    <p>{{ props.id }}</p>
  </main> -->
  <main>
    <section class="product__container grid">
      <section class="grid__content">
        <button type="button" class="btn--backBtn">go back</button>
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
            <p>{{ product.price }}</p>
            <section class="cartBtn">
              <section>
                <button>-</button>
                <input type="number">
                <button>+</button>
              </section>
              <button class="cta cta--prim">Add to cart</button>
            </section>
					</section>
          <section class="features">
            <h1>Features</h1>
            <p 
            v-for="feature in product.features"
            :key="feature"
            >{{ feature }}
          </p>
          </section>
          <section class="contents">
            <h1>In the box</h1>
            <p 
            v-for="feature in product.features"
            :key="feature"
            >{{ feature }}
          </p>
          </section>
				</section>
        <BaseCategoryLinks class="categoryLinks"/>
			</section>
		</section>
    <BaseAbout />

	</main>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
</script>

<style  scoped>

</style>