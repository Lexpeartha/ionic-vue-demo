<template>
  <content-layout>
    <home-header v-model="selectedCityIndex"></home-header>
  </content-layout>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import ContentLayout from "@/layouts/Content.vue";
  import HomeHeader from "@/components/home/HomeHeader.vue";

  export default defineComponent({
    name: "Home",
    components: {
      ContentLayout,
      HomeHeader,
    },
    data() {
      return {
        selectedCityIndex: null,
      };
    },
  });
</script>

<style scoped></style>
