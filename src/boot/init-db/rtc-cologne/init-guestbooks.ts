import type { Pinia } from 'pinia'
import { useRepo } from 'pinia-orm'
import GuestbookEntry from 'src/models/entities/rtc-cologne/guestbook/GuestbookEntry'

export default async (store: Pinia) =>
  useRepo(GuestbookEntry, store).save([
    ...(await import('./guestbook/2012')).default,
    ...(await import('./guestbook/2014')).default,
    ...(await import('./guestbook/2015')).default,
    ...(await import('./guestbook/2016')).default,
    ...(await import('./guestbook/2017')).default,
    ...(await import('./guestbook/2018')).default,
    ...(await import('./guestbook/2019')).default,
    ...(await import('./guestbook/2023')).default,
  ])
