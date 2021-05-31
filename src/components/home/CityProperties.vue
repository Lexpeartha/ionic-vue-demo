<template>
  <div v-if="propertiesByLocation.length">
    <div class="title-section ion-padding">
      <ion-label class="section-title">
        <strong> {{ textData.title }} </strong>
      </ion-label>
      <a @click="cancelSearch" class="section-link">
        Cancel search
      </a>
    </div>
    <div class="property-list ion-padding-start">
      <property-card
        v-for="(property, $index) in propertiesByLocation"
        v-bind="property"
        :key="$index"
      ></property-card>
    </div>
  </div>
  <div v-else class="properties-not-found ion-padding">
    <div class="title-section ion-padding-vertical">
      <ion-label class="section-title">
        <strong> {{ textData.notFound.title }} </strong>
      </ion-label>
    </div>
    <ion-text class="not-found-text ion-margin-vertical">
      {{ textData.notFound.description }}
    </ion-text>
    <ion-button
      class="not-found-button ion-margin-vertical"
      @click="cancelSearch"
    >
      {{ textData.notFound.button }}
    </ion-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, watchEffect } from "vue";
  import { useStore } from "vuex";
  import { useI18n } from "vue-i18n";
  import { IonLabel, IonButton, IonText } from "@ionic/vue";

  import PropertyCard from "@/components/ui/PropertyCardVertical.vue";

  // import { IProperty } from "@/types";

  export default defineComponent({
    emits: ["cancelSearch"],
    props: {
      location: {
        type: String,
        required: true,
      },
    },
    components: {
      PropertyCard,
      IonLabel,
      IonButton,
      IonText,
    },
    setup(props, { emit }) {
      const store = useStore();

      const { t } = useI18n();

      const propertiesByLocation = computed(() =>
        store.getters.getAllPropertiesByLocation(props.location)
      );

      const textData = {
        title: t("components.property.searchPropertyTitle", {
          city: props.location,
        }),
        notFound: {
          title: t("components.property.notFoundTitle", {
            city: props.location,
          }),
          description: t("components.property.notFoundDescription"),
          button: t("components.property.goBack"),
        },
      };

      const cancelSearch = () => {
        emit("cancelSearch");
      };

      return {
        propertiesByLocation,
        cancelSearch,
        textData,
      };
    },
  });
</script>

<style scoped>
  .properties-not-found {
    text-align: left;
  }
</style>
