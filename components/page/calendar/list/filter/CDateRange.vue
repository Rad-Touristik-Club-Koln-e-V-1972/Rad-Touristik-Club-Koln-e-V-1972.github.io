<template>
    <v-dialog id="CDateRange" ref="dialog" v-model="isOpen" persistent width="290px">
        <template #activator="{ attrs, on }">
            <v-text-field
                v-model="items"
                :append-icon="icons.mdiCalendar"
                clearable
                hide-details
                label="Datenbereich"
                readonly
                v-bind="attrs"
                v-on="on"
                @click:clear="() => $emit('input', [])"
            />
        </template>
        <v-date-picker v-model="items" color="primary" range scrollable>
            <v-spacer />
            <v-btn text @click="abort">Abbrechen</v-btn>
            <v-btn color="primary" text @click="save">OK</v-btn>
        </v-date-picker>
    </v-dialog>
</template>

<script lang="ts">
import { mdiCalendar } from '@mdi/js'
import { defineComponent, PropType, ref } from '@nuxtjs/composition-api'

export default defineComponent({
    name: 'CDateRange',
    props: { value: { required: true, type: [] as PropType<string[]> } },
    emits: ['input'],
    setup(props, ctx) {
        const isOpen = ref(false)
        const items = ref(props.value)

        function close() {
            ctx.emit('input', items.value)
            isOpen.value = false
        }

        return {
            abort: () => {
                items.value = []
                close()
            },
            icons: { mdiCalendar },
            isOpen,
            items,
            save: () => close(),
        }
    },
})
</script>

<style lang="scss" scoped></style>
