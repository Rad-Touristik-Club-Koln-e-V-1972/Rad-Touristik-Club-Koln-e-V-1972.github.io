import ABuilder from '~/models/builder/ABuilder'
import Training from '~/models/entities/events/Training'
import ETraining from '~/models/enums/events/ETraining'

export default class TrainingBuilder extends ABuilder<Training> {
    private category = ETraining.wintertraining
    private height!: string
    private lastChange!: Date
    private length!: string
    private speed!: string
    private text!: string
    private title!: string

    build() {
        return {
            category: this.category,
            height: this.height,
            id: this.id,
            lastChange: this.lastChange,
            length: this.length,
            speed: this.speed,
            text: this.text,
            title: this.title,
        } satisfies Training
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
        this.lastChange = new Date(value)

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
