import AEntity from 'src/models/entities/AEntity'

export default class Contact extends AEntity {
  eMail!: string
  imageUrl!: URL
  name!: string
  position!: string
}
