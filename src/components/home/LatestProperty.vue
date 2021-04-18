<template>
  <div class="title-section ion-padding">
    <ion-label class="section-title"
      ><strong>Latest</strong> property</ion-label
    >
    <router-link class="section-link" to="/app/explore">View all</router-link>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { IonLabel } from "@ionic/vue";
  export default defineComponent({
    components: { IonLabel },
  });
</script>

<style scoped></style>
