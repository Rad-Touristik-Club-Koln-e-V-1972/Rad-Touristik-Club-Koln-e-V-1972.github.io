<template>
  <div>
    <q-btn
      color="primary"
      label="Details"
      no-wrap
      text-color="accent"
      @click="dialog = true"
    />
    <q-dialog v-model="dialog" maximized>
      <q-card flat>
        <q-card-section class="bg-primary text-accent row">
          <q-space />
          <q-btn
            v-close-popup
            :icon="mdiClose"
            dense
            flat
            round
            text-color="accent"
          />
        </q-card-section>
        <c-album :model-value />
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type Gallery from "@/models/entities/rtc-cologne/gallery/Gallery";
import CAlbum from "@/components/pages/rtc-cologne/galleries/CAlbum.vue";
import { mdiClose } from "@quasar/extras/mdi-v7";

defineProps<{ modelValue: Gallery }>();

const dialog = ref(false);
</script>
