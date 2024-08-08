import EEvent from 'src/models/enums/EEvent'

export default {
  albums: [
    {
      entries: [{ imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2018/05_27_RTF_46/rtc-forsbach-tour-flyer-2018.jpg.avif') }],
    },
  ],
  category: EEvent.RTF,
  location: 'Rösrath-Forsbach',
  time: {
    name: '46. Forsbach-Tour',
    start: new Date('2018-05-27'),
  },
  titleImageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2018/05_27_RTF_46/rtc-forsbach-tour-flyer-2018.jpg.avif'),
}
