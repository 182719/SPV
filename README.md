# SPV

## Fremgangsmåte:
Jeg begynte først å lage en fetch funksjon som kunne hente json data, og bygget ett lite prosjekt med html+css fil som kunne bli jobbet mot.
Etter å ha laget fetch funksjonen prøvde jeg å få denne til å hente data for 1 planet og skrive det til DOM. Dessverre fikk jeg mye problemer med CORS, og fikk ikke live-server til å tillate dette i header. 
Brukte ca. 30 minutter på å feilsøke dette, før jeg fant en plugin til Firefox som tillot CORS uansett side(! :S), denne gjorde at jeg kunne teste videre.


planetFetch.js: 
Eksporterer 1 funskjon:
Denne henter 1 planet basert på et tall. API-et tilbyr planeter fra 1-60 såvidt jeg vet. 

planetBox.js:
Importerer modul fra planetFetch.
Representerer "tilstanden" i systemet. Skriver data til DOM. 
Ansvarlig for initialisering av kode, seg selv, og events.

I planetbox klassen lagrer jeg et array av planets objekter som inneholder all informasjon om de innlastede planetene.
I konstruktøren lager jeg dette arrayet, og kaller en async funksjon som kaller fetchPlanets, og så legger planetene i planetBox arrayet inn i DOM. 
Samtidig legger den inn click-listnere på planetnavn elementet slik at dette kan trykkes på, og en ny funksjon kalles for å legge til detajler i <p> taggen.

Jeg ønsket også å gjøre det mulig å laste flere planeter inn om man ønsket, men det er en bug i funksjonen som gjør at tidligere lastede planeter også blir hentet og lagt til på nytt.
Jeg valgte å foksuere på beskrivelsen min siste 30 min av tiden. 


Ting jeg vil gjøre bedre: 
- Sjekke fetch data bedre for å kunne håndtere endringer, evt. manglende data. 
- Fikse hent-flere planeter funksjonalitet
- Gjøre stylesheet og styling penere.
- Bruke liste elementer i stedet for en p tag
- Refaktorere koden til en helhetlig kodestil, se på om jeg burde ha flere moduler. Noen funksjoner har litt for mye arbeid og ansvar. 


Ettertanker: 

Jeg har ikke utstrakt brukt JavaScript på ca. 4mnd nå, og kjenner meg litt rusten. Det har gått mest i C# og Unity de siste mnd. nemlig.
Syns oppgaven gikk greit, CORS problemene mine ble irriterende å bruke tid på, men dette burde jeg kanskje hatt orden på fra før av. 
Kodekvalitet-messig ble det mest fokus på å få ting til å fungere, og det er mulig jeg ikke har gjort det helt elegant da. 
Gitt mer tid ville jeg nok brukt mer tid på å tenke på arkitekturen av koden, oppdeling med tanke på MVC, og gjenbrukbarhet. 
