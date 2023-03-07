<template>
  <nav>
    <!-- hamburger -->
    <section class="hamburger">
      <button class="openMenu"></button>
      <button class="closeMenu"></button>
    </section>
    <router-link to="/">audiophile</router-link>

    <!-- menu -->
    <!-- mobile  -->
    <ul>
      <li>
        <router-link :to="{ name: 'product'}"></router-link>
      </li>
    </ul>
    <!-- desktop nav -->
    <ul></ul>
    <!-- ^^^^^^^^^^menu^^^^^^^^^^^ -->
    <!-- cart -->
    <button type="button">
      <font-awesome-icon icon="fa-solid fa-cart-shopping" />
      <font-awesome-icon icon="fa-regular fa-cart-shopping" />
    </button>
  </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>