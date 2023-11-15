import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2023-05-06')
    .setId('9f754e63-1819-4e8e-9857-8562eedc9cc8')
    .setImages([
        new GalleryEntryBuilder()
            .setId('b1a5c10a-73cc-4780-ae3b-b94b27dbdeea')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_06_RTF_Nievenheim/image0.jpeg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('f2bc79d3-a5f9-4b0f-b57f-9fe2ba1d5fb6')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_06_RTF_Nievenheim/image1.jpeg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('978acc45-8bbe-4a32-b92c-b123873e51b0')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_06_RTF_Nievenheim/image3.jpeg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('ca939231-d883-4ec7-9b8d-9ca32cfef114')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_06_RTF_Nievenheim/image4.jpeg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('6dac2d0a-02cf-4d7b-868a-c61b9e000a31')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_06_RTF_Nievenheim/image5.jpeg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('390b44f9-5cee-4c49-9dfb-de2751ac86af')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_06_RTF_Nievenheim/image6.jpeg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('9f875f54-bb3a-4188-a517-d60089fdb39b')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_06_RTF_Nievenheim/image7.jpeg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('3a85323c-bf83-40c9-ba40-3698232dcb35')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_06_RTF_Nievenheim/image8.jpeg.avif')
            .buildGalleryEntry(),
    ])
    .setLocation('Dormagen-Nievenheim')
    .setTitle('6. Mai: RTF Nievenheim')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_06_RTF_Nievenheim/image0.jpeg.avif')
    .buildGallery()
