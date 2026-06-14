<template>
  <div>
    <q-card v-if="value" flat>
      <q-toolbar class="bg-primary">
        <q-btn :icon="mdiClose" dense flat round @click="close" />
        <q-toolbar-title class="text-accent">{{ value.title }}</q-toolbar-title>
      </q-toolbar>
      <q-card-section class="text-subtitle1">{{ useDateTime().format(value.start, value.end) }} bei {{ value.location }}</q-card-section>
      <c-album :album="album" :model-value="value" />
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { mdiClose } from '@quasar/extras/mdi-v7'
import CAlbum from 'components/pages/rtc-cologne/galleries/CAlbum.vue'
import type Gallery from 'src/models/entities/rtc-cologne/gallery/Gallery'
import useGalleryStore from 'stores/rtc-cologne/Gallery'
import useDateTime from 'src/utils/DateTime'

const props = defineProps<{ album?: string; id: string }>()

const router = useRouter()

const value = ref<Gallery>()

const close = () => {
  router.go(-1)
}

onMounted(() => {
  value.value = useGalleryStore().findById(props.id)

  if (!value.value) close()
})
</script>
