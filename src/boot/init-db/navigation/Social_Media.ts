import { mdiFacebook, mdiGithub, mdiGoogle, mdiInstagram, mdiYoutube } from '@quasar/extras/mdi-v7'
import ENavigation from 'src/models/enums/ENavigation'

export default [
  {
    color: 'indigo',
    icon: mdiFacebook,
    target: '_blank',
    type: ENavigation.Social_Media,
    url: new URL('https://www.facebook.com/RTC.Koeln'),
  },
  {
    color: 'red lighten-2',
    icon: mdiInstagram,
    target: '_blank',
    type: ENavigation.Social_Media,
    url: new URL('https://www.instagram.com/rtckoeln'),
  },
  {
    color: 'red lighten-2',
    icon: mdiGoogle,
    target: '_blank',
    type: ENavigation.Social_Media,
    url: new URL('https://www.google.de/search?q=RTC+Köln+e.V.+1972'),
  },
  {
    color: 'red lighten-2',
    icon: mdiYoutube,
    target: '_blank',
    type: ENavigation.Social_Media,
    url: new URL('https://www.youtube.com/channel/UCC5YG6J73hWEdPoMbdjGG1w'),
  },
  {
    icon: mdiGithub,
    target: '_blank',
    type: ENavigation.Social_Media,
    url: new URL('https://github.com/Rad-Touristik-Club-Koln-e-V-1972'),
  },
]
