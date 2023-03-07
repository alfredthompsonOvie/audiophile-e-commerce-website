<template>
  <nav>
    <router-link to="/">home</router-link>
    <!-- mobile nav -->
    <ul>
      <li>
        <router-link :to="{ name: 'product'}"></router-link>
      </li>
    </ul>
    <!-- desktop nav -->
    <!-- hamburger -->
    <section class="hamburger">
      <button class="openMenu"></button>
      <button class="closeMenu"></button>
    </section>
  </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>