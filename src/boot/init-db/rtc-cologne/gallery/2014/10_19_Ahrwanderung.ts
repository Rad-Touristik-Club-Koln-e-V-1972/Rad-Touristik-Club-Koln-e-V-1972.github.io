import EEvent from 'src/models/enums/EEvent'

export default {
  albums: [
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/1.JPG.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/2.JPG.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/3.JPG.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/4.JPG.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/5.JPG.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/6.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/7.JPG.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/8.jpg.avif') },
  ],
  category: EEvent.Vereinsfahrt,
  location: 'Ahrtal',
  time: {
    name: 'Ahrwanderung',
    start: new Date('2014-10-19'),
  },
  titleImageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/5.JPG.avif'),
}
