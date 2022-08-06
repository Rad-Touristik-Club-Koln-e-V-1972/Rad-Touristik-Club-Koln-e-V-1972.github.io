import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'
import _0330Streckenbesichtigung from '~/store/about-us/gallery/2014/05_25_RTF_42/03_30_Streckenbesichtigung'
import Tour from '~/store/about-us/gallery/2014/05_25_RTF_42/Tour'

export default new GalleryBuilder()
    .category(EEvent.RTF)
    .dateFrom(new Date('2014-05-25'))
    .location('Köln')
    .images({
        '': [
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/rtc-forsbach-tour-flyer1-2014.jpg').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/rtc-forsbach-tour-flyer2-2014.jpg').build(),
        ],
        ..._0330Streckenbesichtigung,
        '17.05. Vortour': [
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/05_17_Vortour/DSCF4964.JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/05_17_Vortour/DSCF4965.JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/05_17_Vortour/DSCF4967.JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/05_17_Vortour/Huelstert2.JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/05_17_Vortour/Huelstert.JPG').build(),
        ],
        'Kontrolle Huelstert': [
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Kontrolle_Huelstert/IMG_0293[1].JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Kontrolle_Huelstert/IMG_0294[1].JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Kontrolle_Huelstert/IMG_0296[1].JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Kontrolle_Huelstert/IMG_0297[1].JPG').build(),
        ],
        Marathon: [
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(10).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(11).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(12).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(13).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(14).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(15).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(16).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(17).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(18).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(19).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(1).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(20).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(21).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(22).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(23).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(24).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(25).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(26).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(27).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(28).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(29).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(2).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(30).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(31).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(32).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(33).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(34).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(35).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(36).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(37).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(38).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(39).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(3).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(40).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(41).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(42).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(43).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(44).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(45).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(46).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(47).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(48).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(49).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(4).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(50).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(51).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(52).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(53).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(54).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(55).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(56).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(57).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(58).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(59).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(5).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(60).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(61).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(62).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(63).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(64).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(65).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(66).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(67).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(6).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(7).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(8).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/Marathon/Forsbach-Marathon(9).JPG').build(),
        ],
        ...Tour,
    })
    .title('42. Forsbach-Tour')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/preview/preview.rtc-forsbach-tour-flyer1-2014.jpg')
    .build()
