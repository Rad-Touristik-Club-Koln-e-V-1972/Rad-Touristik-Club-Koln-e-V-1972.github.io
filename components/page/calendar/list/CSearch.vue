<template>
    <v-text-field id="CSearch" :value="value" :append-icon="icons.mdiMagnify" clearable hide-details label="Suche" @input="(it) => $emit('input', it)" />
</template>

<script lang="ts">
import { mdiMagnify } from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
    name: 'CSearch',
    props: { value: { required: true, type: String } },
    emits: ['input'],
    setup() {
        return {
            icons: { mdiMagnify },
        }
    },
})
</script>

<style lang="scss" scoped />
