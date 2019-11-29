<template>
	<nav id="assessment-section-list"> 
		<ul class="nav flex-column"> 
			<li class="nav-item" v-for="item in assessmentData" v-bind:key="item.id"> 
			  <a class="nav-link" :href="getHref(item.id, item.title)"> 
				{{ item.title }}
        <span class="badge badge-info badge-pill pull-right">{{item.questionList.length}}</span>
			  </a> 
			</li> 
		</ul> 
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
