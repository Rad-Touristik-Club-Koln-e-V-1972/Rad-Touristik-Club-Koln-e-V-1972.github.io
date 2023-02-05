import GalleryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from '~/models/enums/EEvent'

export default new GalleryBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setDate('2014-04-12')
    .setId('e32d6629-a601-4066-a351-fd51f64cc840')
    .setImages([
        new GalleryEntryBuilder().setId('1afcde22-a9eb-420e-aeb0-5db5a76c7848').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4855.JPG').build(),
        new GalleryEntryBuilder().setId('50b06513-fceb-4a72-b27d-9a609fb1760e').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4857.JPG').build(),
        new GalleryEntryBuilder().setId('19345660-4dc8-445c-9c60-0bb1d4578f6f').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4858.JPG').build(),
        new GalleryEntryBuilder().setId('e384ca15-348b-4824-aa73-a2866d239908').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4865.JPG').build(),
        new GalleryEntryBuilder().setId('343b2f8d-1b1f-46a7-8329-9db87cf2bd1c').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4868.JPG').build(),
        new GalleryEntryBuilder().setId('2a911511-8ea8-41c4-8022-9d326318ad5c').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4869.JPG').build(),
        new GalleryEntryBuilder().setId('e22bc798-3658-4b10-9c74-19e35902ff63').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4871.JPG').build(),
        new GalleryEntryBuilder().setId('694b022a-fe95-4d3b-986b-e01c1a387ca4').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4874.JPG').build(),
    ])
    .setLocation('Düsseldorf')
    .setTitle('Düsseldorf')
    .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/preview/preview.DSCF4874.JPG')
    .build()
