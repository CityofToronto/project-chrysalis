<template>
 <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline">
        <span>{{header1}}</span>
        <span class="font-weight-light">{{header2}}</span>
      </v-toolbar-title>
     
      <v-container>
            <v-layout justify-center>
                    <router-link to="/assesement">Assesement</router-link>
           </v-layout>     
    </v-container>  
     <!--
           
      <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-1">{{header3}}</span>
      </v-btn>
         -->  
    </v-app-bar>
    <v-content>
      <HelloWorld />
    </v-content>
      <v-container>
         <v-layout justify-center>
          <router-view></router-view>
          </v-layout>      
       </v-container>     
  </v-app>
  
</template>

<script lang="ts">
let datas={};

import Vue from "vue";
import HelloWorld from './components/HelloWorld.vue';
import Assesement from './components/Assesement.vue';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import jsondataApp from './assets/jsondataApp.json'; // loading json data
Vue.use(BootstrapVue);
export default Vue.extend({
  name: "App",
  components: {
    HelloWorld,
    Assesement
  },
  data: () => (
    jsondataApp
  )
});
</script>
