import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from 'src/models/enums/EEvent'

export default new GalleryBuilder()
  .setCategory(EEvent.Vereinsfahrt)
  .setDate('2022-08-27')
  .setId('284dae72-4bf4-49fc-9ff1-a7b1263946f0')
  .setImages([
    new GalleryEntryBuilder().setId('51f47b27-9043-4941-964a-da857e33a100').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_27_RTF_GEW_RheinEnergie/image4.jpeg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('69edafa8-71ec-4ed3-983a-bbbe81fef458').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_27_RTF_GEW_RheinEnergie/image5.jpeg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('7fb6b8d4-74d0-47cd-a580-675568d89516').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_27_RTF_GEW_RheinEnergie/image6.jpeg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('f51dad03-671e-4553-ba88-08c084a3cd1f').setImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_27_RTF_GEW_RheinEnergie/image7.jpeg.avif').buildGalleryEntry(),
  ])
  .setLocation('GEW RheinEnergie')
  .setTitle('RTF - GEW RheinEnergie')
  .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2022/08_27_RTF_GEW_RheinEnergie/image4.jpeg.avif')
  .buildGallery()
