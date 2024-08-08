import { Pinia } from 'pinia'
import { useRepo } from 'pinia-orm'
import Suggestion from 'src/models/entities/events/tours/Suggestion'

export default (store: Pinia) =>
  useRepo(Suggestion, store).save([
    {
      title: 'Bimbach',
      url: new URL('https://rhoen-radmarathon.de'),
    },
    {
      title: 'St. Vith',
      url: new URL('https://www.rsv.be/3laenderfahrt'),
    },
    {
      title: 'Ochtendung',
      url: new URL('https://djk-ochtendung.de/94.html'),
    },
    {
      title: 'Hattersheim',
      url: new URL('https://rc-hattersheim.de'),
    },
    {
      title: 'Bodenseerundfahrt',
      url: new URL('https://bodensee-radmarathon.ch'),
    },
    {
      title: 'Drei-Länder-Giro',
      url: new URL('https://dreilaendergiro.at/de'),
    },
    {
      title: 'Wendelsteinrundfahrt',
      url: new URL('https://wendelsteinrundfahrt.de'),
    },
    {
      title: 'Schrecksbach',
      url: new URL('https://www.radsport-schrecksbach.de'),
    },
    {
      title: 'Ötztalmarathon (der krönende Abschluss)',
      url: new URL('https://oetztaler-radmarathon.com/de/home.html'),
    },
  ])
