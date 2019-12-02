<template>
	<nav id="assessment-section-list"> 
    <b-nav vertical class="w-20">

      <b-nav-item 
      v-for="item in assessmentData" v-bind:key="item.id"
      :href="getHref(item.id, item.title)">
        {{ item.title }}
        <b-badge variant="primary" pill class="pull-right">{{item.questionList.length}}</b-badge>
      </b-nav-item>

    </b-nav>
	</nav> 

</template>

<script>
import assessments from "../assets/json/assessments.json"; // loading json data

export default {
  name: 'AssessmentSectionList',
  data() {
    return {
      assessmentData: assessments.assessments
    };
  },
  methods: {
    getHref: function(formId, formTitle) {
	  return "#" + formId + "-" + formTitle.replace(" ", "-");
    }
  }
}
</script>
