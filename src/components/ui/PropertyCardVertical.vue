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
        <ion-text color="secondary">
          <h5 class="location">{{ location }}</h5>
        </ion-text>
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
    <div class="rent-chip">
      <ion-label color="light">{{ rentMode }}</ion-label>
    </div>
    <div class="heart-chip" @click="toggleLikeOnProperty">
      <ion-icon
        :color="isLikedByUser ? 'danger' : ''"
        class="heart-icon"
        :icon="icons.heart"
      ></ion-icon>
    </div>
  </ion-card>
</template>

<script lang="ts">
  import { defineComponent, PropType } from "vue";
  import { useStore } from "vuex";
  import {
    IonCard,
    IonCardContent,
    IonIcon,
    IonText,
    IonLabel,
  } from "@ionic/vue";
  import { heart, star } from "ionicons/icons";

  import { rentMode } from "@/types";

  export default defineComponent({
    props: {
      id: {
        type: Number,
        required: true,
      },
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
        type: Number,
        default: 4.8,
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
      IonLabel,
    },
    setup(props) {
      const icons = {
        heart,
        star,
      };

      const store = useStore();

      const toggleLikeOnProperty = () => {
        const { isLikedByUser, id } = props;
        isLikedByUser
          ? store.dispatch("dislikeProperty", id)
          : store.dispatch("likeProperty", id);
      };

      return { toggleLikeOnProperty, icons };
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
    text-transform: capitalize;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 25%;
    padding-left: 0.4em;
    padding-right: 0.4em;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    top: 1.7em;
    left: 1.6em;
  }

  .name {
    font-size: 1em;
  }

  .location {
    font-weight: 300;
    font-size: 0.85em;
  }

  .rating {
    display: flex;
    gap: 0.45em;
  }

  .rating p {
    margin: auto auto;
  }

  .star-icon {
    margin: auto auto;
  }

  .heart-icon {
    font-size: 1.25em;
    margin: auto;
  }

  .heart-chip {
    position: absolute;
    display: grid;
    top: 1.5em;
    right: 1.5em;
    background-color: rgba(255, 255, 255, 0.4);
    padding: 0.2em;
    border-radius: 100%;
  }
</style>
