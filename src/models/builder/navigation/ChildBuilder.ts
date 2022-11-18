import ChildChildBuilder from '~/models/builder/navigation/ChildChildBuilder'
import Child from '~/models/entities/navigation/Child'
import ChildChild from '~/models/entities/navigation/ChildChild'

export default class ChildBuilder<T extends Child> extends ChildChildBuilder<T> {
    // TODO WORKAROUND replace setter with "accessor" after "@typescript-eslint/parser" "v5.43.1" got released.
    //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
    protected children!: ChildChild[]
    protected expanded = false

    build() {
        const value = super.build()

        value.children = this.children ?? []
        value.expanded = this.expanded

        // TODO WORKAROUND replace "as" by "satisfies" after "@typescript-eslint/parser" "v5.43.1" got released.
        //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
        return value as T
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
