<template>
    <v-sheet id="DView">
        <v-card-text>
            <v-dialog v-model="isOpen" persistent scrollable>
                <template #activator="{ attrs, on }">
                    <v-img :max-width="`${vuetify.breakpoint.mobile ? 10 : 20}em`" :src="props.value.previewUrl" style="cursor: pointer" v-bind="attrs" v-on="on" />
                </template>
                <v-card class="text-center">
                    <v-toolbar color="primary" flat>
                        <v-btn icon dark @click="isOpen = false">
                            <v-icon color="accent" v-text="icons.mdiClose" />
                        </v-btn>
                        <v-spacer />
                    </v-toolbar>
                    <v-card-text>
                        <v-img :src="props.value.srcUrl" />
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-card-text>
    </v-sheet>
</template>

<script lang="ts" setup>
import { getCurrentInstance, ref } from 'vue'
import { mdiClose } from '@mdi/js'
import Entry from '@/models/entities/gallery/Entry'

const props = defineProps<{ value: Entry }>()

// TODO WORKAROUND UNTIL VUETIFY 2.7
const vuetify = ref(getCurrentInstance()?.proxy.$vuetify)

const icons = { mdiClose }
const isOpen = ref(false)
</script>

<style lang="scss" scoped />
