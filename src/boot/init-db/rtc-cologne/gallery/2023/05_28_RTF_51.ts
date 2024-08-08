import EEvent from 'src/models/enums/EEvent'

export default {
  albums: [(await import('./05_28_RTF_51/Vorbereitungen')).default, (await import('./05_28_RTF_51/Start_Ziel')).default, (await import('./05_28_RTF_51/K1')).default, await import('./05_28_RTF_51/K6')).default],
  category: EEvent.RTF,
  location: 'Rösrath-Forsbach',
  time: {
    name: '51. Forsbach-Tour',
    start: new Date('2023-05-28'),
  },
  titleImageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2023/05_28_RTF_51/K6/BILD_06.jpg.avif'),
  youtubeVideoIds: ['aVYX0Zm8jPY', '0gT6KDOLeCA', 'rvlBWrDjnL0'],
}
