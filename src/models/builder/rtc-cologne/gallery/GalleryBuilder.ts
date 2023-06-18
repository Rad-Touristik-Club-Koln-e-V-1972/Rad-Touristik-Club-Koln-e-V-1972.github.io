import ABuilder from 'src/models/builder/ABuilder'
import Gallery from 'src/models/entities/rtc-cologne/gallery/Gallery'
import EEvent from 'src/models/enums/EEvent'
import GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

export default class GalleryBuilder extends ABuilder {
    private entity = new Gallery()

    build = () => Object.assign(this.entity, super.build())

    setCategory = (value: EEvent): this => {
        this.entity.category = value

        return this
    }

    setDate = (start: string, end?: string): this => {
        if (end) this.entity.end = new Date(end)
        this.entity.start = new Date(start)

        return this
    }

    setDescription = (value: string): this => {
        this.entity.description = value

        return this
    }

    setImages = (value: Record<string, GalleryEntry[]> | GalleryEntry[] | GalleryEntry): this => {
        if (value instanceof Array) this.entity.images = Object.assign(this.entity.images, { 'Ohne Album': value })
        else if (value.constructor === GalleryEntry) this.entity.images = Object.assign(this.entity.images, { 'Ohne Album': [value] })
        else this.entity.images = Object.assign(this.entity.images, value as Record<string, GalleryEntry[]>)

        return this
    }

    setLocation = (value: string): this => {
        this.entity.location = value

        return this
    }

    setTitle = (value: string): this => {
        this.entity.title = value

        return this
    }

    setTitleImageUrl = (value: string): this => {
        this.entity.titleImageUrl = new URL(`https://${value}`)

        return this
    }

    setYoutubeVideoIds = (...value: string[]): this => {
        this.entity.youtubeVideoIds = value

        return this
    }
}
