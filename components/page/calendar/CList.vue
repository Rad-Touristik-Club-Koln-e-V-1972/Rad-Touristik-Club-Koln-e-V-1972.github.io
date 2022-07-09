<template>
    <v-card id="CList">
        <v-card-title class="text-body-1 text-sm-body-2 text-md-h6 text-lg-h5 text-xl-h4">
            Zukünftige Termine
            <v-spacer />
            <c-date-range v-model="filter.dateRange" />
            <v-spacer />
            <c-categories v-model="filter.categories" />
            <v-spacer />
            <c-search v-model="filter.search.value" />
        </v-card-title>
        <v-data-table :custom-sort="sortBy" :headers="headers" :item-class="getColor" :items="futureEvents" :search="filter.search.value" show-group-by sort-by="datetime">
            <template #item.name="{ item }">
                <a v-if="item.url" class="accent--text" :href="item.url" :style="getStyle(item)" target="_blank" v-text="item.name" />
                <span v-else :style="getStyle(item)" v-text="item.name" />
            </template>
            <template #item.datetime="{ item }"><div :style="getStyle(item)" v-html="getDate(item)" /></template>
            <template #item.contact="{ item }">
                <router-link v-if="item.contact" class="accent--text" :style="getStyle(item)" :to="{ name: 'contact' }" v-text="item.contact" />
            </template>
            <template #item.clubPoints="{ item }"><div v-if="item.clubPoints" :style="getStyle(item)" v-text="item.clubPoints" /></template>
        </v-data-table>
    </v-card>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import CSearch from '@/components/page/calendar/list/CSearch.vue'
import CCategories from '@/components/page/calendar/list/filter/CCategories.vue'
import CDateRange from '@/components/page/calendar/list/filter/CDateRange.vue'
import Event from '@/models/entities/calendar/Event'
import EEvent from '@/models/enums/EEvent'
import DateTime from '@/utils/DateTime'
import { useCalendarStore } from '@/store/Calendar'

const filter = {
    categories: [] as EEvent[],
    dateRange: [] as string[],
    search: ref(''),
}
const futureEvents = computed(() =>
    useCalendarStore()
        .allFuture()
        .filter((it) => filterDate(it.start, filter.dateRange))
)

const filterDate = (date: Date, dateRange: string[]) => {
    let ret = true

    if (dateRange?.length > 0) {
        const start = new Date(dateRange[0])

        if (dateRange.length === 1) ret = DateTime.isSameDay(date, start)
        else ret = DateTime.isBetween(date, start, new Date(dateRange[1]))
    }

    return ret
}
const getColor = (event: Event) => `${event.color} accent--text`
const getDate = (event: Event) => DateTime.format(event.start, event.end, !event.timed)
const getStyle = (event: Event) => event.category === EEvent.Abgesagt && 'text-decoration: double line-through'
const headers = computed(() => [
    {
        align: 'start',
        filter: (value: EEvent) => {
            const categories = filter.categories
            let ret = true

            if (categories.length > 0) ret = categories.includes(value)

            return ret
        },
        groupable: true,
        sortable: true,
        text: 'Art',
        value: 'category',
    },
    {
        align: 'start',
        groupable: false,
        sortable: true,
        text: 'Event',
        value: 'name',
    },
    {
        align: 'start',
        groupable: false,
        sortable: true,
        text: 'Termin',
        value: 'datetime',
    },
    {
        align: 'start',
        groupable: true,
        sortable: true,
        text: 'Ansprechpartner',
        value: 'contact',
    },
    {
        align: 'start',
        groupable: false,
        sortable: true,
        text: 'VP',
        value: 'clubPoints',
    },
])
const sortBy = (items: Event[], sortBy: string[], sortDesc: boolean[]) => {
    const compareDateTime = (a: Event, b: Event) => {
        let comp = new Date(a.start).getTime() - new Date(b.start).getTime()

        if (comp === 0) {
            if (!a.end) comp = -1
            else if (!b.end) comp = 1
            else comp = new Date(a.end).getTime() - new Date(b.end).getTime()
        }

        return comp
    }
    const sortHelper = (a: Event, b: Event, sortBy: string, sortDesc: boolean) => {
        let ret: number
        let tempA = a
        let tempB = b

        if (sortDesc) [tempA, tempB] = [tempB, tempA]

        switch (sortBy) {
            case 'category':
                ret = tempA.category.localeCompare(tempB.category)
                break
            case 'name':
                ret = tempA.name.localeCompare(tempB.name)
                break
            case 'datetime':
                ret = compareDateTime(tempA, tempB)
                break
            default:
                ret = 0
        }

        return ret
    }

    return items.sort((a: Event, b: Event) => {
        let ret = 0

        for (let i = 0; i < sortBy.length; i++) if (ret === 0) ret = sortHelper(a, b, sortBy[i], sortDesc[i])

        return ret
    })
}
</script>

<style lang="scss" scoped />
