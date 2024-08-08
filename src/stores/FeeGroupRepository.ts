import { Repository } from 'pinia-orm'
import FeeGroup from 'src/models/entities/FeeGroup'
import EFeeGroup from 'src/models/enums/EFeeGroup'

export default class FeeGroupRepository extends Repository<FeeGroup> {
  override use = FeeGroup

  getByCategory = (category: EFeeGroup) =>
    this.with('fees')
      .where((it) => it.category === category)
      .first()
}
