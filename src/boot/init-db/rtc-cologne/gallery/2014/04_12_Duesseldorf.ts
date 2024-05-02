import EEvent from 'src/models/enums/EEvent'

export default {
  albums: [
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4855.JPG.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4857.JPG.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4858.JPG.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4865.JPG.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4868.JPG.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4869.JPG.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4871.JPG.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4874.JPG.avif') },
  ],
  category: EEvent.Vereinsfahrt,
  location: 'Düsseldorf',
  time: {
    name: 'Düsseldorf',
    start: new Date('2014-04-12'),
  },
  titleImageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/04_12_Duesseldorf/DSCF4874.JPG.avif'),
}
