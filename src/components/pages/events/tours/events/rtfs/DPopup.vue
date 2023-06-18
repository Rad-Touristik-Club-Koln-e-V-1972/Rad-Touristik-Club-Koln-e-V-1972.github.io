<template>
    <q-dialog v-model="dialog">
        <q-card>
            <q-card-section class="bg-primary text-accent text-h6">{{ props.modelValue.title }}</q-card-section>
            <q-card-section>
                <span class="text-pre-wrap" v-html="props.modelValue.text" />
            </q-card-section>
            <q-card-actions align="right">
                <q-btn v-close-popup color="primary" label="OK" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Popup from 'src/models/entities/Popup'

const props = defineProps<{ modelValue: Popup }>()

const dialog = ref(true)
</script>
