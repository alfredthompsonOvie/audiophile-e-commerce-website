<template>
  <main>
    <h1 class="categoryHeading">
      {{ route.name }}
    </h1>
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

</script>

<style scoped>

</style>