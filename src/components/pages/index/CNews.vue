<template>
    <v-card id="CNews" flat>
        <v-card-text>
            <v-slide-group show-arrows>
                <v-row class="justify-center">
                    <v-slide-item v-for="it in useNewsStore().all" :key="it.id" v-slot="{ toggle }">
                        <v-card class="mx-1 my-4" flat width="20em" @click="toggle">
                            <v-card-text>
                                <d-p-d-f-view :value="it.image" />
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer />
                                <v-btn text @click="showText = !showText">
                                    Details
                                    <v-icon right>{{ showText ? mdiChevronUp : mdiChevronDown }}</v-icon>
                                </v-btn>
                            </v-card-actions>
                            <v-expand-transition v-if="it.text">
                                <div v-show="showText">
                                    <v-card-text>
                                        <span class="black--text text-pre-wrap" v-text="it.text" />
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-slide-item>
                </v-row>
            </v-slide-group>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import { mdiChevronDown, mdiChevronUp } from '@mdi/js'
import { ref } from 'vue'
import DPDFView from '~/components/pages/rtc-cologne/galleries/album/DPDFView.vue'
import useNewsStore from '~/store/index/News'

const showText = ref(false)
</script>
