<template>
    <div id="CPdfForm">
        <v-dialog v-model="dialog" width="auto">
            <template #activator="{ on, attrs }">
                <v-btn color="primary" v-bind="attrs" v-on="on">Fertigstellen</v-btn>
            </template>
            <v-card loader-height="10" :loading="isLoading">
                <v-card-title>Möchtest du den Antrag ausdrucken oder per E-Mail an uns senden?</v-card-title>
                <v-card-text>
                    Bitte achte beim E-Mail-Versand darauf den Antrag beizufügen.
                    <br />
                    Dieser sollte in deinem "Downloads" Ordner sein.
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" :loading="isLoading" @click="download">Download</v-btn>
                    <v-spacer />
                    <v-btn color="primary" :loading="isLoading" @click="submit">Abschicken</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <client-only>
            <vue-html2pdf
                ref="html2Pdf"
                :enable-download="false"
                filename="Mitgliedsantrag"
                :manual-pagination="true"
                pdf-format="a4"
                pdf-orientation="portrait"
                :pdf-quality="2"
                :preview-modal="false"
                @beforeDownload="beforeDownload($event)"
            >
                <section slot="pdf-content">
                    <section class="pdf-item">
                        <!-- TODO Workaround for wrong h1 sizing in https://github.com/kempsteven/vue-html2pdf -->
                        <h4 style="font-size: 2.125rem">Mitgliedsantrag</h4>
                        <!-- TODO Workaround for not working css classes in https://github.com/kempsteven/vue-html2pdf -->
                        <h2 style="color: var(--v-primary-base)">RTC Köln e.V. 1972</h2>
                        <p>
                            Wir freuen uns, dass <b>Du Dich</b> dazu entschieden hast, dem <b>RTC Köln e.V. 1972</b> beizutreten. Dazu müsstest Du bitte noch das folgende Formular
                            vollständig ausfüllen
                        </p>
                        <br />
                        <h3>Personendaten</h3>
                        <v-divider />
                        <c-person :value="props.value.personalData" />
                        <c-contact :value="props.value.personalData" />
                        <c-miscellaneous :value="props.value.personalData" />
                    </section>
                    <div class="html2pdf__page-break" />
                    <section class="pdf-item">
                        <h3>Mitgliedsbeitrag</h3>
                        <v-divider />
                        <c-membership-fee readonly :value="props.value.membershipFee" />
                        <h3>BDR-Mitgliedschaft</h3>
                        <v-divider />
                        <c-bdr-membership :value="props.value.bdrMembership" />
                        <h3>Unterschrift</h3>
                        <v-divider />
                        <c-signature readonly :value="props.value.signature" />
                    </section>
                    <div class="html2pdf__page-break" />
                    <section class="pdf-item">
                        <h3>Einwilligungserklärung für die Veröffentlichung von Mitgliederdaten im Internet</h3>
                        <v-divider />
                        <c-consent-data-usage readonly :value="props.value.consentPrivacyPolicy" />
                    </section>
                </section>
            </vue-html2pdf>
        </client-only>
    </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import CBdrMembership from '~/components/pages/membership-registration/CBdrMembership.vue'
import CConsentDataUsage from '~/components/pages/membership-registration/CConsentDataUsage.vue'
import CMembershipFee from '~/components/pages/membership-registration/CMembershipFee.vue'
import CSignature from '~/components/pages/membership-registration/CSignature.vue'
import CContact from '~/components/pages/membership-registration/personal-data/CContact.vue'
import CMiscellaneous from '~/components/pages/membership-registration/personal-data/CMiscellaneous.vue'
import CPerson from '~/components/pages/membership-registration/personal-data/CPerson.vue'
import MembershipRegistration from '~/models/entities/MembershipRegistration'

const props = defineProps<{ value: MembershipRegistration }>()

const dialog = ref(false)
const html2Pdf = ref()
const isLoading = ref(false)

// TODO Workaround "unknown" for missing TypeScript types https://github.com/kempsteven/vue-html2pdf/issues/64
const beforeDownload = async (event: unknown) => {
    // TODO Workaround "any" for missing TypeScript types https://github.com/kempsteven/vue-html2pdf/issues/64
    const { html2pdf, options, pdfContent } = event as any

    await html2pdf()
        .set(options)
        .from(pdfContent)
        .toPdf()
        .get('pdf')
        // TODO Workaround "object" for missing TypeScript types https://github.com/kempsteven/vue-html2pdf/issues/64
        .then((pdf: object) => {
            // TODO Workaround "any" for missing TypeScript types https://github.com/kempsteven/vue-html2pdf/issues/64
            const tmp = pdf as any
            const pdfInternal = tmp.internal
            const totalPages = pdfInternal.getNumberOfPages()

            for (let i = 1; i <= totalPages; i++) {
                const pageSize = pdfInternal.pageSize

                tmp.setPage(i)
                // eslint-disable-next-line @typescript-eslint/no-var-requires
                tmp.addImage(require('~/assets/img/banner_vertikal.png'), 'PNG', pageSize.getWidth() - 0.3, 0, 0.3, pageSize.getHeight())
                tmp.setFontSize(10)
                tmp.setTextColor(150)
                tmp.text(`Seite ${i} von ${totalPages}`, pageSize.getWidth() * 0.86, pageSize.getHeight() - 0.3)
            }
        })
        .save()

    isLoading.value = false

    dialog.value = false
}

const download = () => {
    isLoading.value = true

    nextTick(() => setTimeout(() => html2Pdf.value.generatePdf()))
}

const submit = () => {
    download()

    nextTick(() =>
        setTimeout(
            () =>
                window.open(
                    'mailto:vorstand@rtc-koeln.de?subject=Antrag%20auf%20Mitgliedschaft' +
                        '&body=Hallo%20RTC%20K%C3%B6ln%2C%0D%0A%0D%0Agerne%20w%C3%BCrde%20ich%20eine%20Mitgliedschaft%20in%20eurem%20Verein%20beantragen.' +
                        '%0D%0AAnbei%20mein%20ausgef%C3%BClltes%20Formular.'
                ),
            2000
        )
    )
}
</script>

<style lang="scss" scoped>
/* TODO Workaround for Adding margin totally breaks the page https://github.com/kempsteven/vue-html2pdf/issues/55 */
.pdf-item {
    margin: 10px 40px 10px 20px;
}
</style>
