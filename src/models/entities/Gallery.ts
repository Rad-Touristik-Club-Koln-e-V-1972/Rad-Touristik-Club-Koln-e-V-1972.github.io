import AEntity from '~/models/entities/AEntity'
import Entry from '~/models/entities/gallery/Entry'
import EEvent from '~/models/enums/EEvent'

export default class Gallery extends AEntity {
    category = EEvent.RTC
    dateFrom = new Date()
    dateTo?: Date
    description = ''
    images: Record<string, Entry[]> = {}
    location = ''
    title = ''
    titleImageUrl = ''
    youtubeVideoIds: string[] = []
}
