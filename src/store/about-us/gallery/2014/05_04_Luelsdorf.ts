import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Vereinsfahrt)
    .dateFrom(new Date('2014-05-04'))
    .location('Niederkassel-Lülsdorf')
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4901.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4907.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4908.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4909.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4910.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4911.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4912.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4913.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4914.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4917.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4918.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4919.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4920.JPG').previewUrl().build())
    .title('Niederkassel-Lülsdorf')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/preview/preview.DSCF4901.JPG')
    .build()
