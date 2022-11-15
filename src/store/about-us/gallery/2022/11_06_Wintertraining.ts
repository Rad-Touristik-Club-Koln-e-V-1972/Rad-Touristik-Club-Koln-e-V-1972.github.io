import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'

export default new GalleryBuilder()
    .date('2022-11-06')
    .id('32ade59b-0ba1-47f5-b20e-54d872a9e524')
    .location('Wahlscheid')
    .images([
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/IMG_1897.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/IMG_1902.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/IMG_5637.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/IMG_5639.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/IMG_5641.jpg').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/IMG_5643.PNG').build(),
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/IMG_5651.jpg').build(),
    ])
    .title('Wintertraining 2022')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/preview/preview.IMG_5643.PNG')
    .build()
