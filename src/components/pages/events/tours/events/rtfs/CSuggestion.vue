<template>
    <v-card id="CSuggestion" max-width="20em">
        <v-card-title class="text-title">{{ props.value.title }}</v-card-title>
        <v-card-text>
            <a :href="props.value.url?.toString()" target="_blank">
                <v-img eager :src="props.value.imageUrl?.toString()" style="cursor: pointer">
                    <template #placeholder>
                        <c-loading-skeleton />
                    </template>
                </v-img>
            </a>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import CLoadingSkeleton from '~/components/CLoadingSkeleton.vue'
import Navigation from '~/models/entities/Navigation'

const props = defineProps<{ value: Navigation }>()
</script>
