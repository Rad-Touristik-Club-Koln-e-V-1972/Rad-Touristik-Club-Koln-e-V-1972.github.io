import EntryBuilder from '~/models/builder/about-us/gallery/EntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.RTF)
    .dateFrom(new Date('2019-05-26'))
    .location('Rösrath-Forsbach')
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2019/05_26_RTF_47/rtc-forsbach-tour-flyer-2019.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2019/05_26_RTF_47/rtc-forsbach-tour-flyer1-2019.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2019/05_26_RTF_47/rtc-forsbach-tour-flyer2-2019.jpg').previewUrl().build())
    .title('47. Forsbach-Tour')
    .titleImageUrl('https://content.rtc-koeln.de/pages/gallery/2019/05_26_RTF_47/preview/preview.rtc-forsbach-tour-flyer-2019.jpg')
    .build()
