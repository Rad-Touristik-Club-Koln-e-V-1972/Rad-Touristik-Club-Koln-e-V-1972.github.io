<template>
    <v-dialog id="CAccessibility" v-model="dialog" width="auto">
        <template #activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>{{ mdiWheelchair }}</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title>Barrierefreiheit</v-card-title>
            <v-card-text>
                <v-list>
                    <v-list-item>
                        <v-list-item-action>
                            <v-switch v-model="legasthenie" @click="switchFont()" />
                        </v-list-item-action>
                        <v-list-item-action-text>Legasthenie</v-list-item-action-text>
                    </v-list-item>
                </v-list>
            </v-card-text>
            <v-divider />
            <v-card-actions>
                <v-spacer />
                <v-btn color="primary" variant="text" @click="dialog = false">Ok</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import { mdiWheelchair } from '@mdi/js'

const dialog = ref(false)
const legasthenie = ref(false)

// noinspection FunctionWithMultipleLoopsJS
const switchFont = () => {
    const font = legasthenie.value ? 'OpenDyslexic' : 'Bahnschrift'

    document.getElementById('app')?.style?.setProperty('font-family', font)

    for (const element of document.querySelectorAll('[class*="text"]')) {
        ;(element as HTMLElement).style.setProperty('font-family', font)
    }

    for (const element of document.querySelectorAll('[class*="accessibility"]')) {
        const attribute = element.getAttribute('style')
        if (attribute) element.setAttribute('style', attribute.replace(font, `${font} !important`))
    }
}

nextTick(() => switchFont())
</script>
