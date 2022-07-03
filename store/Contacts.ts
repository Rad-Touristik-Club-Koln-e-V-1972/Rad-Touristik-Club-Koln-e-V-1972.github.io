import { defineStore } from 'pinia'
import contacts from '@/store/contacts/DB'

export const useContactsStore = defineStore('contacts', {
    state: () => ({ contacts }),
})
