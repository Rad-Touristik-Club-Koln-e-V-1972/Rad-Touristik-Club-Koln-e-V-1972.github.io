<template>
    <v-carousel
        id="CSlideshow"
        :cycle="props.cycle"
        :height="props.height"
        hide-delimiters
        interval="12000"
        :show-arrows="props.value.length > 1"
        show-arrows-on-hover
        :value="startIndex"
    >
        <v-carousel-item v-for="(item, i) in props.value" :key="i" contain :src="item">
            <template #placeholder>
                <c-loading-skeleton />
            </template>
        </v-carousel-item>
    </v-carousel>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import CLoadingSkeleton from '~/components/CLoadingSkeleton.vue'

const props = defineProps({
    cycle: { default: true, type: Boolean },
    height: { default: '100%', type: String },
    startIndex: { default: 0, type: Number },
    value: { required: true, type: Array as PropType<string[]> },
})
</script>
