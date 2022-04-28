<template>
    <v-card id="GuestbookView" flat>
        <v-card-title class="text-body-1 text-sm-h6 text-md-h5 text-lg-h4 text-xl-h3" v-text="'Gästebuch'" />
        <v-card-subtitle class="text-body-2 text-sm-body-1 text-md-h6 text-lg-h5 text-xl-h4" v-text="'Briefpost bitte immer an: RTC Köln, Postfach 990103, 51083 Köln'" />
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
import GuestbookEntryBuilder from '@/models/builder/guestbook/EntryBuilder'
import Source from '@/models/enums/guestbook/Source'

export default defineComponent({
    components: { CGuestbook },
    setup() {
        return {
            icons: {
                mdiEmailSend,
            },
            items: [
                new GuestbookEntryBuilder().date('XXX').name('XXX').source(Source['E-Mail']).text(`XXX`).title('XXX').build(),
                new GuestbookEntryBuilder().date('XXX').name('XXX').source(Source['E-Mail']).text(`XXX`).title('XXX').build(),
                new GuestbookEntryBuilder().date('XXX').name('XXX').source(Source['E-Mail']).text(`XXX`).title('XXX').build(),
                new GuestbookEntryBuilder().date('XXX').name('XXX').source(Source['E-Mail']).text(`XXX`).title('XXX').build(),
                new GuestbookEntryBuilder().date('XXX').name('XXX').source(Source['E-Mail']).text(`XXX`).title('XXX').build(),
                new GuestbookEntryBuilder().date('XXX').name('XXX').source(Source['E-Mail']).text(`XXX`).title('XXX').build(),
                new GuestbookEntryBuilder().date('XXX').name('XXX').source(Source['E-Mail']).text(`XXX`).title('XXX').build(),
                new GuestbookEntryBuilder().date('31.05.2015, 20:11').name('Michael Kalisch').source(Source.Facebook).title('top top top :-)').build(),
                new GuestbookEntryBuilder().date('31.05.2015, 20:10').name('Horst Voll').source(Source.Facebook).title('War geil und sehr anstrengend ! :)').build(),
                new GuestbookEntryBuilder()
                    .date('31.05.2015, 19:29')
                    .name('Horst Paesch')
                    .pictures(['https://rtc-koeln.de/content/pics/guestbook/rtc-gb-150531.jpg'])
                    .source(Source.Facebook)
                    .text(
                        `Danke für ein perfekt organisierten Marathon, die Strecke war super ausgesucht, viele ruhige Straßen, tolle Ausblicke!
Die Damen und Herren an den Kontrollpunkte/Verpflegungspunkten waren alle sehr nett und hilfsbereit, die Verpflegung ist der Knaller.

Da nimmt man beim Marathon noch zu :-)`
                    )
                    .title('... da nimmt man beim Marathon noch zu')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('19. Juni 2014, 18:43')
                    .name('Helga Hasberg')
                    .source(Source['E-Mail'])
                    .text(
                        `Hallo RTC,

ich/wir wollten nur sagen, dass ...ich heute nach langer Zeit mal bei euch im Internet zu Gast war.
Erinnerungen wurden wach.
Ich wünsche euch weiterhin für die Zukunft viel Erfolg und bei allen Touren gutes Gelingen.

Viele liebe Grüße
Helga`
                    )
                    .title('... weiterhin viel Erfolg')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('28. Mai 2014, 12:37')
                    .name('Jessica Bosen')
                    .source(Source['E-Mail'])
                    .text(
                        `Hallo RTC,

was für ein Andrang schon um 6 Uhr?! Ich gehörte nicht zu den Marathonfahrern, wollte eine der kleineren Strecken abfahren und stand plötzlich schon in einer anderen Warteschlange.
Es kamen immer mehr und mehr Radfahrer, die genau so wie ich bei dem schönen Wetter früh starten wollten.
Alle Kassenbetreuer gaben ihr Bestes, um die Anmeldungen so schnell wie möglich aufzunehmen.
Bei so einem Ansturm musste schon in den frühen Morgenstunden improvisiert werden.
So ein großes Kuchenbuffet mit hausgemachten Kuchen kannte ich bis dahin noch nicht.
Die Kontrollen waren mit einer anderen sehr auffallenden Auswahl versehen: Brot, Marmelade, Weckchen, Hörnchen und Kekse.
Endlich mal nicht die üblichen Waffeln, Bananen, oder sogar nur Waffeln, oder nur Bananen.

Bei der Streckenführung haben sich die Verantwortlichen sehr viel Mühe gegeben.
Die zweitlängste Strecke war für mich mit 1653 hm ziemlich anstrengend, aber der tolle Ausblick, die gut positionierten Kontrollstellen, das schöne Wetter und die abgelegenen Wege waren das Ganze mehr als Wert.
Der Ansturm an Teilnehmern riss auch am späten Nachmittag nicht ab.
Der Grill war durch seine große Auswahl an selbstgemachten Salaten und Grillwürstchen ununterbrochen stark besucht.
Nach Sonntag kann ich nun selbst mitreden und für mich war es ein tolles Erlebnis, endlich diese bekannte RTF kennengelernt zu haben.
Das frühe Aufstehen an einem Sonntag hatte sich definitiv gelohnt.
Insgesamt hieß es für den Veranstalter bei so vielen Besuchern den Überblick zu bewahren, was ihm und den fleißigen Helfern auch gut gelungen war. Ein großes Kompliment an das Team, das trotz des großen Ansturms, sehr gut in dieser Situation reagiert hat.

Bis zum nächsten Jahr
Jessica`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... ein tolles Erlebnis und ein großes Kompliment')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('27. Mai 2014')
                    .name('velotoerist')
                    .source(Source['E-Mail'])
                    .text(
                        `Hallo RTC,

das war ein sehr schöner Radmarathon am Sonntag.

Eine tolle Strecke, weitgehend verkehrsarm und Ã¼berwiegend recht gute Oberflächen (in der gewählten Richtung keine Selbstverständlichkeit), nettes Personal, sehr gute Ausschilderung und eine prima Verpflegung.
Allein der Nudeltopf in Bebbingen war sensationell gut, auch wenn ich eigentlich kein Fan der warmen Verpflegung unterwegs bin, die liegt so schwer im Magen an den Folgenhügeln...
(daher lieber nicht sooo lecker kochen oder - noch besser - im Ziel servieren)

Auch davor und danach waren die Tische (bei uns) reich gedeckt.
Vielleicht sollte mancher "Schlemmermeier" einfach etwas früher losfahren, dann gibt's auch noch mehr.
Da sind wir auch schon bei meinem einzigen Kritikpunkt: Wenn eine Startzeit angegeben wird, würde ich es gut finden, wenn diese auch konsequent eingehalten würde und nicht bereits eine Viertelstunde (oder mehr) eher losgefahren wird.
Sollte doch kein Problem sein.

Ansonsten: Weiter so!

Beste Grüße
velotoerist`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... sehr schöner Radmarathon')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('27. Mai 2014, 13:00')
                    .name('Helmut Hane')
                    .source(Source['E-Mail'])
                    .text(
                        `Prima RTF am vergangenen Sonntag.
Bericht Ã¼ber meine Fahrt auf der 150er Strecke jetzt auf meiner Website www.sportlich-radeln.de

Helmut Hane
www.sportlich-radeln.de`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... Prima RTF')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('27. Mai 2014, 09:28')
                    .name('Marco Gerlach')
                    .source(Source['E-Mail'])
                    .text(
                        `Hallo RTC,

ich war am Sonntag auf der Marathon-Strecke unterwegs.
Die Strecke war wirklich sehr sehenswert und gut
ausgeschildert (auch wenn ich mich einmal verfahren habe, was aber an eigener Blindheit gelegen hat).

Orga und Verpflegung waren Tiptop, da kann man nicht meckern!

Danke, hat wirklich Spaß gemacht!

Gruß
Marco Gerlach`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... Tiptop')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('27. Mai 2014, 09:26')
                    .name('Jörg Homann')
                    .source(Source['E-Mail'])
                    .text(
                        `Ein langer Tag, nicht nur für die Fahrer auf den langen Strecken der Forsbach-Tour 2014, nein, auch für die Helfer des veranstaltenden Vereins RTC Köln 1972 e.V.
â€� aber auch ein schöner Tag!

Bereits um 5:10 Uhr, mit kurzer Verspätung, öffneten sich die Türen der Sporthalle in der Heerstraße in Zündorf und blitzartig verteilten sich die helfenden Hände um mit den letzten Vorkehrungen ihre Stationen für den Andrang der Sportler vorzubereiten â€� und die kamen dann (wie üblich) sogar schon lange vor Öffnung der Anmeldung und warteten mehr oder weniger geduldig auf Kaffee und Startkarten.

Neben den fünf herkömmlichen Anmeldetischen war auch scan&bike mit am Start, um die Athleten schnell auf die Strecke zu schicken â€� und das ging auch wieder richtig zügig, nach dem Scannen des auf http://scan.bike vorab gedruckten oder aufs Smartphone gespeicherten QR Codes und dem Bezahlen des Startgelds trägt der Laptop den Fahrer (ob Marathon oder kürzer, ob mit oder ohne Wertungskarte und sogar Trimmfahrer) per Mausklick im Bruchteil einer Sekunde in die Teilnehmerliste ein und sofort kommt der nächste an die Reihe â€� zeitraubende Handarbeit übernimmt der Computer und der einmal erzeugte
QR Code gilt die ganze Saison â€� mit dem Laserdrucker ausgedruckt kann man ihn bis auf eine Kantenlänge von 2,5 cm verkleinern und auf die Wertungskarte kleben oder laminieren und dadurch für die vielen RTF-/CTF-Teilnahmen konservieren â€� denn eines kann der Code nicht vertragen und das ist wenn er verwischt und undeutlich wird.
Auch für den Veranstalter wird es leichter, wenn nach und nach immer mehr Sportler mit QR Code zur Einschreibung kommen kann eh schon knappes Personal reduziert werden und auch die langen Schlangen bei der Anmeldung entfallen durch die um ein Vielfaches kürzere Zeit des Einzelnen am Schalter.
Scannen, Kassieren, Klicken â€� Scannen, Kassieren, Klicken â€� Scannen, Kassieren, Klicken,â€¦ so geht scan&bike!

Die jährliche Forsbach-Tour ist immer ein weiteres Highlight im RTF Kalender, bei besonders gutem Wetter wird die viele professionelle Arbeit des Vereins und seiner Mitglieder auch mit hohen Teilnehmerzahlen belohnt â€� mit scan&bike sind wir auf dem richtigen Weg die morgendliche Wartezeit zu minimieren und mit zum guten Gelingen einer Veranstaltung beizutragen.

Jörg Homann
http://scan.bike`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... erfolgreicher Einsatz von scan&bike')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('27. Mai 2014, 08:50')
                    .name('Norbert Priefert')
                    .source(Source['E-Mail'])
                    .text(
                        `Jetzt muss man hier aber mal einen Punkt machen und in die Bresche springen.
Kritik ist durchaus erlaubt, aber man muss, wenn man das macht, auch alle Umstände mit einbeziehen.
Hier wird aber in dem Beitrag alles, aber auch alles schlecht geredet.
Der RTC-Köln organisiert eine solche Veranstaltung nicht zum ersten Mal.
Am Sonntag war für den ausrichtenden Verein eine Rekordbeteiligung zu verzeichnen, mit der man -bei all der Erfahrung- nicht gerechnet hat und in dem Ausmaß auch nicht rechnen konnte.
Fast 1.300 Teilnehmer und man ist wahrscheinlich von einem Spitzenwert von 900 bis 1.000 ausgegangen.
Und an einem Sonntag können ausgegangene Nahrungsmittel nicht mal so eben nachgeordert werden.

Sich jetzt an allem aufzuhängen und die Umstände die dazu geführt haben nicht zu berücksichtigen, ist gegenüber dem Veranstalter nicht fair.
Und mal ehrlich Herr General-Kritiker, wofür seid ihr denn überhaupt zur RTF gekommen? Doch nicht etwa wegen eurer Radsportbegeisterung.
Nein, ich hätte euch gleich nach dem Start ein schickes Cafe empfehlen können oder alternativ ein gutes Restaurant.
Echten Radsportlern geht es doch vielmehr um den Radsport und das damit verbundene Erleben schöner Strecken.
Und wenn dann mal wirklich an einer Kontrolle was fehlt, was nicht der Regelfall sein sollte aber nachvollziehbar passieren kann, ja dann fährt man zur nächsten Tanke und zieht sich da was rein.
Wie macht man das denn auf den Trainingsrunden, die länger ausfallen als geplant?
Ich nehme an, ihr seid schon große, selbständige Jungs; ansonsten empfehle ich euch einen Verein für betreutes Rennradfahren zu gründen.
Auch wenn am Ende alles ausging, aus nachvollziehbarem Grund, die Veranstaltung war und bleibt toll!

mit sportlich fairen Grüßen
Norbert`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: Feedback auf die Generalkritk ....wir sind enttäuscht von eurer Veranstaltung und kommen nicht nochmal wieder')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('26. Mai 2014, 20:16')
                    .name('Jörg Freitag')
                    .source(Source['E-Mail'])
                    .text(
                        `Hallo lieber RTC,

ich möchte mich bedanken für eine so tolle Tour.
Es war eine sehr sehenswerte Strecke, ausreichend Verpflegung und sehr nette Stationshelfer.
Mir hat es sehr gut gefallen und ich werde auf jeden Fall wiederkommen.

Gruß aus Recklinghausen
Jörg`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: Marathon... mir hat es sehr gut gefallen')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('26. Mai 2014, 16:57')
                    .name('Markus Reckter')
                    .source(Source['E-Mail'])
                    .text(
                        `Sehr geehrtes Team,

die Streckenwahl des Marathon war sehr schön, über verkehrsarme Straßen und durch landschaftliche Highlights perfekt gewählt.
Auch das Profil war sportlich anspruchsvoll und ließ keine Wünsche offen.

Leider war bei den letzten 2 Kontrollstellen keine Verpflegung mehr vorhanden.
Bis zur Warmverpflegung war diese sehr gut, danach wahrscheinlich durch die Fahrer auf den kürzeren schon verbraucht.

Vielleicht sollte, wie bei den Radmarathon Deutschland Veranstaltungen, die Verpflegung für die Marathonfahrer separat sein.

Liebe Grüße aus Koblenz
M. Reckter
www.rtf-koblenz.de`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... Streckenwahl sehr schön, die Verpflegung für die Marathonfahrer sollte separat sein')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('26. Mai 2014, 13:08')
                    .name('Claudia Braun')
                    .source(Source['E-Mail'])
                    .text(
                        `Das war eine RTF wie aus dem Bilderbuch.
Strecke (150), Verpflegung, Helfer, Wetter, alles passte.

Vielen lieben Dank für die hervorragende Organisation.
Im nächsten Jahr gerne wieder! Dank an die Jungs vom RC Schmitter für's Ziehen

Sportliche Grüße
Claudia Braun
Union Biesfeld Triathlon`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... eine RTF wie aus dem Bilderbuch')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('26. Mai 2014, 12:50')
                    .name('Angela Schmilewski')
                    .source(Source['E-Mail'])
                    .text(
                        `Liebe Orga des RTC Köln,

ich startete recht früh, da ich mich für die 156 km entschieden hatte.
Landschaftlich einfach nur herrlich und sehr verkehrsberuhigte Strecken bei wunderbarem Wetter - besser ging es nicht!

Ich fand reichhaltige Verpflegungsstellen vor - von der 1. bis zur 4. - sowie freundliche Orga und Helfer - sowohl auf der Strecke als auch im Start- und Zielbereich.

Ein herzliches Dankeschön an Orga und Helfer und Euch allen eine gute Regeneration - die habt Ihr Euch jetzt verdient ...

Viele Grüße von Angela
Fachwart RTC Mehlem
RTC Mehlem`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... ein herzliches Dankeschön an Orga und Helfer')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('26. Mai 2014, 10:55')
                    .name('Dirk Brieden')
                    .source(Source['E-Mail'])
                    .text(
                        `Wir sind gestern euren Marathon gefahren.

Die Strecke war wirklich schön,

ABER:
eure Verpflegung war m. E. gesagt, das Allerletzte!
Es gab keine Bananen (nur an 2 Kontrollen), keine Müsli-Riegel, keine Waffeln, keine Joghurts und die Getränke waren nicht isotonisch, da hätte man auch das Wasser aus der Sieg nehmen können.
Eure letzte Kontrolle war ein Totalausfall, da gab es gar nur Wurstscheiben, die den ganzen Tag schon von der Sonne "gebleicht" wurden.
Dabei braucht man nach 170km schon nochmal einen "Energieschub" durch Bananen, Müsli-Riegel, Waffeln oder ähnlichem.
Von Ernährung für Radsportler habt ihr wirklich keine Ahnung.

Getränke und Nahrung war das, was ihr insgesamt angeboten habt, eine Frechheit, da solltet ihr euch ein Beispiel an anderen Anbietern nehmen.
Da tröstet auch das mittelmäßige Gulasch-Nudel-Angebot an einer Kontrolle nicht darüber hinweg, wobei Gulasch eh schwer im Magen liegt und ungeeignet ist.
Euer gesamtes Verpflegungs-Angebot an den Kontrollen war nach dem Strickmuster "schön billig" zusammen gestellt und dafür 12 Euro zu verlangen, war eine Frechheit.

Euer Ambiente am Start-/Zielplatz solltet ihr auch mal überdenken, bei jeder anderen RTF sind auch Anbieter für "Rad-Klamotten".

Es war schlichtweg keine Atmosphäre, nur "Baller-Baller-Musik".

Eure Mitarbieter bei der An-/Abmeldung schienen mit allem etwas überfordert.
Es dauerte eine Ewigkeit, um nach der Tour unsere Serien-Karten zurück zubekommen, dabei saßen sie doch alle nur dumm rum und hatten nichts zu tun.
Nachdem wir alle von eurem Team angesprochen hatten und alle Mitarbeiter suchten, wurden die Karten dann gefunden.

Fazit:
Wir sind enttäuscht von eurer Veranstaltung und kommen nicht nochmal wieder`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... wir sind enttäuscht von eurer Veranstaltung und kommen nicht nochmal wieder')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('26. Mai 2014, 10:49')
                    .name('Michaela Packebusch, VfB Polch Abtl. Radsport')
                    .source(Source['E-Mail'])
                    .text(
                        `Vielen Dank für die tolle Organisation und Verpflegung auf dem Marathon (besonders erwähnenswert fand ich den klasse Reiskuchen von Silvana).

Nochmals vielen Dank an den Fahrer des Besenwagens, in dem ich leider sitzen musste, als mein Material defekt war.

LG Michaela`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... tolle Organisation und Verpflegung auf dem Marathon')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('26. Mai 2014, 10:33')
                    .name('Frank Stöcker')
                    .source(Source['E-Mail'])
                    .text(
                        `Hallo RTC,

eigentlich eine schöne Tour gestern, gut ausgesucht und bestens ausgeschildert.
ABER:
keine Parkpätze mehr in der Nähe, keine Startnummern mehr ( 9.45 Uhr ! ) und bei der ersten Kontrolle kaum noch was zu essen.
Nur noch Brotscheiben und trockene Keksreste.
Kein Obst, Riegel ...
NICHTS MEHR.

Auch die Kollegen an der ersten Kontrolle waren genervt und nicht mit der besten Laune da .......

Zitat aus Euerm Flyer "Sehr gute Verpflegung an allen Kontrollstellen und am Ziel"

Bei der 2. Kontrolle wieder kein Obst oder Riegel - die Kekse waren besser und ein bisschen Gebäck mit Sirup.
Getränke nur Tee.

Im Ziel - Ihr könnt es Euch denken auch ziemlich tote Hose.

Das ist für 12,- Euro für 2 Personen ein bisschen dürftig und hätte zumindest im Ziel in Form von Würstchen, Kuchen oder Teilerstattung ausgeglichen werden können.

Frank`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... eigentlich eine schöne Tour gestern, ABER')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('26. Mai 2014, 08:54')
                    .name('Reiche')
                    .source(Source['E-Mail'])
                    .text(`Vielen Dank für die Orga und die Auswahl der schönen Strecke.`)
                    .title('42. Forsbach-Tour, 25.05.2014: ... vielen Dank')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('26. Mai 2014, 08:15')
                    .name('Max Christian Obst')
                    .source(Source['E-Mail'])
                    .text(
                        `Die RTF gestern war mal wieder klasse was die Strecke und das Wetter anging.
Für den schlechten Straßenbelag teilweise könnt ihr ja nix.

Aber eine RTF wo es keine Bananen an den Verpflegungsstellen gibt, das geht gaaaaar nicht ;)

Nächstes Jahr will ich wieder meine Banane bekommen ... :D`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... klasse Strecke, aber keine Bananen :)')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('26. Mai 2014, 07:24')
                    .name('Stefan Schneider')
                    .source(Source['E-Mail'])
                    .text(
                        `Hallo Sportskollegen vom RTC Köln.

Ich möchte euch ein großes Lob zu eurer gestrigen Veranstaltung aussprechen.

Es passte einfach alles, Wetter, Verpflegung, Strecke.
So macht es Spaß Marathon zu fahren.

Mit Sportlichem Gruß,

Stefan Schneider
1.Vorsitzender RV Morgenstern Berrenrath
www.rv-morgenstern.de`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... ein großes Lob')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('26. Mai 2014, 07:06')
                    .name('Norbert Priefert')
                    .source(Source['E-Mail'])
                    .text(
                        `Hallo RTC Köln'ner,

das war wirklich super Klasse!! Tolle Organisation, freundliches und hilfsbereites Team, eine sehr schöne und interessante Streckenführung und -Gott sei Dank- das Wetter phantastisch.
Über 1200 Teilnehmer haben's euch gedankt.
Klasse! Nach der Wasserschlacht von vergangenem Jahr habt ihr euch das auch wirklich verdient!

Eigentlich kann man das gar nicht toppen ... Eigentlich ...

Die Messlatte habt ihr wirklich hoch aufgehängt, aber, wir vom RTC-Rodenkirchen nehmen dies als Herausforderung an.
Wir werden unser Bestes geben um zumindest annähernd euer Niveau zu erreichen.
Versprochen!

Also dann, bis Samstag, 14.06.2014 am Bildungswerk in Köln-Sürth, mit ebenfalls tollen Strecken, motiviertem Team und hoffentlich grandiosem Wetter.

Bis denne,

Norbert
www.rtc-rodenkirchen.de`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... eigentlich kann man das gar nicht toppen')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('25. Mai 2014, 19:44')
                    .name('Jürgen Ruttkowski')
                    .source(Source['E-Mail'])
                    .text(
                        `Hallo RTC,

die Forsbachtour am 25.05.2014, bei bestem Wetter, war ein voller Erfolg und die Strecke (115 km) hervorragend ausgesucht.

Viele Grüße und den besten Dank an alle, die zum Gelingen beigetragen haben.

Jürgen Ruttkowski`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... ein voller Erfolg')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('Mai/Juni 2012')
                    .name('Wolfgang Alberg')
                    .source(Source['E-Mail'])
                    .text(
                        `Hallo Sportfreunde,

leider finde ich auf euer Homepage kein Gästebuch, möchte mich, auch im Namen weiterer 8 Mitfahrer unserer Gruppe bei euch für die Tour ab Zündorf bedanken.

Neben der tollen Strecke und des netten Teams, habt ihr es auch geschafft die Sonne, entgegen aller Vorhersagen zu buchen.

Wir freuen uns schon auf die Tour im kommenden Jahr.

Mit sportlichen Grüßen

Wolfgang Alberg
www.cardiofitness.de`
                    )
                    .title('Ein großes Dankeschöööööön')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('Mai/Juni 2012')
                    .name('Ursula Koepp')
                    .source(Source['E-Mail'])
                    .text(
                        `Liebe Radsportfreunde,

ganz herzlichen Dank für die schöne RTF am Sonntag!

Was Ihr da auf die Beine gestellt habt war super!

Eine landschaftlich tolle Strecke, Verpflegung vom Feinsten auf der 125er Strecke, immer gut gelaunte Helfer u. selbst die angekündigten Gewitter hatten ein Einsehen mit Eurer Veranstaltung!
Auch wenn auf den ersten Kilometern nachgeschildert werden musste (Spiel"kinder" gibt's immer), habt Ihr versucht uns eine perfekte RTF zu bieten! Und Dank dem Track, den ich mir sicherheitshalber von Euer Homepage runter geladen hatte, ging auch orientierungsmäßig alles glatt.

Herzliche Grüße aus Rondorf,
Ursula Koepp
TSV Weiss-Köln`
                    )
                    .title('... ganz herzlichen Dank für die schöne RTF am Sonntag!')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('Mai/Juni 2012')
                    .name('Günter')
                    .source(Source['E-Mail'])
                    .text(
                        `Hallo Diana,

hatte Norbert am Sonntag noch getroffen und ihm gesagt, dass es mir sehr gut gefallen hatte.
Obwohl ich ja etwas unmotiviert war und es vor der ersten Kontrolle noch ein kleines Scharmützel mit "Kollegen" gab, wurde es ein wirklich schöner Tag, der nicht so schnell zu topen ist!!!

Also nochmals: 10 Punkte und die Krone für eure schöne RTF!!!

Ihr habt das sehr liebevoll gestaltet.
Die Kontrollen konnten sich absolut sehen lassen.
Alle sehr freundlich und kein Zeitstreß.
Liebe Leute kennengelernt.
Das Wetter hatte bis zum Schluss gehalten.
Das hebt die Laune ungemein.... :-)
Also euch allen vielen Dank für eure Mühe.
Natürlich auch an Klaus-Anton und Thilo, mit denen es viel Spaß gemacht hat zu fahren....

Viele Grüße

Günter`
                    )
                    .title('10 Punkte und die Krone für eure schöne RTF!!!')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('Mai/Juni 2012')
                    .name('Dieter Reich')
                    .source(Source['E-Mail'])
                    .text(
                        `Hallo Radsportler des RTC-Köln,

danke für die gut ausgearbeitete Tour am 20.05.12.
Strecke und Verpflegung wie immer prima.
Aber nicht zu vergessen die freundlichen Kontakte.
Schön, dass es noch Radsportler gibt, die ihre Freizeit für diesen schönen Event opfern !!

Es freut sich auf die nächste Veranstaltung, das benachbarte ISB-Team-Cologne

Sportliche Grüße
Dieter Reich
ISB-Team-Cologne`
                    )
                    .title('Danke für die gut ausgearbeitete Tour am 20.05.12')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('Mai/Juni 2012')
                    .name('Elke und Dieter')
                    .source(Source['E-Mail'])
                    .text(
                        `Hallo liebe RTCler,

herzlichen Dank für eine tolle Forsbachtour 2012.
Der Tip unserer Freundin Marlies, unbedingt teil zu nehmen, hat sich wahrlich als Volltreffer erwiesen.
Eine sensationelle Streckenführung, gepaart mit der ausgesprochen guten Verpflegung und ergänzt durch das schöne Frühsommerwetter waren die Zutaten für einen sehr schönen RTF-Sonntag.

Nochmal herzlichen Dank an alle RTCler.

Viele Grüße aus Monheim am Rhein
Elke und Dieter
Aus Monheim`
                    )
                    .title('... eine tolle Forsbachtour 2012')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('Mai/Juni 2012')
                    .name('Josef Witt')
                    .source(Source['E-Mail'])
                    .text(
                        `Guten Morgen,

ich bin gestern die 151 Strecke gefahren und wie ich um ca. 15.30 Uhr im Ziel wieder war wollte ich und meine drei anderen Radkollegen ein Grillwürstchen essen aber leider waren keine mehr da nur noch für die Jungs und Mädels vom Marathon das war sehr schade.
Da wir den ganzen Morgen nur Waffeln und Riegel gegessen hatten.

Für nächstes Jahr muss ich entweder schneller fahren oder eine kleinere Runde fahren damit ich noch ein Würstchen bekomme oder ich bringe mir ein Paar mit die dann gegrillt werden können.

An der ein oder anderen Kontrolle habe ich die Bananen vermiest schade.

Aber man kann es ja auch nicht jedem recht machen.

Sonst war es eine sehr gute Veranstaltung!

Mit freundlichen Grüßen
Josef Witt`
                    )
                    .title('Verpflegungsengpässe, sonst war es eine sehr gute Veranstaltung!')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('Mai/Juni 2012')
                    .name('Michaela Bäcker')
                    .source(Source['E-Mail'])
                    .text(
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
Aus Kierspe`
                    )
                    .title('... eine super gelungene RTF !!!')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('Mai/Juni 2012')
                    .name('Matthias Zimmer')
                    .source(Source['E-Mail'])
                    .text(
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
Matthias Zimmer`
                    )
                    .title('Lärmbelästigung und Raserei')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('Mai/Juni 2012')
                    .name('Monika und Helmut Moosmann')
                    .source(Source['E-Mail'])
                    .text(
                        `Liebe RTCler,

CHAPEAU!!! Wir sind zwar nur die 75-er (eigentlich waren es 84 km) gefahren, aber es war ein Traum!
Und besonders möchten wir die Verpflegung - hier besonders an der 1. Kontrolle - hervorheben.
Ein Genuss par excellence! Das Beste, was wir in unserer 8-jährigen RTF-Erfahrung erleben durften!
Als Feinschmeckerin kann ich dies sehr wohl beurteilen: die tollen Kuchen, die liebevoll zubereiteten Brötchen mit Frischkäse und Garnitur und natürlich das Schmalzbrot.
Und keine WAFFELN! Toll! Ihr könnt auf eure Frauen stolz sein, super! Und später am Ziel dann die wunderbare Quiche mit den zahlreichen Salaten habe ich genossen!
Vielen Dank nochmals für diese wunderbare Tour! Hier spürt man euer Herzblut in aller Gänze! Macht weiter so.

Herzlichst grüßen die RSGler (Ford)

Monika u. Helmut Moosmann`
                    )
                    .title('CHAPEAU !!!')
                    .build(),
            ],
        }
    },
})
</script>

<style lang="scss" scoped></style>
