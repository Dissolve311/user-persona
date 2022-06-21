<template>
  <v-app>
    <v-main>
      <v-app-bar app color="primary" dark max-height="50px"><div id="nav">
          <router-link to="/touring">Touring</router-link> |
          <router-link to="/tvfilm">TV/Film</router-link>
        </div></v-app-bar>
      
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
