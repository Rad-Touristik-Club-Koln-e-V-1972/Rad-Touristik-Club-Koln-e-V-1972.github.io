import { defineStore } from 'pinia'
import NavigationBuilder from '~/models/builder/NavigationBuilder'
import Navigation from '~/models/entities/Navigation'

export const useSuggestedRTFStore = defineStore('suggestedRTF', {
    getters: {
        all: (state): Navigation[] => state.navigations,
    },
    state: () => ({
        navigations: [
            new NavigationBuilder().title('Brohltal').url('https://radsport.spvgg-burgbrohl.de/cms2016/index.php').build(),
            new NavigationBuilder().title('Bimbach').url('https://rhoen-radmarathon.de').build(),
            new NavigationBuilder().title('St. Vith').url('https://ostbelgien.eu/de/evenement/2022/07/02/internationale-dreiland-erfahrt-des-rsv-st-vith').build(),
            new NavigationBuilder().title('Ochtendung').url('https://djk-ochtendung.de/94.html').build(),
            new NavigationBuilder().title('Hattersheim').url('https://rc-hattersheim.de').build(),
            new NavigationBuilder().title('Bodenseerundfahrt').url('https://bodensee-radmarathon.ch').build(),
            new NavigationBuilder().title('Drei-Länder-Giro').url('https://dreilaendergiro.at/de').build(),
            new NavigationBuilder().title('Wendelsteinrundfahrt').url('https://wendelsteinrundfahrt.de').build(),
            new NavigationBuilder().title('Ötztalmarathon (der krönende Abschluss)').url('https://oetztaler-radmarathon.com/de/home.html').build(),
        ],
    }),
})
