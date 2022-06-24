import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path:"/content",
    name:"Content",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/Content.vue"),
    children: [
      {
        path: "/touring",
        name: "Touring",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Touring.vue"),
      },
      
      {
        path: "/broadcast",
        name: "Broadcast",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Broadcast.vue"),
      },
       {
        path: "/venues",
        name: "Venues",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Venues.vue"),
      },
      {
        path: "/theater",
        name: "Theater",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Theater.vue"),
      },
  ]
  },
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
