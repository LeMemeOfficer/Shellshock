# Doodle Panzers

## Allegemeins
**Autor:** Ozan Arslan

**Erstelldatum:** 10.09.2018

**Version:** 1.0

Doodle Panzers ist eine kreative Nachbildung des "Shellshock Live" im Rahmen eines Uni-Projektes.
Es handelt sich um ein Rundenbasiertes 2D-Strategiespiel im kindlichen doodel-stiel. Hierbei treten zwei Panzer gegeneinander an und müssen sich mit explosieven Geschossen auf einem zerstörbaren Boden abschießen
## Installation und Start der Anwendung
Dateien in einen beliebigen Ordner entpacken und index.html öffnen
## Steurung
### Im Anfangsmenü
Zuerst muss ausgewählt werden, ob man alleine (Singleplayer) oder zu zweit (Multiplayer) spielen will.
Klickt man auf Multiplayer, starter das spiel sofort im Multiplayer.

Wählt man Singleplayer aus, kann man noch einen Schwierigkeitsgrad auswählen. Zur Wahl stehen "easy", "medium", "hard" und "impossible". Diese beeinflussen die Treffsicherheit des Bots, gegen den gespielt wird.
### Ein- und Ausschalten von Sound und Musik
Um Sounds und Musik ein- oder auszuschalten, kann oben rechts im Spiel auf das Lautsprechersymbol (Sounds) und auf das Musiknotensymbol (Musik) geklickt werden.
### Im Spiel
#### Bewegung
Mit den Tasten "A" und "D" kann der Panzer nach links oder rechts bewegt werden. Dies geht solange, bis alle Bewegungspunkte aufgebraucht wurden. Wie weit man sich noch Bewegen kann, sieht man an dem mit einer Zapfsäule markierten Balken unter dem Panzer.
#### Schießen
Geschossen wird durch einen Linksklick auf einen beliebegen Bereich auf der Seite. Hierbei wird die Schusstärke und der Winkel durch einen Indikatorkegel an der Spitze des Schussrohres des Panzers angezeigt. Diese werden durch die relative Postion des Cursors zum aktiven Panzer bestimmt.
Pro Zug kann nur einmal geschossen werden und der Zug endet mit dem explodieren des Geschosses.

Fällt das Leben eines Spielers auf 0 (Balken mit Herzsymbol unter dem Spieler) ist dieser tot. Ist nur noch ein Spieler übrig, gewinnt dieser.
## Verwendete Technologien
Javascript, HTML5 und CSS
## Browserkompatibilität
### Getestet
Firefox Version 62.0

Chrome Version 69.0.3497.81
### Funktioniert nicht in:
Internet Explorer
## Bekannte Fehler
1) Wenn beide Spieler gleichzeitig sterben, also zu keinen Zeitpunkt nur ein Spieler lebt, endet das Spiel nicht.
2) Wenn beide Spieler zu nah beieinander sind, überlappen sich ihre Interfaces
3) Bots können nicht nach rechts fahren
## Lizenz
Standard MIT Lizenz
## Externe Ressourcen
Oswald Font - Vernon Adams
- Lizenz: Copyright 2016 The Oswald Project Authors (https://github.com/googlefonts/OswaldFont)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
http://scripts.sil.org/OFL
- Quelle: https://fonts.google.com/specimen/Oswald
