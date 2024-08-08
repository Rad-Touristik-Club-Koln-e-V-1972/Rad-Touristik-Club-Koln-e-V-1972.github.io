import EEvent from 'src/models/enums/EEvent'

export default {
  albums: [
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/IMG-20140712-00544.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/IMG-20140712-00551.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/IMG-20140712-00567.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/IMG-20140712-00569.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/IMG-20140712-00571.jpg.avif') },
  ],
  category: EEvent.Vereinsfahrt,
  location: 'Eslohe',
  time: {
    name: 'Eslohe',
    start: new Date('2014-07-13'),
  },
  titleImageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/07_13_Eslohe/IMG-20140712-00551.jpg.avif'),
}
