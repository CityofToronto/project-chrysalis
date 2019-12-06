<template>
  <div class="assessment">
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
  </div>
</template>

<script>
import "whatwg-fetch";
import TextInput from "../components/TextInput";
import FormSection from "../components/FormSection";
import RadioInput from "../components/RadioInput";
import CheckboxInput from "../components/CheckboxInput";
import assessments from "../assets/assessments.json"; // loading json data
import { getValidId } from "../services/utils";

export default {
  name: "assessment",
  components: {
    TextInput,
    RadioInput,
    CheckboxInput,
    FormSection
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
      return getValidId(formTitle + formId);
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
