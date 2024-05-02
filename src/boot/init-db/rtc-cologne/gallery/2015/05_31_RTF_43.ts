import EEvent from 'src/models/enums/EEvent'

export default {
  albums: [
    (await import('./05_31_RTF_43/Intro')).default,
    (await import('./05_31_RTF_43/05_16_Vortour')).default,
    (await import('./05_31_RTF_43/75er_Alternative')).default,
    (await import('./05_31_RTF_43/16_05_Vortour_Marathon')).default,
    (await import('./05_31_RTF_43/30_31_05_Vorbereitungen')).default,
    (await import('./05_31_RTF_43/K1')).default,
    (await import('./05_31_RTF_43/K3')).default,
    (await import('./05_31_RTF_43/K5')).default,
    (await import('./05_31_RTF_43/K6')).default,
    (await import('./05_31_RTF_43/Start_Ziel')).default,
    (await import('./05_31_RTF_43/Tour')).default,
  ],
  category: EEvent.RTF,
  location: 'Rösrath-Forsbach',
  time: {
    name: '43. Forsbach-Tour',
    start: new Date('2015-05-31'),
  },
  titleImageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2015/05_31_RTF_43/rtc-forsbach-tour-flyer1-2015.jpg.avif'),
}
