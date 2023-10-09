import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from 'src/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setDate('2014-04-08')
    .setId('7d41f52b-60c3-4357-8209-821c0c25c1f6')
    .setImages([
        new GalleryEntryBuilder()
            .setId('e5a6dc60-4701-490a-8982-18c46aed6a23')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (10).JPG')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('64b213c4-47f0-46b4-bfa1-d2153c08bc6b')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (11).JPG')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('afbbeedb-c3e0-497c-889e-e3fe1557be4c')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (12).JPG')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('0048fde8-16b5-4aaa-a712-6d4d99234015')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (13).JPG')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('e38667e0-10fb-460e-98db-e8469f1aa7c5')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (1).JPG')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('90d97ef8-f8b2-4298-9b87-c2f1f06da284')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (2).JPG')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('d5cc3214-68b3-4d95-9734-5450668d4180')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (3).JPG')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('adfbce59-d30c-441d-a074-1cb9c0ebadda')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (4).JPG')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('3ad11921-3eee-4864-a8f1-a5a8f42005dc')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (61).JPG')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('56b86d48-34f9-40a4-b843-a5a28571ef2f')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (6).JPG')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('12ed1858-e6c8-4baf-9307-661a4f8dc780')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (7).JPG')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('69e427ca-7d73-4646-a895-0bf43ee46996')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (8).JPG')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('0b738bb1-6097-4730-a098-93f6923e3973')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/CIMG1 (9).JPG')
            .buildGalleryEntry(),
    ])
    .setLocation('Flandern, Belgien')
    .setTitle('Flandern')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_08_Flandern_Belgien/preview/preview.CIMG1 (6).JPG')
    .buildGallery()
