<template>
  <q-calendar
    ref="calendarRef"
    v-model="selectedDate"
    :day-min-height="100"
    :mode="model === ECalendar.Week ? 'day' : getTypeString(model)"
    :view="getTypeString(model)"
    class="relative-position"
    hour24-format
    locale="de"
    @change="() => emit('change', date.formatDate(selectedDate, 'MMMM YYYY'))"
    @click-date="model = ECalendar.Day"
  >
    <template #column-header-after="{ scope: { timestamp } }">
      <!-- Day / Week all day entry -->
      <template v-for="e in events" :key="e.id">
        <div
          v-if="e.allDay && date.isSameDate(timestamp.date, e.start)"
          :class="`bg-${e.color}`"
          class="cursor-pointer full-width text-accent"
          @click="eventRef!.showEvent(e)"
        >
          {{ e.name }}
        </div>
      </template>
    </template>
    <template #day="{ scope: { timestamp } }">
      <!-- Month entry -->
      <template v-for="e in events" :key="e.id">
        <div
          v-if="dateTime.isBetweenDates(timestamp.date, e.start, e.end)"
          :class="`bg-${e.color}`"
          class="cursor-pointer text-accent"
          @click="eventRef!.showEvent(e)"
        >
          {{ e.name }}
        </div>
      </template>
    </template>
    <template
      #day-body="{ scope: { timestamp, timeStartPos, timeDurationHeight } }"
    >
      <!-- Day / Week with time entry -->
      <template v-for="e in events" :key="e.id">
        <div
          v-if="
            !e.allDay && dateTime.isBetweenDates(timestamp.date, e.start, e.end)
          "
          :class="`absolute bg-${e.color}`"
          :style="getDayEntryStyle(e, timeStartPos, timeDurationHeight)"
          class="cursor-pointer full-width text-accent"
          @click="eventRef!.showEvent(e)"
        >
          {{ e.name }}
        </div>
      </template>
    </template>
  </q-calendar>
  <d-event ref="event" />
</template>

<script lang="ts" setup>
import { ref, useTemplateRef } from "vue";
import { date } from "quasar";
import { QCalendar as QCalendarRef } from "@quasar/quasar-ui-qcalendar";
import DEvent from "@/components/pages/events/calendar/DEvent.vue";
import type Event from "@/models/entities/events/calendar/Event";
import ECalendar from "@/models/enums/events/ECalendar";
import useCalendarStore from "@/stores/events/Calendar";
import useDateTime from "@/utils/DateTime";

const calendarRef =
  useTemplateRef<InstanceType<typeof QCalendarRef>>("calendarRef");

const emit = defineEmits<{
  (e: "change", title: string): void;
}>();

const model = defineModel<ECalendar>({ required: true });

const dateTime = useDateTime();

const events = useCalendarStore().allNotCancelled;

const eventRef = useTemplateRef<InstanceType<typeof DEvent>>("event");

const getDayEntryStyle = (
  event: Event,
  timeStartPos: (time: string) => number,
  timeDurationHeight: (duration?: number | string | undefined) => number
) => {
  const s = { "align-items": "", height: "", top: "" };

  if (event.end) {
    s["align-items"] = "flex-start";

    s.height = `${timeDurationHeight(date.getDateDiff(event.end, event.start, "minutes")).toFixed()}px`;

    s.top = `${timeStartPos(date.formatDate(event.start, "HH:mm")).toFixed()}px`;
  }

  return s;
};

const getTypeString = (ec: ECalendar) => {
  switch (ec) {
    case ECalendar.Week:
      return "week";
    case ECalendar.Month:
      return "month";
    case ECalendar.Day:
    default:
      return "day";
  }
};

const selectedDate = ref(date.formatDate(new Date(), "YYYY-MM-DD"));

defineExpose({
  moveToToday: () => calendarRef?.value?.moveToToday(),
  next: () => calendarRef?.value?.next(),
  prev: () => calendarRef?.value?.prev()
});
</script>
