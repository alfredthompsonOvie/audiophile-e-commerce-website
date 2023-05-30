<template>
	<section class="modal">
		<div class="feedback">
			<section>
				<img
					src="@/assets/images/checkmark.svg"
					alt="checkmark"
					class="checkmark"
				/>
				<h1 class="feedback__title">Thank you for your order</h1>
				<p class="feedback__text">
					You will receive an email confirmation shortly.
				</p>
			</section>
			<section class="summary__result">
				<section class="summary__lists"></section>
				<section class="grand__total"></section>
			</section>
			<router-link :to="{ name: 'home' }" class="cta cta--prim"
				>back to home</router-link
			>
		</div>
	</section>
</template>

<script setup></script>

<style scoped>
.modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;

	background-color: rgba(0, 0, 0, 0.4);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1em 2em;
}
.feedback {
	background-color: #fff;
	padding: 2em;
	border-radius: 8px;
	max-width: 540px;
	width: 100%;
}
.checkmark {
	width: 64px;
	height: 64px;
	margin-bottom: 2em;
}
.feedback__title {
	font-weight: 700;
	font-size: 24px;
	line-height: 28px;
	letter-spacing: 0.857143px;
	text-transform: uppercase;
	color: #000000;
	max-width: 284px;
	width: 100%;
}
.feedback__text {
	font-weight: 500;
	font-size: 15px;
	line-height: 25px;
	/* identical to box height, or 167% */

	color: #000000;

	mix-blend-mode: normal;
	opacity: 0.5;
	margin: 1em 0;
}
.summary__results {
	display: grid;
	grid-template-columns: 1.5fr 1fr;
	grid-template-rows: repeat(2, auto);
	border-radius: 8px;
}
.summary__lists {
	background-color: #f1f1f1;
}
.summary__btn {
	/* margin-top: 1; */
	border-top: 1px solid;
}

.summary__ {
	background-color: #000000;
}

.summary p.title {
	font-weight: 500;
	font-size: 15px;
	line-height: 25px;
	/* identical to box height, or 167% */

	color: #ffffff;

	mix-blend-mode: normal;
	opacity: 0.5;
}
.summary p.price {
	font-weight: 700;
	font-size: 18px;
	line-height: 25px;
	/* identical to box height */

	text-align: right;
	text-transform: uppercase;

	color: #ffffff;
}
.cta {
	width: 100%;
	text-align: center;
	font-weight: 700;
	font-size: 13px;
	line-height: 18px;
	/* identical to box height */

	text-align: center;
	letter-spacing: 1px;
	text-transform: uppercase;

	color: #ffffff;
}
@media (min-width: 768px) {
	.feedback__title {
		font-size: 32px;
		line-height: 36px;
		letter-spacing: 1.14286px;
	}
}
</style>
