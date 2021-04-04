<template>
  <blank-layout page-title="Housyes">
    <home-header></home-header>
  </blank-layout>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import BlankLayout from "@/layouts/Blank.vue";
  import HomeHeader from "@/components/home/HomeHeader.vue";

  export default defineComponent({
    components: {
      BlankLayout,
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
