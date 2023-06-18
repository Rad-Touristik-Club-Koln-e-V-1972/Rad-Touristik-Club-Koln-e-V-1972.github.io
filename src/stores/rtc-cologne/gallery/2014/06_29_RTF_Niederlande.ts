import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from 'src/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setDate('2014-06-29')
    .setId('845e39eb-61e6-40da-a38e-cb2ad4030266')
    .setImages([
        new GalleryEntryBuilder().setId('00cc5273-5c08-457e-9fc0-c787f54faa80').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-01.jpg').build(),
        new GalleryEntryBuilder().setId('4b5f2ef3-0465-44c6-8e96-29c01e7cb688').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-02.jpg').build(),
        new GalleryEntryBuilder().setId('c2c7a267-ee18-4bbe-b562-1e1ab6f70c71').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-03.jpg').build(),
        new GalleryEntryBuilder().setId('ac9e1d5f-e01e-4d75-a1c1-887ab3c40e1f').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-04.jpg').build(),
        new GalleryEntryBuilder().setId('bcf29d5b-6d2d-4e1c-a544-b1785d8e792e').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-05.jpg').build(),
        new GalleryEntryBuilder().setId('7ad361eb-768d-495a-a7b8-df3b5172bcd1').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-06.jpg').build(),
    ])
    .setLocation('Niederlande')
    .setTitle('RTF Niederlande')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/preview/preview.rtc-ndl-01.jpg')
    .build()
