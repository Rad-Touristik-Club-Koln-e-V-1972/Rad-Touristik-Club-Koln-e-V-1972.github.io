import EntryBuilder from '~/models/builder/about-us/gallery/EntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.RTF)
    .dateFrom(new Date('2018-05-27'))
    .location('Rösrath-Forsbach')
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2018/05_27_RTF_46/rtc-forsbach-tour-flyer-2018.jpg').previewUrl().build())
    .title('46. Forsbach-Tour')
    .titleImageUrl('https://content.rtc-koeln.de/pages/gallery/2018/05_27_RTF_46/preview/preview.rtc-forsbach-tour-flyer-2018.jpg')
    .build()
