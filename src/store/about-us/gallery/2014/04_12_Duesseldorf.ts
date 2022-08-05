import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Vereinsfahrt)
    .dateFrom(new Date('2014-04-12'))
    .location('Düsseldorf')
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4855.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4857.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4858.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4865.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4868.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4869.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4871.JPG').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4874.JPG').previewUrl().build())
    .title('Düsseldorf')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/preview/preview.DSCF4874.JPG')
    .build()
