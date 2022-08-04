<template>
    <v-tabs id="CNavigationTabs" centered show-arrows>
        <v-tab v-for="it in items" :key="it.id" exact nuxt :to="it.to">{{ it.title }}</v-tab>
    </v-tabs>
</template>

<script lang="ts" setup>
import { v4 as uuid } from 'uuid'

const items = [
    {
        id: uuid(),
        title: 'Startseite',
        to: { name: 'index' },
    },
    {
        id: uuid(),
        title: 'Über uns',
        to: { name: 'index' },
    },
    {
        id: uuid(),
        title: 'Kontakt',
        to: { name: 'contact' },
    },
    {
        id: uuid(),
        title: 'RTF/CTF',
        to: { name: 'index' },
    },
    {
        id: uuid(),
        title: 'Galerie',
        to: { name: 'gallery' },
    },
    {
        id: uuid(),
        title: 'Touren-Tipps',
        to: { name: 'index' },
    },
]
</script>
