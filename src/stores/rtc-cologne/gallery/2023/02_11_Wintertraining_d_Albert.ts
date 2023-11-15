import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2023-02-11')
    .setId('4d6e43a0-3923-4c94-a60d-d7c2dda20905')
    .setImages([
        new GalleryEntryBuilder()
            .setId('5009ef35-7e89-41df-bfe8-e3508078b955')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/02_11_Wintertraining_d_Albert/image0.jpeg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('240d0aa9-e80d-417f-adb2-7e0c5172baee')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/02_11_Wintertraining_d_Albert/image1.jpeg.avif')
            .buildGalleryEntry(),
    ])
    .setLocation('Heimerzheim')
    .setTitle('Wintertraining d‘Albert')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/02_11_Wintertraining_d_Albert/image0.jpeg.avif')
    .setYoutubeVideoIds('S9x_NGno4U4', 'oWWz0OlpRVY')
    .buildGallery()
