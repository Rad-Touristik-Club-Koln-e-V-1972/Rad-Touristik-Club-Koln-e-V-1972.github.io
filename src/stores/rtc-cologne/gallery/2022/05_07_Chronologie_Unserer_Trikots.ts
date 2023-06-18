import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import EEvent from 'src/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setDate('2022-05-07')
    .setId('1a6f013c-98e9-4079-8778-f51e25f72c51')
    .setLocation('Köln')
    .setTitle('Chronologie unserer Trikots')
    .setTitleImageUrl('i.ytimg.com/vi/GNpmt6Y_ymU/hqdefault.jpg')
    .setYoutubeVideoIds('GNpmt6Y_ymU')
    .build()
