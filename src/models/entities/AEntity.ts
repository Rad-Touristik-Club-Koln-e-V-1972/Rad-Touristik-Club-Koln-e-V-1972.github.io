import { v4 as uuid } from 'uuid'

export default class AEntity {
    // TODO WORKAROUND replace constructor with "accessor" after "@typescript-eslint/parser" "v5.43.1" got released.
    //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
    id!: string

    constructor(id: string = uuid()) {
        this.id = id
    }
}
