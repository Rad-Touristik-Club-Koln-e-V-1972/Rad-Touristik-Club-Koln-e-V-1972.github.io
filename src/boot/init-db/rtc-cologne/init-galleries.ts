import type { Pinia } from 'pinia'
import { useRepo } from 'pinia-orm'
import Gallery from 'src/models/entities/rtc-cologne/gallery/Gallery'

export default async (store: Pinia) =>
  useRepo(Gallery, store).save([
    ...(await import('./gallery/2009/Gallery')).default,
    ...(await import('./gallery/2010/Gallery')).default,
    ...(await import('./gallery/2011/Gallery')).default,
    ...(await import('./gallery/2012/Gallery')).default,
    ...(await import('./gallery/2013/Gallery')).default,
    ...(await import('./gallery/2014/Gallery')).default,
    ...(await import('./gallery/2015/Gallery')).default,
    ...(await import('./gallery/2016/Gallery')).default,
    ...(await import('./gallery/2017/Gallery')).default,
    ...(await import('./gallery/2018/Gallery')).default,
    ...(await import('./gallery/2019/Gallery')).default,
    ...(await import('./gallery/2020/Gallery')).default,
    ...(await import('./gallery/2021/Gallery')).default,
    ...(await import('./gallery/2022/Gallery')).default,
    (await import('./gallery/2023/01_01_Januarausfahrt')).default,
  ])
