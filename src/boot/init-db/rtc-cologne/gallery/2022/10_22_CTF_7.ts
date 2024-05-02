import EEvent from 'src/models/enums/EEvent'

export default {
  albums: [
    (await import('./10_22_CTF_7/Intro')).default,
    (await import('./10_22_CTF_7/KA')).default,
    (await import('./10_22_CTF_7/KB')).default,
    (await import('./10_22_CTF_7/Start_Ziel')).default,
    await import('./10_22_CTF_7/Strecke'),
  ],
  category: EEvent.CTF,
  location: 'Wahnbach',
  time: {
    name: '7. Wahnbach-Tour',
    start: new Date('2022-10-22'),
  },
  titleImageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/10_22_CTF_7/Start_Ziel/IMG_1524.JPG.avif'),
}
