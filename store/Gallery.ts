import { defineStore } from 'pinia'
import Gallery from '@/models/entities/Gallery'
import gallery from '@/store/gallery/DBExample'

export const useGalleryStore = defineStore('gallery', {
    state: () => ({ gallery }),
    getters: {
        all: (state): Gallery[] => [state.gallery, state.gallery, state.gallery, state.gallery],
    },
})
