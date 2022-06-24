<template>
  <div class="content">
    <v-app-bar app color="primary" dark><div class="nav">
          <v-btn flat to="/touring">Touring</v-btn> |
          <v-btn to="/venues">Venues</v-btn> |
          <v-btn to="/broadcast">Broadcast</v-btn> |
          <v-btn to="/theater">Theater</v-btn>
        </div><v-spacer></v-spacer><v-btn flat to="/">Home</v-btn>
        
        <!-- <input id="input" type="file" @change="onChange" /> -->
        </v-app-bar>

        <router-view />
  </div>
</template>

<script>
// @ is an alias to /src

// const excelToJson = require('convert-excel-to-json');
// const fs = require('fs');

export default {
  name: "Content",
  components: {
  },
  methods:{
    
  //   onChange(e){
  //     // console.log(e.target.files[0]);
  //     // let tmp = excelToJson({ source: e.target.files[0]  });
  //     // console.log(tmp)
  //     let reader = new FileReader();

  //     reader.onloadend = function (event) {
  //       console.log(event.target.result)
  //     let tmp = excelToJson({ source: event.target.result });
  //     console.log(tmp)
  //     };
  //     console.log(reader.readAsArrayBuffer(e.target.files[0]));
    
  // }
  }
}
</script>
