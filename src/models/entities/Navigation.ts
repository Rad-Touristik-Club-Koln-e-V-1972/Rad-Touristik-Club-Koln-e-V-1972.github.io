import Child from '~/models/entities/navigation/Child'

export default class Navigation extends Child {
    declare children: Child[]
}
