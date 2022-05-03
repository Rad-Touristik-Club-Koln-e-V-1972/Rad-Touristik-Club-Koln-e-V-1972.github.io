<template>
    <v-navigation-drawer id="CNavigationDrawer" :value="value" app bottom temporary @input="(event) => $emit('input', event)">
        <v-row>
            <v-col>
                <v-list nav dense>
                    <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                        :href="item.url || undefined"
                        :nuxt="!!item.to"
                        :target="item.url ? '_blank' : undefined"
                        :to="item.to || undefined"
                        exact
                    >
                        <v-list-item-action>
                            <v-icon v-text="item.icon" />
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title style="white-space: normal" v-text="item.title" />
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card flat>
                    <v-card-title class="justify-center text-body-2 text-md-body-1 text-lg-h6 text-xl-h5" v-text="'Folge uns!'" />
                    <v-card-text class="text-center">
                        <v-row>
                            <v-col v-for="(item, index) in socialMediaItems" :key="index">
                                <v-btn :href="item.url" fab icon target="_blank">
                                    <v-icon :color="item.color" large v-text="item.icon" />
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-navigation-drawer>
</template>

<script lang="ts">
import {
    mdiBike,
    mdiCalendarClockOutline,
    mdiCalendarHeart,
    mdiFacebook,
    mdiGoogle,
    mdiInstagram,
    mdiMessageDraw,
    mdiNewspaperVariantMultiple,
    mdiWeatherPartlyRainy,
    mdiYoutube,
} from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
    props: {
        value: { required: true, type: Boolean },
    },
    emits: ['input'],
    setup() {
        return {
            items: [
                {
                    icon: mdiCalendarClockOutline,
                    title: 'Veranstaltungen & Termine',
                    to: { name: 'index' },
                },
                {
                    icon: mdiBike,
                    title: "Empfohlene RTF's",
                    to: { name: 'index' },
                },
                {
                    icon: mdiCalendarHeart,
                    title: 'Breitensportkalender BDR',
                    url: 'https://breitensport.rad-net.de/breitensportkalender/',
                },
                {
                    icon: mdiWeatherPartlyRainy,
                    title: 'Wetter live in Köln + Regenradar',
                    url: 'https://www.koeln.de/wetter/regenradar/',
                },
                {
                    icon: mdiMessageDraw,
                    title: 'Gästebuch',
                    to: { name: 'guestbook' },
                },
                {
                    icon: mdiNewspaperVariantMultiple,
                    title: 'Presseberichte über uns',
                    to: { name: 'index' },
                },
            ],
            socialMediaItems: [
                {
                    color: 'indigo',
                    icon: mdiFacebook,
                    url: 'https://www.facebook.com/RTC.Koeln/',
                },
                {
                    color: 'red lighten-2',
                    icon: mdiInstagram,
                    url: 'https://www.instagram.com/rtckoeln/',
                },
                {
                    color: 'red lighten-2',
                    icon: mdiGoogle,
                    url: 'https://www.google.de/search?q=RTC+Köln+e.V.+1972/',
                },
                {
                    color: 'red lighten-2',
                    icon: mdiYoutube,
                    url: 'https://www.youtube.com/channel/UCC5YG6J73hWEdPoMbdjGG1w/',
                },
            ],
        }
    },
})
</script>

<style lang="scss" scoped></style>
