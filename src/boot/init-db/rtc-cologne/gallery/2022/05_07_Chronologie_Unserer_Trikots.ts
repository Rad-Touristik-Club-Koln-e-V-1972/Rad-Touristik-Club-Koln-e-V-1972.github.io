import EEvent from 'src/models/enums/EEvent'

export default {
  albums: [
    {
      entries: [{ imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2010/01_27/Rueckblick.jpg.avif') }, { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2010/09_05_Hennef_news.gif.avif') }],
    },
  ],
  category: EEvent.Vereinsfahrt,
  location: 'Köln',
  time: {
    name: 'Chronologie unserer Trikots',
    start: new Date('2022-05-07'),
  },
  titleImageUrl: new URL('https://i.ytimg.com/vi/GNpmt6Y_ymU/hqdefault.jpg.avif'),
  youtubeVideoIds: ['GNpmt6Y_ymU'],
}
