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
    <q-table :columns :filter :filter-method="filterMethod" :pagination :rows="all" separator="none">
      <template #body="props">
        <q-tr :class="getColor(props.row) + getStyle(props.row)">
          <q-td>{{ props.row.category }}</q-td>
          <q-td>
            <a :class="getColor(props.row)" :href="props.row.url?.toString()" target="_blank">{{ props.row.name }}</a>
          </q-td>
          <q-td>{{ dateTime.format(props.row.time.start, props.row.time.end, props.row.time.allDay) }}</q-td>
          <q-td>
            <router-link v-if="props.row.contact" :class="getColor(props.row)" :to="{ name: 'rtc-cologne-contacts' }">
              {{ props.row.contact }}
            </router-link>
          </q-td>
          <q-td>{{ props.row.kilometer }}</q-td>
        </q-tr>
        <q-tr v-if="props.row.provisionalReason" :class="`${getColor(props.row)} ${getStyle(props.row)} text-center`">
          <q-td colspan="100%">
            <q-icon :name="mdiArrowUpLeftBold" />
            {{ props.row.provisionalReason }}
            <q-icon :name="mdiArrowUpRightBold" />
          </q-td>
        </q-tr>
        <q-separator />
      </template>
    </q-table>
  </q-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { date, is, type QTableColumn } from 'quasar'
import { useRepo } from 'pinia-orm'
import { mdiArrowUpLeftBold, mdiArrowUpRightBold } from '@quasar/extras/mdi-v7'
import CSearch from 'components/pages/events/calendar/list/CSearch.vue'
import CCategories from 'components/pages/events/calendar/list/filter/CCategories.vue'
import CDateRange from 'components/pages/events/calendar/list/filter/CDateRange.vue'
import CalendarEvent from 'src/models/entities/events/CalendarEvent'
import EEvent from 'src/models/enums/EEvent'
import type Filter from 'src/models/interfaces/events/calendar/Filter'
import CalendarRepository from 'stores/events/CalendarRepository'
import useDateTime from 'src/utils/DateTime'

const dateTime = useDateTime()

const calendarRepo = useRepo(CalendarRepository)

const all = calendarRepo.allSortedByDate()
const columns: QTableColumn<CalendarEvent>[] = [
  {
    align: 'left',
    field: 'category',
    label: 'Art',
    name: 'category',
    sort: (a: EEvent, b: EEvent) => a.localeCompare(b),
    sortable: true,
  },
  {
    align: 'left',
    field: (row: CalendarEvent) => row.time.name,
    label: 'Event',
    name: 'name',
    sort: (a: string, b: string) => a.localeCompare(b),
    sortable: true,
  },
  {
    align: 'left',
    field: (row: CalendarEvent) => dateTime.format(row.time.start, row.time.end, row.time.allDay),
    label: 'Termin',
    name: 'datetime',
    sort: (a: string, b: string, rowA: CalendarEvent, rowB: CalendarEvent) => sortDateTime(rowA, rowB),
    sortable: true,
    sortOrder: 'ad',
  },
  {
    align: 'left',
    field: 'contact',
    label: 'Ansprechpartner',
    name: 'contact',
    sortable: true,
  },
  {
    align: 'left',
    field: 'kilometer',
    label: 'Kilometer',
    name: 'kilometer',
    sortable: true,
  },
]
const filter = ref<Filter>({
  categories: [EEvent.CTF, EEvent.Marathon, EEvent.Mitgliederversammlung, EEvent.Permanente, EEvent.RTC, EEvent.RTF, EEvent.Veranstaltung, EEvent.Vereinsfahrt],
  dateRange: { from: `01.01.${dateTime.today.value.getFullYear().toFixed()}`, to: `31.12.${(dateTime.today.value.getFullYear() + 1).toFixed()}` },
  search: '',
})
const pagination = {
  sortBy: 'datetime',
  descending: false,
  page: 1,
  rowsPerPage: 20,
}
const filterMethod = (rows: readonly CalendarEvent[], terms: Filter): CalendarEvent[] => {
  let tmp = rows as CalendarEvent[]

  if (terms.categories.length) tmp = tmp.filter((item) => terms.categories.includes(item.category))

  if (terms.dateRange) {
    let from: Date
    let to: Date

    if (is.object(terms.dateRange)) {
      from = date.extractDate(terms.dateRange.from, 'DD.MM.YYYY')
      if (terms.dateRange.to) to = date.extractDate(terms.dateRange.to, 'DD.MM.YYYY')
    } else from = date.extractDate(terms.dateRange, 'DD.MM.YYYY')

    tmp = tmp.filter((item) => dateTime.isBetweenDates(item.time.start, from, to))
  }

  if (terms.search) tmp = tmp.filter((item) => ((item.kilometer?.toFixed() ?? '') + item.contact + item.time.name).toLowerCase().includes(terms.search.toLowerCase()))

  return tmp
}
const getColor = (event: CalendarEvent) => `bg-${event.color} text-accent`
const getStyle = (event: CalendarEvent) => {
  let style = ''

  if (event.category === EEvent.Abgesagt) style += 'text-decoration: double line-through '

  return style
}
const sortDateTime = (a: CalendarEvent, b: CalendarEvent) => {
  let comp = new Date(a.time.start).getTime() - new Date(b.time.start).getTime()

  if (comp === 0) {
    if (!a.time.end) comp = -1
    else if (!b.time.end) comp = 1
    else comp = new Date(a.time.end).getTime() - new Date(b.time.end).getTime()
  }

  return comp
}
</script>
