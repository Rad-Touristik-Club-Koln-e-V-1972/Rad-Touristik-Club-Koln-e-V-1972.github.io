import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Vereinsfahrt)
    .date('2022-08-27')
    .id('284dae72-4bf4-49fc-9ff1-a7b1263946f0')
    .location('GEW RheinEnergie')
    .images([
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2022/08_27_RTF_GEW_RheinEnergie/image4.jpeg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2022/08_27_RTF_GEW_RheinEnergie/image5.jpeg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2022/08_27_RTF_GEW_RheinEnergie/image6.jpeg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2022/08_27_RTF_GEW_RheinEnergie/image7.jpeg').build(),
    ])
    .title('RTF - GEW RheinEnergie')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_27_RTF_GEW_RheinEnergie/preview/preview.image4.jpeg')
    .build()
