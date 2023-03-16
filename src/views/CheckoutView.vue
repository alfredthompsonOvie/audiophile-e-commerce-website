<template>
	<main>
		<section class="grid">
			<section class="grid__content">
				<BaseGoBack class="btn--back" />
				<section class="checkout__container">
					<form>
						<h1 class="heading">checkout</h1>
						<fieldset>
							<legend>billing details</legend>
							<section class="form__group">
								<label for="name">Name</label>
								<input
									type="text"
									placeholder="Alexei Ward"
									name="name"
									id="name"
								/>
							</section>
							<section class="form__group form__group--email">
								<label for="email">Email</label>
								<input
									type="email"
									placeholder="alexei@mail.com"
									name="email"
									id="email"
								/>
							</section>
							<section class="form__group form__group--tel">
								<label for="phone">Phone Number</label>
								<input
									type="tel"
									placeholder="+1 202-555-0136"
									name="phoneNumber"
									id="phoneNumber"
								/>
							</section>
						</fieldset>

						<fieldset>
							<legend>shipping info</legend>
							<section class="form__group form__group--address">
								<label for="address">Address</label>
								<input
									type="text"
									placeholder="1137 Williams Avenue"
									name="address"
									id="address"
								/>
							</section>
							<section class="form__group form__group--zipCode">
								<label for="zipCode">ZIP Code</label>
								<input
									type="number"
									placeholder="10001"
									name="zipCode"
									id="zipCode"
								/>
							</section>
							<section class="form__group form__group--city">
								<label for="city">City</label>
								<input
									type="text"
									placeholder="New York"
									name="city"
									id="city"
								/>
							</section>
							<section class="form__group form__group--city">
								<label for="city">Country</label>
								<input
									type="text"
									placeholder="United States"
									name="city"
									id="city"
								/>
							</section>
						</fieldset>

						<fieldset>
							<legend>paymeny details</legend>
							<section class="form__group--title form__group--paymentTypes">
								<h1>Payment Method</h1>
								<section class="payment__options">
									<section
										class="form__group form__group--radio"
										:class="{ isChecked: eMoney }"
									>
										<input
											type="radio"
											name="payment"
											id="payment"
											:checked="eMoney"
										/>
										<label for="payment">e-Money</label>
									</section>

									<section
										class="form__group form__group--radio"
										:class="{ isChecked: cashOnDelivery }"
									>
										<input
											type="radio"
											name="payment"
											id="payment"
											@change.prevent="handleChange"
											:checked="cashOnDelivery"
										/>
										<label for="payment">cash on delivery</label>
									</section>
								</section>
							</section>

							<section class="form__group form__group--eMoneyNumber">
								<label for="eMoneyNumber">e-Money Number</label>
								<input
									type="number"
									placeholder=""
									name="eMoneyNumber"
									id="eMoneyNumber"
								/>
							</section>
							<section class="form__group form__group--eMoneyPin">
								<label for="eMoneyPin">e-Money Pin</label>
								<input
									type="number"
									placeholder=""
									name="eMoneyPin"
									id="eMoneyPin"
								/>
							</section>
						</fieldset>
					</form>
					<section class="summary">
						<h1>summary</h1>
						<ul></ul>
						<p>
							<span></span>
							<span></span>
						</p>
						<button type="button" class="cta cta--prim">continue & pay</button>
					</section>
				</section>
			</section>
		</section>
	</main>
</template>

<script setup>
import { ref } from "vue";
import BaseGoBack from "../components/BaseGoBack.vue";

const eMoney = ref(true);
const cashOnDelivery = ref();
// const isChecked = ref(true);
const handleChange = ($event) => {
	console.log($event.target.checked);
	console.log($event);
};
</script>

<style scoped>
main {
	background-color: #f2f2f2;
	padding: 2em 0 5em;
}
.btn--back {
	/* margin-top: 1.2em; */
}
form,
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
.isChecked {
	border: 1px solid #d87d4a;
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
@media (min-width: 992px) {
	.checkout__container {
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: auto;
		align-items: start;
		gap: 1em;
	}
	form {
		/* grid-column: 1; */
	}
	.summary {
		/* grid-column: 2; */
		margin-top: 0;
	}
}
</style>
