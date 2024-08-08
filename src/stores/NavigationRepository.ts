import { Repository } from 'pinia-orm'
import Navigation from 'src/models/entities/navigation/Navigation'
import ENavigation from 'src/models/enums/ENavigation'

export default class NavigationRepository extends Repository<Navigation> {
  override use = Navigation

  getByType = (type: ENavigation) =>
    this.withAllRecursive()
      .where((it) => it.type === type)
      .first()
}
