import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setDate('2022-05-07')
    .setLocation('Köln')
    .setTitle('Chronologie unserer Trikots')
    .setTitleImageUrl('i.ytimg.com/vi/GNpmt6Y_ymU/hqdefault.jpg')
    .setYoutubeVideoIds('GNpmt6Y_ymU')
    .build()
