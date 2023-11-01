<template>
	<section v-bind="$attrs">
		<ul class="dropdown" >
			<li class="dropdown__item menuItem">
				<router-link :to="{ name: 'headphones' }" class="dropdown__link">
					<img src="@/assets/images/image-headphone-menu.svg" alt="" />
					<p>Headphones</p>
					<span>
						<span class="span__text"> shop </span>
						<font-awesome-icon icon="fa-solid fa-angle-right" />
					</span>
				</router-link>
			</li>
			<li class="dropdown__item menuItem">
				<router-link :to="{ name: 'speakers' }" class="dropdown__link">
					<img src="@/assets/images/image-speakers-menu.svg" alt="" />
					<p>Speakers</p>
					<span>
						<span class="span__text"> shop </span>
						<font-awesome-icon icon="fa-solid fa-angle-right" />
					</span>
				</router-link>
			</li>
			<li class="dropdown__item menuItem">
				<router-link :to="{ name: 'earphones' }" class="dropdown__link">
					<img src="@/assets/images/image-earphone-menu.png" alt="" />
					<p>Earphones</p>
					<span>
						<span class="span__text"> shop </span>
						<font-awesome-icon icon="fa-solid fa-angle-right" />
					</span>
				</router-link>
			</li>
		</ul>
	</section>
</template>

<script setup></script>

<style scoped>
.dropdown__item {
	background: #f1f1f1;
	border-radius: 8px;
}
.dropdown__item + .dropdown__item {
	margin-top: 4em;
}
.dropdown__link {
	position: relative;
	display: block;
	text-align: center;
	padding: 5em 2em 2em;
	font-size: 15px;
	transition: all 1s linear;
	flex: 1;
}
.dropdown__link img {
	position: absolute;
	top: -50px;
	left: 50%;
	transform: translateX(-50%);
	transition: all 0.3s linear;
	width: 80px;
	filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.15));
}
.dropdown__link p {
	color: #000;
	text-transform: uppercase;
	font-weight: 700;
	letter-spacing: 1.07143px;
	line-height: 20px;
	margin-bottom: 0.7em;
	transition: all 0.3s linear;
}
.dropdown__link span {
	display: inline-flex;
	align-items: center;
	gap: 0.5em;
}
.span__text {
	letter-spacing: 1px;
	text-transform: uppercase;
	color: #000000;
	mix-blend-mode: normal;
	opacity: 0.5;
	font-weight: 700;
	font-size: 13px;
	transition: all 0.3s linear;
}
.fa-angle-right {
	color: #d87d4a;
  transition: all 0.3s linear;
}
.dropdown__link:hover img {
	width: 6em;
}
.dropdown__link:hover .span__text {
	letter-spacing: 2px;
	color: #d87d4a;
}
@media (min-width: 600px) {
	.dropdown {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1em;
		padding: 5em 2em 4em;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		width: 100%;
	}
	.dropdown__item + .dropdown__item {
		margin-top: 0;
	}
	.dropdown__item {
		flex: 1;
	}
}
</style>
