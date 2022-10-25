import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'
import KA from '~/store/about-us/gallery/2022/10_22_CTF_7/KA'
import KB from '~/store/about-us/gallery/2022/10_22_CTF_7/KB'
import StartZiel from '~/store/about-us/gallery/2022/10_22_CTF_7/Start_Ziel'
import Strecke from '~/store/about-us/gallery/2022/10_22_CTF_7/Strecke'

export default new GalleryBuilder()
    .category(EEvent.RTF)
    .date('2022-10-22')
    .id('cda4c7e0-a266-44e4-923d-afe6dc11deb4')
    .location('Wahnbach')
    .images([new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2022/10_22_CTF_7/CTF_2022_Plakat-DIN_A2_DD.png').build()])
    .images(KA)
    .images(KB)
    .images(StartZiel)
    .images(Strecke)
    .title('7. Wahnbach-Tour')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2022/10_22_CTF_7/Start_Ziel/preview/preview.IMG_1524.JPG')
    .build()
