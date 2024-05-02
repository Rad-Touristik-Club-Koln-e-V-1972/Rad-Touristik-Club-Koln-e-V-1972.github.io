import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  mdiAccountMultiplePlus,
  mdiBikeFast,
  mdiCalendarAlert,
  mdiCalendarClockOutline,
  mdiCurrencyEur,
  mdiDomain,
  mdiFacebook,
  mdiGithub,
  mdiGoKartTrack,
  mdiGoogle,
  mdiHome,
  mdiHumanCane,
  mdiHumanGreetingProximity,
  mdiHumanMaleBoard,
  mdiImageMultiple,
  mdiInformationOutline,
  mdiInstagram,
  mdiMessageDraw,
  mdiTimelineClockOutline,
  mdiWeatherPartlyRainy,
  mdiWeatherSunny,
  mdiWeatherWindy,
  mdiWeb,
  mdiYoutube,
} from '@quasar/extras/mdi-v7'
import NavigationBuilder from 'src/models/builder/NavigationBuilder'
import Navigation from 'src/models/entities/navigation/Navigation'

export default defineStore('navigation', () => {
  return {
    allNavigation: ref<Navigation[]>([
      new NavigationBuilder().setColor('primary').setIcon(mdiAccountMultiplePlus).setId('4405cecb-c29a-41d2-ac22-0d58af4e3ed0').setTitle('Mitgliedschaft beantragen').setTo('membership-registration').buildNavigation(),
      new NavigationBuilder().setIcon(mdiHome).setId('19e9c467-2c82-4894-a1d3-620565f56826').setTitle('Startseite').setTo('home').buildNavigation(),
      new NavigationBuilder()
        .setChildren(
          new NavigationBuilder().setIcon(mdiCalendarClockOutline).setId('c4455a48-63ee-4e62-b140-f2686d7d71ce').setTitle('Vereinskalender').setTo('events-calendar').buildNavigation(),
          new NavigationBuilder()
            .setChildren(
              new NavigationBuilder().setIcon(mdiCalendarAlert).setId('f8e0d57e-459b-429c-b671-9a3feeae6991').setTitle('RTF / Forsbach-Tour').setTo('events-tours-rtfs').buildNavigation(),
              new NavigationBuilder().setIcon(mdiBikeFast).setId('b53d7f6a-296d-45b6-b061-8a590bf89a20').setTitle('Training').setTo('events-training').buildNavigation(),
              new NavigationBuilder().setIcon(mdiGoKartTrack).setId('c6c800fb-7e14-4651-a7a7-e230b96ddadc').setTitle('Permanente').setTo('events-tours-permanents').buildNavigation(),
            )
            .setId('b88787b2-eb8f-4ffa-b328-c6c49b36ff7a')
            .setTitle('RTF, Training & Permanente')
            .buildNavigation(),
          new NavigationBuilder().setIcon(mdiHumanMaleBoard).setId('595728ab-cb75-48c7-8d63-81d102455568').setTitle('RTF-Empfehlungen außerhalb NRWs').setTo('events-tours-rtfs-suggestions').buildNavigation(),
          new NavigationBuilder()
            .setChildren(
              new NavigationBuilder().setIcon(mdiWeb).setId('16ea8ffe-1b71-48af-ab35-2257836e2fdc').setUrl('www.radsport-events.de/termine/rennrad-events').setTitle('Empfohlene Radsport Events').buildNavigation(),
              new NavigationBuilder().setIcon(mdiWeb).setId('d4929935-f422-4e1e-91b8-4c4f4dccedd1').setUrl('breitensport.rad-net.de/breitensportkalender').setTitle('Breitensportkalender BDR').buildNavigation(),
            )
            .setId('62f750e5-ca73-4ce6-89ff-f16ea12bb152')
            .setTitle('Breitensportkalender & andere Events')
            .buildNavigation(),
        )
        .setIcon(mdiBikeFast)
        .setId('8c11a11a-1232-46c6-a813-f379772d5c9b')
        .setTitle('Veranstaltungen & Termine')
        .buildNavigation(),
      new NavigationBuilder()
        .setChildren(
          new NavigationBuilder().setIcon(mdiWeatherPartlyRainy).setId('88f58d8e-06fb-42e4-8a24-84263c79ff23').setUrl('www.koeln.de/wetter/regenradar/').setTitle('Wetter live in Köln + Regenradar').buildNavigation(),
          new NavigationBuilder().setIcon(mdiWeatherWindy).setId('611c31ec-f5df-4121-b6c8-b7f06c5c12ce').setUrl('www.windy.com/station?50.866,7.143,8').setTitle('Windradar in Köln').buildNavigation(),
        )
        .setIcon(mdiWeatherSunny)
        .setId('525da1da-34be-4901-848c-f9e74a89f64c')
        .setTitle('Wetter')
        .buildNavigation(),
      new NavigationBuilder()
        .setChildren(
          new NavigationBuilder().setIcon(mdiInformationOutline).setId('1d102187-da26-46e9-bed3-9af22aa625d8').setTitle('Über uns').setTo('rtc-cologne-about-us').buildNavigation(),
          new NavigationBuilder().setIcon(mdiTimelineClockOutline).setId('96355be6-336d-43ad-8cd4-f190d3a95ec3').setTitle('Unsere Geschichte').setTo('rtc-cologne-our-story').buildNavigation(),
          new NavigationBuilder().setIcon(mdiImageMultiple).setId('d1718773-901a-42cd-ab49-3745d1a3a8b2').setTitle('Galerien').setTo('rtc-cologne-galleries').buildNavigation(),
          new NavigationBuilder().setIcon(mdiMessageDraw).setId('d0900ba6-f50f-46d2-a5a9-c72cfee9dd58').setTitle('Gästebuch').setTo('rtc-cologne-guestbook').buildNavigation(),
          // TODO Offline bis Genehmigung eingeholt wurde
          /* new NavigationBuilder()
          .setIcon(mdiNewspaperVariantMultiple)
          .setId('77fc43fb-f2fa-40ae-b6e1-50c5568b286f')
          .setTitle('Presseberichte')
          .setTo('rtc-cologne-press-reports')
          .build(), */
          new NavigationBuilder().setIcon(mdiHumanGreetingProximity).setId('8b92dcb4-57c0-467e-9f36-ba7a9f325f41').setTitle('Ansprechpartner').setTo('rtc-cologne-contacts').buildNavigation(),
          new NavigationBuilder().setIcon(mdiHumanCane).setId('244d210f-2151-427e-a1ed-3f767c034a50').setTitle('Alte Website').setUrl('old.rtc-koeln.de').buildNavigation(),
        )
        .setIcon(mdiDomain)
        .setId('4fa2ef6c-b1ce-4690-9f60-36c76656840d')
        .setTitle('Der RTC Köln')
        .buildNavigation(),
      new NavigationBuilder().setIcon(mdiCurrencyEur).setId('b7aa63ac-1e9a-44f3-80f6-4c2a8df8928b').setTitle('Sponsoren').setTo('sponsors').buildNavigation(),
    ]),
    allSocialMedia: ref([
      new NavigationBuilder().setColor('indigo').setIcon(mdiFacebook).setId('53558cbf-2289-4fba-9990-aee4fb7b336d').setUrl('www.facebook.com/RTC.Koeln').buildNavigation(),
      new NavigationBuilder().setColor('red lighten-2').setIcon(mdiInstagram).setId('07d2f238-69ce-4a42-984c-dbfec9d2cbf8').setUrl('www.instagram.com/rtckoeln').buildNavigation(),
      new NavigationBuilder().setColor('red lighten-2').setIcon(mdiGoogle).setId('a54f5291-771b-438e-953f-dbb176193ec1').setUrl('www.google.de/search?q=RTC+Köln+e.V.+1972').buildNavigation(),
      new NavigationBuilder().setColor('red lighten-2').setIcon(mdiYoutube).setId('6a9a788b-4259-492e-934e-d82a116c0c33').setUrl('www.youtube.com/channel/UCC5YG6J73hWEdPoMbdjGG1w').buildNavigation(),
      new NavigationBuilder().setIcon(mdiGithub).setId('e2c05138-6078-4ed4-bbd6-8e0f5e7d0580').setUrl('github.com/Rad-Touristik-Club-Koln-e-V-1972').buildNavigation(),
    ]),
  }
})
