import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
    .setDate('2023-05-14')
    .setId('468f80a4-f5e9-4bd4-b638-53cb5675e496')
    .setImages([
        new GalleryEntryBuilder()
            .setId('eb3c7a0e-0d47-4cae-84b6-58bb1826fb86')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_14_RTF_Campus_Bonn/image0.jpeg')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('19de0a59-417e-4d54-ab6e-7a69596eaecf')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_14_RTF_Campus_Bonn/image1.jpeg')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('5a41f816-ed3f-4a43-b21f-9d7fd12b89bc')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_14_RTF_Campus_Bonn/image2.jpeg')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('597989c1-0556-4338-9a7f-e64c054d21df')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_14_RTF_Campus_Bonn/image3.jpeg')
            .buildGalleryEntry(),
    ])
    .setLocation('Bonn')
    .setTitle('RTF Campus Bonn')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_14_RTF_Campus_Bonn/preview/preview.image1.jpeg')
    .buildGallery()
