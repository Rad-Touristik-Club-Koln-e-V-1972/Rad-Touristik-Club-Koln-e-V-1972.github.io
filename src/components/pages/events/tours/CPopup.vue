<template>
    <v-dialog id="CPopup" v-model="dialog" scrollable width="auto">
        <v-card>
            <v-toolbar color="primary" dense flat>
                <v-toolbar-title class="accent--text text-title">{{ props.value.title }}</v-toolbar-title>
            </v-toolbar>
            <!-- TODO style="padding: 16px" IS A WORKAROUND FOR https://github.com/vuetifyjs/vuetify/issues/12170 -->
            <v-card-text style="padding: 16px">
                <pre class="black--text text-pre-wrap" v-html="props.value.text" />
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

const props = defineProps<{ value: Popup }>()

const dialog = ref(true)
</script>
