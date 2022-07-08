<template>
    <v-carousel id="CSlideshow" cycle :height="height" hide-delimiters :show-arrows="items.length > 1" show-arrows-on-hover>
        <v-carousel-item v-for="(item, i) in items" :key="i" contain :src="item" />
    </v-carousel>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

export default defineComponent({
    name: 'CSlideshow',
    props: {
        height: { default: '100%', type: String },
        items: { required: true, type: [] as PropType<string[]> },
    },
    setup() {
        return {}
    },
})
</script>

<style lang="scss" scoped />
