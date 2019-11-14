<template>
  <div id="app">
    <Assessment />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

import Assessment from "./views/Assessment.vue";

export default Vue.extend({
  name: "app",
  components: { Assessment }
});
Vue.use(BootstrapVue);
</script>

<style lang="scss">
@import "./app.scss"; // import complete bootstrap.scss source from node_modules using ~ alias
</style>
