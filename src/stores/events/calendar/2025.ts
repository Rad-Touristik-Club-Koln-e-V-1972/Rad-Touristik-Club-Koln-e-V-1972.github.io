import EventBuilder from 'src/models/builder/events/calendar/EventBuilder'
import EEvent from 'src/models/enums/EEvent'

export default [new EventBuilder().setCategory(EEvent.RTF).setContact('Manfred Türk-Vialon').setDate('2025-05-25').setId('89991c0a-fddd-4fb1-bd4b-f336304745aa').setKilometer(250).setName('53. Forsbachtour').buildEvent()]
