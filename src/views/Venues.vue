<template>
  <div class="venues">
    <main-page :items="venues_data"></main-page>
  </div>
</template>


<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";
var data = require('@/components/js/data/venues.js');
export default {
  name: "Venues",
  components: {
    MainPage,
  },
  data() {
    return {
      venues_data: data,
    };
  },
};
</script>