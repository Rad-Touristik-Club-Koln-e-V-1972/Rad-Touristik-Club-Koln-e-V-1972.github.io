import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.Vereinsfahrt)
    .dateFrom(new Date('2011-03-27'))
    .dateTo(new Date('2011-08-06'))
    .location('Düren-Merken, Düsseldorf & Lülsdorf')
    .images({
        '': [new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/01_01_Rueckblick.gif').build()],
        '27.03. Düren-Merken': [new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/03_27_Dueren-Merken/DSCF1156.JPG').build()],
        '16.04. Düsseldorf': [
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1 (10).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1 (11).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1 (12).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1 (13).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1 (14).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1 (15).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1 (16).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1 (18).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1 (19).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1 (1).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1 (20).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1 (21).jpg').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1 (23).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1 (24).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1 (25).jpg').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1 (26).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1 (2).jpg').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1 (3).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1 (4).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1 (6).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1 (7).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1 (8).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1 (9).JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/04_16_Duesseldorf/DSCF 1.JPG').build(),
        ],
        '08.05. Lülsdorf': [new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/05_08_Luelsdorf/RTF Luelsdorf 003.jpg').build()],
        '23.07. Düsseldorf': [
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/07_23_Duesseldorf/DSCF3373.JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/07_23_Duesseldorf/DSCF3376.JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/07_23_Duesseldorf/DSCF3390.JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/07_23_Duesseldorf/DSCF3391.JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/07_23_Duesseldorf/DSCF3397.JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/07_23_Duesseldorf/DSCF3399.JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/07_23_Duesseldorf/DSCF3400.JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/07_23_Duesseldorf/DSCF3401.JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/07_23_Duesseldorf/DSCF3402.JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/07_23_Duesseldorf/DSCF3415.JPG').build(),
        ],
        '06.08. Düsseldorf': [
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/08_06_Duesseldorf/P1130311.jpg').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/08_06_Duesseldorf/P1130319.jpg').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/08_06_Duesseldorf/P1130323.jpg').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/08_06_Duesseldorf/P1130326.jpg').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/08_06_Duesseldorf/P1130337.JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/08_06_Duesseldorf/P1130338.JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/08_06_Duesseldorf/P1130346.JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/08_06_Duesseldorf/P1130349.JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/08_06_Duesseldorf/P1130353.JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/08_06_Duesseldorf/P1130354.JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/08_06_Duesseldorf/P1130359.JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/08_06_Duesseldorf/P1130391.JPG').build(),
            new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2011/08_06_Duesseldorf/P1130392.JPG').build(),
        ],
    })
    .title('Rückblick')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2011/preview/preview.01_01_Rueckblick.gif')
    .build()
