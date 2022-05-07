<template>
    <div id="ErrorView" class="d-flex justify-center">
        <v-card min-width="300px">
            <v-card-title v-text="`Fehlercode ${error.statusCode}`" />
            <v-card-text v-text="getText()" />
            <v-card-actions>
                <v-btn :to="{ name: 'contact' }" v-text="'Kontakt'" />
            </v-card-actions>
        </v-card>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { NuxtError } from '@nuxt/types'
import EHTTP from '@/models/enums/EHTTP'

export default defineComponent({
    props: {
        error: { required: true, type: Object as PropType<NuxtError> },
    },
    setup(props) {
        return {
            getText: () => {
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
            },
        }
    },
})
</script>

<style lang="scss" scoped></style>
