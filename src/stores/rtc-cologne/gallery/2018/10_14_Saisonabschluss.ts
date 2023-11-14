import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from 'src/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Veranstaltung)
    .setDate('2018-10-14')
    .setId('f0d5d326-c8e4-4817-b520-0cc9bd0ec0ad')
    .setImages([
        new GalleryEntryBuilder()
            .setId('081dcba1-8ed4-4a4d-9594-67b8c5a4dcbf')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_134037_44800649975_o.jpg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('98fbf4cd-0b2f-4a37-b5b9-f16b75a221a0')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_134042_44800649865_o.jpg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('eaa5b341-37ff-4807-a7b9-84ed316cdab8')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_134102_44800648825_o.jpg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('77a4014a-7d61-4d68-b5fc-d5ba6e837a16')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_134106_44800648545_o.jpg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('d2790eb7-4260-41a0-8900-ba3a39b127ca')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_134113_44800647875_o.jpg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('29ee4cae-a5ad-45fe-9e6a-85cb25646697')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_140755_44989968874_o.jpg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('1e6f594b-4d13-425c-8db3-60d2e411862f')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_140801_44800647415_o.jpg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('59a735bd-2c37-489c-a793-78354f94b245')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_140824_44989968604_o.jpg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('c3852db3-2703-444e-9316-c0b94a3727bc')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_140826_44989968534_o.jpg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('bbfb0049-3f22-4022-9ffb-136d32fc0ed4')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_141544_44800647175_o.jpg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('095f2e12-67bc-4c4f-ae6b-0047deb750a1')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_141550_31842835598_o.jpg.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('0144466a-558c-4ec0-8dab-8ca40ad6a420')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_141621_45714619211_o.jpg.avif')
            .buildGalleryEntry(),
    ])
    .setLocation('BSG Stadt Köln')
    .setTitle('RTF-Saison-Abschluss')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2018/10_14_Saisonabschluss/20181014_141621_45714619211_o.jpg.avif')
    .buildGallery()
