<template>
    <v-sheet id="CControl">
        <v-toolbar flat>
            <v-btn v-if="props.value !== ECalendar.list" class="mr-0 mr-lg-4 mr-sm-2 mr-xl-8" fab text @click="emits('prev')">
                <v-icon v-text="icons.mdiChevronLeft" />
            </v-btn>
            <v-btn v-if="props.value !== ECalendar.list" class="text-button text-sm-button text-md-body-2 text-lg-body-1 text-xl-h6" outlined @click="emits('showToday')">
                Heute
            </v-btn>
            <v-btn v-if="props.value !== ECalendar.list" class="ml-0 ml-lg-4 ml-sm-2 ml-xl-8" fab text @click="emits('next')">
                <v-icon v-text="icons.mdiChevronRight" />
            </v-btn>
            <v-toolbar-title v-if="props.value !== ECalendar.list" class="text-button text-sm-button text-md-body-2 text-lg-body-1 text-xl-h6">
                {{ props.title }}
            </v-toolbar-title>
            <v-spacer />
            <v-menu bottom right>
                <template #activator="{ on, attrs }">
                    <v-btn class="text-button text-sm-button text-md-body-2 text-lg-body-1 text-xl-h6" outlined v-bind="attrs" v-on="on">
                        {{ value }}
                        <v-icon right v-text="icons.mdiMenuDown" />
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, index) in ECalendar" :key="index" @click="emits('input', item)">
                        <v-list-item-title class="text-button text-sm-button text-md-body-2 text-lg-body-1 text-xl-h6">
                            {{ item }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar>
    </v-sheet>
</template>

<script lang="ts" setup>
import { mdiChevronLeft, mdiChevronRight, mdiMenuDown } from '@mdi/js'
import ECalendar from '@/models/enums/ECalendar'

const emits = defineEmits<{
    (e: 'input', value: ECalendar[]): void
    (e: 'next'): void
    (e: 'prev'): void
    (e: 'showToday'): void
}>()
const props = defineProps<{
    value: ECalendar
    title: string
}>()

const icons = {
    mdiChevronLeft,
    mdiChevronRight,
    mdiMenuDown,
}
</script>

<style lang="scss" scoped />
