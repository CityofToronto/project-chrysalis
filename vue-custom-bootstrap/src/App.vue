<template>
  <div id="app">
    <Profile/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

import Profile from "./views/Profile.vue";

export default Vue.extend({
  name: "app",
  components: { Profile }
});
Vue.use(BootstrapVue);
</script>

<style lang="scss">
@import "./app.scss"; // import complete bootstrap.scss source from node_modules using ~ alias
</style>
