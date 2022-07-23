<template>
    <v-card id="CGuestbook" max-width="40em">
        <v-card-subtitle class="secondary accent--text text-subtitle-2 text-md-subtitle-1 text-lg-h6">
            <div v-if="props.value.date" v-text="useDateTime().format(props.value.date)" />
            <div v-text="`${props.value.name} via ${ESource[props.value.source]}`" />
            <div v-text="`${[props.value.organization, props.value.location].filter((it) => it).join(', ')} `" />
            <div v-if="props.value.category !== EEvent.RTC" v-text="`Event: ${EEvent[props.value.category]}`" />
        </v-card-subtitle>
        <v-card-title v-if="props.value.title" class="primary accent--text text-subtitle-1 text-md-h6 text-lg-h5">
            {{ props.value.title }}
        </v-card-title>
        <v-divider />
        <v-card-text v-if="props.value.text || props.value.imageUrls.length">
            <div v-if="props.value.text" class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h5">
                <pre class="text-pre-wrap">{{ props.value.text }}</pre>
            </div>
            <c-slideshow v-if="props.value.imageUrls.length" :value="props.value.imageUrls" />
        </v-card-text>
        <v-expand-transition>
            <div v-if="props.value.answer">
                <v-divider />
                <v-card-text class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h5">
                    <pre class="text-pre-wrap"><b>RTC Köln:</b> <i>{{props.value.answer}}</i></pre>
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script lang="ts" setup>
import CSlideshow from '~/components/layouts/default/CSlideshow.vue'
import Entry from '~/models/entities/guestbook/Entry'
import EEvent from '~/models/enums/EEvent'
import ESource from '~/models/enums/guestbook/ESource'
import useDateTime from '~/utils/DateTime'

const props = defineProps<{ value: Entry }>()
</script>

<style lang="scss" scoped />
