import EEvent from 'src/models/enums/EEvent'

export default {
  albums: [
    (await import('./10_17_CTF_1/Intro')).default,
    (await import('./10_17_CTF_1/25_10_Aufräumarbeiten')).default,
    (await import('./10_17_CTF_1/K1')).default,
    (await import('./10_17_CTF_1/K2')).default,
    (await import('./10_17_CTF_1/K3')).default,
    (await import('./10_17_CTF_1/Start_Ziel')).default,
  ],
  category: EEvent.CTF,
  location: 'Wahnbach',
  time: {
    name: '1. Wahnbach-Tour',
    start: new Date('2015-10-17'),
  },
  titleImageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2015/10_17_CTF_1/rtc-wahnbach-tour-flyer1-2015.jpg.avif'),
}
