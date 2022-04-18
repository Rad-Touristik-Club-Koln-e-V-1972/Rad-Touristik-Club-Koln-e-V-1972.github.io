<template>
  <v-card id="CContact" max-width="280">
    <v-img :src="props.imageSrc" contain />
    <v-card-title v-text="name" />
    <v-card-subtitle v-text="props.position" />
    <v-card-actions>
      <v-btn :href="'mailto:' + props.eMail" icon>
        <v-icon v-text="icons.mdiEmailSend" />
      </v-btn>
      <v-spacer />
      <v-spacer />
      <v-btn text @click="showText = !showText">
        Über mich
        <v-icon right>{{ showText ? icons.mdiChevronUp : icons.mdiChevronDown }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="showText">
        <v-divider></v-divider>
        <v-card-text v-text="props.description" />
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import { mdiChevronDown, mdiChevronUp, mdiEmailSend } from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    description: { required: true, type: String },
    eMail: { required: true, type: String },
    imageSrc: { required: true, type: String },
    name: { required: true, type: String },
    position: { required: true, type: String },
  },
  emits: ['input'],
  setup(props) {
    return {
      icons: {
        mdiChevronDown,
        mdiChevronUp,
        mdiEmailSend,
      },
      props,
      showText: false,
    }
  },
})
</script>

<style lang="scss" scoped></style>
