import EntryBuilder from '~/models/builder/gallery/EntryBuilder'
import GalleryBuilder from '~/models/builder/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.RTC)
    .dateFrom(new Date('2014-04-03'))
    .location('Erich Fischer')
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/140403b.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/DSCF4836.JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/DSCF4837.JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/DSCF4838.JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/DSCF4839.JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/DSCF4841.JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/DSCF4842.JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/DSCF4843.JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/DSCF4848.JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/DSCF4849.JPG').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/ErichFischerMitRad.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/05_15_Presseartikel_95_Geburtstag.jpg').previewUrl().build())
    .title('Geburtstag Erich Fischer')
    .titleImageUrl('https://content.rtc-koeln.de/pages/gallery/2014/04_03_Geburtstag_Erich_Fischer/preview/preview.ErichFischerMitRad.jpg')
    .build()
