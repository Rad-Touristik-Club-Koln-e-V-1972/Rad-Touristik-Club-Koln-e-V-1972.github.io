import { computed, ref } from "vue";
import { defineStore } from "pinia";
import _2026 from "./calendar/2026";
import EEvent from "@/models/enums/EEvent";
import type Event from "@/models/entities/events/calendar/Event";
import useCalendar from "@/utils/Calendar";
import useDateTime from "@/utils/DateTime";

export default defineStore("calendar", () => {
  const calendar = useCalendar();
  const dateTime = useDateTime();

  const events = ref<Record<string, Event[]>>({
    2026: [..._2026, ...calendar.getHolidays(2026)]
  });

  const all = computed(() =>
    Object.values(events.value).flatMap(it => it.flatMap(it => it))
  );

  const allFuture = computed(() =>
    all.value.filter(it => it.start > dateTime.today.value)
  );

  function getNextRTF(...category: EEvent[]): Event | null;
  function getNextRTF(days: number, ...category: EEvent[]): Event | null;

  function getNextRTF(firstParam: any, ...restParams: any[]): Event | null {
    let days = -1;
    let categories: EEvent[] = [];

    if (typeof firstParam === "number") {
      days = firstParam;
      categories = restParams;
    } else if (firstParam !== undefined) {
      categories = [firstParam, ...restParams];
    }

    let nextRTF = allFuture.value.find(it => categories.includes(it.category));

    return nextRTF &&
      (days < 0 || useDateTime().isInTheNextDays(nextRTF.start, days))
      ? nextRTF
      : null;
  }

  return {
    all,
    allFuture,
    allNotCancelled: computed(() =>
      all.value.filter(it => it.category !== EEvent.Abgesagt)
    ),
    nextEvents: computed(() =>
      allFuture.value
        .filter(
          it =>
            ![
              EEvent.Abgesagt,
              EEvent.Feiertag,
              EEvent.Mitgliederversammlung
            ].includes(it.category)
        )
        .sort((a, b) => a.start.getTime() - b.start.getTime())
        .slice(0, 2)
    ),
    getNextRTF
  };
});
