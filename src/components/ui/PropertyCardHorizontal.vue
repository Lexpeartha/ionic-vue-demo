<template>
  <!-- This card component was discarded, because it would not fit design of the app really well -->
  <ion-card class="card">
    <ion-card-content>
      <img class="card-image" :src="imageLink" alt="Picture" />
    </ion-card-content>

    <div class="">
      <ion-text color="primary">
        <h2 class="name">{{ name }}</h2>
      </ion-text>
      <ion-text color="secondary">
        <h2 class="price">{{ price }}$</h2>
      </ion-text>
    </div>
  </ion-card>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { IonCard, IonCardContent, IonText } from "@ionic/vue";
  export default defineComponent({
    components: {
      IonCard,
      IonCardContent,
      IonText,
    },
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
  });
</script>

<style scoped>
  .card {
    display: flex;
    min-width: 20em;
    border-radius: 1.5em;
    position: relative;
  }

  .card-image {
    border-radius: 1em;
    max-width: 8em;
    object-fit: contain;
    position: relative;
  }

  .name {
    font-size: 1em;
  }

  .price {
    font-size: 1em;
  }
</style>
