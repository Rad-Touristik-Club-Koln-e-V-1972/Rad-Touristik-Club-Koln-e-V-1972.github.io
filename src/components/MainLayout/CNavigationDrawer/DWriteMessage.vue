<template>
  <div>
    <q-btn class="full-width" color="primary" :icon="mdiCellphoneMessage" text-color="accent" @click="dialog = true">Nachricht schreiben</q-btn>
    <q-dialog v-model="dialog" persistent>
      <q-card>
        <q-card-section class="bg-primary text-accent text-h6">Nachricht schreiben</q-card-section>
        <q-card-section>
          <q-select v-model="selectedContact" bottom-slots filled label="Empfänger" :option-label="(it) => `${it.position} ${it.name}`" :options="contacts">
            <template v-slot:before>
              <q-avatar>
                <img v-if="selectedContact?.imageUrl" :src="selectedContact.imageUrl.toString()" />
              </q-avatar>
            </template>
            <template v-slot:after>
              <q-btn dense flat :icon="mdiSend" round @click="sendMessage()" />
            </template>
          </q-select>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn v-close-popup color="primary" label="Schließen" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { openURL } from 'quasar'
import { mdiCellphoneMessage, mdiSend } from '@quasar/extras/mdi-v7'
import useContactsStore from 'stores/rtc-cologne/Contacts'

const dialog = ref(false)
const contacts = useContactsStore().all
const selectedContact = ref(contacts[0])

const sendMessage = () => {
  if (selectedContact.value)
    openURL(`mailto:${selectedContact.value.eMail}?subject=Mein%20Anliegen%20Beispieltitel&body=Hallo+${selectedContact.value.name}%2C%0D%0A%0D%0Agerne%20w%C3%BCrde%20ich%20beispielhaft%20Fragen?`)
}
</script>
