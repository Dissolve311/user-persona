<template>
  <div class="home">
    <v-card flat>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 basil--text">USER PERSONA</h1>
    </v-card-title>
    <div class="container">
      <v-row v-for=" row in rows" :key= "row.name">
        <v-col v-for="item in row.items" :key="item.router" class="card_item" cols="6">
        <v-card
            class="pa-2"
            height="200px"
            color="fourth"
            :to = "item.router"
          >
          <v-img
              :src="item.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              width="100%"
            >
              <v-card-title v-text="item.name"></v-card-title>
            </v-img>
           
          </v-card></v-col>
      </v-row>
      
    </div>
    </v-card>
        <v-dialog   v-model="dialog"
      persistent
      max-width="600px">
      <v-card><v-card-text>{{alertmsg}}<v-text-field
                  label="Password*"
                  type="password"
                  v-model="input"
                  required
                ></v-text-field></v-card-text>
                <v-card-actions>
                <v-btn @click="checkPassword">confirm</v-btn></v-card-actions>
                </v-card></v-dialog>
        <router-view />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
  },

  data() {
    return {
      dialog:false,
      input:null,
      password:"shurewirelesspro",
      alertmsg:"please type in password",
     rows:[{
      name:"row1",
      items:[{name:"Live sound / Rental", router:"/touring",src:"https://www.kcrw.com/news/shows/press-play-with-madeleine-brand/coronavirus-california-governor-war-music/band-tour-managers-covid/@@images/rectangular_image/page-header?v=1629763241.16"},{name:"Broadcast", router:"/broadcast",src:"https://www.rev.com/blog/wp-content/uploads/2019/11/television-broadcast-media-transcription-services.jpg"},]  
     },{
      name:"row2",
      items:[{name:"Venues", router:"/venues",src:"https://level3av.com/media/zoo/images/why-you-need-an-audio-video-installation-company_6022dec31b126c988eda805987caffbf.jpg"},{name:"Theater", router:"/theater",src:"https://assets.simpleviewinc.com/simpleview/image/upload/crm/denver/Wolf-Theatre-1_9299E1D2-E558-47F2-5E23EA27D109804E-9299e0250b0c67c_9299e230-b2fc-4750-be83798bd4da2087.jpg"},]
     }]
    };
  },
  methods:{
    checkPassword(){
      if (this.input === this.password){
        this.dialog= false;
      }else{
        this.alertmsg ="Sorry, the password is wrong. Please try again."
      }
    },
  },
};
</script>

<style scoped>
/* Helper classes */
.basil {
  background-color: #363533 !important;
}
/* .basil--text {
  color: #356859 !important;
} */

.user-name {
  background-color: rgb(63, 63, 63);
  opacity: 0.8;
}

.card_item{
  text-align: center;
  border-radius: 10px;
}
</style>
