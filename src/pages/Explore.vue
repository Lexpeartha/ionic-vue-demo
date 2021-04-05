<template>
  <content-layout>
    <ion-label>This is explore</ion-label>
  </content-layout>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { IonLabel } from "@ionic/vue";

  import ContentLayout from "@/layouts/Content.vue";

  export default defineComponent({
    components: { ContentLayout, IonLabel },
  });
</script>
