<template>
    <v-card id="CTour" max-width="37em">
        <v-toolbar color="primary" dense flat>
            <v-toolbar-title class="accent--text text-title">{{ props.value.title }}</v-toolbar-title>
        </v-toolbar>
        <v-card-subtitle class="text-title">
            <v-simple-table dense>
                <tbody>
                    <tr>
                        <td class="text-right" v-text="'Strecke:'" />
                        <td v-text="`${props.value.length} km`" />
                    </tr>
                    <tr>
                        <td class="text-right" v-text="'Höhenmeter:'" />
                        <td v-text="`ca. ${props.value.height} hm`" />
                    </tr>
                    <tr>
                        <td class="text-right" v-text="'Profil:'" />
                        <td v-text="props.value.profile" />
                    </tr>
                    <tr>
                        <td class="text-right" v-text="'Kontrollen:'" />
                        <td>
                            <dl class="my-1">
                                <div v-for="it in props.value.controls" :key="it.id">
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
                                <li v-for="(it, key) in props.value.urls" :key="key" class="mb-1">
                                    <a :href="it.toString()" target="_blank" v-text="key" />
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-no-wrap text-right" v-text="'Letzte Änderung:'" />
                        <td v-text="dateTime.format(props.value.lastChange, undefined, true)" />
                    </tr>
                </tbody>
            </v-simple-table>
        </v-card-subtitle>
        <v-divider />
        <v-card-actions>
            <v-spacer />
            <v-btn text @click="showText = !showText">
                Details
                <v-icon right>{{ showText ? icons.mdiChevronUp : icons.mdiChevronDown }}</v-icon>
            </v-btn>
        </v-card-actions>
        <v-expand-transition>
            <div v-show="showText">
                <v-card-text>
                    <pre class="black--text text-pre-wrap" v-html="props.value.text" />
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { mdiChevronDown, mdiChevronUp } from '@mdi/js'
import Permanent from '~/models/entities/events/tours/Permanent'
import useDateTime from '~/utils/DateTime'

const props = defineProps<{ value: Permanent }>()

const dateTime = useDateTime()

const icons = {
    mdiChevronDown,
    mdiChevronUp,
}
const showText = ref(false)
</script>
