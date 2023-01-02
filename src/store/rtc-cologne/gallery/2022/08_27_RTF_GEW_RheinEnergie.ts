import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setDate('2022-08-27')
    .setId('284dae72-4bf4-49fc-9ff1-a7b1263946f0')
    .setLocation('GEW RheinEnergie')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_27_RTF_GEW_RheinEnergie/image4.jpeg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_27_RTF_GEW_RheinEnergie/image5.jpeg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_27_RTF_GEW_RheinEnergie/image6.jpeg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_27_RTF_GEW_RheinEnergie/image7.jpeg').build(),
    ])
    .setTitle('RTF - GEW RheinEnergie')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_27_RTF_GEW_RheinEnergie/preview/preview.image4.jpeg')
    .build()
