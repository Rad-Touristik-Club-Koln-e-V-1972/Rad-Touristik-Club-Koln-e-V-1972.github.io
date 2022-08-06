import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Vereinsfahrt)
    .date('2014-04-12')
    .location('Düsseldorf')
    .images([
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4855.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4857.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4858.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4865.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4868.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4869.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4871.JPG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4874.JPG').build(),
    ])
    .title('Düsseldorf')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/preview/preview.DSCF4874.JPG')
    .build()
