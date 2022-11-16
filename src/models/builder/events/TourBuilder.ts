import ABuilder from '~/models/builder/ABuilder'
import PopupBuilder from '~/models/builder/PopupBuilder'
import EEvent from '~/models/enums/EEvent'
import GalleryEntry from '~/models/entities/about-us/gallery/GalleryEntry'
import Tour from '~/models/entities/events/Tour'
import Control from '~/models/entities/events/tours/Control'

export default class TourBuilder<T extends Tour> extends ABuilder<T> {
    constructor(value: T = new Tour() as T) {
        super(value)
    }

    category(value: EEvent): TourBuilder<T> {
        this.value.category = value

        return this
    }

    controls(...value: Control[]): TourBuilder<T> {
        this.value.controls = value

        return this
    }

    images(...value: GalleryEntry[]): TourBuilder<T> {
        this.value.images = value

        return this
    }

    lastChange(value: string): TourBuilder<T> {
        this.value.lastChange = new Date(value)

        return this
    }

    popup(text: string, title: string): TourBuilder<T> {
        this.value.popup = new PopupBuilder().text(text).title(title).build()

        return this
    }

    text(value: string): TourBuilder<T> {
        this.value.text = value

        return this
    }

    title(value: string): TourBuilder<T> {
        this.value.title = value

        return this
    }

    urls(value: Record<string, URL>): TourBuilder<T> {
        this.value.urls = value

        return this
    }
}
