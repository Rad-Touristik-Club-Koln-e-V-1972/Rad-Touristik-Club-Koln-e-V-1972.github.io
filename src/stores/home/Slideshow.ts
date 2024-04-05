import { ref } from 'vue'
import { defineStore } from 'pinia'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

export default defineStore('slideshow', () => {
  return {
    all: ref<GalleryEntry[]>([
      new GalleryEntryBuilder().setId('5920bf55-e018-4e22-bf9f-ba76b2a3439b').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/image0_61fe6032-2f8a-4344-a6cc-b91d395eca08.jpeg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('c30f8886-41ba-47f6-bf97-b68bd8bb0baf').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/image1_d322962f-3531-4248-8f64-f1fe3f3850b8.jpeg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('1461e1b4-c418-4761-932f-3c6d660d79ec').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/image2_4f36deec-6f19-4992-9ab3-3ea2a84b1572.jpeg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('457576cf-03c8-4bb7-ab4f-444b6246dd47').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/image3_e788fefb-5518-4e6c-a594-d93c96dfdfd2.jpeg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('d72861c4-31fd-4f96-b7b8-46d51a50c6cf').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/image0.jpeg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('2317e30f-8933-4378-89ae-07bf34026f83').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/image1.jpeg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('0680d03d-52f1-43a8-a9e2-7342d58c9328').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/image2.jpeg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('c646b548-d985-43e3-a921-874f19fc1662').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/image3.jpeg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('f4a91aeb-0028-4906-9608-3de81a5cf1f6').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/IMG_2571.jpg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('df6e5343-a6c2-44fa-9baa-3d2853d433eb').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/b74ba152-d427-40ac-8ef4-4539bcb153e3.jpg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('5109a7f7-f33f-4d14-ad34-135db19aea90').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/b0a3d468-828d-474d-9380-e568a38fad89.jpg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('505dd369-b0ae-48eb-a2c1-062211d6f8e5').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/IMG_0037.jpg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('8de4e7d9-02ce-4322-9335-9ec37cd99166').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/IMG_2225.jpg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('bb9ce044-e095-45cd-bfa3-a72a1f89c345').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/IMG_4226.jpg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('6dd84ef7-d9e5-4a1e-8656-1955804f3490').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/IMG_4235.jpg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('08494a8a-6411-49bc-bb88-cff3f6d7775a').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/IMG_4241.jpg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('4e15a5d5-ff64-4ec8-a97c-196bc47c4918').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/IMG_4252.jpg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('1ef0a6b9-5fc1-4aed-9ffa-96010a603621').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/IMG_4256.jpg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('14113a3f-bd1b-4de0-969f-c52a1b4172fc').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/IMG_4483.jpg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('86ff4a39-0a6b-43e4-9955-2d08b1f78261').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/IMG_4495.jpg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('fe7b1815-6279-43cc-aba7-d52da36eb723').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/IMG_4497.jpg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('106ba8bb-b576-4866-98ec-812202daba2c').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/IMG_4502.jpg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('867adb10-3872-43d7-a3d7-5336a7600e91').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/IMG_4507.jpg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('aa5dd40e-83b3-46da-8c07-cb9a8256e6fb').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/IMG_4508.jpg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('cfa2a543-2e26-4579-b2af-d3dfd9131932').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/IMG_4515.jpg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('d7626722-ac6f-449a-b333-180cd2e41ccd').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/signal-2023-02-05-092407_002.jpeg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('6236709d-d210-4301-a3ac-90fbf57b2cdb').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/signal-2023-02-05-092407_003.jpeg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('167f8e77-b02a-4822-bbcb-b643a5a220bc').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/IMG_0936.JPG.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('4c006505-9c4c-457e-ac87-028a7f50bbca').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/IMG_0923.JPG.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('74ba44f1-cabb-4506-a72b-381d71ed3d1d').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/IMG_0909.JPG.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('701c5a44-9ce5-413f-8cac-a292b8a1f29f').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/image4.jpeg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('8ebc1829-5eba-4eeb-a330-a57571cb21e2').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/image7.jpeg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('5be8f287-e466-4e32-bb01-bb346f8b5e4f').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/image8.jpeg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('8d945549-abb5-4504-9e99-65d283c9eacc').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/image9.jpeg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('f55db621-c358-4b93-bb7e-53bfc90961cb').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/image10.jpeg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('519ddc33-9bb8-424a-989a-c0af65ca7c22').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/image11.jpeg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('cf006b15-4980-43bc-b60f-59e43f2e8965').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/image12.jpeg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('437682e5-20d5-4d5c-9dba-15d58108cd98').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/image13.jpeg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('f5c72948-357b-4d18-8fbd-26d4677d26e5').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/image14.jpeg.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('18369947-addc-4f54-a464-1c40a9995877').setImageUrl('content.rtc-koeln.de/pages/home/slideshow/signal-2023-05-01-193158.jpeg.avif').buildGalleryEntry(),
    ]),
  }
})
