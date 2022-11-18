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
                .setImageUrl('radsport.spvgg-burgbrohl.de/cms2016/images/rsf_neu.jpg')
                .setTitle('Brohltal')
                .setUrl('radsport.spvgg-burgbrohl.de/cms2016/index.php/veranstaltungen/rhodius-brohltal-rtf')
                .build(),
            new NavigationBuilder().setImageUrl('www.rhoen-radmarathon.de/images/Slider/slider202.jpg').setTitle('Bimbach').setUrl('rhoen-radmarathon.de').build(),
            new NavigationBuilder()
                .setImageUrl('www.ostbelgien.eu/media/cache/167_resized_960_580_90_57d2c1868c532_ostbelgien_rennrad_05-c-eastbelgium.com.webp')
                .setTitle('St. Vith')
                .setUrl('www.ostbelgien.eu/de/fahrrad')
                .build(),
            new NavigationBuilder().setImageUrl('my.raceresult.com/graphics/header/top11.jpg').setTitle('Ochtendung').setUrl('djk-ochtendung.de/94.html').build(),
            new NavigationBuilder()
                .setImageUrl('www.rc-hattersheim.de/fileadmin/_processed_/6/7/csm_IMG_9100_c4e35358df.jpg')
                .setTitle('Hattersheim')
                .setUrl('rc-hattersheim.de')
                .build(),
            new NavigationBuilder()
                .setImageUrl('img.luzernerzeitung.ch/2019/9/8/3bbbff1a-2508-4623-8478-f33168e9db2c.jpeg')
                .setTitle('Bodenseerundfahrt')
                .setUrl('bodensee-radmarathon.ch')
                .build(),
            new NavigationBuilder()
                .setImageUrl(
                    'www.dreilaendergiro.at/Assets_dreil%C3%A4ndergiro.com/Dreil%C3%A4ndergiro%202022/image-thumb__56683__img-teaser-wide/Dreil%C3%A4ndergiro%202022%20%2818%29.webp'
                )
                .setTitle('Drei-Länder-Giro')
                .setUrl('dreilaendergiro.at/de')
                .build(),
            new NavigationBuilder()
                .setImageUrl('www.wendelsteinrundfahrt.de/typo3conf/ext/in2template/Resources/Public/Images/backgrounds/bg1.jpg')
                .setTitle('Wendelsteinrundfahrt')
                .setUrl('wendelsteinrundfahrt.de')
                .build(),
            new NavigationBuilder()
                .setImageUrl('www.radsport-schrecksbach.de/s/cc_images/cache_82242603.jpg')
                .setTitle('Schrecksbach')
                .setUrl('www.radsport-schrecksbach.de')
                .build(),
            new NavigationBuilder()
                .setImageUrl(
                    'www.oetztaler-radmarathon.com/.imaging/mte/jcr/soelden/324x674/dam/Sommer/SOELDEN/Veranstaltungen/Oetztaler-Radmarathon/2021/soel_oerm_160_21.jpg/jcr:content/soel_oerm_160_21.jpg'
                )
                .setTitle('Ötztalmarathon (der krönende Abschluss)')
                .setUrl('oetztaler-radmarathon.com/de/home.html')
                .build(),
        ],
    }),
})
