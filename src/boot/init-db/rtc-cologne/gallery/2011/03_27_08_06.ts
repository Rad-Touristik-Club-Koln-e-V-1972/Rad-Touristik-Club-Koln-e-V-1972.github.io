import EEvent from 'src/models/enums/EEvent'

export default {
  albums: [
    (await import('./03_27_08_06/Intro')).default,
    (await import('./03_27_08_06/27_03_Düren_Merken')).default,
    (await import('./03_27_08_06/16_04_Düsseldorf')).default,
    (await import('./03_27_08_06/08_05_Lülsdorf')).default,
    (await import('./03_27_08_06/23_07_Düsseldorf')).default,
    (await import('./03_27_08_06/06_08_Düsseldorf')).default,
  ],
  category: EEvent.Vereinsfahrt,
  location: 'Düren-Merken, Düsseldorf & Lülsdorf',
  time: {
    end: new Date('2011-08-06'),
    name: 'Rückblick',
    start: new Date('2011-03-27'),
  },
  titleImageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2011/01_01_Rueckblick.gif.avif'),
}
