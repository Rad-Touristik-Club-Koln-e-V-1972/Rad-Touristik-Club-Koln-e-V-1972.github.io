<template>
    <v-card id="ContactView" flat>
        <v-card-title class="text-body-1 text-sm-h6 text-md-h5 text-lg-h4 text-xl-h3">Kontakte</v-card-title>
        <v-card-subtitle class="text-body-2 text-sm-body-1 text-md-h6 text-lg-h5 text-xl-h4">Briefpost bitte immer an: RTC Köln, Postfach 990103, 51083 Köln</v-card-subtitle>
        <v-card-text>
            <v-row class="d-flex justify-center" dense>
                <v-col v-for="(item, index) in items" :key="index" cols="auto">
                    <c-contact :item="item" />
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import CContact from '@/components/page/CContact.vue'
import Contact from '@/models/entities/Contact'
import DB from '@/databases/pages/contact/DB'

export default defineComponent({
    name: 'ContactView',
    components: { CContact },
    setup() {
        return {
            items: ([] as Contact[]).concat(DB),
        }
    },
})
</script>

<style lang="scss" scoped></style>
