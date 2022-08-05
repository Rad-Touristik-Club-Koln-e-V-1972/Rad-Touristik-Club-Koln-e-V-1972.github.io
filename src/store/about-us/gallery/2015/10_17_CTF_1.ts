import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'
import K2 from '~/store/about-us/gallery/2015/10_17_CTF_1/K2'
import StartZiel from '~/store/about-us/gallery/2015/10_17_CTF_1/Start_Ziel'

export default new GalleryBuilder()
    .category(EEvent.CTF)
    .dateFrom(new Date('2015-10-17'))
    .location('Wahnbach')
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/rtc-wahnbach-tour-flyer1-2015.jpg').previewUrl().build())
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/rtc-wahnbach-tour-flyer2-2015.jpg').previewUrl().build())
    .image(
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/10_25_Aufaeumarbeiten/rtc-wbt-151025a.jpg').previewUrl().build(),
        '25.10. Aufräumarbeiten'
    )
    .image(
        new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/10_25_Aufaeumarbeiten/rtc-wbt-151025b.jpg').previewUrl().build(),
        '25.10. Aufräumarbeiten'
    )
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/K1/rtc-151017-wbt-k1-001.jpg').previewUrl().build(), 'K1')
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/K1/rtc-151017-wbt-k1-002.jpg').previewUrl().build(), 'K1')
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/K1/rtc-151017-wbt-k1-003.jpg').previewUrl().build(), 'K1')
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/K1/rtc-151017-wbt-k1-004.jpg').previewUrl().build(), 'K1')
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/K3/rtc-151017-wbt-k3-001.jpg').previewUrl().build(), 'K3')
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/K3/rtc-151017-wbt-k3-002.jpg').previewUrl().build(), 'K3')
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/K3/rtc-151017-wbt-k3-003.jpg').previewUrl().build(), 'K3')
    .images(K2)
    .images(StartZiel)
    .title('1. Wahnbach-Tour')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/preview/preview.rtc-wahnbach-tour-flyer1-2015.jpg')
    .build()
