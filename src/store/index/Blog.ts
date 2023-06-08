import { ref } from 'vue'
import { defineStore } from 'pinia'
import BlogEntry from '~/models/entities/index/BlogEntry'
import useDateTime from '~/utils/DateTime'
import _2022 from '~/store/index/blog/2022'
import _2023 from '~/store/index/blog/2023'

export default defineStore('blog', () => {
    const dateTime = useDateTime()

    const all = ref<BlogEntry[]>([..._2023, ..._2022])

    const findAllBeforeTomorrow = (): BlogEntry[] => all.value.filter((it) => it.start.getTime() < dateTime.getTomorrowMidnight().getTime())

    return { all, findAllBeforeTomorrow }
})
