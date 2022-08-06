import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Veranstaltung)
    .date('2014-12-02')
    .location('Köln')
    .images([
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01754.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01756.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01757.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01758.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01760.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01762.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01763.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01766.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01767.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01768.JPG').build(),
    ])
    .title('Siegerehrung Mannschaftswertung Bezirk Köln')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/preview/preview.DSC01768.JPG')
    .build()
