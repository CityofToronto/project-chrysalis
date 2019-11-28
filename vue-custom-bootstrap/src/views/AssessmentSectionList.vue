<template>
  <nav id="assessment-section-list">
    <b-nav vertical class="my-5">
      <b-nav-item
        :href="getHref(item.id, item.title)"
        class="nav-item"
        v-for="item in assessmentData"
        v-bind:key="item.id"
      >
        {{ item.title }}
        <b-badge variant="info" pill>{{item.questionList.length}}</b-badge>
      </b-nav-item>
    </b-nav>
  </nav>
</template>

<script>
import assessments from "../assets/assessments.json"; // loading json data
export default {
  name: "AssessmentSectionList",
  data() {
    return {
      assessmentData: assessments.assessments
    };
  },
  methods: {
    getHref: (formId, formTitle) => {
      return "#" + formId + "-" + formTitle.replace(" ", "-");
    }
  }
};
</script>