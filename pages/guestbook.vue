<template>
  <v-card id="GuestbookView" flat>
    <v-card-title class="text-body-2 text-sm-body-1 text-md-h6 text-lg-h5 text-xl-h4" v-text="'Gästebuch'" />
    <v-card-subtitle class="text-caption text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h5" v-text="'Briefpost bitte immer an: RTC Köln, Postfach 990103, 51083 Köln'" />
    <v-card-actions>
      <v-btn
        href="mailto:PR@rtc-koeln.de?subject=G%C3%A4stebuch%20-%20Thema&body=Hallo%20RTC%20K%C3%B6ln%2C%0D%0A%0D%0APlatzhalter%20f%C3%BCr%20den%20G%C3%A4stebucheintrag%0D%0A%0D%0A--%0D%0AViele%20Gr%C3%BC%C3%9Fe%0D%0AMax%20Mustermann%0D%0AAus%20K%C3%B6ln"
        class="text-caption text-sm-body-2 text-lg-body-1"
        style="background-color: var(--v-primary-base); color: var(--v-secondary-base)"
      >
        Gästebucheintrag hinzufügen
        <v-icon right v-text="icons.mdiEmailSend" />
      </v-btn>
    </v-card-actions>
    <v-card-text>
      <v-row dense>
        <v-col v-for="(item, index) in items" :key="index" :cols="$vuetify.breakpoint.mobile ? 12 : 6">
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
import Guestbook from '@/models/Guestbook'
import Source from '@/models/enums/guestbook/Source'

export default defineComponent({
  components: { CGuestbook },
  setup() {
    return {
      icons: {
        mdiEmailSend,
      },
      items: [
        new Guestbook(
          'Mai/Juni 2012',
          'Michaela Bäcker',
          Source['E-Mail'],
          `Der Tag danach ...

So, ich hatte gestern das große Vergnügen an dem Forstbach-Marathon 2012 teilzunehmen.
Den Tag zuvor hatte ich noch wenig lust 200 km und ein paar gequetschte zu fahren.
Die Wetterprognose war auch nicht so dolle, leichtes Gewitter war angesagt.
Außerdem bedeutet so ein Marathon immer sehr früh aufzustehen ( in diesem Falle 04:30 Uhr ) :-)
Und mein Radkollege hat abgesagt - also genug Gründe, sich den Sonntag anders zu verplanen.
Wenn da nicht der innere Schweinehund den Kampf angesagt hätte ...
Und mal ehrlich meine Laune wäre am Sonntag nicht berauschend gewesen denn ...

es war eine super gelungene RTF !!!

Leider gab es anfangs Schwierigkeiten da irgend so ein Depp die Schilder die auf die Strecke führen sollten abmontiert hat ...
das ist ein übler Scherz wenn man denn 200 KM radeln möchte.
Da kommt eine Wegsuche nicht gut.
Ich hatte das Glück einen Garmin dabei zu haben.
Ich hatte mir die Strecke Tags zuvor aufgeladen und konnte so die Streckenführung erkennen.
Das wiederum hatte aber zu Folge, das ich, anstatt wie geplant ganz locker anfangen, eine "Meute" hinter mir hatte die die Strecke nicht kannte und auch so ein Gerät nicht besaßen.
Da fühlte man sich dann schon ein wenig "auf der Jagd" wenn die jungen Burschen hinter einem fröhlich Quatschen und spaß haben und man selber bei 85% der Maximalen HF die Strecke abfährt ;-)
Zum Glück war der Spuk nach 10 km erledigt und die Wegbezeichnung waren wieder sichtbar angebracht.
So konnte ich es dann ganz entspannt angehen lassen ...
Schnell fand ich wieder in meinen Trott - und mit mir auch ein Radkollege dessen Name ich leider vergessen habe ( ? ).
Er ist echt gut drauf.
Der zog auf der Geraden ein Tempo, das war schon echt klasse.
Ich genoss es bei Ihm im Windschatten fahren zu dürfen.
So konnte ich auch die traumhafte Gegend genießen !!!
Bei KM 60/65 passierte mir dann leider eine Panne :-) Mein Vorderreifen hatte einen platten in der Abfahrt ...
da habe ich Glück gehabt, das es mich nicht zerbröselt hat.
Zu diesem Zeitpunkt waren wir mit einem kleinen Pulk unterwegs.
Mein Kollege bekam von meinem Dilemma nichts mit.
Und so stand ich da mit einem Platten - Flickzeug hatte ich, aber leider keine Ahnung wie ich so einen Schlauch auch repariere bzw.
austausche.
Und da gilt dann ganz klar der Spruch: "Ich bin so froh, das ich ein Mädchen bin"
Keine 2 Minuten später kam ein Mitfahrer vom RTC Rodenkirchen und hat mir anstandslos geholfen.
Kurz darauf kam auch ein Wagen Vom RTC Köln und fragte ob er auch helfen könnte ...
Das war unglaublich nett !!!!! Schön, das es solche Menschen gibt !!!!
Bei der nächsten Verpflegung wartete dann mein "Kollege" auch schon auf mich ;-)
Die Verpflegungsstellen waren allesamt klasse !!! Es gab Kuchen, Rosinenstuten, Kekse, Weingummi, Riegel, und und und ...
Für die Marathon'is gab es sogar noch eine warme Mahlzeit.
Das Wetter war auch absolut in Ordnung.
Es kamen nur ein paar Tropfen runter und die konnte man genießen wurde es doch zum Ende der Tour mächtig warm mit Sonne !!!!
Fazit: Eine absolut lohnenswerte RTF - sehr nette, und hilfsbereite Helfer - super Gegend !!!!
Auf diesem Wege auch noch mal ein herzliches Dankeschön für die nette Begleitung Namens ? - ohne ihn wäre ich nicht so schnell unterwegs gewesen.

Lieben Gruß
Michaela Bäcker
Aus Kierspe`,
          '... eine super gelungene RTF !!!'
        ),
        new Guestbook(
          'Mai/Juni 2012',
          'Matthias Zimmer',
          Source['E-Mail'],
          `Sehr geehrte Damen und Herren,

Ich freue mich sehr wenn der Breitensport immer noch großen Zulauf findet.
Überhaupt keine Freude empfinde ich wenn Radsportbegeisterte ihre Freude widerrum schon Morgens um kurz nach 7 in reinen Wohngebieten lautstark zum Ausdruck bringen.
So geschehen heute Morgen in Libur (Freiheit/Stockumer Weg) Seit diesem Zeitpunkt war ich leider wach und konnte den Hochgenüssen der lautstarken Artikulation bestens folgen.
Ein weiterer Kritikpunkt ist: in den an Libur angrenzenden Feldern genießen viele ihre Freizeit, Hundehalter, Jogger, Walker und andere sind massivst durch unangemessene Geschwindigkeit Ihrer Fahrer gestört.
Auch in Libur selber, sie kennen die Strassen wahrscheinlich, sind Ihre Teilnehmer unangemessen schnell unterwegs.
Ich selber durfte eine Gruppe "vorbeifliegender" Radler genießen.

Ich fasse meine Kritik noch einmal zusammen.
- unangemessene Geschwindigkeit
- zu hohe Lautstärke der Teilnehmer in reinen Wohngebieten zu nachtschlafender Zeit
- bedingte Bereitsschaft zu gegenseitiger Rücksichtnahme
- keine Signalisierung durch von hinten heraneilenden Radgruppen (Ihre Sportgeräte haben keine hohen Laufgeräusche)
- keine Information der Anwohner, damit diese sich darauf einstellen können.

Ich gebe zu ich habe wahrscheinlich nicht die besten Exemplare erwischt, aber diese sind natürlich dann das Markenzeichen Ihrer Veranstaltung.

mit freundlichen Grüssen
Matthias Zimmer`,
          'Lärmbelästigung und Raserei'
        ),
        new Guestbook(
          'Mai/Juni 2012',
          'Monika und Helmut Moosmann',
          Source['E-Mail'],
          `Liebe RTCler,

CHAPEAU!!! Wir sind zwar nur die 75-er (eigentlich waren es 84 km) gefahren, aber es war ein Traum!
Und besonders möchten wir die Verpflegung - hier besonders an der 1. Kontrolle - hervorheben.
Ein Genuss par excellence! Das Beste, was wir in unserer 8-jährigen RTF-Erfahrung erleben durften!
Als Feinschmeckerin kann ich dies sehr wohl beurteilen: die tollen Kuchen, die liebevoll zubereiteten Brötchen mit Frischkäse und Garnitur und natürlich das Schmalzbrot.
Und keine WAFFELN! Toll! Ihr könnt auf eure Frauen stolz sein, super! Und später am Ziel dann die wunderbare Quiche mit den zahlreichen Salaten habe ich genossen!
Vielen Dank nochmals für diese wunderbare Tour! Hier spürt man euer Herzblut in aller Gänze! Macht weiter so.

Herzlichst grüßen die RSGler (Ford)

Monika u. Helmut Moosmann`,
          'CHAPEAU !!!'
        ),
      ],
    }
  },
})
</script>

<style lang="scss" scoped></style>
