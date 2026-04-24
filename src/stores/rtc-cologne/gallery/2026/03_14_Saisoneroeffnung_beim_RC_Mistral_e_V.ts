import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
  .setDate('2026-03-14')
  .setId('1b5bd945-a8b7-4eec-b5a7-bd684a2c5d15')
  .setImages([
    new GalleryEntryBuilder()
      .setId('c9d0e1f2-a3b4-5678-cdef-789012345678')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2026/03_14_Saisoneroeffnung_beim_RC_Mistral_e_V/649297272_1792468152207705_9190503409423378697_n.jpg.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('d0e1f2a3-b4c5-6789-defa-890123456789')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2026/03_14_Saisoneroeffnung_beim_RC_Mistral_e_V/649680517_1792468155541038_8838850716330167841_n.jpg.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('e1f2a3b4-c5d6-7890-efab-901234567890')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2026/03_14_Saisoneroeffnung_beim_RC_Mistral_e_V/650709107_1792468158874371_3148531981708141656_n.jpg.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('f2a3b4c5-d6e7-8901-fabc-012345678901')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2026/03_14_Saisoneroeffnung_beim_RC_Mistral_e_V/651281303_1792468148874372_1531910077028369667_n.jpg.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('a3b4c5d6-e7f8-9012-abcd-123456789012')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2026/03_14_Saisoneroeffnung_beim_RC_Mistral_e_V/652221715_1792468145541039_6601575880027903026_n.jpg.avif')
      .buildGalleryEntry(),
  ])
  .setLocation('Köln')
  .setTitle('Saisoneröffnung beim RC Mistral e.V.')
  .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2026/03_14_Saisoneroeffnung_beim_RC_Mistral_e_V/652221715_1792468145541039_6601575880027903026_n.jpg.avif')
  .buildGallery()
