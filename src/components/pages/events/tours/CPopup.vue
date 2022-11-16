<template>
    <v-dialog id="CPopup" v-model="dialog" scrollable width="auto">
        <v-card>
            <v-toolbar class="accent--text mb-5" color="primary" dense flat>
                <v-toolbar-title>{{ props.value.title }}</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <pre class="text-pre-wrap" v-html="props.value.text" />
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn class="font-weight-black" color="primary" text @click="dialog = false">OK</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Popup from '~/models/entities/Popup'

const props = defineProps<{
    value: Popup
}>()

const dialog = ref(true)
</script>
