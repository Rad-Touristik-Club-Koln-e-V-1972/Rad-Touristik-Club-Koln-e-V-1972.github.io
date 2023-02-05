import { defineStore } from 'pinia'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export const useSlideshowStore = defineStore('slideshow', {
    getters: {
        all: (state): GalleryEntry[] => state.images,
    },
    state: () => ({
        images: [
            new GalleryEntryBuilder().setId('d72861c4-31fd-4f96-b7b8-46d51a50c6cf').setImageUrl('content.rtc-koeln.de/pages/index/slideshow/image0.jpeg').build(),
            new GalleryEntryBuilder().setId('2317e30f-8933-4378-89ae-07bf34026f83').setImageUrl('content.rtc-koeln.de/pages/index/slideshow/image1.jpeg').build(),
            new GalleryEntryBuilder().setId('0680d03d-52f1-43a8-a9e2-7342d58c9328').setImageUrl('content.rtc-koeln.de/pages/index/slideshow/image2.jpeg').build(),
            new GalleryEntryBuilder().setId('c646b548-d985-43e3-a921-874f19fc1662').setImageUrl('content.rtc-koeln.de/pages/index/slideshow/image3.jpeg').build(),
            new GalleryEntryBuilder().setId('f4a91aeb-0028-4906-9608-3de81a5cf1f6').setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_2571.jpg').build(),
            new GalleryEntryBuilder()
                .setId('df6e5343-a6c2-44fa-9baa-3d2853d433eb')
                .setImageUrl('content.rtc-koeln.de/pages/index/slideshow/b74ba152-d427-40ac-8ef4-4539bcb153e3.jpg')
                .build(),
            new GalleryEntryBuilder()
                .setId('5109a7f7-f33f-4d14-ad34-135db19aea90')
                .setImageUrl('content.rtc-koeln.de/pages/index/slideshow/b0a3d468-828d-474d-9380-e568a38fad89.jpg')
                .build(),
            new GalleryEntryBuilder().setId('505dd369-b0ae-48eb-a2c1-062211d6f8e5').setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_0037.jpg').build(),
            new GalleryEntryBuilder().setId('8de4e7d9-02ce-4322-9335-9ec37cd99166').setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_2225.jpg').build(),
            new GalleryEntryBuilder().setId('bb9ce044-e095-45cd-bfa3-a72a1f89c345').setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4226.jpg').build(),
            new GalleryEntryBuilder().setId('6dd84ef7-d9e5-4a1e-8656-1955804f3490').setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4235.jpg').build(),
            new GalleryEntryBuilder().setId('08494a8a-6411-49bc-bb88-cff3f6d7775a').setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4241.jpg').build(),
            new GalleryEntryBuilder().setId('4e15a5d5-ff64-4ec8-a97c-196bc47c4918').setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4252.jpg').build(),
            new GalleryEntryBuilder().setId('1ef0a6b9-5fc1-4aed-9ffa-96010a603621').setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4256.jpg').build(),
            new GalleryEntryBuilder().setId('14113a3f-bd1b-4de0-969f-c52a1b4172fc').setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4483.jpg').build(),
            new GalleryEntryBuilder().setId('86ff4a39-0a6b-43e4-9955-2d08b1f78261').setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4495.jpg').build(),
            new GalleryEntryBuilder().setId('fe7b1815-6279-43cc-aba7-d52da36eb723').setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4497.jpg').build(),
            new GalleryEntryBuilder().setId('106ba8bb-b576-4866-98ec-812202daba2c').setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4502.jpg').build(),
            new GalleryEntryBuilder().setId('867adb10-3872-43d7-a3d7-5336a7600e91').setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4507.jpg').build(),
            new GalleryEntryBuilder().setId('aa5dd40e-83b3-46da-8c07-cb9a8256e6fb').setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4508.jpg').build(),
            new GalleryEntryBuilder().setId('cfa2a543-2e26-4579-b2af-d3dfd9131932').setImageUrl('content.rtc-koeln.de/pages/index/slideshow/IMG_4515.jpg').build(),
            new GalleryEntryBuilder()
                .setId('d7626722-ac6f-449a-b333-180cd2e41ccd')
                .setImageUrl('content.rtc-koeln.de/pages/index/slideshow/signal-2023-02-05-092407_002.jpeg')
                .build(),
            new GalleryEntryBuilder()
                .setId('6236709d-d210-4301-a3ac-90fbf57b2cdb')
                .setImageUrl('content.rtc-koeln.de/pages/index/slideshow/signal-2023-02-05-092407_003.jpeg')
                .build(),
        ],
    }),
})
