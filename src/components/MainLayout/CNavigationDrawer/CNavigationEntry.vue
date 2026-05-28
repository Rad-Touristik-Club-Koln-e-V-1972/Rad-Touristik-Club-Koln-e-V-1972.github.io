<template>
  <div>
    <q-expansion-item v-if="props.modelValue.children?.length" :icon="props.modelValue.icon" :label="props.modelValue.title?.toString()" class="q-ml-sm" expand-separator switch-toggle-side>
      <c-navigation-entry v-for="child in props.modelValue.children" :key="child.id" :is-child="true" :model-value="child" />
    </q-expansion-item>
    <q-item v-else v-ripple :href="props.modelValue.url?.toString()" :target="props.modelValue.target" :to="props.modelValue.to" clickable exact>
      <q-item-section avatar side>
        <q-icon :name="props.modelValue.icon" />
      </q-item-section>
      <q-item-section>
        <div v-html="props.modelValue.title" />
      </q-item-section>
    </q-item>
  </div>
</template>

<script lang="ts" setup>
import type Navigation from 'src/models/entities/navigation/Navigation'

const props = defineProps<{ modelValue: Navigation }>()
</script>
