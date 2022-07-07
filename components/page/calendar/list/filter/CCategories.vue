<template>
    <v-autocomplete
        id="CCategories"
        :value="value"
        :append-icon="icons.mdiFilter"
        clearable
        hide-details
        :items="Object.values(EEvent)"
        label="Kategorien"
        multiple
        @input="(it) => $emit('input', it)"
    />
</template>

<script lang="ts">
import { mdiFilter } from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'
import EEvent from '@/models/enums/EEvent'

export default defineComponent({
    name: 'CCategories',
    props: { value: { required: true, type: Array } },
    emits: ['input'],
    setup() {
        return {
            EEvent,
            icons: { mdiFilter },
        }
    },
})
</script>

<style lang="scss" scoped />
