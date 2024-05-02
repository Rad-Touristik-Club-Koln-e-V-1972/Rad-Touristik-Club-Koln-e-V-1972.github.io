export default {
  albums: [
    (await import('./04_08_12_11/Intro')).default,
    (await import('./04_08_12_11/08_04_Jubiläumsfahrt')).default,
    (await import('./04_08_12_11/14_04_GWR_Düsseldorf')).default,
    (await import('./04_08_12_11/11_12_RTC_Weihnachtsfeier')).default,
  ],
  location: 'Köln & Düsseldorf',
  time: {
    end: new Date('2012-12-11'),
    name: 'Rückblick',
    start: new Date('2012-04-08'),
  },
  titleImageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2012/08_15_Rueckblick.gif.avif'),
}
