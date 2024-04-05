import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from 'src/models/enums/EEvent'

export default new GalleryBuilder()
  .setCategory(EEvent.Veranstaltung)
  .setDate('2014-12-02')
  .setId('2793aaae-18f4-49df-8f3c-44c8879bdf2d')
  .setImages([
    new GalleryEntryBuilder().setId('f664a545-92f4-4cbd-a9a3-c4d08666d362').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01754.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('5dbd3722-ff94-4a7b-9c3e-7f731c843e82').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01756.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('436adc31-921e-4620-9438-dc8fc64f39da').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01757.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('cc0554c5-a0ed-4f22-be73-0644a2fe0d5f').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01758.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('263c8f87-d9ec-4dbb-bc0b-9d190ec93ab3').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01760.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('9c38d501-231a-4dfc-8fc7-445ac60d2afe').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01762.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('69adc008-4afc-4d09-913b-0daa881714dd').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01763.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('892ea772-673f-4d56-8bbe-e2e74a0bb602').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01766.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('2a77aa2a-d0c9-4367-94bb-08128044d2ba').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01767.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('aaebe1c2-3192-4f84-a4a1-444419a274af').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01768.JPG.avif').buildGalleryEntry(),
  ])
  .setLocation('Köln')
  .setTitle('Siegerehrung Mannschaftswertung Bezirk Köln')
  .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2014/12_02_Siegerehrung_Mannschaftswertung_Bezirk_Koeln/DSC01768.JPG.avif')
  .buildGallery()
