<template>
  <q-card>
    <q-card-section class="text-subtitle2">
      {{ props.modelValue.time.name }}
      <br />
      {{ useDateTime().format(props.modelValue.time.start, props.modelValue.time.end) }}
      <br />
      {{ props.modelValue.location }}
    </q-card-section>
    <q-card-section>
      <q-img eager :src="props.modelValue?.titleImageUrl?.toString()" style="cursor: pointer" @click="open" />
    </q-card-section>
    <q-inner-loading :showing="isLoading">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
  </q-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Gallery from 'src/models/entities/rtc-cologne/gallery/Gallery'
import useDateTime from 'src/utils/DateTime'

const props = defineProps<{ modelValue: Gallery }>()

const router = useRouter()

const isLoading = ref(false)

const open = async () => {
  isLoading.value = true

  await router.push({ name: 'rtc-cologne-galleries-album', params: { album: props.modelValue.albums[0]?.id, galleryId: props.modelValue.id } })
}
</script>
