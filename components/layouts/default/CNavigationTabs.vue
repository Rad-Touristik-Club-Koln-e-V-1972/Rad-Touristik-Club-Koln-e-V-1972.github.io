<template>
    <v-tabs id="CNavigationTabs" centered :next-icon="icons.mdiChevronRight" :prev-icon="icons.mdiChevronLeft" :show-arrows="$vuetify.breakpoint.mobile">
        <v-tab v-for="(item, index) in items" :key="index" exact nuxt :to="item.to">
            {{ item.title }}
        </v-tab>
    </v-tabs>
</template>

<script lang="ts">
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
    name: 'CNavigationTabs',
    setup() {
        return {
            icons: {
                mdiChevronLeft,
                mdiChevronRight,
            },
            items: [
                {
                    title: 'Startseite',
                    to: { name: 'index' },
                },
                {
                    title: 'Über uns',
                    to: { name: 'index' },
                },
                {
                    title: 'Kontakt',
                    to: { name: 'contact' },
                },
                {
                    title: 'RTF/CTF',
                    to: { name: 'index' },
                },
                {
                    title: 'Galerie',
                    to: { name: 'index' },
                },
                {
                    title: 'Touren-Tipps',
                    to: { name: 'index' },
                },
            ],
        }
    },
})
</script>

<style lang="scss" scoped></style>
