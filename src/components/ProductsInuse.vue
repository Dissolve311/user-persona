<template>
  <ul>
    <li v-for="product in products" :key="product">{{ product }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    products: String,
  },
};
</script>
