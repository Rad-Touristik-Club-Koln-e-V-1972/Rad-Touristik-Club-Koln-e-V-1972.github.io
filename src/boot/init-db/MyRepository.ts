import { type Model, Repository } from 'pinia-orm'

export default class MyRepository<M extends Model> extends Repository<M> {
  saveType(records: M[]): M[] {
    return this.save(records)
  }
}
