import EntryBuilder from '~/models/builder/about-us/gallery/EntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Veranstaltung)
    .dateFrom(new Date('2014-12-02'))
    .location('Köln')
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01754.JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01756.JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01757.JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01758.JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01760.JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01762.JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01763.JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01766.JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01767.JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01768.JPG').previewUrl().build())
    .title('Siegerehrung Mannschaftswertung Bezirk Köln')
    .titleImageUrl('https://content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/preview/preview.DSC01768.JPG')
    .build()
