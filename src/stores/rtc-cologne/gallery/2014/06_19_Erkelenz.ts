import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from 'src/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setDate('2014-06-19')
    .setId('394b60b0-7b3f-4592-978b-fbee54de0d2c')
    .setImages([
        new GalleryEntryBuilder()
            .setId('973909ec-1c69-4f53-b995-39a38a67709d')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/CAM00033.jpg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('6fda0821-db85-4e7e-8cf2-75c0c10c42bf')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/CAM00034.jpg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('032c0ed9-7cf9-45bf-8fa6-5d576486db79')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/CAM00035.jpg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('1abbbb28-47b0-4f06-89b3-5d87886310c7')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/CAM00036.jpg.avif')
            .buildGalleryEntry(),
    ])
    .setLocation('Erkelenz')
    .setTitle('Erkelenz')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/CAM00034.jpg.avif')
    .buildGallery()
