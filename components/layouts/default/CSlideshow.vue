<template>
    <v-carousel id="CSlideshow" cycle height="200" hide-delimiters show-arrows-on-hover>
        <template #prev="{ on, attrs }">
            <v-btn icon style="background-color: var(--v-accent-base)" v-bind="attrs" v-on="on">
                <v-icon color="secondary" x-large v-text="icons.mdiChevronLeft" />
            </v-btn>
        </template>
        <template #next="{ on, attrs }">
            <v-btn icon style="background-color: var(--v-accent-base)" v-bind="attrs" v-on="on">
                <v-icon color="secondary" x-large v-text="icons.mdiChevronRight" />
            </v-btn>
        </template>
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item" contain />
    </v-carousel>
</template>

<script lang="ts">
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import { defineComponent, PropType } from '@nuxtjs/composition-api'

export default defineComponent({
    props: {
        items: { required: true, type: [] as PropType<string[]> },
    },
    setup() {
        return {
            icons: {
                mdiChevronLeft,
                mdiChevronRight,
            },
        }
    },
})
</script>

<style lang="scss" scoped></style>
