import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2023-04-09')
    .setId('7c66e8f8-2dbd-4af8-9641-65ea0dd69484')
    .setImages([
        new GalleryEntryBuilder()
            .setId('590cc7e5-3bc4-47a7-89df-1c3b384b0ead')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/04_09_Lust_auf_was_Neues/image0.jpeg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('6f130521-4687-4d99-a8f6-bc15b98c182a')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/04_09_Lust_auf_was_Neues/image1.jpeg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('50bafec3-b288-45a3-9e5f-189269fca6a8')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/04_09_Lust_auf_was_Neues/image2.jpeg.avif')
            .buildGalleryEntry(),
    ])
    .setLocation('Mosel')
    .setTitle('➡️ LUST AUF WAS NEUES? 🚴‍♀️')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/04_09_Lust_auf_was_Neues/image0.jpeg.avif')
    .buildGallery()
