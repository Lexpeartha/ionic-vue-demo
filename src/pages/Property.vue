<template>
  <native-layout
    :page-title="property.name"
    :includePadding="false"
    page-default-back-link="/app/home"
  >
    <img :src="property.imageLink" />
    <div class="ion-padding-horizontal property-card">
      <ion-title class="property-title" size="large">
        {{ property.name }}
      </ion-title>
      <div class="property-info">
        <div class="info">
          <ion-text class="info-title" color="primary">Location: </ion-text>
          <p>{{ property.location }}</p>
        </div>

        <div class="info">
          <ion-text class="info-title" color="primary">Price: </ion-text>
          <p>{{ property.price }}$</p>
        </div>

        <div class="info">
          <ion-text class="info-title" color="primary">Selling type: </ion-text>
          <p>{{ property.rentMode }}</p>
        </div>

        <div class="info">
          <ion-text class="info-title" color="primary">Tags: </ion-text>
          <p v-if="property.tags">
            <span :key="$index" v-for="(tag, $index) in property.tags">
              {{ tag }}
            </span>
          </p>
          <p v-else>None</p>
        </div>

        <div class="property-description">
          <ion-text class="info-title" color="primary">Description: </ion-text>
          <p>{{ property.description }}</p>
        </div>
      </div>

      <div class="property-actions">
        <div class="buttons">
          <ion-button>Purchase</ion-button>
          <ion-icon
            @click="togglePropertyLike"
            class="heart-icon"
            :color="property.isLikedByUser ? 'danger' : 'secondary'"
            :icon="icons.heart"
          ></ion-icon>
        </div>
        <div class="rating">
          <ion-icon
            class="star-icon"
            color="warning"
            :icon="icons.star"
          ></ion-icon>
          <p>{{ property.rating }}</p>
        </div>
      </div>
    </div>
  </native-layout>
</template>

<script lang="ts">
  import { defineComponent, ref, onBeforeMount } from "vue";
  import { useRoute } from "vue-router";
  import { useStore } from "vuex";
  import { IonTitle, IonText, IonButton, IonIcon } from "@ionic/vue";
  import { heart, star } from "ionicons/icons";

  import NativeLayout from "@/layouts/Native.vue";
  import { IProperty } from "@/types";

  export default defineComponent({
    components: {
      NativeLayout,
      IonIcon,
      IonTitle,
      IonText,
      IonButton,
    },
    setup() {
      const store = useStore();
      const route = useRoute();

      const property = ref<IProperty>({} as IProperty);

      onBeforeMount(() => {
        const id = parseInt(route.params.id as string);
        property.value = store.getters.getPropertyById(id) as IProperty;
      });

      const togglePropertyLike = () => {
        const actionString = property.value.isLikedByUser
          ? "dislikeProperty"
          : "likeProperty";
        store.dispatch(actionString, property.value.id);
      };

      const icons = {
        heart,
        star,
      };

      return {
        property,
        togglePropertyLike,
        icons,
      };
    },
  });
</script>

<style scoped>
  .property-title {
    text-align: center;
    margin: 0.8em 0;
    font-weight: 700;
  }

  .info {
    max-height: 2em;
    margin-bottom: 0.2em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.6em;
  }

  .info p {
    text-transform: capitalize;
  }

  .info-title {
    font-weight: 800;
  }

  .property-description {
    margin-top: 0.6em;
    font-weight: 400;
  }

  .property-description p {
    margin-top: 0;
  }

  .property-actions {
    display: flex;
    margin: 1em 0;
    justify-content: space-between;
    align-items: center;
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8em;
  }

  .heart-icon {
    font-size: 1.6em;
  }

  .rating {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8em;
  }

  .rating p {
    font-size: 1.2em;
    margin: auto auto;
  }

  .star-icon {
    font-size: 1.5em;
  }
</style>
