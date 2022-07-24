import GalleryBuilder from '~/models/builder/GalleryBuilder'
import EntryBuilder from '~/models/builder/gallery/EntryBuilder'
import EEvent from '~/models/enums/EEvent'
import K1 from '~/store/gallery/2022/05_29_RTF_50/K1'
import K2 from '~/store/gallery/2022/05_29_RTF_50/K2'
import K3_K5 from '~/store/gallery/2022/05_29_RTF_50/K3_K5'
import K4 from '~/store/gallery/2022/05_29_RTF_50/K4'
import K6 from '~/store/gallery/2022/05_29_RTF_50/K6'
import StartZiel from '~/store/gallery/2022/05_29_RTF_50/Start_Ziel'

export default new GalleryBuilder()
    .category(EEvent.RTF)
    .dateFrom(new Date('2022-05-29'))
    .location('Forsbach')
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2022/05_29_RTF_50/RTF_2022_Flyer_148x105q_v2_Seite1.png').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2022/05_29_RTF_50/RTF_2022_Flyer_148x105q_v2_Seite2.png').previewUrl().build())
    .images(K1)
    .images(K2)
    .images(K3_K5)
    .images(K4)
    .images(K6)
    .images(StartZiel)
    .title('50. Forsbach-Tour')
    .titleImageUrl('https://content.rtc-koeln.de/pages/gallery/2022/05_29_RTF_50/preview/preview.RTF_2022_Flyer_148x105q_v2_Seite1.png')
    .build()
