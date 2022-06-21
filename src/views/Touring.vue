<template>
  <div class="touring">
    <h1>This is an touring page</h1>
    <main-page :items="touring_data"></main-page>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";
var data = require('@/components/js/data/touring.js');
export default {
  name: "Touring",
  components: {
    MainPage,
  },
  data() {
    return {
      touring_data: data,
    };
  },
};
</script>