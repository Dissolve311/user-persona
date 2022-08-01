<template>
  <v-card color="bg" height="100vh">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h3 basil--text">USER PERSONA</h1>
    </v-card-title>

    <v-tabs v-model="tab" background-color="bg" color="primary" grow>
      <v-tab v-for="item in items" :key="item.name" @click="menu=false">
        {{ item.job }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.name" >
        <v-card color="bg" flat>
          <v-row no-gutters align="start"
            ><v-col cols="4">
              <v-img
                class="white--text align-end"
                height="520px"
                :src="item.pic"
                ><div class="user-name">
                  <v-card-title>{{ item.name }}</v-card-title>

                  <v-card-subtitle class="pb-0">
                    {{ item.job }}
                  </v-card-subtitle>
                  <v-card-text>"{{ item.quote }}"</v-card-text>
                </div>
              </v-img></v-col
            >
            <v-col cols="4"
              ><v-card class="mb-6 text-end" color="bg" flat>
                <v-card-text>
                  <about-section
                    :age="item.age"
                    :location="item.location"
                    :education="item.education"
                    :experience="item.experience"
                  ></about-section> </v-card-text
              ></v-card>
              <v-card
                class="mb-6 text-start"
                color="bg"
                flat
                contenteditable
                ><v-card-title>RESPONSIBILITIES</v-card-title>
                <v-card-text> {{ item.responsibilities }}</v-card-text></v-card
              >
              <v-card
                class="mb-6 text-start"
                color="bg"
                flat
                
                ><v-card-title>GOALS</v-card-title>
                <v-card-text> {{ item.goals }}</v-card-text></v-card
              >
            </v-col>

            <v-col cols="4"
              ><v-card
                class="mb-6 text-start"
                color="bg"
                flat
                ><v-card-title> <div class="about">ABOUT</div> <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :close-on-click="false"
      :nudge-width="0"
      offset-y
      attach
      
      
      
    >
      <template v-slot:activator="{ on, attrs }"> 
        
                <v-btn
                :id="item.name"
                  v-show="item.special_notes"
                  color="yellow"
                  fab
                  dark
                  small
                  relative
                  v-bind="attrs"
                  
          v-on="on"
                >
                  <v-icon>mdi-lightbulb</v-icon>
                </v-btn>
              
      </template>

      <v-card class="mx-auto"
    color="secondary"
    max-width="400">
    <v-card-title>Special Notes</v-card-title>
    <v-card-text>
      {{item.special_notes}}</v-card-text>
    <v-card-actions> <v-btn
        outlined
        rounded
        text
        @click="menu=false"
      >
        Got it
      </v-btn></v-card-actions>
    </v-card></v-menu>
        </v-card-title
                ><v-card-text>{{ item.description }}</v-card-text></v-card
              >

              <v-card
                class="mb-6 text-start"
                color="bg"
                flat
                contenteditable
                ><v-card-title>PAIN POINTS</v-card-title
                ><v-card-text
                  ><pain-points
                    :painpoints="item.painpoints"
                  ></pain-points></v-card-text
              ></v-card>
              <v-card
                class="mb-6 text-start"
                color="bg"
                flat
                contenteditable
                ><v-card-title>Products In Use</v-card-title
                ><v-card-text
                  ><products-inuse
                    :products="item.products"
                  ></products-inuse></v-card-text></v-card></v-col></v-row
          ><v-divider></v-divider>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import AboutSection from "./AboutSection.vue";
import PainPoints from "./PainPoints.vue";
import ProductsInuse from "./ProductsInuse.vue";

export default {
  name: "MainPage",
  props: {
    items:Array,
  },
  components: {
    AboutSection,
    PainPoints,
    ProductsInuse,
  },
  data() {
    return {
      tab: null,
      menu:false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}


.user-name {
  background-color: rgb(94, 93, 93);
  opacity: 0.8;
}

.about{
  margin-right:10px;
}

img {
  height:100vh;
}
</style>
