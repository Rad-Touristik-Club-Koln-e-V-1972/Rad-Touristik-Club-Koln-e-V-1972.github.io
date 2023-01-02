import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setDate('2022-09-25')
    .setId('4a0c9096-eeae-4bee-9eca-068e616feed4')
    .setLocation('Lohmar-Wahlscheid')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/09_25_Herbsttour_Lohmar_Wahlscheid/7b49ad8a-4a9e-43ea-a7b2-fd020963b790.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/09_25_Herbsttour_Lohmar_Wahlscheid/IMG_5392.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/09_25_Herbsttour_Lohmar_Wahlscheid/IMG_5393.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/09_25_Herbsttour_Lohmar_Wahlscheid/IMG_5394.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/09_25_Herbsttour_Lohmar_Wahlscheid/IMG_5396.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/09_25_Herbsttour_Lohmar_Wahlscheid/IMG_5397.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/09_25_Herbsttour_Lohmar_Wahlscheid/IMG_5399.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/09_25_Herbsttour_Lohmar_Wahlscheid/df2025a6-03ed-407d-bcab-c0bec1337b70.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2022/09_25_Herbsttour_Lohmar_Wahlscheid/eb8a49a0-03d2-4056-918c-331eec7324e9.jpg').build(),
    ])
    .setTitle('Herbsttour - Lohmar-Wahlscheid')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2022/09_25_Herbsttour_Lohmar_Wahlscheid/preview/preview.eb8a49a0-03d2-4056-918c-331eec7324e9.jpg')
    .build()
