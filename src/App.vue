<template>
  <TheNavBAr />
  <router-view></router-view>
  <TheFooter />
</template>

<script setup>
import TheNavBAr from '@/components/TheNavBAr.vue';
import TheFooter from '@/components/TheFooter.vue'
</script>

<style lang="scss" scoped>

</style>