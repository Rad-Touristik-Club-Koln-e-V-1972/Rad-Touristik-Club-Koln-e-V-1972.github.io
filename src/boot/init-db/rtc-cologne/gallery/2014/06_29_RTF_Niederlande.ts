import EEvent from 'src/models/enums/EEvent'

export default {
  albums: [
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-01.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-02.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-03.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-04.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-05.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-06.jpg.avif') },
  ],
  category: EEvent.Vereinsfahrt,
  location: 'Niederlande',
  time: {
    name: 'RTF Niederlande',
    start: new Date('2014-06-29'),
  },
  titleImageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/06_29_RTF_Niederlande/rtc-ndl-01.jpg.avif'),
}
