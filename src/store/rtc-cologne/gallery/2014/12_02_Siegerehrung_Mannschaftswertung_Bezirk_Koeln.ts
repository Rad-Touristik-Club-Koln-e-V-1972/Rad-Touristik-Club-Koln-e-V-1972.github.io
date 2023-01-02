import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Veranstaltung)
    .setDate('2014-12-02')
    .setLocation('Köln')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01754.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01756.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01757.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01758.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01760.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01762.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01763.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01766.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01767.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01768.JPG').build(),
    ])
    .setTitle('Siegerehrung Mannschaftswertung Bezirk Köln')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/preview/preview.DSC01768.JPG')
    .build()
