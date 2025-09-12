<template>
  <div>
    <q-expansion-item v-if="props.modelValue.children?.length" class="q-ml-sm" expand-separator :icon="props.modelValue.icon" :label="props.modelValue.title?.toString()" switch-toggle-side>
      <c-navigation-entry v-for="child in props.modelValue.children" :key="child.id" :is-child="true" :model-value="child" />
    </q-expansion-item>
    <q-item v-else v-ripple clickable exact :href="props.modelValue.url?.toString()" :target="props.modelValue.target" :to="props.modelValue.to">
      <q-item-section avatar side>
        <q-icon :name="props.modelValue.icon" />
      </q-item-section>
      <q-item-section>{{ props.modelValue.title }}</q-item-section>
    </q-item>
  </div>
</template>

<script lang="ts" setup>
import type Navigation from 'src/models/entities/navigation/Navigation'

const props = defineProps<{ modelValue: Navigation }>()
</script>
