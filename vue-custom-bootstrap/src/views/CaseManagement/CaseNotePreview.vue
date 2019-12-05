<template>
  <b-list-group-item
    button
    v-on:click="$emit('loadNote')"
    class="flex-column align-items-start"
    :active="active"
  >
    <p class="mb-1 clampTextHeight">{{ noteText }}</p>
    <div class="d-flex w-100 justify-content-between">
      <small>{{ author }}</small>
      <small>{{ lastUpdate }}</small>
    </div>
  </b-list-group-item>
</template>

<style scoped>
.clampTextHeight {
  position: relative;
  height: 3rem;
  overflow: hidden;
}

.clampTextHeight:after {
  content: "";
  text-align: right;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 3rem;
}

/* For the browsers that support -webkit-line-clamp */
@supports (-webkit-line-clamp: 2) {
  .clampTextHeight {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .clampTextHeight:after {
    display: none;
  }
}
</style>

<script>
export default {
  name: "CaseNotePreview",
  props: {
    active: Boolean,
    noteId: Number,
    noteText: String,
    lastUpdate: String,
    author: String
  }
};
</script>
