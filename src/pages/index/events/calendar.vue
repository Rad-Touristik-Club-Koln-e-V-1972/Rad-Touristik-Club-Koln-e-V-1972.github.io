<template>
  <q-card flat>
    <q-toolbar>
      <q-btn
        v-if="mode !== ECalendar.List"
        :icon="mdiChevronLeft"
        fab
        flat
        @click="calendarRef?.prev()"
      />
      <q-btn
        v-if="mode !== ECalendar.List"
        outline
        @click="calendarRef?.moveToToday()"
        >Heute</q-btn
      >
      <q-btn
        v-if="mode !== ECalendar.List"
        :icon="mdiChevronRight"
        fab
        flat
        @click="calendarRef?.next()"
      />
      <q-toolbar-title v-if="mode !== ECalendar.List && !$q.screen.xs">
        {{ title }}
      </q-toolbar-title>
      <q-space />
      <q-select
        v-model="mode"
        :options="Object.values(ECalendar)"
        filled
        label="Darstellung"
        style="min-width: 161px"
      >
        <template #prepend>
          <q-icon :name="mdiTableCog" />
        </template>
      </q-select>
    </q-toolbar>
    <q-card-section>
      <c-calendar
        v-model="mode"
        ref="calendarRef"
        v-if="mode !== ECalendar.List"
        @change="value => (title = value)"
      />
      <c-list v-else />
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { ref, useTemplateRef } from "vue";
import { useQuasar } from "quasar";
import {
  mdiChevronLeft,
  mdiChevronRight,
  mdiTableCog
} from "@quasar/extras/mdi-v7";
import CCalendar from "@/components/pages/events/calendar/CCalendar.vue";
import CList from "@/components/pages/events/calendar/CList.vue";
import ECalendar from "@/models/enums/events/ECalendar";

const calendarRef = useTemplateRef<CCalendar>("calendarRef");

// noinspection LocalVariableNamingConventionJS
const $q = useQuasar();

const mode = ref(ECalendar.List);
const title = ref("");
</script>
