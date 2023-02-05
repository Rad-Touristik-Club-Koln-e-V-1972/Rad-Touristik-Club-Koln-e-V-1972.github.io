import ChildChildBuilder from '~/models/builder/navigation/ChildChildBuilder'
import Child from '~/models/entities/navigation/Child'
import ChildChild from '~/models/entities/navigation/ChildChild'

export default class ChildBuilder<T extends Child> extends ChildChildBuilder<T> {
    protected children: ChildChild[] = []
    protected expanded = false

    build() {
        return Object.assign(super.build(), {
            children: this.children,
            expanded: this.expanded,
        }) satisfies T
    }

    setChildren(...value: ChildChild[]): ChildBuilder<T> {
        this.children = value

        return this
    }

    setExpanded(): ChildBuilder<T> {
        this.expanded = true

        return this
    }
}
