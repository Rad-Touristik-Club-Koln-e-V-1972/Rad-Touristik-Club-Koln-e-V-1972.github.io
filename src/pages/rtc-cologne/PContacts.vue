<template>
    <q-card flat>
        <q-card-section class="bg-primary text-accent text-h6">Kontakte</q-card-section>
        <q-card-section class="text-subtitle1">Briefpost bitte immer an: RTC Köln, Postfach 990103, 51083 Köln</q-card-section>
        <q-card-section>
            <masonry-wall :column-width="280" :gap="16" :items="useContactsStore().all">
                <template #default="{ item }">
                    <c-contact :model-value="item" />
                </template>
            </masonry-wall>
        </q-card-section>
    </q-card>
</template>

<script lang="ts" setup>
import CContact from 'components/pages/rtc-cologne/CContact.vue'
import useContactsStore from 'stores/rtc-cologne/Contacts'
</script>
