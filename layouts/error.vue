<template>
    <div id="ErrorView" class="d-flex justify-center">
        <v-card min-width="300px">
            <v-card-title v-text="title" />
            <v-card-text v-text="text()" />
            <v-card-actions>
                <v-btn :to="{ name: 'index' }" v-text="'Homepage'" />
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
        error: { default: null, type: Object as PropType<NuxtError> },
    },
    setup(props) {
        return {
            text: () => {
                let text

                switch (props.error.statusCode) {
                    case EHTTP.NOT_FOUND:
                        text = 'Diese Seite existiert nicht.'
                        break
                    default:
                        text = 'Ein unbekannter Fehler trat auf.'
                }

                return text
            },
            title: `Fehlercode ${props.error?.statusCode}`,
        }
    },
})
</script>

<style lang="scss" scoped></style>
