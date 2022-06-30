<template>
<v-layout>
  <v-btn
              color="white"
              icon
              @click="$emit('closeDialog')"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
  <v-stepper
    v-model="e6"
    vertical
  >
    <v-stepper-step
      :complete="e6 > 1"
      step="1"
    >
     
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card
        color="grey lighten-1"
        class="mb-12 mx-auto"
      >

    <v-card-subtitle>
      Use the <a id="template_link" href="https://docs.google.com/spreadsheets/d/1BCqI2dL5uYZUwMz-Y8cBLp4UNMXlknkU/edit?usp=sharing&ouid=101039502307747953288&rtpof=true&sd=true" download="user-persona.xlsx">user-persona.xlsx</a> template, download and modify the content as you want. 
Please notice that for column "painpoints" and "products", please use ";" as the segmentation
    </v-card-subtitle>

   </v-card>
      
      
      <v-btn
        color="primary"
        @click="e6 = 2"
      >
        Continue
      </v-btn>
      
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 2"
      step="2"
    >
     
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-card
        color="grey lighten-1"
        class="mb-12 mx-auto"
        
      >
      <v-card-text>Upload your new user-persona.xlsx here, click "confirm"
You will get four .js files</v-card-text>
       <v-card-actions><input id="input" type="file" @change="onChange" style="color: green" />
        <v-btn @click="updateData" flat color="secondary">confirm</v-btn></v-card-actions>
      </v-card>
      <v-btn text @click="e6=1">
        Previous
      </v-btn>
      <v-btn
        color="primary"
        @click="e6 = 3"
      >
        Continue
      </v-btn>
      
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 3"
      step="3"
    >
   
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-card
        color="grey lighten-1"
        class="mb-12"
        height="200px"
      >
       <v-card-text>Do NOT change the file names, replace the four files in the "./src/components/js/data" into the new ones you get</v-card-text>
      </v-card>
      <v-btn text @click="e6=2">
        Previous
      </v-btn>
      <v-btn
        color="primary"
        @click="e6 = 4"
      >
        Continue
      </v-btn>
 
    </v-stepper-content>

    <v-stepper-step step="4">
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-card
        color="grey lighten-1"
        class="mb-12"
        height="200px"
      >
      <v-card-text>Refresh the pages! If you want to build, double click the "build.bat" file to run and update the website </v-card-text>
      </v-card>
      <v-btn text @click="e6=3">
        Previous
      </v-btn>
      <v-btn
        color="primary"
        @click="e6 = 1"
      >
        Continue
      </v-btn>

    </v-stepper-content>
  </v-stepper></v-layout>
</template>

<script>
var XLSX = require("xlsx");
import fileDownload from 'js-file-download'
  export default {
    data () {
      return {
        e6: 1,
      }
    },
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
        // console.log(workbook);
        workbook.SheetNames.forEach(sheet=>{
          let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
          console.log(rowObject);
          console.log(sheet);
          // this.$router.push({
          //   name:sheet,
          //   params:rowObject,
          // }).catch(()=>{console.log("redundant exception")});
          let jsonData = 'module.exports='+JSON.stringify(rowObject);
          fileDownload(jsonData, `${sheet}.js`, 'text/csv')         
        });
        // console.log(this.$router)
      }
    }
  },

    },
    mounted(){
    
    },
  }
</script>