import type { Pinia } from 'pinia'
import { useRepo } from 'pinia-orm'
import CalendarEvent from 'src/models/entities/events/CalendarEvent.ts'

export default async (store: Pinia) => useRepo(CalendarEvent, store).save([...(await import('./calendar/2024')).default])
