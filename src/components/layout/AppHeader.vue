<template>
  <ion-header>
    <ion-toolbar color="primary">
      <ion-buttons slot="start">
        <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
      </ion-buttons>

      <ion-title size="large">
        <slot name="title"></slot>
      </ion-title>

      <ion-buttons slot="end">
        <slot name="end"></slot>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import {
    IonToolbar,
    IonHeader,
    IonTitle,
    IonBackButton,
    IonButtons,
  } from "@ionic/vue";

  export default defineComponent({
    props: {
      pageDefaultBackLink: {
        type: String,
        required: false,
      },
    },
    components: {
      IonToolbar,
      IonHeader,
      IonTitle,
      IonBackButton,
      IonButtons,
    },
  });
</script>

<style></style>
