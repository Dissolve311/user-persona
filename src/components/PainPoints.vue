<template>
  <ul>
    <li v-for="painpoint in painpoints" :key="painpoint">{{ painpoint }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    painpoints: String,
  },
};
</script>
