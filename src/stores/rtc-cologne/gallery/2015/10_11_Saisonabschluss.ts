import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from 'src/models/enums/EEvent'

export default new GalleryBuilder()
  .setCategory(EEvent.Veranstaltung)
  .setDate('2015-10-11')
  .setId('6fd6d7bf-0a57-47f4-9813-80abde063ecb')
  .setImages([
    new GalleryEntryBuilder().setId('503c3afc-88c5-4365-a0bc-1fbf93da56d3').setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-001.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('1aee407b-c83f-4060-b26a-21f0ffe1ec31').setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-002.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('84c23932-57ac-48b3-96f6-a5ffc541b32f').setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-003.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('c4b6c7a9-5f03-45e1-b33b-317351adc3a0').setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-004.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('e4004a28-36f0-4f82-8a6b-6d91e4b6505a').setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-005.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('3666a5ba-4286-40ce-af8b-20ba6bf72220').setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-006.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('882fc338-b812-4b24-bdca-66955787ac0a').setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-007.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('126935e2-489d-4111-9692-e70d1f48fd5a').setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-008.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('a11d75a0-dae4-4561-857b-0beaaf538354').setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-009.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('d2e85017-5175-4efd-b2aa-527164e41ad2').setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-010.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('06f60e3b-e872-4a53-b589-7994a59f6600').setImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-011.jpg.avif').buildGalleryEntry(),
  ])
  .setLocation('Köln')
  .setTitle('Saisonabschluss')
  .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-008.jpg.avif')
  .buildGallery()
