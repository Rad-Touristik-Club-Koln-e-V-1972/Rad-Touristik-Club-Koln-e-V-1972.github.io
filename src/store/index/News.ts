import { ref } from 'vue'
import { defineStore } from 'pinia'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'

export default defineStore('news', () => {
    const all = ref<GalleryEntry[]>([])

    return { all }
})
