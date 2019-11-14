
<template>
  <div class="assessment">
    <FormSection title="Basic info" @submit="submitForm(formValues)">
      <component
        v-for="(item, index) in profileData"
        :key="index"
        :is="item.fieldType"
        v-model="formValues[item.name]"
        v-bind="item"
      />
    </FormSection>
    <FormSection title="Communication Support" @submit="submitForm(formValues)">
      <component
        v-for="(item, index) in communicationFormData"
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
      profileData: [
        {
          fieldType: "TextInput",
          id: "first-name",
          name: "first-name",
          required: true,
          label: "First name",
          errorText: "there was an error!",
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
      ],
      communicationFormData: [
        {
          fieldType: "RadioInput",
          name: "soup",
          label: "Are you comfortable communicating in English?",
          options: [
            { value: 1, text: "Yes" },
            { value: 2, text: "No" },
            { value: 3, text: "Unknown" }
          ]
        },
        {
          fieldType: "RadioInput",
          name: "language",
          label: "What is your preferred language?",
          options: [
            { text: "English", value: "English" },
            { text: "French", value: "French" },
            { text: "Cantonese", value: "Cantonese" },
            { text: "Mandarin", value: "Mandarin" },
            { text: "Chinese (not otherwise specified)", value: "Chinese" },
            { text: "Italian ", value: "Italian" },
            { text: "Spanish", value: "Spanish" },
            { text: "Tagalog", value: "Tagalog" },
            { text: "Vietnamese", value: "Vietnamese" },
            { text: "Tamil", value: "Tamil" },
            { text: "Arabic", value: "Arabic" },
            { text: "Punjabi", value: "Punjabi" },
            { text: "American Sign Language (ASL)", value: "ASL" }
          ]
        },
        {
          fieldType: "RadioInput",
          name: "interpreter",
          label: "Do you require an interpreter",
          options: [
            { value: 1, text: "Yes" },
            { value: 2, text: "No" },
            { value: 3, text: "Prefer not to disclose" }
          ]
        }
      ]
    };
  }
};
</script>
