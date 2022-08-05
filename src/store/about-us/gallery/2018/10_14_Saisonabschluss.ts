import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Veranstaltung)
    .dateFrom(new Date('2018-10-14'))
    .location('BSG Stadt Köln')
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_134037_44800649975_o.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_134042_44800649865_o.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_134102_44800648825_o.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_134106_44800648545_o.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_134113_44800647875_o.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_140755_44989968874_o.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_140801_44800647415_o.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_140824_44989968604_o.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_140826_44989968534_o.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_141544_44800647175_o.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_141550_31842835598_o.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_141621_45714619211_o.jpg').previewUrl().build())
    .title('RTF-Saison-Abschluss')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/preview/preview.20181014_141621_45714619211_o.jpg')
    .build()
