export default [
  {
    children: [
      { path: '/', redirect: { name: 'events-tours-rtfs' } },
      { component: () => import('pages/PHome.vue'), name: 'home', path: 'home' },
      { component: () => import('pages/PImprint.vue'), name: 'imprint', path: 'imprint' },
      {
        children: [
          { component: () => import('pages/events/PCalendar.vue'), name: 'events-calendar', path: 'calendar' },
          {
            children: [
              {
                component: () => import('pages/events/tours/PPermanents.vue'),
                name: 'events-tours-permanents',
                path: 'permanents',
              },
              {
                children: [
                  { component: () => import('pages/events/tours/rtfs/PIndex.vue'), name: 'events-tours-rtfs', path: '' },
                  { component: () => import('pages/events/tours/rtfs/PSuggestions.vue'), name: 'events-tours-rtfs-suggestions', path: 'suggestions' },
                ],
                path: 'rtfs',
              },
            ],
            path: 'tours',
          },
          { component: () => import('pages/events/PTraining.vue'), name: 'events-training', path: 'training' },
        ],
        path: 'events',
      },
      {
        children: [
          { component: () => import('pages/rtc-cologne/PAboutUs.vue'), name: 'rtc-cologne-about-us', path: 'about-us' },
          { component: () => import('pages/rtc-cologne/PContacts.vue'), name: 'rtc-cologne-contacts', path: 'contacts' },
          { component: () => import('pages/rtc-cologne/galleries/PIndex.vue'), name: 'rtc-cologne-galleries', path: 'galleries' },
          { component: () => import('pages/rtc-cologne/galleries/PAlbum.vue'), name: 'rtc-cologne-galleries-album', path: 'galleries/:id/:album', props: true },
          { component: () => import('pages/rtc-cologne/PGuestbook.vue'), name: 'rtc-cologne-guestbook', path: 'guestbook' },
          { component: () => import('pages/rtc-cologne/POurStory.vue'), name: 'rtc-cologne-our-story', path: 'our-story' },
          { component: () => import('pages/rtc-cologne/PPressReports.vue'), name: 'rtc-cologne-press-reports', path: 'press-reports' },
        ],
        path: 'rtc-cologne',
      },
      { component: () => import('pages/PMembershipRegistration.vue'), name: 'membership-registration', path: 'membership-registration' },
      { component: () => import('pages/PPrivacyAndSecurity.vue'), name: 'privacy-and-security', path: 'privacy-and-security' },
      { component: () => import('pages/PSponsors.vue'), name: 'sponsors', path: 'sponsors' },
    ],
    component: () => import('layouts/MainLayout.vue'),
    path: '/',
  },
  {
    component: () => import('pages/error/PError500.vue'),
    path: '/error500',
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    component: () => import('pages/error/PError404.vue'),
    path: '/:catchAll(.*)*',
  },
]
