# Zadani uprav - pruchod apkou

Soubor: `/Users/mp/Desktop/youplace-web-work/app/index.html`

## 1. Dashboard (page-dashboard, ~line 951)
- Zrusit VSECHNY 3 zalozky "DASHBOARD", "AI TYM", "UKOLY" — misto nich budou **aktualni projekty** prihlaseneho cloveka (karty projektu primo na dashboardu)
- Ikony preradit: **Ukoly, Projekty, Kolegy, Auta, Kalkulacky, Finance**
- **Misto statistik** (kolik projektu, 2 lide atd.) — zobrazit **nasledujici ukol co ceka**
- **Nahore vedle casu**: zobrazit **penezni bonus** co cloveka ceka
- **Zalozka AI TYM** (dokud existuje): ikony AI dat vedle sebe, zbytek obsahu pod ikonami je k nicemu — zrusit
- **Zalozka UKOLY** (dokud existuje): karty nad seznamem ukolu jsou zbytecne — zrusit, nechat jen seznam ukolu

## 2. Projekty T1 (page-projekty, ~line 1000)
- **Karta Tym projektu**: musi jit otevrit — otevre se tym (lidi) co je na tom projektu
- **Karta Termin**: jasne ukazat jestli je projekt napred nebo pozadu, ale **BEZ barev** (jen text)
- **Karta Dalsi ukol**: musi jit otevrit — otevre detail ukolu
- **Pridat**: kalendar s ukoly ktere patri k tomuto projektu

## 3. Projekty Detail (page-projekty-detail, ~line 1038)
- **Faze projektu a aktualni ukoly**: zobrazit vedle sebe (ne pod sebou)
- **Slozky projektu** (fotky, soubory, postupy, vysledky, material, rozpocet...): presunout do bocniho menu

## 4. Lide T1 (page-lide, ~line 1318)
- **Aktivni projekty**: misto napisu zobrazit jako **ikony** (klikatelne)
- **Stavba (kde ted je)**: musi jit kliknout — otevre se detail stavby
- **Ukoly**: musi jit otevrit (klikatelne)

## 5. Lide Detail (page-lide-detail, ~line 1349)
- **Velky kalendar**: jeden hlavni kalendar cloveka — z nej jasne videt kde ted je, jake ma ukoly, na jakych projektech zrovna pracuje
- **Aktivni projekty**: misto napisu zobrazit jako **ikony** (klikatelne)
- **Stavba (kde ted je)**: musi jit kliknout — otevre se detail stavby
- **Ukoly**: musi jit otevrit (klikatelne)

## 6. Auta T1 (page-auta, ~line 1485)
- **Karty v pravo**: 1) Kdo ho ma na starost, 2) Kde ted auto je, 3) Jaky je dalsi servis
- **Ikony nefunguji**: je potreba vyrobit stranky pro vsechny ikony na teto strance

## 7. AI T1 (page-ai, ~line 1577)
- **Bocni karty vpravo**: "AI pracuje" — zobrazit ikonu konkretniho AI ktere pracuje; "Ceka na odpoved" — ikona ktereho AI ceka na odpoved
- **Porada**: tlacitko je ok, ale vizualne sladit s ikonami nad nim — ted to k sobe nepasuje
- **Ikony nad kartami vs karty**: sjednotit vizualni styl aby to k sobe pasovalo

## 8. Kalkulacky (page-kalkulacky, ~line 2002)
- **Obsah vycentrovat** na stred stranky

## 9. Ukoly (page-ukoly, ~line 2935)
- **Obsah vycentrovat** na stred stranky

## 10. Lide Kalendar (page-lide-kalendar, ~line 1437)
- **Kalendar udelat velky** — hlavni prvek stranky, vse videt primo na nem (ukoly, projekty, kde clovek je)
- Druhy doplnek bud jen maly vedle, nebo idealne **vse na jednom velkem kalendari** a doplnek zrusit

## 11. Projekty Lide (page-projekty-lide / #projekty-lide)
- **Bocni menu zrusit** — je k nicemu
- **Velke ikony lidi** uprostred stranky (ne seznam, ale ikony)

## 12. Finance (page-finance, ~line 1760)
- **Obsah vycentrovat** na stred stranky
