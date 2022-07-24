import EntryBuilder from '~/models/builder/gallery/EntryBuilder'
import GalleryBuilder from '~/models/builder/GalleryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .category(EEvent.RTC)
    .dateFrom(new Date('2021-12-31'))
    .location('Köln')
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_2716.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_2723.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_3113.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_4644.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_4647.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_4657.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_4687.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_4844.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_5089.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_5219.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_5226.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_5405.jpg').previewUrl().build())
    .image(new EntryBuilder().srcUrl('https://content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/IMG_5429.jpg').previewUrl().build())
    .title('Gemischte Eindrücke 2021')
    .titleImageUrl('https://content.rtc-koeln.de/pages/gallery/2021/Gemischte_Eindruecke/preview/preview.IMG_2716.jpg')
    .build()
