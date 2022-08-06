import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'

export default new GalleryBuilder()
    .date('2010-12-31')
    .location('Köln')
    .images([
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2010/01_27/Rueckblick.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2010/09_05_Hennef_news.gif').build(),
    ])
    .title('Rückblick')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2010/01_27/preview/preview.Rueckblick.jpg')
    .youtubeVideoIds('AFjAyuWpGQ4')
    .build()
