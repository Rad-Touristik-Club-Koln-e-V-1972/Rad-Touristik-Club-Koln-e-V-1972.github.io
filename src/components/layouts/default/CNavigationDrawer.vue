<template>
    <v-navigation-drawer id="CNavigationDrawer" app bottom clipped style="max-width: 20em" :value="props.value" width="auto" @input="emitUpdate">
        <v-row class="ma-auto" :dense="!vuetify?.breakpoint.mobile">
            <v-col>
                <c-countdown />
            </v-col>
        </v-row>
        <v-row :no-gutters="vuetify?.breakpoint.mobile">
            <v-col>
                <v-list :dense="!vuetify?.breakpoint.mobile" nav>
                    <template v-for="it in navigationStore.allNavigation">
                        <!-- TODO WORKAROUND FOR https://github.com/vuetifyjs/vuetify/issues/15531 -->
                        <v-list-group v-if="it.children.length" :key="it.id" :prepend-icon="it.icon" :value="it.expanded" @click="workaround">
                            <template #activator>
                                <v-list-item-title style="white-space: normal">{{ it.title }}</v-list-item-title>
                            </template>
                            <template v-for="childIt in it.children">
                                <!-- TODO WORKAROUND FOR https://github.com/vuetifyjs/vuetify/issues/15531 -->
                                <v-list-group v-if="childIt.children.length" :key="childIt.id" no-action sub-group @click="workaround">
                                    <template #activator>
                                        <v-list-item-title style="white-space: normal">{{ childIt.title }}</v-list-item-title>
                                    </template>
                                    <v-list-item
                                        v-for="childChildIt in childIt.children"
                                        :key="childChildIt.id"
                                        exact
                                        :href="childChildIt.url?.toString()"
                                        :nuxt="childChildIt.nuxt"
                                        :target="childChildIt.target"
                                        :to="childChildIt.to"
                                    >
                                        <v-list-item-icon>
                                            <v-icon>{{ childChildIt.icon }}</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-title style="white-space: normal">{{ childChildIt.title }}</v-list-item-title>
                                    </v-list-item>
                                </v-list-group>
                                <v-list-item
                                    v-else
                                    :key="childIt.id"
                                    class="ml-4"
                                    exact
                                    :href="childIt.url?.toString()"
                                    :nuxt="childIt.nuxt"
                                    :target="childIt.target"
                                    :to="childIt.to"
                                >
                                    <v-list-item-icon>
                                        <v-icon>{{ childIt.icon }}</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title class="ml-n4" style="white-space: normal">{{ childIt.title }}</v-list-item-title>
                                </v-list-item>
                            </template>
                        </v-list-group>
                        <v-list-item v-else :key="it.id" exact :href="it.url?.toString()" :nuxt="it.nuxt" :target="it.target" :to="it.to">
                            <v-list-item-icon>
                                <v-icon>{{ it.icon }}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>{{ it.title }}</v-list-item-title>
                        </v-list-item>
                    </template>
                </v-list>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col><c-sponsors /></v-col>
        </v-row>
        <v-row no-gutters>
            <v-col>
                <v-card flat>
                    <v-card-title class="justify-center">Folge uns auf</v-card-title>
                    <v-card-text class="text-center">
                        <v-row no-gutters>
                            <v-col v-for="it in navigationStore.allSocialMedia" :key="it.id">
                                <v-btn fab :href="it.url?.toString()" icon :target="it.target">
                                    <v-icon :color="it.color" large>{{ it.icon }}</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
// TODO WORKAROUND UNTIL VUETIFY 2.7
import { getCurrentInstance, ref } from 'vue'
import CCountdown from '~/components/layouts/default/CCountdown.vue'
import { useNavigationStore } from '~/store/Navigation'
import CSponsors from '~/components/layouts/default/CSponsors.vue'

const emits = defineEmits<{ (e: 'input', value: boolean): void }>()
const props = defineProps<{ value: boolean }>()

const navigationStore = useNavigationStore()
// TODO WORKAROUND UNTIL VUETIFY 2.7
const vuetify = ref(getCurrentInstance()?.proxy?.$vuetify)

const emitUpdate = (modelValue: boolean) => {
    emits('input', modelValue)
}

// TODO WORKAROUND FOR https://github.com/vuetifyjs/vuetify/issues/15531
const workaround = () => {
    setTimeout(() => emits('input', !props.value), 350)
    setTimeout(() => emits('input', !props.value), 350)
}
</script>
