<template>
  <q-card flat>
    <q-toolbar>
      <q-btn v-if="mode !== ECalendar.List" fab flat :icon="mdiChevronLeft" @click="calendar.prev()" />
      <q-btn v-if="mode !== ECalendar.List" outline @click="calendar.moveToToday()">Heute</q-btn>
      <q-btn v-if="mode !== ECalendar.List" fab flat :icon="mdiChevronRight" @click="calendar.next()" />
      <q-toolbar-title v-if="mode !== ECalendar.List && !$q.screen.xs">{{ title }}</q-toolbar-title>
      <q-space />
      <q-select v-model="mode" filled label="Darstellung" :options="Object.values(ECalendar)" style="min-width: 161px">
        <template #prepend>
          <q-icon :name="mdiTableCog" />
        </template>
      </q-select>
    </q-toolbar>
    <q-card-section>
      <q-calendar
        v-if="mode !== ECalendar.List"
        ref="calendar"
        v-model="selectedDate"
        class="relative-position"
        :day-min-height="100"
        hour24-format
        locale="de"
        :mode="mode === ECalendar.Week ? 'day' : getTypeString(mode)"
        :view="getTypeString(mode)"
        @change="onChange"
        @click-date="onClickDate"
      >
        <template #column-header-after="{ scope: { timestamp } }">
          <!-- Day / Week all day entry -->
          <template v-for="e in events" :key="e.id">
            <div v-if="e.time.allDay && date.isSameDate(timestamp.date, e.time.start)" :class="`bg-${e.color}`" class="cursor-pointer full-width text-accent" @click="event.showEvent(e)">
              {{ e.time.name }}
            </div>
          </template>
        </template>
        <template #day="{ scope: { timestamp } }">
          <!-- Month entry -->
          <template v-for="e in events" :key="e.id">
            <div v-if="dateTime.isBetweenDates(timestamp.date, e.time.start, e.time.end)" :class="`bg-${e.color}`" class="cursor-pointer text-accent" @click="event.showEvent(e)">
              {{ e.time.name }}
            </div>
          </template>
        </template>
        <template #day-body="{ scope: { timestamp, timeStartPos, timeDurationHeight } }">
          <!-- Day / Week with time entry -->
          <template v-for="e in events" :key="e.id">
            <div
              v-if="!e.time.allDay && dateTime.isBetweenDates(timestamp.date, e.time.start, e.time.end)"
              :class="`absolute bg-${e.color}`"
              class="cursor-pointer full-width text-accent"
              :style="getDayEntryStyle(e, timeStartPos, timeDurationHeight)"
              @click="event.showEvent(e)"
            >
              {{ e.time.name }}
            </div>
          </template>
        </template>
      </q-calendar>
      <c-list v-if="mode === ECalendar.List" />
      <d-event ref="event" />
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { date, useQuasar } from 'quasar'
import { useRepo } from 'pinia-orm'
import { mdiChevronLeft, mdiChevronRight, mdiTableCog } from '@quasar/extras/mdi-v7'
import { QCalendar } from '@quasar/quasar-ui-qcalendar'
import CList from 'components/pages/events/calendar/CList.vue'
import DEvent from 'components/pages/events/calendar/DEvent.vue'
import CalendarEvent from 'src/models/entities/events/CalendarEvent'
import ECalendar from 'src/models/enums/events/ECalendar'
import CalendarRepository from 'stores/events/CalendarRepository'
import useDateTime from 'src/utils/DateTime'

// noinspection LocalVariableNamingConventionJS
const $q = useQuasar()

const dateTime = useDateTime()

const calendarRepo = useRepo(CalendarRepository)

const calendar = ref()
const event = ref()

const events = calendarRepo.allNotCancelled()
const mode = ref<ECalendar>(ECalendar.List)
const selectedDate = ref(date.formatDate(new Date(), 'YYYY-MM-DD'))
const title = ref('')

const getDayEntryStyle = (event: CalendarEvent, timeStartPos: (time: string) => number, timeDurationHeight: (duration?: number | string) => number) => {
  const s = { 'align-items': '', height: '', top: '' }

  if (event.time.end) {
    s['align-items'] = 'flex-start'

    s.height = `${timeDurationHeight(date.getDateDiff(event.time.end, event.time.start, 'minutes')).toFixed()}px`

    s.top = `${timeStartPos(date.formatDate(event.time.start, 'HH:mm')).toFixed()}px`
  }

  return s
}
const getTypeString = (ec: ECalendar) =>
  Object.entries(ECalendar)
    .find((it) => it[1] === ec)?.[0]
    .toLowerCase() ?? ''
const onChange = () => (title.value = date.formatDate(selectedDate.value, 'MMMM YYYY'))
const onClickDate = () => (mode.value = ECalendar.Day)
</script>
