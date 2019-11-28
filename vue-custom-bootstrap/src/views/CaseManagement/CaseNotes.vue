<template>
  <div>
    <h1 class="h2">Case Notes</h1>
    <p class="lead">Review case notes for John Doe</p>
    <b-row no-gutters class="justify-content-between card-group h-100">
      <b-card class="col-12 col-md-4" no-body>
        <b-list-group flush>
          <CaseNotePreview
            v-for="item in notes"
            :key="item.noteId"
            v-on:loadNote="activeNote = item.noteId"
            :active="activeNote === item.noteId"
            :noteId="item.noteId"
            :noteText="item.noteText"
            :lastUpdate="item.lastUpdate"
            :author="item.author"
          />
        </b-list-group>
      </b-card>
      <b-card class="col-12 col-md-8 position-relative">
        <b-form-textarea
          v-model="notes[activeNote].noteText"
          class="w-100 position-absolute p-4 h-100 case-note-editor"
          no-resize
        />
      </b-card>
    </b-row>
  </div>
</template>

<style scoped>
.case-note-editor {
  border: none;
  margin: -20px -20px 0 -20px;
  max-width: 45rem;
}

.case-note-editor:first-line {
  /* TODO: get size constant from bootstrap theme */
  font-size: 1.2rem;
}
</style>

<script>
import CaseNotePreview from "./CaseNotePreview.vue";
const assessmentExample = `Initial Assessment

Basic Info

    First name: John
    Last name: Doe
    Favourite Soup? Tomato
    What meals do you eat? Breakfast
           

Communication Support

    Are you comfortable communicating in English? Yes
    What is your preferred language? English
    Do you require an interpreter? No

Housing and Homelessness History

    Where have you stayed in the last 30 days? Sleeping outdoors
    How long have you been experiencing homelessness? 1 Year
    Have you lived in Toronto in the past 12 months? Yes
    Do you have any existing housing applications? Housing Connections
    Do you currently have a housing worker or are you receiving housing-focused case management somewhere else? No

Client Identity

    Do you identify as Indigenous or having Indigenous ancestry? Indigenous people are those who identify as First Nations (status, non-status, treaty or non-treaty), Inuit, Métis, and/or having Indigenous ancestry?  No 
    How would you describe your ethno-racial identity? South Asian
    Do you identify as LGBTQ2S? Yes
    Are you or would you like to be connected to any supports and/or resources related to your culture, gender, or sexuality?

Youth Status

    How would you best describe your involvement in school or employment training programs?"
    Not enrolled, and did not complete a high school degree or GED
    Are you connected with any family members? Yes
    Have you ever been in a foster/group home or anything similar? No
    CAS Worker name (if applicable):
    CAS Worker contact information (if applicable):

    Staff notes: none
`;
export default {
  name: "CaseNotes",
  components: { CaseNotePreview },
  data() {
    return {
      activeNote: 0,
      notes: [
        {
          active: true,
          noteId: 0,
          noteText:
            "Nam nibh gravida vel elementum at purus maecenas porttitor tincidunt senectus non eget. Elementum at purus maecenas porttitor potenti non blandit enim in cursus consectetur luctus. ",
          lastUpdate: "yesterday",
          author: "Jamal J."
        },
        {
          noteId: 1,
          noteText: "Potenti non blandit enim in cursus consectetur luctus. ",
          lastUpdate: "2 days ago",
          author: "Karen K."
        },
        {
          noteId: 2,
          noteText: assessmentExample,
          lastUpdate: "November 2, 2018",
          author: "Karen K."
        }
      ]
    };
  }
};
</script>
