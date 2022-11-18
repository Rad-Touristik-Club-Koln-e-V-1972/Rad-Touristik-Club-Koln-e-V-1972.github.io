import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Veranstaltung)
    .setDate('2014-10-12')
    .setLocation('Köln')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/DSCF5699.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/DSCF5709.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/DSCF5710.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/DSCF5715.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/DSCF5717.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/DSCF5718.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/DSCF5722.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/DSCF5724.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/DSCF5729.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/rtc-20141012-abschlt-02.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/rtc-20141012-abschlt-03.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/rtc-20141012-abschlt-04.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/rtc-20141012-abschlt-05.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/rtc-20141012-abschlt-06.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/rtc-20141012-abschlt-13.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/rtc-20141012-abschlt-14.jpg').build(),
    ])
    .setTitle('Saisonabschluss')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_12_Saisonabschluss/preview/preview.DSCF5699.JPG')
    .build()
