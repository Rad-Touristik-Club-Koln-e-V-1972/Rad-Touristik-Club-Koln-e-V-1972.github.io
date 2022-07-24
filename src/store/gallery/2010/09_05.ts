import EntryBuilder from '~/models/builder/gallery/EntryBuilder'
import GalleryBuilder from '~/models/builder/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.RTC)
    .dateFrom(new Date('2010-05-09'))
    .location('Köln')
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2010/09_05_Hennef_news.gif').previewUrl().build())
    .title('Pressebericht zur RTF Hennef')
    .titleImageUrl('https://content.rtc-koeln.de/pages/gallery/2010/preview/preview.09_05_Hennef_news.gif')
    .build()
