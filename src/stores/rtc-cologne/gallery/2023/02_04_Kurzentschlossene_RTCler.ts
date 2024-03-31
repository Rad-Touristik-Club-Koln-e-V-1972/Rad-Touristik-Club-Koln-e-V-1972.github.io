import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
  .setDate('2023-02-04')
  .setId('7626953c-6efa-44f8-af4b-29cbf1e408f0')
  .setImages([
    new GalleryEntryBuilder()
      .setId('96afa887-1aa6-4ebb-99cf-736e40a1fbc5')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/02_04_Kurzentschlossene_RTCler/image0.jpeg.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('5c8c1da3-c67e-49e0-af07-e2a2a91b4730')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/02_04_Kurzentschlossene_RTCler/image1.jpeg.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('8bbc43c0-cdda-41e8-a899-482b11cf7d9e')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/02_04_Kurzentschlossene_RTCler/image2.jpeg.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('744883b1-db41-4bf4-b10a-908ed2163b84')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/02_04_Kurzentschlossene_RTCler/image3.jpeg.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('57945b2a-c475-4075-b740-ce9e19956e7c')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/02_04_Kurzentschlossene_RTCler/image5.jpeg.avif')
      .buildGalleryEntry(),
  ])
  .setLocation('Heimerzheim')
  .setTitle('Kurzentschlossene RTCler 🚴🚴‍♀️🚴‍♂️🚴🚴‍♀️🚴🚴‍♀️')
  .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/02_04_Kurzentschlossene_RTCler/image5.jpeg.avif')
  .setYoutubeVideoIds('o_fypmTyuds')
  .buildGallery()
