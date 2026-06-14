import type { CampsiteConfig } from "../types";

/**
 * Bröcklhof — Ferienwohnungen am Bauernhof in Haus im Ennstal (Steiermark).
 * Inhalt 100 % aus der eigenen Quelle (raw/digest) abgeleitet. Die Quelle beschreibt KEINEN
 * Wohnmobil-Stellplatz/Camping, sondern einen Bauernhof mit zwei Ferienwohnungen (Marie & Therese);
 * deshalb ehrlich als Hofurlaub aufgebaut — nichts erfunden. Übernachtungspreise sind auf der
 * Website nicht angegeben (Buchung über Schladming-Dachstein) → Richtpreise + offene Disclosure.
 */
const IMG = "/campsites/broecklhof";

const broecklhof: CampsiteConfig = {
  name: "Bröcklhof",
  shortName: "Bröcklhof",
  slug: "broecklhof",
  ort: "Haus im Ennstal",
  region: "Steiermark",
  brandKind: "Ferienwohnungen am Bauernhof",
  regionLong: "Schladming-Dachstein · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Bauernhof-Urlaub mit Bergblick im Ennstal",
  claimEmphasis: "mit Bergblick",
  emailDetail: "euer holzverkleideter Bauernhof mit dem Blumenbalkon",
  intro:
    "Zwei gemütliche Ferienwohnungen auf einem echten Bauernhof in Haus im Ennstal: morgens die Tiere am Hof, tagsüber Wandern oder Skifahren am Hauser Kaibling — und abends einfach genießen.",

  logo: { src: `${IMG}/logo.png`, alt: "Bröcklhof Logo" },

  statement: {
    text: "Bei uns gehören Tiere am Hof, weite Bergwiesen und klare Luft noch ganz selbstverständlich zum Tag.",
    emphasis: "ganz selbstverständlich",
  },

  pillars: [
    {
      title: "Mittendrin am Bauernhof",
      text: "Du wohnst nicht in einer Anlage, sondern direkt am Hof — Tiere zum Anfassen, in die sich vor allem Kinder schnell verlieben.",
      image: { src: `${IMG}/hof-sommer.webp`, alt: "Der Bröcklhof im Sommer mit den Bergen im Hintergrund" },
    },
    {
      title: "Die Berge gleich nebenan",
      text: "Im Winter liegen Hauser Kaibling, Hochwurzen und Planai nur Minuten entfernt — im Sommer starten Wanderwege direkt vor der Tür.",
      image: { src: `${IMG}/berge-panorama.webp`, alt: "Bergpanorama im Ennstal über Haus im Ennstal" },
    },
    {
      title: "Zwei Ferienwohnungen zum Wohlfühlen",
      text: "Marie und Therese sind voll ausgestattet — eigene Küche, Sat-TV und gratis WLAN gehören selbstverständlich dazu.",
      image: { src: `${IMG}/fewo-wohnbereich.webp`, alt: "Heller Wohnbereich einer Ferienwohnung am Bröcklhof" },
    },
  ],

  usps: [
    "Eigener Bauernhof mit Tieren",
    "Ski am Hauser Kaibling",
    "Wandern direkt ab Hof",
    "Voll ausgestattete Küche",
    "Gratis WLAN & Sat-TV",
  ],

  trust: {
    heading: "Hofleben, Berge und ein bisschen Ruhe",
    headingEmphasis: "ein bisschen Ruhe",
    intro:
      "Bei Familie Pretscherer wohnst du mitten am Bauernhof — mit Tieren ums Eck, den Bergen des Ennstals vor dem Fenster und Skipisten wie Wanderwegen gleich in der Nähe.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/fewo-therese-wohnraum.webp`, alt: "Helle Ferienwohnung am Bröcklhof mit Wohn-, Koch- und Schlafbereich" },
  },

  camping: {
    heading: "So wohnst du am Bröcklhof",
    intro:
      "Beide Ferienwohnungen sind voll ausgestattet — eigene Küche, getrenntes Bad und WC, Sat-TV und gratis WLAN. Du kochst, wann du willst, und fühlst dich vom ersten Moment an wie daheim.",
    features: [
      {
        title: "Voll ausgestattete Küche",
        text: "Eigene Küche mit Mikrowelle und Geschirrspüler — Selbstversorgung im Urlaub ist hier ganz unkompliziert.",
        image: { src: `${IMG}/kueche.webp`, alt: "Voll ausgestattete Küche der Ferienwohnung am Bröcklhof" },
      },
      {
        title: "Gemütliche Schlafräume",
        text: "Helle Schlafzimmer mit Holzmöbeln und Blick ins Grüne — die Ferienwohnung Marie hat sogar zwei getrennte Schlafräume.",
        image: { src: `${IMG}/schlafzimmer.webp`, alt: "Gemütliches Schlafzimmer mit Bergblick am Bröcklhof" },
      },
      {
        title: "Eigenes Bad mit Dusche",
        text: "In beiden Wohnungen sind Bad und WC getrennt — mit Dusche, Hand- und Badetüchern, alles sauber und gepflegt.",
        image: { src: `${IMG}/badezimmer.webp`, alt: "Eigenes Badezimmer mit Dusche in der Ferienwohnung am Bröcklhof" },
      },
    ],
  },

  mobilheime: {
    heading: "Marie oder Therese?",
    intro:
      "Zwei Ferienwohnungen am Hof: die größere Marie für bis zu fünf Personen, die kompakte Therese mit kleinem Balkon. Beide mit Bergblick und allem, was du für einen entspannten Urlaub brauchst.",
    items: [
      {
        name: "Ferienwohnung Marie",
        kind: "bis 5 Personen · ca. 50 m²",
        text: "Viel Platz für die ganze Familie: zwei Schlafräume, Küche mit Geschirrspüler, getrenntes Bad/WC, Sat-TV und gratis WLAN.",
        image: { src: `${IMG}/fewo-marie-wohnraum.webp`, alt: "Wohn- und Essbereich der Ferienwohnung Marie am Bröcklhof" },
        features: ["ca. 50 m²", "2 Schlafräume", "bis 5 Personen", "Küche & Geschirrspüler", "Sat-TV & WLAN"],
      },
      {
        name: "Ferienwohnung Therese",
        kind: "2–4 Personen · ca. 40 m²",
        text: "Wohnschlafzimmer mit Küche und Geschirrspüler, Bad und WC getrennt — plus ein kleiner Balkon mit schöner Aussicht.",
        image: { src: `${IMG}/fewo-therese-balkon.webp`, alt: "Ferienwohnung Therese am Bröcklhof mit Balkon und Bergblick" },
        features: ["ca. 40 m²", "2–4 Personen", "Küche & Geschirrspüler", "Kleiner Balkon", "Sat-TV & WLAN"],
      },
    ],
  },

  aktivitaeten: {
    heading: "Vor der Haustür wartet das Ennstal",
    intro:
      "Im Sommer locken der Badesee in Aich und die Kneippanlage Weißenbach, im Winter die Pisten am Hauser Kaibling — und Wanderwege gibt es hier zu jeder Jahreszeit.",
    items: [
      {
        title: "Baden am Freizeitsee Aich",
        text: "Die Freizeitseeanlage Aich mit Liegewiese und Badeplattform ist ein beliebter Treffpunkt für warme Sommertage.",
        image: { src: `${IMG}/badeplattform-aich.webp`, alt: "Badeplattform am Freizeitsee Aich" },
      },
      {
        title: "Kneippen in Weißenbach",
        text: "Die Kneippanlage Weißenbach lädt mitten im Wald zum Wassertreten und Auftanken ein — gut erreichbar vom Hof.",
        image: { src: `${IMG}/kneippanlage-weissenbach.webp`, alt: "Kneippanlage Weißenbach im Wald" },
      },
      {
        title: "Winterurlaub am Hof",
        text: "Im Winter liegen Skigebiete wie Hauser Kaibling und Langlaufloipen nur Minuten vom Hof entfernt.",
        image: { src: `${IMG}/hof-winter.webp`, alt: "Der Bröcklhof verschneit im Winter" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Ennstal",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Tauern- oder Pyhrnautobahn bis Liezen bzw. Knoten Ennstal, dann auf der Ennstalbundesstraße B320 nach Haus im Ennstal — weiter nach Ruperting/Höhenfeld.",
      },
      {
        title: "Mit dem Zug",
        text: "Der IC-Bahnhof Schladming liegt rund 8 km entfernt, der Personenzug-Halt Haus im Ennstal nur etwa 1 km vom Hof.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Der nächstgelegene Flughafen ist Salzburg „W. A. Mozart“ — rund 70 km bzw. gut eine Stunde entfernt.",
      },
    ],
  },

  galerie: {
    heading: "Der Bröcklhof in Bildern",
    headingEmphasis: "in Bildern",
    intro:
      "Vom Bauernhof im Sommer über die Obstbaumblüte bis zum Badesee — ein paar Eindrücke aus Haus im Ennstal.",
    tag: "Sommer & Winter",
    images: [
      { src: `${IMG}/hof-sommer-wiese.webp`, alt: "Der Bröcklhof im Sommer, eingebettet in Wiesen und Wald" },
      { src: `${IMG}/obstbluete.webp`, alt: "Obstbaumblüte am Bröcklhof" },
      { src: `${IMG}/schlafzimmer-hell.webp`, alt: "Helles Schlafzimmer in einer Ferienwohnung am Bröcklhof" },
      { src: `${IMG}/hof-winter-panorama.webp`, alt: "Der Bröcklhof im Winter mit verschneiten Bergen im Hintergrund" },
    ],
  },

  booking: {
    heading: "Sichere dir deine Ferienwohnung",
    headingEmphasis: "deine Ferienwohnung",
    intro:
      "Sag uns Zeitraum und Personenzahl — Familie Pretscherer meldet sich persönlich mit der Verfügbarkeit für Marie oder Therese.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise pro Wohnung und Nacht — auf der Website sind keine Übernachtungspreise angegeben (Buchung über Schladming-Dachstein), bitte bestätigen. Zzgl. Ortstaxe € 2,50 pro Person/Nacht und Endreinigung (Therese € 40, Marie € 60); Kurzaufenthaltszuschlag € 3 pro Person/Nacht bis 2 Nächte.",
    highlight: { title: "Persönlich am Hof", text: "Familie Pretscherer empfängt und betreut ihre Gäste selbst." },
    categories: [
      { id: "therese", label: "Fewo Therese (2–4 Pers.)", perNight: 75 },
      { id: "marie", label: "Fewo Marie (bis 5 Pers.)", perNight: 95 },
    ],
  },

  kontakt: {
    tel: "+43 664 1959411",
    telHref: "tel:+436641959411",
    mail: "info@broecklhof.at",
    adresse: "Höhenfeld 22 · 8967 Haus im Ennstal · Steiermark",
    coords: { lat: 47.4125172, lng: 13.7981006 },
  },

  languages: ["DE", "EN"],

  nav: [
    {
      label: "Wohnen",
      href: "#camping",
      children: [
        { label: "Ausstattung", href: "#camping" },
        { label: "Ferienwohnungen", href: "#mobilheime" },
      ],
    },
    { label: "Erleben", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default broecklhof;
