import ABuilder from '~/models/builder/ABuilder'
import PopupBuilder from '~/models/builder/PopupBuilder'
import Tour from '~/models/entities/events/Tour'
import Control from '~/models/entities/events/tours/Control'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'
import EEvent from '~/models/enums/EEvent'

export default class TourBuilder<T extends Tour> extends ABuilder {
    protected tour = new Tour()

    build() {
        return Object.assign(this.tour, super.build()) as T
    }

    setActive(value: boolean): TourBuilder<T> {
        this.tour.active = value

        return this
    }

    setCategory(value: EEvent): TourBuilder<T> {
        this.tour.category = value

        return this
    }

    setControls(...value: Control[]): TourBuilder<T> {
        this.tour.controls = value

        return this
    }

    setImages(...value: GalleryEntry[]): TourBuilder<T> {
        this.tour.images = value

        return this
    }

    setLastChange(value: string): TourBuilder<T> {
        this.tour.lastChange = new Date(value)

        return this
    }

    setLocation(value: Control): TourBuilder<T> {
        this.tour.location = value

        return this
    }

    setPopup(text: string, title: string): TourBuilder<T> {
        this.tour.popup = new PopupBuilder().setId('04ad6a7c-7fff-4224-bdb6-b52fb64f1785').setText(text).setTitle(title).build()

        return this
    }

    setText(value: string): TourBuilder<T> {
        this.tour.text = value

        return this
    }

    setTitle(value: string): TourBuilder<T> {
        this.tour.title = value

        return this
    }

    setUrls(value: Record<string, URL>): TourBuilder<T> {
        this.tour.urls = value

        return this
    }
}
