import { v4 as uuid } from 'uuid'
import EEvent from '~/models/enums/EEvent'
import Entry from '~/models/entities/gallery/Entry'

export default class Gallery {
    category = EEvent.RTC
    dateFrom = new Date()
    dateTo?: Date
    description = ''
    id = uuid()
    images: Record<string, Entry[]> = {}
    location = ''
    title = ''
    titleImageUrl = ''
    youtubeVideoIds: string[] = []
}
