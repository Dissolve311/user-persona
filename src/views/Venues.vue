<template>
  <div class="venues">
    <main-page :items="venues_data"></main-page>
  </div>
</template>


<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";
var data = require('@/components/js/data/venues.js');
var getdata = require('@/components/js/getdata.js');
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
  watch: { 
    //  '$route.params': {
    //     handler: function(data) {
    //        console.log(data)
    //        this.venues_data = data;
    //     },
    //     deep: true,
    //     immediate: true
    //   }
},
  mounted(){
    this.venues_data=getdata.parseData(data);
  },
};
</script>