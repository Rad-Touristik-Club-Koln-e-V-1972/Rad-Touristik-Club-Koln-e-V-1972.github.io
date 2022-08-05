import { v4 as uuid } from 'uuid'

export default abstract class AEntity {
    id = uuid()
}
