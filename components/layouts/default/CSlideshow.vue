<template>
    <v-carousel id="CSlideshow" cycle height="200" hide-delimiters show-arrows-on-hover>
        <template #prev="{ on, attrs }">
            <v-btn icon style="background-color: var(--v-secondary-base)" v-bind="attrs" v-on="on">
                <v-icon color="accent" x-large>
                    {{ icons.mdiChevronLeft }}
                </v-icon>
            </v-btn>
        </template>
        <template #next="{ on, attrs }">
            <v-btn icon style="background-color: var(--v-secondary-base)" v-bind="attrs" v-on="on">
                <v-icon color="accent" x-large>
                    {{ icons.mdiChevronRight }}
                </v-icon>
            </v-btn>
        </template>
        <v-carousel-item v-for="(item, i) in items" :key="i" contain :src="item" />
    </v-carousel>
</template>

<script lang="ts">
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import { defineComponent, PropType } from '@nuxtjs/composition-api'

export default defineComponent({
    name: 'CSlideshow',
    props: {
        items: { required: true, type: Array as PropType<string[]> },
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
