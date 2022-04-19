<template>
  <v-card id="CContact" :max-width="$vuetify.breakpoint.mobile ? 160 : 280">
    <v-img :src="props.imageSrc" contain />
    <v-card-title class="text-subtitle-2 text-md-subtitle-1 text-lg-h6" v-text="name" />
    <v-card-subtitle class="text-caption text-md-subtitle-2 text-lg-subtitle-1" v-text="props.position" />
    <v-card-actions>
      <v-btn :href="'mailto:' + props.eMail" icon>
        <v-icon v-text="icons.mdiEmailSend" />
      </v-btn>
      <v-spacer />
      <v-spacer />
      <v-btn class="text-caption text-sm-body-2" text @click="showText = !showText">
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
