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
#app {
  margin: 0 auto;
  max-width: 52rem;
}

$primary: #165788; // find these variables in docs and in Bootstrap _variables.scss
@import "~bootstrap/scss/bootstrap"; // import complete bootstrap.scss source from node_modules using ~ alias
</style>
