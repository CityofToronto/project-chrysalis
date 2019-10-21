<template>
  <div class="container">
          <div class="container">
    <div class="table-responsive">
       <b-alert variant="success" show>
            <span class="mr-1">{{assesementjsondata.section1}}</span>
          </b-alert>
          <table class="table table-striped w-auto">
            <thead class="thead-light">
              <tr>
                <th class="th-lg" scope="col">User ID</th>
                <th class="th-lg" scope="col">Client ID</th>
                <th class="th-lg" scope="col">Name</th>
                <th class="th-lg" scope="col">Email</th>
                <th class="th-lg" scope="col">Phone</th>
                <th class="th-lg" scope="col">Postal</th>
              </tr>
            </thead>
            <tbody>
              <tr  v-for="profile in assesementjsondata.profiles">
                <td>{{ profile.UserID }}</td>
                <td>{{ profile.ClientID }}</td>
                <td>
                  <input  v-model="profile.Answer" placeholder="edit me" />
                </td>
                <td>
                  <input  v-model="profile.Email" placeholder="edit me" />
                </td>
                <td>
                  <input  v-model="profile.Phone" placeholder="edit me" />
                </td>
                <td>
                  <input  v-model="profile.postcode" placeholder="edit me" />
                </td>
              </tr>
            </tbody>
          </table>
          
          <button v-on:click="commitData" type="button" class="btn btn-success">commit</button>
        
    </div>
 </div>
    <!--start of bootstrap-vuejs-->
   
  
    <div class="container">
          <b-alert variant="success" show>
            <span class="mr-1">{{assesementjsondata.section2}}</span>
          </b-alert>
      <button v-on:click="loadData" type="button" class="btn btn-success">load data</button>
      <span class="mr-2"></span>
      <b-button variant="primary">
        Records loaded
        <b-badge variant="light">{{jsonDatalist.length}}</b-badge>
      </b-button>
    </div>
   
    <div class="container">
          <b-pagination
            v-model="currentPage"
            :total-rows="total_rows"
            :per-page="per_page"
            first-text="⏮"
            prev-text="⏪"
            next-text="⏩"
            last-text="⏭"
            size="sm"
          ></b-pagination>
     </div>
   
   <div class="table-responsive text-nowrap">
          <b-table
            striped
            hover
            :items="jsonDatalist"
            :per-page="per_page"
            :current-page="currentPage"
          ></b-table>
     
    </div>

    <div class="container">
      <b-row class="justify-content-col-center">
        <b-col>
          <b-alert variant="success" show>
            <span class="mr-1">{{assesementjsondata.section3}}</span>
          </b-alert>
        </b-col>
      </b-row>
    </div>
    <div class="container">
      <b-row class="justify-content-col-center">
        <b-col>
          <b-alert variant="success" show>
            <span class="mr-1">{{assesementjsondata.section4}}</span>
          </b-alert>
        </b-col>
      </b-row>
    </div>

    <div class="container">
      <b-row class="justify-content-col-center">
        <b-col>
          <b-alert variant="success" show>
            <span class="mr-1">{{assesementjsondata.section5}}</span>
          </b-alert>
        </b-col>
      </b-row>
 <div class="table-responsive text-nowrap">
  
          <b-table
            striped
            hover
            :items="jsonDatalist"
            :per-page="per_page"
            :current-page="currentPage"
          ></b-table>
          
  </div>   
    </div>

    <!--end of bootstrap-vuejs-->
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import assesementjsondata from "../assets/assesementJsondata.json"; // loading json data
import "isomorphic-fetch";
let url = "https://api.github.com/users/chriscoyier/repos";
export default Vue.extend({
  data: () => {
    return {
      assesementjsondata: assesementjsondata,
      jsonDatalist: [],
      currentPage: 1,
      total_rows: 0,
      per_page: 10
    };
  },
  mounted: function() {
    for (var _i = 0; _i < 1; _i++) {
      this.loadData();
    }
  },
  methods: {
    loadData: function(event) {
      let self = this;
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log("data:" + JSON.stringify(data));
          data.forEach(function(item) {
            self.jsonDatalist.push({
              id: item.id,
              name: item.name,
              full_name: item.full_name,
              description: item.description,
              url: item.url
            });
          });
          self.total_rows = self.jsonDatalist.length;
        })
        .catch(err => {
          console.log(err);
        });
    },

    commitData: function(event) {
      alert("commit data by calling Restful API");
    }

    //end of function
  }
});
</script>

