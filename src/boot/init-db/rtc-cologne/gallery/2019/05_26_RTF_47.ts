import EEvent from 'src/models/enums/EEvent'

export default {
  albums: [
    {
      entries: [
        { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2019/05_26_RTF_47/rtc-forsbach-tour-flyer-2019.jpg.avif') },
        { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2019/05_26_RTF_47/rtc-forsbach-tour-flyer1-2019.jpg.avif') },
        { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2019/05_26_RTF_47/rtc-forsbach-tour-flyer2-2019.jpg.avif') },
      ],
    },
  ],
  category: EEvent.RTF,
  location: 'Rösrath-Forsbach',
  time: {
    name: '47. Forsbach-Tour',
    start: new Date('2019-05-26'),
  },
  titleImageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2019/05_26_RTF_47/rtc-forsbach-tour-flyer-2019.jpg.avif'),
}
