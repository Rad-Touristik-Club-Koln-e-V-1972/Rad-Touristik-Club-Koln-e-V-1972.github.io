<template>
    <div id="error" class="d-flex justify-center">
        <v-card min-width="300px">
            <v-toolbar color="primary" dense flat>
                <v-toolbar-title class="accent--text text-title">Fehlercode {{ error.statusCode }}</v-toolbar-title>
            </v-toolbar>
            <v-card-text>{{ getText() }}</v-card-text>
            <v-card-actions>
                <v-btn :to="{ name: 'about-us-contacts' }">Support</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script lang="ts" setup>
import { NuxtError } from '@nuxt/types'
import EHTTP from '~/models/enums/EHTTP'

const props = defineProps<{ error: NuxtError }>()

const getText = () => {
    let text

    switch (props.error.statusCode) {
        case EHTTP.NOT_FOUND:
            text = 'Diese Seite existiert nicht.'
            break
        case EHTTP.INTERNAL_SERVER_ERROR:
            text = 'Ein unbekannter Serverfehler trat auf.'
            break
        default:
            text = 'Ein unbekannter Fehler trat auf.'
    }

    return text
}
</script>
