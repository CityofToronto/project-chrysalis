<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-9 col-8">
        <slot name="main"></slot>
        </div>
        <div class="col-sm-3 col-4">
        <slot name="right-sidebar"></slot>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'PageLayout',
  props: {
    pageId: String
  }
}
</script>