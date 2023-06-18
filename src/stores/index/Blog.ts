import { ref } from 'vue'
import { defineStore } from 'pinia'
import _2022 from './blog/2022'
import _2023 from './blog/2023'
import BlogEntry from 'src/models/entities/index/BlogEntry'
import useDateTime from 'src/utils/DateTime'

export default defineStore('blog', () => {
    const dateTime = useDateTime()

    const all = ref<BlogEntry[]>([..._2023, ..._2022])

    const findAllBeforeTomorrow = (): BlogEntry[] => all.value.filter((it) => it.start.getTime() < dateTime.getTomorrowMidnight().getTime())

    return { all, findAllBeforeTomorrow }
})
