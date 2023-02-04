import ABuilder from '~/models/builder/ABuilder'
import AEntity from '~/models/entities/AEntity'
import PopupBuilder from '~/models/builder/PopupBuilder'
import EEvent from '~/models/enums/EEvent'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'
import Tour from '~/models/entities/events/Tour'
import Control from '~/models/entities/events/tours/Control'
import Popup from '~/models/entities/Popup'

export default class TourBuilder<T extends Tour> extends ABuilder<T> {
    // TODO WORKAROUND replace setter with "accessor" after "@typescript-eslint/parser" "v5.43.1" got released.
    //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
    protected active = true
    protected category = EEvent.Vereinsfahrt
    protected controls!: Control[]
    protected images!: GalleryEntry[]
    protected lastChange!: Date
    protected popup?: Popup
    protected text!: string
    protected title!: string
    protected urls!: Record<string, URL>

    build() {
        // TODO WORKAROUND replace "as" by "satisfies" after "@typescript-eslint/parser" "v5.43.1" got released.
        //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
        return Object.assign(
            {
                active: this.active,
                category: this.category,
                controls: this.controls ?? [],
                images: this.images ?? [],
                lastChange: this.lastChange,
                popup: this.popup,
                text: this.text,
                title: this.title,
                urls: this.urls ?? {},
            },
            new AEntity(this.id)
        ) as T
    }

    setActive(value: boolean): TourBuilder<T> {
        this.active = value

        return this
    }

    setCategory(value: EEvent): TourBuilder<T> {
        this.category = value

        return this
    }

    setControls(...value: Control[]): TourBuilder<T> {
        this.controls = value

        return this
    }

    setImages(...value: GalleryEntry[]): TourBuilder<T> {
        this.images = value

        return this
    }

    setLastChange(value: string): TourBuilder<T> {
        this.lastChange = new Date(value)

        return this
    }

    setPopup(text: string, title: string): TourBuilder<T> {
        this.popup = new PopupBuilder().setText(text).setTitle(title).build()

        return this
    }

    setText(value: string): TourBuilder<T> {
        this.text = value

        return this
    }

    setTitle(value: string): TourBuilder<T> {
        this.title = value

        return this
    }

    setUrls(value: Record<string, URL>): TourBuilder<T> {
        this.urls = value

        return this
    }
}
