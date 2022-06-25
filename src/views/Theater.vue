<template>
  <div class="theater">
    <!-- <h1>This is an touring page</h1> -->
    <main-page :items="theater_data"></main-page>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";
var data = require('@/components/js/data/theater.js');
var getdata = require('@/components/js/getdata.js');
export default {
  name: "Theater",
  components: {
    MainPage,
  },
  data() {
    return {
      theater_data: data,
    };
  },
  mounted(){
    this.theater_data=getdata.parseData(data);
  },
};
</script>