<template>
    <v-carousel id="CSponsors" cycle hide-delimiters height="100%" interval="6000" :show-arrows="false">
        <v-carousel-item v-for="it in useSponsorStore().all" :key="it.id">
            <v-card flat height="15em" :href="it.url?.toString()" target="_blank" tile>
                <v-row class="align-center fill-height justify-center" no-gutters>
                    <v-col cols="auto">
                        <span v-if="it.text" v-text="it.text" />
                        <v-img v-else-if="it.imageUrl" contain :src="it.imageUrl.toString()" />
                    </v-col>
                </v-row>
            </v-card>
        </v-carousel-item>
    </v-carousel>
</template>

<script lang="ts" setup>
import { useSponsorStore } from '~/store/Sponsor'
</script>
