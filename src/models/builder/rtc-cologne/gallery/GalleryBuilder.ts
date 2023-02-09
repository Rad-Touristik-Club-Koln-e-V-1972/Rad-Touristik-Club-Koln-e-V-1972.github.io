import ABuilder from '~/models/builder/ABuilder'
import Gallery from '~/models/entities/rtc-cologne/gallery/Gallery'
import EEvent from '~/models/enums/EEvent'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'

export default class GalleryBuilder extends ABuilder {
    private entity = new Gallery()

    build() {
        return Object.assign(this.entity, super.build())
    }

    setCategory(value: EEvent): GalleryBuilder {
        this.entity.category = value

        return this
    }

    setDate(start: string, end?: string): GalleryBuilder {
        if (end) this.entity.end = new Date(end)
        this.entity.start = new Date(start)

        return this
    }

    setDescription(value: string): GalleryBuilder {
        this.entity.description = value

        return this
    }

    setImages(value: Record<string, GalleryEntry[]> | GalleryEntry[] | GalleryEntry): GalleryBuilder {
        if (value instanceof Array) this.entity.images = { '': value }
        else if (value.constructor === GalleryEntry) this.entity.images = { '': [value] }
        else this.entity.images = value as Record<string, GalleryEntry[]>

        return this
    }

    setLocation(value: string): GalleryBuilder {
        this.entity.location = value

        return this
    }

    setTitle(value: string): GalleryBuilder {
        this.entity.title = value

        return this
    }

    setTitleImageUrl(value: string): GalleryBuilder {
        this.entity.titleImageUrl = new URL(`https://${value}`)

        return this
    }

    setYoutubeVideoIds(...value: string[]): GalleryBuilder {
        this.entity.youtubeVideoIds = value

        return this
    }
}
