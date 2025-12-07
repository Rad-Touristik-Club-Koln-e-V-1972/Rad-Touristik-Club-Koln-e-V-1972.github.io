import AEntity from 'src/models/entities/AEntity'

export default class Donation extends AEntity {
  icon?: string
  imageUrl?: URL
  text?: string
  title!: string
  url?: URL
}
