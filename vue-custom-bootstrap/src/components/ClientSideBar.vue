
<template>
  <div id="client-sidebar" visible="true">
    <b-nav vertical card-header pills>
      <h2>John Doe</h2>
      <p class="lead">June 1, 1980</p>
      <b-nav-item active-class="active" href="#">Summary</b-nav-item>
      <b-nav-item active-class="active" to="/assessment">Assessment</b-nav-item>
      <b-nav-item active-class="active" to="/restrictions">Restrictions</b-nav-item>
      <b-nav-item active-class="active" to="/case-management">Case Management</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "ClientSideBar",
  props: {}
};
</script>
