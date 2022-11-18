import ABuilder from '~/models/builder/ABuilder'
import AEntity from '~/models/entities/AEntity'
import Training from '~/models/entities/events/Training'
import ETraining from '~/models/enums/events/ETraining'

export default class TrainingBuilder extends ABuilder<Training> {
    // TODO WORKAROUND replace setter with "accessor" after "@typescript-eslint/parser" "v5.43.1" got released.
    //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
    private category = ETraining.wintertraining
    private height!: string
    private lastChange!: string
    private length!: string
    private speed!: string
    private text!: string
    private title!: string

    build() {
        // TODO WORKAROUND replace "as" by "satisfies" after "@typescript-eslint/parser" "v5.43.1" got released.
        //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
        return Object.assign(
            {
                category: this.category,
                height: this.height,
                lastChange: new Date(this.lastChange),
                length: this.length,
                speed: this.speed,
                text: this.text,
                title: this.title,
            },
            new AEntity(this.id)
        ) as Training
    }

    setCategory(value: ETraining): TrainingBuilder {
        this.category = value

        return this
    }

    setHeight(value: string): TrainingBuilder {
        this.height = value

        return this
    }

    setLastChange(value: string): TrainingBuilder {
        this.lastChange = value

        return this
    }

    setLength(value: string): TrainingBuilder {
        this.length = value

        return this
    }

    setSpeed(value: string): TrainingBuilder {
        this.speed = value

        return this
    }

    setText(value: string): TrainingBuilder {
        this.text = value

        return this
    }

    setTitle(value: string): TrainingBuilder {
        this.title = value

        return this
    }
}
