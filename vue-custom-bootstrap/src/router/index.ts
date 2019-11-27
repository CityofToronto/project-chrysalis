import Vue from "vue";
import VueRouter from "vue-router";
// import Assessment from "../views/Assessment.vue";
import Profile from "../views/Profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Profile",
    component: Profile
  }
  // {
  //   path: "/",
  //   name: "Assessment",
  //   component: Assessment
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  routes
});

export default router;
