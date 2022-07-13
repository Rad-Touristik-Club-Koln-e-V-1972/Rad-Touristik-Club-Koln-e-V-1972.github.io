import { defineStore } from 'pinia'
import Entry from '~/models/entities/guestbook/Entry'
import db2012 from '~/store/guestbook/DB2012'
import db2014 from '~/store/guestbook/DB2014'
import db2015 from '~/store/guestbook/DB2015'
import db2016 from '~/store/guestbook/DB2016'
import db2017 from '~/store/guestbook/DB2017'
import db2018 from '~/store/guestbook/DB2018'
import db2019 from '~/store/guestbook/DB2019'

export const useGuestbookStore = defineStore('guestbook', {
    state: () => ({ db2019, db2018, db2017, db2016, db2015, db2014, db2012 }),
    getters: {
        all: (state): Entry[] => state.db2019.concat(state.db2018, state.db2017, state.db2016, state.db2015, state.db2014, state.db2012),
    },
})
