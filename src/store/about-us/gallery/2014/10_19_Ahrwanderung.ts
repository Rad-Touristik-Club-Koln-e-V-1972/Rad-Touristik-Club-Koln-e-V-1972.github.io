import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Veranstaltung)
    .dateFrom(new Date('2014-10-19'))
    .location('Ahrtal')
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/1.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/2.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/3.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/4.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/5.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/6.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/7.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/8.jpg').previewUrl().build())
    .title('Ahrwanderung')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/preview/preview.5.JPG')
    .build()
