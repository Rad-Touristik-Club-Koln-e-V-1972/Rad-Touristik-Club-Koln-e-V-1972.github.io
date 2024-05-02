import type { Pinia } from 'pinia'
import { useRepo } from 'pinia-orm'
import Sponsor from 'src/models/entities/Sponsor'

export default (store: Pinia) =>
  useRepo(Sponsor, store).save([
    {
      galleryEntry: { imageUrl: new URL('https://content.rtc-koeln.de/pages/sponsor/Alpecin.svg') },
      url: new URL('https://www.alpecin.com/de-de/'),
    },
    {
      galleryEntry: { imageUrl: new URL('https://content.rtc-koeln.de/pages/sponsor/ConneX.svg') },
      url: new URL('https://www.connexchain.com'),
    },
    {
      galleryEntry: { imageUrl: new URL('https://content.rtc-koeln.de/pages/sponsor/FlughafenKölnBonnGmbH.svg') },
      url: new URL('https://www.koeln-bonn-airport.de'),
    },
    {
      galleryEntry: { imageUrl: new URL('https://content.rtc-koeln.de/pages/sponsor/Garmin.svg') },
      url: new URL('https://www.garmin.com'),
    },
    {
      galleryEntry: { imageUrl: new URL('https://content.rtc-koeln.de/pages/sponsor/Ineos.webp') },
      url: new URL('https://www.ineos.com/sports/cycling/'),
    },
    {
      galleryEntry: { imageUrl: new URL('https://content.rtc-koeln.de/pages/sponsor/InnoBike.svg') },
      url: new URL('https://www.inno-bike.com'),
    },
    {
      galleryEntry: { imageUrl: new URL('https://content.rtc-koeln.de/pages/sponsor/Krombacher.svg') },
      url: new URL('https://www.krombacher.de'),
    },
    {
      galleryEntry: { imageUrl: new URL('https://content.rtc-koeln.de/pages/sponsor/RheinEnergie.svg') },
      url: new URL('https://www.rheinenergie.com'),
    },
    {
      galleryEntry: { imageUrl: new URL('https://content.rtc-koeln.de/pages/sponsor/RoseBikes.svg') },
      url: new URL('https://www.rosebikes.de'),
    },
    {
      galleryEntry: { imageUrl: new URL('https://content.rtc-koeln.de/pages/sponsor/Sebamed.jpg') },
      url: new URL('https://shop.sebamed.de'),
    },
    {
      galleryEntry: { imageUrl: new URL('https://content.rtc-koeln.de/pages/sponsor/VolksbankKölnBonneG_RGB.svg') },
      url: new URL('https://www.volksbank-koeln-bonn.de'),
    },
  ])
