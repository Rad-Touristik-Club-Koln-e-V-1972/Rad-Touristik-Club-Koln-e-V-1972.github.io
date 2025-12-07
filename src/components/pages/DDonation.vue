<template>
  <div>
    <q-btn color="blue" label="Bezahlen" @click="dialog = true" :icon="mdiAccountCreditCard" no-wrap />
    <q-dialog v-model="dialog" persistent>
      <q-card flat>
        <q-card-section class="bg-primary text-accent row">
          <div class="text-h6">Bezahlen</div>
          <q-space />
          <q-btn v-close-popup dense flat :icon="mdiClose" round text-color="accent" />
        </q-card-section>
        <q-card-section>
          <q-tabs v-model="tab" active-bg-color="primary" active-color="accent" class="bg-orange-1" indicator-color="secondary">
            <q-tab v-for="it in props.modelValue" :key="it.id" :label="it.title" :name="it.id" />
          </q-tabs>
          <q-tab-panels v-model="tab">
            <q-tab-panel v-for="it in props.modelValue" :key="it.id" :name="it.id">
              <span v-if="it.text" v-html="it.text" />
              <div v-else-if="it.imageUrl" :class="it.url ? 'cursor-pointer' : ''" @click="it.url ? openURL(it.url.toString()) : undefined">
                <span class="text-center" v-if="it.url">Scannen oder anklicken</span>
                <q-img :src="it.imageUrl.toString()" />
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { openURL } from 'quasar'
import { mdiAccountCreditCard, mdiClose } from '@quasar/extras/mdi-v7'
import type Donation from 'src/models/entities/Donation'

const props = defineProps<{ modelValue: Donation[] }>()

const dialog = ref(false)
const tab = ref(props.modelValue[0]?.id)
</script>
