import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'

export default new GalleryBuilder()
    .date('2022-11-29')
    .id('8db60fe5-0c25-4d78-b4af-d5bae1cc4bfb')
    .location('Mercure Hotel, Köln')
    .images([new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2018/12_29_Weihnachtsfeier/p1000607_44695236910_o.jpg').build()])
    .title('RTC Weihnachtsfeier')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2018/12_29_Weihnachtsfeier/preview/preview.p1000622_45788464964_o.jpg')
    .youtubeVideoIds('')
    .build()
