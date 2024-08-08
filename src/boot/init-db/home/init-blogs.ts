import type { Pinia } from 'pinia'
import { useRepo } from 'pinia-orm'
import BlogEntry from 'src/models/entities/home/BlogEntry'

export default async (store: Pinia) => useRepo(BlogEntry, store).save([...(await import('./blog/2022')).default, ...(await import('./blog/2023')).default, ...(await import('./blog/2024')).default])
