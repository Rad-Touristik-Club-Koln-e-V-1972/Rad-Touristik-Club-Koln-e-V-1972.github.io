import EEvent from 'src/models/enums/EEvent'

export default {
  albums: [
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/CAM00033.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/CAM00034.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/CAM00035.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/CAM00036.jpg.avif') },
  ],
  category: EEvent.Vereinsfahrt,
  location: 'Erkelenz',
  time: {
    name: 'Erkelenz',
    start: new Date('2014-06-19'),
  },
  titleImageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/06_19_Erkelenz/CAM00034.jpg.avif'),
}
