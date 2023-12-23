<template>
    <q-drawer v-model="modelValue" bordered show-if-above>
        <q-scroll-area class="fit">
            <c-countdown />
            <br />
            <q-list>
                <c-navigation-entry v-for="it in navigationStore.allNavigation" :key="it.id" :model-value="it" />
            </q-list>
            <q-card class="absolute-bottom" flat>
                <q-card-section class="text-center text-subtitle1">Folge uns auf</q-card-section>
                <q-card-section class="row text-center">
                    <div v-for="it in navigationStore.allSocialMedia" :key="it.id" class="col">
                        <q-btn flat :href="it.url?.toString()" :icon="it.icon" round :target="it.target" :text-color="it.color" />
                    </div>
                </q-card-section>
            </q-card>
        </q-scroll-area>
    </q-drawer>
</template>

<script lang="ts" setup>
import { defineModel } from 'vue'
import CCountdown from 'components/MainLayout/CNavigationDrawer/CCountdown.vue'
import CNavigationEntry from 'components/MainLayout/CNavigationDrawer/CNavigationEntry.vue'
import useNavigationStore from 'stores/Navigation'

const modelValue = defineModel<boolean>({ required: true })

const navigationStore = useNavigationStore()
</script>
