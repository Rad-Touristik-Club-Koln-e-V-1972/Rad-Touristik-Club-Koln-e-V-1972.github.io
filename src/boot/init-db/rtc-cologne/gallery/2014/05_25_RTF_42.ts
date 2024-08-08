import EEvent from 'src/models/enums/EEvent'

export default {
  albums: [
    (await import('./05_25_RTF_42/Intro')).default,
    (await import('./05_25_RTF_42/03_30_Streckenbesichtigung')).default,
    (await import('./05_25_RTF_42/17_05_Vortour')).default,
    (await import('./05_25_RTF_42/Kontrolle_Huelstert')).default,
    (await import('./05_25_RTF_42/Marathon')).default,
    (await import('./05_25_RTF_42/Tour')).default,
  ],
  category: EEvent.RTF,
  location: 'Köln',
  time: {
    name: '42. Forsbach-Tour',
    start: new Date('2014-05-25'),
  },
  titleImageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2014/05_25_RTF_42/rtc-forsbach-tour-flyer1-2014.jpg.avif'),
}
