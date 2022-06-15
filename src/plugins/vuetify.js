import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#fffbe6",
        secondary: "#F5FCCA",
        third: "#F3B2E5",
        anchor: "#8c9eff",
      },
    },
  },
});
