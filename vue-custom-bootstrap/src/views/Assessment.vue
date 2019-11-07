
<template>
  <div class="assessment">
    <FormSection title="Basic Info" @submit="submitForm(formValues)">
      <component
        v-for="(item, index) in formData"
        :key="index"
        :is="item.fieldType"
        v-model="formValues[item.name]"
        v-bind="item"
      />
    </FormSection>
    <p>{{formValues}}</p>
  </div>
</template>

<script>
import "whatwg-fetch";
import TextInput from "../components/TextInput";
import FormSection from "../components/FormSection";
import RadioInput from "../components/RadioInput";
import CheckboxInput from "../components/CheckboxInput";

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
    }
  },
  data() {
    return {
      formValues: {},
      formData: [
        {
          fieldType: "TextInput",
          id: "first-name",
          name: "first-name",
          required: true,
          label: "First name",
          subLabel: "What do people call you?"
        },
        {
          fieldType: "TextInput",
          id: "last-name",
          name: "last-name",
          label: "Last name"
        },
        {
          fieldType: "RadioInput",
          description: "What soup do you eat the most often",
          name: "soup",
          label: "Favourite Soup?",
          options: [
            { value: 1, text: "Tomato" },
            { value: 2, text: "Mushroom" },
            { value: 3, text: "Carrot" }
          ]
        },
        {
          fieldType: "CheckboxInput",
          description: "What meals do you eat on a regular basis",
          name: "meal",
          label: "What meals do you eat",
          options: [
            { value: 1, text: "Breakfast" },
            { value: 2, text: "Brunch" },
            { value: 3, text: "Second Breakfast" },
            { value: 4, text: "Lunch" },
            { value: 5, text: "Linner" },
            { value: 6, text: "Dinner" }
          ]
        }
      ]
    };
  }
};
</script>
