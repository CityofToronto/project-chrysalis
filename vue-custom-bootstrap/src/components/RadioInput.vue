<template>
  <b-form-group
    :description="hasError ? '' : description"
    :invalid-feedback="errorText"
    :state="hasError()"
    :label-for="id"
    :label="label"
    class="mb-4"
  >
    <b-form-radio-group
      :id="id"
      :name="name"
      :options="options"
      :state="hasError()"
      v-bind="$attrs"
      v-on:input="$emit('input', $event)"
    ></b-form-radio-group>
  </b-form-group>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "RadioInput",
  inheritAttrs: false,
  props: {
    id: String,
    name: String,
    label: String,
    options: Array,
    subLabel: String,
    description: String,
    errorText: String
  },
  methods: {
    hasError(): boolean | null {
      return this.errorText ? false : null;
    }
  }
});
</script>

