import GalleryBuilder from '~/models/builder/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Vereinsfahrt)
    .dateFrom(new Date('2022-05-07'))
    .location('Köln')
    .title('Chronologie unserer Trikots')
    .titleImageUrl('https://i.ytimg.com/vi/GNpmt6Y_ymU/hqdefault.jpg')
    .youtubeVideoId('GNpmt6Y_ymU')
    .build()
