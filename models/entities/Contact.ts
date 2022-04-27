export default class Contact {
  description: String
  eMail: String
  imageSrc: String
  name: String
  position: String

  constructor(description: string, eMail: string, imageSrc: string, name: string, position: string) {
    this.description = description
    this.eMail = eMail
    this.imageSrc = imageSrc
    this.name = name
    this.position = position
  }
}
