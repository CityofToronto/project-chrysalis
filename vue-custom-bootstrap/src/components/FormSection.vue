
<template>
  <div :id="divId" class="container-fluid">
  <form @submit.prevent="$emit('submit')" class="mb-4">
    <h2>{{title}}</h2>
    <b-card>
      <slot></slot>
      <b-button variant="primary" type="submit">Save</b-button>
    </b-card>
  </form>
  </div>
</template>

<script>
import TextInput from "../components/TextInput";

export default {
  name: "FormSection",
  props: {
    title: String,
    divId: String
  }
};
</script>
