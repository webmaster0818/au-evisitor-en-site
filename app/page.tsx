import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import StickyCta from "@/components/StickyCta";
import { FACTS as F, SITE } from "@/data/facts";
import { LANG_CODES } from "@/data/langs";

/*
  構成・UIは nz-eta-site（NZeTA）と揃えている。okinaの指摘済み事項は最初から反映:
    ・「」の角飾りは .feature-card だけ（料金表・FAQ・数値カードには付けない）
    ・見出しの罫線は見出しの「下」
    ・日付は "17 August 2026" 形式・数値ラベルは英語として自然な語に
    ・.reveal（スクロール出現）／.cta-sticky-bar（下から出る追従CTA）／.hero-zoom

  ⚠️ eVisitor固有で、NZeTAと決定的に違うのは2点。
     ①これは渡航認証ではなく**ビザ（subclass 651）**そのもの
     ②**申請料が無料**。対象は欧州36か国のパスポート保持者に限られ、
       それ以外の国（日本・米国・カナダ・シンガポール・韓国など）は
       ETA（subclass 601・AUD $20・アプリ専用）になる。
     「無料」だけを大きく出して対象を書かないと、対象外の読者を空振りさせる。
*/

export const metadata: Metadata = {
  title: {
    absolute: `eVisitor (subclass 651): the free Australian visa for European passports | eVisitor Guide 2026`,
  },
  description:
    `A plain-English guide to Australia's eVisitor visa (subclass 651): free of charge, valid ${F.validMonths} months, stays of up to ${F.stayMonths} months per entry, for passport holders of ${F.eligibleCountries} European countries. If your passport is not on the list, you need the ${F.etaFee} ETA instead.`,
  alternates: {
    canonical: `${SITE}/`,
    // ⚠️ 言語版を足したら自動で増える（手書きしない）
    languages: { en: `${SITE}/`, ...Object.fromEntries(LANG_CODES.map((c) => [c, `${SITE}/${c}/`])) },
  },
  openGraph: {
    title: "eVisitor (subclass 651): the free Australian visa for European passports",
    description: `Free of charge, valid ${F.validMonths} months, up to ${F.stayMonths} months per entry — and how it differs from the ${F.etaFee} ETA.`,
    locale: "en",
    type: "website",
  },
};

const STATS = [
  { v: F.fee, l: "What you pay", s: "No application charge at all" },
  { v: `${F.validMonths} months`, l: "Valid for", s: "Unlimited entries" },
  { v: `${F.stayMonths} months`, l: "Stay per entry", s: "Tourism or business visits" },
  { v: F.eligibleCountries.toString(), l: "Eligible countries", s: "European passports only" },
];

const FEATURES = [
  {
    h: "It is a visa, not a travel authority",
    p: "The eVisitor is a full visitor visa (subclass 651) granted electronically. Nothing is stamped in your passport — the grant is recorded against it.",
  },
  {
    h: "European passports only",
    p: `Passport holders of ${F.eligibleCountries} European countries are eligible, including all EU members, the UK, Iceland, Norway and Switzerland. Other passports need the ETA instead.`,
  },
  {
    h: "Free — and only on the official site",
    p: "There is no application charge and no service fee. Any site asking you to pay for an eVisitor is charging for the form, not the visa.",
  },
];

const STEPS = [
  {
    h: "Check your passport is eligible",
    p: `The eVisitor covers ${F.eligibleCountries} European countries. If yours is not on the list — for example Japan, the United States, Canada, Singapore or South Korea — you need the ${F.etaFee} ETA (subclass 601), which is applied for in a mobile app.`,
  },
  {
    h: "Apply online from outside Australia",
    p: "Applications are made through the Department of Home Affairs website with an ImmiAccount. You must be outside Australia when you apply and when the visa is granted.",
  },
  {
    h: "Answer the health and character questions",
    p: "You declare your health and any criminal history. Straightforward applications are decided automatically; a declaration that needs assessment is what usually causes delays.",
  },
  {
    h: "Wait for the grant email",
    p: `Many applications are decided in ${F.decisionTypical}, but there is no guaranteed turnaround. Apply before booking anything non-refundable, and keep the grant notice with your travel documents.`,
  },
];

const FAQ = [
  {
    q: "Is the eVisitor really free?",
    a: "Yes. The Department of Home Affairs charges nothing for an eVisitor (subclass 651) — no visa application charge and no service fee. Commercial sites that quote a price are charging for filling in the form on your behalf, which is not required.",
  },
  {
    q: `What if my passport is not one of the ${F.eligibleCountries} eligible countries?`,
    a: `Then the eVisitor is not available to you. Passport holders from countries such as Japan, the United States, Canada, Singapore, Malaysia and South Korea apply for the ETA (subclass 601) instead, which has an ${F.etaFee} service charge and is applied for through the official mobile app. If neither applies to you, the Visitor visa (subclass 600) is the paid alternative.`,
  },
  {
    q: "How long can I stay in Australia?",
    a: `Up to ${F.stayMonths} months per entry. The visa itself is valid for ${F.validMonths} months from the date it is granted and allows unlimited entries during that period, so you may return as often as you like as long as each stay is within the ${F.stayMonths}-month limit.`,
  },
  {
    q: "Can I work on an eVisitor?",
    a: "No. You may not work for an Australian employer. Business visitor activities — meetings, negotiations, conferences — are allowed, and you may study or train for up to three months, but paid work is not permitted.",
  },
  {
    q: "Can I apply while I am already in Australia?",
    a: "No. You must be outside Australia both when you apply and when the visa is granted. If you are already in the country and want to stay longer, you need to apply for a different visa.",
  },
  {
    q: "Does the eVisitor guarantee entry to Australia?",
    a: "No. It permits you to travel to Australia, but the decision to let you enter is made by the Australian Border Force officer on arrival.",
  },
  {
    q: "Do children need their own eVisitor?",
    a: "Yes. Every traveller needs their own visa, including infants, and each must hold an eligible passport in their own name.",
  },
];

export default function Home() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Reveal />
      <StickyCta />

      {/* ── ヒーロー ── */}
      <section className="hero">
        <div className="hero-media">
          <Image
            src="/images/hero-au.webp"
            alt="Sunlit Australian coastline with turquoise water, a golden beach and a rocky headland"
            fill
            priority
            className="hero-img hero-zoom"
          />
        </div>
        <div className="hero-scrim" />
        <div className="hero-inner max-w-6xl mx-auto px-6 py-20 lg:py-28">
          <span className="eyebrow">Australia · eVisitor · subclass 651</span>
          <h1
            className="mt-5 text-3xl md:text-5xl font-bold leading-tight"
            style={{ color: "#ffffff", maxWidth: "24ch" }}
          >
            The eVisitor is{" "}
            <span style={{ color: "var(--color-red-light)" }}>free</span> — if you hold a European
            passport
          </h1>
          <p
            className="mt-5 text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,.92)", maxWidth: "54ch" }}
          >
            Australia charges nothing for an eVisitor: {F.fee}, valid {F.validMonths} months, stays
            of up to {F.stayMonths} months. The catch is eligibility — it covers{" "}
            {F.eligibleCountries} European countries, and everyone else needs the {F.etaFee} ETA.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={F.officialUrl} target="_blank" rel="noopener noreferrer" className="btn-red">
              Apply on the official site
            </a>
            <a href="#eligibility" className="btn-outline-light">
              Check if you are eligible
            </a>
          </div>
          <p className="mt-6 text-xs" style={{ color: "rgba(255,255,255,.78)" }}>
            Independent guide · not affiliated with the Australian Government · updated{" "}
            {F.updatedLabel}
          </p>
        </div>
      </section>

      {/* ── 統計カード（ヒーロー直下にせり出す）── */}
      <section
        className="max-w-6xl mx-auto px-6"
        style={{ marginTop: "-3rem", position: "relative", zIndex: 2 }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <div key={s.l} className={`card stat-card text-center reveal reveal-delay-${i + 1}`}>
              <p className="stat-num">{s.v}</p>
              <p className="stat-label">{s.l}</p>
              <p className="text-xs mt-1" style={{ color: "var(--color-text-light)" }}>
                {s.s}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What is ── */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <h2 className="heading-band text-2xl md:text-3xl reveal">What is the eVisitor?</h2>
        <p className="mt-5 leading-relaxed reveal reveal-delay-1" style={{ maxWidth: "70ch" }}>
          The eVisitor (subclass 651) is Australia&apos;s free visitor visa for European passport
          holders. It is granted electronically and linked to your passport, so there is no label or
          stamp to collect. It allows tourism and business visitor activities.
        </p>
        <p className="mt-4 leading-relaxed reveal reveal-delay-2" style={{ maxWidth: "70ch" }}>
          It is valid for {F.validMonths} months from the date it is granted, allows unlimited
          entries, and each stay may be up to {F.stayMonths} months. You must be outside Australia
          when you apply and when it is granted.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <div key={f.h} className={`feature-card reveal reveal-delay-${i + 1}`}>
              <h3 className="font-bold" style={{ color: "var(--color-navy)" }}>
                {f.h}
              </h3>
              <p className="mt-2 text-sm leading-relaxed">{f.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 対象と料金（eVisitor固有の要点）── */}
      <section id="eligibility" style={{ background: "var(--color-bg-soft)" }}>
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="heading-band text-2xl md:text-3xl reveal">
            Which visa applies to your passport?
          </h2>
          <p className="mt-5 leading-relaxed reveal reveal-delay-1" style={{ maxWidth: "70ch" }}>
            &ldquo;Free&rdquo; only applies to the eVisitor, and the eVisitor only applies to
            European passports. This is the single thing most travellers get wrong.
          </p>
          <div className="mt-7 card reveal reveal-delay-2" style={{ padding: "1.6rem" }}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ borderCollapse: "collapse", minWidth: "40rem" }}>
                <thead>
                  <tr style={{ background: "var(--color-navy)", color: "#fff" }}>
                    <th className="text-left px-4 py-3">Your passport</th>
                    <th className="text-left px-4 py-3">Visa</th>
                    <th className="text-left px-4 py-3">Cost</th>
                    <th className="text-left px-4 py-3">How you apply</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                    <td className="px-4 py-3 font-medium">
                      EU, UK, Iceland, Norway, Switzerland and other European countries (
                      {F.eligibleCountries} in total)
                    </td>
                    <td className="px-4 py-3">eVisitor (subclass 651)</td>
                    <td className="px-4 py-3 font-bold" style={{ color: "var(--color-gold-dark)" }}>
                      {F.fee}
                    </td>
                    <td className="px-4 py-3">Home Affairs website (ImmiAccount)</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                    <td className="px-4 py-3 font-medium">
                      Japan, United States, Canada, Singapore, Malaysia, South Korea and others
                    </td>
                    <td className="px-4 py-3">ETA (subclass 601)</td>
                    <td className="px-4 py-3 font-bold">{F.etaFee}</td>
                    <td className="px-4 py-3">Official mobile app only</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Not eligible for either</td>
                    <td className="px-4 py-3">Visitor visa (subclass 600)</td>
                    <td className="px-4 py-3 font-bold">Paid — see official site</td>
                    <td className="px-4 py-3">Home Affairs website</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-6 leading-relaxed text-sm reveal reveal-delay-3" style={{ maxWidth: "70ch" }}>
            The ETA cannot be applied for on the Home Affairs website — it is granted through the
            official app, which reads the chip in your passport. The eVisitor is the opposite: there
            is no app, only the website. Checked {F.updatedLabel}.
          </p>
        </div>
      </section>

      {/* ── 申請手順 ── */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <h2 className="heading-band text-2xl md:text-3xl reveal">How to apply</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {STEPS.map((s, i) => (
            <div key={s.h} className={`feature-card reveal reveal-delay-${(i % 4) + 1}`}>
              <p
                className="text-xs font-bold tracking-widest"
                style={{ color: "var(--color-gold-dark)" }}
              >
                STEP {i + 1}
              </p>
              <h3 className="mt-2 font-bold" style={{ color: "var(--color-navy)" }}>
                {s.h}
              </h3>
              <p className="mt-2 text-sm leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 reveal">
          <a href={F.officialUrl} target="_blank" rel="noopener noreferrer" className="cta-button-red">
            Start on the official eVisitor page
          </a>
        </div>
      </section>

      {/* ── できること・できないこと ── */}
      <section style={{ background: "var(--color-bg-soft)" }}>
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="heading-band text-2xl md:text-3xl reveal">
            What you may and may not do
          </h2>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="feature-card reveal reveal-delay-1">
              <h3 className="font-bold" style={{ color: "var(--color-gold-dark)" }}>
                Allowed
              </h3>
              <ul className="mt-3 text-sm leading-relaxed space-y-2">
                <li>Tourism, visiting family and friends</li>
                <li>Business visitor activities: meetings, negotiations, conferences</li>
                <li>Study or training for up to {F.studyMonths} months</li>
                <li>Leaving and re-entering as often as you like while the visa is valid</li>
              </ul>
            </div>
            <div className="feature-card reveal reveal-delay-2">
              <h3 className="font-bold" style={{ color: "var(--color-red-dark)" }}>
                Not allowed
              </h3>
              <ul className="mt-3 text-sm leading-relaxed space-y-2">
                <li>Working for an Australian employer</li>
                <li>Staying more than {F.stayMonths} months on a single entry</li>
                <li>Applying while you are already in Australia</li>
                <li>Selling goods or services to the public</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 入国時 ── */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <h2 className="heading-band text-2xl md:text-3xl reveal">At the border</h2>
        <p className="mt-5 leading-relaxed reveal reveal-delay-1" style={{ maxWidth: "70ch" }}>
          Carry the same passport you applied with — your visa is recorded against it
          electronically, so there is nothing to print. Many travellers with an eligible passport can
          use the automated SmartGates at major airports. Entry is decided by the Australian Border
          Force officer on arrival, and Australia&apos;s biosecurity rules on food, plant and animal
          products are enforced strictly, so declare anything you are unsure about.
        </p>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "var(--color-bg-soft)" }}>
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <h2 className="heading-band text-2xl md:text-3xl reveal">Frequently asked questions</h2>
          <div className="mt-8 space-y-4">
            {FAQ.map((f, i) => (
              <details key={f.q} className={`card group reveal reveal-delay-${(i % 4) + 1}`}>
                <summary className="flex items-start justify-between gap-4 font-bold cursor-pointer list-none">
                  <span>{f.q}</span>
                  <span
                    className="shrink-0 transition-transform group-open:rotate-45"
                    style={{ color: "var(--color-red-vivid)", fontSize: "1.25rem", lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--color-navy)" }}>
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold reveal" style={{ color: "#fff" }}>
            Apply for your eVisitor
          </h2>
          <p
            className="mt-4 text-sm leading-relaxed reveal reveal-delay-1"
            style={{ color: "rgba(255,255,255,.85)" }}
          >
            Applications are free and are made on the Department of Home Affairs website. We are an
            independent guide and cannot submit an application on your behalf.
          </p>
          <div className="mt-8 reveal reveal-delay-2">
            <a
              href={F.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-red"
            >
              Go to the official eVisitor page
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
