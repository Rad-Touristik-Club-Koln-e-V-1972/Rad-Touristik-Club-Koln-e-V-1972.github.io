<template>
    <v-card id="CList">
        <v-toolbar flat>
            <v-toolbar-title class="text-title">Zukünftige Termine</v-toolbar-title>
            <v-spacer />
            <c-date-range v-model="filter.dateRange" @input="triggerFilter" />
            <v-spacer />
            <c-categories v-model="filter.categories" @input="triggerFilter" />
            <v-spacer />
            <c-search v-model="filter.search.value" @input="triggerFilter" />
        </v-toolbar>
        <v-data-table
            :custom-filter="filterBy"
            :custom-sort="sortBy"
            :headers="headers"
            :item-class="getColor"
            :items="futureEvents"
            :search="filter.trigger.value.toString()"
            show-group-by
            sort-by="datetime"
        >
            <template #item.name="{ item }">
                <a class="accent--text" :href="item.url?.toString()" :style="getStyle(item)" target="_blank" v-text="item.name" />
            </template>
            <template #item.datetime="{ item }"><span :style="getStyle(item)" v-text="getDate(item)" /></template>
            <template #item.contact="{ item }">
                <nuxt-link v-if="item.contact" class="accent--text" :style="getStyle(item)" :to="{ name: 'about-us-contacts' }">{{ item.contact }}</nuxt-link>
            </template>
            <template #item.clubPoints="{ item }"><span v-if="item.clubPoints" :style="getStyle(item)" v-text="item.clubPoints" /></template>
        </v-data-table>
    </v-card>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import CSearch from '~/components/pages/events/calendar/list/CSearch.vue'
import CCategories from '~/components/pages/events/calendar/list/filter/CCategories.vue'
import CDateRange from '~/components/pages/events/calendar/list/filter/CDateRange.vue'
import Event from '~/models/entities/events/calendar/Event'
import EEvent from '~/models/enums/EEvent'
import { useCalendarStore } from '~/store/events/Calendar'
import useDateTime from '~/utils/DateTime'

const dateTime = useDateTime()

const filter = {
    categories: [] as EEvent[],
    dateRange: [] as string[],
    search: ref(''),
    trigger: ref(false),
}
const filterBy = (_: string, __: string | null, item: Event) => {
    let ret = true

    if (filter.categories?.length) ret = filter.categories.includes(item.category)

    if (ret && filter.dateRange?.length) {
        const start = new Date(filter.dateRange[0])

        ret = filter.dateRange.length === 1 ? dateTime.isSameDay(item.start, start) : dateTime.isBetween(item.start, start, new Date(filter.dateRange[1]))
    }

    if (ret && filter.search.value) ret = (item.clubPoints + item.contact.toLowerCase() + item.name.toLowerCase()).includes(filter.search.value.toLowerCase())

    return ret
}
const futureEvents = computed(() => useCalendarStore().allFuture())
const getColor = (event: Event) => `${event.color} accent--text`
const getDate = (event: Event) => dateTime.format(event.start, event.end, !event.timed)
const getStyle = (event: Event) => {
    let style = ''

    if (event.category === EEvent.Abgesagt) style += 'text-decoration: double line-through '
    if (!event.url) style += 'pointer-events: none '

    return style
}
const headers = computed(() => [
    {
        align: 'start',
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
const triggerFilter = () => (filter.trigger.value = !filter.trigger.value)
</script>
