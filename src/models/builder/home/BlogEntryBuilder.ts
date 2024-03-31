import ABuilder from 'src/models/builder/ABuilder'
import BlogEntry from 'src/models/entities/home/BlogEntry'

export default class BlogEntryBuilder extends ABuilder {
  private blogEntry = new BlogEntry()

  buildBlogEntry = () => Object.assign(this.blogEntry, this.buildAEntity())

  setAlbumIDs = (value: Record<string, string> | string[] | string): this => {
    if (Array.isArray(value))
      this.blogEntry.albumIDs = value.reduce<Record<string, string>>((map, it) => {
        map[it] = ''
        return map
      }, {})
    else if (value.constructor === String) this.blogEntry.albumIDs = { [value]: '' }
    else this.blogEntry.albumIDs = Object.assign(this.blogEntry.albumIDs, value as Record<string, string>)

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
}
