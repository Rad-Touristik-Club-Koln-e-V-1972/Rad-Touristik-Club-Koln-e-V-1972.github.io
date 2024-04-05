import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
  .setDate('2023-11-19')
  .setId('0e40f34a-4e48-4af4-a27a-ccdfe74e4f2e')
  .setImages([
    new GalleryEntryBuilder().setId('1ba8e161-19f0-496a-868c-02080373a04d').setImageUrl('content.rtc-koeln.de/pages/gallery/2023/11_19_Zwischen_den_Regenschauern/IMG_7319.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('f3474f9b-5f73-455a-92b7-d3d3f5459db7').setImageUrl('content.rtc-koeln.de/pages/gallery/2023/11_19_Zwischen_den_Regenschauern/IMG_7321.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('1818c222-accb-4858-a87e-dd25d23ea1d6').setImageUrl('content.rtc-koeln.de/pages/gallery/2023/11_19_Zwischen_den_Regenschauern/IMG_7331.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('5f22c056-2fce-4aed-8b78-73361fe71de8').setImageUrl('content.rtc-koeln.de/pages/gallery/2023/11_19_Zwischen_den_Regenschauern/IMG_7337.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('50c32fca-9ede-4b46-a4b7-68fcda33db54').setImageUrl('content.rtc-koeln.de/pages/gallery/2023/11_19_Zwischen_den_Regenschauern/IMG_7338.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('f05d2633-3466-4e34-81f1-b4fd16bf19eb').setImageUrl('content.rtc-koeln.de/pages/gallery/2023/11_19_Zwischen_den_Regenschauern/IMG_7341.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('012ac6aa-2f74-47d9-a56f-23f7130cfba8').setImageUrl('content.rtc-koeln.de/pages/gallery/2023/11_19_Zwischen_den_Regenschauern/IMG_7342.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('9cd2d782-53bb-41e5-9b4e-20a2f248525c').setImageUrl('content.rtc-koeln.de/pages/gallery/2023/11_19_Zwischen_den_Regenschauern/IMG_7345.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('ebfbfe42-8c1e-4cf8-bbab-12dfa5a99ef0').setImageUrl('content.rtc-koeln.de/pages/gallery/2023/11_19_Zwischen_den_Regenschauern/IMG_7809.jpg.avif').buildGalleryEntry(),
  ])
  .setLocation('Köln')
  .setTitle('Zwischen den Regenschauern')
  .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/11_19_Zwischen_den_Regenschauern/IMG_7319.jpg.avif')
  .buildGallery()
