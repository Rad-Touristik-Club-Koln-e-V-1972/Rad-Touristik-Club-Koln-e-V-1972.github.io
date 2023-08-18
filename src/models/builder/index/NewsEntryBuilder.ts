import ABuilder from '~/models/builder/ABuilder'
import NewsEntry from '~/models/entities/index/NewsEntry'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'

export default class NewsEntryBuilder extends ABuilder {
    private entity = new NewsEntry()

    build = () => Object.assign(this.entity, super.build())

    setImage(value: GalleryEntry): this {
        this.entity.image = value

        return this
    }

    setText(value: string): this {
        this.entity.text = value

        return this
    }
}
