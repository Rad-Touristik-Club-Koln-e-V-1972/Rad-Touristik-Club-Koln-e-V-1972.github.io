import EntryBuilder from '~/models/builder/gallery/EntryBuilder'
import GalleryBuilder from '~/models/builder/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Veranstaltung)
    .dateFrom(new Date('2015-10-11'))
    .location('Köln')
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-001.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-002.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-003.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-004.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-005.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-006.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-007.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-008.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-009.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-010.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-011.jpg').previewUrl().build())
    .title('Saisonabschluss')
    .titleImageUrl('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/preview/preview.rtc-151011-saisonabschluss-008.jpg')
    .build()
