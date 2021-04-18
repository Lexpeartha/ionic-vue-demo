<template>
  <content-layout>
    <home-header v-model="selectedCityIndex"></home-header>
    <featured-property></featured-property>
    <latest-property></latest-property>
  </content-layout>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import ContentLayout from "@/layouts/Content.vue";
  import HomeHeader from "@/components/home/HomeHeader.vue";
  import FeaturedProperty from "@/components/home/FeaturedProperty.vue";
  import LatestProperty from "@/components/home/LatestProperty.vue";

  export default defineComponent({
    name: "Home",
    components: {
      ContentLayout,
      HomeHeader,
      FeaturedProperty,
      LatestProperty,
    },
    data() {
      return {
        selectedCityIndex: null,
      };
    },
  });
</script>

<style scoped></style>
