import type { Pinia } from 'pinia'
import { useRepo } from 'pinia-orm'
import Navigation from 'src/models/entities/navigation/Navigation'

export default async (store: Pinia) => useRepo(Navigation, store).save([...(await import('./navigation/Navigation')).default, ...(await import('./navigation/Social_Media')).default])
