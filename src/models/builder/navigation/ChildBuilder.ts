import ChildChildBuilder from '~/models/builder/navigation/ChildChildBuilder'
import Child from '~/models/entities/navigation/Child'
import ChildChild from '~/models/entities/navigation/ChildChild'

export default class ChildBuilder<T extends Child> extends ChildChildBuilder<T> {
    protected entity = new Child()

    build() {
        return Object.assign(this.entity, super.build()) as T
    }

    setChildren(...value: ChildChild[]): ChildBuilder<T> {
        this.entity.children = value

        return this
    }

    setExpanded(): ChildBuilder<T> {
        this.entity.expanded = true

        return this
    }
}
