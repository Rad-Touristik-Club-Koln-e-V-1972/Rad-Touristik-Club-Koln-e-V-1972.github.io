import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.RTF)
    .dateFrom(new Date('2009-07-01'))
    .location('Köln')
    .image(new GalleryEntryBuilder().imageUrl('content.rtc-koeln.de/pages/gallery/2009/07_01_RTF_37_Pressebericht_Koelner_Wochenspiegel.jpeg').previewUrl().build())
    .title('Pressebericht zur 37. Forsbach-Tour')
    .titleImageUrl('content.rtc-koeln.de/pages/gallery/2009/preview/preview.07_01_RTF_37_Pressebericht_Koelner_Wochenspiegel.jpeg')
    .build()
