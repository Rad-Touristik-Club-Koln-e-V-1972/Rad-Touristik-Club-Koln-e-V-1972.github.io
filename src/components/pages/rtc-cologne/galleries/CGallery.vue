<template>
    <q-card>
        <q-card-section class="text-subtitle2">
            {{ props.modelValue.title }}
            <br />
            {{ dateTime.format(props.modelValue.start, props.modelValue.end, true) }}
            <br />
            {{ props.modelValue.location }}
        </q-card-section>
        <q-card-section>
            <q-img eager :src="props.modelValue?.titleImageUrl?.toString()" style="cursor: pointer" @click="open" />
        </q-card-section>
        <q-card-actions align="right">
            <q-expansion-item v-if="props.modelValue?.description" expand-separator label="Details">
                <q-card>
                    <q-card-section>
                        <span class="text-pre-wrap" v-text="props.modelValue?.description" />
                    </q-card-section>
                </q-card>
            </q-expansion-item>
        </q-card-actions>
        <q-inner-loading :showing="isLoading">
            <q-spinner-gears size="50px" color="primary" />
        </q-inner-loading>
    </q-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Gallery from 'src/models/entities/rtc-cologne/gallery/Gallery'
import useDateTime from 'src/utils/DateTime'
import { useRouter } from 'vue-router'

const props = defineProps({
    album: { default: undefined, type: String },
    modelValue: { required: true, type: Gallery },
})

const router = useRouter()

const dateTime = useDateTime()

const isLoading = ref(false)

const open = async () => {
    isLoading.value = true
    await router.push({ name: 'rtc-cologne-galleries-album', params: { album: props.album ?? Object.keys(props.modelValue.images)[0], id: props.modelValue.id } })
}
</script>
