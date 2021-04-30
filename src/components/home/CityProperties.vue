<template>
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
</template>

<script lang="ts">
  import { defineComponent, reactive, computed, watchEffect } from "vue";
  import { useStore } from "vuex";
  import { useI18n } from "vue-i18n";
  import { IonLabel } from "@ionic/vue";

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
    },
    setup(props, { emit }) {
      const store = useStore();

      const { t } = useI18n();

      const propertiesByLocation = computed(() =>
        store.getters.getAllPropertiesByLocation(props.location)
      );

      const textData = reactive({
        title: t("components.property.searchPropertyTitle", {
          city: props.location,
        }),
      });

      watchEffect(() => {
        textData.title = t("components.property.searchPropertyTitle", {
          city: props.location,
        });
      });

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

<style scoped></style>
