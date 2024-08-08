<template>
  <div>
    <q-btn color="primary" label="Fertigstellen" @click="dialog = true" />
    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section class="text-accent text-h6">Möchtest du den Antrag ausdrucken oder per E-Mail an uns senden?</q-card-section>
        <q-card-section>
          Bitte achte beim E-Mail-Versand darauf den Antrag beizufügen.
          <br />
          Dieser sollte in deinem "Downloads" Ordner sein.
        </q-card-section>
        <q-card-actions align="between">
          <q-btn color="primary" label="Download" :loading="isLoading" @click="download" />
          <q-btn color="primary" label="Abschicken" :loading="isLoading" @click="submit" />
        </q-card-actions>
        <q-inner-loading :showing="isLoading">
          <q-spinner-gears size="50px" color="primary" />
        </q-inner-loading>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { colors, date, openURL } from 'quasar'
import { AcroFormCheckBox, jsPDF } from 'jspdf'
import 'assets/fonts/Bahnschrift-Regular-normal.js'
import bannerVertikal from 'assets/img/banner_vertikal.png'
import MembershipRegistration from 'src/models/entities/MembershipRegistration'

const props = defineProps<{ modelValue: MembershipRegistration }>()

const dialog = ref(false)
const isLoading = ref(false)

let pdfGenerator: jsPDF

const addUnderline = (params: { leftMargin: number; topMargin: number; underlineColor?: string; underlineLength?: number }): number => {
  const lineLength = params.underlineLength ?? 85
  const topMarginOfLine = 3
  const _topMargin = params.topMargin + topMarginOfLine

  pdfGenerator.setDrawColor(colors.getPaletteColor(params.underlineColor ?? 'grey-14'))
  pdfGenerator.line(params.leftMargin, _topMargin, params.leftMargin + lineLength, _topMargin)

  return topMarginOfLine
}

const addCheckbox = (params: { leftMargin: number; topMargin: number; value?: boolean }): number => {
  const checkboxLength = 5
  const checkboxTextHeight = checkboxLength * 0.15
  const checkBox = new AcroFormCheckBox()

  checkBox.readOnly = true

  checkBox.x = params.leftMargin
  checkBox.y = params.topMargin - checkboxTextHeight
  checkBox.width = checkboxLength
  checkBox.height = checkboxLength

  checkBox.appearanceState = params.value ? 'On' : 'Off'
  pdfGenerator.addField(checkBox)

  return checkboxLength / 2
}

const addCheckboxWithText = (params: { description?: string; fontSize?: number; leftMargin: number; text: string; textColor?: string; topMargin: number; value: boolean; withoutTopMargin?: boolean }): number => {
  const fontSize = params.fontSize ?? 12
  const leftMarginText = params.leftMargin + 10
  let titleHeight = 0

  if (!params.withoutTopMargin) titleHeight += addTextTitle({ fontSize: fontSize - 2, leftMargin: params.leftMargin, text: '', topMargin: params.topMargin })

  let contentHeight = addText({
    fontSize: fontSize,
    leftMargin: leftMarginText,
    text: params.text,
    textColor: params.textColor,
    topMargin: params.topMargin + titleHeight,
  })
  const textHeight = contentHeight / 2

  contentHeight += titleHeight
  contentHeight += addCheckbox({ leftMargin: params.leftMargin, topMargin: params.topMargin - textHeight + titleHeight, value: params.value })

  if (params.description) addText({ fontSize: fontSize - 4, leftMargin: leftMarginText, text: params.description, topMargin: params.topMargin + textHeight + titleHeight })

  return contentHeight
}

const addList = (params: { elements: string[]; fontSize?: number; leftMargin: number; textColor?: string; topMargin: number }): number => {
  let contentHeight = 0

  for (const element of params.elements) {
    const textHeight = addText({
      fontSize: params.fontSize,
      leftMargin: params.leftMargin,
      text: `- ${element.replaceAll('\n', '\n    ')}`,
      textColor: params.textColor,
      topMargin: params.topMargin + contentHeight,
    })

    contentHeight += textHeight
  }

  return contentHeight
}

const addPage1 = (params: { leftMargin: number; topMargin: number; leftMarginCenter: number }) => {
  let _topMargin = params.topMargin

  _topMargin += addText({ fontSize: 25, leftMargin: params.leftMargin, text: 'Mitgliedsantrag', topMargin: _topMargin })

  _topMargin += addText({ fontSize: 17, leftMargin: params.leftMargin, text: 'RTC Köln e.V. 1972', textColor: 'primary', topMargin: _topMargin })

  _topMargin += addText({
    leftMargin: params.leftMargin,
    text: `Wir freuen uns, dass Du Dich dazu entschieden hast, dem RTC Köln e.V. 1972 beizutreten.
Dazu müsstest Du bitte noch das folgende Formular vollständig ausfüllen.`,
    textColor: 'grey-14',
    topMargin: _topMargin,
  })

  _topMargin += addText({
    fontSize: 14,
    leftMargin: params.leftMargin,
    text: 'Personendaten',
    topMargin: _topMargin,
    underlineColor: 'grey',
    underlineLength: 180,
    useHeadlineSpace: true,
    withUnderline: true,
  })

  addText({
    leftMargin: params.leftMargin,
    text: props.modelValue.personalData.firstName,
    title: 'Vorname',
    topMargin: _topMargin,
    withUnderline: true,
  })
  _topMargin += addText({ leftMargin: params.leftMarginCenter, text: props.modelValue.personalData.lastName, title: 'Nachname', topMargin: _topMargin, withUnderline: true })

  addText({
    leftMargin: params.leftMargin,
    text: props.modelValue.personalData.street,
    title: 'Straße',
    topMargin: _topMargin,
    withUnderline: true,
  })
  _topMargin += addText({
    leftMargin: params.leftMarginCenter,
    text: props.modelValue.personalData.streetNumber,
    title: 'Hausnummer',
    topMargin: _topMargin,
    withUnderline: true,
  })

  addText({
    leftMargin: params.leftMargin,
    text: props.modelValue.personalData.zipCode,
    title: 'Postleitzahl',
    topMargin: _topMargin,
    withUnderline: true,
  })
  _topMargin += addText({ leftMargin: params.leftMarginCenter, text: props.modelValue.personalData.city, title: 'Stadt', topMargin: _topMargin, withUnderline: true })

  addText({
    leftMargin: params.leftMargin,
    text: `${props.modelValue.personalData.telePhoneCountryCode} ${props.modelValue.personalData.telePhoneNumber}`,
    title: 'Telefonnummer',
    topMargin: _topMargin,
    withUnderline: true,
  })
  _topMargin += addText({
    leftMargin: params.leftMarginCenter,
    text: `${props.modelValue.personalData.mobilePhoneCountryCode} ${props.modelValue.personalData.mobilePhoneNumber}`,
    title: 'Handynummer',
    topMargin: _topMargin,
    withUnderline: true,
  })

  _topMargin += addText({
    leftMargin: params.leftMargin,
    text: props.modelValue.personalData.email,
    title: 'E-Mail',
    topMargin: _topMargin,
    underlineLength: 180,
    withUnderline: true,
  })

  addText({
    leftMargin: params.leftMargin,
    text: date.formatDate(props.modelValue.personalData.birthdate, 'DD.MM.YYYY'),
    title: 'Geburtsdatum',
    topMargin: _topMargin,
    withUnderline: true,
  })
  _topMargin += addText({
    leftMargin: params.leftMarginCenter,
    text: props.modelValue.personalData.tShirtSize,
    title: 'T-Shirt Größe',
    topMargin: _topMargin,
    withUnderline: true,
  })

  const textHeight = addText({
    leftMargin: params.leftMargin,
    text: date.formatDate(props.modelValue.personalData.entryDate, 'DD.MM.YYYY'),
    title: 'Eintritt (Datum)',
    topMargin: _topMargin,
    withUnderline: true,
  })
  addCheckboxWithText({
    leftMargin: params.leftMarginCenter,
    text: 'BDR-Beitritt',
    topMargin: _topMargin,
    value: props.modelValue.personalData.wantsBdrMembership,
  })
  _topMargin += textHeight

  _topMargin += addText({
    description: '(bspw. Allergiker)',
    leftMargin: params.leftMargin,
    text: props.modelValue.personalData.specialNeeds,
    title: 'Besonderheiten',
    topMargin: _topMargin,
    withUnderline: true,
  })

  addCheckboxWithText({
    leftMargin: params.leftMargin,
    text: 'Ich beantrage hiermit die Breitensportlizenz (für die Teilnahme an den RTF).',
    topMargin: _topMargin,
    value: props.modelValue.personalData.wantsAmateursportslicense,
  })
}

const addPage2 = (params: { leftMargin: number; topMargin: number; leftMarginCenter: number }) => {
  let _topMargin = params.topMargin

  pdfGenerator.addPage()

  _topMargin += addText({
    fontSize: 14,
    leftMargin: params.leftMargin,
    text: 'Mitgliedsbeitrag',
    topMargin: _topMargin,
    underlineColor: 'grey',
    underlineLength: 180,
    withUnderline: true,
  })

  _topMargin += addRadioButtons({
    leftMargin: params.leftMargin,
    options: ['Bar', 'Lastschrifteinzug'],
    text: 'Zahlungsweise (zutreffendes bitte ankreuzen):',
    topMargin: _topMargin,
    value: props.modelValue.fee.paymentMethod,
  })

  _topMargin += addText({
    leftMargin: params.leftMargin,
    text: `Hiermit ermächtige ich den RTC Köln e.V. 1972 den Jahresbeitrag gemäß der aktuellen Beitragsordnung
jährlich im Voraus zu Lasten meines Kontos bis auf Widerruf einzuziehen:`,
    topMargin: _topMargin,
  })

  addText({
    leftMargin: params.leftMargin,
    text: props.modelValue.fee.iban,
    title: 'IBAN',
    topMargin: _topMargin,
    withUnderline: true,
  })
  _topMargin += addText({
    leftMargin: params.leftMarginCenter,
    text: props.modelValue.fee.bic,
    title: 'BIC',
    topMargin: _topMargin,
    withUnderline: true,
  })

  addText({
    leftMargin: params.leftMargin,
    text: props.modelValue.fee.creditInstitute,
    title: 'Kreditinstitut',
    topMargin: _topMargin,
    withUnderline: true,
  })
  _topMargin += addText({
    leftMargin: params.leftMarginCenter,
    text: props.modelValue.fee.bankholder,
    title: 'Kontoinhaber',
    topMargin: _topMargin,
    withUnderline: true,
  })

  addText({
    leftMargin: params.leftMargin,
    text: props.modelValue.fee.signature.location,
    title: 'Ort',
    topMargin: _topMargin,
    withUnderline: true,
  })
  _topMargin += addText({
    leftMargin: params.leftMarginCenter,
    text: date.formatDate(props.modelValue.fee.signature.date, 'DD.MM.YYYY'),
    title: 'Datum',
    topMargin: _topMargin,
    withUnderline: true,
  })

  _topMargin += addSignature({
    leftMargin: params.leftMargin,
    text: 'Unterschrift Kontoinhaber',
    topMargin: _topMargin,
    value: props.modelValue.fee.signature.signature,
  })

  _topMargin += addText({
    fontSize: 14,
    leftMargin: params.leftMargin,
    text: 'Mitgliedschaft',
    topMargin: _topMargin,
    underlineColor: 'grey',
    underlineLength: 180,
    useHeadlineSpace: true,
    withUnderline: true,
  })

  _topMargin += addCheckboxWithText({
    description: '(bei Vereinswechsel bitte unbedingt angeben)',
    leftMargin: params.leftMargin,
    text: 'Ich bin bereits Mitglied beim Bund Deutscher Radfahrer',
    topMargin: _topMargin,
    value: props.modelValue.bdr.isMember,
  })

  addText({
    leftMargin: params.leftMargin,
    text: props.modelValue.bdr.number ?? '',
    title: 'BDR-Mitgliedsnummer',
    topMargin: _topMargin,
    withUnderline: true,
  })
  _topMargin += addText({
    leftMargin: params.leftMarginCenter,
    text: date.formatDate(props.modelValue.bdr.date, 'DD.MM.YYYY'),
    title: 'Mitglied seit',
    topMargin: _topMargin,
    withUnderline: true,
  })

  _topMargin += addText({
    fontSize: 14,
    leftMargin: params.leftMargin,
    text: 'Unterschrift',
    topMargin: _topMargin,
    underlineColor: 'grey',
    underlineLength: 180,
    useHeadlineSpace: true,
    withUnderline: true,
  })

  _topMargin += addText({
    fontSize: 9,
    leftMargin: params.leftMargin,
    text: `Mit dieser Erklärung trete ich dem RTC Köln e.V. 1972 bei.
Durch den Beitritt entstehen gegenüber dem RTC Köln e.V. 1972 keinerlei finanzielle, materielle sowie sonstige Forderungsansprüche.
Die Mitgliedschaft kann bis 30. September eines Jahres zum Jahresende gekündigt werden.
Eine Erstattung von bereits gezahlten Beträgen ist nicht möglich.
Mit dem Beitritt erkenne ich die aktuelle Satzung und die damit verbundenen Geschäftsordnungen des RTC Köln e.V. 1972 an.`,
    topMargin: _topMargin,
  })

  addText({
    leftMargin: params.leftMargin,
    text: props.modelValue.signature.location,
    title: 'Ort',
    topMargin: _topMargin,
    withUnderline: true,
  })
  _topMargin += addText({
    leftMargin: params.leftMarginCenter,
    text: date.formatDate(props.modelValue.signature.date, 'DD.MM.YYYY'),
    title: 'Datum',
    topMargin: _topMargin,
    withUnderline: true,
  })

  addSignature({
    leftMargin: params.leftMargin,
    text: 'Unterschrift (Bei Minderjährigen: Unterschrift des Erziehungsberechtigten)',
    topMargin: _topMargin,
    value: props.modelValue.signature.signature,
  })
}

const addPage3 = (params: { leftMarginCenter: number; leftMargin: number; topMargin: number }) => {
  let _topMargin = params.topMargin

  pdfGenerator.addPage()

  _topMargin += addText({
    fontSize: 14,
    leftMargin: params.leftMargin,
    text: 'Einwilligungserklärung für die Veröffentlichung von Mitgliederdaten im Internet',
    topMargin: _topMargin,
    underlineColor: 'grey',
    underlineLength: 180,
    withUnderline: true,
  })

  _topMargin += addText({
    leftMargin: params.leftMargin,
    text: `Der Vereinsvorstand weist hiermit darauf hin, dass ausreichende technische Maßnahmen
zur Gewährleistung des Datenschutzes getroffen wurden.
Dennoch kann bei einer Veröffentlichung von personenbezogenen Mitgliederdaten im Internet
ein umfassender Datenschutz nicht garantiert werden.
Daher nimmt das Vereinsmitglied die Risiken für eine eventuelle Persönlichkeitsrechtsverletzung
zur Kenntnis und ist sich bewusst, dass:`,
    topMargin: _topMargin,
  })

  _topMargin += addList({
    elements: [
      `die personenbezogenen Daten auch in Staaten abrufbar sind,
die keine der Bundesrepublik Deutschland vergleichbaren Datenschutzbestimmungen kennen,`,
      `die Vertraulichkeit, die Integrität (Unverletzlichkeit), die Authentizität (Echtheit)
und die Verfügbarkeit der personenbezogenen Daten nicht garantiert ist.`,
    ],
    leftMargin: params.leftMargin,
    topMargin: _topMargin,
  })

  _topMargin += addText({
    leftMargin: params.leftMargin,
    text: `Das Vereinsmitglied trifft die Entscheidung zur Veröffentlichung seiner Daten im Internet freiwillig
und kann seine Einwilligung jederzeit widerrufen.`,
    topMargin: _topMargin,
  })

  _topMargin += addText({
    fontSize: 13,
    leftMargin: params.leftMargin,
    text: 'Erklärung',
    topMargin: _topMargin,
    useHeadlineSpace: true,
  })

  _topMargin += addText({
    leftMargin: params.leftMargin,
    text: `"Ich bestätige das Vorstehende zur Kenntnis genommen zu haben und willige ein,
dass der RTC Köln e.V. 1972 folgende Daten zu meiner Person:`,
    topMargin: _topMargin,
  })

  addText({
    fontSize: 13,
    leftMargin: params.leftMargin,
    text: 'Allgemeine Daten',
    topMargin: _topMargin,
  })
  _topMargin += addText({
    fontSize: 13,
    leftMargin: params.leftMarginCenter,
    text: 'Spezielle Daten von Funktionsträgern',
    topMargin: _topMargin,
  })

  _topMargin += Math.max(
    addList({
      elements: [
        'Nachname, Vorname',
        `Bildhafte Darstellungen (in Printmaterialien,
auf der Internetseite, auf Social Media-Kanälen)`,
        `Sonstige Daten (z.B.: Leistungsergebnisse,
Lizenzen, Mannschaftsgruppe u.ä.)`,
      ],
      leftMargin: params.leftMargin,
      topMargin: _topMargin,
    }),
    addList({
      elements: ['Anschrift', 'Telefonnummer', 'Faxnummer', 'Email-Adresse'],
      leftMargin: params.leftMarginCenter,
      topMargin: _topMargin,
    }),
  )

  _topMargin += addText({
    leftMargin: params.leftMargin,
    text: 'wie angegeben in folgender Internetseite des Vereins www.rtc-koeln.de veröffentlichen darf."',
    topMargin: _topMargin,
  })

  addText({
    leftMargin: params.leftMargin,
    text: props.modelValue.consentPrivacyPolicySignature.location,
    title: 'Ort',
    topMargin: _topMargin,
    withUnderline: true,
  })
  _topMargin += addText({
    leftMargin: params.leftMarginCenter,
    text: date.formatDate(props.modelValue.consentPrivacyPolicySignature.date, 'DD.MM.YYYY'),
    title: 'Datum',
    topMargin: _topMargin,
    withUnderline: true,
  })

  addSignature({
    leftMargin: params.leftMargin,
    text: 'Unterschrift (Bei Minderjährigen: Unterschrift des Erziehungsberechtigten)',
    topMargin: _topMargin,
    value: props.modelValue.consentPrivacyPolicySignature.signature,
  })
}

const addPageBanner = () => {
  const internal = pdfGenerator.internal
  const totalPages = internal.pages.length

  for (let i = 1; i < totalPages; i++) {
    const pageSize = internal.pageSize

    pdfGenerator.setPage(i).addImage(bannerVertikal, 'PNG', pageSize.getWidth() - 9, 0, 9, pageSize.getHeight())
  }
}

const addPageFooter = () => {
  const internal = pdfGenerator.internal
  const totalPages = internal.pages.length

  for (let i = 1; i < totalPages; i++) {
    const footerText = `Seite ${i.toFixed()} von ${(totalPages - 1).toFixed()}`
    const pageSize = internal.pageSize

    pdfGenerator
      .setFontSize(10)
      .setPage(i)
      .setTextColor(colors.getPaletteColor('grey'))
      .text(footerText, pageSize.getWidth() - pdfGenerator.getTextWidth(footerText) - 10, pageSize.getHeight() - 10)
  }
}

const addRadioButtons = (params: { fontSize?: number; leftMargin: number; options: string[]; text: string; textColor?: string; topMargin: number; value: string }): number => {
  let _leftMargin = params.leftMargin
  let contentHeight = 0

  addText({
    fontSize: params.fontSize,
    leftMargin: _leftMargin,
    text: params.text,
    textColor: params.textColor,
    topMargin: params.topMargin,
  })

  _leftMargin += pdfGenerator.getTextWidth(params.text) + 5

  let prev = undefined
  for (let it of params.options) {
    if (prev) _leftMargin += pdfGenerator.getTextWidth(prev) + 20

    contentHeight += addCheckboxWithText({
      fontSize: params.fontSize,
      leftMargin: _leftMargin,
      text: it,
      topMargin: params.topMargin,
      value: it === params.value,
      withoutTopMargin: true,
    })
    prev = it
  }

  return contentHeight / params.options.length
}

const addSignature = (params: { leftMargin: number; topMargin: number; text: string; value: string }): number => {
  let contentHeight = 0

  if (params.value) pdfGenerator.addImage(params.value, 'PNG', params.leftMargin, params.topMargin, 100, 25)
  contentHeight += 28

  contentHeight += addText({
    fontSize: 8,
    leftMargin: params.leftMargin,
    text: params.text,
    topMargin: params.topMargin + contentHeight,
  })

  return contentHeight
}

const addText = (params: {
  description?: string
  fontSize?: number
  leftMargin: number
  text: string
  textColor?: string
  title?: string
  topMargin: number
  underlineColor?: string
  underlineLength?: number
  useHeadlineSpace?: boolean
  withUnderline?: boolean
}): number => {
  let contentHeight = 0
  const fontSize = params.fontSize ?? 12

  if (params.useHeadlineSpace) contentHeight += 10

  if (params.title) contentHeight += addTextTitle({ fontSize: fontSize - 2, leftMargin: params.leftMargin, text: params.title, topMargin: params.topMargin + contentHeight })

  pdfGenerator.setFontSize(fontSize)
  pdfGenerator.setTextColor(colors.getPaletteColor(params.textColor ?? 'black'))
  pdfGenerator.text(params.text, params.leftMargin, params.topMargin + contentHeight)
  contentHeight += params.text.split('\n').length * (pdfGenerator.getLineHeight() * 0.45)

  if (params.withUnderline)
    contentHeight += addUnderline({
      leftMargin: params.leftMargin,
      topMargin: params.topMargin + contentHeight - 7,
      underlineColor: params.underlineColor,
      underlineLength: params.underlineLength,
    })

  if (params.description) contentHeight += addTextDescription({ fontSize: fontSize - 4, leftMargin: params.leftMargin, text: params.description, topMargin: params.topMargin + contentHeight })

  return contentHeight
}

const addTextDescription = (params: { fontSize: number; leftMargin: number; text: string; topMargin: number }): number => {
  pdfGenerator.setFontSize(params.fontSize)
  pdfGenerator.setTextColor(colors.getPaletteColor('black'))
  pdfGenerator.text(params.text, params.leftMargin, params.topMargin)

  return pdfGenerator.getLineHeight() * 0.5
}

const addTextTitle = (params: { fontSize: number; leftMargin: number; text: string; topMargin: number }): number => {
  pdfGenerator.setFontSize(params.fontSize)
  pdfGenerator.setTextColor(colors.getPaletteColor('grey'))
  pdfGenerator.text(params.text, params.leftMargin, params.topMargin)

  return pdfGenerator.getLineHeight() * 0.6
}

const createPDF = () => {
  pdfGenerator = getPDFGenerator()

  const leftMargin = 10
  const leftMarginCenter = 105
  const topMargin = 12

  addPage1({ leftMargin: leftMargin, topMargin: topMargin, leftMarginCenter: leftMarginCenter })

  addPage2({ leftMargin: leftMargin, topMargin: topMargin, leftMarginCenter: leftMarginCenter })

  addPage3({ leftMargin: leftMargin, topMargin: topMargin, leftMarginCenter: leftMarginCenter })

  addPageFooter()

  addPageBanner()
}

const download = async () => {
  isLoading.value = true

  createPDF()

  await pdfGenerator.save('Mitgliedsantrag.pdf', { returnPromise: true })

  isLoading.value = false
}

const getPDFGenerator = () => {
  // Default export is a4 paper, portrait, using millimeters for units
  const pdfGenerator = new jsPDF({})

  pdfGenerator.setFont('Bahnschrift-Regular')

  return pdfGenerator
}

const submit = async () => {
  await download()

  openURL(
    'mailto:vorstand@rtc-koeln.de?subject=Antrag%20auf%20Mitgliedschaft' +
      '&body=Hallo%20RTC%20K%C3%B6ln%2C%0D%0A%0D%0Agerne%20w%C3%BCrde%20ich%20eine%20Mitgliedschaft%20in%20eurem%20Verein%20beantragen.' +
      '%0D%0AAnbei%20mein%20ausgef%C3%BClltes%20Formular.',
  )
}
</script>
