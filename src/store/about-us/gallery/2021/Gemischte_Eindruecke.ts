import GalleryEntryBuilder from '~/models/builder/about-us/gallery/GalleryEntryBuilder'
import GalleryBuilder from '~/models/builder/about-us/GalleryBuilder'

export default new GalleryBuilder()
    .setDate('2021-12-31')
    .setLocation('Köln')
    .setImages([
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_2716.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_2723.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_3113.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_4644.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_4647.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_4657.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_4687.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_4844.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_5089.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_5219.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_5226.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_5405.jpg').build(),
        new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_5429.jpg').build(),
    ])
    .setTitle('Gemischte Eindrücke 2021')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/preview/preview.IMG_2716.jpg')
    .build()
