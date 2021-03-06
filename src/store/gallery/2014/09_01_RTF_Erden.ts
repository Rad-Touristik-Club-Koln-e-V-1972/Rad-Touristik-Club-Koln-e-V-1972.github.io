import EntryBuilder from '~/models/builder/gallery/EntryBuilder'
import GalleryBuilder from '~/models/builder/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'
import _0330Streckenbesichtigung from '~/store/gallery/2014/05_25_RTF_42/03_30_Streckenbesichtigung'
import Tour from '~/store/gallery/2014/05_25_RTF_42/Tour'

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
