<template>
    <v-carousel id="CSlideshow" cycle :height="props.height" hide-delimiters :show-arrows="props.items.length > 1" show-arrows-on-hover>
        <v-carousel-item v-for="(item, i) in props.items" :key="i" contain :src="item" />
    </v-carousel>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

const props = defineProps({
    height: { default: '100%', type: String },
    items: { required: true, type: Array as PropType<string[]> },
})
</script>

<style lang="scss" scoped />
