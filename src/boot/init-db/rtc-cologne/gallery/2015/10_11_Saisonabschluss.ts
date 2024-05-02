import EEvent from 'src/models/enums/EEvent'

export default {
  albums: [
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-001.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-002.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-003.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-004.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-005.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-006.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-007.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-008.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-009.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-010.jpg.avif') },
    { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-011.jpg.avif') },
  ],
  category: EEvent.Veranstaltung,
  location: 'Köln',
  time: {
    name: 'Saisonabschluss',
    start: new Date('2015-10-11'),
  },
  titleImageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2015/10_11_Saisonabschluss/rtc-151011-saisonabschluss-008.jpg.avif'),
}
