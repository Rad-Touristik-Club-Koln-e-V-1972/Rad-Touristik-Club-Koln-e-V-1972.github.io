import GalleryBuilder from '~/models/builder/about-us/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Veranstaltung)
    .setDate('2015-10-11')
    .setLocation('Köln')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-001.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-002.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-003.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-004.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-005.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-006.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-007.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-008.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-009.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-010.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-011.jpg').build(),
    ])
    .setTitle('Saisonabschluss')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/preview/preview.rtc-151011-saisonabschluss-008.jpg')
    .build()
