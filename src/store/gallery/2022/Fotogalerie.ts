import EntryBuilder from '~/models/builder/gallery/EntryBuilder'
import GalleryBuilder from '~/models/builder/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.RTC)
    .dateFrom(new Date('2022-12-31'))
    .location('Köln')
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2022/Fotogalerie/2022-05_roadbike.jpeg').previewUrl().build())
    .title('Fotogalerie')
    .titleImageUrl('https://content.rtc-koeln.de/pages/gallery/2022/Fotogalerie/preview/preview.2022-05_roadbike.jpeg')
    .build()
