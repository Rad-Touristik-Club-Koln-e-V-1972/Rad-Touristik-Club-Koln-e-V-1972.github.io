import { ref } from 'vue'
import { defineStore } from 'pinia'
import FeeBuilder from 'src/models/builder/membership-registration/FeeBuilder'
import Fee from 'src/models/entities/membership-registration/Fee'

export default defineStore('membershipRegistration', () => {
    const fees = ref<Fee[]>([
        new FeeBuilder().setId('75b6e71d-d3ce-42ed-abe2-c2feaaadaf23').setName('Aufnahmegebühr, einmalig').setPrice('40,00').buildFee(),
        new FeeBuilder().setId('66d7227d-23c3-4a1f-818b-c367c44c1353').setName('Kinder- und Jugendliche bis 18 Jahre').buildFee(),
        new FeeBuilder().setId('e99cd2d9-6ee6-473d-9892-078a0e77ca59').setName('Erwachsene ab 18 Jahre').setPrice('60,00').buildFee(),
        new FeeBuilder().setId('73f9df48-c849-4f5a-bb8a-33e855577909').setName('Familien (2 Erwachsene)').setPrice('100,00').buildFee(),
        new FeeBuilder().setId('b6509e43-d75f-4fc9-b04b-352ce2faa7af').setName('Ehrenmitglied').buildFee(),
        new FeeBuilder().setId('d0d24313-21e6-4342-a917-1ea8a8bb57ff').setName('Partner/Partnerin des Ehrenmitglieds').setPrice('45,00').buildFee(),
        new FeeBuilder().setId('ba3f81a3-2bff-471a-8aa9-db3449df88d9').setName('Fördernde Mitglieder').setPrice('50,00').buildFee(),
        new FeeBuilder().setId('76b7423c-2a89-4d7b-a9a1-260a2aa59524').setName('BDR-Mitgliedsbeitrag').setPrice('20,25').buildFee(),
        new FeeBuilder().setId('80e515b7-0198-427e-a90c-067833933fc4').setName('Tretradversicherung').setPrice('5,90').buildFee(),
    ])

    return { fees }
})
