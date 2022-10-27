import AEntity from '~/models/entities/AEntity'

export default class BlogEntry extends AEntity {
    albumIDs: Record<string, string> = {}
    end?: Date
    start = new Date()
    text = ''
    title = ''
}
