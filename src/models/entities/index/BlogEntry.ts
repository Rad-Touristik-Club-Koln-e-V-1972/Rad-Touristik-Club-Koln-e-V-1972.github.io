import AEntity from '~/models/entities/AEntity'

export default class BlogEntry extends AEntity {
    date = new Date()
    text = ''
    title = ''
}
