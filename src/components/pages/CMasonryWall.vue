<template>
    <div class="column masonry-wall-container">
        <div class="masonry-wall-flex-break hidden" />
        <div class="masonry-wall-flex-break" />
        <div class="masonry-wall-flex-break" />
        <div class="masonry-wall-flex-break" />
        <div class="masonry-wall-flex-break" />
        <div class="masonry-wall-flex-break" />
        <div v-for="it in props.items" :key="it.id" class="masonry-wall-cell">
            <slot :item="it" />
        </div>
    </div>
</template>

<script generic="T extends AEntity" lang="ts" setup>
import type AEntity from 'src/models/entities/AEntity.ts'

const props = defineProps<{ items: T[] }>()
</script>
