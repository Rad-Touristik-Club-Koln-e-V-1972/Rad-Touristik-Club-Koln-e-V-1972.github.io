import GalleryEntry from '~/models/entities/about-us/gallery/GalleryEntry'
import Tour from '~/models/entities/events/Tour'
import Control from '~/models/entities/events/tours/Control'
import EEvent from '~/models/enums/EEvent'

export default class TourBuilder {
    protected readonly value = new Tour()

    category(value: EEvent): TourBuilder {
        this.value.category = value

        return this
    }

    controls(...value: Control[]): TourBuilder {
        this.value.controls = value

        return this
    }

    images(...value: GalleryEntry[]): TourBuilder {
        this.value.images = value

        return this
    }

    lastChange(value: string): TourBuilder {
        this.value.lastChange = new Date(value)

        return this
    }

    text(value: string): TourBuilder {
        this.value.text = value

        return this
    }

    title(value: string): TourBuilder {
        this.value.title = value

        return this
    }

    urls(value: Record<string, URL>): TourBuilder {
        this.value.urls = value

        return this
    }

    build(): Tour {
        return this.value
    }
}
