import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setDate('2014-07-13')
    .setId('504494d4-669b-44c9-a25e-c9d30941ab6e')
    .setImages([
        new GalleryEntryBuilder().setId('4e9dc2b4-bdfd-4ca2-a6fc-598c57f38e58').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/IMG-20140712-00544.jpg').build(),
        new GalleryEntryBuilder().setId('84f2a66f-a132-4034-9a38-d10fe64c10a9').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/IMG-20140712-00551.jpg').build(),
        new GalleryEntryBuilder().setId('884a36b5-fbb7-4c30-966a-081dc7de48c8').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/IMG-20140712-00567.jpg').build(),
        new GalleryEntryBuilder().setId('e44bf5af-b187-4ecb-a85e-6fa16a9e38eb').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/IMG-20140712-00569.jpg').build(),
        new GalleryEntryBuilder().setId('7a676304-c138-4d20-8714-d773acb5a68a').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/IMG-20140712-00571.jpg').build(),
    ])
    .setLocation('Eslohe')
    .setTitle('Eslohe')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/preview/preview.IMG-20140712-00551.jpg')
    .build()
