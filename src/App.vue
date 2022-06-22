<template>
  <v-app>
    <v-main>    
     <!-- <div class="nav">
          <router-link to="/touring">Touring</router-link> |
          <router-link to="/tvfilm">TV/Film</router-link> |
          <router-link to="/broadcast">Broadcast</router-link> |
          <router-link to="/integrator">Integrator</router-link>
        </div> -->
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
