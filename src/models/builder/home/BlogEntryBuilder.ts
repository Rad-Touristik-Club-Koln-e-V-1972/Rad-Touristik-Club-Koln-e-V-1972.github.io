import ABuilder from 'src/models/builder/ABuilder'
import BlogEntry from 'src/models/entities/home/BlogEntry'

export default class BlogEntryBuilder extends ABuilder {
    private blogEntry = new BlogEntry()

    buildBlogEntry = () => Object.assign(this.blogEntry, this.buildAEntity())

    setAlbumIDs = (value: string[] | Record<string, string>): this => {
        this.blogEntry.albumIDs = this.createAlbumIDs(value)

        return this
    }

    setDate = (start: string, end?: string): this => {
        if (end) this.blogEntry.end = new Date(end)
        this.blogEntry.start = new Date(start)

        return this
    }

    setText = (value: string): this => {
        this.blogEntry.text = value.replaceAll('\n', '<br>')

        return this
    }

    setTitle = (value: string): this => {
        this.blogEntry.title = value

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
