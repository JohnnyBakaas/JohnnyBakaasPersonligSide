import { useState } from "react";
import "./App.css";

const cases = [
  {
    status: "I produksjon",
    name: "Alkolås",
    title: "Fra forsømt bestillingsskjema til en plattform hele driften bruker.",
    summary:
      "Jeg tok eierskap til frontend, design og brukerflyt i et system som nå kobler sammen salg, kunder, lager og verksted – på mobil, nettbrett og PC.",
    facts: [
      "Total omskriving av frontend",
      "6–7 sammenhengende arbeidsflyter",
      "25+ bilder kan dokumentere én montering",
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
    title: "En firmwarefeil frøs posisjonen på 10–20 kjøretøy. Jeg fant årsaken og stoppet den.",
    summary:
      "Etter systematisk feilsøking identifiserte jeg at GNSS-modulen ikke våknet etter sleep. Jeg endret konfigurasjonen og rullet løsningen ut.",
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
    status: "Under utvikling",
    name: "TeoriMentor",
    title: "Et fullverdig opplæringssystem utviklet på noen få ukers faktisk arbeidstid.",
    summary:
      "Jeg har totalansvar for arkitektur, teknologivalg, design, utvikling og avklaringer med dem som skal bruke produktet.",
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
    days: "Dag 1–10",
    title: "Finn flaskehalsen",
    text: "Jeg følger arbeidet der det faktisk skjer, måler dagens tidsbruk og velger prosessen med størst gevinstpotensial.",
  },
  {
    days: "Dag 11–30",
    title: "Bygg første løsning",
    text: "Vi setter én brukbar løsning i produksjon tidlig. Ingen lang utredningsfase før noen får verdi.",
  },
  {
    days: "Dag 31–60",
    title: "Få den inn i driften",
    text: "Løsningen tilpasses virkelige brukere, kobles til resten av flyten og gjøres robust nok for arbeidsdagen.",
  },
  {
    days: "Dag 61–90",
    title: "Mål og skaler",
    text: "Vi sammenligner mot utgangspunktet, dokumenterer effekten og bestemmer hva som fortjener neste investering.",
  },
];

const deliverables = [
  "Kart over de dyreste manuelle arbeidsflytene",
  "Første produksjonsklare løsning innen 30 dager",
  "Målemodell avtalt før utviklingen starter",
  "Teknisk arkitektur som tåler neste steg",
  "Dokumentasjon, tilgang og opplæring ved overlevering",
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
          <small>Operativ teknologiledelse</small>
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
        <p className="eyebrow"><span />Teknologi som merkes på driften</p>
        <h1>Voks uten å <em>ansette deg i hjel.</em></h1>
        <p className="hero-lead">
          Jeg går inn i operative virksomheter, finner de dyreste manuelle arbeidsflytene og bygger systemene som fjerner dem.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#kontakt">
            Vis meg den verste prosessen <ArrowIcon />
          </a>
          <a className="text-link" href="#resultater">Se dokumenterte resultater</a>
        </div>

        <dl className="hero-metrics">
          <div>
            <dt>30 dager</dt>
            <dd>til første system</dd>
          </div>
          <div>
            <dt>90 dager</dt>
            <dd>til målbar effekt</dd>
          </div>
          <div>
            <dt>Resultatbasert</dt>
            <dd>vi deler på verdien</dd>
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
        <p className="eyebrow"><span />90 dager operativ teknologiledelse</p>
        <h2 id="offer-title">En teknologileder før du trenger en utviklingsavdeling.</h2>
        <p>
          Jeg tar ansvar fra utydelig problem til løsning i produksjon. Du får én person som kan forstå driften, ta tekniske valg, bygge systemet og snakke med menneskene som skal bruke det.
        </p>
        <ul className="deliverables">
          {deliverables.map((item) => (
            <li key={item}><CheckIcon /><span>{item}</span></li>
          ))}
        </ul>
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
          En avtalt grunnpris dekker kartlegging og bygging. Deretter tar jeg 50 % av den dokumenterte besparelsen de første tre månedene. Vi bestemmer målemetoden før jeg skriver kode.
        </p>

        <div className="formula" aria-label="Slik beregnes besparelsen">
          <span>Dagens kostnad</span>
          <b>−</b>
          <span>Ny kostnad</span>
          <b>=</b>
          <strong>Dokumentert besparelse</strong>
        </div>

        <p className="pricing-note">
          Tidsbruk, volum, lønnskostnad og eventuelle systemkostnader inngår i en enkel baseline begge parter godkjenner. Ingen gevinst på papiret. Bare effekt som faktisk kan etterprøves.
        </p>
      </div>

      <aside className="support-panel" aria-labelledby="support-title">
        <p className="aside-label">Etter lansering</p>
        <h3 id="support-title">Du blir ikke stående alene med systemet.</h3>
        <div className="support-item">
          <span>Inkludert</span>
          <h4>Overlevering</h4>
          <p>Dokumentasjon, tilganger, opplæring og en tydelig plan for hvem som eier hva.</p>
        </div>
        <div className="support-item">
          <span>Ved behov</span>
          <h4>Løpende support</h4>
          <p>Fast avtale for overvåking, feilretting og mindre forbedringer – med avtalt responstid.</p>
        </div>
        <div className="support-item">
          <span>Når det lønner seg</span>
          <h4>Videre utvikling</h4>
          <p>Ny kapasitet kjøpes først når dataene viser at neste investering er verdt det.</p>
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
  const mailSubject = encodeURIComponent("Den verste manuelle prosessen vår");
  const mailBody = encodeURIComponent(
    "Hei Johnny,\n\nProsessen vi vil forbedre er:\n\nI dag bruker vi omtrent:\n\nDette skaper problemer fordi:\n\nMvh\n"
  );

  return (
    <section className="contact-section section-frame" id="kontakt" aria-labelledby="contact-title">
      <div className="contact-main">
        <p className="eyebrow"><span />Start med problemet</p>
        <h2 id="contact-title">Send meg prosessen alle på jobb klager på.</h2>
        <p>
          Du trenger ikke en kravspesifikasjon. Fortell meg hva som tar tid, hvem som gjør det og hvor ofte det skjer. Så finner vi ut om det er verdt å bygge noe.
        </p>
        <a
          className="button button-light"
          href={`mailto:Johnny@Bakaas-CadConsult.no?subject=${mailSubject}&body=${mailBody}`}
        >
          Beskriv prosessen på e-post <ArrowIcon />
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
      <p>Systemer som skaper kapasitet.</p>
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
