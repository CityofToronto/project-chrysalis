<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex mb-4>
        <h5 class="display-1 font-weight-bold mb-3">{{title1}}</h5>
        <p class="subheading font-weight-regular">{{title2}}</p>
      </v-flex>
<!--
      <v-flex mb-5 xs12>
        <h2 class="headline font-weight-bold mb-3">{{title3}}</h2>
        -->
<!--
        <v-layout justify-center>
          <a
            v-for="(next, i) in whatsComponets"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >{{ next.text }}</a>
        </v-layout>
      -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import jsondata from '../assets/jsondata.json'; // loading json data
export default Vue.extend({
  data: () => jsondata,
});
</script>
