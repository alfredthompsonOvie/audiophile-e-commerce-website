<template>
	<section class="modal">
		<div class="thankYou">
      <section>
        <img src="" alt="" />
        <h1>Thank you for your order</h1>
        <p>You will receive an email confirmation shortly.</p>
      </section>
      <section class="summary__result">
        <section class="result__info"></section>
        <section class="result__total"></section>
      </section>
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
  

  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}
.text {
	font-weight: 500;
	font-size: 15px;
	line-height: 25px;
	/* identical to box height, or 167% */

	color: #000000;

	mix-blend-mode: normal;
	opacity: 0.5;
}
</style>
