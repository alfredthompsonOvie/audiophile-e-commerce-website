<template>
  <TheNavBAr />
  <section class="section">
    <router-view></router-view>

  </section>
  <TheFooter />
</template>

<script setup>
import TheNavBAr from '@/components/TheNavBAr.vue';
import TheFooter from '@/components/TheFooter.vue'
</script>

<style scoped>
.section {
  /* padding-top: 6em; */
}
</style>