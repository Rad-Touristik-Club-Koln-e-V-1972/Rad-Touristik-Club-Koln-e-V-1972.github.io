import { ref } from 'vue'
import { defineStore } from 'pinia'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import type GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

export default defineStore('slideshow', () => {
  return {
    all: ref<GalleryEntry[]>([
      new GalleryEntryBuilder().setId('6ba09e8e-48f0-4c9f-8642-696246a44911').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/c38c7429-ce40-4ae0-99a8-df505fa21a39.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('86ec0d68-3161-4dfd-8663-19bc5d6bc672').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/cce83759-06ae-4489-9696-a0b8e89e2e35.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('94a83c62-61c9-4a82-87ee-64350bc06bb2').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4752.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('5acc25f4-4a56-4b3c-a282-7fbdbdf79e3b').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4756.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('20d67cb6-f178-4a1c-a121-1aa3a1a302ab').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4758.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('96014469-dde0-4fdf-981f-6fc8b41574d0').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4761.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('7602e11f-fd8d-4fa5-abc9-77625a17b34f').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4768.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('23ad17e1-f3c8-45ed-9435-fae6dccd951f').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4772.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('4e13a78e-be8d-4399-b721-903a78e4f73f').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4786.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('3ee8ca7c-f3c2-4b65-92f8-f33aa35927ea').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4787.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('1676d00e-ea16-4867-80cf-6c295da36dbb').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4793.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('40e0cce1-c9b7-4aa2-a82f-8b09758dcd81').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4795.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('85536773-d288-4ff6-b6d0-8c72d05e5ffb').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4798.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('5a35bb7b-1e61-474c-a842-2c0372382c94').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4800.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('71b5176d-b5ed-4a47-a50f-327c6aab4801').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4802.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('df1ee402-c2c1-4151-9986-4c4900fddee5').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4804.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('8d185ee0-e5fb-4d28-bb11-5d515cc93078').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4805.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('736a714f-4e5a-4917-9fdc-720e21f7129e').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4806.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('cdf10fe7-c0e6-446b-8b0b-07fc9b45ddaa').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4809.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('80888e6b-b136-4531-af89-6076b1ec7f03').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4811.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('84167e8e-6700-4aef-a3d0-9c004bc8aa1d').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4812.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('35ac4057-5a72-4a49-a8fd-453eea1ead3d').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4818.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('57294968-48c3-40be-9e3e-070dce0dbfba').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4819.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('c2aff731-7efe-4c68-a39a-1a08626adba9').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4822.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('7d3b6478-c729-4f4e-91a9-25a8ae645fa6').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4823.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('8cd1297d-7903-4f5a-bbcd-fc0e0cb07ea3').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4828.avif').buildGalleryEntry(),
      new GalleryEntryBuilder().setId('d9fbaf6f-4c38-4b8e-af79-d4d595903c30').setImageUrl('content.rtc-koeln.de/pages/gallery/2025/07_13_Condor_Flug/IMG_4895.avif').buildGalleryEntry(),
    ]),
  }
})
