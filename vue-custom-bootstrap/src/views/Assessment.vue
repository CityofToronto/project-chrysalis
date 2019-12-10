<template>
  <div class="assessment">
    <div v-for="item in assessmentData" v-bind:key="item.id">
      <FormSection
        :title="item.title"
        :id="getDivId(item.id, item.title)"
        @submit="submitForm(item.id, formValues)"
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
import { getAllForms, saveFormData } from "../services/api.ts";
import { getValidId } from "../services/utils.ts";

export default {
  name: "assessment",
  components: {
    TextInput,
    RadioInput,
    CheckboxInput,
    FormSection
  },
  created() {
    this.fetchFormSchemas();
  },
  methods: {
    fetchFormSchemas() {
      getAllForms().then((form) => {
        this.assessmentData = form;
      });
    },
    submitForm(formId, responses) {
      return saveFormData(1, 1, this.formValues);
    },
    getDivId: (formId, formTitle) => {
      return getValidId(formTitle + formId);
    }
  },
  data() {
    return {
      formValues: {},
      assessmentData: []
    };
  }
};
</script>
