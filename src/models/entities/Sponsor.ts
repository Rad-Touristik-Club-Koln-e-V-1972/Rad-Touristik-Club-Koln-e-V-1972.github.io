import AEntity from 'src/models/entities/AEntity'

export default class Sponsor extends AEntity {
    imageUrl: URL | null = null
    text: string | null = null
    url: URL | null = null
}
