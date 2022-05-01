<template>
    <v-card id="CList">
        <v-card-title class="text-body-1 text-sm-body-2 text-md-h6 text-lg-h5 text-xl-h4">Zukünftige Termine</v-card-title>
        <v-data-table :custom-sort="sort" :headers="headers" :item-class="getColor" :items="futureEvents">
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
    props: {
        events: { required: true, type: [] as PropType<Event[]> },
    },
    setup(props) {
        return {
            futureEvents: computed(() => props.events.filter((it) => DateTime.isFuture(it.start))),
            getColor: (event: Event) => `${event.color} accent--text`,
            getDate: (event: Event) => DateTime.format(event.start, event.end),
            headers: [
                {
                    align: 'start',
                    sortable: true,
                    text: 'Art',
                    value: 'category',
                },
                {
                    align: 'start',
                    sortable: true,
                    text: 'Event',
                    value: 'name',
                },
                {
                    align: 'start',
                    sortable: true,
                    text: 'Termin',
                    value: 'datetime',
                },
            ],
            sort: (items: Event[], sortBy: string[], sortDesc: boolean[]) => {
                function compareDateTime(a: Event, b: Event) {
                    let comp = new Date(a.start).getTime() - new Date(b.start).getTime()

                    if (comp === 0) {
                        if (!a.end) comp = -1
                        else if (!b.end) comp = 1
                        else comp = new Date(a.end).getTime() - new Date(b.end).getTime()
                    }

                    return comp
                }

                return items.sort((a, b) => {
                    let ret
                    let tempA = a
                    let tempB = b
                    if (sortDesc[0]) [tempA, tempB] = [tempB, tempA]

                    switch (sortBy[0]) {
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
                })
            },
        }
    },
})
</script>

<style lang="scss" scoped></style>
