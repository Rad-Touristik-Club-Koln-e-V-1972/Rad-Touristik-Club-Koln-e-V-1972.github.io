import ABuilder from 'src/models/builder/ABuilder'
import Gallery from 'src/models/entities/rtc-cologne/gallery/Gallery'
import EEvent from 'src/models/enums/EEvent'
import GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

export default class GalleryBuilder extends ABuilder {
    private gallery = new Gallery()

    buildGallery = () => Object.assign(this.gallery, this.buildAEntity())

    setCategory = (value: EEvent): this => {
        this.gallery.category = value

        return this
    }

    setDate = (start: string, end?: string): this => {
        if (end) this.gallery.end = new Date(end)
        this.gallery.start = new Date(start)

        return this
    }

    setDescription = (value: string): this => {
        this.gallery.description = value

        return this
    }

    setImages = (value: Record<string, GalleryEntry[]> | GalleryEntry[] | GalleryEntry): this => {
        if (value instanceof Array) this.gallery.images = Object.assign(this.gallery.images, { 'Ohne Album': value })
        else if (value.constructor === GalleryEntry) this.gallery.images = Object.assign(this.gallery.images, { 'Ohne Album': [value] })
        else this.gallery.images = Object.assign(this.gallery.images, value as Record<string, GalleryEntry[]>)

        return this
    }

    setLocation = (value: string): this => {
        this.gallery.location = value

        return this
    }

    setTitle = (value: string): this => {
        this.gallery.title = value

        return this
    }

    setTitleImageUrl = (value: string): this => {
        this.gallery.titleImageUrl = new URL(`https://${value}`)

        return this
    }

    setYoutubeVideoIds = (...value: string[]): this => {
        this.gallery.youtubeVideoIds = value

        return this
    }
}
