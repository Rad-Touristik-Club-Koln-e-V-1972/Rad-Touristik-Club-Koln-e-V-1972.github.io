import GalleryBuilder from '~/models/builder/about-us/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2010-12-31')
    .setLocation('Köln')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2010/01_27/Rueckblick.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2010/09_05_Hennef_news.gif').build(),
    ])
    .setTitle('Rückblick')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2010/01_27/preview/preview.Rueckblick.jpg')
    .setYoutubeVideoIds('AFjAyuWpGQ4')
    .build()
