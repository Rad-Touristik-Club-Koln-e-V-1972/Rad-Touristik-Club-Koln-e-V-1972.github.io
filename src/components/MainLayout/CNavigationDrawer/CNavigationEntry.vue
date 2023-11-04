<template>
    <q-expansion-item v-if="props.modelValue.children?.length" expand-separator :icon="props.modelValue.icon" :label="props.modelValue.title?.toString()" switch-toggle-side>
        <c-navigation-entry v-for="child in props.modelValue.children" :key="child.id" :model-value="child" />
    </q-expansion-item>
    <q-item v-else v-ripple clickable exact :href="props.modelValue.url?.toString()" :target="props.modelValue.target" :to="props.modelValue.to">
        <q-item-section avatar>
            <q-icon :name="props.modelValue.icon" />
        </q-item-section>
        <q-item-section>{{ props.modelValue.title }}</q-item-section>
    </q-item>
</template>

<script lang="ts" setup>
import Navigation from 'src/models/entities/navigation/Navigation'

const props = defineProps<{ modelValue: Navigation }>()
</script>
