import EntryBuilder from '~/models/builder/about-us/gallery/EntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Vereinsfahrt)
    .dateFrom(new Date('2014-07-13'))
    .location('Eslohe')
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/IMG-20140712-00544.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/IMG-20140712-00551.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/IMG-20140712-00567.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/IMG-20140712-00569.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/IMG-20140712-00571.jpg').previewUrl().build())
    .title('Eslohe')
    .titleImageUrl('https://content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/preview/preview.IMG-20140712-00551.jpg')
    .build()
