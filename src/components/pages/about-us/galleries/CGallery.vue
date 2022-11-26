<template>
    <v-card id="CGallery" :loading="isLoading" :max-width="`${vuetify?.breakpoint.mobile ? 15 : 20}em`">
        <template #progress>
            <v-progress-linear color="primary" height="15">Bitte warten</v-progress-linear>
        </template>
        <v-card-title>{{ props.value.title }}</v-card-title>
        <v-card-subtitle class="text-title">
            <div v-text="`Datum: ${dateTime.format(props.value.start, props.value.end, true)}`" />
            <div v-text="`Ort: ${props.value.location}`" />
        </v-card-subtitle>
        <v-card-text>
            <v-img eager :src="props.value.titleImageUrl.toString()" style="cursor: pointer" @click="open">
                <template #placeholder>
                    <c-loading-skeleton />
                </template>
            </v-img>
        </v-card-text>
        <div v-if="props.value.description">
            <v-divider />
            <v-card-actions>
                <v-spacer />
                <v-btn text @click="showText = !showText">
                    Details
                    <v-icon right>{{ showText ? icons.mdiChevronUp : icons.mdiChevronDown }}</v-icon>
                </v-btn>
            </v-card-actions>
            <v-expand-transition>
                <div v-show="showText">
                    <v-card-text>
                        <pre class="black--text text-pre-wrap" v-text="props.value.description" />
                    </v-card-text>
                </div>
            </v-expand-transition>
        </div>
    </v-card>
</template>

<script lang="ts" setup>
import { getCurrentInstance, nextTick, PropType, ref } from 'vue'
import { mdiChevronDown, mdiChevronUp } from '@mdi/js'
import CLoadingSkeleton from '~/components/CLoadingSkeleton.vue'
import Gallery from '~/models/entities/about-us/Gallery'
import useDateTime from '~/utils/DateTime'

const props = defineProps({
    album: { default: '', type: String },
    // TODO WORKAROUND replace "Object as PropType<Gallery>" by "Gallery" after "@typescript-eslint/parser" "v5.43.1" got released.
    //  See https://github.com/typescript-eslint/typescript-eslint/issues/5688
    value: { required: true, type: Object as PropType<Gallery> },
})

const proxy = getCurrentInstance()?.proxy
const router = proxy?.$router
// TODO WORKAROUND UNTIL VUETIFY 2.7
const vuetify = ref(proxy?.$vuetify)

const dateTime = useDateTime()

const icons = {
    mdiChevronDown,
    mdiChevronUp,
}
const isLoading = ref(false)
const open = () => {
    isLoading.value = true
    nextTick(() => {
        setTimeout(() => {
            router?.push({ name: 'about-us-galleries-album', params: { album: props.album, value: props.value.id } })
        }, 0)
    })
}
const showText = ref(false)
</script>
