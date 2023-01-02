import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setDate('2014-05-04')
    .setLocation('Niederkassel-Lülsdorf')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4901.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4907.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4908.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4909.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4910.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4911.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4912.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4913.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4914.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4917.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4918.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4919.JPG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4920.JPG').build(),
    ])
    .setTitle('Niederkassel-Lülsdorf')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/preview/preview.DSCF4901.JPG')
    .build()
