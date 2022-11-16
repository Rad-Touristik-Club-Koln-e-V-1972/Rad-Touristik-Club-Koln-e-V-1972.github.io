<template>
    <v-card id="VWinter" flat>
        <v-card-title>
            <v-toolbar color="primary" flat>
                <v-toolbar-title class="accent--text text-body-1 text-sm-body-2 text-md-h6 text-lg-h5 text-xl-h4">Wintertraining</v-toolbar-title>
            </v-toolbar>
        </v-card-title>
        <v-card-text />
    </v-card>
</template>

<script lang="ts" setup>
// TODO WORKAROUND UNTIL VUETIFY 2.7
import { getCurrentInstance, ref } from 'vue'

// TODO WORKAROUND UNTIL VUETIFY 2.7
const vuetify = ref(getCurrentInstance()?.proxy?.$vuetify)
</script>
