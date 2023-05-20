<template>
    <v-toolbar id="CControl" flat>
        <v-btn v-if="!isCalendarList" fab :small="vuetify?.breakpoint.xs" text @click="emits('prev')">
            <v-icon>{{ mdiChevronLeft }}</v-icon>
        </v-btn>
        <v-btn v-if="!isCalendarList" outlined :small="vuetify?.breakpoint.xs" @click="emits('showToday')">Heute</v-btn>
        <v-btn v-if="!isCalendarList" fab :small="vuetify?.breakpoint.xs" text @click="emits('next')">
            <v-icon>{{ mdiChevronRight }}</v-icon>
        </v-btn>
        <v-toolbar-title v-if="!isCalendarList && !vuetify?.breakpoint.xs">{{ props.title }}</v-toolbar-title>
        <v-spacer />
        <v-menu bottom right>
            <template #activator="{ on, attrs }">
                <v-btn outlined :small="vuetify?.breakpoint.xs" v-bind="attrs" v-on="on">
                    {{ value }}
                    <v-icon right>{{ mdiMenuDown }}</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="it in ECalendar" :key="it" @click="emits('input', it)">
                    <v-list-item-title>
                        {{ it }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-toolbar>
</template>

<script lang="ts" setup>
// TODO WORKAROUND UNTIL VUETIFY 2.7
import { computed, getCurrentInstance, ref } from 'vue'
import { mdiChevronLeft, mdiChevronRight, mdiMenuDown } from '@mdi/js'
import ECalendar from '~/models/enums/events/ECalendar'

const emits = defineEmits<{
    (e: 'input', value: ECalendar): void
    (e: 'next'): void
    (e: 'prev'): void
    (e: 'showToday'): void
}>()
const props = defineProps<{
    value: ECalendar
    title: string
}>()

// TODO WORKAROUND UNTIL VUETIFY 2.7
const vuetify = ref(getCurrentInstance()?.proxy?.$vuetify)

const isCalendarList = computed(() => props.value === ECalendar.list)
</script>
