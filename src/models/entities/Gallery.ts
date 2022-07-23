import EEvent from '~/models/enums/EEvent'
import Entry from '~/models/entities/gallery/Entry'

export default class Gallery {
    category = EEvent.RTC
    dateFrom = new Date()
    dateTo?: Date
    description = ''
    images: Entry[] = []
    location = ''
    title = ''
    titleImageUrl = ''
    youtubeVideoIds: string[] = []
}
