<template>
  <div class="content">
    <v-app-bar app color="primary" dark><div class="nav">
          <v-btn flat to="/touring">Touring</v-btn> |
          <v-btn to="/venues">Venues</v-btn> |
          <v-btn to="/broadcast">Broadcast</v-btn> |
          <v-btn to="/theater">Theater</v-btn>
        </div><v-spacer></v-spacer><v-btn flat to="/">Home</v-btn>
        
        <input id="input" type="file" @change="onChange" />
        <v-btn @click="updateData">confirm</v-btn>
        </v-app-bar>

        <router-view />
  </div>
</template>

<script>
// @ is an alias to /src

// const excelToJson = require('convert-excel-to-json');
// const fs = require('browserify-fs');
var XLSX = require("xlsx");
import fileDownload from 'js-file-download'


export default {
  name: "Content",
  components: {
  },
  data:()=>({
    uploaded:null,
  }),
  methods:{
    
    onChange(e){
     this.uploaded= e.target.files[0];
  },

  updateData(){
    if (this.uploaded){
      let fileReader = new FileReader();
      fileReader.readAsBinaryString(this.uploaded);
      fileReader.onload = (event)=>{
        // console.log(event.target.result);
        let data = event. target.result;
        let workbook = XLSX.read(data,{type:"binary"});
        console.log(workbook);
        workbook.SheetNames.forEach(sheet=>{
          let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
          console.log(rowObject);
          let jsonData = 'module.exports='+JSON.stringify(rowObject);
          fileDownload(jsonData, `${sheet}.js`, 'text/csv')         
        });
        
      }
    }
  },
  }
}
</script>
