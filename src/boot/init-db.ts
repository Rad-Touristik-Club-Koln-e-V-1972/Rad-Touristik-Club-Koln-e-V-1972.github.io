import { boot } from 'quasar/wrappers'

// TODO WORKAROUND FOR https://github.com/quasarframework/quasar/issues/11921
/* eslint-disable @typescript-eslint/no-unsafe-argument */
// @ts-expect-error See https://github.com/quasarframework/quasar/issues/11921
export default boot(async ({ store }) => {
  ;(await import('./init-db/init-fee-groups')).default(store)
  await (await import('./init-db/init-navigation')).default(store)
  ;(await import('./init-db/init-sponsors')).default(store)
  await (await import('./init-db/events/init-calendar')).default(store)
  ;(await import('./init-db/events/init-suggestions')).default(store)
  ;(await import('./init-db/events/init-training')).default(store)
  ;(await import('./init-db/events/tours/init-events')).default(store)
  ;(await import('./init-db/events/tours/init-permanents')).default(store)
  await (await import('./init-db/home/init-blogs')).default(store)
  ;(await import('./init-db/home/init-news')).default(store)
  ;(await import('./init-db/home/init-slideshow')).default(store)
  ;(await import('./init-db/rtc-cologne/init-contacts')).default(store)
  await (await import('./init-db/rtc-cologne/init-galleries')).default(store)
  await (await import('./init-db/rtc-cologne/init-guestbooks')).default(store)
  ;(await import('./init-db/rtc-cologne/init-press-reports')).default(store)
})
