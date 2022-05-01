<template>
    <v-card id="GuestbookView" flat>
        <v-card-title class="text-body-1 text-sm-h6 text-md-h5 text-lg-h4 text-xl-h3" v-text="'Gästebuch'" />
        <v-card-subtitle class="text-body-2 text-sm-body-1 text-md-h6 text-lg-h5 text-xl-h4" v-text="'Briefpost bitte immer an: RTC Köln, Postfach 990103, 51083 Köln'" />
        <v-card-actions>
            <v-btn
                href="mailto:PR@rtc-koeln.de?subject=G%C3%A4stebuch%20-%20Thema
                &body=Hallo%20RTC%20K%C3%B6ln%2C%0D%0A%0D%0APlatzhalter%20f%C3%BCr%20den%20G%C3%A4stebucheintrag%0D%0A%0D%0A
                --%0D%0AViele%20Gr%C3%BC%C3%9Fe%0D%0AMax%20Mustermann%0D%0AAus%20K%C3%B6ln"
                class="text-body-2 text-sm-body-2 text-lg-body-1"
                style="background-color: var(--v-primary-base); color: var(--v-accent-base)"
            >
                Gästebucheintrag hinzufügen
                <v-icon right v-text="icons.mdiEmailSend" />
            </v-btn>
        </v-card-actions>
        <v-card-text>
            <v-row class="d-flex justify-center" dense>
                <v-col v-for="(item, index) in items" :key="index" cols="auto">
                    <c-guestbook :item="item" />
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { mdiEmailSend } from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'
import CGuestbook from '@/components/page/CGuestbook.vue'
import DB2012 from '@/databases/pages/guestbook/DB2012'
import DB2014 from '@/databases/pages/guestbook/DB2014'
import DB2015 from '@/databases/pages/guestbook/DB2015'
import DB2016 from '@/databases/pages/guestbook/DB2016'
import DB2017 from '@/databases/pages/guestbook/DB2017'
import DB2018 from '@/databases/pages/guestbook/DB2018'
import DB2019 from '@/databases/pages/guestbook/DB2019'
import Entry from '@/models/entities/guestbook/Entry'

export default defineComponent({
    components: { CGuestbook },
    setup() {
        return {
            icons: {
                mdiEmailSend,
            },
            items: ([] as Entry[]).concat(DB2019, DB2018, DB2017, DB2016, DB2015, DB2014, DB2012),
        }
    },
})
</script>

<style lang="scss" scoped></style>
