import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
  .setDate('2023-08-05')
  .setId('6a72b056-6c53-40e7-ae87-872938b7824e')
  .setImages(
    new GalleryEntryBuilder()
      .setId('e6f45d6b-38ce-4663-ae2c-96e0bb46c88f')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/08_05_RTF_vom_RTV_Lohmar/WhatsApp_Image_2023-08-05_at_6.15.02_PM.avif')
      .buildGalleryEntry(),
  )
  .setLocation('Lohmar')
  .setTitle('RTF vom RTV Lohmar')
  .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/08_05_RTF_vom_RTV_Lohmar/WhatsApp_Image_2023-08-05_at_6.15.02_PM.avif')
  .buildGallery()
