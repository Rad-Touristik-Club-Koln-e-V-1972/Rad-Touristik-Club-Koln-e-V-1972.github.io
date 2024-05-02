import { boot } from 'quasar/wrappers'

export default boot(async ({ store }) => {
  ;(await import('./init-db/init-membership-registration')).default(store)
  await (await import('./init-db/init-navigation')).default(store)
  ;(await import('./init-db/init-sponsor')).default(store)
  await (await import('./init-db/rtc-cologne/init-gallery')).default(store)
  await (await import('./init-db/rtc-cologne/init-press-reports')).default(store)
})
