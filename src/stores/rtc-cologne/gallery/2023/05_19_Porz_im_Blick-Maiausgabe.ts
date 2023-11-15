import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2023-05-19')
    .setId('c96345be-6fba-4d03-b0f1-5ee71e0fed12')
    .setImages([
        new GalleryEntryBuilder()
            .setId('fcb4b18c-533d-4764-adbd-2fd816817147')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_19_Porz_im_Blick-Maiausgabe/image0.jpeg.avif')
            .buildGalleryEntry(),
    ])
    .setLocation('Köln-Porz')
    .setTitle('Porz im Blick - Maiausgabe')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_19_Porz_im_Blick-Maiausgabe/image0.jpeg.avif')
    .buildGallery()
