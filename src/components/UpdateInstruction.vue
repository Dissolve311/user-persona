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
        class="mb-12 mx-auto"
        color="bg"
      >

    <v-card-subtitle>
      After <a id="project_setting" href="https://shure.sharepoint.com/:w:/s/GPM/EUn-x6yKNndIgx6A3C-6nz4BBa95B3rXJxl23bgMpE1ntg?e=sXB1R4" target="_blank">Set up the project at your local PC</a>, use the <a id="template_link" href="https://shure.sharepoint.com/:x:/s/GPM/EfpUEu-Rn3tPi55JaOqrX34B2b77ami2Vr9AW2M2CNCNaw?e=gWHQNe" target="_blank">user-persona.xlsx</a> template, modify the content and then download a copy. You can change the file name, but please DO NOT change the worksheets' name inside such as "touring", "venues", etc. In each worksheet, You can add rows if you want to add another job title (person), that's totally fine.
Please notice that for column "painpoints" and "products", please use ";" as the segmentation so that the webpage will show in bulletpoints.
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
        class="mb-12 mx-auto"
        color="bg"
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
        class="mb-12"
        height="200px"
        color="bg"
      >
       <v-card-text >Do NOT change the name of js files, replace four files located at "./src/components/js/data" into the new ones you downloaded</v-card-text>
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
        class="mb-12"
        height="200px"
        color="bg"
      >
      <v-card-text>Refresh the preview pages on your localhost url! If you want to build and deploy to shureux website, double click the "build.bat" file. After finishing the build, copy the files in "./dist" folder to shure's ftp portal, under "/qinying" folder. <a id="ftp_instructions" href="https://shure.sharepoint.com/:w:/s/GPM/ET73y0DD6m1Eu02eUefnI_AB47XcOciSEIM0yx51iKQgAg?e=E244sT" target="_blank">FTP usage instructions</a></v-card-text>
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

<style scoped>


</style>