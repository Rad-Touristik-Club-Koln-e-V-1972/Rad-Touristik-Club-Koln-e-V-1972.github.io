<template>
    <v-tabs id="CNavigationTabs" centered show-arrows>
        <v-tab v-for="(item, index) in items" :key="index" exact nuxt :to="item.to">{{ item.title }}</v-tab>
    </v-tabs>
</template>

<script lang="ts" setup>
const items = [
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
        to: { name: 'gallery' },
    },
    {
        title: 'Touren-Tipps',
        to: { name: 'index' },
    },
]
</script>

<style lang="scss" scoped />
