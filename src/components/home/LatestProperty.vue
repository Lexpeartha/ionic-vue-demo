<template>
  <div class="title-section ion-padding">
    <ion-label class="section-title"
      ><strong>Latest</strong> property</ion-label
    >
    <router-link class="section-link" to="/app/explore">View all</router-link>
  </div>
  <div class="property-list ion-padding-start">
    <property-card
      v-for="(property, $index) in properties"
      v-bind="property"
      :key="$index"
    ></property-card>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue";
  import { useStore } from "vuex";
  import { IonLabel } from "@ionic/vue";

  import PropertyCard from "@/components/ui/PropertyCardVertical.vue";

  export default defineComponent({
    components: { PropertyCard, IonLabel },
    setup() {
      const store = useStore();

      const properties = computed(() => {
        return store.getters.getAllProperties;
      });

      return {
        properties,
      };
    },
  });
</script>

<style scoped></style>
