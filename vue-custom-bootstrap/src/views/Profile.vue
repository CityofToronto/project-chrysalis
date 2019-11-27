<template>
  <div class="profile">
     <PageLayout>
        <template v-slot:main>
          <Assessment/>
        </template>
        <template v-slot:right-sidebar>
          <AssessmentSectionList/>
        </template>
    </PageLayout>
  </div>
</template>

<script>
// @ is an alias to /src
import PageLayout from "@/components/PageLayout.vue";  
import Assessment from "@/views/Assessment.vue";  
import AssessmentSectionList from "@/views/AssessmentSectionList.vue";  

export default {
  name: "Profile",
  components: {
    PageLayout,
    Assessment,
    AssessmentSectionList
  }
}
</script>
