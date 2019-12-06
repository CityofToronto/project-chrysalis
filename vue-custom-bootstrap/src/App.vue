<template>
  <div id="app">
    <NavBar />
    <b-container fluid>
      <b-row align-h="around">
        <b-col cols="12" md="4" lg="3" class="my-4 pr-4">
          <ClientSideBar />
        </b-col>
        <b-col cols="12" md="8" class="py-4">
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

import Assessment from "./views/Assessment.vue";
import NavBar from "./components/NavBar.vue";
import CaseNotes from "./views/CaseManagement/CaseNotes.vue";
import ClientSideBar from "./components/ClientSideBar.vue";
import Profile from "./views/Profile.vue";

import VueRouter from "vue-router";

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/case-management", component: CaseNotes },
    { path: "/assessment", component: Profile }
  ]
});

export default Vue.extend({
  name: "app",
  router,
  components: { NavBar, Profile, CaseNotes, ClientSideBar }
});
Vue.use(BootstrapVue);
</script>

<style lang="scss">
@import "./app.scss"; // import complete bootstrap.scss source from node_modules using ~ alias
</style>
