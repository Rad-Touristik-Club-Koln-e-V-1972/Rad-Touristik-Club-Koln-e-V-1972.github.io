import { defineStore } from 'pinia'
import contacts from '~/store/contacts/DB'
import Contact from '~/models/entities/Contact'

export const useContactsStore = defineStore('contacts', {
    state: () => ({ contacts }),
    getters: {
        all: (state): Contact[] => state.contacts,
    },
})
