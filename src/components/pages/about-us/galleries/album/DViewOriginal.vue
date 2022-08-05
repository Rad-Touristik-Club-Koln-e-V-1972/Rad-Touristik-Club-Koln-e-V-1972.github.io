<template>
    <v-card id="DViewOriginal">
        <v-dialog v-model="isOpen" fullscreen persistent>
            <template #activator="{ attrs, on }">
                <v-btn absolute color="primary" v-bind="attrs" v-on="on">
                    <v-icon color="accent">{{ icons.mdiMagnifyPlus }}</v-icon>
                </v-btn>
            </template>
            <v-sheet>
                <v-btn color="primary" fixed style="right: 0; z-index: 1" @click="isOpen = false">
                    <v-icon color="accent">{{ icons.mdiClose }}</v-icon>
                </v-btn>
                <v-img :src="props.value.toString()" />
            </v-sheet>
        </v-dialog>
    </v-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { mdiClose, mdiMagnifyPlus } from '@mdi/js'

const props = defineProps<{ value: URL }>()

const icons = { mdiClose, mdiMagnifyPlus }
const isOpen = ref(false)
</script>
