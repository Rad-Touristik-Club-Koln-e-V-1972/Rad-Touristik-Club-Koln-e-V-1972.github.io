import EEvent from 'src/models/enums/EEvent'

export default {
  albums: [
    {
      entries: [
        { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/08_27_RTF_GEW_RheinEnergie/image4.jpeg.avif') },
        { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/08_27_RTF_GEW_RheinEnergie/image5.jpeg.avif') },
        { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/08_27_RTF_GEW_RheinEnergie/image6.jpeg.avif') },
        { imageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/08_27_RTF_GEW_RheinEnergie/image7.jpeg.avif') },
      ],
    },
  ],
  category: EEvent.Vereinsfahrt,
  location: 'GEW RheinEnergie',
  time: {
    name: 'RTF - GEW RheinEnergie',
    start: new Date('2022-08-27'),
  },
  titleImageUrl: new URL('https://content.rtc-koeln.de/pages/gallery/2022/08_27_RTF_GEW_RheinEnergie/image4.jpeg.avif'),
}
