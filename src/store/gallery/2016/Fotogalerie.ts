import EntryBuilder from '~/models/builder/gallery/EntryBuilder'
import GalleryBuilder from '~/models/builder/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.RTC)
    .dateFrom(new Date('2016-12-31'))
    .location('Köln')
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/160330.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/160503.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/160517a.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/160517b.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/160517c.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/160530.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/160829-1.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/160829-2.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/160829-3.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/160829-4.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/160829-5.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/161007-1-1.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/161007-2-1.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/161007-2-2.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/161007-2-3.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/161007-3-1.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/161007-3-2.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/161007-3-3.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/161007-3-4.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/161007-4-1.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/161007-4-2.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/161007-4-3.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/161007-4-4.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/161007-5-1.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/161007-5-2.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/161007-5-3.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/161007-5-4.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/161030.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/KSTA_23-04-16.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/rtc-977-intro-2016.jpg').previewUrl().build())
    .title('Fotogalerie')
    .titleImageUrl('https://content.rtc-koeln.de/pages/gallery/2016/Fotogalerie/preview/preview.160530.jpg')
    .build()
