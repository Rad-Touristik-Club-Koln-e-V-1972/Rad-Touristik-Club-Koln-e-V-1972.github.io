import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.RTF)
    .setDate('2009-07-01')
    .setLocation('Köln')
    .setImages(new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2009/07_01_RTF_37_Pressebericht_Koelner_Wochenspiegel.jpeg').build())
    .setTitle('Pressebericht zur 37. Forsbach-Tour')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2009/preview/preview.07_01_RTF_37_Pressebericht_Koelner_Wochenspiegel.jpeg')
    .build()
