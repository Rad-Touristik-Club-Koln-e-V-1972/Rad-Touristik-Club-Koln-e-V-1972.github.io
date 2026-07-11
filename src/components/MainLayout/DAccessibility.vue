<template>
  <div>
    <q-btn
      aria-label="Behindertenhilfe"
      flat
      dense
      round
      :icon="mdiWheelchair"
      @click="dialog = true"
    />
    <q-dialog v-model="dialog" persistent>
      <q-card>
        <q-card-section class="bg-primary text-accent text-h6"
          >Barrierefreiheit</q-card-section
        >
        <q-card-section>
          <q-toggle
            v-model="legasthenie"
            style="font-family: OpenDyslexic, sans-serif"
            label="Legasthenie"
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn v-close-popup color="primary" label="Schließen" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { mdiWheelchair } from "@quasar/extras/mdi-v7";

const dialog = ref(false);
const legasthenie = ref(false);

watch(
  legasthenie,
  isDyslexic => {
    if (isDyslexic) {
      document.body.classList.add("font-dyslexic");
    } else {
      document.body.classList.remove("font-dyslexic");
    }
  },
  { immediate: true }
);
</script>
