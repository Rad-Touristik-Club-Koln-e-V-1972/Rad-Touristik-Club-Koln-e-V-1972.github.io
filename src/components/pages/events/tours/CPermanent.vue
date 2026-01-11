<template>
  <q-card style="width: 40em">
    <q-card-section v-if="!props.modelValue.active" class="justify-center text-primary text-h6">! Zur Zeit nicht verfügbar !</q-card-section>
    <q-card :class="props.modelValue.active ? '' : 'disabled'">
      <q-card-section class="bg-primary text-accent text-h6">
        {{ props.modelValue.title }}
      </q-card-section>
      <q-card-section>
        <q-markup-table :dense="$q.platform.is.mobile" flat>
          <tbody>
            <tr>
              <td class="text-right">Strecke:</td>
              <td>{{ props.modelValue.length }} km</td>
              <td class="text-right"><d-donation :model-value="props.modelValue.donations" /></td>
            </tr>
            <tr>
              <td class="text-right">Höhenmeter:</td>
              <td colspan="2">ca. {{ props.modelValue.height }} hm</td>
            </tr>
            <tr>
              <td class="text-right">Profil:</td>
              <td colspan="2">{{ props.modelValue.profile }}</td>
            </tr>
            <tr>
              <td class="text-right">Einkehrmöglichkeiten:</td>
              <td colspan="2">
                <dl class="my-1">
                  <div v-for="it in props.modelValue.controls" :key="it.id">
                    <dt>
                      <a :href="it.url?.toString()" target="_blank">{{ it.title }}</a>
                    </dt>
                    <dd>
                      <ul style="list-style: none">
                        <li>{{ it.street }}</li>
                        <li>{{ it.zipCode }} {{ it.city }}</li>
                      </ul>
                    </dd>
                  </div>
                </dl>
              </td>
            </tr>
            <tr v-if="Object.keys(props.modelValue.urls).length">
              <td class="text-right">Link{{ Object.keys(props.modelValue.urls).length > 1 ? 's' : '' }}:</td>
              <td colspan="2">
                <ul v-if="Object.keys(props.modelValue.urls).length > 1" class="mt-1">
                  <li v-for="(it, key) in props.modelValue.urls" :key class="mb-1">
                    <a :href="it.toString()" target="_blank">{{ key }}</a>
                  </li>
                </ul>
                <a v-else :href="Object.values(props.modelValue.urls).toString()" target="_blank">{{ Object.keys(props.modelValue.urls)[0] }}</a>
              </td>
            </tr>
            <tr>
              <td class="text-no-wrap text-right">Letzte Änderung:</td>
              <td colspan="2">{{ useDateTime().format(props.modelValue.lastChange) }}</td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-card-section>
      <q-separator />
      <q-expansion-item label="Details">
        <q-card-section>
          <div class="text-pre-wrap" v-html="props.modelValue.text" />
          <c-slideshow v-if="props.modelValue.images?.length" :gallery-entries="props.modelValue.images" />
        </q-card-section>
      </q-expansion-item>
    </q-card>
  </q-card>
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar'
import CSlideshow from 'components/pages/CSlideshow.vue'
import DDonation from 'components/pages/DDonation.vue'
import type Permanent from 'src/models/entities/events/tours/Permanent'
import useDateTime from 'src/utils/DateTime'

// noinspection LocalVariableNamingConventionJS
const $q = useQuasar()

const props = defineProps<{ modelValue: Permanent }>()
</script>
