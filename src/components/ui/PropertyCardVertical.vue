<template>
  <ion-card class="card">
    <ion-card-content class="card-content">
      <img class="card-image" :src="imageLink" alt="Image description" />
    </ion-card-content>
    <div class="ion-padding-horizontal">
      <ion-text color="primary">
        <h2 class="price">{{ price }}$</h2>
      </ion-text>
      <ion-text color="secondary">
        <h2 class="name">{{ name }}</h2>
      </ion-text>
      <div class="card-info">
        <h5 class="location">{{ location }}</h5>
        <div class="rating">
          <ion-icon
            color="warning"
            class="star-icon"
            :icon="icons.star"
          ></ion-icon>
          <p>{{ rating }}</p>
        </div>
      </div>
    </div>
    <ion-chip class="rent-chip" color="secondary">
      <ion-label color="light">{{ rentMode }}</ion-label>
    </ion-chip>
    <ion-icon
      :color="isLikedByUser ? 'danger' : ''"
      class="heart-icon"
      :icon="icons.heart"
    ></ion-icon>
  </ion-card>
</template>

<script lang="ts">
  import { defineComponent, PropType } from "vue";
  import {
    IonCard,
    IonCardContent,
    IonIcon,
    IonText,
    IonChip,
    IonLabel,
  } from "@ionic/vue";
  import { heart, star } from "ionicons/icons";

  type rentMode = "rent" | "purchase";

  export default defineComponent({
    props: {
      imageLink: {
        type: String,
        default: "https://bit.ly/3sd3wIC",
      },
      isLikedByUser: {
        type: Boolean,
        default: false,
      },
      rentMode: {
        type: String as PropType<rentMode>,
        default: "rent",
      },
      rating: {
        type: String,
        default: "4.8",
      },
      location: {
        type: String,
        default: "Belgrade",
      },
      price: {
        type: Number,
        default: 9999.99,
      },
      name: {
        type: String,
        default: "Default house name",
      },
    },
    components: {
      IonCard,
      IonCardContent,
      IonIcon,
      IonText,
      IonChip,
      IonLabel,
    },
    setup() {
      const icons = {
        heart,
        star,
      };

      return { icons };
    },
  });
</script>

<style scoped>
  .card {
    flex: 0 0 auto;
    border-radius: 1.5em;
    display: inline-block;
    position: relative;
  }
  .card-image {
    border-radius: 1em;
    max-width: 15em;
    object-fit: contain;
    position: relative;
  }

  .card-content {
    padding-bottom: 0;
  }

  .card-info {
    display: flex;
    justify-content: space-between;
  }

  .price {
    font-weight: 800;
    font-size: 1.5em;
  }

  .rent-chip {
    position: absolute;
    top: 1.2em;
    left: 1.2em;
  }

  .name {
    font-size: 1em;
  }

  .location {
    font-weight: 200;
    font-size: 0.85em;
  }

  .rating {
    display: flex;
    gap: 0.45em;
  }

  .star-icon {
    margin: auto auto;
  }

  .heart-icon {
    position: absolute;
    font-size: 1.25em;
    top: 1.5em;
    right: 1.5em;
  }
</style>
