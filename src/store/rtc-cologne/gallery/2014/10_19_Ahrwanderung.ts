import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Veranstaltung)
    .setDate('2014-10-19')
    .setLocation('Ahrtal')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/1.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/2.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/3.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/4.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/5.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/6.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/7.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/8.jpg').build(),
    ])
    .setTitle('Ahrwanderung')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/preview/preview.5.JPG')
    .build()
