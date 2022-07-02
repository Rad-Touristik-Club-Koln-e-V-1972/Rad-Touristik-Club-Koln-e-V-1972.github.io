import DB2012 from '@/databases/pages/guestbook/DB2012'
import Entry from '@/models/entities/guestbook/Entry'
import DB2014 from '@/databases/pages/guestbook/DB2014'
import DB2015 from '@/databases/pages/guestbook/DB2015'
import DB2016 from '@/databases/pages/guestbook/DB2016'
import DB2017 from '@/databases/pages/guestbook/DB2017'
import DB2018 from '@/databases/pages/guestbook/DB2018'
import DB2019 from '@/databases/pages/guestbook/DB2019'

export default class Database {
    private static _instance?: Database
    private db2012 = DB2012
    private db2014 = DB2014
    private db2015 = DB2015
    private db2016 = DB2016
    private db2017 = DB2017
    private db2018 = DB2018
    private db2019 = DB2019

    private constructor() {
        if (Database._instance) throw new Error('Use Database.instance instead of new.')

        Database._instance = this
    }

    static get instance(): Database {
        return Database._instance ?? (Database._instance = new Database())
    }

    get 2012(): Entry[] {
        return this.db2012
    }

    get 2014(): Entry[] {
        return this.db2014
    }

    get 2015(): Entry[] {
        return this.db2015
    }

    get 2016(): Entry[] {
        return this.db2016
    }

    get 2017(): Entry[] {
        return this.db2017
    }

    get 2018(): Entry[] {
        return this.db2018
    }

    get 2019(): Entry[] {
        return this.db2019
    }

    get all(): Entry[] {
        return this['2019'].concat(this['2018'], this['2017'], this['2016'], this['2015'], this['2014'], this['2012'])
    }
}
