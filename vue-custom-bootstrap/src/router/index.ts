import Vue from "vue";
import VueRouter from "vue-router";
import Assessment from "../views/Assessment.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Assessment",
    component: Assessment
  }
];

const router = new VueRouter({
  routes
});

export default router;
