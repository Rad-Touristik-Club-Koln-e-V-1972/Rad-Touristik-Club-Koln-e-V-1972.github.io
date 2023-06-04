import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'
import K1 from '~/store/rtc-cologne/gallery/2023/05_28_RTF_51/K1'
import K6 from '~/store/rtc-cologne/gallery/2023/05_28_RTF_51/K6'

export default new GalleryBuilder()
    .setCategory(EEvent.RTF)
    .setDate('2023-05-28')
    .setId('6ee17200-d1d3-4273-8777-885a3f946912')
    .setImages(K1)
    .setImages(K6)
    .setLocation('Rösrath-Forsbach')
    .setTitle('51. Forsbach-Tour')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_28_RTF_51/K6/preview/preview.BILD_06.jpg')
    .setYoutubeVideoIds('rvlBWrDjnL0')
    .build()
