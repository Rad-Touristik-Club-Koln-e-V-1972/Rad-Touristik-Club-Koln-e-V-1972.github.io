import AEntity from 'src/models/entities/AEntity'

export default class Donation extends AEntity {
  imageUrl?: URL
  text?: string
  title!: string
  url?: URL
}
