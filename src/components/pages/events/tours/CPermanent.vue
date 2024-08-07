<template>
  <q-card style="width: 40em">
    <q-card-section v-if="!props.modelValue.active" class="justify-center text-primary text-h6">! Zur Zeit nicht verfügbar !</q-card-section>
    <q-card :class="props.modelValue.active ? '' : 'disabled'">
      <q-card-section class="bg-primary text-accent text-h6">{{ props.modelValue.title }}</q-card-section>
      <q-separator />
      <q-card-section>
        <q-markup-table flat>
          <tbody>
            <tr>
              <td class="text-right">Strecke:</td>
              <td>{{ props.modelValue.length }} km</td>
            </tr>
            <tr>
              <td class="text-right">Höhenmeter:</td>
              <td>ca. {{ props.modelValue.height }} hm</td>
            </tr>
            <tr>
              <td class="text-right">Profil:</td>
              <td>{{ props.modelValue.profile }}</td>
            </tr>
            <tr>
              <td class="text-right">Kontrollen:</td>
              <td>
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
            <tr>
              <td class="text-right">Links:</td>
              <td>
                <ul class="mt-1">
                  <li v-for="(it, key) in props.modelValue.urls" :key class="mb-1">
                    <a :href="it.toString()" target="_blank">{{ key }}</a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td class="text-no-wrap text-right">Letzte Änderung:</td>
              <td>{{ useDateTime().format(props.modelValue.lastChange) }}</td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-card-section>
      <q-separator />
      <q-expansion-item label="Details">
        <q-card-section>
          <span class="text-pre-wrap" v-html="props.modelValue.text" />
        </q-card-section>
      </q-expansion-item>
    </q-card>
  </q-card>
</template>

<script lang="ts" setup>
import Permanent from 'src/models/entities/events/tours/Permanent'
import useDateTime from 'src/utils/DateTime'

const props = defineProps<{ modelValue: Permanent }>()
</script>
