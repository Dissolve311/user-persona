<template>
  <div class="touring">
    <!-- <h1>This is an braodcast page</h1> -->
    <main-page :items="broadcast_data"></main-page>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";
var data = require('@/components/js/data/broadcast.js');
export default {
  name: "Broadcast",
  components: {
    MainPage,
  },
  data() {
    return {
      broadcast_data: data,
    };
  },
};
</script>