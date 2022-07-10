import EEvent from '@/models/enums/EEvent'
import Entry from '@/models/entities/gallery/Entry'

export default class Gallery {
    category = EEvent.RTC
    description = ''
    images = [] as Entry[]
    subtitle = ''
    title = ''
    titleImageUrl = ''
    youtubeVideoIds = [] as string[]
}
