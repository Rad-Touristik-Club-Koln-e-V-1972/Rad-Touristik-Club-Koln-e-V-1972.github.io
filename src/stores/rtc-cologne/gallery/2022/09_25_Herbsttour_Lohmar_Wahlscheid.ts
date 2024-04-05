import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from 'src/models/enums/EEvent'

export default new GalleryBuilder()
  .setCategory(EEvent.Vereinsfahrt)
  .setDate('2022-09-25')
  .setId('4a0c9096-eeae-4bee-9eca-068e616feed4')
  .setImages([
    new GalleryEntryBuilder()
      .setId('7d1a0c1a-4d26-44e3-8881-174d847c9837')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2022/09_25_Herbsttour_Lohmar_Wahlscheid/7b49ad8a-4a9e-43ea-a7b2-fd020963b790.jpg.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder().setId('97c129fa-b4e9-4817-a14e-6fd8a85b7c87').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/09_25_Herbsttour_Lohmar_Wahlscheid/IMG_5392.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('d0366420-b0f7-4fc5-a9e7-d6b88657397b').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/09_25_Herbsttour_Lohmar_Wahlscheid/IMG_5393.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('982fc505-6ae5-412c-9a3d-271285ba4239').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/09_25_Herbsttour_Lohmar_Wahlscheid/IMG_5394.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('b59b73a3-6775-4b5e-becf-eac6342a929e').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/09_25_Herbsttour_Lohmar_Wahlscheid/IMG_5396.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('7a5723df-af74-4fc1-bb74-59b04f6ec552').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/09_25_Herbsttour_Lohmar_Wahlscheid/IMG_5397.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('9c33872e-19cf-4463-934e-7fb3a47213af').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/09_25_Herbsttour_Lohmar_Wahlscheid/IMG_5399.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('051f8373-6e4c-40c6-83ca-038bbcace6ca')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2022/09_25_Herbsttour_Lohmar_Wahlscheid/df2025a6-03ed-407d-bcab-c0bec1337b70.jpg.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('36d3b5a1-61a7-44ef-843c-98bac511b514\n')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2022/09_25_Herbsttour_Lohmar_Wahlscheid/eb8a49a0-03d2-4056-918c-331eec7324e9.jpg.avif')
      .buildGalleryEntry(),
  ])
  .setLocation('Lohmar-Wahlscheid')
  .setTitle('Herbsttour - Lohmar-Wahlscheid')
  .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2022/09_25_Herbsttour_Lohmar_Wahlscheid/eb8a49a0-03d2-4056-918c-331eec7324e9.jpg.avif')
  .buildGallery()
