import ABuilder from 'src/models/builder/ABuilder'
import Donation from 'src/models/entities/Donation'

export default class DonationBuilder extends ABuilder {
  private donation = new Donation()

  buildDonation = () => Object.assign(this.donation, this.buildAEntity())

  setIcon = (value: string): this => {
    this.donation.icon = value

    return this
  }

  setText = (value: string): this => {
    this.donation.text = value.replaceAll('\n', '<br>')

    return this
  }

  setTitle = (value: string): this => {
    this.donation.title = value

    return this
  }

  setUrl = (value: string): this => {
    this.donation.url = new URL(`https://${value}`)

    return this
  }
}
