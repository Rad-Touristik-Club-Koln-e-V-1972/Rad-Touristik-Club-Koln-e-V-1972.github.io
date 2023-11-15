import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from 'src/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setDate('2014-09-01')
    .setId('2d6afd15-5260-42b5-90b4-4afa414b795a')
    .setImages([
        new GalleryEntryBuilder()
            .setId('b0638897-2afc-4d91-96b9-3691150cbbfd')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-01.JPG.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('1dfa93e3-f598-41c3-97da-a802ed401239')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-02.JPG.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('278503ee-08d1-47ca-8f32-adbddf3d5b05')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-03.JPG.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('e4408590-e7f5-4657-9297-5c745532732e')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-04.JPG.avif')
            .buildGalleryEntry(),
        new GalleryEntryBuilder()
            .setId('12276173-2dae-44a8-a478-898e4cd79bb0')
            .setImageUrl('content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-05.JPG.avif')
            .buildGalleryEntry(),
    ])
    .setLocation('Erden')
    .setTitle('RTF Erden')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-02.JPG.avif')
    .buildGallery()
