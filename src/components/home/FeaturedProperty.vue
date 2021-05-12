<template>
  <div class="title-section ion-padding">
    <ion-label class="section-title">
      <strong> {{ textData.title.emphasizedPart + " " }} </strong>
      <span v-for="(word, $index) in textData.title.regularPart" :key="$index">
        {{ word }}
      </span>
    </ion-label>
    <router-link class="section-link" to="/app/explore">{{
      textData.viewAll
    }}</router-link>
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
  import { useI18n } from "vue-i18n";
  import { IonLabel } from "@ionic/vue";

  import { titleFormatter } from "@/utils/formatters";
  import PropertyCardVertical from "@/components/ui/PropertyCardVertical.vue";

  export default defineComponent({
    components: { IonLabel, PropertyCard: PropertyCardVertical },
    setup() {
      const store = useStore();
      const { t } = useI18n();

      const properties = computed(() => {
        return store.getters.getAllProperties;
      });

      const title = t("components.property.featuredSectionTitle");
      const formattedTitle = titleFormatter(title);
      const viewAllText = t("components.property.viewAllText");
      const textData = {
        title: formattedTitle,
        viewAll: viewAllText,
      };

      return {
        properties,
        textData,
      };
    },
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
