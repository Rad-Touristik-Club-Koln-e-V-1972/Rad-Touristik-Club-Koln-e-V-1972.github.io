import ABuilder from 'src/models/builder/ABuilder'
import BlogEntry from 'src/models/entities/index/BlogEntry'

export default class BlogEntryBuilder extends ABuilder {
    private entity = new BlogEntry()

    build = () => Object.assign(this.entity, super.build())

    setAlbumIDs = (value: string[] | Record<string, string>): this => {
        this.entity.albumIDs = this.createAlbumIDs(value)

        return this
    }

    setDate = (start: string, end?: string): this => {
        if (end) this.entity.end = new Date(end)
        this.entity.start = new Date(start)

        return this
    }

    setText = (value: string): this => {
        this.entity.text = value.replaceAll('\n', '<br>')

        return this
    }

    setTitle = (value: string): this => {
        this.entity.title = value

        return this
    }

    private createAlbumIDs = (albumIDs: string[] | Record<string, string>) =>
        albumIDs instanceof Array
            ? albumIDs.reduce<Record<string, string>>((map, it) => {
                  map[it] = ''
                  return map
              }, {})
            : albumIDs
}
