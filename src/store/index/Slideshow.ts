import { defineStore } from 'pinia'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export const useSlideshowStore = defineStore('slideshow', {
    getters: {
        all: (state): GalleryEntry[] => state.images,
    },
    state: () => ({
        images: [
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/index/slideshow/b0a3d468-828d-474d-9380-e568a38fad89.jpg').build(),
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_0037.jpg').build(),
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_2225.jpg').build(),
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4226.jpg').build(),
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4235.jpg').build(),
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4241.jpg').build(),
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4252.jpg').build(),
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4256.jpg').build(),
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4483.jpg').build(),
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4495.jpg').build(),
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4497.jpg').build(),
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4502.jpg').build(),
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4507.jpg').build(),
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4508.jpg').build(),
            new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4515.jpg').build(),
        ],
    }),
})
