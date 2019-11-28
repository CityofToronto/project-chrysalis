<template>
  <b-row class="assessment">
    <b-col
      cols="8"
      id="assessment-content"
      data-spy="scroll"
      data-target="#assessment-section-list"
      data-offset="1"
    >
      <div v-for="item in assessmentData" v-bind:key="item.id">
        <FormSection
          :title="item.title"
          :id="getDivId(item.id, item.title)"
          @submit="submitForm(formValues)"
        >
          <component
            v-for="(itemChild, index) in item.questionList"
            :key="index"
            :is="itemChild.fieldType"
            v-model="formValues[itemChild.name]"
            v-bind="itemChild"
          />
        </FormSection>
      </div>
    </b-col>
    <b-col cols="4">
      <AssessmentSectionList />
    </b-col>
  </b-row>
</template>

<script>
import "whatwg-fetch";
import TextInput from "../components/TextInput";
import FormSection from "../components/FormSection";
import RadioInput from "../components/RadioInput";
import CheckboxInput from "../components/CheckboxInput";
import AssessmentSectionList from "./AssessmentSectionList";
import assessments from "../assets/assessments.json"; // loading json data
export default {
  name: "assessment",
  components: {
    TextInput,
    RadioInput,
    CheckboxInput,
    FormSection,
    AssessmentSectionList
  },
  methods: {
    submitForm(responses) {
      const formResponses = JSON.stringify(formResponses);
      fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: formResponses
      })
        .then(res => {
          console.log("successfully saved", formResponses);
        })
        .catch(e => console.warn("couldnt save", e));
    },
    getDivId: (formId, formTitle) => {
      return formId + "-" + formTitle.replace(" ", "-");
    }
  },
  data() {
    return {
      formValues: {},
      assessmentData: assessments.assessments
    };
  }
};
</script>