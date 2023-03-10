<template>
	<ul class="nav__menu">
		<li>
			<router-link :to="{ name: 'home' }">Home</router-link>
		</li>
		<li>
			<router-link :to="{ name: 'headphones' }">Headphones</router-link>
		</li>
		<li>
			<router-link :to="{ name: 'speakers' }">Speakers</router-link>
		</li>
		<li>
			<router-link :to="{ name: 'earphones' }">Earphones</router-link>
		</li>
	</ul>
</template>

<script setup></script>

<style scoped>
.nav__menu {
	display: flex;
  flex-direction: column;
	align-items: center;
	gap: .6em;
}
.nav__menu a {
	font-size: 13px;
	line-height: 25px;
	letter-spacing: 2px;
	position: relative;
}

.nav__menu a::before {
	content: "";
	position: absolute;
	width: 0%;
	height: 150%;
	left: 50%;
	transition: all 0.3s linear;
	background-color: #d87d4a;
	/* mix-blend-mode: multiply; */
	mix-blend-mode: darken;
}

.nav__menu a:hover::before {
	left: 0%;
	width: 100%;
}

@media (min-width: 600px){
  .nav__menu {
	display: flex;
  flex-direction: row;
	align-items: center;
	gap: 2em;
}
}
</style>
