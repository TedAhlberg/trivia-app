#To start the webpage
1. Download the package from github (https://github.com/TedAhlberg/trivia-app/)
2. Extract the package
3. Run git bash command: npm install, in the extracted directory
4. Run git bash command: npm run serve, in the extracted directory
5. Visit the local URL given in git bash

#Motivering av ramverk

Till vårt projekt har vi valt att arbeta med ramverket Vue. Andra ramverk vi har övervägt är React och Angular.

Angular
- Brant inlärningskurva
- Bra för stor skalade applikationer med fokus på många funktioner
- Baserat på MVC modellen
- Typescript
- Hanterar tvåvägskommunikation.

React
- Lite enklare än angular
- Passande för modern webutveckling och native renderade applikationer till iOS och Android
- Baserat på Virtual DOM
- Fokus på Javascript
- Hanterar envägskommunikation

Vue
- Låg inlärningskurva
- Bra för webutveckling och one-page applikationer 
- Baserat på Virtual DOM
- Javascript, HTML templates, CSS
- Erbjuder både en och tvåvägskommunikation

Vår applikation är en one-page med många moduler, vilket Vue är ett optimalt alternativ för. Den låga inlärningskurvan som Vue har gentemot React och Angular var också en övervägande faktor till vårt val. Vue har även en snygg och enkel komponentbaserad struktur som implementerar html, javascript och css i ett och samma dokument, vilket möjliggör skrivande av städad kod med god överblick. I Vue sker kommunikationen mellan moduler smidigt i form av V-models som kräver få rader kod. Angular och React kräver en något stökigare implementation.

Källa: https://www.spec-india.com/blog/react-vs-angular-vs-vue-js-a-complete-comparison-guide/
 
