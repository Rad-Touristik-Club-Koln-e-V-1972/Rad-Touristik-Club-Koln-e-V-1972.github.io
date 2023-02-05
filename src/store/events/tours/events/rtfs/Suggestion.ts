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
                .setId('4c387685-8cb1-4511-a05e-8ef9eb780553')
                .setImageUrl('radsport.spvgg-burgbrohl.de/cms2016/images/rsf_neu.jpg')
                .setTitle('Brohltal')
                .setUrl('radsport.spvgg-burgbrohl.de/cms2016/index.php/veranstaltungen/rhodius-brohltal-rtf')
                .build(),
            new NavigationBuilder()
                .setId('ba680dd5-bbbd-4b55-9b40-891ab4cb831f')
                .setImageUrl('www.rhoen-radmarathon.de/images/Slider/slider202.jpg')
                .setTitle('Bimbach')
                .setUrl('rhoen-radmarathon.de')
                .build(),
            new NavigationBuilder()
                .setId('4827480f-cbee-40e0-956a-6bd84cff6e9c')
                .setImageUrl('www.ostbelgien.eu/media/cache/167_resized_960_580_90_57d2c1868c532_ostbelgien_rennrad_05-c-eastbelgium.com.webp')
                .setTitle('St. Vith')
                .setUrl('www.ostbelgien.eu/de/fahrrad')
                .build(),
            new NavigationBuilder()
                .setId('b7b8490d-f2b0-414f-acc8-5d9d43b6ca79')
                .setImageUrl('my.raceresult.com/graphics/header/top11.jpg')
                .setTitle('Ochtendung')
                .setUrl('djk-ochtendung.de/94.html')
                .build(),
            new NavigationBuilder()
                .setId('219afeb0-27c6-48ac-8dc2-6c63cb23ec79')
                .setImageUrl('www.rc-hattersheim.de/fileadmin/_processed_/6/7/csm_IMG_9100_c4e35358df.jpg')
                .setTitle('Hattersheim')
                .setUrl('rc-hattersheim.de')
                .build(),
            new NavigationBuilder()
                .setId('16103052-afc1-40c4-9654-408466e5fe42')
                .setImageUrl('img.luzernerzeitung.ch/2019/9/8/3bbbff1a-2508-4623-8478-f33168e9db2c.jpeg')
                .setTitle('Bodenseerundfahrt')
                .setUrl('bodensee-radmarathon.ch')
                .build(),
            new NavigationBuilder()
                .setId('5736c25d-71b2-481b-8316-b1738a18eb2a')
                .setImageUrl(
                    'www.dreilaendergiro.at/Assets_dreil%C3%A4ndergiro.com/Dreil%C3%A4ndergiro%202022/image-thumb__56683__img-teaser-wide/Dreil%C3%A4ndergiro%202022%20%2818%29.webp'
                )
                .setTitle('Drei-Länder-Giro')
                .setUrl('dreilaendergiro.at/de')
                .build(),
            new NavigationBuilder()
                .setId('9c604e52-9b9f-4ff6-a183-0a2c781fd99c')
                .setImageUrl('www.wendelsteinrundfahrt.de/typo3conf/ext/in2template/Resources/Public/Images/backgrounds/bg1.jpg')
                .setTitle('Wendelsteinrundfahrt')
                .setUrl('wendelsteinrundfahrt.de')
                .build(),
            new NavigationBuilder()
                .setId('4d695d86-48b0-4930-9502-a06be15e1383')
                .setImageUrl('www.radsport-schrecksbach.de/s/cc_images/cache_82242603.jpg')
                .setTitle('Schrecksbach')
                .setUrl('www.radsport-schrecksbach.de')
                .build(),
            new NavigationBuilder()
                .setId('0e00337e-6aee-4f21-bd2c-58105952bc6e')
                .setImageUrl(
                    'www.oetztaler-radmarathon.com/.imaging/mte/jcr/soelden/324x674/dam/Sommer/SOELDEN/Veranstaltungen/Oetztaler-Radmarathon/2021/soel_oerm_160_21.jpg/jcr:content/soel_oerm_160_21.jpg'
                )
                .setTitle('Ötztalmarathon (der krönende Abschluss)')
                .setUrl('oetztaler-radmarathon.com/de/home.html')
                .build(),
        ],
    }),
})
