<template>
  <ion-page>
    <app-header :page-default-back-link="pageDefaultBackLink">
      <template #title>
        {{ pageTitle }}
      </template>
      <template #end>
        <slot name="actions-end"></slot>
      </template>
    </app-header>

    <ion-content
      :class="includePadding ? 'ion-padding' : ''"
      :fullscreen="true"
    >
      <slot />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { IonPage, IonContent } from "@ionic/vue";
  import AppHeader from "@/components/layout/AppHeader.vue";
  export default defineComponent({
    props: {
      pageTitle: {
        type: String,
        required: true,
      },
      pageDefaultBackLink: {
        type: String,
        required: false,
      },
      includePadding: {
        type: Boolean,
        required: false,
        default: true,
      },
    },
    components: {
      AppHeader,
      IonPage,
      IonContent,
    },
  });
</script>
