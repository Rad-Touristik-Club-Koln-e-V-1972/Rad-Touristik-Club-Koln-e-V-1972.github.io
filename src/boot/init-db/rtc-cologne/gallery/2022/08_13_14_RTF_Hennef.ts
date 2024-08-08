import EEvent from 'src/models/enums/EEvent'

export default {
  albums: [
    {
      entries: [
        { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/9b3c9cdc-bd80-49ed-b0e3-c296198ab8a4.JPG.avif') },
        { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_0116.JPG.avif') },
        { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_0119.JPG.avif') },
        { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_0125.JPG.avif') },
        { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_0139.JPG.avif') },
        { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_0149.jpg.avif') },
        { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_0150.JPG.avif') },
        { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_5026.jpg.avif') },
        { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_5028.jpg.avif') },
        { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_5033.jpg.avif') },
        { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_5040.jpg.avif') },
        { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_5041.jpg.avif') },
      ],
    },
  ],
  category: EEvent.Vereinsfahrt,
  location: 'Hennef',
  time: {
    end: new Date('2022-08-14'),
    name: 'RTF Hennefer Hitzetage',
    start: new Date('2022-08-13'),
  },
  titleImageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/08_13_14_RTF_Hennef/IMG_0116.JPG.avif'),
}
