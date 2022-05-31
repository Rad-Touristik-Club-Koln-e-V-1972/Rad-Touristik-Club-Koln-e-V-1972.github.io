<template>
    <v-card id="CSponsors" flat>
        <v-card-title class="justify-center text-body-2 text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h5">Sponsoren</v-card-title>
        <v-card v-for="(sponsor, i) in sponsors" :key="i" flat :href="sponsor.url" :ripple="false" target="_blank">
            <v-card-text>
                <span v-if="sponsor.text" v-text="sponsor.text"></span>
                <v-img v-if="sponsor.imageSrc" contain max-height="100px" :src="sponsor.imageSrc" />
            </v-card-text>
        </v-card>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
    name: 'CSponsors',
    setup() {
        return {
            sponsors: [
                {
                    imageSrc: 'https://content.rtc-koeln.de/layouts/default/sponsors/RheinEnergie.svg',
                    text: '',
                    url: 'https://www.rheinenergie.com',
                },
                {
                    imageSrc: 'https://content.rtc-koeln.de/layouts/default/sponsors/Volksbank_Köln_Bonn_eG.jpg',
                    text: '',
                    url: 'https://www.volksbank-koeln-bonn.de',
                },
                {
                    imageSrc: 'https://content.rtc-koeln.de/layouts/default/sponsors/dm-drogerie_markt_GmbH_+_Co._KG.jpg',
                    text: '',
                    url: 'https://www.dm.de',
                },
                {
                    imageSrc: 'https://content.rtc-koeln.de/layouts/default/sponsors/Auto_Laukat_KG.jpg',
                    text: '',
                    url: 'https://www.laukat.de',
                },
                {
                    imageSrc: 'https://content.rtc-koeln.de/layouts/default/sponsors/Radio_Meller_GmbH.jpg',
                    text: '',
                    url: 'https://www.euronics.de/K%C3%B6ln-meller/ueber-uns',
                },
                {
                    imageSrc: 'https://content.rtc-koeln.de/layouts/default/sponsors/Autohaus_Ulmer.jpg',
                    text: '',
                    url: 'https://www.autohaus-ulmer.de',
                },
                {
                    imageSrc: 'https://content.rtc-koeln.de/layouts/default/sponsors/Mühlhäuser.jpg',
                    text: '',
                    url: 'https://www.muehlhaeuser.biz',
                },
                {
                    imageSrc: '',
                    text: 'Gisbert Reinhold Objektbeschriftung Industrie- und Werbeschilder',
                    url: '',
                },
                {
                    imageSrc: '',
                    text: 'Auch all denjenigen, die um Diskretion gebeten haben, sind wir sehr verbunden!',
                    url: '',
                },
            ],
        }
    },
})
</script>

<style lang="scss" scoped></style>
