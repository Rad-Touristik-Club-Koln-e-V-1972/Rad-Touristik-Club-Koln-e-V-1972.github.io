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
                            <td class="text-right" v-text="'Strecke:'" />
                            <td v-text="`${props.modelValue.length} km`" />
                        </tr>
                        <tr>
                            <td class="text-right" v-text="'Höhenmeter:'" />
                            <td v-text="`ca. ${props.modelValue.height} hm`" />
                        </tr>
                        <tr>
                            <td class="text-right" v-text="'Profil:'" />
                            <td v-text="props.modelValue.profile" />
                        </tr>
                        <tr>
                            <td class="text-right" v-text="'Kontrollen:'" />
                            <td>
                                <dl class="my-1">
                                    <div v-for="it in props.modelValue.controls" :key="it.id">
                                        <dt>
                                            <a :href="it.url?.toString()" target="_blank" v-text="it.title" />
                                        </dt>
                                        <dd>
                                            <ul style="list-style: none">
                                                <li v-text="it.street" />
                                                <li v-text="`${it.zipCode} ${it.city}`" />
                                            </ul>
                                        </dd>
                                    </div>
                                </dl>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-right" v-text="'Links:'" />
                            <td>
                                <ul class="mt-1">
                                    <li v-for="(it, key) in props.modelValue.urls" :key="key" class="mb-1">
                                        <a :href="it.toString()" target="_blank" v-text="key" />
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-no-wrap text-right" v-text="'Letzte Änderung:'" />
                            <td v-text="dateTime.format(props.modelValue.lastChange, null, true)" />
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

const dateTime = useDateTime()
</script>
