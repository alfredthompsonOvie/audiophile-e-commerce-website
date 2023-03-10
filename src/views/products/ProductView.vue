<template>
  <main>
    <h1>details page</h1>
    <p>{{ props.id }}</p>
  </main>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
</script>

<style  scoped>

</style>