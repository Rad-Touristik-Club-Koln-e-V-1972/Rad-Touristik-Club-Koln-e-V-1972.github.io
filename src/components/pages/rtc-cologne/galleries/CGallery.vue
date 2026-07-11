<template>
  <q-card>
    <q-card-section class="text-subtitle2">
      {{ props.modelValue.title }}
      <br />
      {{ useDateTime().format(props.modelValue.start, props.modelValue.end) }}
      <br />
      {{ props.modelValue.location }}
    </q-card-section>
    <q-card-section>
      <q-img
        :src="props.modelValue.titleImageUrl.toString()"
        eager
        style="cursor: pointer"
        @click="open"
      />
    </q-card-section>
    <q-inner-loading :showing="isLoading">
      <q-spinner-gears color="primary" size="50px" />
    </q-inner-loading>
  </q-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import type Gallery from "@/models/entities/rtc-cologne/gallery/Gallery";
import useDateTime from "@/utils/DateTime";

const props = defineProps<{
  album?: string | undefined;
  modelValue: Gallery;
}>();

const router = useRouter();

const isLoading = ref(false);

const open = async () => {
  isLoading.value = true;

  await router.push({
    name: "//rtc-cologne/galleries/[id]_[[album]]",
    params: { id: props.modelValue.id },
    query: {
      album: props.album || undefined
    }
  });
};
</script>
