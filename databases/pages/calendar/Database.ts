import DB2022 from '@/databases/pages/calendar/DB2022'
import Event from '@/models/entities/calendar/Event'
import EEvent from '@/models/enums/EEvent'

export default class Database {
    private static _instance?: Database
    private db2022 = DB2022

    private constructor() {
        if (Database._instance) throw new Error('Use Database.instance instead of new.')

        Database._instance = this
    }

    static get instance(): Database {
        return Database._instance ?? (Database._instance = new Database())
    }

    static get today(): Date {
        return new Date(Date.now())
    }

    get 2022(): Event[] {
        return this.db2022
    }

    get all(): Event[] {
        return this['2022']
    }

    get allFuture(): Event[] {
        return this.all.filter((it) => it.start.getTime() > Database.today.getTime())
    }

    get nextEvent(): Event | undefined {
        const nextStartTime = Math.min(...Database.instance.allFuture.filter((it) => it.category !== EEvent.Feiertag).map((it) => it.start.getTime()))
        return Database.instance.allFuture.find((it) => it.start.getTime() === nextStartTime)
    }
}
