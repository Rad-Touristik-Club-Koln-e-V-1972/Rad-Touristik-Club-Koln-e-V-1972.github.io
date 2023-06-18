import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from 'src/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Veranstaltung)
    .setDate('2014-10-12')
    .setId('21a71a4f-139b-4797-85fc-2c244fefb46e')
    .setImages([
        new GalleryEntryBuilder().setId('066a8f4a-7cad-43c3-952f-15822a31280a').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/DSCF5699.JPG').build(),
        new GalleryEntryBuilder().setId('ab6dd745-9059-479a-a8cf-253b8f7a0a19').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/DSCF5709.JPG').build(),
        new GalleryEntryBuilder().setId('d299d3bf-7737-4a25-8506-cf61a6679ac7').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/DSCF5710.JPG').build(),
        new GalleryEntryBuilder().setId('6a369035-2bdc-4372-8963-8be72b462238').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/DSCF5715.JPG').build(),
        new GalleryEntryBuilder().setId('35d9542c-39d2-4881-a0c4-39ae051d4c10').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/DSCF5717.JPG').build(),
        new GalleryEntryBuilder().setId('831fb868-f169-41c7-9aad-9b28439879ee').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/DSCF5718.JPG').build(),
        new GalleryEntryBuilder().setId('14041211-68cf-48e7-8391-2fac61b52d5f').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/DSCF5722.JPG').build(),
        new GalleryEntryBuilder().setId('9a96ed63-94ac-487b-be26-266dffaaaace').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/DSCF5724.JPG').build(),
        new GalleryEntryBuilder().setId('3909475a-b9b8-486f-8081-15d57862d344').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/DSCF5729.JPG').build(),
        new GalleryEntryBuilder()
            .setId('172e5b07-6565-4833-8321-846629dc9161')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/rtc-20141012-abschlt-02.jpg')
            .build(),
        new GalleryEntryBuilder()
            .setId('6c591900-e969-4e79-abfb-41c7391cac27')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/rtc-20141012-abschlt-03.jpg')
            .build(),
        new GalleryEntryBuilder()
            .setId('a740112d-791e-4b44-8017-a9004cf39d31')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/rtc-20141012-abschlt-04.jpg')
            .build(),
        new GalleryEntryBuilder()
            .setId('e81c7b0d-730e-411d-972f-7e58f4de990d')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/rtc-20141012-abschlt-05.jpg')
            .build(),
        new GalleryEntryBuilder()
            .setId('6f6cac36-983a-4e8b-9adc-1706e774c4ba')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/rtc-20141012-abschlt-06.jpg')
            .build(),
        new GalleryEntryBuilder()
            .setId('3920a7f8-4ad2-4e60-b3c9-d397c011cf6c')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/rtc-20141012-abschlt-13.jpg')
            .build(),
        new GalleryEntryBuilder()
            .setId('3b481ed5-06f7-4776-9eea-873d98f9dcdf')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/rtc-20141012-abschlt-14.jpg')
            .build(),
    ])
    .setLocation('Köln')
    .setTitle('Saisonabschluss')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/preview/preview.DSCF5699.JPG')
    .build()
