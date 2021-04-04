<template>
  <basic-layout page-title="Housyes">
    <home-header v-model="selectedCityIndex"></home-header>
  </basic-layout>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import BasicLayout from "@/layouts/Basic.vue";
  import HomeHeader from "@/components/home/HomeHeader.vue";

  export default defineComponent({
    name: "Home",
    components: {
      BasicLayout,
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
