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
								<input type="text" placeholder="" name="name" id="name" />
							</section>
							<section class="form__group form__group--email">
								<label for="email">Email</label>
								<input type="email" placeholder="" name="email" id="email" />
							</section>
							<section class="form__group form__group--tel">
								<label for="phone">Phone Number</label>
								<input
									type="tel"
									placeholder=""
									name="phoneNumber"
									id="phoneNumber"
								/>
							</section>
						</fieldset>

						<fieldset>
							<legend>shipping info</legend>
							<section class="form__group form__group--address">
								<label for="address">Address</label>
								<input type="text" placeholder="" name="address" id="address" />
							</section>
							<section class="form__group form__group--zipCode">
								<label for="zipCode">Email</label>
								<input
									type="number"
									placeholder=""
									name="zipCode"
									id="zipCode"
								/>
							</section>
							<section class="form__group form__group--city">
								<label for="city">City</label>
								<input type="text" placeholder="" name="city" id="city" />
							</section>
						</fieldset>

						<fieldset>
							<legend>paymeny details</legend>
							<section class="form__group--title form__group--paymentTypes">
								<h1>Payment Method</h1>
								<section class="payment__options">
									<section class="form__group form__group--radio">
										<input type="radio" name="payment" id="payment" />
										<label for="payment">e-Money</label>
									</section>
									<section class="form__group form__group--radio">
										<input type="radio" name="payment" id="payment" />
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
import BaseGoBack from "../components/BaseGoBack.vue";
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
	font-size: 32px;
	line-height: 36px;
	letter-spacing: 1.14286px;
	margin-bottom: 0.6em;
}
fieldset {
	border: 0;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: auto;
	gap: 1em;
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
	margin-bottom: 1em;
}
label {
	display: block;
	font-weight: 700;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: -0.214286px;
	color: #000;
  margin-bottom: .5em;
}
input, .form__group--radio {
	width: 100%;
	padding: 0.8em;
	background: #ffffff;
	border: 1px solid #cfcfcf;
	border-radius: 8px;
}
input::placeholder {
	font-weight: 700;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: -0.25px;
	color: #000;
	opacity: 0.4;
}
.form__group--paymentTypes {
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
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
  padding: .5em;
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
@media (min-width: 992px) {
	.checkout__container {
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: auto;
		align-items: start;
		gap: 1em;
	}
	/* form {
	}
	.summary {
	} */
}
</style>
