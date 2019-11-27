<template>
  <b-form-group
    :description="hasError ? '' : description"
    :invalid-feedback="errorText"
    :state="hasError()"
    :label-for="id"
    class="mb-4"
  >
    <label>
      <!-- <span :class="[ subLabel ? 'font-weight-bold': '', 'col-form-label']">{{label}}</span> -->
      <span class="question-label">{{label}}</span>
      <div class="col-form-label col-form-label-sm">{{subLabel}}</div>
      <b-form-input
        :id="id"
        :value="value"
        v-bind="$attrs"
        :state="hasError()"
        v-on:input="$emit('input', $event)"
      ></b-form-input>
    </label>
  </b-form-group>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TextInput",
  inheritAttrs: false,
  props: {
    id: String,
    value: String,
    label: String,
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

