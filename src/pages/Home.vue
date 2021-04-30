<template>
  <content-layout>
    <home-header
      @cityChanged="updateSelectedCity"
      v-model="selectedCityIndex"
    ></home-header>
    <div v-if="selectedCity">
      <city-properties
        @cancelSearch="removeSelectedCity"
        :location="selectedCity"
      ></city-properties>
    </div>
    <div v-else>
      <featured-property></featured-property>
      <latest-property></latest-property>
    </div>
  </content-layout>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  import ContentLayout from "@/layouts/Content.vue";
  import HomeHeader from "@/components/home/HomeHeader.vue";
  import FeaturedProperty from "@/components/home/FeaturedProperty.vue";
  import LatestProperty from "@/components/home/LatestProperty.vue";
  import CityProperties from "@/components/home/CityProperties.vue";

  export default defineComponent({
    name: "Home",
    components: {
      ContentLayout,
      HomeHeader,
      FeaturedProperty,
      LatestProperty,
      CityProperties,
    },
    data() {
      return {
        selectedCityIndex: null,
        selectedCity: "",
      };
    },
    methods: {
      updateSelectedCity(newCity: string) {
        this.selectedCity = newCity;
      },
      removeSelectedCity() {
        this.selectedCity = "";
        this.selectedCityIndex = null;
      },
    },
  });
</script>

<style scoped></style>
