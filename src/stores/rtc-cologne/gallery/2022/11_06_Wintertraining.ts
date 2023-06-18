import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2022-11-06')
    .setId('32ade59b-0ba1-47f5-b20e-54d872a9e524')
    .setImages([
        new GalleryEntryBuilder().setId('198e86e9-227b-41bc-bdfc-c93418b4407f').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/IMG_1897.jpg').build(),
        new GalleryEntryBuilder().setId('5214aadb-e391-489b-b76d-5b7ec79ca74d').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/IMG_1902.jpg').build(),
        new GalleryEntryBuilder().setId('78f89fdc-8b91-48a8-b337-4b78a1776081').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/IMG_5637.jpg').build(),
        new GalleryEntryBuilder().setId('7ed1da3f-0769-4624-b8be-07c82eba2ed8').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/IMG_5639.jpg').build(),
        new GalleryEntryBuilder().setId('0a9a2cf3-0179-4191-83ed-f763d50a1d5b').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/IMG_5641.jpg').build(),
        new GalleryEntryBuilder().setId('f595720a-2016-4f4d-afd2-2c2cc2ba2412').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/IMG_5643.PNG').build(),
        new GalleryEntryBuilder().setId('4c9eb96f-6f19-4098-86b0-f0caeff2314f').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/IMG_5651.jpg').build(),
    ])
    .setLocation('Wahlscheid')
    .setTitle('Wintertraining 2022')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2022/11_06_Wintertraining/preview/preview.IMG_5643.PNG')
    .build()
