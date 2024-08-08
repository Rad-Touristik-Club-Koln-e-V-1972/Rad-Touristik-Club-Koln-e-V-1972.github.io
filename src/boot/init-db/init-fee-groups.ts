import type { Pinia } from 'pinia'
import { useRepo } from 'pinia-orm'
import type Fee from 'src/models/entities/Fee'
import FeeGroup from 'src/models/entities/FeeGroup'
import EFeeGroup from 'src/models/enums/EFeeGroup'

export default (store: Pinia) =>
  useRepo(FeeGroup, store).save({
    fees: [
      {
        name: 'Aufnahmegebühr, einmalig',
        price: 40.0,
      },
      { name: 'Kinder- und Jugendliche bis 18 Jahre' },
      {
        name: 'Erwachsene ab 18 Jahre',
        price: 60.0,
      },
      {
        name: 'Familien (2 Erwachsene)',
        price: 100.0,
      },
      { name: 'Ehrenmitglied' },
      {
        name: 'Partner/Partnerin des Ehrenmitglieds',
        price: 45.0,
      },
      {
        name: 'Fördernde Mitglieder',
        price: 50.0,
      },
      {
        name: 'BDR-Mitgliedsbeitrag',
        price: 20.25,
      },
      {
        name: 'Tretradversicherung',
        price: 5.9,
      },
    ] as Fee[],
    category: EFeeGroup.MembershipRegistration,
  })
