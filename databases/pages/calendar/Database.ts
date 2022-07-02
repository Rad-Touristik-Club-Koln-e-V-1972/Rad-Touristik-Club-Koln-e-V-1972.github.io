import DB2022 from '@/databases/pages/calendar/DB2022'
import Event from '@/models/entities/calendar/Event'

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

    get 2022(): Event[] {
        return this.db2022
    }

    get all(): Event[] {
        return this['2022']
    }
}
