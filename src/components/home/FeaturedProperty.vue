<template>
  <div class="title-section ion-padding">
    <ion-label class="section-title"
      ><strong>Featured</strong> property</ion-label
    >
    <router-link class="section-link" to="/app/explore">View all</router-link>
  </div>
  <div class="property-list ion-padding-start">
    <property-card></property-card>
    <property-card></property-card>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { IonLabel } from "@ionic/vue";

  import PropertyCard from "@/components/ui/PropertyCardVertical.vue";

  export default defineComponent({
    components: { IonLabel, PropertyCard },
  });
</script>

<style>
  /* These styles also apply for latest property section, since styles aren't scoped */
  .title-section {
    display: flex;
    justify-content: space-between;
  }

  .section-title {
    margin: auto 0;
  }

  .section-link {
    margin: auto 0;
    text-decoration: none;
    font-size: 0.8em;
  }

  .property-list {
    overflow-x: auto;
    flex-wrap: nowrap;
    display: flex;
    gap: 1em;
  }
</style>
