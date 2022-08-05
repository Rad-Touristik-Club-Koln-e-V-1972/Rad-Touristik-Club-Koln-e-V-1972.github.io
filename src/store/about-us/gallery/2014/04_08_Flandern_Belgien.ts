import EntryBuilder from '~/models/builder/about-us/gallery/EntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Vereinsfahrt)
    .dateFrom(new Date('2014-04-08'))
    .location('Flandern, Belgien')
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (10).JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (11).JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (12).JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (13).JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (1).JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (2).JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (3).JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (4).JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (61).JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (6).JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (7).JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (8).JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (9).JPG').previewUrl().build())
    .title('Flandern')
    .titleImageUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/preview/preview.CIMG1 (6).JPG')
    .build()
