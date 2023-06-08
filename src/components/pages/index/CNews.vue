<template>
    <v-card id="CNews">
        <v-card-title>News</v-card-title>
        <v-card-text>
            <v-slide-group show-arrows>
                <v-row class="justify-center">
                    <v-slide-item v-for="n in useNewsStore().all" :key="n.id" v-slot="{ toggle }">
                        <v-card class="mx-1 my-4" width="20em" @click="toggle">
                            <d-p-d-f-view :value="n" />
                        </v-card>
                    </v-slide-item>
                </v-row>
            </v-slide-group>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import DPDFView from '~/components/pages/rtc-cologne/galleries/album/DPDFView.vue'
import useNewsStore from '~/store/index/News'
</script>
