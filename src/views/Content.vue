<template>
  <div class="content">
    <v-app-bar app color="primary" dark><div class="nav">
          <v-btn flat to="/touring">Touring</v-btn> |
          <v-btn to="/tvfilm">TV/Film</v-btn> |
          <v-btn to="/broadcast">Broadcast</v-btn> |
          <v-btn to="/integrator">Integrator</v-btn>
        </div><v-spacer></v-spacer><v-btn flat to="/">Home</v-btn></v-app-bar>

        <router-view />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Content",
  components: {
  },
};
</script>
