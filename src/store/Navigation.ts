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
    mdiInformation,
    mdiInstagram,
    mdiMessageDraw,
    mdiNewspaperVariantMultiple,
    mdiSnowman,
    mdiWeatherPartlyRainy,
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
            new NavigationBuilder().icon(mdiHome).title('Startseite').to('index').build(),
            new NavigationBuilder()
                .children(
                    new ChildBuilder().icon(mdiCalendarClockOutline).title('Vereinskalender').to('events-calendar').build(),
                    new ChildBuilder()
                        .children(
                            new ChildChildBuilder().icon(mdiCalendarAlert).title('RTF / Forsbach-Tour').to('events-tours-events-rtfs').build(),
                            new ChildChildBuilder().icon(mdiGoKartTrack).title('Permanente').to('events-tours-permanents').build()
                        )
                        .title('Touren')
                        .build(),
                    new ChildBuilder().icon(mdiSnowman).title('Wintertraining').to('events-wintertraining').build(),
                    new ChildBuilder().icon(mdiHumanMaleBoard).title('RTF-Empfehlungen außerhalb NRWs').to('events-tours-events-rtfs-suggestions').build(),
                    new ChildBuilder()
                        .children(
                            new ChildChildBuilder().icon(mdiWeb).url('www.radsport-events.de/termine/rennrad-events').title('Empfohlene Radsport Events').build(),
                            new ChildChildBuilder().icon(mdiWeb).url('breitensport.rad-net.de/breitensportkalender').title('Breitensportkalender BDR').build()
                        )
                        .title('Breitensportkalender & andere Events')
                        .build()
                )
                .expanded()
                .icon(mdiBikeFast)
                .title('Veranstaltungen & Termine')
                .build(),
            new NavigationBuilder().icon(mdiWeatherPartlyRainy).url('www.koeln.de/wetter/regenradar/').title('Wetter live in Köln + Regenradar').build(),
            new NavigationBuilder()
                .children(
                    new ChildBuilder().icon(mdiImageMultiple).title('Galerien').to('about-us-galleries').build(),
                    new ChildBuilder().icon(mdiMessageDraw).title('Gästebuch').to('about-us-guestbook').build(),
                    new ChildBuilder().icon(mdiNewspaperVariantMultiple).title('(WIP) Presseberichte').to('index').build(),
                    new ChildBuilder().icon(mdiHumanGreetingProximity).title('Ansprechpartner').to('about-us-contacts').build()
                )
                .icon(mdiDomain)
                .title('Über uns')
                .build(),
            new NavigationBuilder().icon(mdiCurrencyEur).title('Sponsoren').to('sponsors').build(),
        ],
        socialMedias: [
            new NavigationBuilder().color('indigo').icon(mdiFacebook).url('www.facebook.com/RTC.Koeln').build(),
            new NavigationBuilder().color('red lighten-2').icon(mdiInstagram).url('www.instagram.com/rtckoeln').build(),
            new NavigationBuilder().color('red lighten-2').icon(mdiGoogle).url('www.google.de/search?q=RTC+Köln+e.V.+1972').build(),
            new NavigationBuilder().color('red lighten-2').icon(mdiYoutube).url('www.youtube.com/channel/UCC5YG6J73hWEdPoMbdjGG1w').build(),
            new NavigationBuilder().icon(mdiGithub).url('github.com/Rad-Touristik-Club-Koln-e-V-1972').build(),
        ],
    }),
})
