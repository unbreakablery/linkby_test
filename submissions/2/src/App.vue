<script setup>
import MyComponent from './components/MyComponent.vue'

const items = {
  20: ['Item 6', 'Item 4', 'Item 3'],
  30: ['Item 5', 'Item 1'],
  50: ['Item 2']
}
</script>

<template>
  <MyComponent :items="items" />
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}
</style>
