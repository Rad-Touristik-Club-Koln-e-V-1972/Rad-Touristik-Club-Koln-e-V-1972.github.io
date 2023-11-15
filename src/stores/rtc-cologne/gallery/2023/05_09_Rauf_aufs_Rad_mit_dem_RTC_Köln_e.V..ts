import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2023-05-09')
    .setId('2b5902f1-77bc-467e-baad-20ae94e4c08a')
    .setImages([
        new GalleryEntryBuilder()
            .setId('4db57f39-edac-4c5f-a2b6-07c823d9eb0e')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_09_Rauf_aufs_Rad_mit_dem_RTC_Köln_e.V./signal-2023-05-09-203737_002.jpeg.avif')
            .buildGalleryEntry(),
    ])
    .setLocation('Köln')
    .setTitle('Rauf aufs Rad mit dem RTC Köln e.V.')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_09_Rauf_aufs_Rad_mit_dem_RTC_Köln_e.V./signal-2023-05-09-203737_002.jpeg.avif')
    .buildGallery()
