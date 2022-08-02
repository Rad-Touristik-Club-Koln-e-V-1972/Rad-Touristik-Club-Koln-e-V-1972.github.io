import EntryBuilder from '~/models/builder/gallery/EntryBuilder'
import GalleryBuilder from '~/models/builder/GalleryBuilder'

export default new GalleryBuilder()
    .dateFrom(new Date('2019-12-31'))
    .location('Köln')
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2019/Fotogalerie/rtc-960-intro-2019.jpg').previewUrl().build())
    .title('Fotogalerie')
    .titleImageUrl('https://content.rtc-koeln.de/pages/gallery/2019/Fotogalerie/preview/preview.rtc-960-intro-2019.jpg')
    .build()
