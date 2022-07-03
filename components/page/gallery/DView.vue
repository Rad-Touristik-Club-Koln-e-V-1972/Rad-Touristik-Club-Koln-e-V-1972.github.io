<template>
    <v-sheet id="DView">
        <v-card-text>
            <v-dialog v-model="isOpen" persistent scrollable>
                <template #activator="{ attrs, on }">
                    <v-img :max-width="`${$vuetify.breakpoint.mobile ? 10 : 20}em`" :src="value.previewUrl" style="cursor: pointer" v-bind="attrs" v-on="on" />
                </template>
                <v-card class="text-center">
                    <v-toolbar color="primary" flat>
                        <v-btn icon dark @click="isOpen = false">
                            <v-icon color="accent" v-text="icons.mdiClose" />
                        </v-btn>
                        <v-spacer />
                    </v-toolbar>
                    <v-card-text>
                        <v-img :src="value.srcUrl" />
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-card-text>
    </v-sheet>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { mdiClose } from '@mdi/js'
import Entry from '@/models/entities/gallery/Entry'

export default defineComponent({
    name: 'DView',
    props: { value: { required: true, type: Entry } },
    setup() {
        return {
            icons: { mdiClose },
            isOpen: ref(false),
        }
    },
})
</script>

<style lang="scss" scoped />
