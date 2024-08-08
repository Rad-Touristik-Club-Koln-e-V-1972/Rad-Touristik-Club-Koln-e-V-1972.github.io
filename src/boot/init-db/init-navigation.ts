import type { Pinia } from 'pinia'
import { useRepo } from 'pinia-orm'
import Navigation from 'src/models/entities/navigation/Navigation'
// TODO repo experiment
// import MyRepository from './MyRepository'

export default async (store: Pinia) => {
  // TODO repo experiment
  /*  useRepo(MyRepository<Navigation>, store).saveType([
    {
      galleryEntry: { imageUrl: new URL('https://content.rtc-koeln.de/pages/sponsor/VolksbankKölnBonneG_RGB.svg') },
      url: new URL('https://www.volksbank-koeln-bonn.de'),
    },
  ])*/
  return useRepo(Navigation, store).save([...(await import('./navigation/Navigation')).default, ...(await import('./navigation/Social_Media')).default])
}
