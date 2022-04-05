<template>
  <v-container id="CSponsors" fluid>
    <v-card flat>
      <v-card-title class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-h5 text-xl-h4" v-text="'Unsere Partner'" />
      <v-row dense>
        <v-col v-for="(sponsor, i) in sponsors" :key="i">
          <v-card :href="sponsor.url" :ripple="false" click target="_blank">
            <v-img v-if="sponsor.src" :src="sponsor.src" contain max-height="100px" />
            <v-card-text v-if="sponsor.text" v-text="sponsor.text" />
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CSponsors extends Vue {
  sponsors = [
    {
      src: 'https://content.rtc-koeln.de/layouts/default/sponsors/RheinEnergie.svg',
      text: '',
      url: 'https://www.rheinenergie.com',
    },
    {
      src: 'https://content.rtc-koeln.de/layouts/default/sponsors/Volksbank_Köln_Bonn_eG.jpg',
      text: '',
      url: 'https://www.volksbank-koeln-bonn.de',
    },
    {
      src: 'https://content.rtc-koeln.de/layouts/default/sponsors/dm-drogerie_markt_GmbH_+_Co._KG.jpg',
      text: '',
      url: 'https://www.dm.de',
    },
    {
      src: 'https://content.rtc-koeln.de/layouts/default/sponsors/Auto_Laukat_KG.jpg',
      text: '',
      url: 'https://www.laukat.de',
    },
    {
      src: 'https://content.rtc-koeln.de/layouts/default/sponsors/Radio_Meller_GmbH.jpg',
      text: '',
      url: 'https://www.euronics.de/K%C3%B6ln-meller/ueber-uns',
    },
    {
      src: 'https://content.rtc-koeln.de/layouts/default/sponsors/Autohaus_Ulmer.jpg',
      text: '',
      url: 'https://www.autohaus-ulmer.de',
    },
    {
      src: 'https://content.rtc-koeln.de/layouts/default/sponsors/Mühlhäuser.jpg',
      text: '',
      url: 'https://www.muehlhaeuser.biz',
    },
    {
      src: '',
      text: 'Gisbert Reinhold Objektbeschriftung Industrie- und Werbeschilder',
      url: '',
    },
    {
      src: '',
      text: 'Auch all denjenigen, die um Diskretion gebeten haben, sind wir sehr verbunden!',
      url: '',
    },
  ]
}
</script>

<style lang="scss" scoped></style>
