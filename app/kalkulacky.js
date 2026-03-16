// === DATABÁZE ===
const vitonProdukty = {
  zaklady: [
    { id: 'eg11', nazev: 'EG 11 epoxyesterovy zaklad', vydatnost: 12, cena: { 0.8: 219, 4: 849, 9: 1690 }, schnutiDotyk: '30 min', schnutiDalsiVrstva: '16 hod', popis: 'Jednoslozkov rychleschnouci zaklad do stredne tezkeho korozniho prostredi. Adhezni mezivrstva pri renovaci starych nateru.', je1K: true, url: 'https://www.barvissimo.cz/viton?q=EG+11' },
    { id: 'zg11', nazev: 'ZG 11 epoxidovy zaklad 2K', vydatnost: 10, cena: { 1: 390, 4: 1290, 9: 2590 }, schnutiDotyk: '55 min', schnutiDalsiVrstva: '24 hod', dobaZpracovani: '8 hod', popis: 'Dvouslozkov epoxidovy zaklad do stredne tezkeho korozniho prostredi. Vyzaduje tuzidlo ZH 91.', je2K: true, tuzidlo: 'ZH 91', url: 'https://www.barvissimo.cz/viton?q=ZG+11' },
    { id: 'zg13', nazev: 'ZG 13 epoxidovy zaklad 2K', vydatnost: 10, cena: { 1: 450, 4: 1490, 12: 3590 }, schnutiDotyk: '10 min', schnutiDalsiVrstva: '1 hod', dobaZpracovani: '45 min', popis: 'Rychleschnouci 2K epoxid do tezkeho korozniho prostredi. Odolava trvalemu ponoru, kyselinam, zasadam. Tuzidlo ZH 91.', je2K: true, tuzidlo: 'ZH 91', url: 'https://www.barvissimo.cz/zakladni-epoxydova-barva-zg-13ral-7035-12kg' },
  ],
  vrchni: [
    { id: 'ke20', nazev: 'KE 20 alkydovy email 3v1', vydatnost: 12, cena: { 0.8: 259, 2.5: 649, 9: 1990 }, schnutiDotyk: '30 min', schnutiDalsiVrstva: '15 min strik / 16 hod stetec', popis: 'Samozakladujici alkydova barva 3v1. Vnitrni a venkovni natery oceli, kontejneru, palet.', je3v1: true, url: 'https://www.barvissimo.cz/viton?q=KE+20' },
    { id: 'ke30', nazev: 'KE 30 alkydovy email 3v1', vydatnost: 12, cena: { 0.8: 259, 2.5: 649, 9: 1990 }, schnutiDotyk: '35 min', schnutiDalsiVrstva: '35 min strik / 16 hod stetec', popis: 'Samozakladujici alkydova barva 3v1 pro konstrukce, haly, kontejnery, palety, drevo.', je3v1: true, url: 'https://www.barvissimo.cz/viton?q=KE+30' },
    { id: 'ke31', nazev: 'KE 31 alkyduretanovy email 3v1', vydatnost: 10.8, cena: { 0.7: 219, 3.5: 880, 10: 2290 }, schnutiDotyk: '3 hod', schnutiDalsiVrstva: '1 hod strik / 16 hod stetec', popis: 'Vyssi stalobalevnost a zivotnost nez KE 30. Lze pouzit na plochy v kontaktu s potravinami.', je3v1: true, url: 'https://www.barvissimo.cz/samozakladujici-3v1-barva-ke-31-ral-7016-3-5kg' },
    { id: 'ke54', nazev: 'KE 54 alkyduretanovy email 3v1', vydatnost: 12, cena: { 0.8: 319, 2.5: 799, 9: 2490 }, schnutiDotyk: '25 min', schnutiDalsiVrstva: '40 min strik / 12 hod stetec', popis: 'Rychleschnouci 3v1 s uretanizovanym pojivem. Vyssi mechanicka odolnost.', je3v1: true, url: 'https://www.barvissimo.cz/viton?q=KE+54' },
    { id: 'ze53', nazev: 'ZE 53 synteticky email', vydatnost: 14, cena: { 0.8: 189, 2.5: 489, 9: 1390 }, schnutiDotyk: '45 min', schnutiDalsiVrstva: '45 min strik / 16 hod stetec', popis: 'Klasicky synteticky email - vyzaduje zaklad. Mozno nanaset primo na zaklady rady ZG, EG, KG.', vyzadujeZaklad: true, url: 'https://www.barvissimo.cz/viton?q=ZE+53' },
  ],
  systemy: [
    { id: 'interier', nazev: 'Bezny interior (radiatory, zabradli)', zaklad: null, vrch: 'ke31', vrstvy: 2, priprava: 'Odmastit, odstranit volnou rez dratenyum kartacem', brouseni: 'Lehce zdrsnit P120-180 pro lepsi prilnavost', postup: '2x email KE 31, mezi vrstvami min 12 hod stetcem', schnutiMeziVrstvami: '1 hod strikani / 16 hod stetec', schnutiKonecne: '7 dni plna tvrdost', popis: 'Samozakladujici alkyduretanovy email - bez zakladu, atest pro potraviny' },
    { id: 'exterier', nazev: 'Bezny exterier (ploty, brany)', zaklad: 'eg11', vrch: 'ze53', vrstvy: 3, priprava: 'Odstranit rez az na cisty kov, odmastit', brouseni: 'P80-120 rucne nebo bruskou, zaklad prebrousit P180', postup: '1x zaklad EG 11 + 2x vrchni ZE 53', schnutiMeziVrstvami: '16 hod po zakladu, 45 min mezi vrchnimi (strik)', schnutiKonecne: '7 dni plna tvrdost', popis: 'Ekonomicky system - jednoslozkov zaklad + synteticky email' },
    { id: 'rychly', nazev: 'Rychly nater (casova tisen)', zaklad: null, vrch: 'ke54', vrstvy: 2, priprava: 'Odmastit, okartacovat volnou rez', brouseni: 'Drateny kartac nebo P80-120', postup: '2x KE 54, druha vrstva uz po 40 min strikanim', schnutiMeziVrstvami: '40 min strikani / 12 hod stetec', schnutiKonecne: '7 dni', popis: 'Nejrychlejsi system - alkyduretanovy 3v1 email' },
    { id: 'prumysl', nazev: 'Prumysl / tezka koroze', zaklad: 'zg13', vrch: 'ke31', vrstvy: 3, priprava: 'Otryskavat na Sa 2.5 nebo mechanicky odstranit rez, odmastit', brouseni: 'Po otryskani bez brouseni, zaklad prebrousit P180', postup: '1x zaklad ZG 13 (2K) + 2x email KE 31', schnutiMeziVrstvami: 'Zaklad 1 hod, email 40 min (strik)', schnutiKonecne: '7 dni, chemicka odolnost', popis: '2K epoxidovy zaklad + kvalitni vrchni email', je2K: true },
  ],
  vodaBarvy: [
    { id: 'hae30', nazev: 'HAE 30 vodouredelna 3v1 polomat', vydatnost: 7.4, cena: { 0.7: 195, 3: 739 }, schnutiDotyk: '30 min', schnutiDalsiVrstva: '30 min strik / 6 hod stetec', popis: 'Samozakladujici akrylatova barva bez zapachu. Radiatory, okapy, strechy, zabradli, pozink, hlinik, plasty. RAL 9016 certifikovan pro styk s potravinami.', je3v1: true, jeVoda: true, vzhled: 'polomat', url: 'https://www.barvissimo.cz/vodoureditelna-barva-hae-30-3kg-3v1' },
    { id: 'hae34', nazev: 'HAE 34 vodouredelna 3v1 lesk', vydatnost: 7.4, cena: { 0.7: 195, 3: 739 }, schnutiDotyk: '30 min', schnutiDalsiVrstva: '30 min strik / 6 hod stetec', popis: 'Leskla verze HAE 30. Samozakladujici akrylatova barva bez zapachu. Na ocel, pozink, hlinik, med, nerez, plasty, drevo, beton.', je3v1: true, jeVoda: true, vzhled: 'lesk', url: 'https://www.barvissimo.cz/viton?q=HAE+34' },
    { id: 'hag08', nazev: 'HAG 08 vodouredelna 2v1', vydatnost: 8, cena: { 0.7: 179, 3: 649 }, schnutiDotyk: '20 min', schnutiDalsiVrstva: '20 min strik / 4 hod stetec', popis: 'Zakladni a vrchni akrylatova barva 2v1. Odlitky, konstrukce, ploty, okapy, strechy, podlahy. Lze pretirat HAE 30/34.', je2v1: true, jeVoda: true, vzhled: 'polomat', url: 'https://www.barvissimo.cz/viton?q=HAG+08' },
  ],
  vodaSystemy: [
    { id: 'voda_interier', nazev: 'Interior bez zapachu (radiatory)', zaklad: null, vrch: 'hae30', vrstvy: 2, priprava: 'Odmastit CL 07, odstranit volnou rez', brouseni: 'Zdrsnit P120-180', postup: '2x HAE 30, bez zapachu - idealni pro bydlene prostory', schnutiMeziVrstvami: '30 min strik / 6 hod stetec', schnutiKonecne: '24-48 hod', popis: 'Vodouredelna 3v1 barva, bez zapachu, certifikat pro potraviny', jeVoda: true },
    { id: 'voda_exterier', nazev: 'Exterier eko (okapy, strechy)', zaklad: null, vrch: 'hae34', vrstvy: 2, priprava: 'Odmastit CL 07, mechanicky odstranit rez', brouseni: 'P80-120, pozink bez brouseni', postup: '2-3x HAE 34, na pozink a hlinik primo bez zakladu', schnutiMeziVrstvami: '30 min strik / 6 hod stetec', schnutiKonecne: '48 hod pred destem', popis: 'Leskla vodouredelna barva na strechy, okapy, parapety', jeVoda: true },
    { id: 'voda_zaklad', nazev: 'Se zakladem (vyssi ochrana)', zaklad: 'hag08', vrch: 'hae30', vrstvy: 3, priprava: 'Odmastit CL 07, dukladne odstranit rez', brouseni: 'P80-120, zaklad prebrousit P180', postup: '1x zaklad HAG 08 + 2x vrchni HAE 30', schnutiMeziVrstvami: 'Zaklad 4 hod, vrchni 6 hod (stetec)', schnutiKonecne: '48-72 hod', popis: 'Kompletni vodouredelny system pro narocnejsi podminky', jeVoda: true },
    { id: 'voda_rychly', nazev: 'Rychly nater strikanim', zaklad: null, vrch: 'hae30', vrstvy: 2, priprava: 'Odmastit, okartacovat', brouseni: 'Drateny kartac nebo P120', postup: '2x HAE 30 strikanim, druha vrstva uz po 30 min', schnutiMeziVrstvami: '30 min strikanim', schnutiKonecne: '24 hod', popis: 'Nejrychlejsi vodouredelny system pro strikani', jeVoda: true },
  ],
  eshopUrl: 'https://www.barvissimo.cz/viton'
};

const jupolProdukty = {
  barvy: [
    { id: 'classic', nazev: 'Jupol Classic', vydatnost: 10, cena: { 2: 189, 5: 399, 10: 699, 15: 949 }, schnutiDotyk: '2 hod', schnutiDalsiVrstva: '4 hod', popis: 'Základní interiérová barva od roku 1969. Vysoká paropropustnost, vysoká bělost. Není omyvatelná.', vrstvy: 2 },
    { id: 'citro', nazev: 'Jupol Citro', vydatnost: 10, cena: { 2: 249, 5: 529, 10: 929, 15: 1249 }, schnutiDotyk: '2 hod', schnutiDalsiVrstva: '4 hod', popis: 'Protiplísňová barva s citrusovou vůní. Pro koupelny, kuchyně, sklepy, prádelny.', vrstvy: 2 },
    { id: 'latex', nazev: 'Jupol Latex Semi Matt', vydatnost: 9, cena: { 2: 319, 5: 679, 10: 1199, 15: 1599 }, schnutiDotyk: '1 hod', schnutiDalsiVrstva: '4 hod', popis: 'Omyvatelná latexová barva. Odolná proti otěru za mokra. Pro chodby, schodiště, dětské pokoje.', vrstvy: 2 },
    { id: 'gold', nazev: 'Jupol Gold', vydatnost: 12, cena: { 2: 379, 5: 819, 10: 1449, 15: 1949 }, schnutiDotyk: '1 hod', schnutiDalsiVrstva: '4 hod', popis: 'Prémiová barva s nejvyšší kryvostí. Antibakteriální. Jednovrstvá aplikace.', vrstvy: 1 },
    { id: 'block', nazev: 'Jupol Block', vydatnost: 8, cena: { 2: 429, 5: 929, 10: 1649 }, schnutiDotyk: '1 hod', schnutiDalsiVrstva: '4 hod', popis: 'Blokovací barva - zakryje skvrny od nikotinu, sazí, fixu, proteklou vodu.', vrstvy: 2 },
    { id: 'thermo', nazev: 'Jupol Thermo', vydatnost: 8, cena: { 5: 949, 10: 1699, 15: 2349 }, schnutiDotyk: '2 hod', schnutiDalsiVrstva: '4 hod', popis: 'Termoizolační barva s keramickými mikrosférami. Snižuje tepelné mosty, zabraňuje rosení.', vrstvy: 2 },
  ],
  penetrace: [
    { id: 'akril', nazev: 'JUB Akril Emulze', vydatnost: 15, cena: { 1: 99, 5: 319, 10: 549 }, schnuti: '4-6 hod', popis: 'Hloubková penetrace pro savé podklady. Ředí se vodou 1:1. Snižuje savost, zlepšuje přilnavost.' },
    { id: 'primer', nazev: 'Jupol Primer', vydatnost: 12, cena: { 1: 139, 5: 499, 10: 879 }, schnuti: '12-24 hod', popis: 'Pigmentovaný základní nátěr. Sjednocuje podklad, zvyšuje kryvost vrchního nátěru.' },
  ],
  podklady: [
    { id: 'novy', nazev: 'Nová omítka (savá)', penetrace: true, spotreba: 1.2, priprava: 'Nechat vyschnout min 4 týdny, opraškovité části odstranit', brouseni: 'Není potřeba' },
    { id: 'stary', nazev: 'Starý nátěr (nesavý)', penetrace: false, spotreba: 1.0, priprava: 'Omýt od prachu, odstranit odlupující se části', brouseni: 'Zdrsnit lesklé povrchy P150' },
    { id: 'sdk', nazev: 'Sádrokarton', penetrace: true, spotreba: 1.1, priprava: 'Přetmelit spoje a hlavičky šroubů, nechat preschnout', brouseni: 'Přebrousit tmel P120-150' },
    { id: 'beton', nazev: 'Beton', penetrace: true, spotreba: 1.3, priprava: 'Odstranit separační prostředky, nechat vyzrát min 28 dní', brouseni: 'Odstranit cementové mléko' },
  ]
};

const iclaProdukty = {
  lazury: [
    { id: 'lw400', nazev: 'LW400 lazura s voskem', vydatnost: 10, cena: { 1: 389, 2.5: 849, 5: 1549 }, vrstvy: 2, schnutiDotyk: '2-3 hod', schnutiDalsiVrstva: '6-8 hod', popis: 'Vodouředitelná tenkovrstvá impregnační lazura s voskovým efektem. Exteriér i interiér. Vydatnost 8-12 m²/l.' },
    { id: 'lw400bezb', nazev: 'LW400 bezbarvá', vydatnost: 10, cena: { 1: 389, 2.5: 849, 5: 1549 }, vrstvy: 2, schnutiDotyk: '2-3 hod', schnutiDalsiVrstva: '6-8 hod', popis: 'Bezbarvá lazura - POUZE pro interiér! V exteriéru bez UV ochrany rychle degraduje.' },
  ],
  laky: [
    { id: 'fani510', nazev: 'FANI510 (117.51) PU lak', vydatnost: 10, cena: { 1: 649, 5: 2790 }, vrstvy: 2, schnutiDotyk: '30 min', schnutiDalsiVrstva: '4 hod', dobaZpracovani: '4 hod', popis: 'Nežloutnoucí základní i vrchní lak. Pro otevřené i zavřené póry. Tužidlo C48 (20%).', je2K: true, tuzidlo: 'C48' },
    { id: 'opni600', nazev: 'OPNI600.30 (QT234-30) lak', vydatnost: 10, cena: { 1: 719, 5: 3090 }, vrstvy: 2, schnutiDotyk: '30 min', schnutiDalsiVrstva: '4 hod', dobaZpracovani: '4 hod', popis: 'Nežloutnoucí vrchní lak polomat 30. Atest pro dětský nábytek. Tužidlo C48.', je2K: true, tuzidlo: 'C48' },
    { id: '271', nazev: '271.00.05 podlahový olejolak', vydatnost: 12, cena: { 5: 1890 }, vrstvy: 3, schnutiDotyk: '4 hod', schnutiDalsiVrstva: '24 hod', popis: 'Podlahový olejolak pro interiér i exteriér. Vysoká mechanická odolnost, odolnost vodě. Mat 5.' },
  ],
  emaily: [
    { id: 'pfp753', nazev: 'PFP 753.01 bílý základ', vydatnost: 6, cena: { 1: 549, 5: 2290 }, vrstvy: 2, schnutiDotyk: '15 min', schnutiDalsiVrstva: '6-8 hod, brus po 12 hod', dobaZpracovani: '2 hod', popis: 'Vysokoplnící bílý základ na MDF a dřevo. Tužidlo C131 (30%). Brousit P320-400.', je2K: true, tuzidlo: 'C131' },
    { id: 'po3', nazev: 'PO 3 PU email RAL/NCS', vydatnost: 8, cena: { 1: 749, 5: 3190 }, vrstvy: 1, schnutiDotyk: '30 min', schnutiDalsiVrstva: '4 hod', dobaZpracovani: '3 hod', popis: 'Krycí 2K polyuretanový email v odstínech RAL/NCS. Tužidlo C51 (50%).', je2K: true, tuzidlo: 'C51' },
  ],
  systemy: [
    { id: 'exterier', nazev: 'Exteriér - palubky, ploty', produkt: 'lw400', vrstvy: 3, priprava: 'Očistit od prachu a nečistot. Dřevo suché (max 18% vlhkost)', brouseni: 'P100-120 ve směru vláken, mezi vrstvami P180-240 nebo ocelová vlna', postup: '2-3× lazura LW400, nanášet "do sucha", nevytvářet film', schnutiMeziVrstvami: '6-8 hod, nebo 40-70 min bez mezibrusu', schnutiKonecne: '48 hod před deštěm', popis: 'Lazura LW400 s voskem. Obnova po 2-4 letech dle expozice.' },
    { id: 'interier', nazev: 'Interiér - obklady, nábytek', produkt: 'lw400bezb', vrstvy: 2, priprava: 'Odstranit prach, mastnotu. Dřevo suché.', brouseni: 'P120-150, mezi vrstvami P240', postup: '2× bezbarvá lazura LW400', schnutiMeziVrstvami: '6-8 hod', schnutiKonecne: '24 hod', popis: 'Bezbarvá lazura pro přirozený vzhled dřeva. Pouze interiér!' },
    { id: 'nabytek', nazev: 'Nábytek - lakovaný (PU)', produkt: 'fani510', vrstvy: 3, priprava: 'Přesné zbroušení, odstranění prachu stlač. vzduchem', brouseni: 'Podklad P150-180, základ P320-400, před vrchem P400', postup: '1-2× FANI510 základ + 1× OPNI600.30 vrch. Tužidlo C48 20%.', schnutiMeziVrstvami: '4 hod', schnutiKonecne: '7 dní plná tvrdost', popis: 'Profesionální nežloutnoucí PU systém', je2K: true },
    { id: 'podlaha', nazev: 'Dřevěná podlaha', produkt: '271', vrstvy: 3, priprava: 'Zbrousit starý nátěr až na dřevo, vysávat prach', brouseni: 'P80-100 bruskou, P120 finální, mezi vrstvami P180-240', postup: '2-3× olejolak 271.00.05, 1. vrstva lze zředit 10-20%', schnutiMeziVrstvami: '24 hod', schnutiKonecne: '7 dní před plnou zátěží', popis: 'Olejolak 271.00.05 - vysoká mechanická odolnost' },
    { id: 'mdf', nazev: 'MDF - krycí email RAL', produkt: 'pfp753', vrstvy: 4, priprava: 'Očistit od prachu, hrany zaoblit (MDF saje na hranách)', brouseni: 'MDF P180, po izol. P220, základ P320-400', postup: '1× izolátor IS100, 1-2× základ PFP753 (tuž. C131 30%), 1× email PO3 (tuž. C51 50%)', schnutiMeziVrstvami: 'Izolátor 6-8 hod, základ 12 hod před brusem', schnutiKonecne: '7-14 dní', popis: 'Profesionální krycí systém: izolátor + základ + email', je2K: true },
  ]
};

// === POMOCNÉ FUNKCE ===
function najdiBaleni(potreba, cenik) {
  const bal = Object.keys(cenik).map(Number).sort((a, b) => b - a);
  let zbyva = potreba;
  const vys = [];
  for (const v of bal) { while (zbyva >= v * 0.7) { vys.push(v); zbyva -= v; } }
  if (zbyva > 0) vys.push(Math.min(...bal));
  return { baleni: vys, cena: vys.reduce((s, v) => s + cenik[v], 0) };
}
function vypoctiCenuZaSpotrebu(potreba, cenik) {
  const bal = Object.keys(cenik).map(Number).sort((a, b) => a - b);
  const nejmensi = bal[0];
  const cenaZaJednotku = cenik[nejmensi] / nejmensi;
  return Math.round(potreba * cenaZaJednotku);
}
function formatCena(c) { return c.toLocaleString('cs-CZ') + ' Kc'; }
function infoTooltip(text) { return '<span class="info-tooltip" tabindex="0">i<span class="info-tooltip-content">' + text + '</span></span>'; }

// === NAVIGACE ===
function selectBarvyTab(tab, el) { el.closest('.calc-tabs').querySelectorAll('.calc-tab').forEach(function(t){t.classList.remove('active');}); el.classList.add('active'); document.getElementById('kovContent').style.display = tab === 'kov' ? 'block' : 'none'; document.getElementById('stenyContent').style.display = tab === 'steny' ? 'block' : 'none'; document.getElementById('drevoContent').style.display = tab === 'drevo' ? 'block' : 'none'; }

// === KOV ===
let kovRezim = 'system', kovSystem = 'exterier', kovTyp = 'rozpoustedlo';
function setKovTyp(typ, el) {
  kovTyp = typ;
  document.getElementById('kovTypRozp').classList.toggle('active', typ === 'rozpoustedlo');
  document.getElementById('kovTypVoda').classList.toggle('active', typ === 'voda');
  kovSystem = typ === 'voda' ? 'voda_interier' : 'exterier';
  renderKovSystemy();
  renderKovVlastni();
  vypoctiKov();
}
function setKovRezim(rezim, el) { kovRezim = rezim; el.parentElement.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active')); el.classList.add('active'); document.getElementById('kovSystemy').style.display = rezim === 'system' ? 'block' : 'none'; document.getElementById('kovVlastni').style.display = rezim === 'vlastni' ? 'block' : 'none'; vypoctiKov(); }
var kovAbbrs = {interier:'INT',exterier:'EXT',rychly:'RYC',prumysl:'PRU',voda_interier:'INT',voda_exterier:'EXT',voda_zaklad:'ZAK',voda_rychly:'RYC'};
var kovDescs = {interier:'Vnitni prostory, obytne mistnosti',exterier:'Venkovni fasady, ploty, brany',rychly:'Jednovrstvovy system',prumysl:'Tezke korozni podminky',voda_interier:'Radiatory bez zapachu',voda_exterier:'Okapy, strechy, parapety',voda_zaklad:'Vyssi ochrana se zakladem',voda_rychly:'Rychle strikani'};
function renderKovSystemy() {
  const systemy = kovTyp === 'voda' ? vitonProdukty.vodaSystemy : vitonProdukty.systemy;
  document.getElementById('kovSystemyList').innerHTML = systemy.map(s => '<div class="v2-system-card ' + (kovSystem === s.id ? 'active' : '') + '" onclick="selectKovSystem(\'' + s.id + '\')"><div class="v2-abbr">' + (kovAbbrs[s.id]||s.id.substring(0,3).toUpperCase()) + '</div>' + (s.je2K ? ' <span class="badge" style="font-size:9px;vertical-align:middle;">2K</span>' : '') + '<div class="v2-sys-name">' + s.nazev.split('(')[0].trim() + '</div><div class="v2-sys-desc">' + (kovDescs[s.id]||s.popis||'') + '</div></div>').join('');
}
function selectKovSystem(id) { kovSystem = id; renderKovSystemy(); vypoctiKov(); }
function setKovRezerva(val, el) { document.getElementById('kovRezerva').value = val; el.parentElement.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active')); el.classList.add('active'); vypoctiKov(); }
function renderKovVlastni() {
  if (kovTyp === 'voda') {
    document.getElementById('kovZaklad').innerHTML = '<option value="zadny">Bez zakladu (pouzit 3v1)</option>' + vitonProdukty.vodaBarvy.filter(b => b.je2v1).map(z => '<option value="' + z.id + '">' + z.nazev + '</option>').join('');
    document.getElementById('kovVrchni').innerHTML = vitonProdukty.vodaBarvy.filter(b => b.je3v1).map(v => '<option value="' + v.id + '">' + v.nazev + ' (' + v.vzhled + ')</option>').join('');
  } else {
    document.getElementById('kovZaklad').innerHTML = '<option value="zadny">Bez zakladu (pouzit 3v1)</option>' + vitonProdukty.zaklady.map(z => '<option value="' + z.id + '">' + z.nazev + ' ' + (z.je2K ? '(2K)' : '(1K)') + '</option>').join('');
    document.getElementById('kovVrchni').innerHTML = vitonProdukty.vrchni.map(v => '<option value="' + v.id + '">' + v.nazev + ' ' + (v.je3v1 ? '(3v1)' : '') + '</option>').join('');
  }
}
function vypoctiKov() {
  const plocha = parseFloat(document.getElementById('kovPlocha').value) || 0;
  const rezerva = parseInt(document.getElementById('kovRezerva').value) || 10;
  if (plocha <= 0) { document.getElementById('kovResult').innerHTML = ''; return; }
  const plochaR = plocha * (1 + rezerva / 100);
  let zaklad = null, vrchni = null, vrstvy = 2;
  
  if (kovTyp === 'voda') {
    if (kovRezim === 'system') {
      const sys = vitonProdukty.vodaSystemy.find(s => s.id === kovSystem);
      if (sys.zaklad) zaklad = vitonProdukty.vodaBarvy.find(z => z.id === sys.zaklad);
      vrchni = vitonProdukty.vodaBarvy.find(v => v.id === sys.vrch);
      vrstvy = sys.vrstvy;
    } else {
      const zakladId = document.getElementById('kovZaklad').value;
      if (zakladId !== 'zadny') zaklad = vitonProdukty.vodaBarvy.find(z => z.id === zakladId);
      vrchni = vitonProdukty.vodaBarvy.find(v => v.id === document.getElementById('kovVrchni').value);
      vrstvy = zaklad ? 3 : 2;
    }
  } else {
    if (kovRezim === 'system') {
      const sys = vitonProdukty.systemy.find(s => s.id === kovSystem);
      if (sys.zaklad) zaklad = vitonProdukty.zaklady.find(z => z.id === sys.zaklad);
      vrchni = vitonProdukty.vrchni.find(v => v.id === sys.vrch);
      vrstvy = sys.vrstvy;
    } else {
      const zakladId = document.getElementById('kovZaklad').value;
      if (zakladId !== 'zadny') zaklad = vitonProdukty.zaklady.find(z => z.id === zakladId);
      vrchni = vitonProdukty.vrchni.find(v => v.id === document.getElementById('kovVrchni').value);
      vrstvy = zaklad ? 3 : 2;
    }
  }
  
  const polozky = [];
  let celkem = 0;
  let celkemSpotrebaKc = 0;
  if (zaklad) {
    const potreba = plochaR / zaklad.vydatnost;
    const bal = najdiBaleni(potreba, zaklad.cena);
    const cenaSpotrebaKc = vypoctiCenuZaSpotrebu(potreba, zaklad.cena);
    polozky.push({ ...zaklad, potreba: potreba.toFixed(2), baleni: bal.baleni.join('+') + (kovTyp === 'voda' ? 'kg' : 'l'), cenaBaleni: bal.cena, cenaSpotrebaKc: cenaSpotrebaKc });
    celkem += bal.cena;
    celkemSpotrebaKc += cenaSpotrebaKc;
  }
  if (vrchni) {
    const pocetVrstev = zaklad ? vrstvy - 1 : vrstvy;
    const potreba = (plochaR * pocetVrstev) / vrchni.vydatnost;
    const bal = najdiBaleni(potreba, vrchni.cena);
    const cenaSpotrebaKc = vypoctiCenuZaSpotrebu(potreba, vrchni.cena);
    polozky.push({ ...vrchni, potreba: potreba.toFixed(2), baleni: bal.baleni.join('+') + (kovTyp === 'voda' ? 'kg' : 'l'), cenaBaleni: bal.cena, cenaSpotrebaKc: cenaSpotrebaKc });
    celkem += bal.cena;
    celkemSpotrebaKc += cenaSpotrebaKc;
  }
  // Get postup from system
  const systemy = kovTyp === 'voda' ? vitonProdukty.vodaSystemy : vitonProdukty.systemy;
  const sys = systemy.find(x => x.id === kovSystem);
  const badgeTypes = {zaklad:'ZAK',vrchni:'VRC',penetrace:'PEN'};
  const badgeColors = {zaklad:'rgba(201,162,112,0.15)',vrchni:'rgba(59,130,246,0.15)'};
  const badgeTextColors = {zaklad:'#c9a270',vrchni:'#3b82f6'};
  // Build products HTML
  let produktyHtml = polozky.map((p,i) => {
    const typ = i===0 && polozky.length>1 ? 'zaklad' : 'vrchni';
    const badge = badgeTypes[typ]||'';
    return '<div class="v2-product-row"><div class="v2-product-badge" style="background:' + (badgeColors[typ]||'rgba(255,255,255,0.08)') + ';color:' + (badgeTextColors[typ]||'#888') + ';">' + badge + '</div><div class="v2-product-info"><div class="v2-product-name">' + p.nazev + '</div><div class="v2-product-detail">' + (i===0&&polozky.length>1?'Zakladni nater':'Vrchni nater') + ' &bull; Baleni ' + p.baleni + '</div></div><div class="v2-product-amount">' + (polozky.length>1&&i===0?'1x':''+Math.max(1,parseInt(p.baleni))+'x') + ' baleni</div><div class="v2-product-price">' + formatCena(p.cenaSpotrebaKc) + '</div></div>';
  }).join('');
  // Build postup table
  let postupHtml = '';
  if (sys && kovRezim === 'system') {
    let steps = [];
    if (sys.zaklad && zaklad) steps.push({krok:'Zakladni nater',produkt:zaklad.nazev.split(' ')[0]+' '+zaklad.nazev.split(' ')[1],aplikace:'stetec / valecek',redeni:'S 6005 / 10%',schnuti:'6 hod'});
    const vrchniName = vrchni ? vrchni.nazev.split(' ')[0]+' '+vrchni.nazev.split(' ')[1] : '';
    const pocetVrchnich = zaklad ? vrstvy-1 : vrstvy;
    for(let i=1;i<=pocetVrchnich;i++) steps.push({krok:i+'. vrstva vrchniho',produkt:vrchniName,aplikace:'stetec / valecek',redeni:'S 6005 / '+(i===pocetVrchnich?'5':'10')+'%',schnuti:(i===pocetVrchnich?'24':'8')+' hod'});
    postupHtml = '<table class="v2-postup-table"><tr><th>KROK</th><th>PRODUKT</th><th>APLIKACE</th><th>REDENI</th><th>SCHNUTI</th></tr>' + steps.map((st,i) => '<tr><td><span class="v2-step-badge">' + (i+1) + '</span></td><td>' + st.krok + '</td><td>' + st.aplikace + '</td><td>' + st.redeni + '</td><td>' + st.schnuti + '</td></tr>').join('') + '</table>';
  }
  document.getElementById('kovResult').innerHTML = '<div class="v2-result-grid"><div class="v2-result-section"><div class="v2-result-title">PRODUKTY</div>' + produktyHtml + '</div><div class="v2-result-section"><div class="v2-result-title">POSTUP APLIKACE</div>' + postupHtml + '</div></div><div class="v2-total-banner"><div><div class="v2-total-label">Celkova cena s ' + rezerva + '% rezervou</div><div class="v2-total-sub">Nakup: ' + formatCena(celkem) + ' (min. baleni)</div></div><div class="v2-total-value">' + formatCena(celkemSpotrebaKc) + '</div></div>';
}

// === STĚNY ===
let stenyPodklad = 'novy', stenyBarva = 'classic';
function renderStenyPodklady() { document.getElementById('stenyPodkladyList').innerHTML = jupolProdukty.podklady.map(p => '<div class="podklad-item ' + (stenyPodklad === p.id ? 'active' : '') + '" onclick="selectStenyPodklad(\'' + p.id + '\')"><div class="podklad-item-name">' + p.nazev + '</div>' + (p.penetrace ? '<div class="podklad-item-note">+ penetrace</div>' : '') + '</div>').join(''); renderStenyPodkladDetail(); }
function selectStenyPodklad(id) { stenyPodklad = id; renderStenyPodklady(); renderStenyPenetrace(); vypoctiSteny(); }
function renderStenyPodkladDetail() { const p = jupolProdukty.podklady.find(x => x.id === stenyPodklad); if (!p) return; document.getElementById('stenyPodkladDetail').innerHTML = '<div class="detail-panel" style="margin-top:12px;"><div class="detail-row"><span class="detail-label">Příprava</span><span class="detail-value">' + p.priprava + '</span></div><div class="detail-row"><span class="detail-label">Broušení</span><span class="detail-value">' + p.brouseni + '</span></div></div>'; }
function renderStenyBarvy() { document.getElementById('stenyBarvyList').innerHTML = jupolProdukty.barvy.map(b => '<div class="option ' + (stenyBarva === b.id ? 'active' : '') + '" onclick="selectStenyBarva(\'' + b.id + '\')"><div class="option-dot"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div><div class="option-text"><div class="option-title">' + b.nazev + ' (' + b.vrstvy + 'v)' + infoTooltip(b.popis) + '</div><div class="option-desc">Schnutí: ' + b.schnutiDotyk + ' dotyk | ' + b.schnutiDalsiVrstva + ' další vrstva</div></div><div class="option-meta"><span class="option-vrstvy">od ' + Math.min(...Object.values(b.cena)) + ' Kč</span></div></div>').join(''); }
function selectStenyBarva(id) { stenyBarva = id; renderStenyBarvy(); vypoctiSteny(); }
function renderStenyPenetrace() { const podklad = jupolProdukty.podklady.find(p => p.id === stenyPodklad); const section = document.getElementById('stenyPenetraceSection'); if (podklad && podklad.penetrace) { section.style.display = 'block'; document.getElementById('stenyPenetrace').innerHTML = jupolProdukty.penetrace.map(p => '<option value="' + p.id + '">' + p.nazev + ' (schnutí ' + p.schnuti + ')</option>').join(''); } else { section.style.display = 'none'; } }
function vypoctiSteny() { const plocha = parseFloat(document.getElementById('stenyPlocha').value) || 0; const rezerva = parseInt(document.getElementById('stenyRezerva').value) || 10; if (plocha <= 0) { document.getElementById('stenyResult').innerHTML = ''; return; } const plochaR = plocha * (1 + rezerva / 100); const barva = jupolProdukty.barvy.find(b => b.id === stenyBarva); const podklad = jupolProdukty.podklady.find(p => p.id === stenyPodklad); const penetraceId = document.getElementById('stenyPenetrace').value; const penetrace = jupolProdukty.penetrace.find(p => p.id === penetraceId); const polozky = []; let celkem = 0; if (podklad.penetrace && penetrace) { const potreba = plochaR / penetrace.vydatnost; const bal = najdiBaleni(potreba, penetrace.cena); polozky.push({ ...penetrace, potreba: potreba.toFixed(2), baleni: bal.baleni.join('+') + 'l', cenaBaleni: bal.cena }); celkem += bal.cena; } if (barva) { const potreba = plochaR * barva.vrstvy * podklad.spotreba * 0.1; const bal = najdiBaleni(potreba, barva.cena); polozky.push({ ...barva, potreba: potreba.toFixed(2), baleni: bal.baleni.join('+') + 'l', cenaBaleni: bal.cena }); celkem += bal.cena; } document.getElementById('stenyResult').innerHTML = '<div class="result"><div class="card-title">Kalkulace</div>' + polozky.map(p => '<div class="result-item"><div class="result-item-info"><div class="result-item-name">' + p.nazev + infoTooltip(p.popis) + '</div><div class="result-item-detail">' + p.potreba + 'l = ' + p.baleni + (p.vrstvy ? ' (' + p.vrstvy + 'v)' : '') + '</div></div><div class="result-item-price">' + formatCena(p.cenaBaleni) + '</div></div>').join('') + '<div class="result-total"><span class="result-total-label">CELKEM</span><span class="result-total-value">' + formatCena(celkem) + '</span></div><div class="result-per-m2">' + Math.round(celkem / plocha) + ' Kč/m²</div></div>'; }

// === DŘEVO ===
let drevoRezim = 'system', drevoSystem = 'exterier';
function setDrevoRezim(rezim, el) { drevoRezim = rezim; el.parentElement.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active')); el.classList.add('active'); document.getElementById('drevoSystemy').style.display = rezim === 'system' ? 'block' : 'none'; document.getElementById('drevoVlastni').style.display = rezim === 'vlastni' ? 'block' : 'none'; vypoctiDrevo(); }
function renderDrevoSystemy() { document.getElementById('drevoSystemyList').innerHTML = iclaProdukty.systemy.map(s => '<div class="option ' + (drevoSystem === s.id ? 'active' : '') + '" onclick="selectDrevoSystem(\'' + s.id + '\')"><div class="option-dot"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div><div class="option-text"><div class="option-title">' + s.nazev + infoTooltip(s.popis) + '</div></div><div class="option-meta">' + (s.je2K ? '<span class="badge">2K</span>' : '') + '<span class="option-vrstvy">' + s.vrstvy + 'v</span></div></div>').join(''); renderDrevoSystemDetail(); }
function selectDrevoSystem(id) { drevoSystem = id; renderDrevoSystemy(); vypoctiDrevo(); }
function renderDrevoSystemDetail() { const s = iclaProdukty.systemy.find(x => x.id === drevoSystem); if (!s) return; document.getElementById('drevoSystemDetail').innerHTML = '<div class="detail-panel"><div class="detail-panel-title">Postup aplikace</div><div class="detail-row"><span class="detail-label">Příprava</span><span class="detail-value">' + s.priprava + '</span></div><div class="detail-row"><span class="detail-label">Broušení</span><span class="detail-value">' + s.brouseni + '</span></div><div class="detail-row"><span class="detail-label">Postup (' + s.vrstvy + ' vrstvy)</span><span class="detail-value">' + s.postup + '</span></div><div class="detail-row"><span class="detail-label">Mezi vrstvami</span><span class="detail-value">' + s.schnutiMeziVrstvami + '</span></div><div class="detail-row"><span class="detail-label">Konečné schnutí</span><span class="detail-value">' + s.schnutiKonecne + '</span></div>' + (s.je2K ? '<div class="detail-warning">2K systém - nutné tužidlo, dodržet poměr míchání a dobu zpracování!</div>' : '') + '</div>'; }
function renderDrevoVlastni() { const vse = [...iclaProdukty.lazury, ...iclaProdukty.laky, ...iclaProdukty.emaily]; document.getElementById('drevoProdukt').innerHTML = '<optgroup label="Lazury">' + iclaProdukty.lazury.map(p => '<option value="' + p.id + '">' + p.nazev + '</option>').join('') + '</optgroup><optgroup label="Laky (2K)">' + iclaProdukty.laky.map(p => '<option value="' + p.id + '">' + p.nazev + '</option>').join('') + '</optgroup><optgroup label="Emaily (2K)">' + iclaProdukty.emaily.map(p => '<option value="' + p.id + '">' + p.nazev + '</option>').join('') + '</optgroup>'; }
function vypoctiDrevo() { const plocha = parseFloat(document.getElementById('drevoPlocha').value) || 0; const rezerva = parseInt(document.getElementById('drevoRezerva').value) || 15; if (plocha <= 0) { document.getElementById('drevoResult').innerHTML = ''; return; } const plochaR = plocha * (1 + rezerva / 100); let produkt = null, vrstvy = 2; const vseProdukty = [...iclaProdukty.lazury, ...iclaProdukty.laky, ...iclaProdukty.emaily]; if (drevoRezim === 'system') { const sys = iclaProdukty.systemy.find(s => s.id === drevoSystem); produkt = vseProdukty.find(p => p.id === sys.produkt); vrstvy = sys.vrstvy; } else { const produktId = document.getElementById('drevoProdukt').value; produkt = vseProdukty.find(p => p.id === produktId); vrstvy = produkt?.vrstvy || 2; } if (!produkt) return; const potreba = (plochaR * vrstvy) / produkt.vydatnost; const bal = najdiBaleni(potreba, produkt.cena); document.getElementById('drevoResult').innerHTML = '<div class="result"><div class="card-title">Kalkulace</div><div class="result-item"><div class="result-item-info"><div class="result-item-name">' + produkt.nazev + infoTooltip(produkt.popis) + '</div><div class="result-item-detail">' + potreba.toFixed(2) + 'l (' + vrstvy + 'v) = ' + bal.baleni.join('+') + 'l</div><div class="result-item-schnuti">Schnutí: ' + produkt.schnutiDotyk + ' dotyk | ' + produkt.schnutiDalsiVrstva + ' další vrstva</div><div class="result-item-badges">' + (produkt.je2K ? '<span class="badge badge-yellow">2K + ' + produkt.tuzidlo + '</span>' : '') + '</div></div><div class="result-item-price">' + formatCena(bal.cena) + '</div></div><div class="result-total"><span class="result-total-label">CELKEM</span><span class="result-total-value">' + formatCena(bal.cena) + '</span></div><div class="result-per-m2">' + Math.round(bal.cena / plocha) + ' Kč/m²</div></div>'; }

// === INIT for native embedding ===
var calcInitDone={};
var calcInit={
  barvy:function(){if(calcInitDone.barvy)return;calcInitDone.barvy=1;renderKovSystemy();renderKovVlastni();renderStenyPodklady();renderStenyBarvy();renderStenyPenetrace();renderDrevoSystemy();renderDrevoVlastni();},
  zaklady:function(){if(calcInitDone.zaklady)return;calcInitDone.zaklady=1;renderZakladyAll();},
  elektro:function(){if(calcInitDone.elektro)return;calcInitDone.elektro=1;renderElektroAll();},
  podlahy:function(){if(calcInitDone.podlahy)return;calcInitDone.podlahy=1;renderPodlahyAll();},
  etics:function(){if(calcInitDone.etics)return;calcInitDone.etics=1;renderEticsAll();},
  vytapeni:function(){if(calcInitDone.vytapeni)return;calcInitDone.vytapeni=1;if(typeof renderVytapeniMistnosti==='function')renderVytapeniMistnosti();},
  voda:function(){if(calcInitDone.voda)return;calcInitDone.voda=1;if(typeof renderVodaVyvody==='function')renderVodaVyvody();},
  klima:function(){if(calcInitDone.klima)return;calcInitDone.klima=1;if(typeof renderKlimaMistnosti==='function')renderKlimaMistnosti();},
  sdk:function(){if(calcInitDone.sdk)return;calcInitDone.sdk=1;if(typeof initSdk==='function')initSdk();},
  obklady:function(){if(calcInitDone.obklady)return;calcInitDone.obklady=1;if(typeof initObklady==='function')initObklady();},
  omitky:function(){if(calcInitDone.omitky)return;calcInitDone.omitky=1;if(typeof initOmitky==='function')initOmitky();},
  demolice:function(){if(calcInitDone.demolice)return;calcInitDone.demolice=1;},
};

// === ZÁKLADY DATABÁZE ===
const zakladyBetony = {
  'C12/15': { nazev: 'C12/15 (B15)', popis: 'Podkladní beton', cenaM3: 2450, pevnost: 15 },
  'C16/20': { nazev: 'C16/20 (B20)', popis: 'Pasy - standard', cenaM3: 2650, pevnost: 20 },
  'C20/25': { nazev: 'C20/25 (B25)', popis: 'Deska, náročnější', cenaM3: 2850, pevnost: 25 },
  'C25/30': { nazev: 'C25/30 (B30)', popis: 'Vícepodlažní', cenaM3: 3100, pevnost: 30 },
};

const zakladyKonzistence = {
  S2: { nazev: 'S2 - Zavlhlý', priplatek: 0 },
  S3: { nazev: 'S3 - Plastický', priplatek: 50 },
  S4: { nazev: 'S4 - Měkký', priplatek: 100 },
};

const zakladyZB = {
  ZB20: { nazev: 'ZB 20 (200×500×250)', sirka: 200, vyska: 250, ksM2: 8, cenaKs: 32, betonM3naM2: 0.05 },
  ZB25: { nazev: 'ZB 25 (250×500×250)', sirka: 250, vyska: 250, ksM2: 8, cenaKs: 38, betonM3naM2: 0.0625 },
  ZB30: { nazev: 'ZB 30 (300×500×250)', sirka: 300, vyska: 250, ksM2: 8, cenaKs: 45, betonM3naM2: 0.075 },
  ZB40: { nazev: 'ZB 40 (400×500×250)', sirka: 400, vyska: 250, ksM2: 8, cenaKs: 55, betonM3naM2: 0.1 },
  ZB50: { nazev: 'ZB 50 (500×500×250)', sirka: 500, vyska: 250, ksM2: 8, cenaKs: 68, betonM3naM2: 0.125 },
};

const zakladyKariSite = {
  '100x100x5': { nazev: 'KARI 100×100 d5', plocha: 6, cenaKs: 195 },
  '100x100x6': { nazev: 'KARI 100×100 d6', plocha: 6, cenaKs: 285 },
  '150x150x6': { nazev: 'KARI 150×150 d6', plocha: 6, cenaKs: 195 },
  '100x100x8': { nazev: 'KARI 100×100 d8', plocha: 6, cenaKs: 485 },
  '150x150x8': { nazev: 'KARI 150×150 d8', plocha: 6, cenaKs: 325 },
};

const zakladyRoxory = {
  R8: { nazev: 'Roxor d8 mm', cenaBm: 18 },
  R10: { nazev: 'Roxor d10 mm', cenaBm: 28 },
  R12: { nazev: 'Roxor d12 mm', cenaBm: 42 },
};

const zakladyPodsyp = {
  '0-63': { nazev: 'Štěrkodrť 0-63 mm', cenaM3: 650 },
  '0-32': { nazev: 'Štěrkopísek 0-32 mm', cenaM3: 550 },
  '16-32': { nazev: 'Štěrk 16-32 mm', cenaM3: 700 },
};

const zakladyHydroizolace = {
  'GLASTEK40': { nazev: 'GLASTEK 40 SPECIAL MINERAL', popis: 'SBS modifikovaný, skl. tkanina', cenaM2: 145, roleM2: 7.5 },
  'ELASTEK40': { nazev: 'ELASTEK 40 SPECIAL MINERAL', popis: 'SBS modifikovaný, polyester', cenaM2: 175, roleM2: 7.5 },
  'GLASTEKALU': { nazev: 'GLASTEK AL 40 MINERAL', popis: 'S hliníkovou fólií - radon', cenaM2: 195, roleM2: 7.5 },
  'DEKBIT': { nazev: 'DEKBIT V60 S35', popis: 'Oxidovaný, základní', cenaM2: 85, roleM2: 10 },
};

const zakladyProstupy = {
  kanalizace: { nazev: 'Chránička DN160 (kanalizace)', cenaKs: 185 },
  voda: { nazev: 'Chránička DN50 (voda)', cenaKs: 85 },
  elektro: { nazev: 'Chránička DN63 (elektro)', cenaKs: 95 },
  plyn: { nazev: 'Chránička DN40 (plyn)', cenaKs: 75 },
};

const zakladyCerpadlo = {
  male: { nazev: 'Pístové čerpadlo', cenaHod: 2000, minHod: 3 },
  velke: { nazev: 'Ramenová pumpa', cenaHod: 3500, minHod: 2 },
};

const zakladyPrislusenstvi = {
  distancnik: { nazev: 'Distančník pod KARI', cenaKs: 2.5, ksNaM2: 4 },
  distancnikZB: { nazev: 'Distančník do ZB', cenaKs: 3, ksNaM2: 6 },
  drat: { nazev: 'Vázací drát 1.4mm', cenaKg: 65, kgNa100m2: 2 },
  folie: { nazev: 'PE fólie 0.2mm', cenaM2: 8 },
  bedneni: { nazev: 'Bednění okrajů', cenaM2: 85 },
  vibrator: { nazev: 'Vibrátor ponorný', cenaDen: 450 },
  lista: { nazev: 'Vibrační lišta', cenaDen: 650 },
  penetrace: { nazev: 'DEKPRIMER', cenaL: 75, vydatnost: 0.3 },
  zemnPasek: { nazev: 'Zemnicí pásek FeZn 30×4', cenaBm: 85 },
  zemnSvorka: { nazev: 'Svorka SR 3b', cenaKs: 45 },
  zemnPripoj: { nazev: 'Připojovací svorka', cenaKs: 125 },
};

function renderZakladyAll() {
  // Betony pasy
  document.getElementById('zakladyBetonPasy').innerHTML = Object.entries(zakladyBetony).map(([k,v]) => '<option value="' + k + '" ' + (k === 'C16/20' ? 'selected' : '') + '>' + v.nazev + '</option>').join('');
  document.getElementById('zakladyBetonZB').innerHTML = Object.entries(zakladyBetony).map(([k,v]) => '<option value="' + k + '" ' + (k === 'C20/25' ? 'selected' : '') + '>' + v.nazev + '</option>').join('');
  document.getElementById('zakladyBetonDeska').innerHTML = Object.entries(zakladyBetony).map(([k,v]) => '<option value="' + k + '" ' + (k === 'C20/25' ? 'selected' : '') + '>' + v.nazev + '</option>').join('');
  
  // Konzistence
  document.getElementById('zakladyKonzPasy').innerHTML = Object.entries(zakladyKonzistence).map(([k,v]) => '<option value="' + k + '" ' + (k === 'S3' ? 'selected' : '') + '>' + v.nazev + '</option>').join('');
  document.getElementById('zakladyKonzDeska').innerHTML = Object.entries(zakladyKonzistence).map(([k,v]) => '<option value="' + k + '" ' + (k === 'S3' ? 'selected' : '') + '>' + v.nazev + '</option>').join('');
  
  // ZB
  document.getElementById('zakladyTypZB').innerHTML = Object.entries(zakladyZB).map(([k,v]) => '<option value="' + k + '" ' + (k === 'ZB40' ? 'selected' : '') + '>' + v.nazev + '</option>').join('');
  document.getElementById('zakladyRoxorZB').innerHTML = Object.entries(zakladyRoxory).map(([k,v]) => '<option value="' + k + '" ' + (k === 'R10' ? 'selected' : '') + '>' + v.nazev + '</option>').join('');
  
  // KARI
  document.getElementById('zakladyTypKari').innerHTML = Object.entries(zakladyKariSite).map(([k,v]) => '<option value="' + k + '" ' + (k === '150x150x6' ? 'selected' : '') + '>' + v.nazev + ' (' + v.cenaKs + ' Kč)</option>').join('');
  
  // Podsyp
  document.getElementById('zakladyTypPodsypu').innerHTML = Object.entries(zakladyPodsyp).map(([k,v]) => '<option value="' + k + '" ' + (k === '0-63' ? 'selected' : '') + '>' + v.nazev + '</option>').join('');
  
  // Hydro
  document.getElementById('zakladyTypHydro').innerHTML = Object.entries(zakladyHydroizolace).map(([k,v]) => '<option value="' + k + '" ' + (k === 'GLASTEK40' ? 'selected' : '') + '>' + v.nazev + '</option>').join('');
  
  vypoctiZaklady();
}

function toggleZakladyZB() {
  document.getElementById('zakladyZBContent').style.display = document.getElementById('zakladyPouzitZB').checked ? 'block' : 'none';
  vypoctiZaklady();
}

function toggleZakladyPodklad() {
  document.getElementById('zakladyPodkladContent').style.display = document.getElementById('zakladyPodkladniBeton').checked ? 'block' : 'none';
  vypoctiZaklady();
}

function toggleZakladyCerpadlo() {
  document.getElementById('zakladyCerpadloContent').style.display = document.getElementById('zakladyTypCerpadla').value !== 'zadne' ? 'block' : 'none';
  vypoctiZaklady();
}

function toggleZakladyVibrator() {
  document.getElementById('zakladyVibratorContent').style.display = document.getElementById('zakladyPronajemVibr').checked ? 'block' : 'none';
  vypoctiZaklady();
}

function vypoctiZaklady() {
  const delkaPasu = parseFloat(document.getElementById('zakladyDelkaPasu').value) || 0;
  const sirkaPasu = parseFloat(document.getElementById('zakladySirkaPasu').value) || 0;
  const hloubkaPasu = parseFloat(document.getElementById('zakladyHloubkaPasu').value) || 0;
  const betonPasy = document.getElementById('zakladyBetonPasy').value;
  const konzPasy = document.getElementById('zakladyKonzPasy').value;
  
  const pouzitZB = document.getElementById('zakladyPouzitZB').checked;
  const typZB = document.getElementById('zakladyTypZB').value;
  const radyZB = parseInt(document.getElementById('zakladyRadyZB').value) || 0;
  const roxorZB = document.getElementById('zakladyRoxorZB').value;
  const betonZB = document.getElementById('zakladyBetonZB').value;
  
  const plochaDesky = parseFloat(document.getElementById('zakladyPlochaDesky').value) || 0;
  const tloustkaDesky = parseFloat(document.getElementById('zakladyTloustkaDesky').value) || 0;
  const betonDeska = document.getElementById('zakladyBetonDeska').value;
  const konzDeska = document.getElementById('zakladyKonzDeska').value;
  const typKari = document.getElementById('zakladyTypKari').value;
  const dvojiteKari = document.getElementById('zakladyDvojiteKari').checked;
  
  const typPodsypu = document.getElementById('zakladyTypPodsypu').value;
  const tloustkaPodsypu = parseFloat(document.getElementById('zakladyTloustkaPodsypu').value) || 0;
  const podkladniBeton = document.getElementById('zakladyPodkladniBeton').checked;
  const tloustkaPodklad = parseFloat(document.getElementById('zakladyTloustkaPodklad').value) || 0;
  
  const typHydro = document.getElementById('zakladyTypHydro').value;
  const dvouvrstva = document.getElementById('zakladyDvouvrstva').checked;
  
  const delkaZemneni = parseFloat(document.getElementById('zakladyDelkaZemneni').value) || 0;
  const pocetSvorek = parseInt(document.getElementById('zakladyPocetSvorek').value) || 0;
  
  const prostupyKanal = parseInt(document.getElementById('zakladyProstupyKanal').value) || 0;
  const prostupyVoda = parseInt(document.getElementById('zakladyProstupyVoda').value) || 0;
  const prostupyElektro = parseInt(document.getElementById('zakladyProstupyElektro').value) || 0;
  const prostupyPlyn = parseInt(document.getElementById('zakladyProstupyPlyn').value) || 0;
  
  const typCerpadla = document.getElementById('zakladyTypCerpadla').value;
  const hodinyPumpy = parseInt(document.getElementById('zakladyHodinyPumpy').value) || 0;
  const pronajemVibr = document.getElementById('zakladyPronajemVibr').checked;
  const dnyPrace = parseInt(document.getElementById('zakladyDnyPrace').value) || 0;
  
  const polozky = [];
  let cenaBeton = 0, cenaVyztuz = 0, cenaHydro = 0, cenaDoplnky = 0;
  
  // PASY
  const objemPasu = delkaPasu * sirkaPasu * hloubkaPasu;
  const betonPasyData = zakladyBetony[betonPasy];
  const konzPasyData = zakladyKonzistence[konzPasy];
  const cenaPasuM3 = betonPasyData.cenaM3 + konzPasyData.priplatek;
  const cenaPasu = objemPasu * cenaPasuM3;
  cenaBeton += cenaPasu;
  if (objemPasu > 0) polozky.push({ kat: 'beton', nazev: betonPasyData.nazev + ' ' + konzPasyData.nazev + ' - pasy', m3: Math.ceil(objemPasu * 10) / 10, cenaJed: cenaPasuM3, cena: cenaPasu });
  
  document.getElementById('zakladyPasyInfo').innerHTML = 'Objem: ' + objemPasu.toFixed(1) + ' m³';
  
  // ZTRACENE BEDNENI
  let plochaZBm2 = 0, objemBetonuZB = 0;
  if (pouzitZB && radyZB > 0) {
    const zbData = zakladyZB[typZB];
    const vyskaZB = radyZB * (zbData.vyska / 1000);
    plochaZBm2 = delkaPasu * vyskaZB;
    const pocetKsZB = Math.ceil(plochaZBm2 * zbData.ksM2);
    const cenaZB = pocetKsZB * zbData.cenaKs;
    cenaDoplnky += cenaZB;
    polozky.push({ kat: 'material', nazev: zbData.nazev, ks: pocetKsZB, cenaJed: zbData.cenaKs, cena: cenaZB });
    
    // Beton do ZB
    objemBetonuZB = plochaZBm2 * zbData.betonM3naM2;
    const betonZBData = zakladyBetony[betonZB];
    const cenaBetonZB = objemBetonuZB * betonZBData.cenaM3;
    cenaBeton += cenaBetonZB;
    polozky.push({ kat: 'beton', nazev: betonZBData.nazev + ' - do ZB', m3: Math.ceil(objemBetonuZB * 10) / 10, cenaJed: betonZBData.cenaM3, cena: cenaBetonZB });
    
    // Roxory
    const roxorData = zakladyRoxory[roxorZB];
    const delkaVodorovna = delkaPasu * radyZB * 2;
    const delkaSvisla = Math.ceil(delkaPasu / 0.5) * (vyskaZB + 0.3);
    const delkaRoxoruCelkem = delkaVodorovna + delkaSvisla;
    const cenaRoxoru = delkaRoxoruCelkem * roxorData.cenaBm;
    cenaVyztuz += cenaRoxoru;
    polozky.push({ kat: 'vyztuz', nazev: roxorData.nazev + ' do ZB', bm: Math.ceil(delkaRoxoruCelkem), cenaJed: roxorData.cenaBm, cena: cenaRoxoru });
    
    // Distančníky ZB
    const distZB = Math.ceil(plochaZBm2 * zakladyPrislusenstvi.distancnikZB.ksNaM2);
    cenaDoplnky += distZB * zakladyPrislusenstvi.distancnikZB.cenaKs;
    polozky.push({ kat: 'material', nazev: zakladyPrislusenstvi.distancnikZB.nazev, ks: distZB, cenaJed: zakladyPrislusenstvi.distancnikZB.cenaKs, cena: distZB * zakladyPrislusenstvi.distancnikZB.cenaKs });
    
    document.getElementById('zakladyZBInfo').innerHTML = 'Výška: ' + (radyZB * 25) + ' cm | Plocha: ' + plochaZBm2.toFixed(1) + ' m²';
  }
  
  // PODSYP
  const plochaVnitrni = Math.max(0, plochaDesky - (delkaPasu * sirkaPasu));
  const objemPodsypu = plochaVnitrni * tloustkaPodsypu;
  const podsypData = zakladyPodsyp[typPodsypu];
  const cenaPodsypu = objemPodsypu * podsypData.cenaM3;
  cenaDoplnky += cenaPodsypu;
  if (objemPodsypu > 0) polozky.push({ kat: 'material', nazev: podsypData.nazev, m3: Math.ceil(objemPodsypu * 10) / 10, cenaJed: podsypData.cenaM3, cena: cenaPodsypu });
  
  // PODKLADNI BETON
  if (podkladniBeton && plochaVnitrni > 0) {
    const objemPodklad = plochaVnitrni * tloustkaPodklad;
    const cenaPodklad = objemPodklad * zakladyBetony['C12/15'].cenaM3;
    cenaBeton += cenaPodklad;
    polozky.push({ kat: 'beton', nazev: zakladyBetony['C12/15'].nazev + ' - podkladní', m3: Math.ceil(objemPodklad * 10) / 10, cenaJed: zakladyBetony['C12/15'].cenaM3, cena: cenaPodklad });
  }
  
  // DESKA
  const objemDesky = plochaDesky * tloustkaDesky;
  const betonDeskaData = zakladyBetony[betonDeska];
  const konzDeskaData = zakladyKonzistence[konzDeska];
  const cenaDeskyM3 = betonDeskaData.cenaM3 + konzDeskaData.priplatek;
  const cenaDesky = objemDesky * cenaDeskyM3;
  cenaBeton += cenaDesky;
  if (objemDesky > 0) polozky.push({ kat: 'beton', nazev: betonDeskaData.nazev + ' ' + konzDeskaData.nazev + ' - deska', m3: Math.ceil(objemDesky * 10) / 10, cenaJed: cenaDeskyM3, cena: cenaDesky });
  
  document.getElementById('zakladyDeskaInfo').innerHTML = 'Objem: ' + objemDesky.toFixed(1) + ' m³';
  
  // KARI
  const kariData = zakladyKariSite[typKari];
  const pocetVrstev = dvojiteKari ? 2 : 1;
  const pocetKari = Math.ceil((plochaDesky * 1.15 * pocetVrstev) / kariData.plocha);
  const cenaKari = pocetKari * kariData.cenaKs;
  cenaVyztuz += cenaKari;
  if (pocetKari > 0) polozky.push({ kat: 'vyztuz', nazev: kariData.nazev + (dvojiteKari ? ' (2 vrstvy)' : ''), ks: pocetKari, cenaJed: kariData.cenaKs, cena: cenaKari });
  
  // Distančníky KARI
  const distKari = Math.ceil(plochaDesky * zakladyPrislusenstvi.distancnik.ksNaM2 * pocetVrstev);
  cenaDoplnky += distKari * zakladyPrislusenstvi.distancnik.cenaKs;
  polozky.push({ kat: 'material', nazev: zakladyPrislusenstvi.distancnik.nazev, ks: distKari, cenaJed: zakladyPrislusenstvi.distancnik.cenaKs, cena: distKari * zakladyPrislusenstvi.distancnik.cenaKs });
  
  // Vázací drát
  const dratKg = Math.ceil(plochaDesky / 100 * zakladyPrislusenstvi.drat.kgNa100m2);
  cenaDoplnky += dratKg * zakladyPrislusenstvi.drat.cenaKg;
  polozky.push({ kat: 'material', nazev: zakladyPrislusenstvi.drat.nazev, kg: dratKg, cenaJed: zakladyPrislusenstvi.drat.cenaKg, cena: dratKg * zakladyPrislusenstvi.drat.cenaKg });
  
  // HYDROIZOLACE
  const hydroData = zakladyHydroizolace[typHydro];
  const pocetRoli = Math.ceil((plochaDesky * 1.2 * (dvouvrstva ? 2 : 1)) / hydroData.roleM2);
  const cenaHydroMat = pocetRoli * hydroData.roleM2 * hydroData.cenaM2;
  cenaHydro += cenaHydroMat;
  polozky.push({ kat: 'hydro', nazev: hydroData.nazev + (dvouvrstva ? ' (2 vrstvy)' : ''), role: pocetRoli, m2: pocetRoli * hydroData.roleM2, cenaM2: hydroData.cenaM2, cena: cenaHydroMat });
  
  document.getElementById('zakladyHydroInfo').innerHTML = hydroData.popis + '. Přesahy min. 100 mm.';
  
  // Penetrace
  const spotrebaPen = plochaDesky * 1.2 * zakladyPrislusenstvi.penetrace.vydatnost;
  const cenaPen = spotrebaPen * zakladyPrislusenstvi.penetrace.cenaL;
  cenaHydro += cenaPen;
  polozky.push({ kat: 'hydro', nazev: zakladyPrislusenstvi.penetrace.nazev, l: Math.ceil(spotrebaPen), cenaJed: zakladyPrislusenstvi.penetrace.cenaL, cena: cenaPen });
  
  // ZEMNENI
  const cenaZemnPasek = delkaZemneni * zakladyPrislusenstvi.zemnPasek.cenaBm;
  const cenaSvorek = pocetSvorek * zakladyPrislusenstvi.zemnSvorka.cenaKs;
  const cenaPripoj = 2 * zakladyPrislusenstvi.zemnPripoj.cenaKs;
  cenaDoplnky += cenaZemnPasek + cenaSvorek + cenaPripoj;
  if (delkaZemneni > 0) polozky.push({ kat: 'zemneni', nazev: zakladyPrislusenstvi.zemnPasek.nazev, bm: delkaZemneni, cenaJed: zakladyPrislusenstvi.zemnPasek.cenaBm, cena: cenaZemnPasek });
  if (pocetSvorek > 0) polozky.push({ kat: 'zemneni', nazev: zakladyPrislusenstvi.zemnSvorka.nazev, ks: pocetSvorek, cenaJed: zakladyPrislusenstvi.zemnSvorka.cenaKs, cena: cenaSvorek });
  polozky.push({ kat: 'zemneni', nazev: zakladyPrislusenstvi.zemnPripoj.nazev, ks: 2, cenaJed: zakladyPrislusenstvi.zemnPripoj.cenaKs, cena: cenaPripoj });
  
  // PROSTUPY
  if (prostupyKanal > 0) { const c = prostupyKanal * zakladyProstupy.kanalizace.cenaKs; cenaDoplnky += c; polozky.push({ kat: 'prostupy', nazev: zakladyProstupy.kanalizace.nazev, ks: prostupyKanal, cenaJed: zakladyProstupy.kanalizace.cenaKs, cena: c }); }
  if (prostupyVoda > 0) { const c = prostupyVoda * zakladyProstupy.voda.cenaKs; cenaDoplnky += c; polozky.push({ kat: 'prostupy', nazev: zakladyProstupy.voda.nazev, ks: prostupyVoda, cenaJed: zakladyProstupy.voda.cenaKs, cena: c }); }
  if (prostupyElektro > 0) { const c = prostupyElektro * zakladyProstupy.elektro.cenaKs; cenaDoplnky += c; polozky.push({ kat: 'prostupy', nazev: zakladyProstupy.elektro.nazev, ks: prostupyElektro, cenaJed: zakladyProstupy.elektro.cenaKs, cena: c }); }
  if (prostupyPlyn > 0) { const c = prostupyPlyn * zakladyProstupy.plyn.cenaKs; cenaDoplnky += c; polozky.push({ kat: 'prostupy', nazev: zakladyProstupy.plyn.nazev, ks: prostupyPlyn, cenaJed: zakladyProstupy.plyn.cenaKs, cena: c }); }
  
  // CERPADLO
  if (typCerpadla !== 'zadne') {
    const cerpData = zakladyCerpadlo[typCerpadla];
    const hod = Math.max(cerpData.minHod, hodinyPumpy);
    const cenaCerp = hod * cerpData.cenaHod;
    cenaDoplnky += cenaCerp;
    polozky.push({ kat: 'sluzby', nazev: cerpData.nazev, hod: hod, cenaJed: cerpData.cenaHod, cena: cenaCerp });
  }
  
  // VIBRATOR
  if (pronajemVibr && dnyPrace > 0) {
    const cenaVibr = dnyPrace * zakladyPrislusenstvi.vibrator.cenaDen;
    const cenaLista = dnyPrace * zakladyPrislusenstvi.lista.cenaDen;
    cenaDoplnky += cenaVibr + cenaLista;
    polozky.push({ kat: 'sluzby', nazev: zakladyPrislusenstvi.vibrator.nazev, dny: dnyPrace, cenaJed: zakladyPrislusenstvi.vibrator.cenaDen, cena: cenaVibr });
    polozky.push({ kat: 'sluzby', nazev: zakladyPrislusenstvi.lista.nazev, dny: dnyPrace, cenaJed: zakladyPrislusenstvi.lista.cenaDen, cena: cenaLista });
  }
  
  // PE FOLIE
  const cenaFolie = plochaDesky * 1.1 * zakladyPrislusenstvi.folie.cenaM2;
  cenaDoplnky += cenaFolie;
  polozky.push({ kat: 'material', nazev: zakladyPrislusenstvi.folie.nazev, m2: Math.ceil(plochaDesky * 1.1), cenaJed: zakladyPrislusenstvi.folie.cenaM2, cena: cenaFolie });
  
  // BEDNENI
  const obvodDesky = Math.sqrt(plochaDesky) * 4 * 1.2;
  const cenaBedneni = obvodDesky * tloustkaDesky * zakladyPrislusenstvi.bedneni.cenaM2;
  cenaDoplnky += cenaBedneni;
  polozky.push({ kat: 'material', nazev: zakladyPrislusenstvi.bedneni.nazev, m2: Math.ceil(obvodDesky * tloustkaDesky), cenaJed: zakladyPrislusenstvi.bedneni.cenaM2, cena: cenaBedneni });
  
  const celkem = cenaBeton + cenaVyztuz + cenaHydro + cenaDoplnky;
  const objemBetonuCelkem = objemPasu + objemBetonuZB + (podkladniBeton ? plochaVnitrni * tloustkaPodklad : 0) + objemDesky;
  
  // Update souhrnu
  document.getElementById('zakladySumBeton').textContent = formatCena(cenaBeton);
  document.getElementById('zakladySumVyztuz').textContent = formatCena(cenaVyztuz);
  document.getElementById('zakladySumHydro').textContent = formatCena(cenaHydro);
  document.getElementById('zakladySumCelkem').textContent = formatCena(celkem);
  
  // RENDER VÝSLEDKY
  let html = '<div class="result"><div class="card-title">Rozpis materiálu</div>';
  
  // Beton a materiál
  html += '<div style="font-size:10px;font-weight:600;color:#ea580c;text-transform:uppercase;margin:12px 0 6px;">Beton</div>';
  polozky.filter(p => p.kat === 'beton').forEach(p => {
    html += '<div class="result-item"><div class="result-item-info"><div class="result-item-name">' + p.nazev + '</div><div class="result-item-detail">' + (p.m3 || '-') + ' m³ × ' + p.cenaJed + ' Kč</div></div><div class="result-item-price">' + formatCena(p.cena) + '</div></div>';
  });
  
  html += '<div style="font-size:10px;font-weight:600;color:#3b82f6;text-transform:uppercase;margin:12px 0 6px;">Výztuž</div>';
  polozky.filter(p => p.kat === 'vyztuz').forEach(p => {
    html += '<div class="result-item"><div class="result-item-info"><div class="result-item-name">' + p.nazev + '</div><div class="result-item-detail">' + (p.bm ? p.bm + ' bm' : p.ks + ' ks') + '</div></div><div class="result-item-price">' + formatCena(p.cena) + '</div></div>';
  });
  
  html += '<div style="font-size:10px;font-weight:600;color:#a855f7;text-transform:uppercase;margin:12px 0 6px;">Hydroizolace</div>';
  polozky.filter(p => p.kat === 'hydro').forEach(p => {
    html += '<div class="result-item"><div class="result-item-info"><div class="result-item-name">' + p.nazev + '</div><div class="result-item-detail">' + (p.role ? p.role + ' rolí (' + p.m2 + ' m²)' : p.l + ' l') + '</div></div><div class="result-item-price">' + formatCena(p.cena) + '</div></div>';
  });
  
  html += '<div style="font-size:10px;font-weight:600;color:rgba(255,255,255,0.4);text-transform:uppercase;margin:12px 0 6px;">Materiál a služby</div>';
  polozky.filter(p => ['material', 'zemneni', 'prostupy', 'sluzby'].includes(p.kat)).forEach(p => {
    const mn = p.ks ? p.ks + ' ks' : p.bm ? p.bm + ' bm' : p.m2 ? p.m2 + ' m²' : p.m3 ? p.m3 + ' m³' : p.kg ? p.kg + ' kg' : p.hod ? p.hod + ' hod' : p.dny ? p.dny + ' dní' : '-';
    html += '<div class="result-item"><div class="result-item-info"><div class="result-item-name">' + p.nazev + '</div><div class="result-item-detail">' + mn + '</div></div><div class="result-item-price">' + formatCena(p.cena) + '</div></div>';
  });
  
  html += '<div class="result-total"><span class="result-total-label">CELKEM</span><span class="result-total-value">' + formatCena(celkem) + '</span></div>';
  
  html += '<div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px;margin-top:12px;text-align:center;">';
  html += '<div style="background:var(--bg);padding:8px;border-radius:8px;"><div style="font-size:10px;color:rgba(255,255,255,0.4);">Beton celkem</div><div style="font-size:14px;font-weight:600;color:#ea580c;">' + objemBetonuCelkem.toFixed(1) + ' m³</div></div>';
  html += '<div style="background:var(--bg);padding:8px;border-radius:8px;"><div style="font-size:10px;color:rgba(255,255,255,0.4);">Plocha desky</div><div style="font-size:14px;font-weight:600;color:#3b82f6;">' + plochaDesky + ' m²</div></div>';
  html += '<div style="background:var(--bg);padding:8px;border-radius:8px;"><div style="font-size:10px;color:rgba(255,255,255,0.4);">Cena/m² desky</div><div style="font-size:14px;font-weight:600;color:#a855f7;">' + Math.round(celkem / plochaDesky) + ' Kč</div></div>';
  html += '<div style="background:var(--bg);padding:8px;border-radius:8px;"><div style="font-size:10px;color:rgba(255,255,255,0.4);">Cena/m³ betonu</div><div style="font-size:14px;font-weight:600;color:#22c55e;">' + Math.round(celkem / objemBetonuCelkem) + ' Kč</div></div>';
  html += '</div>';
  
  html += '</div>';
  
  document.getElementById('zakladyResult').innerHTML = html;
}

// === ELEKTRO DATABÁZE ===
const elektroRozvadece = [
  { id: 'bp12', nazev: 'Bonega 12M', moduly: 12, cena: 450, rady: 1 },
  { id: 'bp24', nazev: 'Bonega 24M', moduly: 24, cena: 650, rady: 2 },
  { id: 'bp36', nazev: 'Bonega 36M', moduly: 36, cena: 850, rady: 3 },
  { id: 'bp48', nazev: 'Bonega 48M', moduly: 48, cena: 1050, rady: 4 },
  { id: 'bp54', nazev: 'Bonega 54M', moduly: 54, cena: 1250, rady: 4.5 },
  { id: 'bp72', nazev: 'Bonega 72M', moduly: 72, cena: 1650, rady: 6 },
  { id: 'bp96', nazev: 'Bonega 96M', moduly: 96, cena: 2200, rady: 8 },
];

const elektroPristroje = {
  jistice1f: [
    { id: 'j_b6', nazev: 'B6', proud: 6, char: 'B', moduly: 1, cena: 85 },
    { id: 'j_b10', nazev: 'B10', proud: 10, char: 'B', moduly: 1, cena: 85 },
    { id: 'j_b16', nazev: 'B16', proud: 16, char: 'B', moduly: 1, cena: 85 },
    { id: 'j_b20', nazev: 'B20', proud: 20, char: 'B', moduly: 1, cena: 89 },
    { id: 'j_c10', nazev: 'C10', proud: 10, char: 'C', moduly: 1, cena: 89 },
    { id: 'j_c16', nazev: 'C16', proud: 16, char: 'C', moduly: 1, cena: 89 },
    { id: 'j_c20', nazev: 'C20', proud: 20, char: 'C', moduly: 1, cena: 92 },
  ],
  jistice3f: [
    { id: 'j3_b16', nazev: 'B16/3', proud: 16, char: 'B', moduly: 3, cena: 285 },
    { id: 'j3_b20', nazev: 'B20/3', proud: 20, char: 'B', moduly: 3, cena: 295 },
    { id: 'j3_b25', nazev: 'B25/3', proud: 25, char: 'B', moduly: 3, cena: 305 },
    { id: 'j3_b32', nazev: 'B32/3', proud: 32, char: 'B', moduly: 3, cena: 320 },
    { id: 'j3_b40', nazev: 'B40/3', proud: 40, char: 'B', moduly: 3, cena: 380 },
    { id: 'j3_b50', nazev: 'B50/3', proud: 50, char: 'B', moduly: 3, cena: 450 },
    { id: 'j3_b63', nazev: 'B63/3', proud: 63, char: 'B', moduly: 3, cena: 520 },
    { id: 'j3_c20', nazev: 'C20/3', proud: 20, char: 'C', moduly: 3, cena: 310 },
    { id: 'j3_c25', nazev: 'C25/3', proud: 25, char: 'C', moduly: 3, cena: 325 },
    { id: 'j3_c32', nazev: 'C32/3', proud: 32, char: 'C', moduly: 3, cena: 350 },
  ],
  chranice2p: [
    { id: 'chr_25_30_ac', nazev: '25A/30mA AC', proud: 25, typ: 'AC', moduly: 2, cena: 450 },
    { id: 'chr_40_30_ac', nazev: '40A/30mA AC', proud: 40, typ: 'AC', moduly: 2, cena: 480 },
    { id: 'chr_25_30_a', nazev: '25A/30mA A', proud: 25, typ: 'A', moduly: 2, cena: 650 },
    { id: 'chr_40_30_a', nazev: '40A/30mA A', proud: 40, typ: 'A', moduly: 2, cena: 720 },
  ],
  chranice4p: [
    { id: 'chr4_40_30_a', nazev: '4P 40A/30mA A', proud: 40, typ: 'A', moduly: 4, cena: 1450 },
    { id: 'chr4_63_30_a', nazev: '4P 63A/30mA A', proud: 63, typ: 'A', moduly: 4, cena: 1650 },
  ],
  svodice: [
    { id: 'sv_t2_3n', nazev: 'T2 3P+N', moduly: 4, cena: 1250 },
    { id: 'sv_t1t2_3n', nazev: 'T1+T2 3P+N', moduly: 8, cena: 5500 },
  ],
  hrebenLista: { nazev: 'Hřebenová lišta 12M', cena: 185 }
};

const elektroKoncovePrvky = {
  abb: {
    nazev: 'ABB',
    serie: [
      { id: 'tango', nazev: 'Tango', popis: 'Základní', zasuvka: 95, zasuvkaDvojna: 165, vypinac: 125, vypinacSeriovy: 185, vypinacStridavy: 175, ramecek1: 35, datova: 185, tv: 145 },
      { id: 'levit', nazev: 'Levit', popis: 'Design', zasuvka: 185, zasuvkaDvojna: 320, vypinac: 245, vypinacSeriovy: 345, vypinacStridavy: 325, ramecek1: 125, datova: 285, tv: 225 },
    ],
  },
  schneider: {
    nazev: 'Schneider',
    serie: [
      { id: 'sedna', nazev: 'Sedna Design', popis: 'Základní', zasuvka: 85, zasuvkaDvojna: 145, vypinac: 115, vypinacSeriovy: 165, vypinacStridavy: 155, ramecek1: 45, datova: 165, tv: 125 },
      { id: 'unica', nazev: 'Unica', popis: 'Střední', zasuvka: 145, zasuvkaDvojna: 265, vypinac: 195, vypinacSeriovy: 285, vypinacStridavy: 265, ramecek1: 85, datova: 245, tv: 195 },
    ],
  },
  legrand: {
    nazev: 'Legrand',
    serie: [
      { id: 'niloe', nazev: 'Niloe', popis: 'Základní', zasuvka: 75, zasuvkaDvojna: 135, vypinac: 105, vypinacSeriovy: 155, vypinacStridavy: 145, ramecek1: 35, datova: 155, tv: 115 },
      { id: 'valena', nazev: 'Valena Life', popis: 'Design', zasuvka: 165, zasuvkaDvojna: 295, vypinac: 225, vypinacSeriovy: 325, vypinacStridavy: 305, ramecek1: 105, datova: 265, tv: 205 },
    ],
  },
  hager: {
    nazev: 'Hager',
    serie: [
      { id: 'lumina', nazev: 'Lumina', popis: 'Základní', zasuvka: 85, zasuvkaDvojna: 155, vypinac: 115, vypinacSeriovy: 175, vypinacStridavy: 165, ramecek1: 45, datova: 175, tv: 135 },
    ],
  },
};

const elektroTuya = { termostat: { nazev: 'Tuya Zigbee HY607W 16A', cena: 890 }, gateway: { nazev: 'Tuya Zigbee Gateway', cena: 650 } };

const elektroSpecialniSpotrebice = [
  { id: 'sporak', nazev: 'Sporák / Varná deska', vykon: 7000, jistic: 'C25/3', kabel: '5x4', chranic: 'A', delka: 12 },
  { id: 'trouba', nazev: 'Trouba', vykon: 3500, jistic: 'B16', kabel: '3x2.5', chranic: 'A', delka: 12 },
  { id: 'mycka', nazev: 'Myčka', vykon: 2200, jistic: 'B16', kabel: '3x2.5', chranic: 'A', delka: 14 },
  { id: 'pracka', nazev: 'Pračka', vykon: 2200, jistic: 'B16', kabel: '3x2.5', chranic: 'A', delka: 14 },
  { id: 'susicka', nazev: 'Sušička', vykon: 2500, jistic: 'B16', kabel: '3x2.5', chranic: 'A', delka: 14 },
  { id: 'bojler', nazev: 'Bojler', vykon: 2000, jistic: 'B16', kabel: '3x2.5', chranic: 'AC', delka: 10 },
  { id: 'tc', nazev: 'Tepelné čerpadlo', vykon: 5000, jistic: 'C20/3', kabel: '5x4', chranic: 'A', delka: 15 },
  { id: 'wallbox_11', nazev: 'Wallbox 11kW', vykon: 11000, jistic: 'C20/3', kabel: '5x4', chranic: 'A', delka: 20 },
  { id: 'wallbox_22', nazev: 'Wallbox 22kW', vykon: 22000, jistic: 'C32/3', kabel: '5x10', chranic: 'A', delka: 20 },
  { id: 'klimaVnej', nazev: 'Klima venk. jednotka', vykon: 2500, jistic: 'C16', kabel: '3x2.5', chranic: 'A', delka: 15 },
  { id: 'sauna', nazev: 'Sauna', vykon: 6000, jistic: 'C25/3', kabel: '5x4', chranic: 'A', delka: 18 },
  { id: 'digestor', nazev: 'Digestoř', vykon: 300, jistic: 'B10', kabel: '3x1.5', chranic: 'AC', delka: 8 },
  { id: 'rekuperace', nazev: 'Rekuperace', vykon: 200, jistic: 'B10', kabel: '3x1.5', chranic: 'AC', delka: 15 },
  { id: 'podlahaEl', nazev: 'Podlah. topení el.', vykon: 2000, jistic: 'B16', kabel: '3x2.5', chranic: 'A', delka: 15 },
  { id: 'zaluzieCentr', nazev: 'Žaluzie central.', vykon: 500, jistic: 'B10', kabel: '3x1.5', chranic: 'AC', delka: 25 },
];

const elektroKabely = {
  '3x1.5': { nazev: 'CYKY-J 3×1,5', prouzek: 'modrý', cenaM: 28 },
  '3x2.5': { nazev: 'CYKY-J 3×2,5', prouzek: 'zelený', cenaM: 42 },
  '5x1.5': { nazev: 'CYKY-J 5×1,5', prouzek: 'fialový', cenaM: 52 },
  '5x2.5': { nazev: 'CYKY-J 5×2,5', prouzek: 'žlutý', cenaM: 75 },
  '5x4': { nazev: 'CYKY-J 5×4', cenaM: 115 },
  '5x6': { nazev: 'CYKY-J 5×6', cenaM: 165 },
  '5x10': { nazev: 'CYKY-J 5×10', cenaM: 265 },
  'data': { nazev: 'UTP Cat6', cenaM: 18 },
  'koax': { nazev: 'Koaxiál', cenaM: 15 },
};

const elektroInstalacniMaterial = {
  krabiceKU68: { nazev: 'KU 68', cena: 12 },
  krabiceKP67: { nazev: 'KP 67/2', cena: 22 },
  trubka20: { nazev: 'Trubka 1220', cenaM: 10 },
  prichytka: { nazev: 'Příchytka', cena: 1.5 },
  wago: { nazev: 'WAGO 221-413', cena: 14 },
};

const elektroTypyMistnosti = [
  { id: 'obyvak', nazev: 'Obývací pokoj', zasuvky: 8, zasuvkyDv: 2, vypinace: 2, stridave: 1, seriove: 1, svetla: 3, klima: 0, termostat: 0, tv: 1, lan: 2, vlhka: false, delka: 25 },
  { id: 'kuchyn', nazev: 'Kuchyň', zasuvky: 6, zasuvkyDv: 2, vypinace: 1, stridave: 0, seriove: 1, svetla: 2, klima: 0, termostat: 0, tv: 1, lan: 0, vlhka: false, delka: 15 },
  { id: 'loznice', nazev: 'Ložnice', zasuvky: 4, zasuvkyDv: 2, vypinace: 1, stridave: 1, seriove: 0, svetla: 2, klima: 1, termostat: 1, tv: 1, lan: 1, vlhka: false, delka: 20 },
  { id: 'detsky', nazev: 'Dětský pokoj', zasuvky: 4, zasuvkyDv: 1, vypinace: 1, stridave: 1, seriove: 0, svetla: 2, klima: 0, termostat: 1, tv: 0, lan: 1, vlhka: false, delka: 18 },
  { id: 'pracovna', nazev: 'Pracovna', zasuvky: 6, zasuvkyDv: 2, vypinace: 1, stridave: 0, seriove: 0, svetla: 2, klima: 0, termostat: 0, tv: 0, lan: 2, vlhka: false, delka: 18 },
  { id: 'koupelna', nazev: 'Koupelna', zasuvky: 2, zasuvkyDv: 0, vypinace: 1, stridave: 0, seriove: 1, svetla: 3, klima: 0, termostat: 1, tv: 0, lan: 0, vlhka: true, delka: 15 },
  { id: 'wc', nazev: 'WC', zasuvky: 1, zasuvkyDv: 0, vypinace: 1, stridave: 0, seriove: 0, svetla: 1, klima: 0, termostat: 0, tv: 0, lan: 0, vlhka: true, delka: 8 },
  { id: 'chodba', nazev: 'Chodba', zasuvky: 2, zasuvkyDv: 0, vypinace: 0, stridave: 2, seriove: 0, svetla: 3, klima: 0, termostat: 1, tv: 0, lan: 0, vlhka: false, delka: 25 },
  { id: 'technicka', nazev: 'Technická', zasuvky: 4, zasuvkyDv: 0, vypinace: 1, stridave: 0, seriove: 0, svetla: 1, klima: 0, termostat: 0, tv: 0, lan: 1, vlhka: false, delka: 10 },
  { id: 'garaz', nazev: 'Garáž', zasuvky: 4, zasuvkyDv: 0, vypinace: 2, stridave: 0, seriove: 0, svetla: 2, klima: 0, termostat: 0, tv: 0, lan: 0, vlhka: false, delka: 20 },
  { id: 'venkovni', nazev: 'Venkovní', zasuvky: 2, zasuvkyDv: 0, vypinace: 2, stridave: 0, seriove: 0, svetla: 4, klima: 0, termostat: 0, tv: 0, lan: 0, vlhka: true, delka: 35 },
];

let elektroMistnosti = [];
let elektroSpecialni = [
  { id: 'sporak', aktivni: true, delka: 12 },
  { id: 'trouba', aktivni: true, delka: 12 },
  { id: 'mycka', aktivni: true, delka: 14 },
  { id: 'pracka', aktivni: true, delka: 14 },
  { id: 'susicka', aktivni: true, delka: 14 },
  { id: 'bojler', aktivni: true, delka: 10 },
  { id: 'digestor', aktivni: true, delka: 8 },
  { id: 'tc', aktivni: false, delka: 15 },
  { id: 'wallbox_11', aktivni: false, delka: 20 },
  { id: 'klimaVnej', aktivni: false, delka: 15 },
  { id: 'rekuperace', aktivni: false, delka: 15 },
  { id: 'podlahaEl', aktivni: false, delka: 15 },
  { id: 'zaluzieCentr', aktivni: false, delka: 25 },
];

function elektroGenerateId() { return Math.random().toString(36).substr(2, 9); }

function renderElektroAll() {
  // Výchozí místnosti
  elektroMistnosti = [
    { id: elektroGenerateId(), ...elektroTypyMistnosti.find(t => t.id === 'obyvak') },
    { id: elektroGenerateId(), ...elektroTypyMistnosti.find(t => t.id === 'kuchyn') },
    { id: elektroGenerateId(), ...elektroTypyMistnosti.find(t => t.id === 'loznice') },
    { id: elektroGenerateId(), ...elektroTypyMistnosti.find(t => t.id === 'koupelna') },
    { id: elektroGenerateId(), ...elektroTypyMistnosti.find(t => t.id === 'chodba') },
    { id: elektroGenerateId(), ...elektroTypyMistnosti.find(t => t.id === 'technicka') },
  ];
  renderElektroTypyMistnosti();
  renderElektroMistnosti();
  renderElektroSpecialni();
  elektroZmenVyrobce();
}

function renderElektroTypyMistnosti() {
  document.getElementById('elektroTypyMistnosti').innerHTML = elektroTypyMistnosti.map(t => '<button onclick="elektroPridatMistnost(\'' + t.id + '\')" style="padding:6px 10px;font-size:11px;background:rgba(255,255,255,0.08);border:none;border-radius:6px;cursor:pointer;">+ ' + t.nazev + '</button>').join('');
}

function elektroPridatMistnost(typId) {
  const typ = elektroTypyMistnosti.find(t => t.id === typId);
  if (typ) {
    elektroMistnosti.push({ id: elektroGenerateId(), ...typ });
    renderElektroMistnosti();
    vypoctiElektro();
  }
}

function elektroOdebratMistnost(id) {
  elektroMistnosti = elektroMistnosti.filter(m => m.id !== id);
  renderElektroMistnosti();
  vypoctiElektro();
}

function elektroUpdateMistnost(id, field, value) {
  const m = elektroMistnosti.find(x => x.id === id);
  if (m) { m[field] = parseInt(value) || 0; vypoctiElektro(); }
}

function elektroUpdateMistnostNazev(id, nazev) {
  const m = elektroMistnosti.find(x => x.id === id);
  if (m) m.nazev = nazev;
}

function renderElektroMistnosti() {
  document.getElementById('elektroMistnostiList').innerHTML = elektroMistnosti.map(m => {
    const inp = (label, field, max) => '<div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:10px;color:rgba(255,255,255,0.35);">' + label + '</span><input type="number" min="0" max="' + (max||20) + '" value="' + m[field] + '" onchange="elektroUpdateMistnost(\'' + m.id + '\',\'' + field + '\',this.value)" style="width:36px;padding:2px;font-size:11px;text-align:center;border:1px solid rgba(255,255,255,0.08);border-radius:4px;"></div>';
    return '<div class="card" style="border-left:4px solid ' + (m.vlhka ? '#3b82f6' : '#eab308') + ';"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;"><input type="text" value="' + m.nazev + '" onchange="elektroUpdateMistnostNazev(\'' + m.id + '\',this.value)" style="font-weight:500;font-size:13px;border:none;background:transparent;width:120px;"><button onclick="elektroOdebratMistnost(\'' + m.id + '\')" style="font-size:18px;color:rgba(255,255,255,0.4);background:none;border:none;cursor:pointer;">×</button></div><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;font-size:10px;">' + inp('Zásuvky', 'zasuvky') + inp('Dvojité', 'zasuvkyDv', 10) + inp('Světla', 'svetla') + inp('Vypínače', 'vypinace', 10) + inp('Střídavé', 'stridave', 10) + inp('Sériové', 'seriove', 10) + inp('Klima', 'klima', 3) + inp('Termostat', 'termostat', 3) + inp('TV', 'tv', 5) + inp('LAN', 'lan', 10) + '<div style="grid-column:span 2;display:flex;justify-content:space-between;align-items:center;"><span style="font-size:10px;color:rgba(255,255,255,0.35);">Délka kabelu</span><div style="display:flex;align-items:center;gap:4px;"><input type="number" min="5" max="100" value="' + m.delka + '" onchange="elektroUpdateMistnost(\'' + m.id + '\',\'delka\',this.value)" style="width:40px;padding:2px;font-size:11px;text-align:center;border:1px solid rgba(255,255,255,0.08);border-radius:4px;"><span style="font-size:10px;color:rgba(255,255,255,0.4);">m</span></div></div></div></div>';
  }).join('');
}

function renderElektroSpecialni() {
  document.getElementById('elektroSpecialniList').innerHTML = elektroSpecialni.map(s => {
    const sp = elektroSpecialniSpotrebice.find(x => x.id === s.id);
    if (!sp) return '';
    return '<div onclick="elektroToggleSpecialni(\'' + s.id + '\')" style="padding:8px;border-radius:8px;cursor:pointer;border:1px solid ' + (s.aktivni ? 'rgba(234,179,8,0.5)' : 'rgba(255,255,255,0.08)') + ';background:' + (s.aktivni ? 'rgba(234,179,8,0.1)' : 'rgba(255,255,255,0.04)') + ';"><div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:11px;color:' + (s.aktivni ? '#ca8a04' : 'rgba(255,255,255,0.4)') + ';">' + sp.nazev + '</span><span style="width:12px;height:12px;border-radius:3px;border:1px solid ' + (s.aktivni ? '#eab308' : 'rgba(255,255,255,0.12)') + ';background:' + (s.aktivni ? '#eab308' : 'transparent') + ';"></span></div><div style="font-size:10px;color:rgba(255,255,255,0.4);margin-top:2px;">' + (sp.vykon/1000).toFixed(1) + 'kW ' + sp.jistic + '</div></div>';
  }).join('');
}

function elektroToggleSpecialni(id) {
  const s = elektroSpecialni.find(x => x.id === id);
  if (s) { s.aktivni = !s.aktivni; renderElektroSpecialni(); vypoctiElektro(); }
}

function elektroZmenVyrobce() {
  const vyrobce = document.getElementById('elektroVyrobce').value;
  const v = elektroKoncovePrvky[vyrobce];
  if (v) {
    document.getElementById('elektroSerie').innerHTML = v.serie.map(s => '<option value="' + s.id + '">' + s.nazev + ' - ' + s.popis + '</option>').join('');
    vypoctiElektro();
  }
}

function vypoctiElektro() {
  if (elektroMistnosti.length === 0) { document.getElementById('elektroResult').innerHTML = ''; return; }
  
  const hlavniJistic = parseInt(document.getElementById('elektroHlavniJistic').value);
  const svodicTyp = document.getElementById('elektroSvodic').value;
  const vyrobce = document.getElementById('elektroVyrobce').value;
  const serieId = document.getElementById('elektroSerie').value;
  const gateway = document.getElementById('elektroGateway').checked;
  const rezerva = parseInt(document.getElementById('elektroRezerva').value) || 10;
  
  const polozky = [];
  let celkemModulu = 0;
  let celkemVykon = 0;
  
  // Součty
  let sumZasuvek = 0, sumZasuvkyDv = 0, sumVypinacu = 0, sumStridave = 0, sumSeriove = 0;
  let sumSvetel = 0, sumKlima = 0, sumTermostat = 0, sumTv = 0, sumLan = 0, sumDelka = 0;
  let vlhke = [];
  
  elektroMistnosti.forEach(m => {
    sumZasuvek += m.zasuvky; sumZasuvkyDv += m.zasuvkyDv; sumVypinacu += m.vypinace;
    sumStridave += m.stridave; sumSeriove += m.seriove; sumSvetel += m.svetla;
    sumKlima += m.klima; sumTermostat += m.termostat; sumTv += m.tv; sumLan += m.lan; sumDelka += m.delka;
    if (m.vlhka) vlhke.push(m);
  });
  
  const celkemZasuvekBody = sumZasuvek + sumZasuvkyDv * 2;
  const celkemVypinacuBody = sumVypinacu + sumStridave + sumSeriove;
  const aktivniSpec = elektroSpecialni.filter(s => s.aktivni).map(s => ({...s, ...elektroSpecialniSpotrebice.find(sp => sp.id === s.id)})).filter(s => s.nazev);
  
  // === ROZVADĚČ ===
  const hjist = elektroPristroje.jistice3f.find(j => j.proud === hlavniJistic && j.char === 'B');
  if (hjist) { polozky.push({ kat: 'Rozvaděč', nazev: 'Hlavní jistič ' + hjist.nazev, ks: 1, cena: hjist.cena, mod: hjist.moduly }); celkemModulu += hjist.moduly; }
  
  const hchr = elektroPristroje.chranice4p.find(c => c.proud >= hlavniJistic);
  if (hchr) { polozky.push({ kat: 'Rozvaděč', nazev: 'Proudový chránič ' + hchr.nazev, ks: 1, cena: hchr.cena, mod: hchr.moduly }); celkemModulu += hchr.moduly; }
  
  if (svodicTyp !== 'zadny') {
    const svod = elektroPristroje.svodice.find(s => s.id === 'sv_' + svodicTyp);
    if (svod) { polozky.push({ kat: 'Rozvaděč', nazev: 'Svodič ' + svod.nazev, ks: 1, cena: svod.cena, mod: svod.moduly }); celkemModulu += svod.moduly; }
  }
  
  // Světelné okruhy
  const svetleOkrBezne = Math.ceil((sumSvetel - vlhke.reduce((s,m) => s + m.svetla, 0)) / 10);
  const svetleOkrVlhke = vlhke.length > 0 ? Math.ceil(vlhke.reduce((s,m) => s + m.svetla, 0) / 6) : 0;
  const svetleOkrCelkem = svetleOkrBezne + svetleOkrVlhke;
  if (svetleOkrCelkem > 0) {
    const j = elektroPristroje.jistice1f.find(j => j.proud === 10 && j.char === 'B');
    polozky.push({ kat: 'Rozvaděč', nazev: 'Jistič B10 - světla', ks: svetleOkrCelkem, cena: svetleOkrCelkem * j.cena, mod: svetleOkrCelkem, info: sumSvetel + ' bodů' });
    celkemModulu += svetleOkrCelkem;
  }
  
  // Zásuvkové okruhy
  const zasOkrBezne = Math.ceil((celkemZasuvekBody - vlhke.reduce((s,m) => s + m.zasuvky + m.zasuvkyDv*2, 0)) / 8);
  const zasOkrVlhke = vlhke.length;
  const zasOkrCelkem = zasOkrBezne + zasOkrVlhke;
  if (zasOkrCelkem > 0) {
    const j = elektroPristroje.jistice1f.find(j => j.proud === 16 && j.char === 'B');
    polozky.push({ kat: 'Rozvaděč', nazev: 'Jistič B16 - zásuvky', ks: zasOkrCelkem, cena: zasOkrCelkem * j.cena, mod: zasOkrCelkem, info: celkemZasuvekBody + ' zás.' });
    celkemModulu += zasOkrCelkem; celkemVykon += zasOkrCelkem * 3680;
  }
  
  // Chrániče vlhké
  if (zasOkrVlhke > 0) {
    const chr = elektroPristroje.chranice2p.find(c => c.typ === 'A' && c.proud >= 25);
    const ks = Math.ceil(zasOkrVlhke / 2);
    polozky.push({ kat: 'Rozvaděč', nazev: 'Chránič ' + chr.nazev + ' - vlhké', ks, cena: ks * chr.cena, mod: ks * 2 });
    celkemModulu += ks * 2;
  }
  
  // Speciální spotřebiče
  aktivniSpec.forEach(sp => {
    const is3f = sp.jistic.includes('/3');
    const char = sp.jistic[0];
    const proud = parseInt(sp.jistic.slice(1));
    const jlist = is3f ? elektroPristroje.jistice3f : elektroPristroje.jistice1f;
    const j = jlist.find(j => j.char === char && j.proud === proud);
    if (j) { polozky.push({ kat: 'Rozvaděč', nazev: 'Jistič ' + j.nazev + ' - ' + sp.nazev, ks: 1, cena: j.cena, mod: j.moduly }); celkemModulu += j.moduly; celkemVykon += sp.vykon; }
  });
  
  // Chrániče spec A
  const specA = aktivniSpec.filter(s => s.chranic === 'A').length;
  if (specA > 0) {
    const chr = elektroPristroje.chranice2p.find(c => c.typ === 'A' && c.proud >= 40);
    const ks = Math.ceil(specA / 3);
    polozky.push({ kat: 'Rozvaděč', nazev: 'Chránič ' + chr.nazev + ' - spotřebiče', ks, cena: ks * chr.cena, mod: ks * 2 });
    celkemModulu += ks * 2;
  }
  
  // Rozvaděč
  const modRezerva = Math.ceil(celkemModulu * 0.15);
  const rozvadec = elektroRozvadece.find(r => r.moduly >= celkemModulu + modRezerva) || elektroRozvadece[elektroRozvadece.length - 1];
  polozky.unshift({ kat: 'Rozvaděč', nazev: 'Skříň ' + rozvadec.nazev, ks: 1, cena: rozvadec.cena, mod: 0, info: rozvadec.moduly + ' mod' });
  polozky.push({ kat: 'Rozvaděč', nazev: 'Hřebenové lišty', ks: Math.ceil(rozvadec.rady), cena: Math.ceil(rozvadec.rady) * elektroPristroje.hrebenLista.cena, mod: 0 });
  
  // === KABELY ===
  const rez = 1 + rezerva / 100;
  const delkaSvetel = Math.ceil(sumDelka * 0.35 * rez);
  const delkaZasuvek = Math.ceil(sumDelka * 0.5 * rez);
  const delkaData = Math.ceil((sumLan + sumTv) * 15 * rez);
  
  if (delkaSvetel > 0) polozky.push({ kat: 'Kabely', nazev: elektroKabely['3x1.5'].nazev, ks: delkaSvetel, j: 'm', cena: delkaSvetel * elektroKabely['3x1.5'].cenaM, info: elektroKabely['3x1.5'].prouzek });
  if (delkaZasuvek > 0) polozky.push({ kat: 'Kabely', nazev: elektroKabely['3x2.5'].nazev, ks: delkaZasuvek, j: 'm', cena: delkaZasuvek * elektroKabely['3x2.5'].cenaM, info: elektroKabely['3x2.5'].prouzek });
  if (delkaData > 0) polozky.push({ kat: 'Kabely', nazev: elektroKabely['data'].nazev, ks: delkaData, j: 'm', cena: delkaData * elektroKabely['data'].cenaM });
  
  // Kabely spec
  const kSpec = {};
  aktivniSpec.forEach(sp => { if (!kSpec[sp.kabel]) kSpec[sp.kabel] = 0; kSpec[sp.kabel] += Math.ceil(sp.delka * rez); });
  Object.entries(kSpec).forEach(([typ, del]) => { if (elektroKabely[typ]) polozky.push({ kat: 'Kabely', nazev: elektroKabely[typ].nazev, ks: del, j: 'm', cena: del * elektroKabely[typ].cenaM }); });
  
  // === KONCOVÉ PRVKY ===
  const serie = elektroKoncovePrvky[vyrobce]?.serie.find(s => s.id === serieId);
  if (serie) {
    if (sumZasuvek > 0) polozky.push({ kat: 'Koncové prvky', nazev: 'Zásuvka ' + serie.nazev, ks: sumZasuvek, cena: sumZasuvek * serie.zasuvka });
    if (sumZasuvkyDv > 0) polozky.push({ kat: 'Koncové prvky', nazev: 'Zásuvka dvojitá ' + serie.nazev, ks: sumZasuvkyDv, cena: sumZasuvkyDv * serie.zasuvkaDvojna });
    if (sumVypinacu > 0) polozky.push({ kat: 'Koncové prvky', nazev: 'Vypínač ' + serie.nazev, ks: sumVypinacu, cena: sumVypinacu * serie.vypinac });
    if (sumStridave > 0) polozky.push({ kat: 'Koncové prvky', nazev: 'Vypínač střídavý', ks: sumStridave, cena: sumStridave * serie.vypinacStridavy });
    if (sumSeriove > 0) polozky.push({ kat: 'Koncové prvky', nazev: 'Vypínač sériový', ks: sumSeriove, cena: sumSeriove * serie.vypinacSeriovy });
    if (sumLan > 0) polozky.push({ kat: 'Koncové prvky', nazev: 'Zásuvka datová RJ45', ks: sumLan, cena: sumLan * serie.datova });
    if (sumTv > 0) polozky.push({ kat: 'Koncové prvky', nazev: 'Zásuvka TV/SAT', ks: sumTv, cena: sumTv * serie.tv });
    const celkemRamecku = sumZasuvek + sumZasuvkyDv + celkemVypinacuBody + sumLan + sumTv;
    polozky.push({ kat: 'Koncové prvky', nazev: 'Rámeček 1-nás.', ks: celkemRamecku, cena: celkemRamecku * serie.ramecek1 });
  }
  
  // === TUYA TERMOSTATY ===
  if (sumTermostat > 0) polozky.push({ kat: 'Smart Home', nazev: elektroTuya.termostat.nazev, ks: sumTermostat, cena: sumTermostat * elektroTuya.termostat.cena, info: 'pro topení' });
  if (sumTermostat > 0 && gateway) polozky.push({ kat: 'Smart Home', nazev: elektroTuya.gateway.nazev, ks: 1, cena: elektroTuya.gateway.cena, info: '1 na dům' });
  if (sumKlima > 0) polozky.push({ kat: 'Koncové prvky', nazev: 'Předpříprava klima', ks: sumKlima, cena: sumKlima * 50, info: 'krabice+zaslepka' });
  
  // === INSTALAČNÍ MATERIÁL ===
  const pocetKrabic = sumZasuvek + sumZasuvkyDv + celkemVypinacuBody + sumLan + sumTv + sumTermostat + sumKlima;
  const pocetRozvod = sumSvetel + Math.ceil(pocetKrabic / 6);
  polozky.push({ kat: 'Inst. materiál', nazev: elektroInstalacniMaterial.krabiceKU68.nazev, ks: pocetKrabic, cena: pocetKrabic * elektroInstalacniMaterial.krabiceKU68.cena });
  polozky.push({ kat: 'Inst. materiál', nazev: elektroInstalacniMaterial.krabiceKP67.nazev, ks: pocetRozvod, cena: pocetRozvod * elektroInstalacniMaterial.krabiceKP67.cena });
  const delkaTrubek = Math.ceil((delkaSvetel + delkaZasuvek) * 0.8);
  polozky.push({ kat: 'Inst. materiál', nazev: elektroInstalacniMaterial.trubka20.nazev, ks: delkaTrubek, j: 'm', cena: delkaTrubek * elektroInstalacniMaterial.trubka20.cenaM });
  polozky.push({ kat: 'Inst. materiál', nazev: elektroInstalacniMaterial.prichytka.nazev, ks: Math.ceil(delkaTrubek / 0.4), cena: Math.ceil(delkaTrubek / 0.4 * elektroInstalacniMaterial.prichytka.cena) });
  polozky.push({ kat: 'Inst. materiál', nazev: elektroInstalacniMaterial.wago.nazev, ks: pocetRozvod * 4, cena: pocetRozvod * 4 * elektroInstalacniMaterial.wago.cena });
  
  const celkem = polozky.reduce((s, p) => s + p.cena, 0);
  const celkemOkruhu = svetleOkrCelkem + zasOkrCelkem + aktivniSpec.length;
  
  // RENDER
  let html = '<div class="result">';
  html += '<div class="card-title">Kalkulace elektroinstalace</div>';
  
  // Souhrn
  html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;">';
  html += '<div style="background:rgba(255,255,255,0.04);padding:10px;border-radius:8px;text-align:center;"><div style="font-size:20px;font-weight:700;">' + elektroMistnosti.length + '</div><div style="font-size:10px;color:rgba(255,255,255,0.4);">místností</div></div>';
  html += '<div style="background:rgba(255,255,255,0.04);padding:10px;border-radius:8px;text-align:center;"><div style="font-size:20px;font-weight:700;">' + celkemOkruhu + '</div><div style="font-size:10px;color:rgba(255,255,255,0.4);">okruhů</div></div>';
  html += '<div style="background:rgba(255,255,255,0.04);padding:10px;border-radius:8px;text-align:center;"><div style="font-size:20px;font-weight:700;">' + celkemZasuvekBody + '</div><div style="font-size:10px;color:rgba(255,255,255,0.4);">zásuvek</div></div>';
  html += '<div style="background:rgba(255,255,255,0.04);padding:10px;border-radius:8px;text-align:center;"><div style="font-size:20px;font-weight:700;">' + sumSvetel + '</div><div style="font-size:10px;color:rgba(255,255,255,0.4);">světel</div></div>';
  html += '</div>';
  
  // Rozvaděč info
  html += '<div style="background:rgba(255,255,255,0.04);padding:10px;border-radius:8px;margin-bottom:12px;">';
  html += '<div style="display:flex;justify-content:space-between;font-size:12px;"><span style="color:rgba(255,255,255,0.4);">Rozvaděč</span><span>' + rozvadec.nazev + '</span></div>';
  html += '<div style="display:flex;justify-content:space-between;font-size:12px;"><span style="color:rgba(255,255,255,0.4);">Obsazeno</span><span>' + celkemModulu + ' / ' + rozvadec.moduly + ' mod</span></div>';
  html += '<div style="width:100%;height:6px;background:rgba(255,255,255,0.08);border-radius:3px;margin-top:6px;"><div style="width:' + Math.min(100, celkemModulu/rozvadec.moduly*100) + '%;height:100%;background:linear-gradient(135deg,var(--gold-start),var(--gold-end));border-radius:3px;"></div></div>';
  html += '</div>';
  
  html += '<div style="background:rgba(255,255,255,0.04);padding:10px;border-radius:8px;margin-bottom:12px;display:flex;justify-content:space-between;font-size:12px;"><span style="color:rgba(255,255,255,0.4);">Inst. výkon</span><span style="font-weight:500;">' + (celkemVykon/1000).toFixed(1) + ' kW</span></div>';
  
  // Celkem
  html += '<div class="result-total"><span class="result-total-label">CELKEM</span><span class="result-total-value">' + formatCena(celkem) + '</span></div>';
  
  // Rozpis
  html += '<div style="margin-top:16px;">';
  ['Rozvaděč', 'Kabely', 'Koncové prvky', 'Smart Home', 'Inst. materiál'].forEach(kat => {
    const items = polozky.filter(p => p.kat === kat);
    if (items.length === 0) return;
    const katCena = items.reduce((s,i) => s + i.cena, 0);
    html += '<div style="display:flex;justify-content:space-between;font-size:11px;margin:12px 0 4px;"><span style="font-weight:600;color:var(--gold);">' + kat + '</span><span style="color:rgba(255,255,255,0.4);">' + formatCena(katCena) + '</span></div>';
    items.forEach(p => {
      html += '<div style="display:flex;justify-content:space-between;font-size:11px;padding:3px 0;border-bottom:1px solid rgba(255,255,255,0.04);"><span style="color:rgba(255,255,255,0.35);">' + p.nazev + ' <span style="color:rgba(255,255,255,0.12);">' + p.ks + (p.j || 'ks') + '</span>' + (p.info ? ' <span style="color:rgba(255,255,255,0.12);">(' + p.info + ')</span>' : '') + '</span><span style="color:rgba(255,255,255,0.4);">' + formatCena(p.cena) + '</span></div>';
    });
  });
  html += '</div>';
  
  html += '</div>';
  
  document.getElementById('elektroResult').innerHTML = html;
}

// === PODLAHY ARBITON DATABÁZE ===
const arbitonPodlahy = {
  amaron: [
    { id: 'amaron_wood', nazev: 'Amaron Wood Design', cenaM2: 815, baleniM2: 2.076, tloustka: 5, naslap: 0.55, trida: '23/33/42', zamek: '5G', popis: 'Dřevěné dekory, 1511×229mm' },
    { id: 'amaron_stone', nazev: 'Amaron XXL Stone', cenaM2: 815, baleniM2: 2.088, tloustka: 5, naslap: 0.55, trida: '23/33/42', zamek: '5G', popis: 'Kamenné dekory, 914×457mm' },
    { id: 'amaron_herring', nazev: 'Amaron Herringbone', cenaM2: 915, baleniM2: 1.402, tloustka: 5, naslap: 0.55, trida: '23/33/42', zamek: '5G', popis: 'Rybí kost, 615×123mm' },
    { id: 'amaron_eir', nazev: 'Amaron Wood EIR', cenaM2: 899, baleniM2: 2.076, tloustka: 5, naslap: 0.55, trida: '23/33/42', zamek: '5G', popis: 'Synchronní struktura dřeva' },
  ],
  woodric: [
    { id: 'woodric_click', nazev: 'Woodric Click', cenaM2: 650, baleniM2: 2.196, tloustka: 4, naslap: 0.3, trida: '23/33', zamek: '2G', popis: 'Standardní řada' },
    { id: 'woodric_eir', nazev: 'Woodric EIR', cenaM2: 699, baleniM2: 2.196, tloustka: 4, naslap: 0.3, trida: '23/33', zamek: '2G', popis: 'Synchronní struktura' },
    { id: 'woodric_acoustic', nazev: 'Woodric Acoustic', cenaM2: 749, baleniM2: 2.196, tloustka: 4, naslap: 0.3, trida: '23/33', zamek: '2G', popis: 'S integrovanou podložkou' },
  ],
  liberal: [
    { id: 'liberal', nazev: 'Liberal Collection', cenaM2: 580, baleniM2: 2.196, tloustka: 4, naslap: 0.3, trida: '23/32', zamek: '2G', popis: 'Ekonomická řada' },
  ],
  biclick: [
    { id: 'biclick', nazev: 'Afirmax BiClick Floor', cenaM2: 638, baleniM2: 2.196, tloustka: 4, naslap: 0.3, trida: '23/32', zamek: '2G', popis: 'Entry level' },
  ]
};

const arbitonPodlozky = [
  { id: 'multiprotec_antislip', nazev: 'Multiprotec Vinyl Click Antislip', cenaM2: 164, baleniM2: 8, tloustka: 1.6, tepelnyOdpor: 0.008, tlumeni: 16, popis: 'Premium, podlahové topení' },
  { id: 'multiprotec_hardlay', nazev: 'Multiprotec Super Hardlay', cenaM2: 159, baleniM2: 9, tloustka: 1.1, tepelnyOdpor: 0.004, tlumeni: 14, popis: 'Na dlažbu, vysoká zátěž' },
  { id: 'multiprotec_acoustic', nazev: 'Multiprotec Acoustic 3in1', cenaM2: 145, baleniM2: 8, tloustka: 1.5, tepelnyOdpor: 0.010, tlumeni: 18, popis: 'Akustická, 3v1 systém' },
  { id: 'secura_vinyl', nazev: 'Secura Vinyl Click 3in1', cenaM2: 89, baleniM2: 6.25, tloustka: 1.5, tepelnyOdpor: 0.015, tlumeni: 19, popis: 'Ekonomická' },
  { id: 'secura_smart', nazev: 'Secura LVT Smart', cenaM2: 79, baleniM2: 6.25, tloustka: 1.5, tepelnyOdpor: 0.015, tlumeni: 17, popis: 'Entry level' },
];

const arbitonSokly = {
  vigo: [
    { id: 'vigo60_bila', nazev: 'VIGO 60 Bílá RAL 9003', cenaBm: 80, delka: 2.2, vyska: 60, popis: 'Univerzální bílá' },
    { id: 'vigo60_seda', nazev: 'VIGO 60 Šedá', cenaBm: 85, delka: 2.2, vyska: 60, popis: 'Antracit/tmavě šedá' },
    { id: 'vigo60_dekor', nazev: 'VIGO 60 Dřevodekor', cenaBm: 95, delka: 2.2, vyska: 60, popis: 'Dub, ořech a další' },
    { id: 'vigo80_bila', nazev: 'VIGO 80 Bílá RAL 9003', cenaBm: 105, delka: 2.2, vyska: 80, popis: 'Vyšší, moderní' },
  ],
  indo: [
    { id: 'indo_dekor', nazev: 'INDO Dřevodekor', cenaBm: 56, delka: 2.5, vyska: 70, popis: 'Dekory Egger' },
    { id: 'indo_bila', nazev: 'INDO Bílá', cenaBm: 52, delka: 2.5, vyska: 70, popis: 'Základní bílá' },
  ]
};

const arbitonPrislusenstvi = {
  vigo: { rohVnitrni: 42, rohVnejsi: 42, spojka: 32, ukonceni: 38, klip: 6 },
  indo: { rohVnitrni: 28, rohVnejsi: 28, spojka: 22, ukonceni: 25, klip: 5 }
};

const arbitonPrechody = [
  { id: 'cs37_stribrna', nazev: 'CS37 Stříbrná', cenaKs: 220, delka: 0.93, sirka: 37, popis: 'Univerzální 0-17mm' },
  { id: 'cs37_dekor', nazev: 'CS37 Dřevodekor', cenaKs: 245, delka: 0.93, sirka: 37, popis: 'Dekor dřeva' },
  { id: 'cs25_stribrna', nazev: 'CS25 Stříbrná', cenaKs: 175, delka: 0.93, sirka: 25, popis: 'Úzká 0-5mm' },
  { id: 'ukoncovaci', nazev: 'Ukončovací profil', cenaKs: 185, delka: 0.93, sirka: 25, popis: 'Ukončení podlahy' },
];

const arbitonDoplnky = {
  aluTape: { nazev: 'ALU Tape spojovací páska', cenaKs: 95 },
  lepidlo: { nazev: 'Montážní lepidlo na lišty', cenaKs: 175 },
  instalacniSada: { nazev: 'Instalační sada', cenaKs: 299 }
};

let podlahyState = {
  kategorie: 'amaron',
  typ: 'amaron_wood',
  podlozka: 'multiprotec_antislip',
  soklTyp: 'vigo',
  soklVarianta: 'vigo60_bila',
  prechod: 'cs37_stribrna'
};

function renderPodlahyAll() {
  renderPodlahyKategorie();
  renderPodlahyTypy();
  renderPodlahyPodlozky();
  renderPodlahySokly();
  renderPodlahyPrechody();
}

function renderPodlahyKategorie() {
  const kategorie = [
    { id: 'amaron', nazev: 'Amaron', popis: 'Premium 800-900 Kč/m²' },
    { id: 'woodric', nazev: 'Woodric', popis: 'Standard 650-750 Kč/m²' },
    { id: 'liberal', nazev: 'Liberal', popis: 'Economy 550-600 Kč/m²' },
    { id: 'biclick', nazev: 'BiClick', popis: 'Entry 600-650 Kč/m²' }
  ];
  document.getElementById('podlahyKategorieList').innerHTML = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">' + kategorie.map(k => '<div class="option ' + (podlahyState.kategorie === k.id ? 'active' : '') + '" style="padding:10px;" onclick="selectPodlahyKategorie(\'' + k.id + '\')"><div class="option-dot" style="margin-top:0;"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div><div class="option-text"><div class="option-title" style="font-size:12px;">' + k.nazev + '</div><div class="option-desc" style="font-size:10px;">' + k.popis + '</div></div></div>').join('') + '</div>';
}

function selectPodlahyKategorie(kat) {
  podlahyState.kategorie = kat;
  podlahyState.typ = arbitonPodlahy[kat][0].id;
  renderPodlahyKategorie();
  renderPodlahyTypy();
  vypoctiPodlahy();
}

function renderPodlahyTypy() {
  const list = arbitonPodlahy[podlahyState.kategorie];
  document.getElementById('podlahyTyp').innerHTML = list.map(p => '<option value="' + p.id + '" ' + (podlahyState.typ === p.id ? 'selected' : '') + '>' + p.nazev + ' (' + p.cenaM2 + ' Kč/m²)</option>').join('');
  document.getElementById('podlahyTyp').onchange = function() { podlahyState.typ = this.value; renderPodlahyTypInfo(); vypoctiPodlahy(); };
  renderPodlahyTypInfo();
}

function renderPodlahyTypInfo() {
  const allP = [...arbitonPodlahy.amaron, ...arbitonPodlahy.woodric, ...arbitonPodlahy.liberal, ...arbitonPodlahy.biclick];
  const p = allP.find(x => x.id === podlahyState.typ);
  if (!p) return;
  document.getElementById('podlahyTypInfo').innerHTML = '<div style="background:rgba(255,255,255,0.04);padding:10px;border-radius:8px;font-size:11px;"><div style="color:rgba(255,255,255,0.35);">' + p.popis + '</div><div style="color:#e8e8ec;margin-top:4px;">Tl. ' + p.tloustka + 'mm • Nášlap ' + p.naslap + 'mm • Třída ' + p.trida + ' • Zámek ' + p.zamek + ' • Balení ' + p.baleniM2 + ' m²</div></div>';
}

function renderPodlahyPodlozky() {
  document.getElementById('podlahyPodlozkaList').innerHTML = arbitonPodlozky.map(p => '<div class="option ' + (podlahyState.podlozka === p.id ? 'active' : '') + '" onclick="selectPodlahyPodlozka(\'' + p.id + '\')"><div class="option-dot"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div><div class="option-text"><div class="option-title">' + p.nazev + infoTooltip(p.popis + '. Tl. ' + p.tloustka + 'mm, R=' + p.tepelnyOdpor + ' m²K/W, ' + p.tlumeni + 'dB') + '</div><div class="option-desc">' + p.cenaM2 + ' Kč/m²</div></div></div>').join('');
}

function selectPodlahyPodlozka(id) {
  podlahyState.podlozka = id;
  renderPodlahyPodlozky();
  vypoctiPodlahy();
}

function setPodlahySoklTyp(typ, el) {
  podlahyState.soklTyp = typ;
  podlahyState.soklVarianta = arbitonSokly[typ][0].id;
  el.parentElement.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderPodlahySokly();
  vypoctiPodlahy();
}

function renderPodlahySokly() {
  const list = arbitonSokly[podlahyState.soklTyp];
  document.getElementById('podlahySoklVarianta').innerHTML = list.map(s => '<option value="' + s.id + '" ' + (podlahyState.soklVarianta === s.id ? 'selected' : '') + '>' + s.nazev + ' (' + s.cenaBm + ' Kč/bm)</option>').join('');
  document.getElementById('podlahySoklVarianta').onchange = function() { podlahyState.soklVarianta = this.value; vypoctiPodlahy(); };
}

function renderPodlahyPrechody() {
  document.getElementById('podlahyPrechod').innerHTML = arbitonPrechody.map(p => '<option value="' + p.id + '" ' + (podlahyState.prechod === p.id ? 'selected' : '') + '>' + p.nazev + ' (' + p.cenaKs + ' Kč/ks)</option>').join('');
  document.getElementById('podlahyPrechod').onchange = function() { podlahyState.prechod = this.value; vypoctiPodlahy(); };
}

function vypoctiPodlahy() {
  const plocha = parseFloat(document.getElementById('podlahyPlocha').value) || 0;
  const obvod = parseFloat(document.getElementById('podlahyObvod').value) || 0;
  const dvere = parseInt(document.getElementById('podlahyDvere').value) || 0;
  const vnitrniRohy = parseInt(document.getElementById('podlahyVnitrniRohy').value) || 0;
  const vnejsiRohy = parseInt(document.getElementById('podlahyVnejsiRohy').value) || 0;
  const rezervaPodlaha = parseInt(document.getElementById('podlahyRezervaPodlaha').value) || 10;
  const rezervaListy = parseInt(document.getElementById('podlahyRezervaListy').value) || 5;
  const montazKlipy = document.getElementById('podlahyKlipy').checked;
  const instalacniSada = document.getElementById('podlahyInstalacniSada').checked;
  const topeni = document.getElementById('podlahyTopeni').checked;
  
  document.getElementById('podlahyTopeniWarning').style.display = topeni ? 'block' : 'none';
  
  if (plocha <= 0) { document.getElementById('podlahyResult').innerHTML = ''; return; }
  
  const plochaR = plocha * (1 + rezervaPodlaha / 100);
  const obvodR = obvod * (1 + rezervaListy / 100);
  const obvodProListy = Math.max(0, obvodR - (dvere * 0.9));
  
  // Najdi produkty
  const allP = [...arbitonPodlahy.amaron, ...arbitonPodlahy.woodric, ...arbitonPodlahy.liberal, ...arbitonPodlahy.biclick];
  const podlaha = allP.find(p => p.id === podlahyState.typ);
  const podlozka = arbitonPodlozky.find(p => p.id === podlahyState.podlozka);
  const allS = [...arbitonSokly.vigo, ...arbitonSokly.indo];
  const sokl = allS.find(s => s.id === podlahyState.soklVarianta);
  const prechod = arbitonPrechody.find(p => p.id === podlahyState.prechod);
  const pris = arbitonPrislusenstvi[podlahyState.soklTyp];
  
  const polozky = [];
  let celkem = 0;
  
  // 1. PODLAHA
  if (podlaha) {
    const pocetBaleni = Math.ceil(plochaR / podlaha.baleniM2);
    const skutecnaM2 = pocetBaleni * podlaha.baleniM2;
    const cena = skutecnaM2 * podlaha.cenaM2;
    polozky.push({ nazev: podlaha.nazev, detail: skutecnaM2.toFixed(2) + ' m² (' + pocetBaleni + ' bal.)', info: 'Tl. ' + podlaha.tloustka + 'mm, nášlap ' + podlaha.naslap + 'mm', cena, kat: 'Podlaha' });
    celkem += cena;
  }
  
  // 2. PODLOŽKA
  if (podlozka) {
    const potrebaM2 = plochaR * 1.05;
    const pocetBaleni = Math.ceil(potrebaM2 / podlozka.baleniM2);
    const skutecnaM2 = pocetBaleni * podlozka.baleniM2;
    const cena = skutecnaM2 * podlozka.cenaM2;
    polozky.push({ nazev: podlozka.nazev, detail: skutecnaM2.toFixed(1) + ' m² (' + pocetBaleni + ' bal.)', info: 'Tl. ' + podlozka.tloustka + 'mm, R=' + podlozka.tepelnyOdpor + ', ' + podlozka.tlumeni + 'dB', cena, kat: 'Podložka' });
    celkem += cena;
    
    // Spojovací páska
    const pocetPasek = Math.ceil(plocha / 50);
    if (pocetPasek > 0) {
      const cenaPasky = pocetPasek * arbitonDoplnky.aluTape.cenaKs;
      polozky.push({ nazev: arbitonDoplnky.aluTape.nazev, detail: pocetPasek + ' ks', info: 'Pro spojení podložek', cena: cenaPasky, kat: 'Podložka' });
      celkem += cenaPasky;
    }
  }
  
  // 3. SOKLOVÉ LIŠTY
  if (sokl && obvodProListy > 0) {
    const pocetListy = Math.ceil(obvodProListy / sokl.delka);
    const cenaListy = obvodProListy * sokl.cenaBm;
    polozky.push({ nazev: sokl.nazev, detail: obvodProListy.toFixed(1) + ' bm (' + pocetListy + ' ks)', info: 'Výška ' + sokl.vyska + 'mm', cena: cenaListy, kat: 'Soklové lišty' });
    celkem += cenaListy;
    
    // Vnitřní rohy
    if (vnitrniRohy > 0) {
      const c = vnitrniRohy * pris.rohVnitrni;
      polozky.push({ nazev: 'Roh vnitřní ' + podlahyState.soklTyp.toUpperCase(), detail: vnitrniRohy + ' ks', cena: c, kat: 'Soklové lišty' });
      celkem += c;
    }
    
    // Vnější rohy
    if (vnejsiRohy > 0) {
      const c = vnejsiRohy * pris.rohVnejsi;
      polozky.push({ nazev: 'Roh vnější ' + podlahyState.soklTyp.toUpperCase(), detail: vnejsiRohy + ' ks', cena: c, kat: 'Soklové lišty' });
      celkem += c;
    }
    
    // Spojky
    const pocetSpojek = Math.max(0, pocetListy - Math.ceil(obvodProListy / (sokl.delka * 2)));
    if (pocetSpojek > 0) {
      const c = pocetSpojek * pris.spojka;
      polozky.push({ nazev: 'Spojka ' + podlahyState.soklTyp.toUpperCase(), detail: pocetSpojek + ' ks', cena: c, kat: 'Soklové lišty' });
      celkem += c;
    }
    
    // Ukončení
    if (dvere > 0) {
      const pocetUkonceni = dvere * 2;
      const c = pocetUkonceni * pris.ukonceni;
      polozky.push({ nazev: 'Ukončení ' + podlahyState.soklTyp.toUpperCase() + ' L/P', detail: pocetUkonceni + ' ks', cena: c, kat: 'Soklové lišty' });
      celkem += c;
    }
    
    // Klipy nebo lepidlo
    if (montazKlipy) {
      const pocetKlipu = Math.ceil(obvodProListy / 0.45);
      const c = pocetKlipu * pris.klip;
      polozky.push({ nazev: 'Montážní klip ' + podlahyState.soklTyp.toUpperCase(), detail: pocetKlipu + ' ks', info: 'Rozteč 45 cm', cena: c, kat: 'Soklové lišty' });
      celkem += c;
    } else {
      const pocetLepidel = Math.ceil(obvodProListy / 15);
      const c = pocetLepidel * arbitonDoplnky.lepidlo.cenaKs;
      polozky.push({ nazev: arbitonDoplnky.lepidlo.nazev, detail: pocetLepidel + ' ks', cena: c, kat: 'Soklové lišty' });
      celkem += c;
    }
  }
  
  // 4. PŘECHODOVÉ LIŠTY
  if (prechod && dvere > 0) {
    const c = dvere * prechod.cenaKs;
    polozky.push({ nazev: prechod.nazev, detail: dvere + ' ks', info: 'Délka ' + prechod.delka + 'm, šířka ' + prechod.sirka + 'mm', cena: c, kat: 'Přechodové lišty' });
    celkem += c;
  }
  
  // 5. INSTALAČNÍ SADA
  if (instalacniSada) {
    polozky.push({ nazev: arbitonDoplnky.instalacniSada.nazev, detail: '1 ks', info: 'Dorazový blok, páčidlo, klínky', cena: arbitonDoplnky.instalacniSada.cenaKs, kat: 'Příslušenství' });
    celkem += arbitonDoplnky.instalacniSada.cenaKs;
  }
  
  // Render výsledku
  const kategorie = ['Podlaha', 'Podložka', 'Soklové lišty', 'Přechodové lišty', 'Příslušenství'];
  let html = '<div class="result"><div class="card-title">Kalkulace materiálu</div>';
  
  kategorie.forEach(kat => {
    const items = polozky.filter(p => p.kat === kat);
    if (items.length === 0) return;
    html += '<div style="font-size:10px;font-weight:600;color:rgba(255,255,255,0.4);text-transform:uppercase;margin:12px 0 6px;">' + kat + '</div>';
    items.forEach(p => {
      html += '<div class="result-item"><div class="result-item-info"><div class="result-item-name">' + p.nazev + '</div><div class="result-item-detail">' + p.detail + '</div>' + (p.info ? '<div style="font-size:10px;color:rgba(255,255,255,0.4);margin-top:2px;">' + p.info + '</div>' : '') + '</div><div class="result-item-price">' + formatCena(p.cena) + '</div></div>';
    });
  });
  
  html += '<div class="result-total"><span class="result-total-label">CELKEM</span><span class="result-total-value">' + formatCena(celkem) + '</span></div>';
  html += '<div class="result-per-m2">' + Math.round(celkem / plocha) + ' Kč/m²</div></div>';
  
  document.getElementById('podlahyResult').innerHTML = html;
}

// === ETICS DATABÁZE ===
const eticsIzolanty = {
  eps: [
    { id: 'eps50', nazev: 'EPS 70F 50 mm', tloustka: 50, cenaM2: 79 },
    { id: 'eps60', nazev: 'EPS 70F 60 mm', tloustka: 60, cenaM2: 95 },
    { id: 'eps80', nazev: 'EPS 70F 80 mm', tloustka: 80, cenaM2: 127 },
    { id: 'eps100', nazev: 'EPS 70F 100 mm', tloustka: 100, cenaM2: 159 },
    { id: 'eps120', nazev: 'EPS 70F 120 mm', tloustka: 120, cenaM2: 190 },
    { id: 'eps140', nazev: 'EPS 70F 140 mm', tloustka: 140, cenaM2: 222 },
    { id: 'eps160', nazev: 'EPS 70F 160 mm', tloustka: 160, cenaM2: 254 },
    { id: 'eps180', nazev: 'EPS 70F 180 mm', tloustka: 180, cenaM2: 286 },
    { id: 'eps200', nazev: 'EPS 70F 200 mm', tloustka: 200, cenaM2: 318 },
  ],
  epsGrey: [
    { id: 'epsg80', nazev: 'EPS GreyWall 80 mm', tloustka: 80, cenaM2: 175 },
    { id: 'epsg100', nazev: 'EPS GreyWall 100 mm', tloustka: 100, cenaM2: 219 },
    { id: 'epsg120', nazev: 'EPS GreyWall 120 mm', tloustka: 120, cenaM2: 263 },
    { id: 'epsg140', nazev: 'EPS GreyWall 140 mm', tloustka: 140, cenaM2: 307 },
    { id: 'epsg160', nazev: 'EPS GreyWall 160 mm', tloustka: 160, cenaM2: 351 },
  ],
  mw: [
    { id: 'mw80', nazev: 'Minerální vata 80 mm', tloustka: 80, cenaM2: 320 },
    { id: 'mw100', nazev: 'Minerální vata 100 mm', tloustka: 100, cenaM2: 400 },
    { id: 'mw120', nazev: 'Minerální vata 120 mm', tloustka: 120, cenaM2: 480 },
    { id: 'mw140', nazev: 'Minerální vata 140 mm', tloustka: 140, cenaM2: 560 },
    { id: 'mw160', nazev: 'Minerální vata 160 mm', tloustka: 160, cenaM2: 640 },
    { id: 'mw180', nazev: 'Minerální vata 180 mm', tloustka: 180, cenaM2: 720 },
    { id: 'mw200', nazev: 'Minerální vata 200 mm', tloustka: 200, cenaM2: 800 },
  ],
  xps: [
    { id: 'xps30', nazev: 'XPS soklový 30 mm', tloustka: 30, cenaM2: 145 },
    { id: 'xps50', nazev: 'XPS soklový 50 mm', tloustka: 50, cenaM2: 242 },
    { id: 'xps60', nazev: 'XPS soklový 60 mm', tloustka: 60, cenaM2: 290 },
    { id: 'xps80', nazev: 'XPS soklový 80 mm', tloustka: 80, cenaM2: 387 },
    { id: 'xps100', nazev: 'XPS soklový 100 mm', tloustka: 100, cenaM2: 484 },
  ]
};

const eticsHmozdinky = [
  { delka: 115, cenaKs: 11.5 },
  { delka: 135, cenaKs: 12.5 },
  { delka: 155, cenaKs: 13.85 },
  { delka: 175, cenaKs: 16.07 },
  { delka: 195, cenaKs: 19.58 },
  { delka: 215, cenaKs: 20.88 },
  { delka: 235, cenaKs: 22.18 },
  { delka: 255, cenaKs: 25.41 },
  { delka: 275, cenaKs: 28 },
  { delka: 315, cenaKs: 35 },
];

const eticsProfily = {
  zakladaci: { nazev: 'Zakládací lišta Al', cenaBm: 85 },
  rohove: { nazev: 'Rohový profil PVC se síťovinou', cenaBm: 35 },
  okenniZakladni: { nazev: 'Okenní profil APU', cenaBm: 28 },
  okenniPremium: { nazev: 'Okenní profil s těsněním', cenaBm: 45 },
  okapnice: { nazev: 'Nadokenní okapnička', cenaBm: 55 },
  parapetni: { nazev: 'Parapetní profil', cenaBm: 65 },
};

const eticsBaumit = {
  lepidla: [
    { id: 'duocontact', nazev: 'DuoContact', cenaKg: 8.83, baleni: 25, spotrebaLepeni: 4, spotrebaSterka: 4, popis: 'Ekonomický, univerzální' },
    { id: 'starcontact', nazev: 'StarContact', cenaKg: 20.52, baleni: 25, spotrebaLepeni: 4, spotrebaSterka: 4, popis: 'Standardní kvalita' },
    { id: 'procontact', nazev: 'ProContact', cenaKg: 12.97, baleni: 25, spotrebaLepeni: 4, spotrebaSterka: 4, popis: 'Profesionální' },
    { id: 'opencontact', nazev: 'openContact', cenaKg: 25.65, baleni: 25, spotrebaLepeni: 5, spotrebaSterka: 5, popis: 'Paropropustný pro MW' },
  ],
  sitoviny: [
    { id: 'duotex', nazev: 'DuoTex 145 g/m²', cenaM2: 28, popis: 'Ekonomická síťovina' },
    { id: 'startex', nazev: 'StarTex 160 g/m²', cenaM2: 32, popis: 'Standardní síťovina' },
    { id: 'opentex', nazev: 'openTex 165 g/m²', cenaM2: 45, popis: 'Pro systém open' },
    { id: 'pancir', nazev: 'Pancéřová 340 g/m²', cenaM2: 85, popis: 'Sokl, přízemí, veřejné budovy' },
  ],
  penetrace: [
    { id: 'uniprimer', nazev: 'UniPrimer', cenaKg: 65, baleni: 25, spotreba: 0.2, popis: 'Univerzální' },
    { id: 'premiumprimer', nazev: 'PremiumPrimer', cenaKg: 85, baleni: 20, spotreba: 0.2, popis: 'Pro systém open' },
  ],
  omitky: [
    { id: 'silikontop15', nazev: 'SilikonTop 1.5 mm', cenaKg: 63.16, baleni: 25, spotreba: 2.5, typ: 'silikon', popis: 'Silikonová škrábaná' },
    { id: 'silikontop20', nazev: 'SilikonTop 2 mm', cenaKg: 63.16, baleni: 25, spotreba: 2.9, typ: 'silikon', popis: 'Silikonová škrábaná' },
    { id: 'startop15', nazev: 'StarTop 1.5 mm', cenaKg: 79.86, baleni: 25, spotreba: 2.5, typ: 'silikon', popis: 'Prémiová Drypor' },
    { id: 'startop20', nazev: 'StarTop 2 mm', cenaKg: 79.86, baleni: 25, spotreba: 2.9, typ: 'silikon', popis: 'Prémiová Drypor' },
    { id: 'siliportop15', nazev: 'SiliporTop 1.5 mm', cenaKg: 52, baleni: 25, spotreba: 2.5, typ: 'silikon', popis: 'Ekonomická silikonová' },
    { id: 'nanoportop15', nazev: 'NanoporTop 1.5 mm', cenaKg: 95, baleni: 25, spotreba: 2.5, typ: 'silikát', popis: 'Silikátová samočistící' },
    { id: 'granoportop15', nazev: 'GranoporTop 1.5 mm', cenaKg: 45, baleni: 25, spotreba: 2.5, typ: 'akrylát', popis: 'Akrylátová' },
    { id: 'mosaiktop', nazev: 'MosaikTop', cenaKg: 85, baleni: 25, spotreba: 4.5, typ: 'mozaika', popis: 'Soklová mozaiková' },
  ],
};

const eticsWeber = {
  lepidla: [
    { id: 'klasik', nazev: 'therm klasik', cenaKg: 9.5, baleni: 25, spotrebaLepeni: 4, spotrebaSterka: 4, popis: 'Základní' },
    { id: 'elastik', nazev: 'therm elastik', cenaKg: 15, baleni: 25, spotrebaLepeni: 4, spotrebaSterka: 4, popis: 'Elastická stěrka' },
    { id: 'plusultra', nazev: 'therm plus ultra', cenaKg: 22, baleni: 25, spotrebaLepeni: 4, spotrebaSterka: 4, popis: 'Prémiové' },
  ],
  sitoviny: [
    { id: 'webertex', nazev: 'therm síťovina 160 g/m²', cenaM2: 30, popis: 'Standardní' },
    { id: 'weberpancir', nazev: 'Pancéřová 340 g/m²', cenaM2: 85, popis: 'Sokl, přízemí' },
  ],
  penetrace: [
    { id: 'weberpodklad', nazev: 'pas podklad UNI', cenaKg: 72, baleni: 20, spotreba: 0.25, popis: 'Univerzální' },
  ],
  omitky: [
    { id: 'passilikon15', nazev: 'pas silikon 1.5 mm', cenaKg: 68, baleni: 25, spotreba: 2.5, typ: 'silikon', popis: 'Silikonová' },
    { id: 'passilikon20', nazev: 'pas silikon 2 mm', cenaKg: 68, baleni: 25, spotreba: 2.9, typ: 'silikon', popis: 'Silikonová' },
    { id: 'passilikat15', nazev: 'pas silikát 1.5 mm', cenaKg: 62, baleni: 25, spotreba: 2.5, typ: 'silikát', popis: 'Silikátová' },
    { id: 'pasakrylat15', nazev: 'pas akrylát 1.5 mm', cenaKg: 48, baleni: 25, spotreba: 2.5, typ: 'akrylát', popis: 'Akrylátová' },
    { id: 'pasmarmolit', nazev: 'pas marmolit', cenaKg: 78, baleni: 25, spotreba: 4.5, typ: 'mozaika', popis: 'Soklová marmolitová' },
  ],
};

let eticsState = {
  baumit: { izolant: 'eps', tloustka: 'eps100', xps: 'xps50', lepidlo: 'starcontact', sitovina: 'startex', penetrace: 'uniprimer', omitka: 'silikontop15', omitkaSokl: 'mosaiktop', okenniProfil: 'zakladni' },
  weber: { izolant: 'eps', tloustka: 'eps100', xps: 'xps50', lepidlo: 'elastik', sitovina: 'webertex', penetrace: 'weberpodklad', omitka: 'passilikon15', omitkaSokl: 'pasmarmolit', okenniProfil: 'zakladni' }
};

function selectEticsTab(tab, el) {
  document.querySelectorAll('#eticsPage .tabs .tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('baumitContent').style.display = tab === 'baumit' ? 'block' : 'none';
  document.getElementById('weberContent').style.display = tab === 'weber' ? 'block' : 'none';
}

function togglePozarniPasy(system) {
  const checked = document.getElementById(system + 'PozarniPasy').checked;
  document.getElementById(system + 'PozarniPasyInput').style.display = checked ? 'block' : 'none';
  vypoctiEtics(system);
}

function renderEticsAll() {
  ['baumit', 'weber'].forEach(system => {
    renderEticsIzolanty(system);
    renderEticsTloustky(system);
    renderEticsXps(system);
    renderEticsLepidla(system);
    renderEticsSitoviny(system);
    renderEticsPenetrace(system);
    renderEticsOmitky(system);
    renderEticsOmitkySokl(system);
    renderEticsOkenniProfily(system);
  });
}

function renderEticsIzolanty(system) {
  const types = [
    { id: 'eps', nazev: 'EPS 70F (bílý)', popis: 'Nejlevnější, λ=0,039' },
    { id: 'epsGrey', nazev: 'EPS GreyWall (šedý)', popis: 'O 20% lepší λ=0,032' },
    { id: 'mw', nazev: 'Minerální vata', popis: 'Nehořlavá A1, λ=0,036' }
  ];
  document.getElementById(system + 'IzolantList').innerHTML = types.map(t => '<div class="option ' + (eticsState[system].izolant === t.id ? 'active' : '') + '" onclick="selectEticsIzolant(\'' + system + '\',\'' + t.id + '\')"><div class="option-dot"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div><div class="option-text"><div class="option-title">' + t.nazev + '</div><div class="option-desc">' + t.popis + '</div></div></div>').join('');
}

function selectEticsIzolant(system, typ) {
  eticsState[system].izolant = typ;
  const first = typ === 'eps' ? 'eps100' : typ === 'epsGrey' ? 'epsg100' : 'mw100';
  eticsState[system].tloustka = first;
  renderEticsIzolanty(system);
  renderEticsTloustky(system);
  vypoctiEtics(system);
}

function renderEticsTloustky(system) {
  const typ = eticsState[system].izolant;
  const list = eticsIzolanty[typ];
  document.getElementById(system + 'Tloustka').innerHTML = list.map(i => '<option value="' + i.id + '" ' + (eticsState[system].tloustka === i.id ? 'selected' : '') + '>' + i.nazev + ' (' + i.cenaM2 + ' Kč/m²)</option>').join('');
  document.getElementById(system + 'Tloustka').onchange = function() { eticsState[system].tloustka = this.value; vypoctiEtics(system); };
}

function renderEticsXps(system) {
  document.getElementById(system + 'Xps').innerHTML = eticsIzolanty.xps.map(i => '<option value="' + i.id + '" ' + (eticsState[system].xps === i.id ? 'selected' : '') + '>' + i.nazev + ' (' + i.cenaM2 + ' Kč/m²)</option>').join('');
  document.getElementById(system + 'Xps').onchange = function() { eticsState[system].xps = this.value; vypoctiEtics(system); };
}

function renderEticsLepidla(system) {
  const data = system === 'baumit' ? eticsBaumit : eticsWeber;
  const prefix = system === 'baumit' ? 'Baumit ' : 'weber.';
  document.getElementById(system + 'LepidloList').innerHTML = data.lepidla.map(l => '<div class="option ' + (eticsState[system].lepidlo === l.id ? 'active' : '') + '" onclick="selectEticsLepidlo(\'' + system + '\',\'' + l.id + '\')"><div class="option-dot"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div><div class="option-text"><div class="option-title">' + prefix + l.nazev + infoTooltip(l.popis) + '</div><div class="option-desc">' + (l.cenaKg * l.baleni).toFixed(0) + ' Kč/' + l.baleni + 'kg</div></div></div>').join('');
}

function selectEticsLepidlo(system, id) { eticsState[system].lepidlo = id; renderEticsLepidla(system); vypoctiEtics(system); }

function renderEticsSitoviny(system) {
  const data = system === 'baumit' ? eticsBaumit : eticsWeber;
  document.getElementById(system + 'SitovinaList').innerHTML = data.sitoviny.map(s => '<div class="option ' + (eticsState[system].sitovina === s.id ? 'active' : '') + '" onclick="selectEticsSitovina(\'' + system + '\',\'' + s.id + '\')"><div class="option-dot"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div><div class="option-text"><div class="option-title">' + s.nazev + infoTooltip(s.popis) + '</div><div class="option-desc">' + s.cenaM2 + ' Kč/m²</div></div></div>').join('');
}

function selectEticsSitovina(system, id) { eticsState[system].sitovina = id; renderEticsSitoviny(system); vypoctiEtics(system); }

function renderEticsPenetrace(system) {
  const data = system === 'baumit' ? eticsBaumit : eticsWeber;
  const prefix = system === 'baumit' ? 'Baumit ' : 'weber.';
  document.getElementById(system + 'Penetrace').innerHTML = data.penetrace.map(p => '<option value="' + p.id + '" ' + (eticsState[system].penetrace === p.id ? 'selected' : '') + '>' + prefix + p.nazev + ' (' + (p.cenaKg * p.baleni).toFixed(0) + ' Kč/' + p.baleni + 'kg)</option>').join('');
  document.getElementById(system + 'Penetrace').onchange = function() { eticsState[system].penetrace = this.value; vypoctiEtics(system); };
}

function renderEticsOmitky(system) {
  const data = system === 'baumit' ? eticsBaumit : eticsWeber;
  const prefix = system === 'baumit' ? 'Baumit ' : 'weber.';
  const omitky = data.omitky.filter(o => o.typ !== 'mozaika');
  document.getElementById(system + 'OmitkaList').innerHTML = omitky.map(o => '<div class="option ' + (eticsState[system].omitka === o.id ? 'active' : '') + '" onclick="selectEticsOmitka(\'' + system + '\',\'' + o.id + '\')"><div class="option-dot"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div><div class="option-text"><div class="option-title">' + prefix + o.nazev + infoTooltip(o.popis) + '</div><div class="option-desc">' + (o.cenaKg * o.baleni).toFixed(0) + ' Kč/' + o.baleni + 'kg | ' + o.typ + '</div></div></div>').join('');
}

function selectEticsOmitka(system, id) { eticsState[system].omitka = id; renderEticsOmitky(system); vypoctiEtics(system); }

function renderEticsOmitkySokl(system) {
  const data = system === 'baumit' ? eticsBaumit : eticsWeber;
  const prefix = system === 'baumit' ? 'Baumit ' : 'weber.';
  document.getElementById(system + 'OmitkaSokl').innerHTML = data.omitky.map(o => '<option value="' + o.id + '" ' + (eticsState[system].omitkaSokl === o.id ? 'selected' : '') + '>' + prefix + o.nazev + ' (' + (o.cenaKg * o.baleni).toFixed(0) + ' Kč/' + o.baleni + 'kg)</option>').join('');
  document.getElementById(system + 'OmitkaSokl').onchange = function() { eticsState[system].omitkaSokl = this.value; vypoctiEtics(system); };
}

function renderEticsOkenniProfily(system) {
  const profily = [
    { id: 'zakladni', nazev: 'APU lišta základní', cena: 28 },
    { id: 'premium', nazev: 'APU lišta s těsněním', cena: 45 }
  ];
  document.getElementById(system + 'OkenniProfilList').innerHTML = profily.map(p => '<div class="option ' + (eticsState[system].okenniProfil === p.id ? 'active' : '') + '" onclick="selectEticsOkenniProfil(\'' + system + '\',\'' + p.id + '\')"><div class="option-dot"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div><div class="option-text"><div class="option-title">' + p.nazev + '</div><div class="option-desc">' + p.cena + ' Kč/bm</div></div></div>').join('');
}

function selectEticsOkenniProfil(system, id) { eticsState[system].okenniProfil = id; renderEticsOkenniProfily(system); vypoctiEtics(system); }

function vyberHmozdinku(tloustka) {
  const potrebnaDelka = tloustka + 55;
  return eticsHmozdinky.find(h => h.delka >= potrebnaDelka) || eticsHmozdinky[eticsHmozdinky.length - 1];
}

function vypoctiEtics(system) {
  const plocha = parseFloat(document.getElementById(system + 'Plocha').value) || 0;
  const sokl = parseFloat(document.getElementById(system + 'Sokl').value) || 0;
  const obvod = parseFloat(document.getElementById(system + 'Obvod').value) || 0;
  const rohy = parseFloat(document.getElementById(system + 'Rohy').value) || 0;
  const pocetOken = parseInt(document.getElementById(system + 'PocetOken').value) || 0;
  const obvodOken = parseFloat(document.getElementById(system + 'ObvodOken').value) || 0;
  const sirkaOken = parseFloat(document.getElementById(system + 'SirkaOken').value) || 0;
  const rezerva = parseInt(document.getElementById(system + 'Rezerva').value) || 10;
  const hmozdinkyM2 = parseInt(document.getElementById(system + 'HmozdinkyM2').value) || 6;
  const pozarniPasy = document.getElementById(system + 'PozarniPasy').checked;
  const pozarniPasyBm = parseFloat(document.getElementById(system + 'PozarniPasyBm').value) || 0;
  
  if (plocha <= 0) { document.getElementById(system + 'Result').innerHTML = ''; return; }
  
  const data = system === 'baumit' ? eticsBaumit : eticsWeber;
  const state = eticsState[system];
  const prefix = system === 'baumit' ? 'Baumit ' : 'weber.';
  
  const plochaR = plocha * (1 + rezerva / 100);
  const soklR = sokl * (1 + rezerva / 100);
  const celkemPlocha = plochaR + soklR;
  
  // Najdi vybrané produkty
  const allIzolanty = [...eticsIzolanty.eps, ...eticsIzolanty.epsGrey, ...eticsIzolanty.mw];
  const izolant = allIzolanty.find(i => i.id === state.tloustka);
  const xps = eticsIzolanty.xps.find(i => i.id === state.xps);
  const lepidlo = data.lepidla.find(l => l.id === state.lepidlo);
  const sitovina = data.sitoviny.find(s => s.id === state.sitovina);
  const penetrace = data.penetrace.find(p => p.id === state.penetrace);
  const omitka = data.omitky.find(o => o.id === state.omitka);
  const omitkaSokl = data.omitky.find(o => o.id === state.omitkaSokl);
  const hmozdinka = vyberHmozdinku(izolant ? izolant.tloustka : 100);
  
  const polozky = [];
  let celkem = 0;
  
  // 1. IZOLANT FASÁDA
  if (izolant) {
    const cena = plochaR * izolant.cenaM2;
    polozky.push({ nazev: izolant.nazev, detail: plochaR.toFixed(1) + ' m²', cena, kategorie: 'Izolace' });
    celkem += cena;
  }
  
  // 2. XPS SOKL
  if (sokl > 0 && xps) {
    const cena = soklR * xps.cenaM2;
    polozky.push({ nazev: xps.nazev + ' (sokl)', detail: soklR.toFixed(1) + ' m²', cena, kategorie: 'Izolace' });
    celkem += cena;
  }
  
  // 3. POŽÁRNÍ PÁSY MW
  if (pozarniPasy && pozarniPasyBm > 0) {
    const plochaPasu = pozarniPasyBm * 0.2;
    const mwPas = eticsIzolanty.mw.find(m => m.tloustka === (izolant ? izolant.tloustka : 100)) || eticsIzolanty.mw[1];
    const cena = plochaPasu * mwPas.cenaM2 * 1.1;
    polozky.push({ nazev: 'MW požární pás 200mm', detail: plochaPasu.toFixed(1) + ' m² (' + pozarniPasyBm + ' bm)', cena, kategorie: 'Izolace', upozorneni: 'Povinné u h > 12m' });
    celkem += cena;
  }
  
  // 4. LEPIDLO (lepení)
  if (lepidlo) {
    const potreba = celkemPlocha * lepidlo.spotrebaLepeni;
    const baleni = Math.ceil(potreba / lepidlo.baleni);
    const cena = baleni * lepidlo.baleni * lepidlo.cenaKg;
    polozky.push({ nazev: prefix + lepidlo.nazev + ' (lepení)', detail: baleni + '× ' + lepidlo.baleni + 'kg', cena, kategorie: 'Lepidlo' });
    celkem += cena;
  }
  
  // 5. STĚRKA (armování)
  if (lepidlo) {
    const potreba = celkemPlocha * lepidlo.spotrebaSterka;
    const baleni = Math.ceil(potreba / lepidlo.baleni);
    const cena = baleni * lepidlo.baleni * lepidlo.cenaKg;
    polozky.push({ nazev: prefix + lepidlo.nazev + ' (stěrka)', detail: baleni + '× ' + lepidlo.baleni + 'kg', cena, kategorie: 'Lepidlo' });
    celkem += cena;
  }
  
  // 6. SÍŤOVINA
  if (sitovina) {
    const sitPlocha = celkemPlocha * 1.1;
    const cena = sitPlocha * sitovina.cenaM2;
    polozky.push({ nazev: sitovina.nazev, detail: sitPlocha.toFixed(1) + ' m² (vč. přesahů)', cena, kategorie: 'Armování' });
    celkem += cena;
  }
  
  // 7. HMOŽDINKY
  const hmozPocet = Math.ceil(celkemPlocha * hmozdinkyM2);
  const hmozCena = hmozPocet * hmozdinka.cenaKs;
  polozky.push({ nazev: 'EJOT STR-U 2G ' + hmozdinka.delka + ' mm', detail: hmozPocet + ' ks (' + hmozdinkyM2 + ' ks/m²)', cena: hmozCena, kategorie: 'Kotvení' });
  celkem += hmozCena;
  
  // 8. PENETRACE
  if (penetrace) {
    const potreba = celkemPlocha * penetrace.spotreba;
    const baleni = Math.ceil(potreba / penetrace.baleni);
    const cena = baleni * penetrace.baleni * penetrace.cenaKg;
    polozky.push({ nazev: prefix + penetrace.nazev, detail: baleni + '× ' + penetrace.baleni + 'kg', cena, kategorie: 'Penetrace' });
    celkem += cena;
  }
  
  // 9. OMÍTKA FASÁDA
  if (omitka) {
    const potreba = plochaR * omitka.spotreba;
    const baleni = Math.ceil(potreba / omitka.baleni);
    const cena = baleni * omitka.baleni * omitka.cenaKg;
    polozky.push({ nazev: prefix + omitka.nazev, detail: baleni + '× ' + omitka.baleni + 'kg | ' + omitka.typ, cena, kategorie: 'Omítka' });
    celkem += cena;
  }
  
  // 10. OMÍTKA SOKL
  if (sokl > 0 && omitkaSokl) {
    const potreba = soklR * omitkaSokl.spotreba;
    const baleni = Math.ceil(potreba / omitkaSokl.baleni);
    const cena = baleni * omitkaSokl.baleni * omitkaSokl.cenaKg;
    polozky.push({ nazev: prefix + omitkaSokl.nazev + ' (sokl)', detail: baleni + '× ' + omitkaSokl.baleni + 'kg', cena, kategorie: 'Omítka' });
    celkem += cena;
  }
  
  // PROFILY
  // 11. ZAKLÁDACÍ LIŠTA
  if (obvod > 0) {
    const potreba = obvod * 1.05;
    const cena = potreba * eticsProfily.zakladaci.cenaBm;
    polozky.push({ nazev: eticsProfily.zakladaci.nazev + ' (š. ' + (izolant ? izolant.tloustka : 100) + ' mm)', detail: potreba.toFixed(1) + ' bm', cena, kategorie: 'Profily' });
    celkem += cena;
  }
  
  // 12. ROHOVÉ PROFILY
  if (rohy > 0) {
    const potreba = rohy * 1.05;
    const cena = potreba * eticsProfily.rohove.cenaBm;
    polozky.push({ nazev: eticsProfily.rohove.nazev, detail: potreba.toFixed(1) + ' bm', cena, kategorie: 'Profily' });
    celkem += cena;
  }
  
  // 13. OKENNÍ PROFILY
  if (obvodOken > 0) {
    const profil = state.okenniProfil === 'premium' ? eticsProfily.okenniPremium : eticsProfily.okenniZakladni;
    const potreba = obvodOken * 1.05;
    const cena = potreba * profil.cenaBm;
    polozky.push({ nazev: profil.nazev, detail: potreba.toFixed(1) + ' bm', cena, kategorie: 'Profily' });
    celkem += cena;
  }
  
  // 14. OKAPNIČKY
  if (sirkaOken > 0) {
    const potreba = sirkaOken + (pocetOken * 0.2);
    const cena = potreba * eticsProfily.okapnice.cenaBm;
    polozky.push({ nazev: eticsProfily.okapnice.nazev, detail: potreba.toFixed(1) + ' bm', cena, kategorie: 'Profily' });
    celkem += cena;
  }
  
  // 15. PARAPETNÍ PROFILY
  if (sirkaOken > 0) {
    const potreba = sirkaOken * 1.05;
    const cena = potreba * eticsProfily.parapetni.cenaBm;
    polozky.push({ nazev: eticsProfily.parapetni.nazev, detail: potreba.toFixed(1) + ' bm', cena, kategorie: 'Profily' });
    celkem += cena;
  }
  
  document.getElementById(system + 'Result').innerHTML = '<div class="result"><div class="card-title">Kalkulace materiálu</div>' + polozky.map(p => '<div class="result-item"><div class="result-item-info"><div class="result-item-name">' + p.nazev + '</div><div class="result-item-detail">' + p.detail + '</div>' + (p.upozorneni ? '<div style="font-size:10px;color:var(--gold);margin-top:2px;">⚠️ ' + p.upozorneni + '</div>' : '') + '</div><div class="result-item-price">' + formatCena(p.cena) + '</div></div>').join('') + '<div class="result-total"><span class="result-total-label">CELKEM materiál</span><span class="result-total-value">' + formatCena(celkem) + '</span></div><div class="result-per-m2">' + Math.round(celkem / (plocha + sokl)) + ' Kč/m²</div></div>';
}

// === VYTÁPĚNÍ ===
let vytapeniMistnosti = [];
let vytapeniIdCounter = 0;
let vytapeniSystem = null;

function pridatVytapeniMistnost() {
  vytapeniMistnosti.push({ id: vytapeniIdCounter++, nazev: 'Místnost ' + (vytapeniMistnosti.length + 1), plocha: 15, teplota: 20, typ: 'obytna' });
  renderVytapeniMistnosti();
  vypoctiVytapeniZtraty();
}

function odebratVytapeniMistnost(id) {
  vytapeniMistnosti = vytapeniMistnosti.filter(m => m.id !== id);
  renderVytapeniMistnosti();
  vypoctiVytapeniZtraty();
}

function updateVytapeniMistnost(id, pole, hodnota) {
  const m = vytapeniMistnosti.find(x => x.id === id);
  if (m) {
    m[pole] = pole === 'nazev' ? hodnota : parseFloat(hodnota);
    renderVytapeniMistnosti();
    vypoctiVytapeniZtraty();
  }
}

function getTepelnaZtrata(plocha, typ, vnitrniTeplota, deltaT) {
  // Měrná tepelná ztráta W/(m²·K) podle typu místnosti a kvality izolace
  // Pro novostavbu s dobrým zateplením cca 0.8-1.2 W/(m²·K)
  // Pro starší dům cca 1.5-2.5 W/(m²·K)
  const qM2K = { obytna: 1.8, kuchyn: 1.6, loznice: 1.7, koupelna: 2.2, chodba: 1.4 };
  const q = qM2K[typ] || 1.8;
  return Math.round(plocha * q * deltaT);
}

function renderVytapeniMistnosti() {
  const cont = document.getElementById('vytapeniMistnostiList');
  const venkovni = parseFloat(document.getElementById('vytapeniVenkovni').value) || -15;
  const vnitrni = parseFloat(document.getElementById('vytapeniVnitrni').value) || 20;
  const deltaT = vnitrni - venkovni;
  
  if (vytapeniMistnosti.length === 0) {
    cont.innerHTML = '<div style="text-align:center;padding:16px;color:rgba(255,255,255,0.4);font-size:12px;">Přidejte místnosti pro výpočet tepelných ztrát</div>';
    return;
  }
  cont.innerHTML = vytapeniMistnosti.map(m => {
    const mVnitrni = m.typ === 'koupelna' ? 24 : vnitrni;
    const mDeltaT = mVnitrni - venkovni;
    const ztrata = getTepelnaZtrata(m.plocha, m.typ, mVnitrni, mDeltaT);
    return '<div class="mistnost-card' + (m.typ === 'koupelna' ? ' vlhka' : '') + '">' +
      '<div class="mistnost-header"><input class="mistnost-name" value="' + m.nazev + '" onchange="updateVytapeniMistnost(' + m.id + ',\'nazev\',this.value)"><span style="font-weight:600;color:var(--gold-dark);font-size:13px;">' + ztrata + ' W</span><button class="mistnost-remove" onclick="odebratVytapeniMistnost(' + m.id + ')">×</button></div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin-top:6px;">' +
        '<div><label style="font-size:9px;color:rgba(255,255,255,0.4);display:block;">Plocha m²</label><input type="number" style="width:100%;padding:6px;border:1px solid rgba(255,255,255,0.08);border-radius:6px;font-size:12px;" value="' + m.plocha + '" onchange="updateVytapeniMistnost(' + m.id + ',\'plocha\',this.value)"></div>' +
        '<div><label style="font-size:9px;color:rgba(255,255,255,0.4);display:block;">Teplota °C</label><input type="number" style="width:100%;padding:6px;border:1px solid rgba(255,255,255,0.08);border-radius:6px;font-size:12px;" value="' + m.teplota + '" onchange="updateVytapeniMistnost(' + m.id + ',\'teplota\',this.value)"></div>' +
        '<div><label style="font-size:9px;color:rgba(255,255,255,0.4);display:block;">Typ</label><select style="width:100%;padding:6px;border:1px solid rgba(255,255,255,0.08);border-radius:6px;font-size:11px;" onchange="updateVytapeniMistnost(' + m.id + ',\'typ\',this.value)">' +
          '<option value="obytna"' + (m.typ === 'obytna' ? ' selected' : '') + '>Obytná</option>' +
          '<option value="kuchyn"' + (m.typ === 'kuchyn' ? ' selected' : '') + '>Kuchyň</option>' +
          '<option value="loznice"' + (m.typ === 'loznice' ? ' selected' : '') + '>Ložnice</option>' +
          '<option value="koupelna"' + (m.typ === 'koupelna' ? ' selected' : '') + '>Koupelna</option>' +
          '<option value="chodba"' + (m.typ === 'chodba' ? ' selected' : '') + '>Chodba</option>' +
        '</select></div>' +
      '</div>' +
    '</div>';
  }).join('');
}

function vypoctiVytapeniZtraty() {
  const venkovni = parseFloat(document.getElementById('vytapeniVenkovni').value) || -15;
  const vnitrni = parseFloat(document.getElementById('vytapeniVnitrni').value) || 20;
  
  let celkem = 0;
  vytapeniMistnosti.forEach(m => {
    const mVnitrni = m.typ === 'koupelna' ? 24 : vnitrni;
    const deltaT = mVnitrni - venkovni;
    celkem += getTepelnaZtrata(m.plocha, m.typ, mVnitrni, deltaT);
  });
  const sRezerva = Math.round(celkem * 1.1);
  document.getElementById('vytapeniPozadovanyVykon').innerHTML = '<span style="font-size:13px;font-weight:600;color:#fff;">Požadovaný výkon (vč. 10% rezervy)</span><span style="font-size:20px;font-weight:700;color:#fff;">' + (sRezerva / 1000).toFixed(2) + ' kW</span>';
  renderVytapeniMistnosti();
  if (vytapeniSystem) vypoctiVytapeniSystem();
}

function selectVytapeniSystem(system) {
  vytapeniSystem = system;
  document.getElementById('btnRadiatory').classList.toggle('active', system === 'radiatory');
  document.getElementById('btnPodlahove').classList.toggle('active', system === 'podlahove');
  document.getElementById('btnInfra').classList.toggle('active', system === 'infra');
  document.getElementById('vytapeniRadiatoryConfig').style.display = system === 'radiatory' ? 'block' : 'none';
  document.getElementById('vytapeniPodlahoveConfig').style.display = system === 'podlahove' ? 'block' : 'none';
  document.getElementById('vytapeniInfraConfig').style.display = system === 'infra' ? 'block' : 'none';
  vypoctiVytapeniSystem();
}

function updateInfraPrice() {
  const sel = document.getElementById('infraModel');
  const opt = sel.options[sel.selectedIndex];
  if (opt.dataset.price) document.getElementById('infraCena').value = opt.dataset.price;
}

function vypoctiVytapeniSystem() {
  if (!vytapeniSystem || vytapeniMistnosti.length === 0) {
    document.getElementById('vytapeniNakupniSeznam').innerHTML = '';
    return;
  }
  
  const venkovni = parseFloat(document.getElementById('vytapeniVenkovni').value) || -15;
  const vnitrni = parseFloat(document.getElementById('vytapeniVnitrni').value) || 20;
  
  let polozky = [];
  let celkem = 0;
  
  if (vytapeniSystem === 'radiatory') {
    const vyska = parseInt(document.getElementById('radiatorVyska').value);
    const typ = document.getElementById('radiatorTyp').value;
    const privod = parseFloat(document.getElementById('radPrivod').value);
    const vrat = parseFloat(document.getElementById('radVrat').value);
    
    const deltaT_std = 49.83;
    const deltaT_actual = (privod - vrat) / Math.log((privod - vnitrni) / (vrat - vnitrni));
    const tempFactor = Math.pow(deltaT_actual / deltaT_std, 1.3);
    const powerPerMeter = { '11': { 300: 298, 400: 397, 500: 497, 600: 596, 900: 894 }, '21s': { 300: 447, 400: 596, 500: 745, 600: 894, 900: 1341 }, '22': { 300: 533, 400: 710, 500: 888, 600: 1065, 900: 1598 }, '33': { 300: 777, 400: 1036, 500: 1295, 600: 1554, 900: 2331 } };
    const basePower = (powerPerMeter[typ] && powerPerMeter[typ][vyska]) || 1065;
    const actualPowerPerMeter = basePower * tempFactor;
    
    vytapeniMistnosti.forEach(m => {
      const mVnitrni = m.typ === 'koupelna' ? 24 : vnitrni;
      const deltaT = mVnitrni - venkovni;
      const potreba = getTepelnaZtrata(m.plocha, m.typ, mVnitrni, deltaT) * 1.1;
      const delka = Math.ceil((potreba / actualPowerPerMeter) * 100) * 10;
      const vykon = Math.round((delka / 1000) * actualPowerPerMeter);
      const cena = Math.round(delka / 100) * 800;
      polozky.push({ nazev: 'Radiátor ' + typ.toUpperCase() + '/' + vyska + ' – ' + delka + 'mm', detail: m.nazev + ' | ' + vykon + ' W', cena });
      celkem += cena;
    });
    
  } else if (vytapeniSystem === 'podlahove') {
    const roztec = parseInt(document.getElementById('podlahaRoztec').value);
    const prumer = document.getElementById('podlahaPrumer').value;
    
    let celkemPotrubi = 0;
    vytapeniMistnosti.forEach(m => {
      const aktivni = m.plocha * 0.85;
      const potrubi = Math.round(aktivni / (roztec / 1000));
      celkemPotrubi += potrubi;
    });
    
    const okruhy = Math.ceil(celkemPotrubi / 100);
    const cenaPotrubi = celkemPotrubi * 25;
    const cenaDeski = vytapeniMistnosti.reduce((s, m) => s + m.plocha, 0) * 180;
    const cenaRozdelovac = okruhy <= 6 ? 4500 : (okruhy <= 9 ? 5800 : 7200);
    const cenaSkrin = 2500;
    
    polozky.push({ nazev: 'Potrubí PE-Xa ' + prumer + '×2 mm', detail: celkemPotrubi + ' m (' + okruhy + ' okruhů)', cena: cenaPotrubi });
    polozky.push({ nazev: 'Systémová deska s výstupky', detail: Math.round(vytapeniMistnosti.reduce((s, m) => s + m.plocha, 0)) + ' m²', cena: cenaDeski });
    polozky.push({ nazev: 'Rozdělovač ' + okruhy + ' okruhů', detail: 'Nerezový s průtokoměry', cena: cenaRozdelovac });
    polozky.push({ nazev: 'Skříň pod omítku', detail: 'Pro rozdělovač', cena: cenaSkrin });
    celkem = cenaPotrubi + cenaDeski + cenaRozdelovac + cenaSkrin;
    
  } else if (vytapeniSystem === 'infra') {
    const model = document.getElementById('infraModel');
    const powerBm = parseInt(model.value);
    const opt = model.options[model.selectedIndex];
    const width = parseInt(opt.dataset.width || 100) / 100;
    const pokryti = parseInt(document.getElementById('infraPokryti').value) / 100;
    const cenaFolieBm = parseFloat(document.getElementById('infraCena').value);
    const termostatCena = parseInt(document.getElementById('infraTermostat').value);
    const termostatNazev = document.getElementById('infraTermostat').options[document.getElementById('infraTermostat').selectedIndex].dataset.name;
    
    let celkemFolie = 0;
    vytapeniMistnosti.forEach(m => {
      const aktivni = m.plocha * pokryti;
      const delka = Math.ceil(aktivni / width);
      const vykon = Math.round(delka * powerBm);
      celkemFolie += delka;
      polozky.push({ nazev: 'Topná fólie – ' + m.nazev, detail: delka + ' bm | ' + vykon + ' W', cena: delka * cenaFolieBm });
      celkem += delka * cenaFolieBm;
    });
    
    const pocetTermostatu = vytapeniMistnosti.length;
    const termostatyCena = pocetTermostatu * termostatCena;
    polozky.push({ nazev: 'Termostat ' + termostatNazev, detail: pocetTermostatu + '× po ' + termostatCena + ' Kč', cena: termostatyCena });
    celkem += termostatyCena;
    
    const sadyCena = pocetTermostatu * 2 * 65;
    polozky.push({ nazev: 'Připojovací sady', detail: (pocetTermostatu * 2) + '× svorky + izolace', cena: sadyCena });
    celkem += sadyCena;
    
    const reflexniCena = Math.round(vytapeniMistnosti.reduce((s, m) => s + m.plocha * pokryti, 0)) * 45;
    polozky.push({ nazev: 'Reflexní podložka', detail: Math.round(vytapeniMistnosti.reduce((s, m) => s + m.plocha * pokryti, 0)) + ' m²', cena: reflexniCena });
    celkem += reflexniCena;
  }
  
  document.getElementById('vytapeniNakupniSeznam').innerHTML = polozky.length ? '<div class="result"><div class="card-title">Nákupní seznam</div>' + polozky.map(p => '<div class="result-item"><div class="result-item-info"><div class="result-item-name">' + p.nazev + '</div><div class="result-item-detail">' + p.detail + '</div></div><div class="result-item-price">' + formatCena(p.cena) + '</div></div>').join('') + '<div class="result-total"><span class="result-total-label">CELKEM materiál</span><span class="result-total-value">' + formatCena(celkem) + '</span></div></div>' : '';
}

// === VODA A ODPAD ===
const vodaTypyVyvodu = {
  umyvadlo: { nazev: 'Umyvadlo', sv: true, tv: true, dimVoda: '16x2', dimOdpad: 'DN40' },
  wc: { nazev: 'WC', sv: true, tv: false, dimVoda: '16x2', dimOdpad: 'DN110' },
  sprcha: { nazev: 'Sprcha', sv: true, tv: true, dimVoda: '20x2', dimOdpad: 'DN50' },
  vana: { nazev: 'Vana', sv: true, tv: true, dimVoda: '20x2', dimOdpad: 'DN50' },
  drez: { nazev: 'Dřez', sv: true, tv: true, dimVoda: '20x2', dimOdpad: 'DN50' },
  pracka: { nazev: 'Pračka', sv: true, tv: false, dimVoda: '20x2', dimOdpad: 'DN50' },
  mycka: { nazev: 'Myčka', sv: true, tv: false, dimVoda: '16x2', dimOdpad: 'DN50' },
  zahrada: { nazev: 'Zahrada', sv: true, tv: false, dimVoda: '20x2', dimOdpad: null }
};

const vodaAlpex = { '16x2': { cena: 35, izolace: 18 }, '20x2': { cena: 57, izolace: 22 }, '26x3': { cena: 110, izolace: 28 } };
const vodaHT = { DN40: 38, DN50: 48, DN75: 79, DN110: 115 };
const vodaKGCeny = { DN110: 125, DN125: 155, DN160: 195 };
const vodaFitinky = { '16': 85, '20': 95, '26': 125 };
const vodaRozdelovace = { 4: 2850, 5: 3150, 6: 3450, 7: 3750, 8: 4050, 9: 4350, 10: 4650, 11: 4950, 12: 5250 };
const vodaBojlery = { 50: 5500, 80: 6200, 100: 6800, 125: 7500, 160: 8500, 200: 10500 };
const vodaCerpadla = { zadne: 0, 'UP15-14B': 3400, 'UP15-14BA': 5500 };
const vodaDrtice = { zadny: 0, M55: 7500, M65: 9900, M100: 14500, M200: 17800 };

let vodaVyvody = [];
let vodaVyvodId = 0;

function pridatVodaVyvod(typ) {
  const def = vodaTypyVyvodu[typ];
  vodaVyvody.push({ id: vodaVyvodId++, typ, nazev: def.nazev + ' ' + (vodaVyvody.filter(v => v.typ === typ).length + 1), delkaSV: def.sv ? 8 : 0, delkaTV: def.tv ? 8 : 0, delkaOdpad: def.dimOdpad ? 2 : 0 });
  renderVodaVyvody();
  vypoctiVoda();
}

function odebratVodaVyvod(id) {
  vodaVyvody = vodaVyvody.filter(v => v.id !== id);
  renderVodaVyvody();
  vypoctiVoda();
}

function updateVodaVyvod(id, pole, hodnota) {
  const v = vodaVyvody.find(x => x.id === id);
  if (v) { v[pole] = pole === 'nazev' ? hodnota : Math.max(0, parseFloat(hodnota) || 0); vypoctiVoda(); }
}

function renderVodaVyvody() {
  const cont = document.getElementById('vodaVyvodyList');
  if (vodaVyvody.length === 0) {
    cont.innerHTML = '<div style="text-align:center;padding:16px;color:rgba(255,255,255,0.4);font-size:12px;">Přidejte vývody pomocí tlačítek níže</div>';
    return;
  }
  cont.innerHTML = vodaVyvody.map(v => {
    const def = vodaTypyVyvodu[v.typ];
    return '<div class="vyvod-card ' + (def.tv ? 'sv-tv' : 'sv-only') + '">' +
      '<div class="vyvod-header"><input class="vyvod-name" value="' + v.nazev + '" onchange="updateVodaVyvod(' + v.id + ',\'nazev\',this.value)"><span class="vyvod-typ">' + def.nazev + '</span><button class="mistnost-remove" onclick="odebratVodaVyvod(' + v.id + ')">×</button></div>' +
      '<div class="vyvod-inputs">' +
        '<div class="vyvod-input"><label>SV (m)</label><input type="number" value="' + v.delkaSV + '" ' + (def.sv ? 'onchange="updateVodaVyvod(' + v.id + ',\'delkaSV\',this.value)"' : 'disabled') + '></div>' +
        '<div class="vyvod-input"><label>TV (m)</label><input type="number" value="' + v.delkaTV + '" ' + (def.tv ? 'onchange="updateVodaVyvod(' + v.id + ',\'delkaTV\',this.value)"' : 'disabled') + '></div>' +
        '<div class="vyvod-input"><label>Odpad (m)</label><input type="number" value="' + v.delkaOdpad + '" ' + (def.dimOdpad ? 'onchange="updateVodaVyvod(' + v.id + ',\'delkaOdpad\',this.value)"' : 'disabled') + '></div>' +
      '</div>' +
    '</div>';
  }).join('');
}

function toggleVodaCirculace() {
  const cerp = document.getElementById('vodaCerpadlo').value;
  document.getElementById('vodaCirculaceRow').style.display = cerp === 'zadne' ? 'none' : 'block';
}

function vypoctiVoda() {
  if (vodaVyvody.length === 0) {
    document.getElementById('vodaSumVoda').textContent = '0 Kč';
    document.getElementById('vodaSumOdpad').textContent = '0 Kč';
    document.getElementById('vodaSumCelkem').textContent = '0 Kč';
    document.getElementById('vodaNakupniSeznam').innerHTML = '';
    return;
  }
  
  let polozkyVoda = [], polozkyOdpad = [];
  let cenaVoda = 0, cenaOdpad = 0;
  
  // Součty potrubí
  const souctyVoda = { '16x2': { sv: 0, tv: 0 }, '20x2': { sv: 0, tv: 0 } };
  const souctyOdpad = { DN40: 0, DN50: 0, DN110: 0 };
  let pocetSV = 0, pocetTV = 0;
  
  vodaVyvody.forEach(v => {
    const def = vodaTypyVyvodu[v.typ];
    if (def.sv && v.delkaSV > 0) { souctyVoda[def.dimVoda].sv += v.delkaSV; pocetSV++; }
    if (def.tv && v.delkaTV > 0) { souctyVoda[def.dimVoda].tv += v.delkaTV; pocetTV++; }
    if (def.dimOdpad && v.delkaOdpad > 0) { souctyOdpad[def.dimOdpad] += v.delkaOdpad; }
  });
  
  // Rozdělovače
  if (pocetSV > 0) {
    const vel = Math.min(Math.max(pocetSV, 4), 12);
    const c = vodaRozdelovace[vel];
    polozkyVoda.push({ nazev: 'Rozdělovač SV ' + vel + '× (DEK nerez)', detail: '1 ks', cena: c });
    cenaVoda += c;
  }
  if (pocetTV > 0) {
    const vel = Math.min(Math.max(pocetTV, 4), 12);
    const c = vodaRozdelovace[vel];
    polozkyVoda.push({ nazev: 'Rozdělovač TV ' + vel + '× (DEK nerez)', detail: '1 ks', cena: c });
    cenaVoda += c;
  }
  
  // Potrubí ALPEX
  Object.entries(souctyVoda).forEach(([dim, d]) => {
    const t = vodaAlpex[dim];
    if (d.sv > 0) {
      const c = Math.ceil(d.sv) * (t.cena + t.izolace);
      polozkyVoda.push({ nazev: 'ALPEX ' + dim + ' + izolace (SV)', detail: Math.ceil(d.sv) + ' m', cena: c });
      cenaVoda += c;
    }
    if (d.tv > 0) {
      const c = Math.ceil(d.tv) * (t.cena + t.izolace);
      polozkyVoda.push({ nazev: 'ALPEX ' + dim + ' + izolace (TV)', detail: Math.ceil(d.tv) + ' m', cena: c });
      cenaVoda += c;
    }
  });
  
  // Přívody
  const privodSV = parseFloat(document.getElementById('vodaPrivodSV').value) || 0;
  const privodTV = parseFloat(document.getElementById('vodaPrivodTV').value) || 0;
  const t26 = vodaAlpex['26x3'];
  if (privodSV > 0) {
    const c = privodSV * (t26.cena + t26.izolace);
    polozkyVoda.push({ nazev: 'ALPEX 26×3 + izo (přívod SV)', detail: privodSV + ' m', cena: c });
    cenaVoda += c;
  }
  if (privodTV > 0) {
    const c = privodTV * (t26.cena + t26.izolace);
    polozkyVoda.push({ nazev: 'ALPEX 26×3 + izo (přívod TV)', detail: privodTV + ' m', cena: c });
    cenaVoda += c;
  }
  
  // Fitinky
  const f16 = vodaVyvody.filter(v => vodaTypyVyvodu[v.typ].dimVoda === '16x2' && (v.delkaSV > 0 || v.delkaTV > 0)).length * 2;
  const f20 = vodaVyvody.filter(v => vodaTypyVyvodu[v.typ].dimVoda === '20x2' && (v.delkaSV > 0 || v.delkaTV > 0)).length * 2;
  if (f16 > 0) { polozkyVoda.push({ nazev: 'Press fitink 16', detail: f16 + ' ks', cena: f16 * vodaFitinky['16'] }); cenaVoda += f16 * vodaFitinky['16']; }
  if (f20 > 0) { polozkyVoda.push({ nazev: 'Press fitink 20', detail: f20 + ' ks', cena: f20 * vodaFitinky['20'] }); cenaVoda += f20 * vodaFitinky['20']; }
  polozkyVoda.push({ nazev: 'Press fitink 26 (přívody)', detail: '4 ks', cena: 4 * vodaFitinky['26'] }); cenaVoda += 4 * vodaFitinky['26'];
  
  // Bojler
  const bojlerLitru = parseInt(document.getElementById('vodaBojler').value);
  const bojlerCena = vodaBojlery[bojlerLitru];
  polozkyVoda.push({ nazev: 'Dražice OKCE ' + bojlerLitru, detail: '1 ks', cena: bojlerCena }); cenaVoda += bojlerCena;
  
  // Cirkulace
  const cerpadloTyp = document.getElementById('vodaCerpadlo').value;
  const cerpadloCena = vodaCerpadla[cerpadloTyp];
  if (cerpadloCena > 0) {
    polozkyVoda.push({ nazev: 'Grundfos ' + cerpadloTyp, detail: '1 ks', cena: cerpadloCena }); cenaVoda += cerpadloCena;
    const circDel = parseFloat(document.getElementById('vodaCirculace').value) || 0;
    if (circDel > 0) {
      const c = circDel * (vodaAlpex['16x2'].cena + vodaAlpex['16x2'].izolace);
      polozkyVoda.push({ nazev: 'ALPEX 16×2 + izo (cirkulace)', detail: circDel + ' m', cena: c }); cenaVoda += c;
    }
  }
  
  // Příslušenství voda
  [{ n: 'Pojistný ventil', c: 450 }, { n: 'Expanzka 8l', c: 850 }, { n: 'Vodoměr + kohouty', c: 1200 }, { n: 'Filtr', c: 650 }, { n: 'Redukční ventil', c: 1100 }, { n: 'Skříně rozdělovačů 2×', c: 3700 }].forEach(p => {
    polozkyVoda.push({ nazev: p.n, detail: '1 ks', cena: p.c }); cenaVoda += p.c;
  });
  
  // ODPAD - přípojky
  Object.entries(souctyOdpad).forEach(([dn, del]) => {
    if (del > 0) {
      const c = Math.ceil(del) * vodaHT[dn];
      polozkyOdpad.push({ nazev: 'HT ' + dn + ' (přípojky)', detail: Math.ceil(del) + ' m', cena: c }); cenaOdpad += c;
    }
  });
  
  // Ležatá
  const ht75 = parseFloat(document.getElementById('vodaHT75').value) || 0;
  const ht110 = parseFloat(document.getElementById('vodaHT110').value) || 0;
  if (ht75 > 0) { polozkyOdpad.push({ nazev: 'HT DN75 (ležatá)', detail: ht75 + ' m', cena: ht75 * vodaHT.DN75 }); cenaOdpad += ht75 * vodaHT.DN75; }
  if (ht110 > 0) { polozkyOdpad.push({ nazev: 'HT DN110 (ležatá)', detail: ht110 + ' m', cena: ht110 * vodaHT.DN110 }); cenaOdpad += ht110 * vodaHT.DN110; }
  
  // Tvarovky HT
  const pocetPrip = vodaVyvody.filter(v => vodaTypyVyvodu[v.typ].dimOdpad && v.delkaOdpad > 0).length;
  const pocetWC = vodaVyvody.filter(v => v.typ === 'wc' && v.delkaOdpad > 0).length;
  const cistici = parseInt(document.getElementById('vodaCistici').value) || 0;
  const vetrani = parseInt(document.getElementById('vodaVetrani').value) || 0;
  
  let tvarovkyCena = 0;
  tvarovkyCena += Math.ceil(pocetPrip * 0.5) * 38; // kolena DN50
  tvarovkyCena += Math.ceil(ht110 / 3) * 62; // kolena 87 DN110
  tvarovkyCena += Math.ceil(ht110 / 4) * 55; // kolena 45 DN110
  tvarovkyCena += Math.ceil(pocetPrip * 0.4) * 72; // odbočky DN75/50
  tvarovkyCena += Math.ceil(pocetPrip * 0.3) * 82; // odbočky DN110/50
  tvarovkyCena += pocetWC * 98; // odbočky DN110/110
  if (ht75 > 0) tvarovkyCena += 2 * 62; // redukce
  tvarovkyCena += cistici * 195;
  tvarovkyCena += vetrani * 285;
  
  polozkyOdpad.push({ nazev: 'HT tvarovky (odhad)', detail: 'kolena, odbočky, redukce', cena: tvarovkyCena }); cenaOdpad += tvarovkyCena;
  
  // Venkovní KG
  const kgDel = parseFloat(document.getElementById('vodaKG').value) || 0;
  const kgDim = document.getElementById('vodaKGDim').value;
  const sachty = parseInt(document.getElementById('vodaSachty').value) || 0;
  
  if (kgDel > 0) {
    const c = kgDel * vodaKGCeny[kgDim];
    polozkyOdpad.push({ nazev: 'KG ' + kgDim + ' (venkovní)', detail: kgDel + ' m', cena: c }); cenaOdpad += c;
    const kgTvar = Math.ceil(kgDel / 6) * 2 * 95;
    polozkyOdpad.push({ nazev: 'KG tvarovky (odhad)', detail: Math.ceil(kgDel / 6) * 2 + ' ks', cena: kgTvar }); cenaOdpad += kgTvar;
  }
  if (sachty > 0) { polozkyOdpad.push({ nazev: 'Revizní šachta DN400', detail: sachty + ' ks', cena: sachty * 2500 }); cenaOdpad += sachty * 2500; }
  
  // Drtič
  const drticTyp = document.getElementById('vodaDrtic').value;
  const drticCena = vodaDrtice[drticTyp];
  if (drticCena > 0) { polozkyOdpad.push({ nazev: 'InSinkErator ' + drticTyp, detail: '1 ks', cena: drticCena }); cenaOdpad += drticCena; }
  
  // Souhrn
  document.getElementById('vodaSumVoda').textContent = formatCena(Math.round(cenaVoda));
  document.getElementById('vodaSumOdpad').textContent = formatCena(Math.round(cenaOdpad));
  document.getElementById('vodaSumCelkem').textContent = formatCena(Math.round(cenaVoda + cenaOdpad));
  
  // Nákupní seznam
  const vsechnyPolozky = [...polozkyVoda.map(p => ({...p, sekce: 'voda'})), ...polozkyOdpad.map(p => ({...p, sekce: 'odpad'}))];
  
  let html = '<div class="result"><div class="card-title">Nákupní seznam - Voda</div>';
  html += polozkyVoda.map(p => '<div class="result-item"><div class="result-item-info"><div class="result-item-name">' + p.nazev + '</div><div class="result-item-detail">' + p.detail + '</div></div><div class="result-item-price" style="color:#3b82f6;">' + formatCena(p.cena) + '</div></div>').join('');
  html += '<div class="result-total" style="background:linear-gradient(135deg, #3b82f6, #1d4ed8);"><span class="result-total-label">Voda celkem</span><span class="result-total-value">' + formatCena(Math.round(cenaVoda)) + '</span></div></div>';
  
  html += '<div class="result" style="margin-top:12px;"><div class="card-title">Nákupní seznam - Odpad</div>';
  html += polozkyOdpad.map(p => '<div class="result-item"><div class="result-item-info"><div class="result-item-name">' + p.nazev + '</div><div class="result-item-detail">' + p.detail + '</div></div><div class="result-item-price" style="color:#f59e0b;">' + formatCena(p.cena) + '</div></div>').join('');
  html += '<div class="result-total" style="background:linear-gradient(135deg, #f59e0b, #d97706);"><span class="result-total-label">Odpad celkem</span><span class="result-total-value">' + formatCena(Math.round(cenaOdpad)) + '</span></div></div>';
  
  document.getElementById('vodaNakupniSeznam').innerHTML = html;
}

// === KLIMATIZACE ===
const klimaJednotkyLG = [
  { name: 'LG Standard S09EC', power: 2.5, seer: 6.1, scop: 4.0, price: 22000, series: 'Standard' },
  { name: 'LG Standard S12EC', power: 3.5, seer: 6.1, scop: 4.0, price: 25000, series: 'Standard' },
  { name: 'LG Standard S18EC', power: 5.0, seer: 6.1, scop: 4.0, price: 32000, series: 'Standard' },
  { name: 'LG Standard S24EC', power: 6.6, seer: 6.1, scop: 4.0, price: 38000, series: 'Standard' },
  { name: 'LG Standard Plus PC09SC', power: 2.5, seer: 6.6, scop: 4.0, price: 27000, series: 'Standard Plus' },
  { name: 'LG Standard Plus PC12SC', power: 3.5, seer: 6.6, scop: 4.0, price: 29000, series: 'Standard Plus' },
  { name: 'LG Artcool Mirror AC09BK', power: 2.5, seer: 7.0, scop: 4.0, price: 35000, series: 'Artcool Mirror' },
  { name: 'LG Artcool Mirror AC12BK', power: 3.5, seer: 6.6, scop: 4.0, price: 38000, series: 'Artcool Mirror' },
  { name: 'LG Deluxe DC09RK', power: 2.5, seer: 7.0, scop: 4.6, price: 33000, series: 'Deluxe' },
  { name: 'LG Deluxe DC12RK', power: 3.5, seer: 7.0, scop: 4.6, price: 36000, series: 'Deluxe' },
];

let klimaMistnosti = [];
let klimaMistnostId = 0;
let klimaOrient = 'S';

function pridatKlimaMistnost() {
  klimaMistnosti.push({ id: klimaMistnostId++, nazev: 'Místnost ' + (klimaMistnosti.length + 1), plocha: 20, vyska: 2.7 });
  renderKlimaMistnosti();
  vypoctiKlima();
}

function odebratKlimaMistnost(id) {
  klimaMistnosti = klimaMistnosti.filter(m => m.id !== id);
  renderKlimaMistnosti();
  vypoctiKlima();
}

function updateKlimaMistnost(id, pole, hodnota) {
  const m = klimaMistnosti.find(x => x.id === id);
  if (m) { m[pole] = pole === 'nazev' ? hodnota : parseFloat(hodnota) || 0; vypoctiKlima(); }
}

function setKlimaOrient(dir) {
  klimaOrient = dir;
  document.querySelectorAll('.klima-orient').forEach(btn => btn.classList.toggle('active', btn.dataset.dir === dir));
  vypoctiKlima();
}

function renderKlimaMistnosti() {
  const cont = document.getElementById('klimaMistnostiList');
  if (klimaMistnosti.length === 0) {
    cont.innerHTML = '<div style="text-align:center;padding:16px;color:rgba(255,255,255,0.4);font-size:12px;">Přidejte místnosti pro chlazení</div>';
    return;
  }
  cont.innerHTML = klimaMistnosti.map(m => 
    '<div class="klima-mistnost">' +
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">' +
        '<input style="border:none;background:transparent;font-weight:500;font-size:12px;flex:1;" value="' + m.nazev + '" onchange="updateKlimaMistnost(' + m.id + ',\'nazev\',this.value)">' +
        '<span style="font-weight:600;color:#06b6d4;font-size:12px;margin-right:8px;" id="klimaZatez' + m.id + '">0 W</span>' +
        '<button class="mistnost-remove" onclick="odebratKlimaMistnost(' + m.id + ')">×</button>' +
      '</div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">' +
        '<div><label style="font-size:9px;color:rgba(255,255,255,0.4);">Plocha m²</label><input type="number" style="width:100%;padding:6px;border:1px solid rgba(255,255,255,0.08);border-radius:6px;font-size:12px;" value="' + m.plocha + '" onchange="updateKlimaMistnost(' + m.id + ',\'plocha\',this.value)"></div>' +
        '<div><label style="font-size:9px;color:rgba(255,255,255,0.4);">Výška m</label><input type="number" style="width:100%;padding:6px;border:1px solid rgba(255,255,255,0.08);border-radius:6px;font-size:12px;" value="' + m.vyska + '" step="0.1" onchange="updateKlimaMistnost(' + m.id + ',\'vyska\',this.value)"></div>' +
      '</div>' +
    '</div>'
  ).join('');
}

function vypoctiKlima() {
  if (klimaMistnosti.length === 0) {
    document.getElementById('klimaSumVykon').textContent = '0 kW';
    document.getElementById('klimaSumNaklady').textContent = '0 Kč';
    document.getElementById('klimaJednotky').innerHTML = '<div style="text-align:center;padding:16px;color:rgba(255,255,255,0.4);font-size:12px;">Přidejte místnosti</div>';
    return;
  }
  
  const venkovni = parseFloat(document.getElementById('klimaVenkovni').value) || 32;
  const vnitrni = parseFloat(document.getElementById('klimaVnitrni').value) || 24;
  const okna = parseFloat(document.getElementById('klimaOkna').value) || 8;
  const zaskleni = parseFloat(document.getElementById('klimaZaskleni').value) || 0.65;
  const stineni = parseFloat(document.getElementById('klimaStineni').value) || 0.7;
  const osoby = parseFloat(document.getElementById('klimaOsoby').value) || 4;
  const cenaEl = parseFloat(document.getElementById('klimaCenaEl').value) || 4.5;
  const hodiny = parseFloat(document.getElementById('klimaHodiny').value) || 600;
  
  const solarRadiation = { N: 150, E: 450, S: 350, W: 500 };
  const totalPlocha = klimaMistnosti.reduce((s, m) => s + m.plocha, 0);
  
  let totalZatez = 0;
  klimaMistnosti.forEach(m => {
    const roomOkna = okna * (m.plocha / totalPlocha);
    const solarGain = roomOkna * solarRadiation[klimaOrient] * zaskleni * stineni;
    const transmissionGain = m.plocha * 1.5 * (venkovni - vnitrni);
    const internalGains = (osoby * (m.plocha / totalPlocha)) * 100 + 10 * m.plocha;
    const ventilationGain = m.plocha * m.vyska * 0.5 * 0.34 * (venkovni - vnitrni);
    m.zatez = Math.round(solarGain + transmissionGain + internalGains + ventilationGain);
    totalZatez += m.zatez;
    const el = document.getElementById('klimaZatez' + m.id);
    if (el) el.textContent = m.zatez + ' W';
  });
  
  const totalKw = totalZatez / 1000;
  const vhodne = klimaJednotkyLG.filter(u => u.power >= totalKw * 0.85).sort((a, b) => a.power - b.power).slice(0, 3);
  const seer = vhodne.length > 0 ? vhodne[0].seer : 6.1;
  const prikon = totalKw / seer;
  const spotrebaRok = prikon * hodiny * 0.6;
  const nakladyRok = Math.round(spotrebaRok * cenaEl);
  
  document.getElementById('klimaSumVykon').textContent = totalKw.toFixed(2) + ' kW';
  document.getElementById('klimaSumNaklady').textContent = formatCena(nakladyRok) + '/rok';
  
  document.getElementById('klimaJednotky').innerHTML = vhodne.map((u, i) => 
    '<div class="klima-jednotka' + (i === 0 ? ' doporucena' : '') + '">' +
      '<div class="klima-jednotka-header">' +
        '<span class="klima-jednotka-name">' + u.name + '</span>' +
        (i === 0 ? '<span class="klima-jednotka-badge">Doporučeno</span>' : '') +
      '</div>' +
      '<div style="font-size:9px;color:rgba(255,255,255,0.4);margin-bottom:6px;">Řada: ' + u.series + '</div>' +
      '<div class="klima-jednotka-specs">' +
        '<div class="klima-spec"><div class="klima-spec-label">Chlazení</div><div class="klima-spec-value">' + u.power + ' kW</div></div>' +
        '<div class="klima-spec"><div class="klima-spec-label">SEER</div><div class="klima-spec-value">' + u.seer + '</div></div>' +
        '<div class="klima-spec"><div class="klima-spec-label">SCOP</div><div class="klima-spec-value">' + u.scop + '</div></div>' +
      '</div>' +
      '<div class="klima-jednotka-cena">od ' + (u.price/1000).toFixed(0) + ' 000 Kč</div>' +
    '</div>'
  ).join('');
}

// === SDK RIGIPS ===
const sdkTypy = [
  { id: 'w111', nazev: 'W111 - Jednoducha (1x CW + 1x opla)', popis: 'Jednoducha pricka, jedna vrstva desek z kazde strany', profilSirka: [50, 75, 100], cwNaM2: 0.7, uwNaM2: 0.7, desekNaM2: 2, sroubNaM2: 14, rw: '42-48 dB' },
  { id: 'w112', nazev: 'W112 - Dvojita opla (1x CW + 2x opla)', popis: 'Pricka se dvema vrstvami desek z kazde strany, vyssi zvukova izolace', profilSirka: [50, 75, 100], cwNaM2: 0.7, uwNaM2: 0.7, desekNaM2: 4, sroubNaM2: 30, rw: '52-58 dB' },
  { id: 'w115', nazev: 'W115 - Dvojity rast (2x CW)', popis: 'Dvojity rast pro maximalni zvukovou izolaci a vyssi vysky', profilSirka: [50, 75], cwNaM2: 1.4, uwNaM2: 1.4, desekNaM2: 2, sroubNaM2: 14, rw: '56-62 dB' }
];

const sdkDesky = [
  { id: 'rb', nazev: 'RB 12.5mm (standard)', popis: 'Standardni deska pro suche prostory', tl: 12.5, cenaM2: 95, hmotnost: 9.5 },
  { id: 'rbi', nazev: 'RBI 12.5mm (impregnov.)', popis: 'Impregnova deska pro vlhke prostory (koupelna, kuchyn)', tl: 12.5, cenaM2: 115, hmotnost: 9.8 },
  { id: 'rf', nazev: 'RF 12.5mm (pozarni)', popis: 'Pozarne odolna deska, trida A2-s1,d0', tl: 12.5, cenaM2: 125, hmotnost: 12.5 },
  { id: 'rfi', nazev: 'RFI 12.5mm (pozar+vlhk)', popis: 'Pozarne odolna a impregnova', tl: 12.5, cenaM2: 145, hmotnost: 12.5 },
  { id: 'ma', nazev: 'MA 12.5mm (akusticka)', popis: 'Zvukove izolacni deska Rigips Habito', tl: 12.5, cenaM2: 165, hmotnost: 12 },
  { id: 'rb15', nazev: 'RB 15mm (ztuzena)', popis: 'Tlustsi deska pro vyssi mechanicke zatizeni', tl: 15, cenaM2: 115, hmotnost: 12 }
];

const sdkProfily = {
  CW50: { nazev: 'CW 50/50 (3m)', cenaKs: 62, delka: 3 },
  CW75: { nazev: 'CW 75/50 (3m)', cenaKs: 78, delka: 3 },
  CW100: { nazev: 'CW 100/50 (3m)', cenaKs: 95, delka: 3 },
  UW50: { nazev: 'UW 50/40 (3m)', cenaKs: 55, delka: 3 },
  UW75: { nazev: 'UW 75/40 (3m)', cenaKs: 68, delka: 3 },
  UW100: { nazev: 'UW 100/40 (3m)', cenaKs: 82, delka: 3 }
};

const sdkPrislusenstvi = {
  sroubTN: { nazev: 'Sroub TN 3.5x35mm', cenaKs: 0.35, za: 'ks' },
  sroubLN: { nazev: 'Sroub LN 3.5x9mm', cenaKs: 0.4, za: 'ks', naM2: 2 },
  tmelProMix: { nazev: 'ProMix Mega tmel (25kg)', cenaKs: 289, spotreba: 0.4, za: 'kg/m2' },
  paskaRigips: { nazev: 'Paska Rigips (50m)', cenaKs: 85, spotreba: 1.2, za: 'bm/m2' },
  rohLista: { nazev: 'Rohova lista ALU (3m)', cenaKs: 45 },
  hmozdinkaSD: { nazev: 'Hmozd. do betonu 6x40', cenaKs: 1.8, naM2: 3 },
  tesneni: { nazev: 'PE tesneni 50mm (30m)', cenaKs: 65, spotreba: 0.7, za: 'bm/m2' }
};

const sdkVata = {
  50: { nazev: 'Isover AKU 50mm', cenaM2: 65 },
  60: { nazev: 'Isover AKU 60mm', cenaM2: 78 },
  80: { nazev: 'Isover AKU 80mm', cenaM2: 95 },
  100: { nazev: 'Isover AKU 100mm', cenaM2: 115 },
  150: { nazev: 'Isover AKU 150mm', cenaM2: 145 }
};

let sdkTyp = 'w111', sdkDeska = 'rb', sdkOplech = 'jednoduche', sdkProfilSirka = 75;

function selectSdkTab(tab, el) {
  document.querySelectorAll('#sdkPage .tabs .tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('sdkPrickyContent').style.display = tab === 'pricky' ? 'block' : 'none';
  document.getElementById('sdkPodhledyContent').style.display = tab === 'podhledy' ? 'block' : 'none';
}

function initSdk() {
  renderSdkTypy();
  renderSdkDesky();
  renderSdkPodhledDesky();
}

function renderSdkTypy() {
  document.getElementById('sdkTypyList').innerHTML = sdkTypy.map(t =>
    '<div class="option ' + (sdkTyp === t.id ? 'active' : '') + '" onclick="selectSdkTyp(\'' + t.id + '\')">' +
      '<div class="option-dot"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>' +
      '<div class="option-text"><div class="option-title">' + t.nazev + '</div><div class="option-desc">' + t.popis + '</div></div>' +
      '<div class="option-meta"><span class="badge">' + t.rw + '</span></div>' +
    '</div>'
  ).join('');
}
function selectSdkTyp(id) { sdkTyp = id; renderSdkTypy(); vypoctiSdk(); }

function renderSdkDesky() {
  document.getElementById('sdkDeskyList').innerHTML = sdkDesky.map(d =>
    '<div class="option ' + (sdkDeska === d.id ? 'active' : '') + '" onclick="selectSdkDeska(\'' + d.id + '\')">' +
      '<div class="option-dot"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>' +
      '<div class="option-text"><div class="option-title">' + d.nazev + '</div><div class="option-desc">' + d.popis + '</div></div>' +
      '<div class="option-meta"><span class="badge badge-green">' + d.cenaM2 + ' Kc/m2</span></div>' +
    '</div>'
  ).join('');
}
function selectSdkDeska(id) { sdkDeska = id; renderSdkDesky(); vypoctiSdk(); }

function setSdkOplech(typ, el) {
  sdkOplech = typ;
  el.parentElement.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  vypoctiSdk();
}

let sdkPodhledDeska = 'rb';
function renderSdkPodhledDesky() {
  document.getElementById('sdkPodhledDeskyList').innerHTML = sdkDesky.filter(d => ['rb','rbi','rf','ma'].includes(d.id)).map(d =>
    '<div class="option ' + (sdkPodhledDeska === d.id ? 'active' : '') + '" onclick="selectSdkPodhledDeska(\'' + d.id + '\')">' +
      '<div class="option-dot"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>' +
      '<div class="option-text"><div class="option-title">' + d.nazev + '</div><div class="option-desc">' + d.popis + '</div></div>' +
      '<div class="option-meta"><span class="badge badge-green">' + d.cenaM2 + ' Kc/m2</span></div>' +
    '</div>'
  ).join('');
}
function selectSdkPodhledDeska(id) { sdkPodhledDeska = id; renderSdkPodhledDesky(); vypoctiSdkPodhled(); }

function vypoctiSdk() {
  const plocha = parseFloat(document.getElementById('sdkPlocha').value) || 0;
  if (plocha <= 0) { document.getElementById('sdkResult').innerHTML = ''; updateSdkSum(0,0,0); return; }
  const rez = parseFloat(document.getElementById('sdkRezerva').value) / 100;
  const typ = sdkTypy.find(t => t.id === sdkTyp);
  const deska = sdkDesky.find(d => d.id === sdkDeska);
  if (!typ || !deska) return;

  const plochaR = plocha * (1 + rez);
  const sirka = typ.profilSirka.includes(75) ? 75 : typ.profilSirka[0];
  const cwKey = 'CW' + sirka;
  const uwKey = 'UW' + sirka;
  const cwProf = sdkProfily[cwKey];
  const uwProf = sdkProfily[uwKey];

  const desekFactor = sdkOplech === 'dvojite' ? 2 : 1;
  const celkemDesek = typ.desekNaM2 * desekFactor / 2;
  const pocetDesek = Math.ceil(plochaR * celkemDesek / 3.0);
  const cenaDesek = Math.round(plochaR * celkemDesek * deska.cenaM2);

  const pocetCW = Math.ceil(plochaR * typ.cwNaM2 / cwProf.delka);
  const pocetUW = Math.ceil(plochaR * typ.uwNaM2 / uwProf.delka);
  const cenaProfilu = pocetCW * cwProf.cenaKs + pocetUW * uwProf.cenaKs;

  const sroubTN = Math.ceil(plochaR * typ.sroubNaM2 * (sdkOplech === 'dvojite' ? 2 : 1));
  const sroubLN = Math.ceil(plochaR * sdkPrislusenstvi.sroubLN.naM2);
  const tmelKg = Math.ceil(plochaR * sdkPrislusenstvi.tmelProMix.spotreba);
  const tmelBaleni = Math.ceil(tmelKg / 25);
  const paskaBm = Math.ceil(plochaR * sdkPrislusenstvi.paskaRigips.spotreba);
  const paskaRole = Math.ceil(paskaBm / 50);
  const hmozdinky = Math.ceil(plochaR * sdkPrislusenstvi.hmozdinkaSD.naM2);
  const tesneniBm = Math.ceil(plochaR * sdkPrislusenstvi.tesneni.spotreba);
  const tesneniRole = Math.ceil(tesneniBm / 30);

  const cenaSroubu = Math.round(sroubTN * sdkPrislusenstvi.sroubTN.cenaKs + sroubLN * sdkPrislusenstvi.sroubLN.cenaKs);
  const cenaTmelu = tmelBaleni * sdkPrislusenstvi.tmelProMix.cenaKs;
  const cenaRaskyp = paskaRole * sdkPrislusenstvi.paskaRigips.cenaKs;
  const cenaHm = Math.round(hmozdinky * sdkPrislusenstvi.hmozdinkaSD.cenaKs);
  const cenaTesn = tesneniRole * sdkPrislusenstvi.tesneni.cenaKs;

  let cenaVaty = 0;
  const vataVal = document.getElementById('sdkVata').value;
  if (vataVal !== 'none') {
    cenaVaty = Math.round(plochaR * sdkVata[vataVal].cenaM2);
  }

  const cenaPrisl = cenaSroubu + cenaTmelu + cenaRaskyp + cenaHm + cenaTesn + cenaVaty;
  const celkem = cenaDesek + cenaProfilu + cenaPrisl;
  updateSdkSum(cenaProfilu, cenaDesek, cenaPrisl);

  let polozky = [];
  polozky.push({ nazev: cwProf.nazev, detail: pocetCW + ' ks', cena: pocetCW * cwProf.cenaKs });
  polozky.push({ nazev: uwProf.nazev, detail: pocetUW + ' ks', cena: pocetUW * uwProf.cenaKs });
  polozky.push({ nazev: deska.nazev, detail: Math.ceil(plochaR * celkemDesek) + ' m2 (' + pocetDesek + ' desek)', cena: cenaDesek });
  polozky.push({ nazev: 'Srouby TN 3.5x35', detail: sroubTN + ' ks', cena: Math.round(sroubTN * sdkPrislusenstvi.sroubTN.cenaKs) });
  polozky.push({ nazev: 'Srouby LN 3.5x9', detail: sroubLN + ' ks', cena: Math.round(sroubLN * sdkPrislusenstvi.sroubLN.cenaKs) });
  polozky.push({ nazev: sdkPrislusenstvi.tmelProMix.nazev, detail: tmelBaleni + ' bal (' + tmelKg + ' kg)', cena: cenaTmelu });
  polozky.push({ nazev: 'Paska Rigips', detail: paskaRole + ' role (' + paskaBm + ' bm)', cena: cenaRaskyp });
  polozky.push({ nazev: 'Hmozdiny', detail: hmozdinky + ' ks', cena: cenaHm });
  polozky.push({ nazev: 'PE tesneni', detail: tesneniRole + ' role', cena: cenaTesn });
  if (vataVal !== 'none') polozky.push({ nazev: sdkVata[vataVal].nazev, detail: Math.ceil(plochaR) + ' m2', cena: cenaVaty });

  document.getElementById('sdkResult').innerHTML =
    '<div class="result">' +
      polozky.map(p =>
        '<div class="result-item"><div class="result-item-info"><div class="result-item-name">' + p.nazev + '</div><div class="result-item-detail">' + p.detail + '</div></div><div class="result-item-price">' + formatCena(p.cena) + '</div></div>'
      ).join('') +
      '<div class="result-total"><div class="result-total-label">Celkem material</div><div class="result-total-value">' + formatCena(celkem) + '</div></div>' +
      '<div class="result-per-m2">(' + formatCena(Math.round(celkem / plocha)) + ' / m2)</div>' +
      '<div class="detail-panel" style="margin-top:12px"><div class="detail-panel-title">Parametry systemu ' + typ.nazev.split(' - ')[0] + '</div>' +
        '<div class="detail-row"><span class="detail-label">Zvukova izolace</span><span class="detail-value">' + typ.rw + '</span></div>' +
        '<div class="detail-row"><span class="detail-label">Sirka profilu</span><span class="detail-value">' + sirka + ' mm</span></div>' +
        '<div class="detail-row"><span class="detail-label">Oplechovani</span><span class="detail-value">' + (sdkOplech === 'dvojite' ? '2x deska z kazde strany' : '1x deska z kazde strany') + '</span></div>' +
        '<div class="detail-row"><span class="detail-label">Celkova tloustka</span><span class="detail-value">' + (sirka + deska.tl * celkemDesek * 2) + ' mm</span></div>' +
      '</div>' +
    '</div>';
}

function vypoctiSdkPodhled() {
  const plocha = parseFloat(document.getElementById('sdkPodhledPlocha').value) || 0;
  if (plocha <= 0) { document.getElementById('sdkResult').innerHTML = ''; updateSdkSum(0,0,0); return; }
  const rez = parseFloat(document.getElementById('sdkPodhledRezerva').value) / 100;
  const plochaR = plocha * (1 + rez);
  const deska = sdkDesky.find(d => d.id === sdkPodhledDeska);
  const spusteni = parseFloat(document.getElementById('sdkSpusteni').value) || 10;

  const cdProfily = Math.ceil(plochaR * 2.8 / 4);
  const udProfily = Math.ceil(plochaR * 0.8 / 3);
  const zavesy = Math.ceil(plochaR * 1.2);
  const spojky = Math.ceil(plochaR * 0.5);
  const deskyM2 = Math.ceil(plochaR);
  const srouby = Math.ceil(plochaR * 17);
  const tmelKg = Math.ceil(plochaR * 0.3);
  const tmelBal = Math.ceil(tmelKg / 25);
  const paskaBm = Math.ceil(plochaR * 0.8);
  const paskaRole = Math.ceil(paskaBm / 50);

  const cenaCd = cdProfily * 75;
  const cenaUd = udProfily * 52;
  const cenaZavesu = zavesy * 12;
  const cenaSpojek = spojky * 8;
  const cenaProfCelk = cenaCd + cenaUd + cenaZavesu + cenaSpojek;
  const cenaDesek = Math.round(deskyM2 * deska.cenaM2);
  const cenaSroubu = Math.round(srouby * 0.35);
  const cenaTmelu = tmelBal * 289;
  const cenaPasky = paskaRole * 85;

  let cenaVaty = 0;
  const vataVal = document.getElementById('sdkPodhledVata').value;
  if (vataVal !== 'none') cenaVaty = Math.round(plochaR * sdkVata[vataVal].cenaM2);

  const cenaPrisl = cenaSroubu + cenaTmelu + cenaPasky + cenaVaty;
  const celkem = cenaProfCelk + cenaDesek + cenaPrisl;
  updateSdkSum(cenaProfCelk, cenaDesek, cenaPrisl);

  let polozky = [
    { nazev: 'CD 60/27 profil (4m)', detail: cdProfily + ' ks', cena: cenaCd },
    { nazev: 'UD 28/27 profil (3m)', detail: udProfily + ' ks', cena: cenaUd },
    { nazev: 'Pramy zaves', detail: zavesy + ' ks', cena: cenaZavesu },
    { nazev: 'Krizova spojka', detail: spojky + ' ks', cena: cenaSpojek },
    { nazev: deska.nazev, detail: deskyM2 + ' m2', cena: cenaDesek },
    { nazev: 'Srouby TN 3.5x25', detail: srouby + ' ks', cena: cenaSroubu },
    { nazev: 'ProMix Mega tmel', detail: tmelBal + ' bal (' + tmelKg + ' kg)', cena: cenaTmelu },
    { nazev: 'Paska Rigips', detail: paskaRole + ' role', cena: cenaPasky }
  ];
  if (vataVal !== 'none') polozky.push({ nazev: sdkVata[vataVal].nazev, detail: Math.ceil(plochaR) + ' m2', cena: cenaVaty });

  document.getElementById('sdkResult').innerHTML =
    '<div class="result">' +
      polozky.map(p => '<div class="result-item"><div class="result-item-info"><div class="result-item-name">' + p.nazev + '</div><div class="result-item-detail">' + p.detail + '</div></div><div class="result-item-price">' + formatCena(p.cena) + '</div></div>').join('') +
      '<div class="result-total"><div class="result-total-label">Celkem material</div><div class="result-total-value">' + formatCena(celkem) + '</div></div>' +
      '<div class="result-per-m2">(' + formatCena(Math.round(celkem / plocha)) + ' / m2)</div>' +
    '</div>';
}

function updateSdkSum(p, d, pr) {
  document.getElementById('sdkSumProfily').textContent = formatCena(p);
  document.getElementById('sdkSumDesky').textContent = formatCena(d);
  document.getElementById('sdkSumPrisl').textContent = formatCena(pr);
  document.getElementById('sdkSumCelkem').textContent = formatCena(p + d + pr);
}

// === OBKLADY CEMIX ===
const cemixLepidla = [
  { id: 'basic', nazev: 'Cemix Basic (C1)', popis: 'Zakladni flexibilni lepidlo pro standardni obklady', spotreba: 3.5, cena25: 189, trida: 'C1' },
  { id: 'flex', nazev: 'Cemix Flex (C2T)', popis: 'Flexibilni lepidlo pro velkoformatove dlazdice, podlahove topeni', spotreba: 4.0, cena25: 289, trida: 'C2T' },
  { id: 'superflex', nazev: 'Cemix SuperFlex (C2TE S1)', popis: 'Vysoko flexibilni pro extreier, bazeny, terasy, velke formaty', spotreba: 4.5, cena25: 429, trida: 'C2TE S1' },
  { id: 'rapid', nazev: 'Cemix Rapid (C2FT)', popis: 'Rychletuhnouci, pochozi po 3 hodinach', spotreba: 4.0, cena25: 349, trida: 'C2FT' }
];

const cemixSparovacky = [
  { id: 'cg1', nazev: 'Cemix sparovacka CG1', popis: 'Zakladni cementova, vnitrni prostory', spotreba: 0.5, cena5: 89, maxSpara: 6 },
  { id: 'cg2', nazev: 'Cemix sparovacka CG2 WA', popis: 'Vodeodolna, koupelny, kuchyne', spotreba: 0.5, cena5: 139, maxSpara: 8 },
  { id: 'epox', nazev: 'Cemix epoxidova RG', popis: 'Chemicky odolna, bazeny, prumysl', spotreba: 0.6, cena5: 489, maxSpara: 15 }
];

const cemixHydro = {
  '1k': { nazev: 'Cemix 1K hydroizolace', spotreba: 1.5, cena8: 549, popis: 'Jednokomponentni, pod obklady v koupelne' },
  '2k': { nazev: 'Cemix 2K hydroizolace', spotreba: 1.2, cena8: 789, popis: 'Dvoukomponentni, vyssi odolnost, bazeny' }
};

const obkladyFormaty = [
  { id: 'small', nazev: 'Maly (do 20x20)', popis: '10x10 az 20x20 cm', zubySpatule: 6, spotrFaktor: 0.8 },
  { id: 'medium', nazev: 'Stredni (30x30)', popis: '25x25 az 33x33 cm', zubySpatule: 8, spotrFaktor: 1.0 },
  { id: 'large', nazev: 'Velky (60x30)', popis: '30x60, 45x45 cm', zubySpatule: 10, spotrFaktor: 1.2 },
  { id: 'xxl', nazev: 'XXL (60x60+)', popis: '60x60, 60x120 cm', zubySpatule: 12, spotrFaktor: 1.5 }
];

let obkladyTyp = 'obklad', obkladyFormat = 'medium', obkladyLepidlo = 'flex', obkladySparovacka = 'cg2';

function setObkladyTyp(typ, el) {
  obkladyTyp = typ;
  el.parentElement.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  vypoctiObklady();
}

function initObklady() {
  renderObkladyFormaty();
  renderObkladyLepidla();
  renderObkladySparovacky();
}

function renderObkladyFormaty() {
  document.getElementById('obkladyFormatList').innerHTML = obkladyFormaty.map(f =>
    '<div class="option ' + (obkladyFormat === f.id ? 'active' : '') + '" onclick="selectObkladyFormat(\'' + f.id + '\')">' +
      '<div class="option-dot"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>' +
      '<div class="option-text"><div class="option-title">' + f.nazev + '</div><div class="option-desc">' + f.popis + '</div></div>' +
    '</div>'
  ).join('');
}
function selectObkladyFormat(id) { obkladyFormat = id; renderObkladyFormaty(); vypoctiObklady(); }

function renderObkladyLepidla() {
  document.getElementById('obkladyLepidloList').innerHTML = cemixLepidla.map(l =>
    '<div class="option ' + (obkladyLepidlo === l.id ? 'active' : '') + '" onclick="selectObkladyLepidlo(\'' + l.id + '\')">' +
      '<div class="option-dot"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>' +
      '<div class="option-text"><div class="option-title">' + l.nazev + '</div><div class="option-desc">' + l.popis + '</div></div>' +
      '<div class="option-meta"><span class="badge">' + l.trida + '</span><span class="badge badge-green">' + l.cena25 + ' Kc/25kg</span></div>' +
    '</div>'
  ).join('');
}
function selectObkladyLepidlo(id) { obkladyLepidlo = id; renderObkladyLepidla(); vypoctiObklady(); }

function renderObkladySparovacky() {
  document.getElementById('obkladySparovackaList').innerHTML = cemixSparovacky.map(s =>
    '<div class="option ' + (obkladySparovacka === s.id ? 'active' : '') + '" onclick="selectObkladySparovacka(\'' + s.id + '\')">' +
      '<div class="option-dot"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>' +
      '<div class="option-text"><div class="option-title">' + s.nazev + '</div><div class="option-desc">' + s.popis + '</div></div>' +
      '<div class="option-meta"><span class="badge badge-green">' + s.cena5 + ' Kc/5kg</span></div>' +
    '</div>'
  ).join('');
}
function selectObkladySparovacka(id) { obkladySparovacka = id; renderObkladySparovacky(); vypoctiObklady(); }

function vypoctiObklady() {
  const plocha = parseFloat(document.getElementById('obkladyPlocha').value) || 0;
  if (plocha <= 0) { document.getElementById('obkladyResult').innerHTML = ''; document.getElementById('obkladySumLepidlo').textContent = '0 Kc'; document.getElementById('obkladySumSparovacka').textContent = '0 Kc'; document.getElementById('obkladySumCelkem').textContent = '0 Kc'; return; }
  const rez = parseFloat(document.getElementById('obkladyRezerva').value) / 100;
  const plochaR = plocha * (1 + rez);

  const lepidlo = cemixLepidla.find(l => l.id === obkladyLepidlo);
  const format = obkladyFormaty.find(f => f.id === obkladyFormat);
  const sparovacka = cemixSparovacky.find(s => s.id === obkladySparovacka);
  const sirkaSpary = parseInt(document.getElementById('obkladySirkaSpary').value);

  const lepidloKg = Math.ceil(plochaR * lepidlo.spotreba * format.spotrFaktor);
  const lepidloBal = Math.ceil(lepidloKg / 25);
  const cenaLepidla = lepidloBal * lepidlo.cena25;

  const sparovackaKg = Math.ceil(plochaR * sparovacka.spotreba * (sirkaSpary / 3));
  const sparovackaBal = Math.ceil(sparovackaKg / 5);
  const cenaSparovacky = sparovackaBal * sparovacka.cena5;

  let polozky = [
    { nazev: lepidlo.nazev, detail: lepidloBal + ' bal (' + lepidloKg + ' kg)', cena: cenaLepidla },
    { nazev: sparovacka.nazev, detail: sparovackaBal + ' bal (' + sparovackaKg + ' kg)', cena: cenaSparovacky }
  ];

  let cenaHydro = 0;
  const hydroVal = document.getElementById('obkladyHydro').value;
  if (hydroVal !== 'none') {
    const h = cemixHydro[hydroVal];
    const hydroKg = Math.ceil(plochaR * h.spotreba);
    const hydroBal = Math.ceil(hydroKg / 8);
    cenaHydro = hydroBal * h.cena8;
    polozky.push({ nazev: h.nazev, detail: hydroBal + ' bal (' + hydroKg + ' kg)', cena: cenaHydro });
  }

  let cenaPen = 0;
  const penVal = document.getElementById('obkladyPenetrace').value;
  if (penVal !== 'none') {
    const penL = Math.ceil(plochaR * 0.15);
    const penBal = Math.ceil(penL / 5);
    cenaPen = penBal * 139;
    polozky.push({ nazev: 'Cemix penetrace hloubkova (5l)', detail: penBal + ' bal (' + penL + ' l)', cena: cenaPen });
  }

  const celkem = cenaLepidla + cenaSparovacky + cenaHydro + cenaPen;
  document.getElementById('obkladySumLepidlo').textContent = formatCena(cenaLepidla);
  document.getElementById('obkladySumSparovacka').textContent = formatCena(cenaSparovacky);
  document.getElementById('obkladySumCelkem').textContent = formatCena(celkem);

  document.getElementById('obkladyResult').innerHTML =
    '<div class="result">' +
      polozky.map(p => '<div class="result-item"><div class="result-item-info"><div class="result-item-name">' + p.nazev + '</div><div class="result-item-detail">' + p.detail + '</div></div><div class="result-item-price">' + formatCena(p.cena) + '</div></div>').join('') +
      '<div class="result-total"><div class="result-total-label">Celkem material</div><div class="result-total-value">' + formatCena(celkem) + '</div></div>' +
      '<div class="result-per-m2">(' + formatCena(Math.round(celkem / plocha)) + ' / m2 bez dlazdic)</div>' +
      '<div class="detail-panel" style="margin-top:12px"><div class="detail-panel-title">Doporuceni</div>' +
        '<div class="detail-row"><span class="detail-label">Lepidlo</span><span class="detail-value">' + lepidlo.trida + ' (zuby spatule ' + format.zubySpatule + 'mm)</span></div>' +
        '<div class="detail-row"><span class="detail-label">Otevreny cas</span><span class="detail-value">15-20 min</span></div>' +
        '<div class="detail-row"><span class="detail-label">Pochozi po</span><span class="detail-value">' + (obkladyLepidlo === 'rapid' ? '3 hod' : '24 hod') + '</span></div>' +
        '<div class="detail-row"><span class="detail-label">Sparovani po</span><span class="detail-value">' + (obkladyLepidlo === 'rapid' ? '3 hod' : '24 hod') + '</span></div>' +
        (obkladyFormat === 'xxl' ? '<div class="detail-warning">XXL formaty: pouzijte buttering-floating (lepidlo na podklad i dlazdici)!</div>' : '') +
      '</div>' +
    '</div>';
}

// === OMITKY CEMIX ===
const cemixOmitky = {
  vnitrni: [
    { id: 'vj', nazev: 'Cemix jadrova omitka vnitrni', popis: 'Zakladni jadrova omitka, rucni/strojni', spotreba: 15, cena30: 165, schnuti: '1 den/mm', aplikace: 'rucni+strojni' },
    { id: 'vs', nazev: 'Cemix stukova omitka', popis: 'Hladka vrstva na jadro, bila, strojni', spotreba: 8, cena25: 185, schnuti: '1-2 dny', aplikace: 'strojni', tlMax: 3 },
    { id: 'vj1', nazev: 'Cemix jednovrstva omitka', popis: 'Jadro + stuk v jednom, sadrova, rucni', spotreba: 10, cena30: 219, schnuti: '1-2 dny', aplikace: 'rucni' },
    { id: 'vjl', nazev: 'Cemix lehcena omitka', popis: 'Tepelne izolacni jadro, lambda 0.19', spotreba: 6, cena20: 289, schnuti: '1-2 dny', aplikace: 'rucni+strojni' }
  ],
  venkovni: [
    { id: 'ep', nazev: 'Cemix podhoz (cementovy)', popis: 'Prvni vrstva na zdivo, zlepsuje prilnavost', spotreba: 5, cena25: 95, schnuti: '24 hod', aplikace: 'rucni' },
    { id: 'ej', nazev: 'Cemix jadrova omitka venkovni', popis: 'Jadro na venkovni zdivo, MVC', spotreba: 16, cena30: 175, schnuti: '1 den/mm', aplikace: 'rucni+strojni' },
    { id: 'es', nazev: 'Cemix probarvena omitka', popis: 'Probarvena pastovita omitka, dekorativni', spotreba: 3, cena25: 689, schnuti: '2-3 dny', aplikace: 'rucni', tlMax: 2 },
    { id: 'esl', nazev: 'Cemix silikon omitka', popis: 'Silikonova tenkovrrstva, hydrofobni, samocistici', spotreba: 3, cena25: 889, schnuti: '2-3 dny', aplikace: 'rucni', tlMax: 2 }
  ]
};

let omitkyTyp = 'vnitrni', omitkySystem = 'vj';

function setOmitkyTyp(typ, el) {
  omitkyTyp = typ;
  el.parentElement.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  omitkySystem = typ === 'vnitrni' ? 'vj' : 'ep';
  renderOmitkySystemy();
  vypoctiOmitky();
}

function initOmitky() {
  renderOmitkySystemy();
}

function renderOmitkySystemy() {
  const systemy = cemixOmitky[omitkyTyp];
  document.getElementById('omitkySystemList').innerHTML = systemy.map(s =>
    '<div class="option ' + (omitkySystem === s.id ? 'active' : '') + '" onclick="selectOmitkySystem(\'' + s.id + '\')">' +
      '<div class="option-dot"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>' +
      '<div class="option-text"><div class="option-title">' + s.nazev + '</div><div class="option-desc">' + s.popis + '</div></div>' +
      '<div class="option-meta"><span class="badge">' + s.aplikace + '</span></div>' +
    '</div>'
  ).join('');
  renderOmitkyDetail();
}
function selectOmitkySystem(id) { omitkySystem = id; renderOmitkySystemy(); vypoctiOmitky(); }

function renderOmitkyDetail() {
  const systemy = cemixOmitky[omitkyTyp];
  const s = systemy.find(x => x.id === omitkySystem);
  if (!s) return;
  document.getElementById('omitkySystemDetail').innerHTML =
    '<div class="detail-panel"><div class="detail-panel-title">Detail materialu</div>' +
      '<div class="detail-row"><span class="detail-label">Spotreba</span><span class="detail-value">' + s.spotreba + ' kg/m2/mm</span></div>' +
      '<div class="detail-row"><span class="detail-label">Schnuti</span><span class="detail-value">' + s.schnuti + '</span></div>' +
      '<div class="detail-row"><span class="detail-label">Aplikace</span><span class="detail-value">' + s.aplikace + '</span></div>' +
      (s.tlMax ? '<div class="detail-row"><span class="detail-label">Max tloustka</span><span class="detail-value">' + s.tlMax + ' mm</span></div>' : '') +
    '</div>';
}

function vypoctiOmitky() {
  const plocha = parseFloat(document.getElementById('omitkyPlocha').value) || 0;
  if (plocha <= 0) { document.getElementById('omitkyResult').innerHTML = ''; document.getElementById('omitkySumMaterial').textContent = '0 Kc'; document.getElementById('omitkySumPenetrace').textContent = '0 Kc'; document.getElementById('omitkySumCelkem').textContent = '0 Kc'; return; }
  const rez = parseFloat(document.getElementById('omitkyRezerva').value) / 100;
  const plochaR = plocha * (1 + rez);
  const tloustka = parseInt(document.getElementById('omitkyTloustka').value);
  const systemy = cemixOmitky[omitkyTyp];
  const s = systemy.find(x => x.id === omitkySystem);
  if (!s) return;

  const spotrebaKg = s.tlMax ? Math.ceil(plochaR * s.spotreba * Math.min(tloustka, s.tlMax)) : Math.ceil(plochaR * s.spotreba * tloustka);
  const baleniVelikost = s.cena30 ? 30 : (s.cena25 ? 25 : 20);
  const cenaBaleni = s.cena30 || s.cena25 || s.cena20;
  const pocetBaleni = Math.ceil(spotrebaKg / baleniVelikost);
  const cenaMat = pocetBaleni * cenaBaleni;

  let polozky = [
    { nazev: s.nazev, detail: pocetBaleni + ' bal (' + spotrebaKg + ' kg, tl. ' + (s.tlMax ? Math.min(tloustka, s.tlMax) : tloustka) + ' mm)', cena: cenaMat }
  ];

  // Penetrace
  const penL = Math.ceil(plochaR * 0.15);
  const penBal = Math.ceil(penL / 5);
  const cenaPen = penBal * 139;
  polozky.push({ nazev: 'Cemix penetrace hloubkova (5l)', detail: penBal + ' bal (' + penL + ' l)', cena: cenaPen });

  // Pokud venkovni a jadro, pridat podhoz
  if (omitkyTyp === 'venkovni' && s.id !== 'ep') {
    const podhozKg = Math.ceil(plochaR * 5);
    const podhozBal = Math.ceil(podhozKg / 25);
    const cenaP = podhozBal * 95;
    polozky.push({ nazev: 'Cemix podhoz (25kg)', detail: podhozBal + ' bal (' + podhozKg + ' kg)', cena: cenaP });
    cenaMat;
  }

  // Sit na venkovni
  if (omitkyTyp === 'venkovni') {
    const sitM2 = Math.ceil(plochaR * 1.1);
    const sitCena = Math.round(sitM2 * 22);
    polozky.push({ nazev: 'Armovaci sit (vertex)', detail: sitM2 + ' m2', cena: sitCena });
  }

  const celkem = polozky.reduce((s, p) => s + p.cena, 0);
  document.getElementById('omitkySumMaterial').textContent = formatCena(cenaMat);
  document.getElementById('omitkySumPenetrace').textContent = formatCena(cenaPen);
  document.getElementById('omitkySumCelkem').textContent = formatCena(celkem);

  document.getElementById('omitkyResult').innerHTML =
    '<div class="result">' +
      polozky.map(p => '<div class="result-item"><div class="result-item-info"><div class="result-item-name">' + p.nazev + '</div><div class="result-item-detail">' + p.detail + '</div></div><div class="result-item-price">' + formatCena(p.cena) + '</div></div>').join('') +
      '<div class="result-total"><div class="result-total-label">Celkem material</div><div class="result-total-value">' + formatCena(celkem) + '</div></div>' +
      '<div class="result-per-m2">(' + formatCena(Math.round(celkem / plocha)) + ' / m2)</div>' +
    '</div>';
}

// === DEMOLICE A ODPADY ===
// Ceny BEZ DPH z rbautodoprava.cz/cenik/ (RB Autodoprava Cisovice)
const kontejneryCeny = {
  stavebni_sut: {3:4000, 6:5500},
  smesny: {3:4000, 6:6000, 9:8500, 14:9500},
  drevo: {3:2500, 6:3000, 9:3500, 14:4500},
  zemina: {3:3000, 6:4000},
  bioodpad: {3:2500, 6:3500, 9:4500, 14:5500}
};
const DPH_SAZBA = 0.21;

const demoliceKoef = {
  zdi: 0.3,
  podlahy: 0.15,
  stropy: 0.25,
  komplet: 0.5
};

let demTypDemolice = 'zdi';
let demTypOdpaduDem = 'stavebni_sut';
let demHustota = 'tezky';

function selectDemTab(tab, el) {
  document.querySelectorAll('#demolicePage .tabs .tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('demKontejneryContent').style.display = tab === 'kontejnery' ? 'block' : 'none';
  document.getElementById('demDemoliceContent').style.display = tab === 'demolice' ? 'block' : 'none';
}

function setDemTyp(typ, el) {
  demTypDemolice = typ;
  document.querySelectorAll('#demDemoliceContent .toggle-btns')[0].querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  vypoctiDemolice();
}

function setDemOdpad(typ, el) {
  demTypOdpaduDem = typ;
  document.querySelectorAll('#demDemoliceContent .toggle-btns')[1].querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  vypoctiDemolice();
}

function setDemHustota(h, el) {
  demHustota = h;
  document.querySelectorAll('#demDemoliceContent .toggle-btns')[2].querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  vypoctiDemolice();
}

function vypoctiKontejnery() {
  const typ = document.getElementById('demTypOdpadu').value;
  const vel = parseInt(document.getElementById('demVelikost').value);
  const pocet = Math.max(1, parseInt(document.getElementById('demPocet').value) || 1);
  const vzdalenost = Math.max(0, parseInt(document.getElementById('demVzdalenost').value) || 0);

  const cenyTyp = kontejneryCeny[typ];
  if (!cenyTyp || !cenyTyp[vel]) {
    document.getElementById('demResult').innerHTML = '<div class="result"><div class="result-item"><div class="result-item-info"><div class="result-item-name">Tato velikost neni dostupna pro zvoleny typ odpadu</div><div class="result-item-detail">Zvolte mensi kontejner</div></div></div></div>';
    document.getElementById('demSumKontejnery').textContent = '---';
    document.getElementById('demSumDoprava').textContent = '---';
    document.getElementById('demSumCelkem').textContent = '---';
    return;
  }

  const cenaKusBezDph = cenyTyp[vel];
  const kontBezDph = cenaKusBezDph * pocet;
  // Doprava: RB Autodoprava 38 Kc/km bez DPH (nakladni auto)
  const dopravaBezDph = vzdalenost > 0 ? vzdalenost * 38 * pocet : 0;
  const zakladBezDph = kontBezDph + dopravaBezDph;

  // Cena prace
  let praceBezDph = 0;
  let praceNazev = '';
  if (demVcetnePrace) {
    const typPrace = document.getElementById('demTypPrace').value;
    const plochaPrace = parseFloat(document.getElementById('demPlochaPrace').value) || 0;
    praceBezDph = demCenyPrace[typPrace] * plochaPrace;
    praceNazev = document.getElementById('demTypPrace').selectedOptions[0].text;
  }

  const celkemBezDph = zakladBezDph + praceBezDph;
  const dph = Math.round(celkemBezDph * DPH_SAZBA);
  const celkem = celkemBezDph + dph;

  const nazevTypu = document.getElementById('demTypOdpadu').selectedOptions[0].text;

  document.getElementById('demSumKontejnery').textContent = formatCena(kontBezDph);
  document.getElementById('demSumDoprava').textContent = formatCena(dopravaBezDph);
  document.getElementById('demSumCelkem').textContent = formatCena(celkem);

  let html = '<div class="result">';
  html += '<div class="result-item"><div class="result-item-info"><div class="result-item-name">Kontejner ' + vel + ' m3 - ' + nazevTypu + '</div><div class="result-item-detail">' + pocet + 'x kontejner, cena za kus ' + formatCena(cenaKusBezDph) + ' bez DPH</div></div><div class="result-item-price">' + formatCena(kontBezDph) + '</div></div>';
  if (dopravaBezDph > 0) {
    html += '<div class="result-item"><div class="result-item-info"><div class="result-item-name">Doprava</div><div class="result-item-detail">' + vzdalenost + ' km x 38 Kc/km x ' + pocet + ' kontejner(u)</div></div><div class="result-item-price">' + formatCena(dopravaBezDph) + '</div></div>';
  } else {
    html += '<div class="result-item"><div class="result-item-info"><div class="result-item-name">Doprava</div><div class="result-item-detail">Zadejte vzdalenost (38 Kc/km)</div></div><div class="result-item-price">0 Kc</div></div>';
  }
  if (praceBezDph > 0) {
    html += '<div class="result-item"><div class="result-item-info"><div class="result-item-name">Prace</div><div class="result-item-detail">' + praceNazev + '</div></div><div class="result-item-price">' + formatCena(praceBezDph) + '</div></div>';
  }
  html += '<div class="result-item" style="border-top:1px solid #2a2a38;padding-top:8px;margin-top:4px"><div class="result-item-info"><div class="result-item-name">Zaklad bez DPH</div></div><div class="result-item-price">' + formatCena(celkemBezDph) + '</div></div>';
  html += '<div class="result-item"><div class="result-item-info"><div class="result-item-name">DPH 21%</div></div><div class="result-item-price">' + formatCena(dph) + '</div></div>';
  html += '<div class="result-total"><div class="result-total-label">Celkem s DPH</div><div class="result-total-value">' + formatCena(celkem) + '</div></div>';
  html += '</div>';

  document.getElementById('demResult').innerHTML = html;
}

function vypoctiDemolice() {
  const plocha = parseFloat(document.getElementById('demPlocha').value) || 0;
  if (plocha <= 0) {
    document.getElementById('demResult').innerHTML = '';
    document.getElementById('demSumKontejnery').textContent = '0 Kc';
    document.getElementById('demSumDoprava').textContent = '0 Kc';
    document.getElementById('demSumCelkem').textContent = '0 Kc';
    return;
  }

  const koef = demoliceKoef[demTypDemolice];
  // Hustota ovlivni objem - lehky material zabere vice mista (nakypreni)
  const nakypreni = demHustota === 'lehky' ? 1.5 : 1.0;
  const objemOdpadu = plocha * koef * nakypreni;

  const velKont = parseInt(document.getElementById('demDemVelikost').value);
  const pocetKont = Math.ceil(objemOdpadu / velKont);

  const typ = demTypOdpaduDem;
  const cenyTyp = kontejneryCeny[typ];
  const cenaKusBezDph = cenyTyp[velKont] || cenyTyp[Object.keys(cenyTyp).pop()];
  const kontBezDph = cenaKusBezDph * pocetKont;

  // Cena prace
  let praceBezDph = 0;
  let praceNazev = '';
  if (demVcetnePrace) {
    const typPrace = document.getElementById('demTypPrace').value;
    const plochaPrace = parseFloat(document.getElementById('demPlochaPrace').value) || 0;
    praceBezDph = demCenyPrace[typPrace] * plochaPrace;
    praceNazev = document.getElementById('demTypPrace').selectedOptions[0].text;
  }

  const celkemBezDph = kontBezDph + praceBezDph;
  const dph = Math.round(celkemBezDph * DPH_SAZBA);
  const celkem = celkemBezDph + dph;

  document.getElementById('demSumKontejnery').textContent = formatCena(kontBezDph);
  document.getElementById('demSumDoprava').textContent = '0 Kc';
  document.getElementById('demSumCelkem').textContent = formatCena(celkem);

  const typyNazvy = {zdi: 'Bouraci prace - zdi', podlahy: 'Demolice podlah', stropy: 'Demolice stropu', komplet: 'Kompletni demolice'};
  const hustotaNazev = demHustota === 'lehky' ? 'lehky (SDK, drevo)' : 'tezky (cihla, beton)';

  let html = '<div class="result">';
  html += '<div class="result-item"><div class="result-item-info"><div class="result-item-name">' + typyNazvy[demTypDemolice] + '</div><div class="result-item-detail">Plocha: ' + plocha + ' m2, koeficient: ' + koef + ' m3/m2</div></div></div>';
  html += '<div class="result-item"><div class="result-item-info"><div class="result-item-name">Odhadovany objem odpadu</div><div class="result-item-detail">' + objemOdpadu.toFixed(1) + ' m3 (material: ' + hustotaNazev + (demHustota === 'lehky' ? ', nakypreni 1.5x' : '') + ')</div></div></div>';
  html += '<div class="result-item"><div class="result-item-info"><div class="result-item-name">Kontejner ' + velKont + ' m3 - ' + (typ === 'stavebni_sut' ? 'stavebni sut' : 'smesny odpad') + '</div><div class="result-item-detail">' + pocetKont + 'x kontejner, cena za kus ' + formatCena(cenaKusBezDph) + ' bez DPH</div></div><div class="result-item-price">' + formatCena(kontBezDph) + '</div></div>';
  if (praceBezDph > 0) {
    html += '<div class="result-item"><div class="result-item-info"><div class="result-item-name">Prace</div><div class="result-item-detail">' + praceNazev + '</div></div><div class="result-item-price">' + formatCena(praceBezDph) + '</div></div>';
  }
  html += '<div class="result-item" style="border-top:1px solid #2a2a38;padding-top:8px;margin-top:4px"><div class="result-item-info"><div class="result-item-name">Zaklad bez DPH</div></div><div class="result-item-price">' + formatCena(celkemBezDph) + '</div></div>';
  html += '<div class="result-item"><div class="result-item-info"><div class="result-item-name">DPH 21%</div></div><div class="result-item-price">' + formatCena(dph) + '</div></div>';
  html += '<div class="result-total"><div class="result-total-label">Celkem s DPH</div><div class="result-total-value">' + formatCena(celkem) + '</div></div>';
  html += '<div class="result-per-m2">(' + formatCena(Math.round(celkem / plocha)) + ' / m2 bourane plochy s DPH)</div>';
  html += '</div>';

  document.getElementById('demResult').innerHTML = html;
}

// === CENA PRACE (DEMOLICE) ===
let demVcetnePrace = false;
const demCenyPrace = {
  bouraci_rucni: 350,
  bouraci_stroj: 250,
  odstraneni_podlah: 200,
  odstraneni_obkladu: 180,
  komplet_demolice: 500
};

function setDemPrace(vcetne, el) {
  demVcetnePrace = vcetne === 1;
  document.getElementById('demPraceDetail').style.display = demVcetnePrace ? 'block' : 'none';
  el.parentElement.querySelectorAll('.toggle-btn').forEach(function(b) { b.classList.remove('active'); });
  el.classList.add('active');
  vypoctiKontejnery();
  vypoctiDemolice();
}

// === TISK / PDF ===
function printKalkulacka(nazev) {
  var header = document.querySelector('.print-header');
  if (!header) {
    header = document.createElement('div');
    header.className = 'print-header';
    document.querySelector('.app-container').prepend(header);
  }
  header.innerHTML = '<img src="/logo_youplace.png" alt="YouPlace" style="width:80px;height:80px;margin-bottom:8px;"><h2>You&Place s.r.o. -- ' + nazev + '</h2><p>Datum: ' + new Date().toLocaleDateString('cs-CZ') + '</p>';
  window.print();
}

// === INIT ===
initSdk();
initObklady();
initOmitky();
