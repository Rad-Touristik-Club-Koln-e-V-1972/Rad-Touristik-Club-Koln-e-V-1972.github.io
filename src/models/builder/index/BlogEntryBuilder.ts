import ABuilder from '~/models/builder/ABuilder'
import AEntity from '~/models/entities/AEntity'
import BlogEntry from '~/models/entities/index/BlogEntry'

export default class BlogEntryBuilder extends ABuilder<BlogEntry> {
    // TODO WORKAROUND replace setter with "accessor" after "@typescript-eslint/parser" "v5.43.1" got released.
    //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
    private albumIDs!: string[] | Record<string, string>
    private end?: Date
    private start!: Date
    private text!: string
    private title!: string

    build() {
        // TODO WORKAROUND replace "as" by "satisfies" after "@typescript-eslint/parser" "v5.43.1" got released.
        //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
        return Object.assign(
            {
                albumIDs: this.albumIDs ? this.createAlbumIDs(this.albumIDs) : {},
                end: this.end,
                start: this.start,
                text: this.text,
                title: this.title,
            },
            new AEntity(this.id)
        ) as BlogEntry
    }

    setAlbumIDs(value: string[] | Record<string, string>): BlogEntryBuilder {
        this.albumIDs = value

        return this
    }

    setDate(start: string, end?: string): BlogEntryBuilder {
        this.start = new Date(start)
        this.end = end ? new Date(end) : undefined

        return this
    }

    setText(value: string): BlogEntryBuilder {
        this.text = value

        return this
    }

    setTitle(value: string): BlogEntryBuilder {
        this.title = value

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
