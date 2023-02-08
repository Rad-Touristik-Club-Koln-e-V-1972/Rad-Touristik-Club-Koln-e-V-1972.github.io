import ABuilder from '~/models/builder/ABuilder'
import BlogEntry from '~/models/entities/index/BlogEntry'

export default class BlogEntryBuilder extends ABuilder<BlogEntry> {
    private entity = new BlogEntry()

    build() {
        return Object.assign(this.entity, super.aEntity)
    }

    setAlbumIDs(value: string[] | Record<string, string>): BlogEntryBuilder {
        this.entity.albumIDs = this.createAlbumIDs(value)

        return this
    }

    setDate(start: string, end?: string): BlogEntryBuilder {
        if (end) this.entity.end = new Date(end)
        this.entity.start = new Date(start)

        return this
    }

    setText(value: string): BlogEntryBuilder {
        this.entity.text = value

        return this
    }

    setTitle(value: string): BlogEntryBuilder {
        this.entity.title = value

        return this
    }

    private createAlbumIDs = (albumIDs: string[] | Record<string, string>) =>
        albumIDs instanceof Array
            ? albumIDs.reduce((map, it) => {
                  map[it] = ''
                  return map
              }, {} as Record<string, string>)
            : albumIDs
}
