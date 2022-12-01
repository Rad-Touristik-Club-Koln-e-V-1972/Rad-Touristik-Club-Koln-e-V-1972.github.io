import GalleryBuilder from '~/models/builder/about-us/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2022-11-06')
    .setId('32ade59b-0ba1-47f5-b20e-54d872a9e524')
    .setLocation('Wahlscheid')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/IMG_1897.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/IMG_1902.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/IMG_5637.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/IMG_5639.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/IMG_5641.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/IMG_5643.PNG').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/IMG_5651.jpg').build(),
    ])
    .setTitle('Wintertraining 2022')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/preview/preview.IMG_5643.PNG')
    .build()
