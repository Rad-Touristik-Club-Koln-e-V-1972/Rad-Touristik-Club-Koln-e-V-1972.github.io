import ABuilder from 'src/models/builder/ABuilder'
import NewsEntry from 'src/models/entities/index/NewsEntry'
import GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'

export default class NewsEntryBuilder extends ABuilder {
    private entity = new NewsEntry()

    build = () => Object.assign(this.entity, super.build())

    setImage(value: GalleryEntry): this {
        this.entity.image = value

        return this
    }

    setText(value: string): this {
        this.entity.text = value.replaceAll('\n', '<br>')

        return this
    }
}
