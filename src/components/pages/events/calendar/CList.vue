<template>
    <q-card>
        <q-card-section class="text-h6">Zukünftige Termine</q-card-section>
        <q-toolbar>
            <div class="row full-width">
                <div class="col-sm col-xs-11 q-mx-md">
                    <c-date-range v-model="filter.dateRange" />
                </div>
                <div class="col-sm col-xs-11 q-mx-md">
                    <c-categories v-model="filter.categories" />
                </div>
                <div class="col-sm col-xs-11 q-mx-md">
                    <c-search v-model="filter.search" />
                </div>
            </div>
        </q-toolbar>
        <q-table :columns="columns" :filter="filterComputed" :filter-method="filterMethod" :pagination="initialPagination" :rows="futureEvents">
            <template #body-cell-name="props">
                <q-td :props="props">
                    <a :class="getColor(props.row)" :href="props.row.url?.toString()" target="_blank" v-text="props.row.name" />
                </q-td>
            </template>
            <template #body-cell-contact="props">
                <q-td :props="props">
                    <router-link v-if="props.row.contact" :class="getColor(props.row)" :to="{ name: 'rtc-cologne-contacts' }">
                        {{ props.row.contact }}
                    </router-link>
                </q-td>
            </template>
        </q-table>
    </q-card>
</template>

<script lang="ts" setup>
import { computed, ref, toRef } from 'vue'
import { date, is, QTableColumn } from 'quasar'
import CSearch from 'components/pages/events/calendar/list/CSearch.vue'
import CCategories from 'components/pages/events/calendar/list/filter/CCategories.vue'
import CDateRange from 'components/pages/events/calendar/list/filter/CDateRange.vue'
import Event from 'src/models/entities/events/calendar/Event'
import Filter from 'src/models/entities/events/calendar/Filter'
import EEvent from 'src/models/enums/EEvent'
import useCalendarStore from 'stores/events/Calendar'
import useDateTime from 'src/utils/DateTime'

const dateTime = useDateTime()

const filterComputed = toRef(() => ({
    categories: filter.value.categories,
    dateRange: filter.value.dateRange,
    search: filter.value.search,
}))
const futureEvents = computed(() => useCalendarStore().allActualYear())

const columns: QTableColumn<Event>[] = [
    {
        align: 'left',
        // TODO Workaround until https://github.com/quasarframework/quasar/pull/13742
        classes: (row: Event) => getColor(row),
        field: 'category',
        label: 'Art',
        name: 'category',
        sort: (a: EEvent, b: EEvent) => a.localeCompare(b),
        sortable: true,
    },
    {
        align: 'left',
        // TODO Workaround until https://github.com/quasarframework/quasar/pull/13742
        classes: (row: Event) => getColor(row),
        field: 'name',
        label: 'Event',
        name: 'name',
        sort: (a: string, b: string) => a.localeCompare(b),
        sortable: true,
        style: (row: Event) => getStyle(row),
    },
    {
        align: 'left',
        // TODO Workaround until https://github.com/quasarframework/quasar/pull/13742
        classes: (row: Event) => getColor(row),
        field: (row: Event) => dateTime.format(row.start, row.end, row.allDay),
        label: 'Termin',
        name: 'datetime',
        sort: (a: string, b: string, rowA: Event, rowB: Event) => sortDateTime(rowA, rowB),
        sortable: true,
        sortOrder: 'ad',
        style: (row: Event) => getStyle(row),
    },
    {
        align: 'left',
        // TODO Workaround until https://github.com/quasarframework/quasar/pull/13742
        classes: (row: Event) => getColor(row),
        field: 'contact',
        label: 'Ansprechpartner',
        name: 'contact',
        sortable: true,
        style: (row: Event) => getStyle(row),
    },
    {
        align: 'left',
        // TODO Workaround until https://github.com/quasarframework/quasar/pull/13742
        classes: (row: Event) => getColor(row),
        field: 'clubPoints',
        label: 'VP',
        name: 'clubPoints',
        sortable: true,
        style: (row: Event) => getStyle(row),
    },
]
const filter = ref<Filter>({
    categories: [EEvent.Vereinsfahrt],
    dateRange: '',
    search: '',
})
const initialPagination = {
    sortBy: 'datetime',
    descending: false,
    page: 1,
    rowsPerPage: 20,
}

const filterMethod = (rows: readonly Event[], terms: Filter): Event[] => {
    let tmp = rows as Event[]

    if (terms.categories.length) tmp = tmp.filter((item) => terms.categories.includes(item.category))

    if (terms.dateRange) {
        let from: Date
        let to: Date | null = null

        if (is.object(terms.dateRange)) {
            from = date.extractDate(terms.dateRange.from, 'DD.MM.YYYY')
            if (terms.dateRange.to) to = date.extractDate(terms.dateRange.to, 'DD.MM.YYYY')
        } else from = date.extractDate(terms.dateRange, 'DD.MM.YYYY')

        tmp = tmp.filter((item) => dateTime.isBetweenDates(item.start, from, to))
    }

    if (terms.search) tmp = tmp.filter((item) => (item.clubPoints + item.contact + item.name).toLowerCase().includes(terms.search.toLowerCase()))

    return tmp
}
const getColor = (event: Event) => `bg-${event.color} text-accent`
const getStyle = (event: Event) => {
    let style = ''

    if (event.category === EEvent.Abgesagt) style += 'text-decoration: double line-through '

    return style
}

const sortDateTime = (a: Event, b: Event) => {
    let comp = new Date(a.start).getTime() - new Date(b.start).getTime()

    if (comp === 0) {
        if (!a.end) comp = -1
        else if (!b.end) comp = 1
        else comp = new Date(a.end).getTime() - new Date(b.end).getTime()
    }

    return comp
}
</script>
