import { defineStore } from 'pinia'
import {
    mdiBike,
    mdiBikeFast,
    mdiCalendarClockOutline,
    mdiCurrencyEur,
    mdiDomain,
    mdiFacebook,
    mdiGithub,
    mdiGoogle,
    mdiHome,
    mdiHumanGreetingProximity,
    mdiImageMultiple,
    mdiInformation,
    mdiInstagram,
    mdiMessageDraw,
    mdiNewspaperVariantMultiple,
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
                    new ChildBuilder().icon(mdiBikeFast).title('CTF').to('index').build(),
                    new ChildBuilder()
                        .children(new ChildChildBuilder().icon(mdiBike).title('Empfehlungen außerhalb NRWs').to('events-rtfs-suggestions').build())
                        .title('RTFs')
                        .build(),
                    new ChildBuilder().icon(mdiBike).title('Touren-Tipps').to('index').build(),
                    new ChildBuilder().icon(mdiWeb).url('https://www.radsport-events.de/termine/rennrad-events').title('Empfohlene Radsport Events').build(),
                    new ChildBuilder().icon(mdiWeb).url('https://breitensport.rad-net.de/breitensportkalender').title('Breitensportkalender BDR').build()
                )
                .icon(mdiBike)
                .title('Veranstaltungen & Termine')
                .build(),
            new NavigationBuilder().icon(mdiWeatherPartlyRainy).url('https://www.koeln.de/wetter/regenradar/').title('Wetter live in Köln + Regenradar').build(),
            new NavigationBuilder()
                .children(
                    new ChildBuilder().icon(mdiInformation).title('Über uns').to('index').build(),
                    new ChildBuilder().icon(mdiImageMultiple).title('Galerien').to('about-us-galleries').build(),
                    new ChildBuilder().icon(mdiMessageDraw).title('Gästebuch').to('about-us-guestbook').build(),
                    new ChildBuilder().icon(mdiNewspaperVariantMultiple).title('Presseberichte').to('index').build(),
                    new ChildBuilder().icon(mdiHumanGreetingProximity).title('Kontakte').to('about-us-contacts').build()
                )
                .icon(mdiDomain)
                .title('Über den RTC Köln')
                .build(),
            new NavigationBuilder().icon(mdiCurrencyEur).title('Sponsoren').to('sponsors').build(),
        ],
        socialMedias: [
            new NavigationBuilder().color('indigo').icon(mdiFacebook).url('https://www.facebook.com/RTC.Koeln').build(),
            new NavigationBuilder().color('red lighten-2').icon(mdiInstagram).url('https://www.instagram.com/rtckoeln').build(),
            new NavigationBuilder().color('red lighten-2').icon(mdiGoogle).url('https://www.google.de/search?q=RTC+Köln+e.V.+1972').build(),
            new NavigationBuilder().color('red lighten-2').icon(mdiYoutube).url('https://www.youtube.com/channel/UCC5YG6J73hWEdPoMbdjGG1w').build(),
            new NavigationBuilder().icon(mdiGithub).url('https://github.com/Rad-Touristik-Club-Koln-e-V-1972').build(),
        ],
    }),
})
