<template>
  <b-container fluid>
    <b-row no-gutters>
      <b-col order="0" order-lg="2" cols="12" lg="3">
        <slot name="right-sidebar"></slot>
      </b-col>
      <b-col order="1" cols="12" lg="9">
        <slot name="main"></slot>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "RightSideBarLayout"
};
</script>
