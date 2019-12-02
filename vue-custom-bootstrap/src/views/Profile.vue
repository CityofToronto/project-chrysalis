<template>
  <div class="profile">
     <RightSideBarLayout>
        <template v-slot:main>
          <Assessment/>
        </template>
        <template v-slot:right-sidebar>
          <AssessmentSectionList/>
        </template>
    </RightSideBarLayout>
  </div>
</template>

<script>
// @ is an alias to /src
import RightSideBarLayout from "@/components/RightSideBarLayout.vue";  
import Assessment from "@/views/Assessment.vue";  
import AssessmentSectionList from "@/views/AssessmentSectionList.vue";  

export default {
  name: "Profile",
  components: {
    RightSideBarLayout,
    Assessment,
    AssessmentSectionList
  }
}
</script>
