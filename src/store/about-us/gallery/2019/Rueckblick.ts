import GalleryBuilder from '~/models/builder/about-us/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2019-12-31')
    .setLocation('Köln')
    .setImages(new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2019/Rueckblick/rtc-960-intro-2019.jpg').build())
    .setTitle('Rückblick')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2019/Rueckblick/preview/preview.rtc-960-intro-2019.jpg')
    .build()
