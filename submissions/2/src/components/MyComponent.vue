<script setup>
defineProps({
  items: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div id="items">
    <h1>My Items</h1>
    <div class="item" v-for="(value, key) in items" :key="key">
      <h3>Items with Score {{key}}</h3>
      <ul>
        <li v-for="(item, index) in value" :key="index" :class="{ 'only-one': value.length === 1 }">
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
</style>
