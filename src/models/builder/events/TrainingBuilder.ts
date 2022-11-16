import ABuilder from '~/models/builder/ABuilder'
import Training from '~/models/entities/events/Training'
import ETraining from '~/models/enums/events/ETraining'

export default class TrainingBuilder extends ABuilder<Training> {
    constructor(value = new Training()) {
        super(value)
    }

    category(value: ETraining): TrainingBuilder {
        this.value.category = value

        return this
    }

    height(value: string): TrainingBuilder {
        this.value.height = value

        return this
    }

    lastChange(value: string): TrainingBuilder {
        this.value.lastChange = new Date(value)

        return this
    }

    length(value: string): TrainingBuilder {
        this.value.length = value

        return this
    }

    speed(value: string): TrainingBuilder {
        this.value.speed = value

        return this
    }

    text(value: string): TrainingBuilder {
        this.value.text = value

        return this
    }

    title(value: string): TrainingBuilder {
        this.value.title = value

        return this
    }
}
