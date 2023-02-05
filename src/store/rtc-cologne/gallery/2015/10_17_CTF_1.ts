import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from '~/models/enums/EEvent'
import K2 from '~/store/rtc-cologne/gallery/2015/10_17_CTF_1/K2'
import StartZiel from '~/store/rtc-cologne/gallery/2015/10_17_CTF_1/Start_Ziel'

export default new GalleryBuilder()
    .setCategory(EEvent.CTF)
    .setDate('2015-10-17')
    .setId('eecf5550-fbfe-43a3-8a81-649e00221371')
    .setImages({
        '': [
            new GalleryEntryBuilder()
                .setId('db72d126-fd2d-4e2d-b45e-014da1e11161')
                .setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/rtc-wahnbach-tour-flyer1-2015.jpg')
                .build(),
            new GalleryEntryBuilder()
                .setId('837f3712-ff3f-424a-84ae-24531986b371')
                .setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/rtc-wahnbach-tour-flyer2-2015.jpg')
                .build(),
        ],
        '25.10. Aufräumarbeiten': [
            new GalleryEntryBuilder()
                .setId('786ff8aa-bebf-415d-801a-2e19c20a104a')
                .setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/10_25_Aufaeumarbeiten/rtc-wbt-151025a.jpg')
                .build(),
            new GalleryEntryBuilder()
                .setId('596ccc17-5585-4d2f-8910-3c7b57071bc7')
                .setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/10_25_Aufaeumarbeiten/rtc-wbt-151025b.jpg')
                .build(),
        ],
        K1: [
            new GalleryEntryBuilder()
                .setId('64fdd474-14e4-475a-894d-0720d05b84a1')
                .setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/K1/rtc-151017-wbt-k1-001.jpg')
                .build(),
            new GalleryEntryBuilder()
                .setId('d48bdc4c-87d4-42c9-bdde-384d644ef095')
                .setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/K1/rtc-151017-wbt-k1-002.jpg')
                .build(),
            new GalleryEntryBuilder()
                .setId('282d3544-75f6-47a5-bc6e-3298d7221d9b')
                .setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/K1/rtc-151017-wbt-k1-003.jpg')
                .build(),
            new GalleryEntryBuilder()
                .setId('9db2bef4-fddc-4c20-8076-f201071dc8b8')
                .setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/K1/rtc-151017-wbt-k1-004.jpg')
                .build(),
        ],
        ...K2,
        K3: [
            new GalleryEntryBuilder()
                .setId('6e9dee35-60f7-4fd4-9ae2-e9ed6567d031')
                .setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/K3/rtc-151017-wbt-k3-001.jpg')
                .build(),
            new GalleryEntryBuilder()
                .setId('3bc07915-010a-406c-9591-b2a3f77ccd6f')
                .setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/K3/rtc-151017-wbt-k3-002.jpg')
                .build(),
            new GalleryEntryBuilder()
                .setId('f1febd8e-9c9f-4eef-9d58-458bc2f8055d')
                .setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/K3/rtc-151017-wbt-k3-003.jpg')
                .build(),
        ],
        ...StartZiel,
    })
    .setLocation('Wahnbach')
    .setTitle('1. Wahnbach-Tour')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/preview/preview.rtc-wahnbach-tour-flyer1-2015.jpg')
    .build()
