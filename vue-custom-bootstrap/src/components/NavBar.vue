
<template>
  <div>
    <b-navbar type="dark" variant="primary">
      <b-navbar-brand href="#">SMIS</b-navbar-brand>
      <b-nav>
        <b-navbar-nav class="ml-auto" right>
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Clients</b-nav-item>
          <b-nav-item href="#">Programs</b-nav-item>
          <b-nav-item href="#">Facilities</b-nav-item>
          <b-nav-item-dropdown right>
            <template v-slot:button-content>User</template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    title: String
  }
};
</script>
