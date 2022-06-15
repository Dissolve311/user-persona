<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 basil--text">USER PERSONA</h1>
    </v-card-title>

    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="item in items" :key="item.name">
        {{ item.job }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.name">
        <v-card color="basil" flat>
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
              ><v-card class="mb-6 text-end" color="primary" flat>
                <v-card-text>
                  <about-section
                    :age="item.about.age"
                    :location="item.about.location"
                    :education="item.about.education"
                    :experience="item.about.experience"
                  ></about-section> </v-card-text
              ></v-card>
              <v-card class="mb-6 text-start" color="primary" flat
                ><v-card-title>RESPONSIBILITIES</v-card-title>
                <v-card-text> {{ item.responsibilities }}</v-card-text></v-card
              >
              <v-card class="mb-6 text-start" color="primary" flat
                ><v-card-title>GOALS</v-card-title>
                <v-card-text> {{ item.goals }}</v-card-text></v-card
              >
            </v-col>

            <v-col cols="4"
              ><v-card class="mb-6 text-start" color="primary" flat
                ><v-card-title>ABOUT</v-card-title
                ><v-card-text>{{ item.description }}</v-card-text></v-card
              >
              <v-card class="mb-6 text-start" color="primary" flat
                ><v-card-title>Products In Use</v-card-title
                ><v-card-text
                  ><products-inuse
                    :products="item.products"
                  ></products-inuse></v-card-text
              ></v-card>
              <v-card class="mb-6 text-start" color="primary" flat
                ><v-card-title>PAIN POINTS</v-card-title
                ><v-card-text
                  ><pain-points
                    :painpoints="item.painpoints"
                  ></pain-points></v-card-text
              ></v-card> </v-col></v-row
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
  props: {},
  components: {
    AboutSection,
    PainPoints,
    ProductsInuse,
  },
  data() {
    return {
      tab: null,
      items: [
        {
          name: "Jonathan",
          job: "Sound Designer",
          content: "content1",
          pic: "https://darkhorseinstitute.com/wp-content/assets/2019/10/audio-engineer-salaries.jpg",
          quote: "I am in love with making noise",
          about: {
            age: "35",
            location: "United States",
            experience: "12 years",
            education: "College",
            skills: "Sound Design, Training and Educating, Editing and Mixing",
          },
          goals:
            "Work seamlessly with the show, the lighting, and the performance",
          painpoints: ["point1", "point2", "point3"],
          products: ["product1", "product2", "product3"],
          responsibilities: "",
          software: "",
          description:
            "Jonathan lives both in the USA and UK where he was born and became a child actor for stage, film before later finding his passion with sound. Jonathan started to work on musical productions in the West End as a mixing engineer and then later as Sound Designer. He loves making creative noise using clean, uncompressed raw sound. He admire sound with detials and hate monotonous work such as editing, phase alignment, etc.",
        },
        {
          name: "Theresa",
          job: "Theatre Engineer",
          content: "content2",
          pic: "http://www.artsatl.org/wp-content/uploads/1-24-of-24-copy.jpg",
          quote: "",
          about: {
            age: "50",
            location: "United Kingdom",
            experience: "35 years",
            education: "Undergraduate",
            skills: "system design, training and educating",
          },
          goals: "",
          painpoints: ["point1", "point2", "point3"],
          products: ["product1", "product2", "product3"],
          responsibilities: "",
          software: "",
          description: "",
        },
        {
          name: "Daniel",
          job: "Monitor Engineer",
          content: "content3",
          pic: "https://evo.audio/wp-content/uploads/2016/11/ASE8-830x553.jpg",
          quote: "I want to know artists better than themselves",
          about: {
            age: "35",
            location: "United States",
            experience: "12 years",
            education: "College",
            skills: "system design, training and educating",
          },
          goals: "Make every artist onstage happy with what they hear",
          painpoints: ["point1", "point2", "point3"],
          products: ["IEM", "mixing desk", "audio snake"],
          responsibilities: "",
          software: "",
          description: "",
        },
        {
          name: "Rochelle",
          job: "Rental House",
          content: "content4",
          pic: "https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWlkZGxlJTIwYWdlZCUyMG1hbnxlbnwwfHwwfHw%3D&w=1000&q=80",
          quote:
            "Provide customers with the simplest and most efficient solution",
          about: {
            age: "35",
            location: "United States",
            experience: "12 years",
            education: "College",
            skills: "system design, training and educating",
          },
          goals: "",
          painpoints: ["point1", "point2", "point3"],
          products: ["product1", "product2", "product3"],
          responsibilities: "",
          software: "",
          description: "",
        },
        {
          name: "Arnold",
          job: "A1",
          content: "content1",
          pic: "https://dt7v1i9vyp3mf.cloudfront.net/styles/news_large/s3/imagelibrary/B/Becoming-a-Pro_07-K4dqSOTQDu.quNctoVd4hE8lhHD29Xvr.jpg",
          quote: "",
          about: {
            age: "35",
            location: "United States",
            experience: "12 years",
            education: "College",
            skills: "system design, training and educating",
          },
          goals: "",
          painpoints: ["point1", "point2", "point3"],
          products: ["product1", "product2", "product3"],
          responsibilities: "",
          software: "",
          description: "",
        },
        {
          name: "Allie",
          job: "A2",
          content: "content2",
          pic: "https://www.careersinmusic.com/wp-content/uploads/2019/07/audio-engineering.jpg",
          quote: "It is my mission to ensure that every task is 100% achieved",
          about: {
            age: "35",
            location: "United States",
            experience: "12 years",
            education: "College",
            skills: "system design, training and educating",
          },
          goals: "",
          painpoints: ["point1", "point2", "point3"],
          products: ["product1", "product2", "product3"],
          responsibilities: "",
          software: "",
          description: "",
        },
        {
          name: "Harold",
          job: "House of worship",
          content: "content3",
          pic: "https://www.mixonline.com/wp-content/uploads/2019/11/la_josh_maichele.jpg",
          quote: "Speaking for god, I want the best sound",
          about: {
            age: "35",
            location: "United States",
            experience: "12 years",
            education: "College",
            skills: "system design, training and educating",
          },
          goals: "",
          painpoints: ["point1", "point2", "point3"],
          products: ["product1", "product2", "product3"],
          responsibilities: "",
          software: "",
          description: "",
        },
        {
          name: "Carl",
          job: "CF coordinator",
          content: "content4",
          pic: "https://tbcdn.talentbrew.com/company/694/v1_0/img/radio%20engineer2.jpg",
          quote: "No dropouts, no interference",
          about: {
            age: "35",
            location: "United States",
            experience: "12 years",
            education: "College",
            skills: "system design, training and educating",
          },
          goals: "",
          painpoints: ["point1", "point2", "point3"],
          products: ["product1", "product2", "product3"],
          responsibilities: "",
          software: "",
          description: "",
        },
      ],
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
.basil--text {
  color: #356859 !important;
}

.user-name {
  background-color: rgb(94, 93, 93);
  opacity: 0.8;
}
</style>
