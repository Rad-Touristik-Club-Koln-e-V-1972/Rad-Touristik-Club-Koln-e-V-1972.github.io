import {
  mdiAccountMultiplePlus,
  mdiBikeFast,
  mdiCalendarAlert,
  mdiCalendarClockOutline,
  mdiCurrencyEur,
  mdiDomain,
  mdiGoKartTrack,
  mdiHome,
  mdiHumanCane,
  mdiHumanGreetingProximity,
  mdiHumanMaleBoard,
  mdiHumanMaleFemaleChild,
  mdiImageMultiple,
  mdiInformationOutline,
  mdiMessageDraw,
  mdiTimelineClockOutline,
  mdiWeatherPartlyRainy,
  mdiWeatherSunny,
  mdiWeatherWindy,
  mdiWeb,
} from '@quasar/extras/mdi-v7'

export default [
  {
    color: 'primary',
    icon: mdiAccountMultiplePlus,
    title: 'Mitgliedschaft beantragen',
    to: 'membership-registration',
  },
  {
    icon: mdiHome,
    title: 'Startseite',
    to: 'home',
  },
  {
    icon: mdiBikeFast,
    navigations: [
      {
        icon: mdiCalendarClockOutline,
        title: 'Vereinskalender',
        to: 'events-calendar',
      },
      {
        navigations: [
          {
            icon: mdiCalendarAlert,
            title: 'RTF / Forsbach-Tour',
            to: 'events-tours-rtfs',
          },
          {
            icon: mdiHumanMaleFemaleChild,
            title: 'Family Tour',
            to: 'events-tours-rtfs-family',
          },
          {
            icon: mdiBikeFast,
            title: 'Training',
            to: 'events-training',
          },
          {
            icon: mdiGoKartTrack,
            title: 'Permanente',
            to: 'events-tours-permanents',
          },
        ],
        title: 'RTF, Training & Permanente',
      },
      {
        icon: mdiHumanMaleBoard,
        title: 'RTF-Empfehlungen außerhalb NRWs',
        to: 'events-tours-rtfs-suggestions',
      },
      {
        navigations: [
          {
            icon: mdiWeb,
            url: new URL('https://www.radsport-events.de/termine/rennrad-events'),
            target: '_blank',
            title: 'Empfohlene Radsport Events',
          },
          {
            icon: mdiWeb,
            url: new URL('https://breitensport.rad-net.de/breitensportkalender'),
            target: '_blank',
            title: 'Breitensportkalender BDR',
          },
        ],
        title: 'Breitensportkalender & andere Events',
      },
    ],
    title: 'Veranstaltungen & Termine',
  },
  {
    icon: mdiWeatherSunny,
    navigations: [
      {
        icon: mdiWeatherPartlyRainy,
        url: new URL('https://www.koeln.de/wetter/regenradar/'),
        target: '_blank',
        title: 'Wetter live in Köln + Regenradar',
      },
      {
        icon: mdiWeatherWindy,
        url: new URL('https://www.windy.com/station?50.866,7.143,8'),
        target: '_blank',
        title: 'Windradar in Köln',
      },
    ],
    title: 'Wetter',
  },
  {
    icon: mdiDomain,
    navigations: [
      {
        icon: mdiInformationOutline,
        title: 'Über uns',
        to: 'rtc-cologne-about-us',
      },
      {
        icon: mdiTimelineClockOutline,
        title: 'Unsere Geschichte',
        to: 'rtc-cologne-our-story',
      },
      {
        icon: mdiTimelineClockOutline,
        title: 'Unsere Geschichte',
        to: 'rtc-cologne-our-story',
      },
      {
        icon: mdiImageMultiple,
        title: 'Galerien',
        to: 'rtc-cologne-galleries',
      },
      {
        icon: mdiMessageDraw,
        title: 'Gästebuch',
        to: 'rtc-cologne-guestbook',
      },
      // TODO Offline bis Genehmigung eingeholt wurde
      /* {
       icon: mdiNewspaperVariantMultiple,
       title: 'Presseberichte',
       to: 'rtc-cologne-press-reports',
     },*/
      {
        icon: mdiHumanGreetingProximity,
        title: 'Ansprechpartner',
        to: 'rtc-cologne-contacts',
      },
      {
        icon: mdiHumanCane,
        url: new URL('https://old.rtc-koeln.de'),
        target: '_blank',
        title: 'Alte Website',
      },
    ],
    title: 'Der RTC Köln',
  },
  {
    icon: mdiCurrencyEur,
    title: 'Sponsoren',
    to: 'sponsors',
  },
]
