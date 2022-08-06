import TourBuilder from '~/models/builder/events/TourBuilder'
import GalleryEntry from '~/models/entities/about-us/gallery/GalleryEntry'
import Control from '~/models/entities/events/tours/Control'
import Permanent from '~/models/entities/events/tours/Permanent'
import EProfile from '~/models/enums/events/tours/EProfile'

export default class PermanentBuilder extends TourBuilder {
    protected readonly value = new Permanent()

    controls(...value: Control[]): PermanentBuilder {
        super.controls(...value)

        return this
    }

    height(value: number): PermanentBuilder {
        this.value.height = value

        return this
    }

    images(...value: GalleryEntry[]): PermanentBuilder {
        super.images(...value)

        return this
    }

    lastChange(value: string): PermanentBuilder {
        super.lastChange(value)

        return this
    }

    length(value: number): PermanentBuilder {
        this.value.length = value

        return this
    }

    profile(value: EProfile): PermanentBuilder {
        this.value.profile = value

        return this
    }

    text(value: string): PermanentBuilder {
        super.text(value)

        return this
    }

    title(value: string): PermanentBuilder {
        super.title(value)

        return this
    }

    urls(value: Record<string, URL>): PermanentBuilder {
        super.urls(value)

        return this
    }

    build(): Permanent {
        return this.value
    }
}
