import { defineStore } from 'pinia'
import {
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
    mdiHumanGreetingProximity,
    mdiHumanMaleBoard,
    mdiImageMultiple,
    mdiInstagram,
    mdiMessageDraw,
    mdiNewspaperVariantMultiple,
    mdiSnowman,
    mdiWeatherPartlyRainy,
    mdiWeatherSunny,
    mdiWeatherWindy,
    mdiWeb,
    mdiYoutube,
} from '@mdi/js'
import Navigation from '~/models/entities/Navigation'
import NavigationBuilder from '~/models/builder/NavigationBuilder'
import ChildBuilder from '~/models/builder/navigation/ChildBuilder'
import ChildChildBuilder from '~/models/builder/navigation/ChildChildBuilder'

export const useNavigationStore = defineStore('navigation', {
    getters: {
        allNavigation: (state): Navigation[] => state.navigations,
        allSocialMedia: (state): Navigation[] => state.socialMedias,
    },
    state: () => ({
        navigations: [
            new NavigationBuilder().setIcon(mdiHome).setTitle('Startseite').setTo('index').build(),
            new NavigationBuilder()
                .setChildren(
                    new ChildBuilder().setIcon(mdiCalendarClockOutline).setTitle('Vereinskalender').setTo('events-calendar').build(),
                    new ChildBuilder()
                        .setChildren(
                            new ChildChildBuilder().setIcon(mdiCalendarAlert).setTitle('RTF / Forsbach-Tour').setTo('events-tours-events-rtfs').build(),
                            new ChildChildBuilder().setIcon(mdiSnowman).setTitle('Wintertraining').setTo('events-wintertraining').build(),
                            new ChildChildBuilder().setIcon(mdiGoKartTrack).setTitle('Permanente').setTo('events-tours-permanents').build()
                        )
                        .setTitle('RTF, Training & Permanente')
                        .build(),
                    new ChildBuilder().setIcon(mdiHumanMaleBoard).setTitle('RTF-Empfehlungen außerhalb NRWs').setTo('events-tours-events-rtfs-suggestions').build(),
                    new ChildBuilder()
                        .setChildren(
                            new ChildChildBuilder().setIcon(mdiWeb).setUrl('www.radsport-events.de/termine/rennrad-events').setTitle('Empfohlene Radsport Events').build(),
                            new ChildChildBuilder().setIcon(mdiWeb).setUrl('breitensport.rad-net.de/breitensportkalender').setTitle('Breitensportkalender BDR').build()
                        )
                        .setTitle('Breitensportkalender & andere Events')
                        .build()
                )
                .setExpanded()
                .setIcon(mdiBikeFast)
                .setTitle('Veranstaltungen & Termine')
                .build(),
            new NavigationBuilder()
                .setChildren(
                    new ChildBuilder().setIcon(mdiWeatherPartlyRainy).setUrl('www.koeln.de/wetter/regenradar/').setTitle('Wetter live in Köln + Regenradar').build(),
                    new ChildBuilder().setIcon(mdiWeatherWindy).setUrl('www.windy.com/station?50.866,7.143,8').setTitle('Windradar in Köln').build()
                )
                .setIcon(mdiWeatherSunny)
                .setTitle('Wetter')
                .build(),
            new NavigationBuilder()
                .setChildren(
                    new ChildBuilder().setIcon(mdiImageMultiple).setTitle('Galerien').setTo('rtc-cologne-galleries').build(),
                    new ChildBuilder().setIcon(mdiMessageDraw).setTitle('Gästebuch').setTo('rtc-cologne-guestbook').build(),
                    new ChildBuilder().setIcon(mdiNewspaperVariantMultiple).setTitle('Presseberichte').setTo('rtc-cologne-press-reports').build(),
                    new ChildBuilder().setIcon(mdiHumanGreetingProximity).setTitle('Ansprechpartner').setTo('rtc-cologne-contacts').build()
                )
                .setIcon(mdiDomain)
                .setTitle('Der RTC Köln')
                .build(),
            new NavigationBuilder().setIcon(mdiCurrencyEur).setTitle('Sponsoren').setTo('sponsors').build(),
        ],
        socialMedias: [
            new NavigationBuilder().setColor('indigo').setIcon(mdiFacebook).setUrl('www.facebook.com/RTC.Koeln').build(),
            new NavigationBuilder().setColor('red lighten-2').setIcon(mdiInstagram).setUrl('www.instagram.com/rtckoeln').build(),
            new NavigationBuilder().setColor('red lighten-2').setIcon(mdiGoogle).setUrl('www.google.de/search?q=RTC+Köln+e.V.+1972').build(),
            new NavigationBuilder().setColor('red lighten-2').setIcon(mdiYoutube).setUrl('www.youtube.com/channel/UCC5YG6J73hWEdPoMbdjGG1w').build(),
            new NavigationBuilder().setIcon(mdiGithub).setUrl('github.com/Rad-Touristik-Club-Koln-e-V-1972').build(),
        ],
    }),
})
