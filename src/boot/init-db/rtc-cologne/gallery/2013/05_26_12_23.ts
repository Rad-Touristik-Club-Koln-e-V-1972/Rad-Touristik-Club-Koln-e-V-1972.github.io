export default {
  albums: [(await import('./05_26_12_23/Intro')).default, (await import('./05_26_12_23/26_05_41_Forsbach_Tour')).default, (await import('./05_26_12_23/23_12_RTC_Weihnachtsfeier')).default],
  location: 'Rösrath-Forsbach & Köln',
  time: {
    end: new Date('2013-12-23'),
    name: 'Rückblick',
    start: new Date('2013-05-26'),
  },
  titleImageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2013/07_23_Rueckblick.gif.avif'),
}
