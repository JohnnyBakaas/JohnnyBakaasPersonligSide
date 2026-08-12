import { useState } from "react";
import "./App.css";

const cases = [
  {
    status: "I produksjon",
    name: "Alkolås.no",
    title: "Fra forsømt bestillingsskjema til en plattform hele driften bruker.",
    summary:
      "Jeg tok eierskap til frontend, design og brukerflyt i et system som nå kobler sammen salg, kunder, lager og verksted – på mobil, nettbrett og PC.",
    facts: [
      "Total omskriving av frontend",
      "6–7 sammenhengende arbeidsflyter",
      "Over 25 forskjellige sider på tvers av arbeidsflytene",
      "Bygget for videreutvikling, ikke bare første bestilling",
    ],
    result:
      "Mindre manuelt arbeid, færre tapte data og en tryggere vei fra bestilling til montering og vedlikehold.",
  },
  {
    status: "I produksjon",
    name: "Mentor.no",
    title: "Store kjørerapporter gikk fra flere minutters venting til å føles umiddelbare.",
    summary:
      "Jeg har bygget kart, livevisning og historisk avspilling, strukturert frontendarkitekturen og løst ytelsesproblemer i store datamengder.",
    facts: [
      "Live telemetri og historisk avspilling",
      "Virtualisert rendering av store rapporter",
      "Design- og komponentsystem etter tre redesign",
      "Autentisering og tilgangskontroll med Kinde",
    ],
    result:
      "Kunder får tilgang til store datamengder uten at grensesnittet oppleves tregt eller uoversiktlig.",
  },
  {
    status: "Teknisk feilsøking",
    name: "FMC650 / DDD",
    title:
      "En firmwarefeil frøs posisjonen på stadig flere kjøretøy. Jeg fant årsaken før hele flåten ble rammet.",
    summary:
      "Da 10–20 kjøretøy allerede var berørt og antallet økte hver uke, identifiserte jeg at GNSS-modulen ikke våknet etter sleep. Jeg endret konfigurasjonen og rullet løsningen ut.",
    facts: [
      "Ansvar i pre-launch-fasen",
      "Teltonika, Flespi og fjernkommandoer",
      "Remote nedlasting av lovpålagte DDD-filer",
      "Opplæring og feilsøking på tvers av plattformer",
    ],
    result:
      "GNSS-problemet forsvant på alle berørte kjøretøy uten merkbar praktisk ulempe.",
  },
  {
    status: "Under utvikling · ikke lansert",
    name: "Læringsplattform for føreropplæring",
    title: "En regulert læringsplattform utviklet på noen få ukers faktisk arbeidstid.",
    summary:
      "Jeg har totalansvar for arkitektur, teknologivalg, design, utvikling og avklaringer med dem som skal bruke produktet. Løsningen må godkjennes av Statens vegvesen før lansering.",
    facts: [
      "Elev, lærer og administrator",
      "Kurs, forum, oppgaver og tidskontroll",
      "Universell utforming for små skjermer og nedsatt syn",
      "Next.js og Convex for høy utviklingsfart",
    ],
    result:
      "Målet er å erstatte et kjøpt produkt, redusere kostnader og gi virksomheten full kontroll på egen løsning.",
  },
];

const offerSteps = [
  {
    days: "Dag 1",
    title: "Avgrens og mål",
    text: "Vi velger én arbeidsflyt, blir enige om hva løsningen skal gjøre og måler hva prosessen koster i dag.",
  },
  {
    days: "Dag 2–4",
    title: "Bygg løsningen",
    text: "Jeg bygger den minste fungerende løsningen som kan fjerne reelt manuelt arbeid – uten en lang utredningsfase.",
  },
  {
    days: "Dag 5–6",
    title: "Test mot virkeligheten",
    text: "Løsningen prøves med realistiske data og justeres mot menneskene, unntakene og kravene som finnes i driften.",
  },
  {
    days: "Dag 7 og videre",
    title: "Lever, mål og skaler",
    text: "Dere får en fungerende pilot og en tydelig gevinstmodell. Hvis resultatet forsvarer det, tar jeg den videre til produksjon, flere arbeidsflyter eller et større teknologimandat.",
  },
];

const deliverables = [
  "Én tydelig avgrenset arbeidsflyt",
  "Fungerende og testbar løsning på sju dager",
  "Målemodell avtalt før jeg bygger",
  "Dokumentert gevinstpotensial",
  "Plan for produksjon, drift og neste investering",
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Hopp til innholdet
      </a>
      <div className="header-inner">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Johnny Bakaas – til toppen">
          <span>Johnny Bakaas</span>
          <small>Automatisering · Teknologiledelse</small>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Lukk" : "Meny"}</span>
          <span className="menu-lines" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Hovedmeny"
        >
          <a href="#tilbudet" onClick={closeMenu}>Tilbudet</a>
          <a href="#resultater" onClick={closeMenu}>Resultater</a>
          <a href="#pris" onClick={closeMenu}>Pris og support</a>
          <a className="nav-contact" href="#kontakt" onClick={closeMenu}>Ta kontakt</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-frame" id="top">
      <div className="hero-main">
        <p className="eyebrow"><span />Automatisering og systemutvikling som merkes på driften</p>
        <h1>Voks uten å <em>ansette deg i hjel.</em></h1>
        <p className="hero-lead">
          Jeg hjelper norske operative virksomheter med automatisering og skreddersydd systemutvikling. Vi starter med én dyr manuell arbeidsflyt og en fungerende løsning på sju dager – og skalerer samarbeidet når resultatene forsvarer det.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#kontakt">
            Vis meg den verste prosessen <ArrowIcon />
          </a>
          <a className="text-link" href="#resultater">Se dokumenterte resultater</a>
        </div>

        <dl className="hero-metrics">
          <div>
            <dt>7 dager</dt>
            <dd>til fungerende pilot</dd>
          </div>
          <div>
            <dt>Én flaskehals</dt>
            <dd>tydelig avgrenset</dd>
          </div>
          <div>
            <dt>Skalerbart</dt>
            <dd>fra sprint til teknologipartner</dd>
          </div>
        </dl>
      </div>

      <aside className="hero-process" aria-label="Slik arbeider jeg">
        <div>
          <p className="aside-label">Slik skjer det</p>
          <ol>
            <li><span>01</span><p>Finn arbeidet som stjeler mest tid og kapasitet.</p></li>
            <li><span>02</span><p>Bygg den minste løsningen som skaper reell effekt.</p></li>
            <li><span>03</span><p>Mål resultatet før vi investerer videre.</p></li>
          </ol>
        </div>
        <p className="aside-note">Ingen transformasjonsrapport. Et system folk faktisk bruker.</p>
      </aside>
    </section>
  );
}

function Problem() {
  return (
    <section className="problem-section content-width" aria-labelledby="problem-title">
      <div className="section-number">01 / Problemet</div>
      <div className="problem-copy">
        <h2 id="problem-title">Den neste ansettelsen er ikke alltid løsningen.</h2>
        <p>
          Når folk kopierer data mellom systemer, følger opp i regneark eller bruker dagen på oppgaver en maskin kan gjøre, er det prosessen som mangler kapasitet – ikke nødvendigvis teamet.
        </p>
      </div>
      <div className="problem-signals" aria-label="Typiske tegn">
        <p>«Sånn har vi alltid gjort det.»</p>
        <p>«Bare én person vet hvordan.»</p>
        <p>«Vi trenger egentlig én til.»</p>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section className="offer-section section-frame" id="tilbudet" aria-labelledby="offer-title">
      <div className="offer-intro">
        <div className="section-number">02 / Tilbudet</div>
        <p className="eyebrow"><span />7-dagers automatiseringssprint</p>
        <h2 id="offer-title">Start lite. Bevis verdien. Bygg større.</h2>
        <p>
          Sprinten er den raske inngangen: én arbeidsflyt, én fungerende løsning og et målbart resultat. Der potensialet er større, kan jeg ta ansvar videre for produksjonssetting, integrasjoner, flere systemer og løpende teknologiledelse.
        </p>
        <ul className="deliverables">
          {deliverables.map((item) => (
            <li key={item}><CheckIcon /><span>{item}</span></li>
          ))}
        </ul>
        <p className="sprint-note">
          Sju dager regnes fra arbeidsflyten er avgrenset og nødvendige data og tilganger er på plass. Avhengigheter hos eksterne leverandører kan påvirke tidspunktet for produksjonssetting.
        </p>
      </div>

      <div className="offer-timeline">
        {offerSteps.map((step, index) => (
          <article className="timeline-step" key={step.days}>
            <div className="timeline-meta">
              <span>0{index + 1}</span>
              <p>{step.days}</p>
            </div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Results() {
  return (
    <section className="results-section" id="resultater" aria-labelledby="results-title">
      <div className="results-heading content-width">
        <div>
          <div className="section-number">03 / Resultater</div>
          <p className="eyebrow"><span />Bygget i virkeligheten</p>
        </div>
        <div>
          <h2 id="results-title">Jeg kommer ikke fra PowerPoint. Jeg kommer fra produksjon.</h2>
          <p>Dette er arbeid jeg faktisk har eid, bygget eller løst – med ulike grader av ansvar og modenhet tydelig merket.</p>
        </div>
      </div>

      <div className="case-list content-width">
        {cases.map((item, index) => (
          <article className="case" key={item.name}>
            <div className="case-meta">
              <span className="case-index">0{index + 1}</span>
              <p className="case-status">{item.status}</p>
              <h3>{item.name}</h3>
            </div>
            <div className="case-body">
              <h4>{item.title}</h4>
              <p>{item.summary}</p>
              <ul>
                {item.facts.map((fact) => <li key={fact}>{fact}</li>)}
              </ul>
              <div className="case-result">
                <span>Effekt</span>
                <p>{item.result}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="micro-case content-width">
        <div>
          <span className="case-status">Intern prototype</span>
          <h3>Én arbeidsdag ble til litt over fem minutter.</h3>
        </div>
        <p>
          En selger skulle kvalitetssikre 13 leads mot Brønnøysundregistrene, økonomi og sosiale medier. En enkel AI-assistert arbeidsflyt leverte listen på minutter. Neste steg er å gjøre forsøket repeterbart og målbart.
        </p>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="pricing-section section-frame" id="pris" aria-labelledby="pricing-title">
      <div className="pricing-main">
        <div className="section-number">04 / Pris og ansvar</div>
        <p className="eyebrow"><span />Interessene våre skal peke samme vei</p>
        <h2 id="pricing-title">Pris som følger verdien – ikke antall timer.</h2>
        <p className="pricing-lead">
          En avgrenset sprint har en avtalt grunnpris, normalt fra 25 000 kroner. Når løsningen skaper dokumentert besparelse, tar jeg 50 % av gevinsten de første tre månedene. Vi bestemmer målemetoden og et pristak før jeg bygger.
        </p>

        <div className="formula" aria-label="Slik beregnes besparelsen">
          <span>Dagens kostnad</span>
          <b>−</b>
          <span>Ny kostnad</span>
          <b>=</b>
          <strong>Dokumentert besparelse</strong>
        </div>

        <p className="pricing-note">
          Tidsbruk, volum, lønnskostnad og systemkostnader inngår i en enkel baseline begge parter godkjenner. Produksjonssetting, større integrasjoner og et videre teknologimandat avtales separat når sprinten har vist hva som er verdt å investere i.
        </p>
      </div>

      <aside className="support-panel" aria-labelledby="support-title">
        <p className="aside-label">Samarbeidsmodell</p>
        <h3 id="support-title">Faste kontaktpunkter. Tydelig ansvar.</h3>
        <div className="support-item">
          <span>I sprinten</span>
          <h4>Konsentrert levering</h4>
          <p>Kickoff, asynkront utviklingsarbeid og en avtalt demonstrasjon. Lite møtetid, tydelig fremdrift.</p>
        </div>
        <div className="support-item">
          <span>Etter levering</span>
          <h4>Avtalt support</h4>
          <p>Support via e-post med svar neste virkedag. Kritiske systemer krever en egen driftsavtale med passende beredskap.</p>
        </div>
        <div className="support-item">
          <span>Når verdien er bevist</span>
          <h4>Større samarbeid</h4>
          <p>Videreutvikling, flere prosesser eller løpende ansvar som operativ teknologipartner – uten å starte på nytt med en ny leverandør.</p>
        </div>
      </aside>
    </section>
  );
}

function About() {
  return (
    <section className="about-section content-width" aria-labelledby="about-title">
      <div className="section-number">05 / Personen</div>
      <div className="about-title">
        <p className="eyebrow"><span />Johnny Bakaas</p>
        <h2 id="about-title">Teknisk nok til å bygge. Operativ nok til å forstå hvorfor.</h2>
      </div>
      <div className="about-copy">
        <p>
          Jeg har tatt ansvar i skjæringspunktet mellom salg, lager, verksted, marked, kunder og utvikling. Det er der de beste systemene blir til – når teknologi formes av dem som faktisk skal bruke den.
        </p>
        <p>
          Jeg trives best når problemet er uklart, flere fagmiljøer må bli enige og noen må ta eierskap helt fram til løsningen fungerer i produksjon.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  const mailSubject = encodeURIComponent("Kandidat til en 7-dagers sprint");
  const mailBody = encodeURIComponent(
    "Hei Johnny,\n\nProsessen vi vil forbedre er:\n\nI dag bruker vi omtrent:\n\nDette skaper problemer fordi:\n\nSystemene eller dataene som er involvert er:\n\nMvh\n"
  );

  return (
    <section className="contact-section section-frame" id="kontakt" aria-labelledby="contact-title">
      <div className="contact-main">
        <p className="eyebrow"><span />Start med problemet</p>
        <h2 id="contact-title">Vis meg den verste prosessen. Om én uke vet vi hva som er mulig.</h2>
        <p>
          Du trenger ikke en kravspesifikasjon. Fortell meg hva som tar tid, hvem som gjør det og hvor ofte det skjer. Hvis prosessen passer for en sprint, avgrenser vi den sammen – og lar resultatet avgjøre hvor stort samarbeidet bør bli.
        </p>
        <a
          className="button button-light"
          href={`mailto:Johnny@Bakaas-CadConsult.no?subject=${mailSubject}&body=${mailBody}`}
        >
          Søk om en 7-dagers sprint <ArrowIcon />
        </a>
      </div>
      <div className="contact-details">
        <p className="aside-label">Direkte kontakt</p>
        <a href="mailto:Johnny@Bakaas-CadConsult.no">Johnny@Bakaas-CadConsult.no</a>
        <a href="tel:+4790732947">+47 907 32 947</a>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/johnny-bakaas-1a7370250/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          <a href="https://github.com/JohnnyBakaas" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer content-width">
      <p>© {new Date().getFullYear()} Johnny Bakaas</p>
      <p>Automatisering som skaper kapasitet.</p>
      <a href="#top">Til toppen ↑</a>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Problem />
        <Offer />
        <Results />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
