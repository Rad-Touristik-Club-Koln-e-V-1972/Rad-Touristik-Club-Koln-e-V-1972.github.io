import EEvent from 'src/models/enums/EEvent'

export default {
  albums: [
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-001.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-002.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-003.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-004.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-005.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-006.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-007.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-008.jpg.avif') },
  ],
  category: EEvent.Vereinsfahrt,
  location: 'Buchholz',
  time: {
    name: 'Buchholz',
    start: new Date('2015-06-07'),
  },
  titleImageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-003.jpg.avif'),
}
