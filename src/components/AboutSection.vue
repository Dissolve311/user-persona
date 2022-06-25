<template>
  <v-list dense color="primary">
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="black"> mdi-account </v-icon> Age
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ age }}</v-list-item-title>
      </v-list-item-content></v-list-item
    ><v-list-item
      ><v-list-item-icon>
        <v-icon color="black"> mdi-crosshairs-gps</v-icon>Location
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ location }}</v-list-item-title>
      </v-list-item-content></v-list-item
    >
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="black"> mdi-school </v-icon>Education
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ education }}</v-list-item-title>
      </v-list-item-content></v-list-item
    >
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="black"> mdi-speaker </v-icon>Experience
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ experience }}</v-list-item-title>
      </v-list-item-content></v-list-item
    >
  </v-list>
</template>

<script>
export default {
  props: {
    age: Number,
    location: String,
    education: String,
    experience: String,
  },
};
</script>
