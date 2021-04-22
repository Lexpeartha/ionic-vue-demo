<template>
  <div class="title-section ion-padding">
    <ion-label class="section-title">
      <strong> {{ title.emphasizedPart + " " }} </strong>
      <span v-for="(word, $index) in title.regularPart" :key="$index">
        {{ word }}
      </span>
    </ion-label>
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
  import { useI18n } from "vue-i18n";

  import { titleFormatter } from "@/utils/formatters";
  import PropertyCard from "@/components/ui/PropertyCardVertical.vue";

  export default defineComponent({
    components: { PropertyCard, IonLabel },
    setup() {
      const store = useStore();
      const { t } = useI18n();

      const title = t("latestSectionTitle");
      const formattedTitle = titleFormatter(title);

      const properties = computed(() => {
        return store.getters.getAllProperties;
      });

      return {
        properties,
        title: formattedTitle,
      };
    },
  });
</script>

<style scoped></style>
