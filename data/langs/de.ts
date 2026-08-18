import { FACTS as F, type LangContent } from "./_schema";

/**
 * ドイツ語（/de/）。読者＝ドイツのパスポート保持者。
 *
 * ⚠️ 数値は F（data/facts.ts）から入れる。文中に直接書かない。
 * ⚠️ ドイツはeVisitorの対象36か国に含まれる＝「あなたは対象です」と言い切れる唯一の強み。
 *    英語版は「対象かどうかを判定させる」構成だが、ドイツ語版は
 *    **対象であることを前提に、無料であることと申請の流れ**を主役にしている。
 * ⚠️ 敬称は Sie（丁寧形）で統一。役所の手続きの説明なので砕けた口調にしない。
 */
export const de: LangContent = {
  code: "de",
  htmlLang: "de",
  label: "Deutsch",
  audience: "Deutschland",
  meta: {
    title: `eVisitor (Subclass 651) für Deutsche: kostenlos nach Australien`,
    description: `Deutsche Staatsangehörige benötigen für Australien das eVisitor-Visum (Subclass 651). Es ist kostenlos, ${F.validMonths} Monate gültig und erlaubt Aufenthalte von bis zu ${F.stayMonths} Monaten pro Einreise. So beantragen Sie es auf der offiziellen Seite.`,
  },
  header: {
    site: "eVisitor Ratgeber",
    tagline: "Australien · eVisitor-Visum (Subclass 651)",
    official: "Offizielle Seite",
  },
  hero: {
    eyebrow: "Australien · eVisitor · Subclass 651",
    h1Before: "Für Deutsche ist das eVisitor-Visum ",
    h1Highlight: "kostenlos",
    h1After: "",
    lead: `Deutschland gehört zu den ${F.eligibleCountries} Ländern, für die Australien das eVisitor-Visum vorsieht. Die Behörde erhebt dafür keine Gebühr: ${F.fee}. Es ist ${F.validMonths} Monate gültig und erlaubt Aufenthalte von bis zu ${F.stayMonths} Monaten pro Einreise.`,
    ctaPrimary: "Auf der offiziellen Seite beantragen",
    ctaSecondary: "Was kostet es wirklich?",
    disclaimer: "Unabhängiger Ratgeber · keine Verbindung zur australischen Regierung · Stand",
    imageAlt: "Sonnige australische Küste mit türkisem Wasser und goldenem Sandstrand",
  },
  stats: [
    { v: F.fee, l: "Gebühr", s: "Keine Antragsgebühr" },
    { v: `${F.validMonths} Monate`, l: "Gültigkeit", s: "Beliebig viele Einreisen" },
    { v: `${F.stayMonths} Monate`, l: "Aufenthalt pro Einreise", s: "Urlaub oder Geschäftsbesuch" },
    { v: F.eligibleCountries.toString(), l: "Berechtigte Länder", s: "Deutschland ist dabei" },
  ],
  whatIs: {
    h2: "Was ist das eVisitor-Visum?",
    p1: "Das eVisitor (Subclass 651) ist ein vollwertiges Besuchervisum für Australien, das elektronisch erteilt wird. Es wird mit Ihrem Reisepass verknüpft – es gibt keinen Aufkleber und keinen Stempel. Erlaubt sind touristische Reisen und geschäftliche Besuchstätigkeiten.",
    p2: `Es gilt ${F.validMonths} Monate ab Erteilung, erlaubt beliebig viele Einreisen, und jeder Aufenthalt darf bis zu ${F.stayMonths} Monate dauern. Sie müssen sich bei der Antragstellung und bei der Erteilung außerhalb Australiens aufhalten.`,
  },
  features: [
    {
      h: "Ein Visum, keine Reisegenehmigung",
      p: "Anders als etwa die neuseeländische NZeTA ist das eVisitor ein richtiges Visum. Es wird elektronisch erteilt und beim Einchecken automatisch geprüft.",
    },
    {
      h: "Deutschland ist berechtigt",
      p: `Alle EU-Staaten sowie das Vereinigte Königreich, Island, Norwegen und die Schweiz sind unter den ${F.eligibleCountries} berechtigten Ländern. Wer keinen dieser Pässe hat, benötigt stattdessen die ETA.`,
    },
    {
      h: "Kostenlos – nur auf der offiziellen Seite",
      p: `Die Behörde verlangt keine Gebühr. Wer im Internet einen Preis für ein eVisitor sieht, zahlt für das Ausfüllen des Formulars, nicht für das Visum. Zum Vergleich: die ETA für andere Pässe kostet ${F.etaFee}.`,
    },
  ],
  eligibility: {
    h2: "Welches Visum gilt für welchen Pass?",
    lead: "„Kostenlos“ gilt nur für das eVisitor, und das eVisitor gilt nur für europäische Pässe. Genau hier entstehen die meisten Missverständnisse.",
    th: ["Ihr Pass", "Visum", "Kosten", "Antragsweg"],
    rows: [
      [
        `EU, Vereinigtes Königreich, Island, Norwegen, Schweiz und weitere europäische Länder (${F.eligibleCountries} insgesamt) – einschließlich Deutschland`,
        "eVisitor (Subclass 651)",
        F.fee,
        "Website des Department of Home Affairs (ImmiAccount)",
      ],
      [
        "Japan, USA, Kanada, Singapur, Malaysia, Südkorea und weitere",
        "ETA (Subclass 601)",
        F.etaFee,
        "Nur über die offizielle App",
      ],
      ["Für beides nicht berechtigt", "Besuchervisum (Subclass 600)", "gebührenpflichtig", "Website des Department of Home Affairs"],
    ],
    note: `Die ETA lässt sich nicht über die Website beantragen, sondern nur über die offizielle App, die den Chip im Pass ausliest. Beim eVisitor ist es umgekehrt: keine App, nur die Website. Geprüft am 17. August 2026.`,
  },
  steps: {
    h2: "So beantragen Sie das eVisitor",
    items: [
      {
        h: "Reisepass prüfen",
        p: "Ihr deutscher Reisepass muss bei der Antragstellung gültig sein und sollte die geplante Reise abdecken. Das Visum wird an genau diesen Pass gebunden.",
      },
      {
        h: "Antrag von außerhalb Australiens stellen",
        p: "Der Antrag läuft über die Website des Department of Home Affairs mit einem ImmiAccount. Sie müssen sich bei Antragstellung und Erteilung außerhalb Australiens befinden.",
      },
      {
        h: "Angaben zu Gesundheit und Vorstrafen machen",
        p: "Sie erklären Ihren Gesundheitszustand und etwaige Vorstrafen. Unkomplizierte Anträge werden automatisch entschieden; Angaben, die geprüft werden müssen, sind der häufigste Grund für Verzögerungen.",
      },
      {
        h: "Auf die Bestätigungs-E-Mail warten",
        p: `Viele Anträge werden in ${F.decisionTypical} entschieden, garantiert ist das aber nicht. Beantragen Sie das Visum, bevor Sie nicht erstattungsfähige Buchungen vornehmen, und bewahren Sie die Bestätigung bei Ihren Reisedokumenten auf.`,
      },
    ],
    cta: "Auf der offiziellen eVisitor-Seite starten",
  },
  rules: {
    h2: "Was erlaubt ist – und was nicht",
    allowedH: "Erlaubt",
    allowed: [
      "Urlaub, Besuch von Familie und Freunden",
      "Geschäftliche Besuchstätigkeiten: Termine, Verhandlungen, Konferenzen",
      `Studium oder Fortbildung bis zu ${F.studyMonths} Monaten`,
      "Beliebig viele Aus- und Wiedereinreisen während der Gültigkeit",
    ],
    deniedH: "Nicht erlaubt",
    denied: [
      "Arbeit für einen australischen Arbeitgeber",
      `Aufenthalte über ${F.stayMonths} Monate bei einer einzelnen Einreise`,
      "Antragstellung, während Sie sich in Australien aufhalten",
      "Verkauf von Waren oder Dienstleistungen an die Öffentlichkeit",
    ],
  },
  border: {
    h2: "Bei der Einreise",
    p: "Nehmen Sie denselben Reisepass mit, mit dem Sie den Antrag gestellt haben – das Visum ist elektronisch damit verknüpft, es gibt nichts zum Ausdrucken. An großen Flughäfen können berechtigte Reisende die automatischen SmartGates nutzen. Über die Einreise entscheidet die Australian Border Force vor Ort. Australien setzt die Biosicherheitsvorschriften für Lebensmittel sowie pflanzliche und tierische Produkte streng durch: Melden Sie im Zweifel alles an.",
  },
  faq: {
    h2: "Häufige Fragen",
    items: [
      {
        q: "Ist das eVisitor wirklich kostenlos?",
        a: `Ja. Das Department of Home Affairs erhebt für das eVisitor (Subclass 651) keine Visumgebühr und keine Servicegebühr. Kommerzielle Websites, die einen Preis nennen, berechnen das Ausfüllen des Formulars – notwendig ist das nicht.`,
      },
      {
        q: "Wie lange darf ich in Australien bleiben?",
        a: `Bis zu ${F.stayMonths} Monate pro Einreise. Das Visum selbst gilt ${F.validMonths} Monate ab Erteilung und erlaubt in dieser Zeit beliebig viele Einreisen – Sie dürfen also mehrfach einreisen, solange jeder Aufenthalt die ${F.stayMonths}-Monats-Grenze einhält.`,
      },
      {
        q: "Darf ich mit dem eVisitor arbeiten?",
        a: `Nein. Eine Beschäftigung bei einem australischen Arbeitgeber ist nicht erlaubt. Geschäftliche Besuchstätigkeiten wie Termine, Verhandlungen und Konferenzen sind zulässig, und Sie dürfen bis zu ${F.studyMonths} Monate studieren oder an Fortbildungen teilnehmen. Bezahlte Arbeit ist ausgeschlossen.`,
      },
      {
        q: "Kann ich den Antrag stellen, wenn ich schon in Australien bin?",
        a: "Nein. Sie müssen sich sowohl bei der Antragstellung als auch bei der Erteilung außerhalb Australiens aufhalten. Wenn Sie bereits im Land sind und länger bleiben möchten, benötigen Sie ein anderes Visum.",
      },
      {
        q: "Garantiert das eVisitor die Einreise?",
        a: "Nein. Es erlaubt die Reise nach Australien. Über die Einreise selbst entscheidet die Australian Border Force bei der Ankunft.",
      },
      {
        q: "Brauchen Kinder ein eigenes eVisitor?",
        a: "Ja. Jede reisende Person benötigt ein eigenes Visum, auch Säuglinge, und jeweils einen eigenen berechtigten Reisepass.",
      },
      {
        q: "Was gilt für Reisen mit einem zweiten Pass?",
        a: "Das Visum ist an den Pass gebunden, mit dem Sie den Antrag gestellt haben. Reisen Sie mit einem anderen Pass, müssen Sie erneut beantragen. Führen Sie deshalb immer denselben Pass mit, den Sie im Antrag angegeben haben.",
      },
    ],
  },
  cta: {
    h2: "Beantragen Sie Ihr eVisitor",
    p: "Der Antrag ist kostenlos und wird auf der Website des Department of Home Affairs gestellt. Wir sind ein unabhängiger Ratgeber und können keinen Antrag für Sie einreichen.",
    button: "Zur offiziellen eVisitor-Seite",
  },
  footer: {
    disclaimer:
      "Dies ist ein unabhängiger Ratgeber. Er steht in keiner Verbindung zur australischen Regierung oder zum Department of Home Affairs, und wir reichen keine Anträge ein. Das eVisitor ist kostenlos – beantragen Sie es immer über die offizielle Website.",
  },
  ui: {
    updated: "Stand",
    backToTop: "Nach oben",
    languages: "Sprache",
    articles: "Weitere Themen",
    readMore: "Weiterlesen",
    updatedLabel: "17. August 2026",
  },
  pages: [
    {
      slug: "impressum",
      title: "Impressum und Angaben zum Betreiber",
      description:
        "Angaben zum Betreiber dieses unabhängigen Ratgebers zum australischen eVisitor-Visum sowie Hinweise zu Inhalt und Haftung.",
      blocks: [
        { h2: "Wer diese Seite betreibt" },
        {
          p: "Diese Website ist ein unabhängiger, redaktioneller Ratgeber zum australischen eVisitor-Visum (Subclass 651). Sie wird nicht von einer Behörde betrieben und steht in keiner Verbindung zur australischen Regierung oder zum Department of Home Affairs.",
        },
        {
          p: "Betreiber: MediaX Co., Ltd. (Japan). Anfragen richten Sie bitte an webmaster@mediax.biz.",
        },
        { h2: "Was wir nicht tun" },
        {
          ul: [
            "Wir stellen keine Visumanträge und nehmen keine Anträge entgegen.",
            "Wir erheben keine Gebühren für Informationen auf dieser Seite.",
            "Wir geben keine Rechtsberatung und keine Einwanderungsberatung.",
          ],
        },
        { h2: "Inhalt und Aktualität" },
        {
          p: "Alle Angaben beruhen auf den Veröffentlichungen des Department of Home Affairs zum angegebenen Prüfdatum. Einwanderungsregeln ändern sich; maßgeblich ist immer die offizielle Seite. Wenn Sie einen Fehler finden, schreiben Sie uns – wir korrigieren ihn.",
        },
        {
          note: "Für Entscheidungen über Ihre Reise sollten Sie die Angaben stets auf immi.homeaffairs.gov.au überprüfen.",
        },
      ],
    },
    {
      slug: "datenschutz",
      title: "Datenschutzerklärung",
      description:
        "Welche Daten diese Website erhebt, warum sie erhoben werden und welche Rechte Sie nach der DSGVO haben.",
      blocks: [
        { h2: "Kurz gefasst" },
        {
          p: "Diese Website ist eine statische Informationsseite. Wir verlangen keine Registrierung, verkaufen keine Produkte und fragen keine Passdaten ab. Personenbezogene Daten werden nur in dem Umfang verarbeitet, der für den Betrieb der Seite technisch notwendig ist.",
        },
        { h2: "Server-Logdaten" },
        {
          p: "Die Seite wird über Cloudflare Pages ausgeliefert. Beim Aufruf verarbeitet der Anbieter technisch notwendige Daten wie IP-Adresse, Datum und Uhrzeit, aufgerufene Adresse sowie Browser- und Betriebssystemangaben. Diese Daten dienen dem sicheren Betrieb und der Abwehr von Angriffen.",
        },
        { h2: "Cookies und Analyse" },
        {
          p: "Wir setzen keine Werbe-Cookies und binden keine Tracking-Skripte von Drittanbietern ein. Sollte künftig eine Reichweitenmessung ergänzt werden, weisen wir an dieser Stelle darauf hin, bevor sie aktiv wird.",
        },
        { h2: "Externe Links" },
        {
          p: "Wir verlinken auf die offiziellen Seiten der australischen Behörden. Für die Inhalte verlinkter Seiten sind deren Betreiber verantwortlich; dort gelten die jeweiligen Datenschutzbestimmungen.",
        },
        { h2: "Ihre Rechte" },
        {
          ul: [
            "Auskunft über die zu Ihrer Person verarbeiteten Daten",
            "Berichtigung unrichtiger Daten",
            "Löschung, soweit keine Aufbewahrungspflicht besteht",
            "Einschränkung der Verarbeitung und Widerspruch",
            "Beschwerde bei einer Datenschutz-Aufsichtsbehörde",
          ],
        },
        {
          p: "Für Anfragen zum Datenschutz erreichen Sie uns unter webmaster@mediax.biz.",
        },
      ],
    },
    {
      slug: "nutzungsbedingungen",
      title: "Nutzungsbedingungen",
      description:
        "Bedingungen für die Nutzung dieses unabhängigen Ratgebers zum australischen eVisitor-Visum.",
      blocks: [
        { h2: "Zweck dieser Seite" },
        {
          p: "Die Inhalte dieser Website dienen der allgemeinen Information über das australische eVisitor-Visum. Sie stellen keine Rechts- oder Einwanderungsberatung dar und begründen kein Mandatsverhältnis.",
        },
        { h2: "Keine Antragsbearbeitung" },
        {
          p: "Wir sind kein Vermittler und keine Behörde. Anträge werden ausschließlich auf der offiziellen Website des Department of Home Affairs gestellt. Wir erhalten keine Anträge, keine Gebühren und keine Passdaten.",
        },
        { h2: "Haftung" },
        {
          p: "Wir bemühen uns um sorgfältig geprüfte, aktuelle Angaben, können jedoch keine Gewähr für Vollständigkeit und Richtigkeit übernehmen. Für Schäden, die aus der Nutzung dieser Informationen entstehen, haften wir nur bei Vorsatz oder grober Fahrlässigkeit.",
        },
        { h2: "Urheberrecht" },
        {
          p: "Texte und Gestaltung dieser Seite sind urheberrechtlich geschützt. Eine Übernahme ganzer Seiten ist ohne Zustimmung nicht zulässig; kurze Zitate mit Quellenangabe und Link sind willkommen.",
        },
        { h2: "Änderungen" },
        {
          p: "Wir können diese Bedingungen anpassen, wenn sich die Seite oder die rechtlichen Anforderungen ändern. Es gilt die jeweils auf dieser Seite veröffentlichte Fassung.",
        },
      ],
    },
  ],
  articles: [
    {
      slug: "evisitor-antrag-schritt-fuer-schritt",
      title: "eVisitor beantragen: Schritt für Schritt durch das offizielle Formular",
      description:
        "Vom ImmiAccount bis zur Bestätigungs-E-Mail: welche Angaben das offizielle eVisitor-Formular verlangt und woran Anträge typischerweise hängen bleiben.",
      blocks: [
        {
          p: `Der Antrag auf ein eVisitor (Subclass 651) läuft vollständig online über die Website des Department of Home Affairs. Er kostet ${F.fee}. Was Sie brauchen, ist ein gültiger Reisepass, eine E-Mail-Adresse und etwa fünfzehn Minuten Zeit.`,
        },
        { h2: "1. ImmiAccount anlegen" },
        {
          p: "Alle Anträge laufen über ein Benutzerkonto namens ImmiAccount. Legen Sie es mit einer E-Mail-Adresse an, die Sie dauerhaft nutzen: Die Entscheidung wird an genau diese Adresse geschickt.",
        },
        { h2: "2. Angaben zur Person und zum Reisepass" },
        {
          p: "Übertragen Sie Namen, Passnummer, Ausstellungs- und Ablaufdatum exakt so, wie sie im Pass stehen – einschließlich Umlauten und Bindestrichen. Abweichungen sind der häufigste Grund für Rückfragen.",
        },
        {
          ul: [
            "Der Pass muss bei Antragstellung gültig sein.",
            "Das Visum wird an diesen einen Pass gebunden.",
            "Bei einem neuen Pass ist ein neuer Antrag nötig.",
          ],
        },
        { h2: "3. Gesundheit und Vorstrafen" },
        {
          p: "Sie beantworten Fragen zu Tuberkulose, zu geplanten Behandlungen in Australien und zu Verurteilungen. Antworten Sie wahrheitsgemäß: Falsche Angaben führen zur Ablehnung und können künftige Anträge belasten.",
        },
        {
          note: "Unkomplizierte Anträge werden häufig automatisch entschieden. Sobald eine Angabe geprüft werden muss, kann es deutlich länger dauern – deshalb nicht erst kurz vor dem Abflug beantragen.",
        },
        { h2: "4. Absenden und auf die Entscheidung warten" },
        {
          p: `Nach dem Absenden erhalten Sie eine Bestätigung im ImmiAccount. Viele Entscheidungen fallen in ${F.decisionTypical}. Speichern Sie die Erteilungsmitteilung, auch wenn sie beim Einchecken nicht verlangt wird – sie ist der einfachste Nachweis, falls es Fragen gibt.`,
        },
        { h2: "Woran Anträge hängen bleiben" },
        {
          ul: [
            "Antragstellung aus Australien heraus – das ist nicht möglich.",
            "Tippfehler bei der Passnummer.",
            "E-Mail-Adresse mit Tippfehler, sodass die Entscheidung nie ankommt.",
            "Bezahlte Formularausfüller, die eine Gebühr verlangen, obwohl das Visum kostenlos ist.",
          ],
        },
      ],
    },
    {
      slug: "evisitor-oder-eta",
      title: "eVisitor oder ETA? Welches Visum für welchen Pass gilt",
      description:
        "Australien hat zwei elektronische Besuchervisa. Das eVisitor ist kostenlos und gilt für europäische Pässe, die ETA kostet AUD $20 und läuft nur über eine App.",
      blocks: [
        {
          p: "Australien vergibt für Kurzreisen zwei elektronische Visa, die leicht verwechselt werden. Der Unterschied liegt nicht im Reisezweck, sondern in der Staatsangehörigkeit.",
        },
        { h2: "eVisitor (Subclass 651)" },
        {
          ul: [
            `Für Pässe aus ${F.eligibleCountries} europäischen Ländern, darunter Deutschland`,
            `Gebühr: ${F.fee}`,
            `Gültig ${F.validMonths} Monate, Aufenthalt bis ${F.stayMonths} Monate pro Einreise`,
            "Antrag über die Website (ImmiAccount) – es gibt keine App dafür",
          ],
        },
        { h2: "ETA (Subclass 601)" },
        {
          ul: [
            "Für Pässe aus Ländern wie Japan, USA, Kanada, Singapur, Malaysia, Südkorea",
            `Gebühr: ${F.etaFee}`,
            "Antrag ausschließlich über die offizielle App, die den Chip im Pass ausliest",
            "Gültigkeit und Aufenthaltsdauer entsprechen im Kern dem eVisitor",
          ],
        },
        { h2: "Was das praktisch bedeutet" },
        {
          p: "Mit einem deutschen Pass beantragen Sie das eVisitor und zahlen nichts. Reisen Sie gemeinsam mit einer Person, die einen nicht-europäischen Pass hat, braucht diese Person die ETA und damit ein Smartphone mit NFC – planen Sie das ein, wenn Sie zusammen buchen.",
        },
        {
          note: `Wer für beides nicht berechtigt ist, benötigt das gebührenpflichtige Besuchervisum (Subclass 600). Stand: 17. August 2026.`,
        },
      ],
    },
    {
      slug: "evisitor-gueltigkeit-und-aufenthalt",
      title: "Gültigkeit, Aufenthaltsdauer und mehrfache Einreisen",
      description:
        "Wie sich die 12 Monate Gültigkeit und die 3 Monate Aufenthalt pro Einreise zueinander verhalten – mit Beispielen für längere Reisen.",
      blocks: [
        {
          p: `Beim eVisitor werden zwei Zeiträume oft vermischt: die Gültigkeit des Visums (${F.validMonths} Monate) und die erlaubte Dauer eines einzelnen Aufenthalts (${F.stayMonths} Monate).`,
        },
        { h2: "Die Gültigkeit" },
        {
          p: `Das Visum gilt ${F.validMonths} Monate ab dem Tag der Erteilung – nicht ab der Einreise. Läuft Ihr Reisepass vorher ab, endet die Nutzbarkeit mit dem Pass.`,
        },
        { h2: "Der Aufenthalt" },
        {
          p: `Jede einzelne Einreise darf bis zu ${F.stayMonths} Monate dauern. Innerhalb der Gültigkeit können Sie beliebig oft einreisen, solange jeder Aufenthalt diese Grenze einhält.`,
        },
        { h2: "Beispiel für eine längere Reise" },
        {
          ul: [
            "Erteilung im März: das Visum gilt bis März des Folgejahres.",
            `Einreise im April, Aufenthalt bis Juli – das sind ${F.stayMonths} Monate und damit die Obergrenze.`,
            "Ausreise nach Neuseeland, danach erneute Einreise nach Australien: eine neue Zählung beginnt.",
          ],
        },
        {
          note: "Kurze Aus- und Wiedereinreisen allein mit dem Ziel, die Frist neu zu starten, fallen bei der Grenzkontrolle auf. Über Einreise und zulässige Dauer entscheidet die Australian Border Force im Einzelfall.",
        },
        { h2: "Wenn Sie länger bleiben möchten" },
        {
          p: "Eine Verlängerung des eVisitor im Land ist nicht vorgesehen. Wer länger bleiben will, muss ein anderes Visum beantragen – und das in der Regel von außerhalb Australiens.",
        },
      ],
    },
  ],
};
