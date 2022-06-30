<template>
    <v-card id="CList">
        <v-card-title class="text-body-1 text-sm-body-2 text-md-h6 text-lg-h5 text-xl-h4">Zukünftige Termine</v-card-title>
        <v-data-table :custom-sort="sortBy" :headers="headers" :item-class="getColor" :items="futureEvents" show-group-by sort-by="datetime">
            <template #item.name="{ item }">{{ item.name }}</template>
            <template #item.datetime="{ item }"><div v-html="getDate(item)" /></template>
        </v-data-table>
    </v-card>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
import Event from '@/models/entities/calendar/Event'
import DateTime from '@/utils/DateTime'

export default defineComponent({
    name: 'CList',
    props: { events: { required: true, type: [] as PropType<Event[]> } },
    setup(props) {
        return {
            futureEvents: computed(() => props.events.filter((it) => DateTime.isFuture(it.start))),
            getColor: (event: Event) => `${event.color} accent--text`,
            getDate: (event: Event) => DateTime.format(event.start, event.end),
            headers: [
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
            ],
            sortBy: (items: Event[], sortBy: string[], sortDesc: boolean[]): Event[] => {
                function compareDateTime(a: Event, b: Event) {
                    let comp = new Date(a.start).getTime() - new Date(b.start).getTime()

                    if (comp === 0) {
                        if (!a.end) comp = -1
                        else if (!b.end) comp = 1
                        else comp = new Date(a.end).getTime() - new Date(b.end).getTime()
                    }

                    return comp
                }

                function sortHelper(a: Event, b: Event, sortBy: string, sortDesc: boolean): number {
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
            },
        }
    },
})
</script>

<style lang="scss" scoped></style>
