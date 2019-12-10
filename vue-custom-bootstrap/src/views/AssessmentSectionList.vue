<template>
  <div class="sticky-top mb-3 py-lg-5">
    <b-list-group v-b-scrollspy>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center text-wrap"
        v-for="item in assessmentData"
        v-bind:key="item.id"
        :href="getHref(item.id, item.title)"
      >
        {{ item.title }}
        <b-badge variant="primary" pill>
          {{ item.questionList.length }}
        </b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { getAllForms } from "../services/api.ts";
import { getValidId } from "../services/utils.ts";

export default {
  name: "AssessmentSectionList",
  data() {
    return {
      assessmentData: getAllForms()
    };
  },
  methods: {
    getHref: (formId, formTitle) => {
      return "#" + getValidId(formTitle + formId);
    }
  }
};
</script>
