import { computed, ref } from 'vue'
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
    mdiSnowman,
    mdiTimelineClockOutline,
    mdiWeatherPartlyRainy,
    mdiWeatherSunny,
    mdiWeatherWindy,
    mdiWeb,
    mdiYoutube,
} from '@mdi/js'
import NavigationBuilder from '~/models/builder/NavigationBuilder'
import ChildBuilder from '~/models/builder/navigation/ChildBuilder'
import ChildChildBuilder from '~/models/builder/navigation/ChildChildBuilder'
import Navigation from '~/models/entities/Navigation'

export const useNavigationStore = defineStore('navigation', () => {
    const navigations = ref<Navigation[]>([
        new NavigationBuilder()
            .setColor('primary')
            .setIcon(mdiAccountMultiplePlus)
            .setId('4405cecb-c29a-41d2-ac22-0d58af4e3ed0')
            .setTitle('Mitgliedschaft beantragen')
            .setTo('membership-registration')
            .build(),
        new NavigationBuilder().setIcon(mdiHome).setId('19e9c467-2c82-4894-a1d3-620565f56826').setTitle('Startseite').setTo('index').build(),
        new NavigationBuilder()
            .setChildren(
                new ChildBuilder().setIcon(mdiCalendarClockOutline).setId('c4455a48-63ee-4e62-b140-f2686d7d71ce').setTitle('Vereinskalender').setTo('events-calendar').build(),
                new ChildBuilder()
                    .setChildren(
                        new ChildChildBuilder()
                            .setIcon(mdiCalendarAlert)
                            .setId('f8e0d57e-459b-429c-b671-9a3feeae6991')
                            .setTitle('RTF / Forsbach-Tour')
                            .setTo('events-tours-events-rtfs')
                            .build(),
                        new ChildChildBuilder().setIcon(mdiSnowman).setId('b53d7f6a-296d-45b6-b061-8a590bf89a20').setTitle('Wintertraining').setTo('events-wintertraining').build(),
                        new ChildChildBuilder()
                            .setIcon(mdiGoKartTrack)
                            .setId('c6c800fb-7e14-4651-a7a7-e230b96ddadc')
                            .setTitle('Permanente')
                            .setTo('events-tours-permanents')
                            .build()
                    )
                    .setId('b88787b2-eb8f-4ffa-b328-c6c49b36ff7a')
                    .setTitle('RTF, Training & Permanente')
                    .build(),
                new ChildBuilder()
                    .setIcon(mdiHumanMaleBoard)
                    .setId('595728ab-cb75-48c7-8d63-81d102455568')
                    .setTitle('RTF-Empfehlungen außerhalb NRWs')
                    .setTo('events-tours-events-rtfs-suggestions')
                    .build(),
                new ChildBuilder()
                    .setChildren(
                        new ChildChildBuilder()
                            .setIcon(mdiWeb)
                            .setId('16ea8ffe-1b71-48af-ab35-2257836e2fdc')
                            .setUrl('www.radsport-events.de/termine/rennrad-events')
                            .setTitle('Empfohlene Radsport Events')
                            .build(),
                        new ChildChildBuilder()
                            .setIcon(mdiWeb)
                            .setId('d4929935-f422-4e1e-91b8-4c4f4dccedd1')
                            .setUrl('breitensport.rad-net.de/breitensportkalender')
                            .setTitle('Breitensportkalender BDR')
                            .build()
                    )
                    .setId('62f750e5-ca73-4ce6-89ff-f16ea12bb152')
                    .setTitle('Breitensportkalender & andere Events')
                    .build()
            )
            .setExpanded()
            .setIcon(mdiBikeFast)
            .setId('8c11a11a-1232-46c6-a813-f379772d5c9b')
            .setTitle('Veranstaltungen & Termine')
            .build(),
        new NavigationBuilder()
            .setChildren(
                new ChildBuilder()
                    .setIcon(mdiWeatherPartlyRainy)
                    .setId('88f58d8e-06fb-42e4-8a24-84263c79ff23')
                    .setUrl('www.koeln.de/wetter/regenradar/')
                    .setTitle('Wetter live in Köln + Regenradar')
                    .build(),
                new ChildBuilder()
                    .setIcon(mdiWeatherWindy)
                    .setId('611c31ec-f5df-4121-b6c8-b7f06c5c12ce')
                    .setUrl('www.windy.com/station?50.866,7.143,8')
                    .setTitle('Windradar in Köln')
                    .build()
            )
            .setIcon(mdiWeatherSunny)
            .setId('525da1da-34be-4901-848c-f9e74a89f64c')
            .setTitle('Wetter')
            .build(),
        new NavigationBuilder()
            .setChildren(
                new ChildBuilder().setIcon(mdiInformationOutline).setId('1d102187-da26-46e9-bed3-9af22aa625d8').setTitle('Über uns').setTo('rtc-cologne-about-us').build(),
                new ChildBuilder()
                    .setIcon(mdiTimelineClockOutline)
                    .setId('96355be6-336d-43ad-8cd4-f190d3a95ec3')
                    .setTitle('Unsere Geschichte')
                    .setTo('rtc-cologne-our-story')
                    .build(),
                new ChildBuilder().setIcon(mdiImageMultiple).setId('d1718773-901a-42cd-ab49-3745d1a3a8b2').setTitle('Galerien').setTo('rtc-cologne-galleries').build(),
                new ChildBuilder().setIcon(mdiMessageDraw).setId('d0900ba6-f50f-46d2-a5a9-c72cfee9dd58').setTitle('Gästebuch').setTo('rtc-cologne-guestbook').build(),
                // TODO Offline bis Genehmigung eingeholt wurde
                /* new ChildBuilder()
              .setIcon(mdiNewspaperVariantMultiple)
              .setId('77fc43fb-f2fa-40ae-b6e1-50c5568b286f')
              .setTitle('Presseberichte')
              .setTo('rtc-cologne-press-reports')
              .build(), */
                new ChildBuilder()
                    .setIcon(mdiHumanGreetingProximity)
                    .setId('8b92dcb4-57c0-467e-9f36-ba7a9f325f41')
                    .setTitle('Ansprechpartner')
                    .setTo('rtc-cologne-contacts')
                    .build(),
                new ChildBuilder().setIcon(mdiHumanCane).setId('244d210f-2151-427e-a1ed-3f767c034a50').setTitle('Alte Website').setUrl('old.rtc-koeln.de').build()
            )
            .setIcon(mdiDomain)
            .setId('4fa2ef6c-b1ce-4690-9f60-36c76656840d')
            .setTitle('Der RTC Köln')
            .build(),
        new NavigationBuilder().setIcon(mdiCurrencyEur).setId('b7aa63ac-1e9a-44f3-80f6-4c2a8df8928b').setTitle('Sponsoren').setTo('sponsors').build(),
    ])

    const socialMedias = ref([
        new NavigationBuilder().setColor('indigo').setIcon(mdiFacebook).setId('53558cbf-2289-4fba-9990-aee4fb7b336d').setUrl('www.facebook.com/RTC.Koeln').build(),
        new NavigationBuilder().setColor('red lighten-2').setIcon(mdiInstagram).setId('07d2f238-69ce-4a42-984c-dbfec9d2cbf8').setUrl('www.instagram.com/rtckoeln').build(),
        new NavigationBuilder()
            .setColor('red lighten-2')
            .setIcon(mdiGoogle)
            .setId('a54f5291-771b-438e-953f-dbb176193ec1')
            .setUrl('www.google.de/search?q=RTC+Köln+e.V.+1972')
            .build(),
        new NavigationBuilder()
            .setColor('red lighten-2')
            .setIcon(mdiYoutube)
            .setId('6a9a788b-4259-492e-934e-d82a116c0c33')
            .setUrl('www.youtube.com/channel/UCC5YG6J73hWEdPoMbdjGG1w')
            .build(),
        new NavigationBuilder().setIcon(mdiGithub).setId('e2c05138-6078-4ed4-bbd6-8e0f5e7d0580').setUrl('github.com/Rad-Touristik-Club-Koln-e-V-1972').build(),
    ])

    const allNavigation = computed(() => navigations.value)
    const allSocialMedia = computed(() => socialMedias.value)

    return { allNavigation, allSocialMedia }
})
