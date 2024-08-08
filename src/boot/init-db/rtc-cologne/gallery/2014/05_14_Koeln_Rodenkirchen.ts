import EEvent from 'src/models/enums/EEvent'

export default {
  albums: [
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-01.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-02.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-03.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-04.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-05.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-06.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-07.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-08.jpg.avif') },
  ],
  category: EEvent.Vereinsfahrt,
  location: 'Köln-Rodenkirchen',
  time: {
    name: 'Köln-Rodenkirchen',
    start: new Date('2014-05-14'),
  },
  titleImageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/05_14_Koeln_Rodenkirchen/rtc-rod-03.jpg.avif'),
}
