<template>
  <div class="tvfilm">
    <main-page :items="tvfilm_data"></main-page>
  </div>
</template>


<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";
var data = require('@/components/js/data/tvfilm.js');
export default {
  name: "Tvfilm",
  components: {
    MainPage,
  },
  data() {
    return {
      tvfilm_data: data,
    };
  },
};
</script>