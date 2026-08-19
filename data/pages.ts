import { FACTS as F } from "@/data/facts";

/**
 * 英語（ルート）の下層ページ。uketa（eta-se.com）の言語ディレクトリと同じ13本構成に合わせる。
 *   トップ（app/page.tsx）＋ここに定義する12本 = 13ページ
 *
 * ⚠️ 数値は必ず F（data/facts.ts）から入れる。本文に直接書かない。
 * ⚠️ eVisitor固有の要点を各ページで外さないこと:
 *      申請料は無料／対象は欧州36か国のみ／対象外はETA(601)・AUD$20・アプリ専用／
 *      これは渡航認証ではなく**ビザ**（subclass 651）／豪州国内からは申請できない
 */
export type Block =
  | { h2: string }
  | { p: string }
  | { ul: string[] }
  | { note: string };

export type Page = {
  slug: string;
  title: string;
  nav: string;
  description: string;
  blocks: Block[];
};

export const PAGES: Page[] = [
  {
    slug: "what-is-evisitor",
    nav: "What is the eVisitor",
    title: "What is the eVisitor (subclass 651)? Australia's free visitor visa explained",
    description:
      "The eVisitor is a full visitor visa granted electronically to holders of eligible European passports. What it covers and how it differs from the ETA.",
    blocks: [
      {
        p: `The eVisitor (subclass 651) is a visitor visa for Australia, granted electronically and linked to your passport. It is free of charge, valid ${F.validMonths} months, and allows stays of up to ${F.stayMonths} months per entry.`,
      },
      { h2: "It is a visa, not a travel authority" },
      {
        p: "Unlike New Zealand's NZeTA, the eVisitor is an actual visa. Nothing is stamped in your passport — the grant is recorded against it and checked electronically when you check in.",
      },
      { h2: "Who it is for" },
      {
        ul: [
          `Passport holders of ${F.eligibleCountries} European countries: all EU member states plus the UK, Iceland, Norway, Switzerland and several microstates`,
          "Tourism, visiting family and friends, and business visitor activities",
          "Travellers who are outside Australia when they apply and when the visa is granted",
        ],
      },
      { h2: "Who it is not for" },
      {
        p: `If your passport is not on the list — for example Japan, the United States, Canada, Singapore, Malaysia or South Korea — the eVisitor is not available. Those nationalities apply for the ETA (subclass 601), which costs ${F.etaFee} and is applied for in the official mobile app.`,
      },
      {
        note: "The eligibility test is nationality, not residence. Living in Europe on a non-European passport does not make you eligible.",
      },
    ],
  },
  {
    slug: "how-to-apply",
    nav: "How to apply",
    title: "How to apply for an eVisitor: the official process step by step",
    description:
      "Applications are made free of charge through ImmiAccount on the Department of Home Affairs website. The order of the steps and the mistakes that cause delays.",
    blocks: [
      {
        p: "There is one official channel: the Department of Home Affairs website, using an account called ImmiAccount. There is no app for the eVisitor, and no fee.",
      },
      { h2: "1. Create an ImmiAccount" },
      {
        p: "Use an email address you will still have access to while travelling — the grant notice is sent there.",
      },
      { h2: "2. Complete the application" },
      {
        ul: [
          "Passport details exactly as printed, including any hyphens or accents",
          "Your intended travel dates and purpose",
          "Health questions, including tuberculosis and any planned treatment in Australia",
          "Character questions, including criminal convictions",
        ],
      },
      { h2: "3. Submit from outside Australia" },
      {
        p: "You must be outside Australia both when you apply and when the visa is granted. An application lodged while you are in the country cannot result in an eVisitor.",
      },
      { h2: "4. Wait for the grant notice" },
      {
        p: `Straightforward applications are often decided automatically in ${F.decisionTypical}. Save the grant notice with your travel documents even though airlines check the visa electronically.`,
      },
      {
        note: "Commercial sites charge to complete this same form. The visa itself is free, and using an agent does not make a decision come faster.",
      },
    ],
  },
  {
    slug: "cost",
    nav: "Cost",
    title: "How much does an eVisitor cost? Nothing — and what the ETA costs instead",
    description:
      `The Australian government charges ${F.fee} for the eVisitor: no visa application charge and no service fee. The ETA for other passports costs ${F.etaFee}.`,
    blocks: [
      {
        p: `The eVisitor has no application charge at all. The figure quoted by the Department of Home Affairs is ${F.fee}, and there is no separate service fee on top.`,
      },
      { h2: "What the alternatives cost" },
      {
        ul: [
          `eVisitor (subclass 651): ${F.fee} — European passports`,
          `ETA (subclass 601): ${F.etaFee} — Japan, USA, Canada, Singapore, Malaysia, South Korea and others`,
          "Visitor visa (subclass 600): a paid visa for those eligible for neither",
        ],
      },
      { h2: "Why sites quote a price for a free visa" },
      {
        p: "Commercial services charge for filling in the government form on your behalf. That is a service fee, not a visa fee. Nothing they submit differs from what you can submit yourself.",
      },
      {
        note: `Checked ${F.updatedLabel}. If you are asked to pay for an eVisitor on a site that is not immi.homeaffairs.gov.au, you are paying an intermediary.`,
      },
    ],
  },
  {
    slug: "required-documents",
    nav: "What you need",
    title: "What you need to apply for an eVisitor",
    description:
      "A valid European passport, an email address and about fifteen minutes. No photo, no payment, no documents to upload for most applicants.",
    blocks: [
      {
        p: "The eVisitor application is unusually light. Most applicants upload nothing at all.",
      },
      { h2: "What is required" },
      {
        ul: [
          "A valid passport from one of the eligible countries",
          "An email address you can access while travelling",
          "Answers to the health and character questions",
        ],
      },
      { h2: "What is not required" },
      {
        ul: [
          "No photograph — unlike the NZeTA and the Australian ETA",
          "No payment details, because there is no fee",
          "No proof of funds or itinerary at the application stage",
        ],
      },
      { h2: "When more may be asked" },
      {
        p: "If a health or character answer needs assessment, the department may request supporting documents such as a medical report or police certificate. That is what turns a same-day decision into a wait of weeks.",
      },
      {
        note: "Carry evidence of onward travel and funds for the border, even though the application does not ask for them.",
      },
    ],
  },
  {
    slug: "processing-time",
    nav: "Processing time",
    title: `How long does an eVisitor take? Usually ${F.decisionTypical}`,
    description:
      "Most eVisitor applications are decided automatically within a day. What causes an application to take weeks instead.",
    blocks: [
      {
        p: `Applications with no health or character issues are frequently decided automatically — often in ${F.decisionTypical}. There is no service standard that guarantees it.`,
      },
      { h2: "What causes a longer wait" },
      {
        ul: [
          "A health declaration that requires assessment",
          "A declared criminal conviction",
          "Details that do not match the passport",
          "A previous visa refusal or cancellation",
        ],
      },
      { h2: "How far ahead to apply" },
      {
        p: `The visa is valid ${F.validMonths} months from grant, so applying early costs nothing — but note that the clock starts at grant, not at travel. Applying a few weeks before departure is the usual balance.`,
      },
      {
        note: "There is no paid priority processing for the eVisitor. Sites offering it are selling a form-filling service.",
      },
    ],
  },
  {
    slug: "validity",
    nav: "Validity",
    title: `How long is an eVisitor valid? ${F.validMonths} months, unlimited entries`,
    description:
      `An eVisitor lasts ${F.validMonths} months from the date of grant, or until your passport expires, and allows as many entries as you like within that period.`,
    blocks: [
      {
        p: `The visa is valid for ${F.validMonths} months from the date it is granted — not from your first entry — or until the passport it is linked to expires, whichever comes first.`,
      },
      { h2: "Unlimited entries" },
      {
        p: `Within the validity period you may enter Australia as often as you like, provided each stay is within the ${F.stayMonths}-month limit.`,
      },
      { h2: "A new passport means a new application" },
      {
        p: "The grant is recorded against one passport. Renewing your passport, changing your name, or travelling on a second nationality all require a fresh application — which, being free, is not a problem.",
      },
      { h2: "Timing a long trip" },
      {
        p: `If you plan to travel late in the year, apply close to departure so that more of the ${F.validMonths} months remains available for return visits.`,
      },
    ],
  },
  {
    slug: "length-of-stay",
    nav: "Length of stay",
    title: "How long can you stay in Australia on an eVisitor?",
    description:
      `Up to ${F.stayMonths} months per entry, with conditions: no work for an Australian employer and study limited to ${F.studyMonths} months.`,
    blocks: [
      {
        p: `Each entry allows a stay of up to ${F.stayMonths} months. The visa itself lasts ${F.validMonths} months, so several visits of up to ${F.stayMonths} months each are possible.`,
      },
      { h2: "Conditions attached to the stay" },
      {
        ul: [
          "No work for an Australian employer",
          "No selling goods or services to the public",
          `Study or training limited to ${F.studyMonths} months`,
          "Business visitor activities — meetings, negotiations, conferences — are allowed",
        ],
      },
      { h2: "Leaving and returning" },
      {
        p: `Leaving Australia and returning starts a new period of up to ${F.stayMonths} months. Doing this repeatedly to live in Australia in effect is visible to the Australian Border Force and can lead to questions or refusal of entry.`,
      },
      {
        note: "The eVisitor cannot be extended from inside Australia. Staying longer requires a different visa, generally applied for from outside the country.",
      },
    ],
  },
  {
    slug: "status-check",
    nav: "Check your status",
    title: "How to check your eVisitor status with VEVO",
    description:
      "Where the grant notice is sent, how to check an existing visa through VEVO, and what to do if the email never arrives.",
    blocks: [
      {
        p: "The decision arrives by email at the address used in the application, and the grant is also visible in your ImmiAccount.",
      },
      { h2: "Checking an existing visa" },
      {
        p: "Australia provides a free service called VEVO (Visa Entitlement Verification Online) that shows the conditions and expiry of a visa linked to your passport. It is run by the Department of Home Affairs and costs nothing.",
      },
      { h2: "If the grant notice has not arrived" },
      {
        ul: [
          "Check spam and promotions folders",
          "Sign in to ImmiAccount — the status is shown there regardless of email",
          "Confirm the email address you entered had no typo",
          "Only then contact the department; resubmitting creates a duplicate application",
        ],
      },
      {
        note: "Enter passport details only on immi.homeaffairs.gov.au. Third-party 'status check' sites have no access to the visa record.",
      },
    ],
  },
  {
    slug: "faq",
    nav: "FAQ",
    title: "eVisitor (subclass 651): frequently asked questions",
    description: "Short answers to the questions travellers ask most about Australia's free visitor visa.",
    blocks: [
      { h2: "Is the eVisitor really free?" },
      { p: `Yes — ${F.fee}. There is no visa application charge and no service fee from the government.` },
      { h2: "My passport is not European. What do I need?" },
      { p: `The ETA (subclass 601), which costs ${F.etaFee} and is applied for through the official mobile app, not the website.` },
      { h2: "Can I apply while I am in Australia?" },
      { p: "No. You must be outside Australia when you apply and when the visa is granted." },
      { h2: "Can I work?" },
      { p: "No employment with an Australian employer. Business visitor activities are allowed." },
      { h2: "Do children need their own eVisitor?" },
      { p: "Yes — every traveller, including infants, on their own eligible passport." },
      { h2: "Does the eVisitor guarantee entry?" },
      { p: "No. The Australian Border Force officer decides on arrival." },
      { h2: "What if I get a new passport?" },
      { p: "Apply again with the new passport. It is free, so there is no cost to doing so." },
    ],
  },
  {
    slug: "about",
    nav: "About this guide",
    title: "About this guide",
    description: "Who runs this independent guide to Australia's eVisitor visa, and what we do not do.",
    blocks: [
      { h2: "An independent guide" },
      {
        p: "This site explains the Australian eVisitor visa in plain English. It is not a government website and is not affiliated with the Department of Home Affairs. Published by MediaX Co., Ltd. (Japan). Contact: webmaster@mediax.biz",
      },
      { h2: "What we do not do" },
      {
        ul: [
          "We do not submit applications or accept fees",
          "We do not collect passport details",
          "We do not provide legal or immigration advice",
        ],
      },
      { h2: "How the figures are checked" },
      {
        p: `Eligibility, validity and conditions are taken from the Department of Home Affairs' published information and are stated as of ${F.updatedLabel}. Rules change; the official site is always the authority.`,
      },
    ],
  },
  {
    slug: "privacy",
    nav: "Privacy",
    title: "Privacy policy",
    description: "What data this site processes, why, and the rights you have.",
    blocks: [
      { h2: "In short" },
      {
        p: "This is a static information site. There is no registration, nothing is sold, and we never ask for passport details. Personal data is processed only as far as running the site technically requires.",
      },
      { h2: "Server logs" },
      {
        p: "The site is served through Cloudflare Pages, which logs technical details such as IP address, time, requested address and browser information to keep the site available and defend against attacks.",
      },
      { h2: "Cookies and analytics" },
      {
        p: "We set no advertising cookies and embed no third-party tracking scripts. If audience measurement is added later, this page will say so first.",
      },
      { h2: "Your rights" },
      {
        ul: [
          "Access, correction and erasure of personal data",
          "Restriction of processing and objection",
          "Complaint to a supervisory authority",
        ],
      },
      { p: "For privacy enquiries, contact webmaster@mediax.biz." },
    ],
  },
  {
    slug: "terms",
    nav: "Terms",
    title: "Terms of use",
    description: "The conditions that apply when you use the information on this site.",
    blocks: [
      { h2: "Purpose" },
      {
        p: "The content of this site is general information about the Australian eVisitor visa. It is not legal or immigration advice and creates no advisory relationship.",
      },
      { h2: "We do not process applications" },
      {
        p: "We are neither an agency nor a government body. Applications are made only through the Department of Home Affairs website. We receive no applications, fees or passport data.",
      },
      { h2: "Liability" },
      {
        p: "We take care to keep the information accurate and current but cannot guarantee that it is complete or error-free. Liability is limited to intent and gross negligence.",
      },
      { h2: "Copyright" },
      {
        p: "The text and design of this site are protected by copyright. Reproducing whole pages is not permitted; short quotations with a source and link are welcome.",
      },
    ],
  },
];

export const PAGE_SLUGS = PAGES.map((p) => p.slug);
