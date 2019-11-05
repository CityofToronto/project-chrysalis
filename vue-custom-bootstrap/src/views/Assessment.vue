
<template>
  <div class="assessment">
    <FormSection title="Housing Essentials">
      <TextInput
        id="test-input"
        v-model="thingy"
        placeholder="test"
        description="Please enter your name here."
        label="What do you like to be called?"
        subLabel="This can be anything"
      />
      <RadioInput
        id="test-radio"
        v-model="radiomodel"
        description="pick an option"
        errorText="there's an error"
        label="What is your favourite option?"
        :options="radioOptions"
        required
      />
    </FormSection>
    {{thingy}}
    {{radiomodel}}
  </div>
</template>

<script>
import TextInput from "../components/TextInput";
import FormSection from "../components/FormSection";
import RadioInput from "../components/RadioInput";

export default {
  name: "assessment",
  components: {
    TextInput,
    RadioInput,
    FormSection
  },
  data() {
    return {
      thingy: "",
      radiomodel: "",
      radioOptions: [
        { value: 1, text: "Option1" },
        { value: 2, text: "Option 2" }
      ]
    };
  }
};
</script>
