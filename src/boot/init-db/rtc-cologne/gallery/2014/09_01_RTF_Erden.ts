import EEvent from 'src/models/enums/EEvent'

export default {
  albums: [
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-01.JPG.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-02.JPG.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-03.JPG.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-04.JPG.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-05.JPG.avif') },
  ],
  category: EEvent.Vereinsfahrt,
  location: 'Erden',
  time: {
    name: 'RTF Erden',
    start: new Date('2014-09-01'),
  },
  titleImageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/09_01_RTF_Erden/erden-02.JPG.avif'),
}
