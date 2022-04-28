<template>
    <v-card id="GuestbookView" flat>
        <v-card-title class="text-body-1 text-sm-h6 text-md-h5 text-lg-h4 text-xl-h3" v-text="'Gästebuch'" />
        <v-card-subtitle class="text-body-2 text-sm-body-1 text-md-h6 text-lg-h5 text-xl-h4" v-text="'Briefpost bitte immer an: RTC Köln, Postfach 990103, 51083 Köln'" />
        <v-card-actions>
            <v-btn
                href="mailto:PR@rtc-koeln.de?subject=G%C3%A4stebuch%20-%20Thema
                &body=Hallo%20RTC%20K%C3%B6ln%2C%0D%0A%0D%0APlatzhalter%20f%C3%BCr%20den%20G%C3%A4stebucheintrag%0D%0A%0D%0A
                --%0D%0AViele%20Gr%C3%BC%C3%9Fe%0D%0AMax%20Mustermann%0D%0AAus%20K%C3%B6ln"
                class="text-caption text-sm-body-2 text-lg-body-1"
                style="background-color: var(--v-primary-base); color: var(--v-secondary-base)"
            >
                Gästebucheintrag hinzufügen
                <v-icon right v-text="icons.mdiEmailSend" />
            </v-btn>
        </v-card-actions>
        <v-card-text>
            <v-row dense>
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
                new GuestbookEntryBuilder().date('XXX').name('XXX').source(Source.Facebook).text(`XXX`).title('XXX').build(),
                new GuestbookEntryBuilder()
                    .date(' 29.10.2016, 19:21')
                    .name('Jörg Moritz')
                    .source(Source['E-Mail'])
                    .text(
                        `
... ich wollte nur sagen, dass euch die CTF sehr gut gelungen ist.<br/>
<br/>
Vor allem die zweite Beschilderung nach einer Abzweigung gibt einem Sicherheit, dass man richtig ist.<br/>
<br/>
**Mir ist im Startbereich leider ein Mißgeschick passiert.**<br/>
**Auf den ersten ca. 200m habe ich meinen Radcomputer verloren.**<br/>
Falls also jemand einen Sigma ROX 6.0 CAD gefunden hat, wäre es schön, wenn der Kontakt hergestellt werden könnte.<br/>
<br/>
Grüße<br/>
Jörg Moritz<br/>
<br/>
<br/>
*Falls also jemand den Radcomputer zufällig gefunden hat, bitte hier melden, RTC Köln*<br/>
<br/>
*Der Tacho wurde gefunden, der Finder hat sich bei uns gemeldet - danke nochmal dafür - und Jörg hat ihn heute (31.10.)auch schon zurück bekommen ...*
`
                    )
                    .title('Hallo RTC ...')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('29.10.2016')
                    .name('Jürgen Rohr')
                    .source(Source.Facebook)
                    .text(
                        `
Schöne Runde bei gutem Wetter und sehr guter Verpflegung.<br/>
Hat Spaß gemacht.<br/>
Vielen Dank an das Orga-Team!!!
`
                    )
                    .build(),
                new GuestbookEntryBuilder()
                    .date('29.10.2016')
                    .location('RSC Erftstadt')
                    .name('Horst Paesch')
                    .source(Source.Facebook)
                    .text(
                        `
Wenn ich mal was konstruktives sagen darf, es war eine super spannende CTF, sehr abwechslungsreich,<br/>
die spärliche Beschilderung im Wald mit rotweißem Absperrband möchte ich garnicht kritisieren,<br/>
ich fand es sehr spannend und man kam dadurch mit den Kollegen ins Gespräch.<br/>
Also, wie gewohnt vom RTC , eine tolle Veranstaltung.
`
                    )
                    .build(),
                new GuestbookEntryBuilder()
                    .date('29.10.2016')
                    .location('RTV Lohmar')
                    .name('Se Sandra')
                    .source(Source.Facebook)
                    .text(
                        `
Ich fands geil!<br/>
Sollte mehr davon bei uns hier geben 😊
`
                    )
                    .build(),
                new GuestbookEntryBuilder().date('29.10.2016').name('Bernd Doelp').source(Source.Facebook).text(`Vielen Dank für die schöne Tour und bis nächstes Jahr`).build(),
                new GuestbookEntryBuilder()
                    .date('29.10.2016')
                    .name('Jörg Marso')
                    .source(Source.Facebook)
                    .text(
                        `
Es hat super viel Spaß gemacht und die Verpflegung war Spitze.<br/>
Denke ich war der einzige mit einem Pedelec, habe sonst keins gesehen.<br/>
Wir sehen uns dann 2017.
`
                    )
                    .build(),
                new GuestbookEntryBuilder().date('29.10.2016').name('Marcus Wilden').source(Source.Facebook).title('Schöne Tour bei bestem Wetter').build(),
                new GuestbookEntryBuilder()
                    .date('31.05.2016, 01:34')
                    .name('Gunter Maier')
                    .source(Source.Facebook)
                    .text(
                        `
Mir kommt es auch so vor als ob ich zugenommen habe, trotz der drei Varianten die wir gefahren sind (welche sich mMn auch sehr gelohnt haben).<br/>
Ihr ward alle total lieb und ich verzeihe euch, uns keinen Espresso zum Croissant gereicht zu haben 😀<br/>
<br/>
Alles super und eine toll ausgearbeitete Strecke (bezogen auf den Marathon, die anderen bin ich ja nicht gefahren).<br/>
<br/>
Ihr wollt Kritik, meine wäre diese:<br/>
Ganz am Anfang Kreuzung Hermann-Löss-Straße / Frankfurter Straße habt ihr zusätzlich zu den beiden Verkehrszeichen "Stopp" einen eigenen Warnhinweis angebracht,<br/>
damit durchdringt ihr ein einheitliches System und müsstet eigentlich jedes weitere Verkehrszeichen welches auf eine Gefahr hinweist bzw. ein Gebot vorgibt doppeln.<br/>
Macht man aber nicht weil solche Sicherheitssysteme einfach und verständlich gehalten werden sollen.<br/>
So könnte es dazu führen dass am nächsten Stoppschild wo kein zusätzliches Schild hängt,<br/>
man von keiner Relevanz für einen selbst ausgeht und man einfach drüber fährt ("vor allem wenn er schon im Tunnel fährt").<br/>
Ich glaube ein klarer Hinweis auf die StVO und deren Einhaltung reicht aus, da sie ein erprobtes System darstellt.<br/>
<br/>
Anders sieht es jetzt aus, wenn z.B. eine Abfahrt kommt und darin Schlaglöcher oder sonstige Gefahren für Radfahrer verborgen sind<br/>
und auch kein Verkehrszeichen darauf hinweist, dann ist ein Hinweis "Gefährliche Kurven", "Starkes Gefälle" oder "Straßenschäden" schon sinnvoll,<br/>
man sollte aber bei dem Jargon der StVO bleiben.<br/>
<br/>
Natürlich habe ich auch nichts gegen aufmunternde motivierende Sprüche einzuwenden, welche ich farblich aber anders gestalten würde.<br/>
<br/>
Klar ist das eine kleine Kritik, die eher einen Denkanstoss geben soll und wobei bestimmt nicht jeder hier meiner Meinung ist.<br/>
<br/>
Ich wollte es trotzdem loswerden, da wir uns gestern schon auf der Strecke darüber unterhalten haben.
`
                    )
                    .title('Ihr wollt Kritik? Meine wäre diese ...')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('30.05.2016')
                    .name('Lutz Schröder')
                    .source(Source.Facebook)
                    .text(
                        `
Und im nächsten Jahr gibt's bei der Warmverpflegung für die Vegetarier wenigstens ein Ketchup als Alternative zum Gulasch ??<br/>
<br/>
Ansonsten vielen Dank für die tolle Organisation und die schöne Strecke.
`
                    )
                    .title('Wo bleiben die Vegetarier?')
                    .build(),
                new GuestbookEntryBuilder().date('30.05.2016').name('Andreas Klemt').source(Source.Facebook).title('Sehr gut: Der Reiskuchen!').build(),
                new GuestbookEntryBuilder()
                    .date('30.05.2016, 14:46')
                    .name('Martin Holtzmann')
                    .source(Source['E-Mail'])
                    .text(
                        `
... ich bin die 158km-Runde gefahren!<br/>
<br/>
Sehr schöne, verkehrsarme Straßen (vor allem von Rosbach zur Vierbuchenmühle) - nettes Verpflegungsteam!<br/>
<br/>
Schade, dass das vorhersagte Wetter eine niedrige Teilnehmerzahl beschert hat, sogar auf Internet ist kein Verlass!!<br/>
<br/>
LG Martin
`
                    )
                    .title('Hallo RTC ...')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('30.05.2016, 13:04')
                    .location('Ruhrstadt Bochum')
                    .name('Martin Poettgen')
                    .source(Source['E-Mail'])
                    .text(
                        `
Ihr habt eine tolle Marathon Strecke mit schönen Varianten erarbeitet.<br/>
An 2 bis 3 Stellen hätte ein zusätzliches Schild ganz gut getan,<br/>
denn bei flotter Fahrt fehlte manchmal eine eindeutige Orientierung und Verfahrer und Umdreher kosten Zeit und Kraft (war wohl nicht der einzige).<br/>
<br/>
Die Wettervorhersage, die in Eurem Falle dann einmal nicht gestimmt hat (sonst hat sie uns dieses Jahr bei LBL und Röhn das vorausgesagte Mistwetter auch beschert)<br/>
hat Euch leider die Teilnehmerzahlen verhagelt.<br/>
Jedenfalls bin ich noch nie einen Marathon gefahren, bei dem ich die ersten Mit-Teilnehmer bei Km 180 getroffen habe.<br/>
Insofern einen ganz neue Erfahrung.<br/>
<br/>
Nicht verzagen, ein Sportlerherz übersteht dies und nächstes Jahr wird die Wettervorhersage dann sicherlich auch stimmen,<br/>
wie auch immer sie dann sein wird.<br/>
<br/>
Mit sportlichen Grüßen<br/>
Martin Poettgen, Ruhrstadt Bochum
`
                    )
                    .title('Der einsamste bisher erlebte Marathon ...')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('29.05.2016, 23:00')
                    .name('Andreas Tilles')
                    .organization('FB-Gruppe RTF und CTF - Radtourenfahrten des BDR (Bund Deutscher Radfahrer e.V.)')
                    .source(Source.Facebook)
                    .text(
                        `
Beste Warm-Verpflegung seit langem.<br/>
<br/>
Ohne Nachschlag gingen Hermann und ich da nicht wieder auf die Strecke.
`
                    )
                    .title('Nachschlag!')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('29.05.2016, 21:21')
                    .name('Volker Pütz')
                    .source(Source.Facebook)
                    .text(
                        `
Es war alles top top!<br/>
Bin den Marathon gefahren und es hat einfach Spaß gemacht.<br/>
<br/>
Danke an alle Helfer und das Orga Team!
`
                    )
                    .title('Es war alles top top!')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('29.05.2016, 20:50')
                    .name('Alexandra Raj')
                    .organization('FB-Gruppe RTF und CTF - Radtourenfahrten des BDR (Bund Deutscher Radfahrer e.V.)')
                    .source(Source.Facebook)
                    .title('Herrliche Strecke ')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('29.05.2016, 20:33')
                    .name('Roland Liffers')
                    .source(Source.Facebook)
                    .text(
                        `
... schließe mich dem Lob von David Pandya vollumfänglich an, man kann es tendenziell nicht besser machen ...<br/>
Nächstes Jahr wird wieder die 1000er Marke geknackt 😀
`
                    )
                    .title('Tolle Stullen, die 2.')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('29.05.2016, 20:20')
                    .name('Ludger Thier')
                    .organization('FB-Gruppe RTF und CTF - Radtourenfahrten des BDR (Bund Deutscher Radfahrer e.V.)')
                    .source(Source.Facebook)
                    .text(
                        `
Wer sich heute trotz der besch... Wettervorhersage der "bergischen Herausforderung des RTC Köln" mit 2700hm auf knappen 200km gestellt hat,<br/>
wurde bei herrlichem Wetter mit einer traumhaften Tour durch die wunderschöne Landschaft des Bergischen Landes belohnt.<br/>
<br/>
Die Sportler wurden von sehr freundlichen Helfern an den Kontrollstellen empfangen.<br/>
Die Verpflegung war mehr als reichlich und sehr gut, insbesondere die Warmverpflegung, Gulasch mit Nudeln, war ein Genuß.<br/>
<br/>
Ein großes Lob und DANKE an alle Helfer des RTC Köln für diesen tollen Tag.<br/>
<br/>
Bis nächstes Jahr!
`
                    )
                    .title('Bis nächstes Jahr!')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('29.05.2016, 19:46')
                    .name('Angela Maja')
                    .source(Source.Facebook)
                    .text(
                        `
Ich bedanke mich bei allen Beteiligten, die diese wunderbare Veranstaltung wieder möglich gemacht haben:<br/>
Klasse Ausschilderung, super Verpflegung, schöne, verkehrsberuhigte Streckenführungen, herrliche Landschaften,<br/>
nette Orga und Helfer - was will man mehr !<br/>
<br/>
Ich freute mich, dass ich heute weder auf der 160 km Strecke noch auf dem anschl. Weg nach Hause von Gewitter<br/>
oder Regen überrascht wurde - sondern eher von der Sonne.
`
                    )
                    .title('Fabelhaft ...')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('29.05.2016, 19:11')
                    .name('David Pandya')
                    .organization('The Racing Club Rush (Gemeinschaft via Facebook)')
                    .source(Source.Facebook)
                    .text(
                        `
Vielen vielen vielen lieben Dank RTC Köln e. V. 1972.<br/>
Das war wirklich spitzenmässig organisiert und das kann auch mal gesagt werden.<br/>
Tolle Stullen, selbstgebackene Kuchen, leckeres Kölsch, überall super freundliche, gut gelaunte Menschen<br/>
und die schönste ausgearbeitete Route der letzten 12 Monate!<br/>
<br/>
Chapeau!
`
                    )
                    .title('Tolle Stullen ...')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('29.05.2016')
                    .location('Hürth Berrenrath')
                    .name('Stefan Schneider')
                    .organization('RV Morgenstern')
                    .source(Source.Facebook)
                    .text(`... dass ich den Apps heute nicht getraut habe und bei euch war 😀`)
                    .title('Wie gut,')
                    .build(),
                new GuestbookEntryBuilder().date('29.05.2016').name('Petra Ba').source(Source.Facebook).title('Ein super Tag, und super Wetter ...').build(),
                new GuestbookEntryBuilder()
                    .date('29.05.2016, 17:38')
                    .name('Bernd Doelp')
                    .source(Source.Facebook)
                    .text(`Das war eine schöne und anspruchsvolle Veranstaltung, vielen Dank.`)
                    .title('... vielen Dank')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('29.05.2016')
                    .name('Steffi Brockenhexe')
                    .source(Source.Facebook)
                    .text(
                        `
Es wurde alles gesagt.<br/>
<br/>
Einfach nur Top und alle die nur nach dem Wetterbericht gehen sind selber schuld.<br/>
Super Wetter mit reichlich Sonne auf knapp 200km ...
`
                    )
                    .title('Einfach nur Top ...')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('29.05.2016, 16:12')
                    .name('Horst Voll')
                    .source(Source.Facebook)
                    .text(
                        `
War echt stark ...<br/>
<br/>
Die 200er war geil und: Nudeln mit Gulasch waren echt lecker ...
`
                    )
                    .title('Nudeln mit Gulasch 👍')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('29.05.2016, 16:06')
                    .name('Horst Paesch')
                    .organization('RSC Erftstadt')
                    .source(Source.Facebook)
                    .text(
                        `
Sitzen noch im Ziel und besaufen uns mit Alkoholfreiem Weizen ...<br/>
<br/>
...super Veranstaltung<br/>
<br/>
...super Wetter!
`
                    )
                    .title('Sitzen noch im Ziel !')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('29.05.2016')
                    .name('Mario Schmitt')
                    .source(Source.Facebook)
                    .text(
                        `
Super Organisation.<br/>
Die Strecke war klar und deutlich ausgeschildert und die Verpflegung war reichlich.<br/>
<br/>
Top! 👍
`
                    )
                    .title('Top! , die 2.')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('29.05.2016')
                    .name('Volker Schmitz')
                    .source(Source.Facebook)
                    .text(
                        `

Tolles Event, klasse Orga!<br/>
<br/>
Mich hat am meisten beeindruckt wie gut die Strecke ausgeschildert war!<br/>
<br/>
Top! 👍
`
                    )
                    .title('Top!')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('29.05.2016')
                    .name('Se Sandra')
                    .source(Source.Facebook)
                    .text(
                        `
War 'ne schöne Strecke und Verpflegung war reichlich da an den Kontrollstellen! 👍 👍<br/>
<br/>
Wettervorhersage?<br/>
Was ist das? 😉
`
                    )
                    .title('Tadel gibt es keinen!')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('29.05.2016, 14:36')
                    .name('Ros Si')
                    .source(Source.Facebook)
                    .text(
                        `
War eine super 158er RTF.<br/>
Alles klasse, sogar das Wetter.<br/>
<br/>
Vielen Dank an den RTC.
`
                    )
                    .title('Alles klasse ...')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('29.05.2016, 14:00')
                    .name('Patrock Cyclista')
                    .source(Source.Facebook)
                    .text(`Danke für heute. Super Orga, schöne Strecke, gerne wieder.`)
                    .title('... gerne wieder')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('29.05.2016, 13:52')
                    .name('Jochen Güttes')
                    .source(Source.Facebook)
                    .text(
                        `
Das mit das mit dem Wettergott hat hervorragend funktioniert.<br/>
Leider verlassen sich mehr Leute auf ihre Wetterapp am Tag zuvor als morgens einmal aus dem Fenster zu schauen.<br/>
Ich bin trocken geblieben und es war eine tolle Veranstaltung.<br/>
Vielen Dank
`
                    )
                    .title('Ihr habt mehr Teilnehmer verdient gehabt. Vor allem beim Marathon ...')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('19.10.2015, 12:55')
                    .name('Claude-Antoine Berger de Leon')
                    .source(Source.Facebook)
                    .text(
                        `
Auch von meiner Seite einen großen Dank an den Veranstalter, der einen enormen Aufwand betrieben hat.<br/>
<br/>
Obwohl es die erste Veranstaltung dieser Art für den Verein war, wurde an Alles gedacht und es war eine sehr gelungene CTF,<br/>
bei der die Teilnehmer einen Riesenspaß haben konnten.<br/>
Es ist zu hoffen, dass im nächstem Jahr eine Wiederholung der Veranstaltung stattfinden kann<br/>
und dass auch vielleicht noch einige andere Vereine aus der Region die für Viele noch etwas unbekannte Veranstaltung in Angriff nehmen ...
`
                    )
                    .title('... es war eine sehr gelungene CTF')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('18. Oktober 2015, 18:43')
                    .name('Helmut Kanthak')
                    .organization('RSC Nievenheim')
                    .source(Source['E-Mail'])
                    .text(
                        `
Hallo RTC,<br/>
<br/>
wir wollten nur sagen, dass eure Orga perfekt war und wir vom RSC Nievenheim beim nächsten mal wieder dabei sind.<br/>
Verpflegung war super.<br/>
Und auch das man das Rad kurz abspülen konnte war toll.<br/>
Danke für eine so schöne Tour.<br/>
<br/>
Helmut vom RSC Nievenheim
`
                    )
                    .title('RSC Nievenheim ist wieder dabei ...')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('18.10.2015, 14:23')
                    .name('Schonneb Aus Lev')
                    .source(Source.Facebook)
                    .text('<a href="https://www.youtube.com/v/Z2MqTVOeZMM" target="_blank">https://www.youtube.com/v/Z2MqTVOeZMM<a/>')
                    .title('... kleines Video von gestern')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('18.10.2015, 14:22')
                    .name('Jür Jen')
                    .source(Source.Facebook)
                    .text(
                        `
... die sich die Zeit genommen haben und die tolle Arbeit für uns Teilnehmer gemacht habt!!<br/>
Strecke war prima, leckere Verpflegung (Wurstbrote 😉) auch der Wasserschlauch fürs Rädchen war gut!<br/>
<br/>
Hoffentlich gibt es nächstes Jahr die 2. Wahnbach-Tour, ich bin wieder dabei .....
`
                    )
                    .title('Besten Dank an ALLE Helfer ...')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('18.10.2015, 13:49')
                    .name("Manuela 'Ela' Huber")
                    .source(Source.Facebook)
                    .text(
                        `
total nette Crew - super Strecke - hat viel Spaß gemacht!!<br/>
gerne wieder!!
`
                    )
                    .title('total nette Crew')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('18.10.2015, 10:33')
                    .name('Jo Di')
                    .source(Source.Facebook)
                    .text(
                        `
Ihr seid ein richtig nettes Team und ein toller Verein, da konnte das Wetter doch nur mitmachen.<br/>
Strecke war toll und an den Kontrollstellen gab's immer lekker Verpflegung (Klasse die wärmende Brühe und Liebe-Wurst-Käse belegten Brote) und immer ein nettes Gespräch.<br/>
Hat uns viel Spaß gemacht.<br/>
Danke<br/>
<br/>
Ps. Dank suuuuper Waschmöglichkeit vor Ort konnten wir uns zuhause gleich aufs Sofa hauen.<br/>
<br/>
Ps.Ps. Schmalzbrotgrüsse
`
                    )
                    .title('... und immer ein nettes Gespräch')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('18. Oktober 2015, 08:22')
                    .name('Guido Faßbender')
                    .source(Source['E-Mail'])
                    .text(
                        `
Eure 1. CTF war eine klasse Veranstaltung.<br/>
Vielen Dank für die Mühe, die Ihr Euch damit gemacht habt.<br/>
Die Streckenführung war sehr gut gewählt.<br/>
Euro Verpflegung war -wie offenbar bei Euch üblich- sehr gut.<br/>
An der entferntesten Kontrolle wären vielleicht ein paar Schmalzbrote ganz okay gewesen 😉<br/>
<br/>
Ich fand Eure Ausschilderung sehr gut gemacht.<br/>
In Kombination mit den aktualisierten Tracks konnte da eigentlich nichts mehr schief gehen.<br/>
Obwohl das Zusammenspiel mit Fußgängern/Joggern mehr als in Ordnung war, könnte ich mir vorstellen, dass die eine oder andere Markierung verschwunden ist.<br/>
<br/>
Alles in allem eine tolle Veranstaltung.<br/>
Bin nächstes Jahr wieder dabei.
`
                    )
                    .title('Eure 1. CTF war eine klasse Veranstaltung ...')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('17.10.2015, 21:02')
                    .name('Schonneb Aus Lev')
                    .source(Source.Facebook)
                    .text(
                        `
Hallo Zusammen,<br/>
vielen Dank an das OrgTeam und die fleissigen Helfer.<br/>
Mir hat die Strecke sehr gut gefallen, Verpflegung super, Rad war zum Schluß auch noch sauber (meine Frau fragte, ob ich überhaupt gefahren bin) - also rundum gelungen.<br/>
<br/>
Ich würde mich auf ein nächstes Mal sehr freuen.
`
                    )
                    .title('... also rundum gelungen')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('17. Oktober 2015, 20:45')
                    .name('Henning Rudolph')
                    .source(Source['E-Mail'])
                    .text(
                        `
Vielen Dank für die Organisation der CTF.<br/>
Die Verpflegung an euren Kontrollstellen und die freundlichen Helfer überall waren top!<br/>
Vor allem der warme Tee und die heiße Brühe waren heute klasse.<br/>
Auch im Zielbereich hat es an nichts gefehlt.<br/>
Einzig die Ausschilderung bis zur ersten Kontrolle war teilweise nicht vorhanden oder sehr schwer zu sehen.<br/>
Danach hat es gepasst.<br/>
Dank GPS-Gerät und Track von Euch ging es aber.<br/>
<br/>
Macht weiter so!<br/>
Für nächstes Jahr wünsche ich Euch etwas Sonnenschein, damit noch mehr Biker kommen.<br/>
<br/>
Sportliche Grüße,<br/>
Henning
`
                    )
                    .title('Macht weiter so!')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('17.10.2015, 20:01')
                    .name('Wilfried Goesgens')
                    .pictures(['https://rtc-koeln.de/content/pics/guestbook/rtc-gb-151017-2.jpg'])
                    .source(Source.Facebook)
                    .text(
                        `
Auch wenn ich das Startfenster leicht gerissen habe und nur die kurze Tour nehmen konnte 😕<br/>
Superrunde und hoffentlich nächstes Jahr wieder ...
`
                    )
                    .title('... hoffentlich nächstes Jahr wieder')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('17.10.2015, 19:38')
                    .name('Thorsten Klein')
                    .pictures(['https://rtc-koeln.de/content/pics/guestbook/rtc-gb-151017-1.jpg'])
                    .source(Source.Facebook)
                    .text(
                        `
Tolle Strecke.<br/>
Hat Spaß gemacht.<br/>
Danke für die Orga.<br/>
Es sollte mehr CTF geben.<br/>
<br/>
Die Möglichkeit das Rad direkt vor Ort zu reinigen fand ich auch klasse.<br/>
<br/>
Hier auch noch ein Bild von dem Ausblick auf der Strecke.
`
                    )
                    .title('Es sollte mehr CTF geben')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('17.10.2015, 19:03')
                    .name('Sabine Riehl')
                    .source(Source.Facebook)
                    .text(`Superschöne Strecke, tolle Verpflegung: hat total Spaß gemacht - vielen Dank für diese CTF und allen, die Sie möglich gemacht haben ...`)
                    .title('Hat total Spaß gemacht')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('17.10.2015, 18:57')
                    .name('Jörg Hengster')
                    .source(Source.Facebook)
                    .text(
                        `
Super Tour heute!<br/>
Schöne Strecke, direkt in den Wald, leckere Verpflegung.<br/>
Gute Idee, hier mal eine CTF anzubieten.<br/>
Danke RTC!
`
                    )
                    .title('Super Tour heute!')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('17. Oktober 2015, 17:52')
                    .name('Bernd Doelp')
                    .source(Source.Facebook)
                    .text(
                        `
Hallo RTC,<br/>
<br/>
vielen Dank für eure heutige Veranstaltung.<br/>
Ihr habt eine wunderschöne Strecke und perfekte Kontrollstellen auf die Beine gestellt.<br/>
Gerade in Zeiten schwindender Radveranstaltungen, geht Ihr den anderen Weg und organisiert eine Zweite.<br/>
RESPEKT!!<br/>
Ich hoffe, dass Ihr es auch nächstes Jahr schafft diese Event zu veranstalten.<br/>
Also bitte weiter so.<br/>
<br/>
Und nun den einzigen Kritikpunkt, an der Ausschilderung müsst Ihr echt noch arbeiten.<br/>
Ein Kontrollfahrer am Morgen würde hier Wunder wirken.<br/>
Ich für meinen Teil freue mich jetzt schon auf's nächste Jahr.<br/>
<br/>
Mit sportlichem Gruß<br/>
Bernd Doelp
`
                    )
                    .title('Respekt, aber ...')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('17.10.2015, 16:45')
                    .name('Ben Feld')
                    .source(Source.Facebook)
                    .text(
                        `
Danke für die schöne Veranstaltung!<br/>
Die Strecke war ausgesprochen schön und überall, wo nicht irgendwelche Deppen die Schilder umgedreht oder abgerissen haben, prima ausgezeichnet.<br/>
<br/>
Wiederholung im nächsten Jahr ist ausdrücklich erwünscht.
`
                    )
                    .title('Wiederholung ausdrücklich erwünscht ...')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('17. Oktober 2015, 16:07')
                    .name('Stephan Schwarz')
                    .source(Source['E-Mail'])
                    .text(
                        `
Hallo,<br/>
<br/>
die CTF heute hat mir sehr gut gefallen.<br/>
Tolle Strecke, sehr gute Verpflegung, sehr nette Personen an den Verpflegungspunkten.<br/>
<br/>
Danke aus Hennef<br/>
Stephan
`
                    )
                    .title('Tolle Strecke ...')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('03. Juni 2015, 20:16')
                    .name('Guido Faßbender')
                    .organization('Grenzfahrer e.V.')
                    .source(Source['E-Mail'])
                    .text(
                        `
Vielen Dank für die tolle Marathonstrecke, die sehr gute und ausreichende Verpflegung und überhaupt für die ganze Veranstaltung.<br/>
Bin nächstes Jahr sicher wieder dabei. Nix ändern 😊 😊<br/>
<br/>
Sportliche Grüße<br/>
<br/>
Guido Faßbender<br/>
Grenzfahrer e.V.
`
                    )
                    .title('... nix ändern')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('03. Juni 2015, 09:31')
                    .name('Frank Koch')
                    .source(Source['E-Mail'])
                    .text(
                        `
Guten Morgen,<br/>
kann mich da meinen Vorrednern nur anschließen: eine sehr schöne RTF war das.<br/>
Bin die 118er Runde gefahren, die es ja auch schon mit ihren 1600 Hm in sich hatte.<br/>
Da taten die Beine doch schon ein bisschen weh.<br/>
Die Landschaft um Eitorf und Much ist sehr schön.<br/>
Alle Leute im K-Bereich waren sehr nett und zuvorkommend.<br/>
<br/>
An dieser Stelle nochmals besten Dank an Harald für mein gefundenes Handy,<br/>
<br/>
schöne Grüße aus Troisdorf, Frank 😊
`
                    )
                    .title('... eine sehr schöne RTF')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('02.06.2015, 10:45')
                    .name('Frank Oesterheld')
                    .source(Source.Facebook)
                    .text(
                        `
Die Versorgungen an allen "K" super und vor allem die Supporter hilfsbereit, nett und gut gelaunt ...<br/>
Das ist nicht selbstverständlich und nicht auf allen Veranstaltungen so.<br/>
Das spricht für ein tolles Klima im Team RTC Köln e. V. 1972 !!<br/>
Bis zum nächsten Jahr 😊
`
                    )
                    .title('Kommentar zu Schnappschüssen / Impressionen von der K5 auf der Forsbach-Tour 2015')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('01.06.2015, 22:47')
                    .name('Gerhard Veeh')
                    .source(Source.Facebook)
                    .text(
                        `
Wir, der RTC-Mehlem 1984 e. V., waren nur zu zweit am Start wg. der Terminkollision mit ByBike.<br/>
Nächstes Mal sind wir wieder mehr und beim Marathon dabei ...<br/>
<br/>
Danke Euch für die tolle Organisation.
`
                    )
                    .title('... nur zu zweit am Start')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('01. Juni 2015, 20:33')
                    .organization('1. RTW-Sankt Augustin-Menden')
                    .source(Source['E-Mail'])
                    .text(
                        `
Nach der ersten Kontrolle haben wir uns aufgeteilt und in Gruppen die 70er, 100er und die 150er Strecke unter die Räder genommen.<br/>
Im Ziel waren wir uns einig - es war wieder eine tolle Veranstaltung bei euch - DANKE an ALLE Helfer, Freunde und Sponsoren des RTC !!!!<br/>
<br/>
Die Radsportfreunde vom 1. RTW-Sankt Augustin-Menden
`
                    )
                    .title('Danke ...')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('01. Juni 2015, 15:57')
                    .name('Christof Mourikis')
                    .source(Source['E-Mail'])
                    .text(
                        `
Die Strecke: 150 von 100 möglichen Punkten<br/>
Höhenmeter: reichlich!<br/>
Ausschilderung: 150 von 100 möglichen Punkten<br/>
Verpflegung: 150 von 100 möglichen Punkten<br/>
<br/>
Was will der Radsportler mehr??<br/>
Ketten-Checks, für den der es braucht!<br/>
<br/>
Beste Marathon-Veranstaltung, die ich bisher gefahren bin (und das sind nicht wenige!)
`
                    )
                    .title('SENSATIONELL!!!!!')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('01.06.2015, 14:14')
                    .name('Yvonne Basinski')
                    .source(Source.Facebook)
                    .text(
                        `
Total schöne Tour. Top Verpflegung und Beschilderung.<br/>
Vielen Dank an das Orga Team!<br/>
Wir sind nächstes Jahr wieder dabei.
`
                    )
                    .title('Total schöne Tour ...')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('01. Juni 2015, 09:05')
                    .name('Marc Grewe')
                    .source(Source['E-Mail'])
                    .text(
                        `
Hallo RTC,<br/>
<br/>
danke mal wieder für die tolle Tour!<br/>
Man glaubt ja manchmal gar nicht, wie schön wir es im Bergischen haben.<br/>
Ich komme gerne wieder!!<br/>
Vielleicht gelingt es euch ja sogar den Termin von der BN-Eupen-BN Tour zu trennen, die will ich nämlich auch mal angehen.<br/>
Verpflegung fand' ich angemessen gut, auch wenn das Gulasch später an den Anstiegen noch mal Hallo sagen wollte 😉.<br/>
<br/>
Was mich allerdings schon wundert ist eure Angabe der Hm für die Marathonstrecke:<br/>
also mein Garmin hat knappe 2300 hm aufgezeichnet, mit topografischen Korrekturen könnte man vielleicht noch knappe 2400 hm rausschlagen.<br/>
Aber 2700 hm sind einfach nicht drin.<br/>
Nicht, dass ich mehr bräuchte, aber es ist schon unterwegs irritierend, weil man zum Gulasch (55% der Strecke) gerade mal 1100 hm (40% von 2700 hm) hat<br/>
und denkt, was denn da wohl noch alles von einem liegen soll?<br/>
<br/>
Leider habe ich auch alle Abzweigungen zum "Kettencheck" verpasst (was mir zum Ende hin wohl auch ganz recht war 😉).<br/>
Ob ihr das wohl bitte im kommenden Jahr deutlicher ausschildern könntet?<br/>
<br/>
Wie stellt ihr die Streckenlänge eigentlich so genau fest?<br/>
Ich hatte jetzt zum zweiten Mal die 200km gerade erst auf dem Schulhof geknackt ...<br/>
Aber gut, wir reden hier von einem Prozent Abweichung.<br/>
Ich fand euer 200km-Schild jedenfalls sehr schön (auch wenn mir da noch gute 2km auf dem Tacho fehlten)<br/>
und auch euer "1km bis zum Ziel" Schild steht was früh auf der Strecke, aber es steigt ja keiner 400m vor dem Ziel ab und beruft sich<br/>
auf das Schild 😉.<br/>
<br/>
Nochmals danke und bis zum nächsten Mal!<br/>
<br/>
Marc
`
                    )
                    .title('... ich komme gerne wieder!!')
                    .build(),
                new GuestbookEntryBuilder().date('31.05.2015, 20:30').name('Petra Ak').source(Source.Facebook).title("Vielen Dank für's Organisieren, war super !").build(),
                new GuestbookEntryBuilder()
                    .date('31.05.2015, 20:19')
                    .name('Thomas Mühl')
                    .source(Source.Facebook)
                    .text(
                        `
Für den Regen am Schluss könnt ihr ja nichts,<br/>
ansonsten Top Veranstaltung, da können sich andere Veranstalter mal 'ne Scheibe von abschneiden.
`
                    )
                    .title('Top Veranstaltung')
                    .build(),
                new GuestbookEntryBuilder().date('31.05.2015, 20:11').name('Michael Kalisch').source(Source.Facebook).title('top top top 😊').build(),
                new GuestbookEntryBuilder().date('31.05.2015, 20:10').name('Horst Voll').source(Source.Facebook).title('War geil und sehr anstrengend ! 👍').build(),
                new GuestbookEntryBuilder()
                    .date('31.05.2015, 19:29')
                    .name('Horst Paesch')
                    .pictures(['https://rtc-koeln.de/content/pics/guestbook/rtc-gb-150531.jpg'])
                    .source(Source.Facebook)
                    .text(
                        `
Danke für ein perfekt organisierten Marathon, die Strecke war super ausgesucht, viele ruhige Straßen, tolle Ausblicke!<br/>
Die Damen und Herren an den Kontrollpunkte/Verpflegungspunkten waren alle sehr nett und hilfsbereit, die Verpflegung ist der Knaller.<br/>
<br/>
Da nimmt man beim Marathon noch zu 😊
`
                    )
                    .title('... da nimmt man beim Marathon noch zu')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('19. Juni 2014, 18:43')
                    .name('Helga Hasberg')
                    .source(Source['E-Mail'])
                    .text(
                        `
Hallo RTC,<br/>
<br/>
ich/wir wollten nur sagen, dass ...ich heute nach langer Zeit mal bei euch im Internet zu Gast war.<br/>
Erinnerungen wurden wach.<br/>
Ich wünsche euch weiterhin für die Zukunft viel Erfolg und bei allen Touren gutes Gelingen.<br/>
<br/>
Viele liebe Grüße<br/>
Helga
`
                    )
                    .title('... weiterhin viel Erfolg')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('28. Mai 2014, 12:37')
                    .name('Jessica Bosen')
                    .source(Source['E-Mail'])
                    .text(
                        `
Hallo RTC,<br/>
<br/>
was für ein Andrang schon um 6 Uhr?!<br/>
Ich gehörte nicht zu den Marathonfahrern, wollte eine der kleineren Strecken abfahren und stand plötzlich schon in einer anderen Warteschlange.<br/>
Es kamen immer mehr und mehr Radfahrer, die genau so wie ich bei dem schönen Wetter früh starten wollten.<br/>
Alle Kassenbetreuer gaben ihr Bestes, um die Anmeldungen so schnell wie möglich aufzunehmen.<br/>
Bei so einem Ansturm musste schon in den frühen Morgenstunden improvisiert werden.<br/>
So ein großes Kuchenbuffet mit hausgemachten Kuchen kannte ich bis dahin noch nicht.<br/>
Die Kontrollen waren mit einer anderen sehr auffallenden Auswahl versehen: Brot, Marmelade, Weckchen, Hörnchen und Kekse.<br/>
Endlich mal nicht die üblichen Waffeln, Bananen, oder sogar nur Waffeln, oder nur Bananen.<br/>
<br/>
Bei der Streckenführung haben sich die Verantwortlichen sehr viel Mühe gegeben.<br/>
Die zweitlängste Strecke war für mich mit 1653 hm ziemlich anstrengend,<br/>
aber der tolle Ausblick, die gut positionierten Kontrollstellen, das schöne Wetter und die abgelegenen Wege waren das Ganze mehr als Wert.<br/>
Der Ansturm an Teilnehmern riss auch am späten Nachmittag nicht ab.<br/>
Der Grill war durch seine große Auswahl an selbstgemachten Salaten und Grillwürstchen ununterbrochen stark besucht.<br/>
Nach Sonntag kann ich nun selbst mitreden und für mich war es ein tolles Erlebnis, endlich diese bekannte RTF kennengelernt zu haben.<br/>
Das frühe Aufstehen an einem Sonntag hatte sich definitiv gelohnt.<br/>
Insgesamt hieß es für den Veranstalter bei so vielen Besuchern den Überblick zu bewahren, was ihm und den fleißigen Helfern auch gut gelungen war.<br/>
Ein großes Kompliment an das Team, das trotz des großen Ansturms, sehr gut in dieser Situation reagiert hat.<br/>
<br/>
Bis zum nächsten Jahr<br/>
Jessica
`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... ein tolles Erlebnis und ein großes Kompliment')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('27. Mai 2014')
                    .name('velotoerist')
                    .source(Source['E-Mail'])
                    .text(
                        `
Hallo RTC,<br/>
<br/>
das war ein sehr schöner Radmarathon am Sonntag.<br/>
<br/>
Eine tolle Strecke, weitgehend verkehrsarm und überwiegend recht gute Oberflächen (in der gewählten Richtung keine Selbstverständlichkeit),<br/>
nettes Personal, sehr gute Ausschilderung und eine prima Verpflegung.<br/>
Allein der Nudeltopf in Bebbingen war sensationell gut, auch wenn ich eigentlich kein Fan der warmen Verpflegung unterwegs bin,<br/>
die liegt so schwer im Magen an den Folgenhügeln...<br/>
(daher lieber nicht sooo lecker kochen oder - noch besser - im Ziel servieren)<br/>
<br/>
Auch davor und danach waren die Tische (bei uns) reich gedeckt.<br/>
Vielleicht sollte mancher "Schlemmermeier" einfach etwas früher losfahren, dann gibt's auch noch mehr.<br/>
Da sind wir auch schon bei meinem einzigen Kritikpunkt: Wenn eine Startzeit angegeben wird, würde ich es gut finden,<br/>
wenn diese auch konsequent eingehalten würde und nicht bereits eine Viertelstunde (oder mehr) eher losgefahren wird.<br/>
Sollte doch kein Problem sein.<br/>
<br/>
Ansonsten: Weiter so! 😊<br/>
<br/>
Beste Grüße<br/>
velotoerist
`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... sehr schöner Radmarathon')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('27. Mai 2014, 13:00')
                    .name('Helmut Hane')
                    .organization('www.sportlich-radeln.de')
                    .source(Source['E-Mail'])
                    .text(
                        `
Prima RTF am vergangenen Sonntag.<br/>
Bericht über meine Fahrt auf der 150er Strecke jetzt auf meiner Website www.sportlich-radeln.de<br/>
<br/>
Helmut Hane
`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... Prima RTF')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('27. Mai 2014, 09:28')
                    .name('Marco Gerlach')
                    .source(Source['E-Mail'])
                    .text(
                        `
Hallo RTC,<br/>
<br/>
ich war am Sonntag auf der Marathon-Strecke unterwegs.<br/>
Die Strecke war wirklich sehr sehenswert und gut<br/>
ausgeschildert (auch wenn ich mich einmal verfahren habe, was aber an eigener Blindheit gelegen hat).<br/>
<br/>
Orga und Verpflegung waren Tiptop, da kann man nicht meckern!<br/>
<br/>
Danke, hat wirklich Spaß gemacht!<br/>
<br/>
Gruß<br/>
Marco Gerlach
`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... Tiptop')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('27. Mai 2014, 09:26')
                    .name('Jörg Homann')
                    .organization('www.scan.bike`')
                    .source(Source['E-Mail'])
                    .text(
                        `
Ein langer Tag, nicht nur für die Fahrer auf den langen Strecken der Forsbach-Tour 2014, nein, auch für die Helfer des veranstaltenden Vereins RTC Köln 1972 e.V.<br/>
- aber auch ein schöner Tag!<br/>
<br/>
Bereits um 5:10 Uhr, mit kurzer Verspätung, öffneten sich die Türen der Sporthalle in der Heerstraße in Zündorf und blitzartig verteilten sich die helfenden Hände,<br/>
um mit den letzten Vorkehrungen ihre Stationen für den Andrang der Sportler vorzubereiten - und die kamen dann (wie üblich) sogar schon lange vor Öffnung der Anmeldung<br/>
und warteten mehr oder weniger geduldig auf Kaffee und Startkarten.<br/>
<br/>
Neben den fünf herkömmlichen Anmeldetischen war auch scan&bike mit am Start, um die Athleten schnell auf die Strecke zu schicken - und das ging auch wieder richtig zügig,<br/>
nach dem Scannen des auf http://scan.bike vorab gedruckten oder aufs Smartphone gespeicherten QR Codes und dem Bezahlen des Startgelds trägt der Laptop den Fahrer<br/>
(ob Marathon oder kürzer, ob mit oder ohne Wertungskarte und sogar Trimmfahrer)<br/>
per Mausklick im Bruchteil einer Sekunde in die Teilnehmerliste ein und sofort kommt der nächste an die Reihe<br/>
- zeitraubende Handarbeit übernimmt der Computer und der einmal erzeugte<br/>
QR Code gilt die ganze Saison - mit dem Laserdrucker ausgedruckt kann man ihn bis auf eine Kantenlänge von 2,5 cm verkleinern und auf die Wertungskarte kleben
oder laminieren und dadurch für die vielen RTF-/CTF-Teilnahmen konservieren - denn eines kann der Code nicht vertragen und das ist wenn er verwischt und undeutlich wird.<br/>
Auch für den Veranstalter wird es leichter, wenn nach und nach immer mehr Sportler mit QR Code zur Einschreibung kommen kann eh schon knappes Personal reduziert werden
und auch die langen Schlangen bei der Anmeldung entfallen durch die um ein Vielfaches kürzere Zeit des Einzelnen am Schalter.<br/>
Scannen, Kassieren, Klicken - Scannen, Kassieren, Klicken - Scannen, Kassieren, Klicken,â€¦ so geht scan&bike!<br/>
<br/>
Die jährliche Forsbach-Tour ist immer ein weiteres Highlight im RTF Kalender, bei besonders gutem Wetter wird die viele professionelle Arbeit des Vereins
und seiner Mitglieder auch mit hohen Teilnehmerzahlen belohnt - mit scan&bike sind wir auf dem richtigen Weg die morgendliche Wartezeit zu minimieren
und mit zum guten Gelingen einer Veranstaltung beizutragen.<br/>
<br/>
Jörg Homann<br/>
http://scan.bike
`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... erfolgreicher Einsatz von scan&bike')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('27. Mai 2014, 08:50')
                    .name('Norbert Priefert')
                    .source(Source['E-Mail'])
                    .text(
                        `
Jetzt muss man hier aber mal einen Punkt machen und in die Bresche springen.<br/>
Kritik ist durchaus erlaubt, aber man muss, wenn man das macht, auch alle Umstände mit einbeziehen.<br/>
Hier wird aber in dem Beitrag alles, aber auch alles schlecht geredet.<br/>
Der RTC-Köln organisiert eine solche Veranstaltung nicht zum ersten Mal.<br/>
Am Sonntag war für den ausrichtenden Verein eine Rekordbeteiligung zu verzeichnen,<br/>
mit der man -bei all der Erfahrung- nicht gerechnet hat und in dem Ausmaß auch nicht rechnen konnte.<br/>
Fast 1.300 Teilnehmer und man ist wahrscheinlich von einem Spitzenwert von 900 - 1.000 ausgegangen.<br/>
Und an einem Sonntag können ausgegangene Nahrungsmittel nicht mal so eben nachgeordert werden.<br/>
<br/>
Sich jetzt an allem aufzuhängen und die Umstände die dazu geführt haben nicht zu berücksichtigen, ist gegenüber dem Veranstalter nicht fair.<br/>
Und mal ehrlich Herr General-Kritiker, wofür seid ihr denn überhaupt zur RTF gekommen?<br/>
Doch nicht etwa wegen eurer Radsportbegeisterung.<br/>
Nein, ich hätte euch gleich nach dem Start ein schickes Cafe empfehlen können oder alternativ ein gutes Restaurant.<br/>
Echten Radsportlern geht es doch vielmehr um den Radsport und das damit verbundene Erleben schöner Strecken.<br/>
Und wenn dann mal wirklich an einer Kontrolle was fehlt, was nicht der Regelfall sein sollte aber nachvollziehbar passieren kann,<br/>
ja dann fährt man zur nächsten Tanke und zieht sich da was rein.<br/>
Wie macht man das denn auf den Trainingsrunden, die länger ausfallen als geplant?<br/>
Ich nehme an, ihr seid schon große, selbständige Jungs; ansonsten empfehle ich euch einen Verein für betreutes Rennradfahren zu gründen.<br/>
Auch wenn am Ende alles ausging, aus nachvollziehbarem Grund, die Veranstaltung war und bleibt toll!<br/>
<br/>
mit sportlich fairen Grüßen<br/>
Norbert
`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: Feedback auf die Generalkritk ....wir sind enttäuscht von eurer Veranstaltung und kommen nicht nochmal wieder')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('26. Mai 2014, 20:16')
                    .name('Jörg Freitag')
                    .source(Source['E-Mail'])
                    .text(
                        `
Hallo lieber RTC,<br/>
<br/>
ich möchte mich bedanken für eine so tolle Tour.<br/>
Es war eine sehr sehenswerte Strecke, ausreichend Verpflegung und sehr nette Stationshelfer.<br/>
Mir hat es sehr gut gefallen und ich werde auf jeden Fall wiederkommen.<br/>
<br/>
Gruß aus Recklinghausen<br/>
Jörg
`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: Marathon... mir hat es sehr gut gefallen')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('26. Mai 2014, 16:57')
                    .name('Markus Reckter')
                    .organization('www.rtf-koblenz.de')
                    .source(Source['E-Mail'])
                    .text(
                        `
Sehr geehrtes Team,<br/>
<br/>
die Streckenwahl des Marathon war sehr schön, über verkehrsarme Straßen und durch landschaftliche Highlights perfekt gewählt.<br/>
Auch das Profil war sportlich anspruchsvoll und ließ keine Wünsche offen.<br/>
<br/>
Leider war bei den letzten 2 Kontrollstellen keine Verpflegung mehr vorhanden.<br/>
Bis zur Warmverpflegung war diese sehr gut, danach wahrscheinlich durch die Fahrer auf den kürzeren schon verbraucht.<br/>
<br/>
Vielleicht sollte, wie bei den Radmarathon Deutschland Veranstaltungen, die Verpflegung für die Marathonfahrer separat sein.<br/>
<br/>
Liebe Grüße aus Koblenz<br/>
M. Reckter<br/>
RTF Koblenz
`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... Streckenwahl sehr schön, die Verpflegung für die Marathonfahrer sollte separat sein')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('26. Mai 2014, 13:08')
                    .name('Claudia Braun')
                    .organization('Union Biesfeld Triathlon')
                    .source(Source['E-Mail'])
                    .text(
                        `
Das war eine RTF wie aus dem Bilderbuch.<br/>
Strecke (150), Verpflegung, Helfer, Wetter, alles passte.<br/>
<br/>
Vielen lieben Dank für die hervorragende Organisation.<br/>
Im nächsten Jahr gerne wieder!<br/>
Dank an die Jungs vom RC Schmitter für's Ziehen 😊<br/>
<br/>
Sportliche Grüße<br/>
Claudia Braun<br/>
Union Biesfeld Triathlon
`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... eine RTF wie aus dem Bilderbuch')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('26. Mai 2014, 12:50')
                    .name('Angela Schmilewski')
                    .organization('VfB Polch Abtl. Radsport')
                    .source(Source['E-Mail'])
                    .text(
                        `
Liebe Orga des RTC Köln,<br/>
<br/>
ich startete recht früh, da ich mich für die 156 km entschieden hatte.<br/>
Landschaftlich einfach nur herrlich und sehr verkehrsberuhigte Strecken bei wunderbarem Wetter - besser ging es nicht!<br/>
<br/>
Ich fand reichhaltige Verpflegungsstellen vor - von der 1. bis zur 4. - sowie freundliche Orga und Helfer - sowohl auf der Strecke als auch im Start- und Zielbereich.<br/>
<br/>
Ein herzliches Dankeschön an Orga und Helfer und Euch allen eine gute Regeneration - die habt Ihr Euch jetzt verdient ...<br/>
<br/>
Viele Grüße von Angela<br/>
Fachwart RTC Mehlem
`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... ein herzliches Dankeschön an Orga und Helfer')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('26. Mai 2014, 10:55')
                    .name('Dirk Brieden')
                    .source(Source['E-Mail'])
                    .text(
                        `
Wir sind gestern euren Marathon gefahren.<br/>
<br/>
Die Strecke war wirklich schön,<br/>
<br/>
**ABER:**<br/>
eure Verpflegung war m. E. gesagt, das Allerletzte!<br/>
Es gab keine Bananen (nur an 2 Kontrollen), keine Müsli-Riegel, keine Waffeln, keine Joghurts und die Getränke waren nicht isotonisch,<br/>
da hätte man auch das Wasser aus der Sieg nehmen können.<br/>
Eure letzte Kontrolle war ein Totalausfall, da gab es gar nur Wurstscheiben, die den ganzen Tag schon von der Sonne "gebleicht" wurden.<br/>
Dabei braucht man nach 170km schon nochmal einen "Energieschub" durch Bananen, Müsli-Riegel, Waffeln oder ähnlichem.<br/>
Von Ernährung für Radsportler habt ihr wirklich keine Ahnung.<br/>
<br/>
Getränke und Nahrung war das, was ihr insgesamt angeboten habt, eine Frechheit, da solltet ihr euch ein Beispiel an anderen Anbietern nehmen.<br/>
Da tröstet auch das mittelmäßige Gulasch-Nudel-Angebot an einer Kontrolle nicht darüber hinweg, wobei Gulasch eh schwer im Magen liegt und ungeeignet ist.<br/>
Euer gesamtes Verpflegungs-Angebot an den Kontrollen war nach dem Strickmuster "schön billig" zusammen gestellt und dafür 12 Euro zu verlangen, war eine Frechheit.<br/>
<br/>
Euer Ambiente am Start-/Zielplatz solltet ihr auch mal überdenken, bei jeder anderen RTF sind auch Anbieter für "Rad-Klamotten".<br/>
<br/>
Es war schlichtweg keine Atmosphäre, nur "Baller-Baller-Musik".<br/>
<br/>
Eure Mitarbieter bei der An-/Abmeldung schienen mit allem etwas überfordert.<br/>
Es dauerte eine Ewigkeit, um nach der Tour unsere Serien-Karten zurück zubekommen, dabei saßen sie doch alle nur dumm rum und hatten nichts zu tun.<br/>
Nachdem wir alle von eurem Team angesprochen hatten und alle Mitarbeiter suchten, wurden die Karten dann gefunden.<br/>
<br/>
Fazit:<br/>
Wir sind enttäuscht von eurer Veranstaltung und kommen nicht nochmal wieder
`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... wir sind enttäuscht von eurer Veranstaltung und kommen nicht nochmal wieder')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('26. Mai 2014, 10:49')
                    .name('Michaela Packebusch')
                    .organization('VfB Polch Abtl. Radsport')
                    .source(Source['E-Mail'])
                    .text(
                        `
Vielen Dank für die tolle Organisation und Verpflegung auf dem Marathon (besonders erwähnenswert fand ich den klasse Reiskuchen von Silvana).<br/>
<br/>
Nochmals vielen Dank an den Fahrer des Besenwagens, in dem ich leider sitzen musste, als mein Material defekt war.<br/>
<br/>
LG Michaela
`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... tolle Organisation und Verpflegung auf dem Marathon')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('26. Mai 2014, 10:33')
                    .name('Frank Stöcker')
                    .source(Source['E-Mail'])
                    .text(
                        `
Hallo RTC,<br/>
<br/>
eigentlich eine schöne Tour gestern, gut ausgesucht und bestens ausgeschildert.<br/>
ABER:<br/>
keine Parkpätze mehr in der Nähe, keine Startnummern mehr ( 9.45 Uhr ! ) und bei der ersten Kontrolle kaum noch was zu essen.<br/>
Nur noch Brotscheiben und trockene Keksreste.<br/>
Kein Obst, Riegel ...<br/>
NICHTS MEHR.<br/>
<br/>
Auch die Kollegen an der ersten Kontrolle waren genervt und nicht mit der besten Laune da .......<br/>
<br/>
Zitat aus Euerm Flyer "Sehr gute Verpflegung an allen Kontrollstellen und am Ziel"<br/>
<br/>
Bei der 2. Kontrolle wieder kein Obst oder Riegel - die Kekse waren besser und ein bisschen Gebäck mit Sirup.<br/>
Getränke nur Tee.<br/>
<br/>
Im Ziel - Ihr könnt es Euch denken auch ziemlich tote Hose.<br/>
<br/>
Das ist für 12,- Euro für 2 Personen ein bisschen dürftig und hätte zumindest im Ziel in Form von Würstchen, Kuchen oder Teilerstattung ausgeglichen werden können.<br/>
<br/>
Frank
`
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
                        `
Die RTF gestern war mal wieder klasse was die Strecke und das Wetter anging.<br/>
Für den schlechten Straßenbelag teilweise könnt ihr ja nix.<br/>
<br/>
Aber eine RTF wo es keine Bananen an den Verpflegungsstellen gibt, das geht gaaaaar nicht 😉<br/>
<br/>
Nächstes Jahr will ich wieder meine Banane bekommen ... 😏
`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... klasse Strecke, aber keine Bananen 😔')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('26. Mai 2014, 07:24')
                    .name('Stefan Schneider')
                    .organization('www.rv-morgenstern.de')
                    .source(Source['E-Mail'])
                    .text(
                        `
Hallo Sportskollegen vom RTC Köln.<br/>
<br/>
Ich möchte euch ein großes Lob zu eurer gestrigen Veranstaltung aussprechen.<br/>
<br/>
Es passte einfach alles, Wetter, Verpflegung, Strecke.<br/>
So macht es Spaß Marathon zu fahren.<br/>
<br/>
Mit Sportlichem Gruß,<br/>
<br/>
Stefan Schneider<br/>
1.Vorsitzender RV Morgenstern Berrenrath
`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... ein großes Lob')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('26. Mai 2014, 07:06')
                    .name('Norbert Priefert')
                    .organization('www.rtc-rodenkirchen.de')
                    .source(Source['E-Mail'])
                    .text(
                        `
Hallo RTC Köln'ner,<br/>
<br/>
das war wirklich super Klasse!!<br/>
Tolle Organisation, freundliches und hilfsbereites Team, eine sehr schöne und interessante Streckenführung und -Gott sei Dank- das Wetter phantastisch.<br/>
Über 1200 Teilnehmer haben's euch gedankt.<br/>
Klasse!<br/>
Nach der Wasserschlacht von vergangenem Jahr habt ihr euch das auch wirklich verdient!<br/>
<br/>
Eigentlich kann man das gar nicht toppen ... Eigentlich ...<br/>
<br/>
Die Messlatte habt ihr wirklich hoch aufgehängt, aber, wir vom RTC-Rodenkirchen nehmen dies als Herausforderung an.<br/>
Wir werden unser Bestes geben um zumindest annähernd euer Niveau zu erreichen.<br/>
Versprochen!<br/>
<br/>
Also dann, bis Samstag, 14.06.2014 am Bildungswerk in Köln-Sürth, mit ebenfalls tollen Strecken, motiviertem Team und hoffentlich grandiosem Wetter.<br/>
<br/>
Bis denne,<br/>
<br/>
Norbert
`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... eigentlich kann man das gar nicht toppen')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('25. Mai 2014, 19:44')
                    .name('Jürgen Ruttkowski')
                    .source(Source['E-Mail'])
                    .text(
                        `
Hallo RTC,<br/>
<br/>
die Forsbachtour am 25.05.2014, bei bestem Wetter, war ein voller Erfolg und die Strecke (115 km) hervorragend ausgesucht.<br/>
<br/>
Viele Grüße und den besten Dank an alle, die zum Gelingen beigetragen haben.<br/>
<br/>
Jürgen Ruttkowski
`
                    )
                    .title('42. Forsbach-Tour, 25.05.2014: ... ein voller Erfolg')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('Mai/Juni 2012')
                    .name('Wolfgang Alberg')
                    .organization('www.cardiofitness.de')
                    .source(Source['E-Mail'])
                    .text(
                        `
Hallo Sportfreunde,<br/>
<br/>
leider finde ich auf euer Homepage kein Gästebuch, möchte mich, auch im Namen weiterer 8 Mitfahrer unserer Gruppe bei euch für die Tour ab Zündorf bedanken.<br/>
<br/>
Neben der tollen Strecke und des netten Teams, habt ihr es auch geschafft die Sonne, entgegen aller Vorhersagen zu buchen.<br/>
<br/>
Wir freuen uns schon auf die Tour im kommenden Jahr.<br/>
<br/>
Mit sportlichen Grüßen<br/>
<br/>
Wolfgang Alberg<br/>
www.cardiofitness.de
`
                    )
                    .title('Ein großes Dankeschöööööön')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('Mai/Juni 2012')
                    .name('Ursula Koepp')
                    .organization('TSV Weiss-Köln')
                    .source(Source['E-Mail'])
                    .text(
                        `
Liebe Radsportfreunde,<br/>
<br/>
ganz herzlichen Dank für die schöne RTF am Sonntag!<br/>
<br/>
Was Ihr da auf die Beine gestellt habt war super!<br/>
<br/>
Eine landschaftlich tolle Strecke, Verpflegung vom Feinsten auf der 125er Strecke,<br/>
immer gut gelaunte Helfer u. selbst die angekündigten Gewitter hatten ein Einsehen mit Eurer Veranstaltung!<br/>
Auch wenn auf den ersten Kilometern nachgeschildert werden musste (Spiel"kinder" gibt's immer), habt Ihr versucht uns eine perfekte RTF zu bieten!<br/>
Und Dank dem Track, den ich mir sicherheitshalber von Euer Homepage runter geladen hatte, ging auch orientierungsmäßig alles glatt.<br/>
<br/>
Herzliche Grüße aus Rondorf,<br/>
Ursula Koepp
`
                    )
                    .title('... ganz herzlichen Dank für die schöne RTF am Sonntag!')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('Mai/Juni 2012')
                    .name('Günter')
                    .source(Source['E-Mail'])
                    .text(
                        `
Hallo Diana,<br/>
<br/>
hatte Norbert am Sonntag noch getroffen und ihm gesagt, dass es mir sehr gut gefallen hatte.<br/>
Obwohl ich ja etwas unmotiviert war und es vor der ersten Kontrolle noch ein kleines Scharmützel mit "Kollegen" gab,<br/>
wurde es ein wirklich schöner Tag, der nicht so schnell zu topen ist!!!<br/>
<br/>
Also nochmals: 10 Punkte und die Krone für eure schöne RTF!!!<br/>
<br/>
Ihr habt das sehr liebevoll gestaltet.<br/>
Die Kontrollen konnten sich absolut sehen lassen.<br/>
Alle sehr freundlich und kein Zeitstreß.<br/>
Liebe Leute kennengelernt.<br/>
Das Wetter hatte bis zum Schluss gehalten.<br/>
Das hebt die Laune ungemein.... :-)<br/>
Also euch allen vielen Dank für eure Mühe.<br/>
Natürlich auch an Klaus-Anton und Thilo, mit denen es viel Spaß gemacht hat zu fahren....<br/>
<br/>
Viele Grüße<br/>
<br/>
Günter
`
                    )
                    .title('10 Punkte und die Krone für eure schöne RTF!!!')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('Mai/Juni 2012')
                    .name('Dieter Reich')
                    .organization('ISB-Team-Cologne')
                    .source(Source['E-Mail'])
                    .text(
                        `
Hallo Radsportler des RTC-Köln,<br/>
<br/>
danke für die gut ausgearbeitete Tour am 20.05.12.<br/>
Strecke und Verpflegung wie immer prima.<br/>
Aber nicht zu vergessen die freundlichen Kontakte.<br/>
Schön, dass es noch Radsportler gibt, die ihre Freizeit für diesen schönen Event opfern !!<br/>
<br/>
Es freut sich auf die nächste Veranstaltung, das benachbarte ISB-Team-Cologne<br/>
<br/>
Sportliche Grüße<br/>
Dieter Reich
`
                    )
                    .title('Danke für die gut ausgearbeitete Tour am 20.05.12')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('Mai/Juni 2012')
                    .location('Monheim')
                    .name('Elke und Dieter')
                    .source(Source['E-Mail'])
                    .text(
                        `
Hallo liebe RTCler,<br/>
<br/>
herzlichen Dank für eine tolle Forsbachtour 2012.<br/>
Der Tip unserer Freundin Marlies, unbedingt teil zu nehmen, hat sich wahrlich als Volltreffer erwiesen.<br/>
Eine sensationelle Streckenführung, gepaart mit der ausgesprochen guten Verpflegung<br/>
und ergänzt durch das schöne Frühsommerwetter waren die Zutaten für einen sehr schönen RTF-Sonntag.<br/>
<br/>
Nochmal herzlichen Dank an alle RTCler.<br/>
<br/>
Viele Grüße aus Monheim am Rhein<br/>
Elke und Dieter
`
                    )
                    .title('... eine tolle Forsbachtour 2012')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('Mai/Juni 2012')
                    .name('Josef Witt')
                    .source(Source['E-Mail'])
                    .text(
                        `
Guten Morgen,<br/>
<br/>
ich bin gestern die 151 Strecke gefahren und wie ich um ca. 15.30 Uhr im Ziel wieder war wollte ich und meine drei anderen Radkollegen ein Grillwürstchen essen,<br/>
aber leider waren keine mehr da nur noch für die Jungs und Mädels vom Marathon das war sehr schade.<br/>
Da wir den ganzen Morgen nur Waffeln und Riegel gegessen hatten.<br/>
<br/>
Für nächstes Jahr muss ich entweder schneller fahren oder eine kleinere Runde fahren damit ich noch ein Würstchen bekomme<br/>
oder ich bringe mir ein Paar mit die dann gegrillt werden können.<br/>
<br/>
An der ein oder anderen Kontrolle habe ich die Bananen vermiest schade.<br/>
<br/>
Aber man kann es ja auch nicht jedem recht machen.<br/>
<br/>
Sonst war es eine sehr gute Veranstaltung!<br/>
<br/>
Mit freundlichen Grüßen<br/>
Josef Witt
`
                    )
                    .title('Verpflegungsengpässe, sonst war es eine sehr gute Veranstaltung!')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('Mai/Juni 2012')
                    .location('Kierspe')
                    .name('Michaela Bäcker')
                    .source(Source['E-Mail'])
                    .text(
                        `
Der Tag danach ...<br/>
<br/>
So, ich hatte gestern das große Vergnügen an dem Forstbach-Marathon 2012 teilzunehmen.<br/>
Den Tag zuvor hatte ich noch wenig lust 200 km und ein paar gequetschte zu fahren.<br/>
Die Wetterprognose war auch nicht so dolle, leichtes Gewitter war angesagt.<br/>
Außerdem bedeutet so ein Marathon immer sehr früh aufzustehen ( in diesem Falle 04:30 Uhr ) :-)<br/>
Und mein Radkollege hat abgesagt - also genug Gründe, sich den Sonntag anders zu verplanen.<br/>
Wenn da nicht der innere Schweinehund den Kampf angesagt hätte ...<br/>
Und mal ehrlich meine Laune wäre am Sonntag nicht berauschend gewesen denn ...<br/>
<br/>
es war eine super gelungene RTF !!!<br/>
<br/>
Leider gab es anfangs Schwierigkeiten da irgend so ein Depp die Schilder die auf die Strecke führen sollten abmontiert hat ...<br/>
das ist ein übler Scherz wenn man denn 200 KM radeln möchte.<br/>
Da kommt eine Wegsuche nicht gut.<br/>
Ich hatte das Glück einen Garmin dabei zu haben.<br/>
Ich hatte mir die Strecke Tags zuvor aufgeladen und konnte so die Streckenführung erkennen.<br/>
Das wiederum hatte aber zu Folge, dass ich, anstatt wie geplant ganz locker anfangen, eine "Meute" hinter mir hatte die die Strecke nicht kannte<br/>
und auch so ein Gerät nicht besaßen.<br/>
Da fühlte man sich dann schon ein wenig "auf der Jagd" wenn die jungen Burschen hinter einem fröhlich Quatschen<br/>
und spaß haben und man selber bei 85% der Maximalen HF die Strecke abfährt ;-)<br/>
Zum Glück war der Spuk nach 10 km erledigt und die Wegbezeichnung waren wieder sichtbar angebracht.<br/>
So konnte ich es dann ganz entspannt angehen lassen ...<br/>
Schnell fand ich wieder in meinen Trott - und mit mir auch ein Radkollege dessen Name ich leider vergessen habe ( ? ).<br/>
Er ist echt gut drauf.<br/>
Der zog auf der Geraden ein Tempo, das war schon echt klasse.<br/>
Ich genoss es bei Ihm im Windschatten fahren zu dürfen.<br/>
So konnte ich auch die traumhafte Gegend genießen !!!<br/>
Bei KM 60/65 passierte mir dann leider eine Panne :-) Mein Vorderreifen hatte einen platten in der Abfahrt ...<br/>
da habe ich Glück gehabt, das es mich nicht zerbröselt hat.<br/>
Zu diesem Zeitpunkt waren wir mit einem kleinen Pulk unterwegs.<br/>
Mein Kollege bekam von meinem Dilemma nichts mit.<br/>
Und so stand ich da mit einem Platten - Flickzeug hatte ich, aber leider keine Ahnung wie ich so einen Schlauch auch repariere bzw.<br/>
austausche.<br/>
Und da gilt dann ganz klar der Spruch: "Ich bin so froh, das ich ein Mädchen bin"<br/>
Keine 2 Minuten später kam ein Mitfahrer vom RTC Rodenkirchen und hat mir anstandslos geholfen.<br/>
Kurz darauf kam auch ein Wagen Vom RTC Köln und fragte ob er auch helfen könnte ...<br/>
Das war unglaublich nett !!!!!<br/>
Schön, das es solche Menschen gibt !!!!<br/>
Bei der nächsten Verpflegung wartete dann mein "Kollege" auch schon auf mich ;-)<br/>
Die Verpflegungsstellen waren allesamt klasse !!!<br/>
Es gab Kuchen, Rosinenstuten, Kekse, Weingummi, Riegel, und und und ...<br/>
Für die Marathon'is gab es sogar noch eine warme Mahlzeit.<br/>
Das Wetter war auch absolut in Ordnung.<br/>
Es kamen nur ein paar Tropfen runter und die konnte man genießen wurde es doch zum Ende der Tour mächtig warm mit Sonne !!!!<br/>
Fazit: Eine absolut lohnenswerte RTF - sehr nette, und hilfsbereite Helfer - super Gegend !!!!<br/>
Auf diesem Wege auch noch mal ein herzliches Dankeschön für die nette Begleitung Namens ? - ohne ihn wäre ich nicht so schnell unterwegs gewesen.<br/>
<br/>
Lieben Gruß<br/>
Michaela Bäcker<br/>
Aus Kierspe
`
                    )
                    .title('... eine super gelungene RTF !!!')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('Mai/Juni 2012')
                    .location('Libur')
                    .name('Matthias Zimmer')
                    .source(Source['E-Mail'])
                    .text(
                        `
Sehr geehrte Damen und Herren,<br/>
<br/>
Ich freue mich sehr wenn der Breitensport immer noch großen Zulauf findet.<br/>
Überhaupt keine Freude empfinde ich wenn Radsportbegeisterte ihre Freude widerrum schon Morgens um kurz nach 7 in reinen Wohngebieten lautstark zum Ausdruck bringen.<br/>
So geschehen heute Morgen in Libur (Freiheit/Stockumer Weg) Seit diesem Zeitpunkt war ich leider wach und konnte den Hochgenüssen der lautstarken Artikulation bestens folgen.<br/>
Ein weiterer Kritikpunkt ist: in den an Libur angrenzenden Feldern genießen viele ihre Freizeit, Hundehalter, Jogger, Walker<br/>
und andere sind massivst durch unangemessene Geschwindigkeit Ihrer Fahrer gestört.<br/>
Auch in Libur selber, sie kennen die Strassen wahrscheinlich, sind Ihre Teilnehmer unangemessen schnell unterwegs.<br/>
Ich selber durfte eine Gruppe "vorbeifliegender" Radler genießen.<br/>
<br/>
Ich fasse meine Kritik noch einmal zusammen.
- unangemessene Geschwindigkeit
- zu hohe Lautstärke der Teilnehmer in reinen Wohngebieten zu nachtschlafender Zeit
- bedingte Bereitsschaft zu gegenseitiger Rücksichtnahme
- keine Signalisierung durch von hinten heraneilenden Radgruppen (Ihre Sportgeräte haben keine hohen Laufgeräusche)
- keine Information der Anwohner, damit diese sich darauf einstellen können.

<br/>
Ich gebe zu ich habe wahrscheinlich nicht die besten Exemplare erwischt, aber diese sind natürlich dann das Markenzeichen Ihrer Veranstaltung.<br/>
<br/>
mit freundlichen Grüssen<br/>
Matthias Zimmer
`
                    )
                    .title('Lärmbelästigung und Raserei')
                    .build(),
                new GuestbookEntryBuilder()
                    .date('Mai/Juni 2012')
                    .name('Monika und Helmut Moosmann')
                    .organization('RSG Ford')
                    .source(Source['E-Mail'])
                    .text(
                        `
Liebe RTCler,<br/>
<br/>
CHAPEAU!!!<br/>
Wir sind zwar nur die 75-er (eigentlich waren es 84 km) gefahren, aber es war ein Traum!<br/>
Und besonders möchten wir die Verpflegung - hier besonders an der 1. Kontrolle - hervorheben.<br/>
Ein Genuss par excellence!<br/>
Das Beste, was wir in unserer 8-jährigen RTF-Erfahrung erleben durften!<br/>
Als Feinschmeckerin kann ich dies sehr wohl beurteilen: die tollen Kuchen, die liebevoll zubereiteten Brötchen mit Frischkäse und Garnitur und natürlich das Schmalzbrot.<br/>
Und keine WAFFELN!<br/>
Toll!<br/>
Ihr könnt auf eure Frauen stolz sein, super!<br/>
Und später am Ziel dann die wunderbare Quiche mit den zahlreichen Salaten habe ich genossen!<br/>
Vielen Dank nochmals für diese wunderbare Tour!<br/>
Hier spürt man euer Herzblut in aller Gänze!<br/>
Macht weiter so.<br/>
<br/>
Herzlichst grüßen die RSGler (Ford)<br/>
<br/>
Monika u. Helmut Moosmann
`
                    )
                    .title('CHAPEAU !!!')
                    .build(),
            ],
        }
    },
})
</script>

<style lang="scss" scoped></style>
