import EventBuilder from 'src/models/builder/events/calendar/EventBuilder'
import EEvent from 'src/models/enums/EEvent'

export default [
  new EventBuilder().setCategory(EEvent.Mitgliederversammlung).setContact('Diana Vialon').setDate('2024-12-07').setId('39232501-499a-4dd0-b759-86bd9cdff128').setKilometer(50).setName('Weihnachtsfeier').buildEvent(),
]
