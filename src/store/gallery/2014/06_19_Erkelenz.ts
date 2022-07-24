import EntryBuilder from '~/models/builder/gallery/EntryBuilder'
import GalleryBuilder from '~/models/builder/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Vereinsfahrt)
    .dateFrom(new Date('2014-06-19'))
    .location('Erkelenz')
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/CAM00033.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/CAM00034.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/CAM00035.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/CAM00036.jpg').previewUrl().build())
    .title('Erkelenz')
    .titleImageUrl('https://content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/preview/preview.CAM00034.jpg')
    .build()
