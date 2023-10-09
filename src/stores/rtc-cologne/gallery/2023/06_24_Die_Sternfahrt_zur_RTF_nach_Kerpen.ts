import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2023-06-24')
    .setId('732a5c32-d90f-4b61-be01-640d19757c76')
    .setImages([
        new GalleryEntryBuilder()
            .setId('3e305849-e796-4702-ba9a-5c55a44588fa')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/06_24_Die_Sternfahrt_zur_RTF_nach_Kerpen/image0.jpeg')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('a5de3d68-3f43-4745-8d8e-61d7c13f1a0d')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/06_24_Die_Sternfahrt_zur_RTF_nach_Kerpen/image1.jpeg')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('6cfbe419-ac2a-4628-a518-42ec4933258b')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/06_24_Die_Sternfahrt_zur_RTF_nach_Kerpen/image2.jpeg')
            .buildGalleryEntry(),
    ])
    .setLocation('Kerpen')
    .setTitle('Die Sternfahrt zur RTF nach Kerpen')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/06_24_Die_Sternfahrt_zur_RTF_nach_Kerpen/preview/preview.image0.jpeg')
    .buildGallery()
