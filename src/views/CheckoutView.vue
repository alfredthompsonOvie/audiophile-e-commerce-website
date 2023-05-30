<template>
	<main>
		<section class="grid">
			<section class="grid__content">
				<BaseGoBack class="btn--back" />
				<form class="form" @submit="onSubmit">
					<section class="form__main">
						<h1 class="heading">checkout</h1>
						<fieldset>
							<legend>billing details</legend>
							<section class="form__group">
								<label
									for="fullName"
									:class="{ 'label--error': errors.fullName }"
									>Name</label
								>
								<input
									type="text"
									placeholder="Alexei Ward"
									name="fullName"
									v-model="fullName"
									id="name"
									class="form__control"
									:class="{ 'form__control--error': errors.fullName }"
								/>
								<span class="error">{{ errors.fullName }}</span>
							</section>
							<section class="form__group form__group--email">
								<label for="email" :class="{ 'label--error': errors.email }"
									>Email</label
								>
								<input
									type="email"
									placeholder="alexei@mail.com"
									name="email"
									v-model="email"
									id="email"
									class="form__control"
								/>
								<span class="error">{{ errors.email }}</span>
							</section>
							<section class="form__group form__group--tel">
								<label for="tel" :class="{ 'label--error': errors.tel }"
									>Phone Number</label
								>
								<input
									type="tel"
									placeholder="+1 202-555-0136"
									name="tel"
									v-model="tel"
									id="tel"
									class="form__control"
								/>
								<span class="error">{{ errors.tel }}</span>
							</section>
						</fieldset>

						<fieldset>
							<legend>shipping info</legend>
							<section class="form__group form__group--address">
								<label for="address" :class="{ 'label--error': errors.address }"
									>Address</label
								>
								<input
									type="text"
									placeholder="1137 Williams Avenue"
									name="address"
									v-model="address"
									id="address"
									class="form__control"
								/>
								<span class="error">{{ errors.address }}</span>
							</section>
							<section class="form__group form__group--zipCode">
								<label for="zipCode" :class="{ 'label--error': errors.zipCode }"
									>ZIP Code</label
								>
								<input
									type="number"
									placeholder="10001"
									name="zipCode"
									v-model="zipCode"
									id="zipCode"
									class="form__control"
								/>
								<span class="error">{{ errors.zipCode }}</span>
							</section>
							<section class="form__group form__group--city">
								<label for="city" :class="{ 'label--error': errors.city }"
									>City</label
								>
								<input
									type="text"
									placeholder="New York"
									name="city"
									v-model="city"
									id="city"
									class="form__control"
								/>
								<span class="error">{{ errors.city }}</span>
							</section>
							<section class="form__group form__group--city">
								<label for="country" :class="{ 'label--error': errors.country }"
									>Country</label
								>
								<input
									type="text"
									placeholder="United States"
									name="country"
									v-model="country"
									id="country"
									class="form__control"
								/>
								<span class="error">{{ errors.country }}</span>
							</section>
						</fieldset>

						<fieldset>
							<legend>paymeny details</legend>
							<section class="form__group--title form__group--paymentTypes">
								<h1 :class="{ 'label--error': errors.paymentMethod }">
									Payment Method
								</h1>
								<section class="payment__options">
									<section
										class="form__group form__group--radio"
										:class="{ isChecked: eMoney }"
									>
										<input
											type="radio"
											name="paymentMethod"
											v-model="paymentMethod"
											id="payment"
											value="e-money"
											@change.prevent="handleChange"
										/>
										<label
											for="payment"
											:class="{ 'label--error': errors.paymentMethod }"
											>e-Money</label
										>
									</section>

									<section
										class="form__group form__group--radio"
										:class="{ isChecked: cashOnDelivery }"
									>
										<input
											type="radio"
											name="paymentMethod"
											v-model="paymentMethod"
											value="cash on delivery"
											id="payment"
											@change.prevent="handleChange"
										/>
										<!-- 
											:checked="cashOnDelivery" -->
										<label
											for="payment"
											:class="{ 'label--error': errors.paymentMethod }"
											>cash on delivery</label
										>
									</section>
									<span class="error">{{ errors.paymentMethod }}</span>
								</section>
							</section>

							<template v-if="eMoney">
								<section class="form__group form__group--eMoneyNumber">
									<label
										for="eMoneyNumber"
										:class="{ 'label--error': errors.eMoneyNumber }"
										>e-Money Number</label
									>
									<input
										type="number"
										placeholder=""
										name="eMoneyNumber"
										v-model="eMoneyNumber"
										id="eMoneyNumber"
										class="form__control"
									/>
									<span class="error">{{ errors.eMoneyNumber }}</span>
								</section>
								<section class="form__group form__group--eMoneyPin">
									<label
										for="eMoneyPin"
										:class="{ 'label--error': errors.eMoneyPin }"
										>e-Money Pin</label
									>
									<input
										type="number"
										placeholder=""
										name="eMoneyPin"
										v-model="eMoneyPin"
										id="eMoneyPin"
										class="form__control"
									/>
									<span class="error">{{ errors.eMoneyPin }}</span>
								</section>
							</template>
							<section class="cashOnDeliveryContainer" v-if="cashOnDelivery">
								<img src="@/assets/images/paymentOnDelivery.svg" alt="cash on delivery">
								<p class="cashOnDeliveryText">
									The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
								</p>
							</section>
						</fieldset>
					</section>

					<!-- SUMMARY IS SUPPOSED TO BE IN HERE -->
					<section class="summary">
						<h1>summary</h1>
						<!-- <ul>
							<li v-for="item in store.displayItems" :key="item.prodName">
								{{ item.prodName }}
							</li>
						</ul> -->
						<!-- <section class="summaryList">
							<section>
								<SummaryItem
									v-for="item in store.displayItems"
									:key="item.prodName"
									:product="item"
								/>
							</section>
						</section> -->
						<SummaryListVue />
						<p>
							<span class="title">total</span>
							<span> $ {{ formatNumber(store.totalPrice) }} </span>
						</p>
						<p><span class="title">shipping</span> <span>$ {{ formatNumber(store.shipping) }} </span></p>
						<p><span class="title">vat (included)</span> <span>$ {{ formatNumber(store.vat) }} </span></p>
						<p><span class="title">grand total</span> <span class="grandTotalPrice">$ {{ formatNumber(store.grandTotal) }} </span></p>
						<button type="submit" class="cta cta--prim">continue & pay</button>
					</section>
				</form>
				<!-- <section class="checkout__container">
				</section> -->
			</section>
		</section>
	</main>
	<CheckoutModalVue v-if="feedback"/>
</template>

<script setup>
import { ref } from "vue";
import BaseGoBack from "../components/BaseGoBack.vue";
import { useCartStore } from "../stores/cart";
import { useField, useForm } from "vee-validate";
import { object, string, number } from "yup";
// import SummaryItem from "./SummaryItem.vue";
import SummaryListVue from "../components/SummaryList.vue";
import CheckoutModalVue from "../components/CheckoutModal.vue";

const store = useCartStore();

const eMoney = ref(false);
const cashOnDelivery = ref(false);

const feedback = ref(false);

const handleChange = ($event) => {
	console.log($event.target.value);
	if ($event.target.value === "e-money") {
		// console.log("eMoney");
		eMoney.value = true;
		cashOnDelivery.value = false;
		return;
	}
	// more
	if ($event.target.value === "cash on delivery") {
		// console.log("eMoney");
		cashOnDelivery.value = true;
		eMoney.value = false;
		return;
	}
};
// function getImageUrl(name) {
// 	return new URL(`/src/assets/images/${name}`, import.meta.url).href;
// }
// function formatNumber(num) {
// 	return parseInt(num).toLocaleString("en-US");
// }
//!-------FORM~VALIDATION--------------------------------------

const schema = object({
	fullName: string().required("Wrong Format"),
	email: string().required("Wrong Format").email(),
	tel: number().required("Wrong Format"),
	address: string().required("Wrong Format"),
	zipCode: number().required("Wrong Format"),
	city: string().required("Wrong Format"),
	country: string().required("Wrong Format"),

	// conditional validate e-moneyNumber and eMoneyPin if e-money is selected
	paymentMethod: string().required("Wrong Format"),
	eMoneyNumber: number().when("paymentMethod", {
		is: (val) => val === "e-money",
		then: (schema) => schema.typeError("Wrong Format").required("Wrong Format"),
		otherwise: (schema) => schema,
	}),
	eMoneyPin: number("must be a number").when("paymentMethod", {
		is: (val) => val == "e-money",
		then: (schema) => schema.typeError("Wrong Format").required("Wrong Format"),
		otherwise: (schema) => schema,
	}),
});

const { handleSubmit, errors } = useForm({
	validationSchema: schema,
});

const { value: fullName } = useField("fullName");
const { value: email } = useField("email");
const { value: tel } = useField("tel");
const { value: address } = useField("address");
const { value: zipCode } = useField("zipCode");
const { value: city } = useField("city");
const { value: country } = useField("country");
const { value: paymentMethod } = useField("paymentMethod");
const { value: eMoneyNumber } = useField("eMoneyNumber");
const { value: eMoneyPin } = useField("eMoneyPin");

const onSubmit = handleSubmit((values) => {
	console.log(JSON.stringify(values, null, 2));

	feedback.value = true;
});

function formatNumber(num) {
	return parseInt(num).toLocaleString("en-US");
}
</script>

<style scoped>

/* --main: #d87d4a;
	--main-hover: #fbaf85;
	--black: #000000;
	--white: #ffffff;
	--almostWhite: #fafafa;
	--grayishWhite: #f1f1f1; */
main {
	background-color: #f2f2f2;
	padding: 2em 0 5em;
}
.form__main,
.summary {
	background-color: #fff;
	border-radius: 8px;
	padding: 2em;
}
.heading {
	color: #000;
	margin-bottom: 0.7em;

	font-size: 28px;
	line-height: 38px;
	letter-spacing: 1px;
}
fieldset {
	border: 0;
}
fieldset + fieldset {
	margin-top: 2em;
}

legend {
	font-weight: 700;
	font-size: 13px;
	line-height: 25px;
	letter-spacing: 0.928571px;
	text-transform: uppercase;
	color: #d87d4a;
	margin-bottom: 1.4em;
}

.form__group {
	position: relative;
}
.form__group + .form__group {
	margin-top: 1em;
}

label {
	display: block;
	font-weight: 700;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: -0.214286px;
	color: #000;
	margin-bottom: 0.5em;
}
input {
	font-size: 14px;
	line-height: 19px;
	letter-spacing: -0.25px;
	color: #000;
	font-weight: 700;
}
input,
.form__group--radio {
	width: 100%;
	padding: 1em 1.2em;
	background: #ffffff;
	border: 1px solid #cfcfcf;
	border-radius: 8px;
}
input::placeholder {
	font-weight: 700;
	color: #000;
	opacity: 0.4;
}
.form__control:focus {
	outline: 0;
	border: 1px solid var(--main-hover);
}
.form__control--error {
	border: 2px solid var(--main-hover);
	border: 2px solid var(--main);
}
.error {
	position: absolute;
	top: 0;
	right: 0;
	color: var(--main);
	font-size: 12px;
}
.label--error {
	color: var(--main);
}
.isChecked {
	border: 1px solid #d87d4a;
}
.payment__options {
	position: relative;
}
.form__group--paymentTypes h1 {
	margin-bottom: 1em;
}
.form__group--paymentTypes {
	margin-bottom: 1.3em;
}
.form__group--radio {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 1em;
}
.form__group--radio + .form__group--radio {
	margin-top: 1em;
}
.form__group--radio input {
	width: initial;
	/* color: #000;
  background-color: #000; */
}
input[type="radio"] {
	/* Add if not using autoprefixer */
	-webkit-appearance: none;
	appearance: none;
	/* For iOS < 15 to remove gradient background */
	background-color: #fff;
	/* Not removed via appearance */
	margin: 0;
	/* font: inherit; */
	color: #d87d4a;
	width: 0.1px;
	height: 0.1px;
	border: 1px solid #cfcfcf;
	border-radius: 50%;
	/* transform: translateY(-0.075em); */
	display: grid;
	place-content: center;
	padding: 0.5em;
}
input[type="radio"]::before {
	content: "";
	width: 0.65em;
	height: 0.65em;
	border-radius: 50%;
	transform: scale(0);
	transition: 120ms transform ease-in-out;
	box-shadow: inset 1em 1em #d87d4a;
}
input[type="radio"]:checked::before {
	transform: scale(1);
}
/* input[type="radio"]:focus {
  outline: max(2px, 0.15em) solid currentColor;
  outline-offset: max(2px, 0.15em);
} */
.form__group--radio label {
	margin-bottom: 0em;
}
.cashOnDeliveryContainer {
	grid-column: 1/-1;
	display: flex;
	align-items: flex-start;
	gap: 1em;
}
.cashOnDeliveryText {
	font-weight: 500;
font-size: 15px;
line-height: 25px;
/* or 167% */


color: #000000;

mix-blend-mode: normal;
opacity: 0.5;
}

.summary {
	margin-top: 3em;
}
.summary h1 {
	font-weight: 700;
	font-size: 18px;
	line-height: 25px;
	letter-spacing: 1.28571px;
	text-transform: uppercase;

	color: #000;
	margin-bottom: 1em;
}
.summary button {
	font-weight: 700;
	font-size: 13px;
	line-height: 18px;
	/* identical to box height */

	text-align: center;
	letter-spacing: 1px;
	text-transform: uppercase;

	color: #ffffff;
	width: 100%;
}

.summary p {
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-transform: uppercase;
	margin-bottom: 1em;
}
.summary span.title {
	/* color: var(); */
	font-weight: 500;
font-size: 15px;
line-height: 25px;
/* identical to box height, or 167% */


color: #000000;

mix-blend-mode: normal;
opacity: 0.5;
}
.title + span {
	font-weight: 700;
	font-size: 18px;
line-height: 25px;
/* identical to box height */

text-align: right;
text-transform: uppercase;

color: #000000;
}
span.grandTotalPrice {
	color: var(--main);
	font-weight: 700;

}
@media (min-width: 600px) {
	.heading {
		font-size: 32px;
		line-height: 36px;
		letter-spacing: 1.14286px;
		/* color: #000; */
		/* margin-bottom: 0.7em; */
	}
	fieldset {
		border: 0;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: auto;
		gap: 1em;
	}
	.form__group + .form__group {
		margin-top: 0em;
	}
	.form__group--address {
		grid-column: 1/-1;
	}
	.form__group--radio + .form__group--radio {
		margin-top: 1em;
	}
	.form__group--paymentTypes {
		grid-column: 1/-1;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1em;
	}

	/* .summary {
		margin-top: 0;
	} */
}
@media (min-width: 980px) {
	.form {
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: auto;
		align-items: start;
		gap: 1em;
	}
	.summary {
		/* grid-column: 2; */
		margin-top: 0;
	}
}
</style>
