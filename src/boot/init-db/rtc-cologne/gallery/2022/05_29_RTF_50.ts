import EEvent from 'src/models/enums/EEvent'

export default {
  albums: [
    (await import('./05_29_RTF_50/Intro')).default,
    (await import('./05_29_RTF_50/K1')).default,
    (await import('./05_29_RTF_50/K2')).default,
    (await import('./05_29_RTF_50/K3_K5')).default,
    (await import('./05_29_RTF_50/K4')).default,
    (await import('./05_29_RTF_50/K6')).default,
    (await import('./05_29_RTF_50/Start_Ziel')).default,
  ],
  category: EEvent.RTF,
  location: 'Rösrath-Forsbach',
  time: {
    name: '50. Forsbach-Tour',
    start: new Date('2022-05-29'),
  },
  titleImageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/05_29_RTF_50/rtc-forsbach-tour-flyer1-2022.png.avif'),
  youtubeVideoIds: ['bx0zAC-A-fg'],
}
