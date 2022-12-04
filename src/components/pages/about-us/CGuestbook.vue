<template>
    <v-card id="CGuestbook" max-width="20em">
        <v-card-subtitle class="accent--text secondary text-title">
            <div v-if="props.value.date" v-text="useDateTime().format(props.value.date)" />
            <div v-text="`${props.value.name} via ${ESource[props.value.source]}`" />
            <div v-text="`${[props.value.organization, props.value.location].filter((it) => it).join(', ')} `" />
            <div v-if="props.value.category !== EEvent.RTC" v-text="`Event: ${EEvent[props.value.category]}`" />
        </v-card-subtitle>
        <v-toolbar v-if="props.value.title" color="primary" flat>
            <v-toolbar-title class="accent--text text-title">{{ props.value.title }}</v-toolbar-title>
        </v-toolbar>
        <!-- TODO style="padding: 16px" IS A WORKAROUND FOR https://github.com/vuetifyjs/vuetify/issues/12170 -->
        <v-card-text v-if="props.value.text || props.value.imageUrls?.length" style="padding: 16px">
            <div v-if="props.value.text">
                <pre class="black--text text-pre-wrap" v-html="props.value.text" />
            </div>
            <c-slideshow v-if="props.value.imageUrls?.length" :value="props.value.imageUrls" />
        </v-card-text>
        <v-expand-transition>
            <div v-if="props.value.answer">
                <v-divider />
                <v-card-text>
                    <pre class="black--text text-pre-wrap"><b>RTC Köln:</b> <i>{{props.value.answer}}</i></pre>
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script lang="ts" setup>
import CSlideshow from '~/components/CSlideshow.vue'
import GuestbookEntry from '~/models/entities/about-us/guestbook/GuestbookEntry'
import EEvent from '~/models/enums/EEvent'
import ESource from '~/models/enums/about-us/guestbook/ESource'
import useDateTime from '~/utils/DateTime'

const props = defineProps<{ value: GuestbookEntry }>()
</script>
