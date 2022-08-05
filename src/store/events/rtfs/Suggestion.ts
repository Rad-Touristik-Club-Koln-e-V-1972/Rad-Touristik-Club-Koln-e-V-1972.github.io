import { defineStore } from 'pinia'
import NavigationBuilder from '~/models/builder/NavigationBuilder'
import Navigation from '~/models/entities/Navigation'

export const useSuggestionStore = defineStore('suggestion', {
    getters: {
        all: (state): Navigation[] => state.navigations,
    },
    state: () => ({
        navigations: [
            new NavigationBuilder()
                .imageUrl('radsport.spvgg-burgbrohl.de/cms2016/images/rsf_neu.jpg')
                .title('Brohltal')
                .url('radsport.spvgg-burgbrohl.de/cms2016/index.php/veranstaltungen/rhodius-brohltal-rtf')
                .build(),
            new NavigationBuilder().imageUrl('www.rhoen-radmarathon.de/images/Slider/slider202.jpg').title('Bimbach').url('rhoen-radmarathon.de').build(),
            new NavigationBuilder()
                .imageUrl('www.ostbelgien.eu/media/cache/167_resized_960_580_90_57d2c1868c532_ostbelgien_rennrad_05-c-eastbelgium.com.webp')
                .title('St. Vith')
                .url('www.ostbelgien.eu/de/fahrrad')
                .build(),
            new NavigationBuilder().imageUrl('my.raceresult.com/graphics/header/top11.jpg').title('Ochtendung').url('djk-ochtendung.de/94.html').build(),
            new NavigationBuilder().imageUrl('www.rc-hattersheim.de/fileadmin/_processed_/6/7/csm_IMG_9100_c4e35358df.jpg').title('Hattersheim').url('rc-hattersheim.de').build(),
            new NavigationBuilder()
                .imageUrl('img.luzernerzeitung.ch/2019/9/8/3bbbff1a-2508-4623-8478-f33168e9db2c.jpeg')
                .title('Bodenseerundfahrt')
                .url('bodensee-radmarathon.ch')
                .build(),
            new NavigationBuilder()
                .imageUrl(
                    'www.dreilaendergiro.at/Assets_dreil%C3%A4ndergiro.com/Dreil%C3%A4ndergiro%202022/image-thumb__56683__img-teaser-wide/Dreil%C3%A4ndergiro%202022%20%2818%29.webp'
                )
                .title('Drei-Länder-Giro')
                .url('dreilaendergiro.at/de')
                .build(),
            new NavigationBuilder()
                .imageUrl('www.wendelsteinrundfahrt.de/typo3conf/ext/in2template/Resources/Public/Images/backgrounds/bg1.jpg')
                .title('Wendelsteinrundfahrt')
                .url('wendelsteinrundfahrt.de')
                .build(),
            new NavigationBuilder()
                .imageUrl(
                    'www.oetztaler-radmarathon.com/.imaging/mte/jcr/soelden/324x674/dam/Sommer/SOELDEN/Veranstaltungen/Oetztaler-Radmarathon/2021/soel_oerm_160_21.jpg/jcr:content/soel_oerm_160_21.jpg'
                )
                .title('Ötztalmarathon (der krönende Abschluss)')
                .url('oetztaler-radmarathon.com/de/home.html')
                .build(),
        ],
    }),
})
