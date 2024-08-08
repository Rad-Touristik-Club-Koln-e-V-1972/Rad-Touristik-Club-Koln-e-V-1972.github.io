import EEvent from 'src/models/enums/EEvent'

export default {
  albums: [
    {
      entries: [{ imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2009/07_01_RTF_37_Pressebericht_Koelner_Wochenspiegel.jpeg.avif') }],
    },
  ],
  category: EEvent.RTF,
  location: 'Köln',
  time: {
    name: 'Pressebericht zur 37. Forsbach-Tour',
    start: new Date('2009-07-01'),
  },
  titleImageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2009/07_01_RTF_37_Pressebericht_Koelner_Wochenspiegel.jpeg.avif'),
}
