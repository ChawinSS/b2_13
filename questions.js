const quizDataFromFile = [
  {
    "question": "enumerate, count",
    "correct": "aufzählen",
    "choices": [
      "anfällig",
      "aufzählen",
      "der Anreiz",
      "überhören"
    ]
  },
  {
    "question": "be present, exist",
    "correct": "vorliegen",
    "choices": [
      "die Stellungnahme",
      "wiedererkennen",
      "der&nbsp;Einzelfall",
      "vorliegen"
    ]
  },
  {
    "question": "basis, principle",
    "correct": "die Grundlage",
    "choices": [
      "die Grundlage",
      "der Tempel",
      "bäuerlich",
      "die Hektik"
    ]
  },
  {
    "question": "dialect",
    "correct": "der Dialekt",
    "choices": [
      "der Dialekt",
      "irgendwie",
      "die Gestalt",
      "tippen"
    ]
  },
  {
    "question": "irritate",
    "correct": "irritieren",
    "choices": [
      "durchsuchen",
      "begnadet",
      "der Vize",
      "irritieren"
    ]
  },
  {
    "question": "travel Guide",
    "correct": "der Reiseführer",
    "choices": [
      "rächen",
      "der Krankenstand",
      "der Reiseführer",
      "die Sequenz"
    ]
  },
  {
    "question": "standard language",
    "correct": "die Hochsprache",
    "choices": [
      "die Hochsprache",
      "schräg",
      "legendär",
      "der Krampf"
    ]
  },
  {
    "question": "feature, characteristic",
    "correct": "die Besonderheit",
    "choices": [
      "die Besonderheit",
      "an etwas gewinnen",
      "unbestritten",
      "tippen"
    ]
  },
  {
    "question": "advance,&nbsp;progress",
    "correct": "fortschreiten",
    "choices": [
      "verwählen",
      "der Bettvorleger",
      "die Lähmung",
      "fortschreiten"
    ]
  },
  {
    "question": "domination",
    "correct": "die Dominanz",
    "choices": [
      "die Dominanz",
      "die Belastung",
      "hochwertig",
      "vorsehen"
    ]
  },
  {
    "question": "multilingual, polyglot",
    "correct": "vielsprachig",
    "choices": [
      "vielsprachig",
      "radikal",
      "das Sichtfeld",
      "unweit"
    ]
  },
  {
    "question": "Indian, native american",
    "correct": "der Indianer",
    "choices": [
      "der Indianer",
      "der Lebenswandel",
      "hinzugewinnen",
      "knuddeln"
    ]
  },
  {
    "question": "impoverishment",
    "correct": "die Verarmung",
    "choices": [
      "der Asphalt",
      "die Verarmung",
      "mechanisieren",
      "die Wetterlage"
    ]
  },
  {
    "question": "warn",
    "correct": "warnen vor + D",
    "choices": [
      "warnen vor + D",
      "träumen",
      "Teils, teils",
      "musizieren"
    ]
  },
  {
    "question": "reach, acquire",
    "correct": "gelangen",
    "choices": [
      "das Voranschreiten",
      "gelangen",
      "das Kriterium",
      "Gelder"
    ]
  },
  {
    "question": "gifted",
    "correct": "begnadet",
    "choices": [
      "die Gefangenschaft",
      "die Bewunderung",
      "ausflippen",
      "begnadet"
    ]
  },
  {
    "question": "tame",
    "correct": "zahm",
    "choices": [
      "umbenennen in",
      "zahm",
      "der Raufbold",
      "ausleben"
    ]
  },
  {
    "question": "curious",
    "correct": "kurios",
    "choices": [
      "das Kabäuschen",
      "die Sauklaue",
      "kurios",
      "rasen"
    ]
  },
  {
    "question": "take away, remove",
    "correct": "wegnehmen",
    "choices": [
      "der Mut",
      "hineingeraten",
      "der Instinkt",
      "wegnehmen"
    ]
  },
  {
    "question": "method of&nbsp;payment",
    "correct": "die Zahlungsmöglichkeit",
    "choices": [
      "die Zahlungsmöglichkeit",
      "die Maulbeere",
      "putzmunter",
      "die Verwunderung"
    ]
  },
  {
    "question": "Quark",
    "correct": "der Quark",
    "choices": [
      "entkommen",
      "einmalig",
      "geborgen",
      "der Quark"
    ]
  },
  {
    "question": "silver",
    "correct": "das Silber",
    "choices": [
      "neugotisch",
      "das Länderspiel",
      "das Silber",
      "der Sonnenkollektor"
    ]
  },
  {
    "question": "diamond",
    "correct": "der Diamant",
    "choices": [
      "der Diamant",
      "kritisch",
      "staunt",
      "einleuchtend"
    ]
  },
  {
    "question": "Cape Town",
    "correct": "das Kapstadt",
    "choices": [
      "das Kapstadt",
      "einweihen",
      "auf dem Standpunkt stehen",
      "nachsagen"
    ]
  },
  {
    "question": "analogy",
    "correct": "die Analogie",
    "choices": [
      "die Analogie",
      "erzwingen",
      "anlocken",
      "sofern"
    ]
  },
  {
    "question": "night before Christmas",
    "correct": "Heiliger Abend",
    "choices": [
      "der Urmensch",
      "Eindruck erwecken",
      "Heiliger Abend",
      "der Weizen"
    ]
  },
  {
    "question": "come up, appear",
    "correct": "aufkommen",
    "choices": [
      "aufkommen",
      "das Morgengrauen",
      "der Hobel",
      "der Ausgleichssport"
    ]
  },
  {
    "question": "means of payment",
    "correct": "das Zahlungsmittel",
    "choices": [
      "rein",
      "zustehen",
      "die Giraffe",
      "das Zahlungsmittel"
    ]
  },
  {
    "question": "advisor",
    "correct": "der Ratgeber",
    "choices": [
      "der Ratgeber",
      "das Wehrlager",
      "handeln von + D",
      "autonom"
    ]
  },
  {
    "question": "declare oneself in agreement/willing",
    "correct": "sich einverstanden/bereit erklären",
    "choices": [
      "routiniert",
      "die Arthritis",
      "sich einverstanden/bereit erklären",
      "der Seufzer"
    ]
  },
  {
    "question": "debit, charge",
    "correct": "abbuchen",
    "choices": [
      "umklammern",
      "der Vormund",
      "abbuchen",
      "aufbringen"
    ]
  },
  {
    "question": "debit entry, withdrawal",
    "correct": "die Abbuchung",
    "choices": [
      "die Truppe",
      "der Klang",
      "die Abbuchung",
      "der Mangel"
    ]
  },
  {
    "question": "permit,&nbsp;approve",
    "correct": "genehmigen",
    "choices": [
      "genehmigen",
      "kontern",
      "nuscheln",
      "die Ersatzfrage"
    ]
  },
  {
    "question": "cancel, undo",
    "correct": "rückgängig machen",
    "choices": [
      "der Tempel",
      "rückgängig machen",
      "der Permafrost",
      "die Revitalisierung"
    ]
  },
  {
    "question": "PIN number",
    "correct": "die Geheimzahl",
    "choices": [
      "imposant",
      "vertiefen",
      "Verantwortung tragen für",
      "die Geheimzahl"
    ]
  },
  {
    "question": "access to",
    "correct": "zugreifen auf ...",
    "choices": [
      "zugreifen auf ...",
      "abfragen",
      "nuscheln",
      "die Schleuse"
    ]
  },
  {
    "question": "harmful, adversely",
    "correct": "nachteilig",
    "choices": [
      "nachteilig",
      "das Ambiente",
      "bedecken",
      "abschwellen"
    ]
  },
  {
    "question": "revoke, cancel an order",
    "correct": "widerrufen",
    "choices": [
      "die Vorgabe",
      "widerrufen",
      "die Reizflut",
      "kratzen"
    ]
  },
  {
    "question": "fear",
    "correct": "befürchten",
    "choices": [
      "entgegennehmen",
      "befürchten",
      "Interesse wecken für",
      "zur Folge haben"
    ]
  },
  {
    "question": "nervous",
    "correct": "nervös",
    "choices": [
      "die Authentizität",
      "nervös",
      "das Aufsehen",
      "der Stichpunkt"
    ]
  },
  {
    "question": "leave a message",
    "correct": "Nachricht hinterlassen",
    "choices": [
      "Nachricht hinterlassen",
      "versetzen",
      "schlagartig",
      "ausgebrannt"
    ]
  },
  {
    "question": "to be connected",
    "correct": "sich verbinden lassen",
    "choices": [
      "abdecken",
      "sich verbinden lassen",
      "überbrücken",
      "enorm"
    ]
  },
  {
    "question": "make sure",
    "correct": "sich vergewissern",
    "choices": [
      "der Retter",
      "der Gefolgsmann",
      "sich vergewissern",
      "die Administration"
    ]
  },
  {
    "question": "reinsurance, safeguard",
    "correct": "die Rückversicherung",
    "choices": [
      "der Vorsitzender",
      "die Rückversicherung",
      "kontern",
      "der Pfeil"
    ]
  },
  {
    "question": "forgiveness",
    "correct": "die Verzeihung",
    "choices": [
      "eben",
      "regnerisch",
      "die Vorbereitung",
      "die Verzeihung"
    ]
  },
  {
    "question": "to pass on something to somebody",
    "correct": "jemandem etwas ausrichten",
    "choices": [
      "jemandem etwas ausrichten",
      "das Zeremoniell",
      "vergnügt",
      "fraglos"
    ]
  },
  {
    "question": "misdial",
    "correct": "verwählen",
    "choices": [
      "sich anpassen",
      "der Anstieg",
      "der Betrogener",
      "verwählen"
    ]
  },
  {
    "question": "keep, hold tight",
    "correct": "festhalten",
    "choices": [
      "vereinte Nationen",
      "widerstreben",
      "festhalten",
      "die Befragung"
    ]
  },
  {
    "question": "remain",
    "correct": "verbleiben",
    "choices": [
      "verbleiben",
      "die Bundestagsfraktion",
      "die Verunreinigung",
      "Ruhe bewahren"
    ]
  },
  {
    "question": "direct dialing,&nbsp;extension number",
    "correct": "die Durchwahl",
    "choices": [
      "beschnuppern",
      "die Ernährung",
      "die Durchwahl",
      "das Grab"
    ]
  },
  {
    "question": "apparatus",
    "correct": "der Apparat",
    "choices": [
      "die Planung",
      "der Apparat",
      "vollkommen",
      "der Zeigefinger"
    ]
  },
  {
    "question": "handle",
    "correct": "handhaben",
    "choices": [
      "erfahren sein in + D",
      "einweihen",
      "handhaben",
      "mechanisch"
    ]
  },
  {
    "question": "line",
    "correct": "der Strich",
    "choices": [
      "herunterkühlen",
      "akut",
      "riesengroß",
      "der Strich"
    ]
  },
  {
    "question": "inquire",
    "correct": "sich erkundigen bei/nach + D/D",
    "choices": [
      "sich erkundigen bei/nach + D/D",
      "das Trikot",
      "das Gespött",
      "leibhaftig"
    ]
  },
  {
    "question": "condition,&nbsp;modality",
    "correct": "die Modalität",
    "choices": [
      "erhöhen",
      "die Piste",
      "die Modalität",
      "der Fehlpass"
    ]
  },
  {
    "question": "membership",
    "correct": "die Mitgliedschaft",
    "choices": [
      "weit verbreitet",
      "die Mitgliedschaft",
      "die Gaststätte",
      "die Körperhälfte"
    ]
  },
  {
    "question": "fat",
    "correct": "fett",
    "choices": [
      "der Freiberufler",
      "die Arthritis",
      "verfilmen",
      "fett"
    ]
  },
  {
    "question": "filled",
    "correct": "gefüllt",
    "choices": [
      "das Raumschiff",
      "die Aktie",
      "gefüllt",
      "diffus"
    ]
  },
  {
    "question": "by email",
    "correct": "per E-Mail",
    "choices": [
      "infolge",
      "ankündigen",
      "löchrig",
      "per E-Mail"
    ]
  },
  {
    "question": "relaxation massage",
    "correct": "die Entspannungsmassage&nbsp;",
    "choices": [
      "die Entspannungsmassage&nbsp;",
      "taufen",
      "der Volkskundler",
      "vorhersehen"
    ]
  },
  {
    "question": "fee",
    "correct": "der Beitrag",
    "choices": [
      "das Trikot",
      "schlau",
      "kommerziell",
      "der Beitrag"
    ]
  },
  {
    "question": "place a bet",
    "correct": "setzen auf",
    "choices": [
      "delegieren",
      "setzen auf",
      "ausgehend",
      "sich wenden an + Akk."
    ]
  },
  {
    "question": "heritability",
    "correct": "die Erblichkeit",
    "choices": [
      "die Entfaltung",
      "das Gut",
      "mitgerissen",
      "die Erblichkeit"
    ]
  },
  {
    "question": "employee",
    "correct": "der Dienstnehmer",
    "choices": [
      "das Äußere",
      "das Embargo",
      "aufzeichnen",
      "der Dienstnehmer"
    ]
  },
  {
    "question": "failure, loss",
    "correct": "der Ausfall",
    "choices": [
      "das Brett",
      "die Schlussfolgerung",
      "aufspannen",
      "der Ausfall"
    ]
  },
  {
    "question": "promoting good health",
    "correct": "gesundheitsfördernd",
    "choices": [
      "der Appell",
      "dafür sorgen",
      "die Belastung",
      "gesundheitsfördernd"
    ]
  },
  {
    "question": "office life",
    "correct": "der Büroalltag",
    "choices": [
      "der Büroalltag",
      "das Wrack",
      "der Bildhauer",
      "der Mauerfall"
    ]
  },
  {
    "question": "well-being",
    "correct": "das Wohlbefinden",
    "choices": [
      "irreal",
      "das Wohlbefinden",
      "bezüglich",
      "wertlos"
    ]
  },
  {
    "question": "company excursion",
    "correct": "der Betriebsausflug",
    "choices": [
      "der Dialog",
      "wehmütig",
      "routiniert",
      "der Betriebsausflug"
    ]
  },
  {
    "question": "sick leave",
    "correct": "der Krankenstand",
    "choices": [
      "das Stammkapital",
      "der Krankenstand",
      "fixieren",
      "das Gelände"
    ]
  },
  {
    "question": "reduce",
    "correct": "verringern",
    "choices": [
      "die Erwägung",
      "zu Ende bringen",
      "verringern",
      "die Umschreibung"
    ]
  },
  {
    "question": "undoubtedly",
    "correct": "zweifellos",
    "choices": [
      "der Kurvenspiegel",
      "zweifellos",
      "verheddern",
      "herauswagen"
    ]
  },
  {
    "question": "psychosomatic",
    "correct": "psychosomatisch",
    "choices": [
      "psychosomatisch",
      "sich Mühe geben",
      "abkommen",
      "tauchen"
    ]
  },
  {
    "question": "symptom",
    "correct": "das Symptom",
    "choices": [
      "der Autobauer",
      "auffallend",
      "das Symptom",
      "ragen"
    ]
  },
  {
    "question": "chronic",
    "correct": "chronisch",
    "choices": [
      "chronisch",
      "die Armee",
      "ausreden",
      "der Schreck"
    ]
  },
  {
    "question": "sink, reduce",
    "correct": "senken",
    "choices": [
      "festhalten",
      "senken",
      "der Satellit",
      "vorhalten"
    ]
  },
  {
    "question": "occasionally,&nbsp;from time to time",
    "correct": "hin und wieder",
    "choices": [
      "hin und wieder",
      "bezaubern",
      "das Genus",
      "Beachtung finden"
    ]
  },
  {
    "question": "root",
    "correct": "die Wurzel",
    "choices": [
      "die Wurzel",
      "die Gaststätte",
      "jemandem etwas schwer fallen",
      "sanft"
    ]
  },
  {
    "question": "overtaxing, excessive demand",
    "correct": "die Überforderung",
    "choices": [
      "Bescheid wissen",
      "die Überforderung",
      "griffbereit",
      "der Erzherzog"
    ]
  },
  {
    "question": "opinion, declaration",
    "correct": "die Stellungnahme",
    "choices": [
      "bewundern",
      "der Bursche",
      "an den Tag legen",
      "die Stellungnahme"
    ]
  },
  {
    "question": "uncomplicated",
    "correct": "unkompliziert",
    "choices": [
      "unwirklich",
      "aufzeichnen",
      "anblicken",
      "unkompliziert"
    ]
  },
  {
    "question": "concern",
    "correct": "das Bedenken",
    "choices": [
      "das Badminton",
      "fünffach",
      "der Prüfungsstoff",
      "das Bedenken"
    ]
  },
  {
    "question": "unpack",
    "correct": "auspacken",
    "choices": [
      "der Antrieb",
      "verzichten auf + A",
      "Für und Wider",
      "auspacken"
    ]
  },
  {
    "question": "be conditional on ...",
    "correct": "bedingt sein durch ...",
    "choices": [
      "bedingt sein durch ...",
      "der Krampf",
      "gehen davon aus, dass ...",
      "schämen"
    ]
  },
  {
    "question": "tremble",
    "correct": "der Schauer",
    "choices": [
      "entlangfahren",
      "das Polareis",
      "das Todesurteil",
      "der Schauer"
    ]
  },
  {
    "question": "shudder, shiver",
    "correct": "der Schauder",
    "choices": [
      "schwitzen",
      "der Weizen",
      "der Schauder",
      "die Schminke"
    ]
  },
  {
    "question": "tremble",
    "correct": "zittern",
    "choices": [
      "gedämpft",
      "ausgebildet",
      "eindrucksvoll",
      "zittern"
    ]
  },
  {
    "question": "knock, tap",
    "correct": "pochen",
    "choices": [
      "drängen",
      "sich anhören",
      "die Legende",
      "pochen"
    ]
  },
  {
    "question": "middle Ages",
    "correct": "das Mittelalter",
    "choices": [
      "das Mittelalter",
      "theologisch",
      "die Mahnung",
      "dafür sorgen"
    ]
  },
  {
    "question": "furious, wild",
    "correct": "rasend",
    "choices": [
      "rasend",
      "träge",
      "stellenweise",
      "entlangfahren"
    ]
  },
  {
    "question": "beat, knock",
    "correct": "klopfen",
    "choices": [
      "historische Ereignisse",
      "problemlos",
      "klopfen",
      "restlich"
    ]
  },
  {
    "question": "bead of sweat",
    "correct": "die Schweißperle",
    "choices": [
      "die Legende",
      "aufkommen lassen",
      "die Schweißperle",
      "die Feuchtigkeit"
    ]
  },
  {
    "question": "nausea",
    "correct": "die Übelkeit",
    "choices": [
      "die Spekulation",
      "abgestimmt",
      "die Übelkeit",
      "die Verarmung"
    ]
  },
  {
    "question": "to block",
    "correct": "blockieren",
    "choices": [
      "blockieren",
      "küren",
      "hin und wieder",
      "das Kloster"
    ]
  },
  {
    "question": "student",
    "correct": "der/die Studierende",
    "choices": [
      "der/die Studierende",
      "der Raub",
      "die Scham",
      "größtmöglich"
    ]
  },
  {
    "question": "competition",
    "correct": "der Wettkampf",
    "choices": [
      "die Sensation",
      "der Wettkampf",
      "die Spekulation",
      "das Endspiel"
    ]
  },
  {
    "question": "fate",
    "correct": "das Schicksal",
    "choices": [
      "die Schließung",
      "einfliegen",
      "das Schicksal",
      "der Humor"
    ]
  },
  {
    "question": "the good thing",
    "correct": "das Gute",
    "choices": [
      "das Gute",
      "die Muskulatur",
      "das Erbgut",
      "die Datenleitung"
    ]
  },
  {
    "question": "interview",
    "correct": "das Einstellungsgespräch",
    "choices": [
      "rustikal",
      "der Prüfungsstoff",
      "das Einstellungsgespräch",
      "die Entscheidungsfindung"
    ]
  },
  {
    "question": "overview",
    "correct": "der Überblick",
    "choices": [
      "der Wettkampf",
      "nachlassen",
      "feierlich",
      "der Überblick"
    ]
  },
  {
    "question": "trick",
    "correct": "der Trick",
    "choices": [
      "subtil",
      "der Krieger",
      "der Trick",
      "auskennen"
    ]
  },
  {
    "question": "morsel, little by little",
    "correct": "Häppchen für Häppchen",
    "choices": [
      "Häppchen für Häppchen",
      "entgegenwirken",
      "federleicht",
      "die Schwierigkeit"
    ]
  },
  {
    "question": "learning material",
    "correct": "lernende Stoff",
    "choices": [
      "die Handelsbeziehung",
      "lernende Stoff",
      "der Apparat",
      "ablenken"
    ]
  },
  {
    "question": "provide, obtain",
    "correct": "verschaffen",
    "choices": [
      "zusammenrollen",
      "wiedererkennen",
      "verschaffen",
      "das&nbsp;Leistungsversagen"
    ]
  },
  {
    "question": "short break,&nbsp;breather",
    "correct": "die&nbsp;Verschnaufpause",
    "choices": [
      "der Reichstag",
      "die Musterklausur",
      "die&nbsp;Verschnaufpause",
      "die Sonnenterrasse"
    ]
  },
  {
    "question": "one and half",
    "correct": "eineinhalb",
    "choices": [
      "die Mitgliedschaft",
      "das Gipfeltreffen",
      "eineinhalb",
      "der Band"
    ]
  },
  {
    "question": "time-out",
    "correct": "die Auszeit",
    "choices": [
      "die Auszeit",
      "die Heiterkeit",
      "der Anstieg",
      "zuversichtlich"
    ]
  },
  {
    "question": "blithely",
    "correct": "munter",
    "choices": [
      "orten",
      "munter",
      "der Abbau",
      "der Korrektor"
    ]
  },
  {
    "question": "warrior",
    "correct": "der Krieger",
    "choices": [
      "der Spuk",
      "der Jahrgang",
      "der Staatschef",
      "der Krieger"
    ]
  },
  {
    "question": "avoid",
    "correct": "meiden",
    "choices": [
      "absuchen",
      "ergreifen",
      "arbeitend",
      "meiden"
    ]
  },
  {
    "question": "scenario",
    "correct": "das Szenario",
    "choices": [
      "das Ensemble",
      "unweit",
      "Man nimmt an,",
      "das Szenario"
    ]
  },
  {
    "question": "examination material",
    "correct": "der Prüfungsstoff",
    "choices": [
      "der Gelegenheitsdieb",
      "der Prüfungsstoff",
      "ergreifend",
      "finanzieren"
    ]
  },
  {
    "question": "to collapse",
    "correct": "zusammenbrechen",
    "choices": [
      "trüben",
      "der Strich",
      "zusammenbrechen",
      "die Truppe"
    ]
  },
  {
    "question": "unnecessary",
    "correct": "unnötig",
    "choices": [
      "gut situiert",
      "unnötig",
      "der Verteidigungsminister",
      "die Existenz"
    ]
  },
  {
    "question": "to list",
    "correct": "auflisten",
    "choices": [
      "repräsentativ",
      "abdecken",
      "ausweisen",
      "auflisten"
    ]
  },
  {
    "question": "despise",
    "correct": "verachten",
    "choices": [
      "die Ewigkeit",
      "der Ausbau",
      "verachten",
      "die Bewunderung"
    ]
  },
  {
    "question": "set up",
    "correct": "aufstellen",
    "choices": [
      "verachten",
      "autistisch",
      "durchsuchen",
      "aufstellen"
    ]
  },
  {
    "question": "expenditure of time",
    "correct": "der Zeitaufwand",
    "choices": [
      "bedingungslos",
      "der Verbraucher",
      "die Sachlichkeit",
      "der Zeitaufwand"
    ]
  },
  {
    "question": "estimate",
    "correct": "abschätzen",
    "choices": [
      "hin und wieder",
      "liquidieren",
      "abschätzen",
      "in Aufregung versetzen"
    ]
  },
  {
    "question": "buffer",
    "correct": "der Puffer",
    "choices": [
      "der Zeigefinger",
      "der Physiotherapeut",
      "der Puffer",
      "daraufhin"
    ]
  },
  {
    "question": "total repeat",
    "correct": "die Gesamtwiederholung",
    "choices": [
      "das Verwandtschaftsverhältnis",
      "die Sonnenblume",
      "in Anspruch nehmen",
      "die Gesamtwiederholung"
    ]
  },
  {
    "question": "Sample exam",
    "correct": "die Musterklausur",
    "choices": [
      "historische Ereignisse",
      "erkunden",
      "die Musterklausur",
      "einen Antrag stellen auf"
    ]
  },
  {
    "question": "otherwise",
    "correct": "andernfalls",
    "choices": [
      "andernfalls",
      "der Zwitter",
      "dahin",
      "verfolgen"
    ]
  },
  {
    "question": "avenge",
    "correct": "rächen",
    "choices": [
      "das Frühstadium",
      "ausharren",
      "handhaben",
      "rächen"
    ]
  },
  {
    "question": "for hours",
    "correct": "stundenlang",
    "choices": [
      "stundenlang",
      "die Gruft",
      "bemüht",
      "einlagern"
    ]
  },
  {
    "question": "ten-minutes",
    "correct": "zehnminütig",
    "choices": [
      "verhaften",
      "die Rahmenbedingungen",
      "matschig",
      "zehnminütig"
    ]
  },
  {
    "question": "loser",
    "correct": "der Versager",
    "choices": [
      "verteidigen",
      "die Urabstimmung",
      "der Versager",
      "aufzählen"
    ]
  },
  {
    "question": "read through (carefully)",
    "correct": "durchlesen",
    "choices": [
      "die Oberschule",
      "der Inlineskate",
      "investieren in + A",
      "durchlesen"
    ]
  },
  {
    "question": "sweat",
    "correct": "schwitzen",
    "choices": [
      "das Aufatmen",
      "schwitzen",
      "eigens",
      "evolutionär"
    ]
  },
  {
    "question": "snack",
    "correct": "der Imbiss",
    "choices": [
      "der Imbiss",
      "der Zusatz",
      "der Breitengrad",
      "einen Entschluss fassen"
    ]
  },
  {
    "question": "level",
    "correct": "das Niveau",
    "choices": [
      "erhältlich",
      "der Ausfall",
      "wertlos",
      "das Niveau"
    ]
  },
  {
    "question": "chocolate bar",
    "correct": "der Schokoriegel",
    "choices": [
      "erzwingen",
      "die Betonplatte",
      "untergehen",
      "der Schokoriegel"
    ]
  },
  {
    "question": "glucose",
    "correct": "der Traubenzucker",
    "choices": [
      "verstreuen",
      "unwegsam",
      "der Traubenzucker",
      "das Loch"
    ]
  },
  {
    "question": "persist",
    "correct": "ausharren",
    "choices": [
      "ausharren",
      "ausflippen",
      "die Abbuchung",
      "die Kappe"
    ]
  },
  {
    "question": "look forward to&nbsp;",
    "correct": "entgegensehen",
    "choices": [
      "entgegensehen",
      "der Freiberufler",
      "unternehmungslustig",
      "der Bürgerkrieg"
    ]
  },
  {
    "question": "unreadable paper",
    "correct": "die Sauklaue",
    "choices": [
      "das Ausmaß",
      "nuscheln",
      "die Sauklaue",
      "wehmütig"
    ]
  },
  {
    "question": "proof-reader",
    "correct": "der Korrektor",
    "choices": [
      "überstehen",
      "die Lernsoftware",
      "der Korrektor",
      "die Belohnung"
    ]
  },
  {
    "question": "subquestion",
    "correct": "die Teilfrage",
    "choices": [
      "die Teilfrage",
      "das Saxofon",
      "verwirrend",
      "die Starre"
    ]
  },
  {
    "question": "distract",
    "correct": "ablenken",
    "choices": [
      "ablenken",
      "die Reiselust",
      "die Sowjetunion",
      "das Alu"
    ]
  },
  {
    "question": "delivered",
    "correct": "ausgeliefert",
    "choices": [
      "das Schneetreiben",
      "Erwartungen wecken",
      "das Fünftel",
      "ausgeliefert"
    ]
  },
  {
    "question": "strike back",
    "correct": "kontern",
    "choices": [
      "kontern",
      "sicher sein vor + D",
      "ausformulieren",
      "ableiten"
    ]
  },
  {
    "question": "spare question",
    "correct": "die Ersatzfrage",
    "choices": [
      "zugänglich",
      "stabil",
      "die Ersatzfrage",
      "gereizt"
    ]
  },
  {
    "question": "aim",
    "correct": "abzielen",
    "choices": [
      "Ruhe bewahren",
      "vorantreiben",
      "abzielen",
      "die Einreise"
    ]
  },
  {
    "question": "handshake",
    "correct": "der Händedruck",
    "choices": [
      "der Händedruck",
      "die Elbe",
      "der Unterzeichner",
      "die Route"
    ]
  },
  {
    "question": "bloody weather",
    "correct": "das Sauwetter",
    "choices": [
      "die Herbstferien",
      "das Sauwetter",
      "der Zusammenbruch",
      "die Korrespondenz"
    ]
  },
  {
    "question": "unfinished",
    "correct": "unfertig",
    "choices": [
      "eine Kreditkarte beantragen",
      "der Pfarrer",
      "die Katastrophe",
      "unfertig"
    ]
  },
  {
    "question": "a hell of a lot&nbsp;",
    "correct": "wahnsinnig viel von",
    "choices": [
      "ausflippen",
      "das Zahlungsmittel",
      "herauslesen",
      "wahnsinnig viel von"
    ]
  },
  {
    "question": "to be hopeless",
    "correct": "kein Land sehen",
    "choices": [
      "einfordern",
      "die Überschneidung",
      "kein Land sehen",
      "ersehnt"
    ]
  },
  {
    "question": "in storage",
    "correct": "auf Lager",
    "choices": [
      "auf Lager",
      "das Nahrungsmittel",
      "die Entspannungsmassage&nbsp;",
      "die Massenflucht"
    ]
  },
  {
    "question": "rapid irregular heartbeats,palpitations",
    "correct": "das Herzrasen",
    "choices": [
      "aufhören mit + D",
      "das Herzrasen",
      "im Gange",
      "das Zahlungsmittel"
    ]
  },
  {
    "question": "formulate",
    "correct": "ausformulieren",
    "choices": [
      "die Beute",
      "die Tat",
      "hadern",
      "ausformulieren"
    ]
  },
  {
    "question": "Uni-newspaper",
    "correct": "die Uni-Zeitung",
    "choices": [
      "die Uni-Zeitung",
      "während",
      "ängstlich",
      "pochen"
    ]
  },
  {
    "question": "test anxiety",
    "correct": "die Prüfungsangst",
    "choices": [
      "die Staatsbürgerkunde",
      "die Prüfungsangst",
      "zusammenfügen",
      "Für und Wider"
    ]
  },
  {
    "question": "striker, forward",
    "correct": "der Stürmer",
    "choices": [
      "der Stürmer",
      "sichAkk. durchsetzen",
      "die Theateraufführung",
      "abschütteln"
    ]
  },
  {
    "question": "retrospective",
    "correct": "rückblickend",
    "choices": [
      "der Buchbinder",
      "schlachten",
      "infrarot",
      "rückblickend"
    ]
  },
  {
    "question": "play football,&nbsp;kick",
    "correct": "kicken",
    "choices": [
      "die Herbstferien",
      "kicken",
      "der Ökonom",
      "die Überschneidung"
    ]
  },
  {
    "question": "world footballer",
    "correct": "der Weltfußballer",
    "choices": [
      "die Geothermie",
      "größtmöglich",
      "der Weltfußballer",
      "einseifen"
    ]
  },
  {
    "question": "purely",
    "correct": "rein",
    "choices": [
      "rein",
      "die Ausreise",
      "radikal",
      "das Denkmal"
    ]
  },
  {
    "question": "fivefold, five times",
    "correct": "fünffach",
    "choices": [
      "die Opposition",
      "beispiellos",
      "überstehen",
      "fünffach"
    ]
  },
  {
    "question": "hit, goal",
    "correct": "der Treffer",
    "choices": [
      "besonnen",
      "der Treffer",
      "aufzählen",
      "das Wehrlager"
    ]
  },
  {
    "question": "scorer",
    "correct": "der Torschütze",
    "choices": [
      "der Torschütze",
      "das Element",
      "stellvertretend",
      "musizieren"
    ]
  },
  {
    "question": "world cup",
    "correct": "die Weltmeisterschaft",
    "choices": [
      "ängstigen",
      "die Weltmeisterschaft",
      "freudig",
      "der Nachkriegstribut"
    ]
  },
  {
    "question": "unselfishly",
    "correct": "uneigennützig",
    "choices": [
      "bewegt",
      "auflegen",
      "uneigennützig",
      "der Schnürstiefel"
    ]
  },
  {
    "question": "bad pass",
    "correct": "der Fehlpass",
    "choices": [
      "der Fehlpass",
      "vorschieben",
      "rustikal",
      "die Aufbereitungsanlage"
    ]
  },
  {
    "question": "state of being extreme&nbsp;excitement",
    "correct": "außer sich geraten",
    "choices": [
      "abgestimmt",
      "lecken",
      "außer sich geraten",
      "die Glocke"
    ]
  },
  {
    "question": "fantastic",
    "correct": "fantastisch",
    "choices": [
      "die Schweißperle",
      "kein Wässerchen trüben können&nbsp;",
      "fantastisch",
      "sich ins Zeug legen"
    ]
  },
  {
    "question": "instinct",
    "correct": "der Instinkt",
    "choices": [
      "belastet",
      "die Kinoleinwand",
      "der Instinkt",
      "einmalig"
    ]
  },
  {
    "question": "enormous, terribly",
    "correct": "ungeheur",
    "choices": [
      "ungeheur",
      "ausweisen",
      "sich sehnen",
      "die Freizügigkeit"
    ]
  },
  {
    "question": "matchfield",
    "correct": "das Spielfeld",
    "choices": [
      "starren",
      "das Spielfeld",
      "aufkommen",
      "sich sorgen um + A"
    ]
  },
  {
    "question": "breath",
    "correct": "der Atemzug",
    "choices": [
      "der Quark",
      "der Atemzug",
      "die Betriebsfeier",
      "der Satellit"
    ]
  },
  {
    "question": "president",
    "correct": "der Präsident",
    "choices": [
      "überwechseln",
      "der Präsident",
      "vergangen",
      "klimatisch"
    ]
  },
  {
    "question": "two-week-old",
    "correct": "zweiwöchig",
    "choices": [
      "flexibel",
      "zweiwöchig",
      "die Degeneration",
      "kein Wässerchen trüben können&nbsp;"
    ]
  },
  {
    "question": "Physiotherapist",
    "correct": "der Physiotherapeut",
    "choices": [
      "die Empfindung",
      "die Gewinnung",
      "der Physiotherapeut",
      "der Fallschirm"
    ]
  },
  {
    "question": "additive",
    "correct": "der Zusatz",
    "choices": [
      "bedingungslos",
      "der Pessimismus",
      "die Forelle",
      "der Zusatz"
    ]
  },
  {
    "question": "Sportswear manufacturer",
    "correct": "der Sportartikelhersteller",
    "choices": [
      "der Buchbinder",
      "der Sportartikelhersteller",
      "die Tat",
      "es geht los"
    ]
  },
  {
    "question": "furniture shop",
    "correct": "das Möbelhaus",
    "choices": [
      "der Tresor",
      "vortragen",
      "das Möbelhaus",
      "der Sportartikelhersteller"
    ]
  },
  {
    "question": "fitness exercises",
    "correct": "der Ausgleichssport",
    "choices": [
      "der Ausgleichssport",
      "das Plakat",
      "gebunden",
      "verzetteln"
    ]
  },
  {
    "question": "in-line skate",
    "correct": "der Inlineskate",
    "choices": [
      "delegieren",
      "verpflichtet sein zu + D",
      "der Inlineskate",
      "sich sorgen um + A"
    ]
  },
  {
    "question": "squash",
    "correct": "das Squash",
    "choices": [
      "die Auflage",
      "die Einzigartigkeit",
      "die Giraffe",
      "das Squash"
    ]
  },
  {
    "question": "badminton",
    "correct": "das Badminton",
    "choices": [
      "rückblickend",
      "hineingeraten",
      "gutschreiben",
      "das Badminton"
    ]
  },
  {
    "question": "Association",
    "correct": "der Verband",
    "choices": [
      "sich erkundigen bei/nach + D/D",
      "der Verband",
      "das Fähnchen",
      "hochschlagen"
    ]
  },
  {
    "question": "taciturn, laconic",
    "correct": "wortkarg",
    "choices": [
      "der Konservator",
      "der Gelegenheitsdieb",
      "die Rügen Insel",
      "wortkarg"
    ]
  },
  {
    "question": "unreal",
    "correct": "irreal",
    "choices": [
      "fraglos",
      "erkunden",
      "sich entschließen zu + D",
      "irreal"
    ]
  },
  {
    "question": "equipment",
    "correct": "die Ausrüstung",
    "choices": [
      "verharren",
      "wutentbrannt",
      "die Ausrüstung",
      "fortschreiten"
    ]
  },
  {
    "question": "actor, player",
    "correct": "der Akteur",
    "choices": [
      "die Ewigkeit",
      "zur Auswahl stehen",
      "einen Beruf ausüben",
      "der Akteur"
    ]
  },
  {
    "question": "crime",
    "correct": "die Kriminalität",
    "choices": [
      "die Kriminalität",
      "der Fallschirm",
      "der Glaser",
      "die Wärmedämmung"
    ]
  },
  {
    "question": "to come close",
    "correct": "nahe kommen",
    "choices": [
      "nahe kommen",
      "empathisch",
      "erstechen",
      "fassen"
    ]
  },
  {
    "question": "protest",
    "correct": "der Protest",
    "choices": [
      "bedenken",
      "zukunftsweisend",
      "das Gespött",
      "der Protest"
    ]
  }
];