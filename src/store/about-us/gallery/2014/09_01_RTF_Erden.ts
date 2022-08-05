import EntryBuilder from '~/models/builder/about-us/gallery/EntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Vereinsfahrt)
    .dateFrom(new Date('2014-09-01'))
    .location('Erden')
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-01.JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-02.JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-03.JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-04.JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-05.JPG').previewUrl().build())
    .title('RTF Erden')
    .titleImageUrl('https://content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/preview/preview.erden-02.JPG')
    .build()
