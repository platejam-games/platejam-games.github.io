/* Plate Jam landing pages (GitHub Pages user site platejam-games.github.io) — no build step, no trackers. */

/* ===================== CONFIG — fill these before going live ===================== */
var PLATEJAM_CONFIG = {
  // App Store page (https://apps.apple.com/app/idXXXXXXXXXX).
  // null until the App Store page exists: the button shows 'iPhone: coming soon'
  // (when it is set, the howto texts below can go back to a store-neutral "Download it")
  appStoreUrl: null,
  // Google Play page — the package id is final once uploaded
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.platejam.game',
  // the app's custom URL scheme (iOS Info.plist CFBundleURLTypes / Android intent-filter)
  appScheme: 'platejam://c/#',
};
/* ================================================================================== */

(function () {
  'use strict';

  // The game's own wording (apps/kitchen-rush/src/i18n): challenge.* for the card texts, the data
  // strings' restaurant names and ratings, hud.seconds and the language's decimal separator for the time.
  // iphoneSoon: until the iPhone version is out (PLATEJAM_CONFIG.appStoreUrl null).
  var STRINGS = {
    en: {
      tagline: 'Stack the orders, keep the counter clear, beat the clock!',
      challenges: '{name} challenges you!',
      someone: 'A friend',
      level: '{restaurant} – level {n}',
      toBeat: 'Score to beat',
      open: 'Open in Plate Jam',
      appStore: 'Download on the App Store',
      iphoneSoon: 'iPhone: coming soon',
      play: 'Get it on Google Play',
      howto: 'Already have Plate Jam? Tap “Open in Plate Jam”. New here? Get it on Google Play, then come back to this page and tap “Open in Plate Jam” to play the challenge.',
      invalid: 'This challenge link is incomplete. Ask your friend to send it again!',
      noChallenge: 'Get Plate Jam and challenge your friends!',
      seconds: '{s}s',
      dec: '.',
      ratings: { good: 'GOOD', great: 'GREAT', super: 'SUPER', 'chefs-kiss': "CHEF'S KISS" },
    },
    it: {
      tagline: 'Componi gli ordini, tieni libero il bancone, batti il tempo!',
      challenges: '{name} ti sfida!',
      someone: 'Un amico',
      level: '{restaurant} – livello {n}',
      toBeat: 'Punteggio da battere',
      open: 'Apri in Plate Jam',
      appStore: 'Scarica su App Store',
      iphoneSoon: 'iPhone: in arrivo',
      play: 'Scarica su Google Play',
      howto: 'Hai già Plate Jam? Tocca “Apri in Plate Jam”. Non ce l’hai? Scaricalo da Google Play, poi torna su questa pagina e tocca “Apri in Plate Jam” per giocare la sfida.',
      invalid: 'Questo link di sfida è incompleto. Chiedi al tuo amico di rimandarlo!',
      noChallenge: 'Scarica Plate Jam e sfida i tuoi amici!',
      seconds: '{s} s',
      dec: ',',
      ratings: { good: 'BUONO', great: 'OTTIMO', super: 'SUPER', 'chefs-kiss': 'DA CHEF!' },
    },
    es: {
      tagline: '¡Arma los pedidos, deja libre el mostrador y gana al reloj!',
      challenges: '¡{name} te reta!',
      someone: 'Un amigo',
      level: '{restaurant} – nivel {n}',
      toBeat: 'Puntuación a superar',
      open: 'Abrir en Plate Jam',
      appStore: 'Descargar en App Store',
      iphoneSoon: 'iPhone: muy pronto',
      play: 'Disponible en Google Play',
      howto: '¿Ya tienes Plate Jam? Toca «Abrir en Plate Jam». ¿No lo tienes? Descárgalo en Google Play, vuelve a esta página y toca «Abrir en Plate Jam» para jugar el reto.',
      invalid: 'Este enlace de reto está incompleto. ¡Pide a tu amigo que te lo reenvíe!',
      noChallenge: '¡Descarga Plate Jam y reta a tus amigos!',
      seconds: '{s} s',
      dec: ',',
      ratings: { good: 'BIEN', great: 'GENIAL', super: 'SÚPER', 'chefs-kiss': '¡DE CHEF!' },
    },
    de: {
      tagline: 'Staple die Bestellungen, halte die Theke frei, sei schneller als die Uhr!',
      challenges: '{name} fordert dich heraus!',
      someone: 'Jemand',
      level: '{restaurant} – Level {n}',
      toBeat: 'Zu schlagen',
      open: 'In Plate Jam öffnen',
      appStore: 'Laden im App Store',
      iphoneSoon: 'iPhone: bald verfügbar',
      play: 'Jetzt bei Google Play',
      howto: 'Hast du Plate Jam schon? Tippe auf „In Plate Jam öffnen“. Neu hier? Hol es dir bei Google Play, komm dann auf diese Seite zurück und tippe auf „In Plate Jam öffnen“, um das Duell zu spielen.',
      invalid: 'Dieser Duell-Link ist unvollständig. Lass ihn dir nochmal schicken!',
      noChallenge: 'Hol dir Plate Jam und fordere deine Freunde heraus!',
      seconds: '{s} s',
      dec: ',',
      ratings: { good: 'GUT', great: 'KLASSE', super: 'SUPER', 'chefs-kiss': 'MEISTERHAFT' },
    },
    fr: {
      tagline: 'Empile les commandes, garde le comptoir libre, bats le chrono !',
      challenges: '{name} te lance un défi !',
      someone: 'Un ami',
      level: '{restaurant} – niveau {n}',
      toBeat: 'Score à battre',
      open: 'Ouvrir dans Plate Jam',
      appStore: 'Télécharger dans l’App Store',
      iphoneSoon: 'iPhone : bientôt disponible',
      play: 'Disponible sur Google Play',
      howto: 'Tu as déjà Plate Jam ? Touche « Ouvrir dans Plate Jam ». Tu ne l’as pas encore ? Télécharge-le sur Google Play, puis reviens sur cette page et touche « Ouvrir dans Plate Jam » pour relever le défi.',
      invalid: 'Ce lien de défi est incomplet. Demande à ton ami de le renvoyer !',
      noChallenge: 'Télécharge Plate Jam et défie tes amis !',
      seconds: '{s} s',
      dec: ',',
      ratings: { good: 'BIEN', great: 'GÉNIAL', super: 'SUPER', 'chefs-kiss': 'DIGNE D’UN CHEF' },
    },
    id: {
      tagline: 'Susun pesanan, jaga meja tetap lega, dan kalahkan waktu!',
      challenges: '{name} menantangmu!',
      someone: 'Seorang teman',
      level: '{restaurant} – level {n}',
      toBeat: 'Skor lawan',
      open: 'Buka di Plate Jam',
      appStore: 'Unduh di App Store',
      iphoneSoon: 'iPhone: segera hadir',
      play: 'Dapatkan di Google Play',
      howto: 'Sudah punya Plate Jam? Ketuk “Buka di Plate Jam”. Belum punya? Unduh di Google Play, lalu kembali ke halaman ini dan ketuk “Buka di Plate Jam” untuk memainkan tantangannya.',
      invalid: 'Tautan tantangan ini tidak lengkap. Minta temanmu mengirimnya lagi!',
      noChallenge: 'Unduh Plate Jam dan tantang teman-temanmu!',
      seconds: '{s} dtk',
      dec: ',',
      ratings: { good: 'BAGUS', great: 'HEBAT', super: 'SUPER', 'chefs-kiss': 'ALA CHEF' },
    },
    nl: {
      tagline: 'Stapel de bestellingen, houd de toonbank vrij en versla de klok!',
      challenges: '{name} daagt je uit!',
      someone: 'Een vriend',
      level: '{restaurant} – level {n}',
      toBeat: 'Te verbeteren score',
      open: 'Openen in Plate Jam',
      appStore: 'Download in de App Store',
      iphoneSoon: 'iPhone: binnenkort',
      play: 'Ontdek het op Google Play',
      howto: 'Heb je Plate Jam al? Tik op “Openen in Plate Jam”. Nog niet? Download het via Google Play, kom dan terug naar deze pagina en tik op “Openen in Plate Jam” om het duel te spelen.',
      invalid: 'Deze duellink is onvolledig. Vraag je vriend om hem opnieuw te sturen!',
      noChallenge: 'Download Plate Jam en daag je vrienden uit!',
      seconds: '{s}s',
      dec: ',',
      ratings: { good: 'GOED', great: 'TOP', super: 'SUPER', 'chefs-kiss': 'MEESTERLIJK' },
    },
    pl: {
      tagline: 'Układaj zamówienia, trzymaj ladę wolną i wygraj z czasem!',
      challenges: '{name} wyzywa cię!',
      someone: 'Ktoś znajomy',
      level: '{restaurant} – poziom {n}',
      toBeat: 'Wynik do pobicia',
      open: 'Otwórz w Plate Jam',
      appStore: 'Pobierz z App Store',
      iphoneSoon: 'iPhone: już wkrótce',
      play: 'Pobierz z Google Play',
      howto: 'Masz już Plate Jam? Dotknij przycisku „Otwórz w Plate Jam”. Jeszcze nie masz? Pobierz grę z Google Play, wróć na tę stronę i dotknij przycisku „Otwórz w Plate Jam”, aby podjąć wyzwanie.',
      invalid: 'Link do wyzwania jest niepełny. Poproś znajomego, żeby wysłał go jeszcze raz!',
      noChallenge: 'Pobierz Plate Jam i rzuć wyzwanie znajomym!',
      seconds: '{s} s',
      dec: ',',
      ratings: { good: 'DOBRZE', great: 'ŚWIETNIE', super: 'SUPER', 'chefs-kiss': 'MISTRZOWSKO' },
    },
    'pt-BR': {
      tagline: 'Monte os pedidos, deixe o balcão livre e vença o relógio!',
      challenges: '{name} te desafiou!',
      someone: 'Um amigo',
      level: '{restaurant} – nível {n}',
      toBeat: 'Placar a superar',
      open: 'Abrir no Plate Jam',
      appStore: 'Baixar na App Store',
      iphoneSoon: 'iPhone: em breve',
      play: 'Disponível no Google Play',
      howto: 'Já tem o Plate Jam? Toque em “Abrir no Plate Jam”. Ainda não tem? Baixe no Google Play, volte a esta página e toque em “Abrir no Plate Jam” para jogar o desafio.',
      invalid: 'Este link de desafio está incompleto. Peça para seu amigo mandar de novo!',
      noChallenge: 'Baixe o Plate Jam e desafie seus amigos!',
      seconds: '{s}s',
      dec: ',',
      ratings: { good: 'BOM', great: 'ÓTIMO', super: 'SUPER', 'chefs-kiss': 'DE CHEF' },
    },
    tr: {
      tagline: 'Siparişleri diz, tezgâhı boş tut, zamana karşı yarış!',
      challenges: '{name} sana meydan okuyor!',
      someone: 'Bir arkadaş',
      level: '{restaurant} – bölüm {n}',
      toBeat: 'Geçilecek skor',
      open: 'Plate Jam’de aç',
      appStore: 'App Store’dan indirin',
      iphoneSoon: 'iPhone: çok yakında',
      play: 'Google Play’den indirin',
      howto: 'Plate Jam zaten yüklü mü? “Plate Jam’de aç” düğmesine dokun. Henüz yok mu? Google Play’den indir, sonra bu sayfaya dön ve düelloyu oynamak için “Plate Jam’de aç” düğmesine dokun.',
      invalid: 'Bu düello bağlantısı eksik. Arkadaşından tekrar göndermesini iste!',
      noChallenge: 'Plate Jam’i indir ve arkadaşlarına meydan oku!',
      seconds: '{s} s',
      dec: ',',
      ratings: { good: 'İYİ', great: 'HARİKA', super: 'SÜPER', 'chefs-kiss': 'ŞEF İŞİ' },
    },
  };
  var RESTAURANTS = {
    en: { r1: 'Food Truck', r2: 'Fiesta Cantina', r3: "L'Antico Forno", r4: 'Sushi Bar' },
    it: { r1: 'Food Truck', r2: 'Fiesta Cantina', r3: "L'Antico Forno", r4: 'Sushi Bar' },
    es: { r1: 'Food Truck', r2: 'Cantina Fiesta', r3: "L'Antico Forno", r4: 'Sushi Bar' },
    de: { r1: 'Food Truck', r2: 'Fiesta Cantina', r3: "L'Antico Forno", r4: 'Sushi Bar' },
    fr: { r1: 'Food Truck', r2: 'Fiesta Cantina', r3: "L'Antico Forno", r4: 'Sushi Bar' },
    id: { r1: 'Food Truck', r2: 'Fiesta Cantina', r3: "L'Antico Forno", r4: 'Sushi Bar' },
    nl: { r1: 'Food Truck', r2: 'Fiesta Cantina', r3: "L'Antico Forno", r4: 'Sushi Bar' },
    pl: { r1: 'Food Truck', r2: 'Fiesta Cantina', r3: "L'Antico Forno", r4: 'Sushi Bar' },
    'pt-BR': { r1: 'Food Truck', r2: 'Fiesta Cantina', r3: "L'Antico Forno", r4: 'Sushi Bar' },
    tr: { r1: 'Food Truck', r2: 'Fiesta Cantina', r3: "L'Antico Forno", r4: 'Sushi Bar' },
  };
  var RATINGS = ['good', 'great', 'super', 'chefs-kiss'];

  // a browser language (the part before - or _) → the page language, the game's own map
  // (apps/kitchen-rush/src/i18n/index.ts DEVICE_CODES): any Portuguese → pt-BR, de-AT → de,
  // Android's old "in" → id; anything else → en
  var LANG_CODES = { en: 'en', it: 'it', es: 'es', de: 'de', fr: 'fr', pt: 'pt-BR', nl: 'nl', pl: 'pl', tr: 'tr', id: 'id', 'in': 'id' };
  function lang() {
    var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
    for (var i = 0; i < list.length; i++) {
      var code = String(list[i] || '').toLowerCase().split(/[-_]/)[0];
      if (Object.prototype.hasOwnProperty.call(LANG_CODES, code)) return LANG_CODES[code];
    }
    return 'en';
  }
  var L = lang();
  var S = STRINGS[L];
  function fill(s, p) {
    return s.replace(/\{(\w+)\}/g, function (_, k) {
      return p[k] != null ? p[k] : '';
    });
  }

  /* --- the challenge code: same format as packages/kitchen-engine/src/friendLink.ts --- */
  function cyrb128(str) {
    var h1 = 1779033703, h2 = 3144134277, h3 = 1013904242, h4 = 2773480762;
    for (var i = 0; i < str.length; i++) {
      var k = str.charCodeAt(i);
      h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
      h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
      h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
      h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
    }
    h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
    h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
    h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
    h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
    h1 ^= h2 ^ h3 ^ h4;
    return h1 >>> 0;
  }
  function decode(code) {
    try {
      if (!/^[A-Za-z0-9_-]{8,400}$/.test(code)) return null;
      var bin = atob(code.replace(/-/g, '+').replace(/_/g, '/'));
      var bytes = new Uint8Array(bin.length);
      for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      var text = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
      var parts = text.split('.');
      if (parts.length !== 11) return null;
      var sum = parts.pop();
      if (cyrb128('platejam-challenge|' + parts.join('.')).toString(36) !== sum) return null;
      if (parts[0] !== '1' || !RESTAURANTS.en[parts[1]]) return null;
      var stars = Number(parts[6]);
      var rating = RATINGS[Number(parts[8])];
      if (!(stars >= 1 && stars <= 3) || !rating) return null;
      return { restaurant: parts[1], n: Number(parts[2]), stars: stars, timeMs: Number(parts[7]), rating: rating, name: safeName(parts[9]) };
    } catch (e) {
      return null;
    }
  }
  // The challenger's name is user-generated: show it only if it passes the game's player-name rules
  // (letters, numbers, space, _; 2-16 characters; no rude words). Copy of packages/kitchen-engine/src/meta/profile.ts
  // BLOCK_ANYWHERE / BLOCK_WORD (a test keeps the two in sync); otherwise "someone".
  var BLOCK_ANYWHERE = ['fuck', 'fvck', 'phuck', 'shit', 'cunt', 'nigg', 'bitch', 'whore', 'slut', 'faggot', 'dickhead', 'asshole', 'motherf', 'wanker', 'rapist', 'pedo', 'cazzo', 'cazzi', 'merda', 'troia', 'puttan', 'stronz', 'vaffanc', 'coglion', 'minchia', 'frocio', 'froci', 'bastard', 'zoccol', 'mignott', 'porcodio', 'porcamadonna', 'diocane', 'mierda', 'cabron', 'pendej', 'gilipoll', 'joder', 'maricon', 'hijodeputa', 'hdp', 'chingad', 'culero', 'pinche', 'putita', 'cojon', 'zorra', 'hitler', 'nazis'];
  var BLOCK_WORD = ['ass', 'dick', 'cock', 'fag', 'puta', 'puto', 'culo', 'coño', 'cono', 'verga', 'polla', 'fica', 'figa', 'pene', 'nazi', 'sex', 'porn', 'tits', 'kkk'];
  var LEET = { 0: 'o', 1: 'i', 3: 'e', 4: 'a', 5: 's', 7: 't', 8: 'b', 9: 'g' };
  function fold(s) {
    return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }
  function unleet(s) {
    return s.replace(/[0-9]/g, function (d) {
      return LEET[d] || d;
    });
  }
  function safeName(raw) {
    if (!raw) return null;
    var name = String(raw).replace(/\s+/g, ' ').trim();
    var len = Array.from(name).length;
    if (len < 2 || len > 16) return null;
    if (!/^[\p{L}\p{M}\p{N} _]+$/u.test(name)) return null;
    var f = fold(name);
    var joined = unleet(f.replace(/[\s_]+/g, ''));
    for (var i = 0; i < BLOCK_ANYWHERE.length; i++) if (joined.indexOf(BLOCK_ANYWHERE[i]) >= 0) return null;
    var words = f.split(/[\s_]+/).map(unleet);
    for (var j = 0; j < BLOCK_WORD.length; j++) if (words.indexOf(fold(BLOCK_WORD[j])) >= 0) return null;
    return name;
  }
  function formatTime(ms) {
    var tenths = Math.floor(ms / 100);
    var s = Math.floor(tenths / 10);
    if (s < 60) return fill(S.seconds, { s: s + S.dec + (tenths % 10) });
    var sec = s % 60;
    return Math.floor(s / 60) + ':' + (sec < 10 ? '0' : '') + sec + S.dec + (tenths % 10);
  }

  function $(id) {
    return document.getElementById(id);
  }
  function text(id, value) {
    var el = $(id);
    if (el) el.textContent = value;
  }

  document.documentElement.lang = L;
  text('tagline', S.tagline);
  var ios = $('btn-appstore');
  var android = $('btn-play');
  if (ios && PLATEJAM_CONFIG.appStoreUrl) {
    ios.href = PLATEJAM_CONFIG.appStoreUrl;
    ios.textContent = S.appStore;
  } else if (ios) {
    // no App Store page yet: a muted label, not a link (no href = nothing to tap, not focusable)
    ios.removeAttribute('href');
    ios.removeAttribute('rel');
    ios.className += ' is-soon';
    ios.textContent = S.iphoneSoon;
  }
  if (android) {
    android.href = PLATEJAM_CONFIG.playStoreUrl;
    android.textContent = S.play;
  }
  // the store of this phone first
  var ua = navigator.userAgent || '';
  if (/android/i.test(ua) && ios && android && ios.parentNode === android.parentNode) ios.parentNode.insertBefore(android, ios);

  var card = $('challenge');
  if (!card) return;
  var code = (location.hash || '').replace(/^#/, '').replace(/^c=/, '') || new URLSearchParams(location.search).get('c') || '';
  var c = code ? decode(code) : null;
  if (!c) {
    card.classList.add('is-empty');
    text('challenge-title', code ? S.invalid : S.noChallenge);
    var open0 = $('btn-open');
    if (open0) open0.hidden = true;
    var howto0 = $('howto');
    if (howto0) howto0.hidden = true;
    return;
  }
  var name = c.name || S.someone;
  var restaurant = (RESTAURANTS[L] || RESTAURANTS.en)[c.restaurant];
  document.title = fill(S.challenges, { name: name }) + ' · Plate Jam';
  text('challenge-title', fill(S.challenges, { name: name }));
  text('challenge-level', fill(S.level, { restaurant: restaurant, n: c.n }));
  text('challenge-tobeat', S.toBeat);
  text('challenge-stars', '★★★'.slice(0, c.stars) + '☆☆☆'.slice(0, 3 - c.stars));
  $('challenge-stars').setAttribute('aria-label', c.stars + '/3');
  text('challenge-time', formatTime(c.timeMs));
  text('challenge-rating', S.ratings[c.rating]);
  text('howto', S.howto);
  var open = $('btn-open');
  open.href = PLATEJAM_CONFIG.appScheme + code;
  open.textContent = S.open;
})();
