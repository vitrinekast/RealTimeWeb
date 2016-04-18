# RealTimeWeb
##Week 1
###Opdracht 1: File structuur
Een van de dingen die mij vooral opviel in de aanbevolen file structure van de officiele Meteor Guide, is de map met ‘imports’. Dit oogt voor mij als een vrij chaotische map, aangezien 80% van de code zich hier bevindt. Na menig wat fora doorzocht te hebben bleek dat het sinds de 1.3 release toch belangrijk is van deze map gebruik te maken, zodat je controle houd over wat er geladen wordt en wanneer. Over het algemeen houd Meteor de volgende regels aan als het gaat over de volgorde van het inladen van bestanden :

1. HTML template files are always loaded before everything else
2. Files beginning with main. are loaded last
3. Files inside any lib/ directory are loaded next
4. Files with deeper paths are loaded next
5. Files are then loaded in alphabetical order of the entire path
* client
....*De client map bevat alleen de main.js, hierin staan alle imports die op de client uitgevoerd moeten worden.
* imports
..* templates
....*De imports map is voornamelijk gevuld met de templates. Deze zijn onderverdeeld volgens de url. /adopt verwijst dus naar de adopt map, met hierin verschillende templates met hun javascript bestanden. De algemene template staat in de map template.
..* lib
....*Hierin zit collections.js, waar ik collections aanmaak, exporteer en publiceer.
....*helpers.js: hierin zitten helper functions die over de gehele applicatie gebruikt worden.
....*router.js: de router.
..* partials
....*Hier plaats ik kleine stukjes templates die herhaaldelijk gebruikt worden.
* public
..* Hierin staan publieke bestanden, zoals afbeeldingen en iconen.
* server
..*Op de server staat een main.js, die de collections importeert, zodat deze op de server aangemaakt worden

####Bronnen:
http://joshowens.me/how-to-organize-your-meteor-js-app/
http://guide.meteor.com/structure.html
https://www.codementor.io/meteor/tutorial/3-things-know-structure-meteor-application
https://www.discovermeteor.com/blog/study-plan-meteor-1-3/#application-architecture
https://forums.meteor.com/t/meteor-1-3-imports-directory/19351/4

###Opdracht 2 - Mongo Collection
Momenteel maak heb ik 3 collections aangemaakt. Daarnaast maak ik ook gebruik van de users collection van meteor zelf. 
De 3 eigen collections zijn:
*Needs
 dit zijn de needs van de gezamelijke tamagotchi. Deze gaat mogelijk nog veranderen.
*History
 Dit is de historie van uitgevoerde acties op de gezamelijke tamagotchi. Het zou eventueel overzichtelijker zijn om deze samen te voegen met de Needs collection. 
*Groups
 Deze collection bevat alle groups die zijn aangemaakt. Deze groups bevatten elke een array met objecten, met daarin informatie over de users die bij deze group horen. Ook heeft elke group zijn eigen tamagotchi.

####Bronnen:
https://forums.meteor.com/t/meteor-1-3-importing-exporting-collections/17681/6

###Opdracht 3 - een view
De belangrijkste view is het startscherm, waar de gezamelijke tamagotchi zich bevindt. Hier kan de gebruiker acties kan uitvoeren op de tamagotchi zonder in te loggen. Dit brengt echter nog problemen met zich mee zodra je de insecure package verwijderd. Je kunt dan namelijk geen collections meer updaten zonder ingelogd te zijn. 

De needs van de tamagotchi zijn weergegeven met een meter, die langzaam leeg loopt. Zodra de meter leegloopt is de tamagotchi helaas overleden. 
Ik heb geprobeerd dit met D3 weer te geven, maar heb uiteindelijk gebruik gemaakt van de HTML meter tag. Dit is semantisch correcter, en ook reactive. Daarnaast wordt het door de meeste browsers ondersteund, en geeft D3 veel meer problemen dan deze oplossing.

##Week 1
###Opdracht 3: Databron
Ik zal gebruik maken van de [Open Weather Map Api]( http://openweathermap.org/).
Deze geeft aan wat het huidige weer is per stad, en update dit elke 2 uur.
Naast het weer ontvang je ook de bewolktheid, luchtvochtigheid, zonsopgang en zonsondergang. 
De data iis beschikbaar in JSON, XML en HTML.

####Voordelen
* Het gaat om betrouwbare, professionele data
* De api bevat een uitgebreide documentatie

####Nadelen
* Met de gratis versie ontvang je helaas maar elke 2 uur een update
* 

###Opdracht 4 - Concept
Samen met alle gebruikers een tamagotchi verzorgen. Gebruikers kunnen de tamagotchi voeren, aaien of douchen. 

####Feature set
* Gebruiker kan de tamagotchi voeren
* Gebruiker kan de tamagotchi wassen
* Gebruiker kan de tamagotchi aaien
* De acties die door gebruikers op de tamagotchi worden uitgevoerd worden weergegeven in een lijst
* De tamagotchi heeft bepaalde behoeftens (honger, slaap, plezier, hygiene) die afhankelijk zijn van de interacties die de gebruiker met de tamagotchi uitvoert.
* De behoeften worden in een grafiek weergegeven.

####Future features
* Gebruikers kunnen met vrienden een eigen tamagotchi adopteren
* Gebruikers kunnen met elkaar chatten
* De tamagotchi wordt beinvloed door het weer. Vb, bij regen kan de gebruiker de tamagotchi een paraplu aanbieden. 
* De tamagotchi kan te dik worden
* De tamagotchi wordt visueel weergegeven. 
* De tamagotchi gaat in animaties van state tot state.
* De tamagotchi kan dood gaan. 


####Views
####MVP:
* Homescreen met daar in:
  * de tamagotchi
  * geschiedenis van uitgevoerde acties op de tamagotchi
  * grafiek met de behoeften van de tamagotchi
  * lijst met uitvoerbare acties op de tamagotchi.

####FF:
* Homescreen toevoeginggen:
  * Tamagotchi wordt visueel weergegeven
  * chat
  * Vrienden pagina
  * Adopteren van een tamagotchi

####Reactive components
* de chat
* de geschiedenis van de uitgevoerde acties op de tamagotchi
* grafiek met behoeften




