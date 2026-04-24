import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import _2022 from './blog/2022'
import _2023 from './blog/2023'
import _2024 from './blog/2024'
import _2025 from './blog/2025'
import _2026 from './blog/2026'
import useDateTime from 'src/utils/DateTime'

export default defineStore('blog', () => {
  const dateTime = useDateTime()

  const all = ref([..._2026, ..._2025, ..._2024, ..._2023, ..._2022])

  return { all, allBeforeTomorrow: computed(() => all.value.filter((it) => it.start < dateTime.tomorrowMidnight.value)) }
})
