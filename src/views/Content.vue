<template>
  <div class="content">
    <v-app-bar app color="primary" light>
      <div class="nav">
          <v-btn flat to="/touring"  color="bg" >Touring</v-btn> |
          <v-btn flat to="/venues" color="bg" >Venues</v-btn> |
          <v-btn to="/broadcast" color="bg" >Broadcast</v-btn> |
          <v-btn to="/theater" color="bg" >Theater</v-btn>
        </div>
        <v-spacer></v-spacer>
        <v-btn flat icon to="/" ><span class="mdi mdi-home mdi-24px"></span></v-btn>
        <v-btn icon @click="dialog=true"><span class="mdi mdi-file-replace-outline mdi-24px"></span></v-btn>
        
        <!-- <v-btn @click="test">test</v-btn> -->
        </v-app-bar>
        <v-dialog v-model="dialog"><update-instruction @closeDialog="dialog=false"></update-instruction></v-dialog>
        <router-view />
  </div>
</template>

<script>
// @ is an alias to /src

// const excelToJson = require('convert-excel-to-json');
// const fs = require('browserify-fs');

import UpdateInstruction from '../components/UpdateInstruction.vue';

export default {
  name: "Content",
  components: {
    UpdateInstruction,
  },
  data:()=>({
    uploaded:null,
    dialog:false,

  }),
  methods:{
    test(){
      console.log(this.$router);
    },
    
  }
}
</script>
