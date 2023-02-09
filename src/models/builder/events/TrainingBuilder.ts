import ABuilder from '~/models/builder/ABuilder'
import Training from '~/models/entities/events/Training'
import ETraining from '~/models/enums/events/ETraining'

export default class TrainingBuilder extends ABuilder {
    private entity = new Training()

    build() {
        return Object.assign(this.entity, super.build())
    }

    setCategory(value: ETraining): TrainingBuilder {
        this.entity.category = value

        return this
    }

    setHeight(value: string): TrainingBuilder {
        this.entity.height = value

        return this
    }

    setLastChange(value: string): TrainingBuilder {
        this.entity.lastChange = new Date(value)

        return this
    }

    setLength(value: string): TrainingBuilder {
        this.entity.length = value

        return this
    }

    setSpeed(value: string): TrainingBuilder {
        this.entity.speed = value

        return this
    }

    setText(value: string): TrainingBuilder {
        this.entity.text = value

        return this
    }

    setTitle(value: string): TrainingBuilder {
        this.entity.title = value

        return this
    }
}
