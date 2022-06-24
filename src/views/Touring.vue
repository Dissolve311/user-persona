<template>
  <div class="touring">
    <!-- <h1>This is an touring page</h1> -->
    <main-page :items="touring_data"></main-page>
    <!-- <v-btn @click="test">test</v-btn> -->
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";
var data = require('@/components/js/data/touring.js');
// var test_data = require('@/components/js/getdata.js')
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
  methods:{
    test(){
      // console.log(test_data);
    },
  },

};
</script>