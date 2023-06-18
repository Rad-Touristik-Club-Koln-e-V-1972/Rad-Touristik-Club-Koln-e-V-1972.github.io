import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from 'src/models/enums/EEvent'
import KA from './KA'
import KB from './KB'
import StartZiel from './Start_Ziel'
import Strecke from './Strecke'

export default new GalleryBuilder()
    .setCategory(EEvent.RTF)
    .setDate('2022-10-22')
    .setId('cda4c7e0-a266-44e4-923d-afe6dc11deb4')
    .setImages([
        new GalleryEntryBuilder()
            .setId('056cdb0e-08c2-417e-bdd3-14ed38b1b484')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2022/10_22_CTF_7/CTF_2022_Plakat-DIN_A2_DD.png')
            .build(),
    ])
    .setImages(KA)
    .setImages(KB)
    .setImages(StartZiel)
    .setImages(Strecke)
    .setLocation('Wahnbach')
    .setTitle('7. Wahnbach-Tour')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2022/10_22_CTF_7/Start_Ziel/preview/preview.IMG_1524.JPG')
    .build()
