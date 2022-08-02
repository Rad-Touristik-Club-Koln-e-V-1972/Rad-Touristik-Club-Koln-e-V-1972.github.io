import EntryBuilder from '~/models/builder/gallery/EntryBuilder'
import GalleryBuilder from '~/models/builder/GalleryBuilder'

export default new GalleryBuilder()
    .dateFrom(new Date('2010-01-27'))
    .location('Köln')
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2010/01_27/Fotogalerie.jpg').previewUrl().build())
    .title('Fotogalerie')
    .titleImageUrl('https://content.rtc-koeln.de/pages/gallery/2010/01_27/preview/preview.Fotogalerie.jpg')
    .build()
