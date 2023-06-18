<template>
    <q-drawer bordered :model-value="props.modelValue" show-if-above @update:model-value="(value) => emits('update:modelValue', value)">
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
import CCountdown from 'components/MainLayout/CNavigationDrawer/CCountdown.vue'
import CNavigationEntry from 'components/MainLayout/CNavigationDrawer/CNavigationEntry.vue'
import useNavigationStore from 'stores/Navigation'

const emits = defineEmits<{ 'update:modelValue': [value: boolean] }>()
const props = defineProps<{ modelValue: boolean }>()

const navigationStore = useNavigationStore()
</script>
