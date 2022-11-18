import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'
import K2 from '~/store/about-us/gallery/2015/10_17_CTF_1/K2'
import StartZiel from '~/store/about-us/gallery/2015/10_17_CTF_1/Start_Ziel'

export default new GalleryBuilder()
    .setCategory(EEvent.CTF)
    .setDate('2015-10-17')
    .setLocation('Wahnbach')
    .setImages({
        '': [
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/rtc-wahnbach-tour-flyer1-2015.jpg').build(),
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/rtc-wahnbach-tour-flyer2-2015.jpg').build(),
        ],
        '25.10. Aufräumarbeiten': [
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/10_25_Aufaeumarbeiten/rtc-wbt-151025a.jpg').build(),
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/10_25_Aufaeumarbeiten/rtc-wbt-151025b.jpg').build(),
        ],
        K1: [
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/K1/rtc-151017-wbt-k1-001.jpg').build(),
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/K1/rtc-151017-wbt-k1-002.jpg').build(),
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/K1/rtc-151017-wbt-k1-003.jpg').build(),
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/K1/rtc-151017-wbt-k1-004.jpg').build(),
        ],
        ...K2,
        K3: [
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/K3/rtc-151017-wbt-k3-001.jpg').build(),
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/K3/rtc-151017-wbt-k3-002.jpg').build(),
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/K3/rtc-151017-wbt-k3-003.jpg').build(),
        ],
        ...StartZiel,
    })
    .setTitle('1. Wahnbach-Tour')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/preview/preview.rtc-wahnbach-tour-flyer1-2015.jpg')
    .build()
