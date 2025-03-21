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
    <q-table :columns :filter :filter-method :pagination :rows="useCalendarStore().all" separator="horizontal" :table-row-class-fn="getClass" :table-row-style-fn="getStyle">
      <template #body-cell-name="props">
        <q-td :props="props">
          <a :class="getClass(props.row)" :href="props.row.url?.toString()" target="_blank">{{ props.row.name }}</a>
        </q-td>
      </template>
      <template #body-cell-datetime="props">
        <q-td :props="props">
          {{ dateTime.format(props.row.start, props.row.end, props.row.allDay) }}
        </q-td>
      </template>
      <template #body-cell-contact="props">
        <q-td :props="props">
          <router-link v-if="props.row.contact" :class="getClass(props.row)" :to="{ name: 'rtc-cologne-contacts' }">
            {{ props.row.contact }}
          </router-link>
        </q-td>
      </template>
    </q-table>
  </q-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { date, is } from 'quasar'
import type { QTableColumn } from 'quasar'
import CSearch from 'components/pages/events/calendar/list/CSearch.vue'
import CCategories from 'components/pages/events/calendar/list/filter/CCategories.vue'
import CDateRange from 'components/pages/events/calendar/list/filter/CDateRange.vue'
import type Event from 'src/models/entities/events/calendar/Event'
import type Filter from 'src/models/entities/events/calendar/Filter'
import EEvent from 'src/models/enums/EEvent'
import useCalendarStore from 'stores/events/Calendar'
import useDateTime from 'src/utils/DateTime'

const dateTime = useDateTime()

const columns: QTableColumn<Event>[] = [
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
    field: 'name',
    label: 'Event',
    name: 'name',
    sort: (a: string, b: string) => a.localeCompare(b),
    sortable: true,
  },
  {
    align: 'left',
    field: (row: Event) => dateTime.format(row.start, row.end, row.allDay),
    label: 'Termin',
    name: 'datetime',
    sort: (a: string, b: string, rowA: Event, rowB: Event) => sortDateTime(rowA, rowB),
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

const filterMethod = (rows: readonly Event[], terms: Filter): Event[] => {
  let tmp = rows as Event[]

  if (terms.categories.length) tmp = tmp.filter((item) => terms.categories.includes(item.category))

  if (terms.dateRange) {
    let from: Date
    let to: Date

    if (is.object(terms.dateRange)) {
      from = date.extractDate(terms.dateRange.from, 'DD.MM.YYYY')
      if (terms.dateRange.to) to = date.extractDate(terms.dateRange.to, 'DD.MM.YYYY')
    } else from = date.extractDate(terms.dateRange, 'DD.MM.YYYY')

    tmp = tmp.filter((item) => dateTime.isBetweenDates(item.start, from, to))
  }

  if (terms.search) tmp = tmp.filter((item) => (item.kilometer.toFixed() + item.contact + item.name).toLowerCase().includes(terms.search.toLowerCase()))

  return tmp
}

const getClass = (row: Event) => `bg-${row.color} text-accent`

const getStyle = (row: Event) => {
  let style = ''

  if (row.category === EEvent.Abgesagt) style += 'text-decoration: double line-through '

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
