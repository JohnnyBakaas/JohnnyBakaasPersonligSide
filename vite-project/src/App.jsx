import { useEffect, useRef, useState } from "react";
import "./App.css";

const EMAIL = "Johnny@Bakaas-CadConsult.no";

const weekTasks = [
  { area: "Salg", task: "Sjekke nye leads mot Brønnøysund og nettsider", marked: true },
  { area: "Kundeservice", task: "Svare på de samme spørsmålene om leveringstid", marked: true },
  { area: "Kundeservice", task: "Ringe kunden som var misfornøyd med monteringen" },
  { area: "Økonomi", task: "Matche innkommende fakturaer mot bestillinger", marked: true },
  { area: "Drift", task: "Legge inn ordre fra e-post i ordresystemet", marked: true },
  { area: "Ledelse", task: "Planlegge neste kvartal med teamet" },
];

// Each pair points at the row in weekTasks it illustrates.
const heroPairs = [
  { less: "sjekke leads", more: "selge", task: 0 },
  { less: "svare på det samme", more: "hjelpe kunden", task: 1 },
  { less: "matche fakturaer", more: "styre økonomien", task: 3 },
  { less: "taste inn ordre", more: "levere", task: 4 },
];

const contactRoles = [
  ["selgerne", "ta en god kundesamtale"],
  ["kundebehandlerne", "svare kunden"],
  ["prosjektlederne", "sende et tilbud"],
  ["teknikerne", "dra ut på oppdrag"],
  ["økonomiteamet", "sende fakturaen"],
  ["rekruttererne", "kalle inn til intervju"],
];

const prospects = [
  {
    name: "Sandviken Rør AS",
    place: "Bergen",
    size: "34 ansatte",
    match: true,
    reason: "Ny daglig leder fra august.",
    sources: "Enhetsregisteret, firmaets nettside",
  },
  { name: "Kvamme Bygg og Anlegg AS", place: "Voss", size: "120 ansatte" },
  {
    name: "Haugland VVS AS",
    place: "Stord",
    size: "18 ansatte",
    match: true,
    reason: "Har åpnet ny avdeling i Haugesund.",
    sources: "Enhetsregisteret, lokalavis",
  },
  { name: "Solheim Eiendom AS", place: "Bergen", size: "6 ansatte" },
  {
    name: "Vestrør Service AS",
    place: "Førde",
    size: "27 ansatte",
    match: true,
    reason: "Søker serviceleder.",
    sources: "Enhetsregisteret, stillingsannonse",
  },
  { name: "Nordhordland Elektro AS", place: "Knarvik", size: "41 ansatte" },
];

function MarketArtifact() {
  return (
    <div className="artifact artifact-market">
      <div className="market-row">
        <span>Bedrifter i området</span>
        <strong>1 284</strong>
        <i style={{ "--share": "100%" }} />
      </div>
      <div className="market-row">
        <span>Riktig bransje og størrelse</span>
        <strong>212</strong>
        <i style={{ "--share": "16.5%" }} />
      </div>
      <div className="market-row is-key">
        <span>Passer kundeprofilen</span>
        <strong>37</strong>
        <i style={{ "--share": "2.9%" }} />
      </div>
    </div>
  );
}

function SignalArtifact() {
  const signals = [
    ["Ny daglig leder", "Sandviken Rør AS", "2 dager siden"],
    ["Ny avdeling", "Haugland VVS AS", "1 uke siden"],
    ["Stillingsannonse", "Vestrør Service AS", "1 uke siden"],
  ];
  return (
    <ul className="artifact artifact-signals">
      {signals.map(([kind, company, when]) => (
        <li key={company}>
          <span className="signal-kind">{kind}</span>
          <span>{company}</span>
          <span className="artifact-quiet">{when}</span>
        </li>
      ))}
    </ul>
  );
}

function ProfileArtifact() {
  return (
    <div className="artifact artifact-profile">
      <p className="artifact-title">Haugland VVS AS</p>
      <p>
        Rørlegger og ventilasjon for næringsbygg på Sunnhordland. 18 ansatte, vekst tre år på rad.<sup>1</sup> Åpnet avdeling i Haugesund i september.<sup>2</sup>
      </p>
      <p>
        Daglig leder: Marit Haugland.<sup>1</sup>
      </p>
      <p className="profile-uncertain">Usikkert: innkjøpsansvarlig er ikke bekreftet.</p>
      <ol className="profile-sources">
        <li>Enhetsregisteret</li>
        <li>Haugesunds Avis, 14. september</li>
      </ol>
    </div>
  );
}

function AssignArtifact() {
  const rows = [
    ["Sandviken Rør AS", "KH", "Kari"],
    ["Haugland VVS AS", "TS", "Thomas"],
    ["Vestrør Service AS", "KH", "Kari"],
  ];
  return (
    <ul className="artifact artifact-assign">
      {rows.map(([company, initials, seller]) => (
        <li key={company}>
          <span>{company}</span>
          <span className="seller">
            <b aria-hidden="true">{initials}</b>
            <span>{seller}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

function FollowUpArtifact() {
  return (
    <ol className="artifact artifact-followup">
      <li>
        <span className="artifact-quiet">12. okt</span>
        <p>Ringte Marit. Interessert, ba om tilbud i november.</p>
      </li>
      <li>
        <span className="artifact-quiet">14. okt</span>
        <p>Rettet telefonnummer til daglig leder.</p>
      </li>
      <li className="is-next">
        <span>4. nov</span>
        <p>Neste steg: send tilbud og følg opp.</p>
      </li>
    </ol>
  );
}

function QueueArtifact() {
  return (
    <div className="artifact artifact-queue">
      <p className="queue-ask">Hvem har ansvar for innkjøp hos Vestrør Service?</p>
      <p className="queue-answer">
        Driftssjef Ola Vestrheim, ifølge firmaets nettside. Lagret på bedriften.
      </p>
    </div>
  );
}

const caseParts = [
  {
    title: "Fra et stort marked til relevante muligheter",
    body: [
      "Hva kjennetegner en god kunde for dere? Det kan være bransje, størrelse, geografi, måten bedriften jobber på eller andre forhold som gjør tilbudet deres relevant.",
      "Kriteriene brukes til å finne og sortere potensielle kunder, både i eksisterende lister og i nye datakilder. Selgerne får et mer relevant utgangspunkt, med en forklaring på hvorfor en bedrift er interessant.",
    ],
    Artifact: MarketArtifact,
  },
  {
    title: "Fange opp endringer som er verdt å undersøke",
    body: [
      "Nye bedrifter oppstår, virksomheter endrer retning og kontaktpersoner bytter rolle.",
      "En løpende arbeidsflyt fanger opp slike endringer og vurderer dem mot kundeprofilen. Et signal er en grunn til å se nærmere på bedriften. Om det finnes et faktisk behov, må avklares med kunden.",
    ],
    Artifact: SignalArtifact,
  },
  {
    title: "Et bedre grunnlag før første kontakt",
    body: [
      "AI samler informasjon fra tilgjengelige kilder og gjør den om til et lesbart bedriftsbilde: hva virksomheten gjør, aktuelle kontaktpersoner og forhold som kan være nyttige i en samtale.",
      "Kilder og usikkerhet følger informasjonen, så selgeren kan kontrollere detaljene selv.",
    ],
    Artifact: ProfileArtifact,
  },
  {
    title: "Informasjonen havner hos den som skal bruke den",
    body: [
      "En god kundeliste har liten verdi hvis den blir liggende i en mappe.",
      "Aktuelle bedrifter går gjennom avtalte kvalitetskrav og fordeles til riktig selger. Det er tydelig hvem som følger opp hva.",
    ],
    Artifact: AssignArtifact,
  },
  {
    title: "Orden mellom samtalene",
    body: [
      "Hva ble avtalt? Hvem skal kontaktes igjen? Når passer det å følge opp?",
      "Kontaktresultater og neste steg gjør at arbeidet fortsetter der det slapp. Opplysninger selgeren har rettet, blir tatt vare på når ny informasjon kommer inn.",
    ],
    Artifact: FollowUpArtifact,
  },
  {
    title: "Selgerne bestiller hjelpen de trenger",
    body: [
      "Noen ganger mangler bare et telefonnummer. Andre ganger trengs en grundigere undersøkelse før et viktig møte.",
      "Spørsmålet sendes rett til en researchkø, og svaret lagres sammen med bedriften.",
    ],
    Artifact: QueueArtifact,
  },
];

const steps = [
  {
    title: "Finn flaskehalsen",
    text: "Vi velger én avgrenset oppgave som tar mye tid i hverdagen deres, og blir enige om hvordan vi måler om en løsning hjelper.",
  },
  {
    title: "Bygg en pilot",
    text: "Jeg bygger en fungerende løsning rundt oppgaven, tilpasset hvordan dere faktisk jobber, og tester den på ekte data.",
  },
  {
    title: "Vurder før vi utvider",
    text: "Vi ser på resultatet sammen. Gir piloten verdi, bygger vi videre. Gjør den ikke det, har dere brukt lite på å finne det ut.",
  },
];

function useRotation(length, interval) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    if (paused || stopped || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [paused, stopped, length, interval]);

  const pauseHandlers = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
  };

  return { index, setIndex, pauseHandlers, stop: () => setStopped(true) };
}

// eslint-disable-next-line react/prop-types
function WeekCard({ activeTask, onSelect }) {
  let markIndex = 0;

  return (
    <figure className="week" aria-label="Eksempel på oppgaver i en vanlig arbeidsuke">
      <div className="week-head">
        <p className="week-title">En vanlig uke</p>
        <p className="week-hint">Velg en markert oppgave</p>
      </div>
      <ul>
        {weekTasks.map((item, index) => {
          const order = item.marked ? markIndex++ : null;
          const classes = [
            item.marked ? "is-marked" : "is-job",
            index === activeTask && "is-active",
          ]
            .filter(Boolean)
            .join(" ");
          const content = (
            <>
              <span className="week-area">{item.area}</span>
              <span className="week-task">
                <mark>{item.task}</mark>
              </span>
            </>
          );
          return (
            <li
              key={item.task}
              className={classes || undefined}
              style={item.marked ? { "--order": order } : undefined}
            >
              {item.marked ? (
                <button
                  type="button"
                  className="week-row"
                  aria-pressed={index === activeTask}
                  onMouseEnter={() => onSelect(index)}
                  onFocus={() => onSelect(index)}
                  onClick={() => onSelect(index, true)}
                >
                  {content}
                </button>
              ) : (
                <div className="week-row">{content}</div>
              )}
            </li>
          );
        })}
      </ul>
      <figcaption>
        <span className="key key-ai">Gult</span> forarbeid AI kan ta unna.{" "}
        <span className="key key-job">Blått</span> jobben.
      </figcaption>
    </figure>
  );
}

function ProspectList() {
  let matchIndex = 0;

  return (
    <figure className="prospects" aria-label="Eksempel på en sortert bedriftsliste">
      <div className="prospects-head">
        <p className="prospects-count">
          <strong>3 nye</strong> verdt å kontakte denne uken
        </p>
        <p className="prospects-profile">
          Rørleggerbedrifter, 10–50 ansatte, Vestland. Sortert fra 1 284 bedrifter.
        </p>
      </div>
      <ul>
        {prospects.map((item) => {
          const order = item.match ? matchIndex++ : null;
          return (
            <li
              key={item.name}
              className={item.match ? "is-match" : undefined}
              style={item.match ? { "--order": order } : undefined}
            >
              <div className="prospect-row">
                <span className="prospect-name">
                  <mark>{item.name}</mark>
                </span>
                <span className="prospect-place">{item.place}</span>
                <span className="prospect-size">{item.size}</span>
              </div>
              {item.match && (
                <div className="prospect-note">
                  <p>{item.reason}</p>
                  <p className="prospect-sources">Kilder: {item.sources}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
      <figcaption>Illustrasjon med oppdiktede bedrifter.</figcaption>
    </figure>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#innhold">
        Hopp til innholdet
      </a>
      <div className="wrap header-inner">
        <a className="brand" href="#top">
          Johnny Bakaas
          <span>AI-konsulent</span>
        </a>
        <nav aria-label="Hovedmeny">
          <a className="nav-optional" href="#eksempel">Eksempel</a>
          <a className="nav-optional" href="#arbeidsmate">Arbeidsmåte</a>
          <a className="nav-contact" href="#kontakt">Ta kontakt</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const { index, setIndex, pauseHandlers, stop } = useRotation(heroPairs.length, 3200);
  const pair = heroPairs[index];

  const selectTask = (task, pin = false) => {
    const pairIndex = heroPairs.findIndex((item) => item.task === task);
    if (pairIndex === -1) return;
    setIndex(pairIndex);
    if (pin) stop();
  };

  return (
    <section className="hero" id="top">
      <div className="wrap hero-inner" {...pauseHandlers}>
        <h1 className="rotating hero-title">
          <span className="visually-hidden">
            AI-konsulent: mindre tid på gjentakende arbeid, mer tid på jobben.
          </span>
          <span className="hero-line" aria-hidden="true">
            Mindre tid på å <mark key={`less-${index}`}>{pair.less}</mark>.
          </span>
          <span className="hero-line" aria-hidden="true">
            Mer tid på å <mark key={`more-${index}`} className="is-second is-job">{pair.more}</mark>.
          </span>
        </h1>
        <div className="hero-copy">
          <p className="lead">
            Jeg er AI-konsulent og bygger løsninger som tar unna gjentakende oppgaver i salg, kundeservice, økonomi og drift. Vi finner flaskehalsen, bygger en pilot og vurderer verdien før vi utvider.
          </p>
          <div className="hero-actions">
            <a className="button" href="#kontakt">Ta kontakt</a>
            <a className="quiet-link" href="#eksempel">Se et eksempel</a>
          </div>
        </div>
        <WeekCard activeTask={pair.task} onSelect={selectTask} />
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro" aria-labelledby="intro-title">
      <div className="wrap intro-inner">
        <div className="intro-copy">
          <h2 id="intro-title">Mye av arbeidet skjer før den egentlige jobben.</h2>
          <p className="lead">
            Finne, undersøke, kontrollere, sammenstille og huske. Det er sjelden selve jobben, men det må gjøres før jobben kan gjøres godt.
          </p>
          <p className="lead">
            Ta salg som eksempel. Før en selger kan ringe, må noen finne ut hvem det er verdt å ringe, og hvorfor.
          </p>
        </div>
        <ProspectList />
      </div>
    </section>
  );
}

// The rail fill runs ahead of the reader: its tip starts at the middle of
// the screen and drifts down to 85 % of the screen by the end of the flow.
function useRailFill() {
  const ref = useRef(null);

  useEffect(() => {
    const flow = ref.current;
    if (!flow) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const rect = flow.getBoundingClientRect();
      const span = rect.height - vh * 0.35;
      const progress = Math.min(1, Math.max(0, (vh * 0.5 - rect.top) / span));
      const reach = progress * rect.height;
      flow.style.setProperty("--fill", progress.toFixed(4));
      for (const item of flow.children) {
        item.classList.toggle("is-reached", item.offsetTop + 14 <= reach);
      }
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return ref;
}

function Case() {
  const flowRef = useRailFill();

  return (
    <section className="case" id="eksempel" aria-labelledby="case-title">
      <div className="wrap">
        <div className="case-head">
          <div>
            <p className="kicker">Eksempel fra et prosjekt</p>
            <h2 id="case-title">Salgsarbeidet før første kundesamtale</h2>
          </div>
          <div className="case-lede">
            <p>
              Mye av salgsarbeidet skjer før noen snakker med kunden. Finne aktuelle bedrifter, undersøke hva de driver med, finne riktig kontaktperson, kontrollere gamle opplysninger, prioritere og huske hvem som skulle følges opp. Hver oppgave er overkommelig. Samlet tar de mye tid.
            </p>
            <p>
              Jeg bygger løsninger som kobler dette sammen, med AI til å undersøke, sammenstille og klargjøre informasjon underveis. Tilpasset hva bedriften selger, hvem den vil nå og hvordan selgerne faktisk jobber.
            </p>
          </div>
        </div>

        <ol className="flow" ref={flowRef}>
          {caseParts.map(({ title, body, Artifact }) => (
            <li key={title}>
              <div className="flow-text">
                <h3>{title}</h3>
                {body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <Artifact />
            </li>
          ))}
        </ol>

        <div className="proof">
          <p className="proof-figure">1 hel arbeidsdag tilbake</p>
          <p>
            I en tidlig prototype skulle en selger kvalitetssikre 13 leads mot Brønnøysundregistrene, økonomi og sosiale medier. Manuelt tar det en arbeidsdag. Den AI-assisterte arbeidsflyten gjorde det på litt over fem minutter.
          </p>
          <dl className="proof-bars">
            <div>
              <dt>Manuelt</dt>
              <dd>
                <i style={{ "--size": "100%" }}>
                  <span>ca. 8 timer</span>
                </i>
              </dd>
            </div>
            <div>
              <dt>Med AI</dt>
              <dd>
                <i style={{ "--size": "1.1%" }} />
                <span>litt over 5 minutter</span>
              </dd>
            </div>
          </dl>
        </div>

        <div className="case-outro">
          <p>
            Dette er ett eksempel på hva AI kan bli i praksis. Har dere noe lignende som stjeler tid, enten det er i salg, drift eller administrasjon?
          </p>
          <a className="button button-marker" href="#kontakt">Snakk med meg om det</a>
        </div>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section className="method" id="arbeidsmate" aria-labelledby="method-title">
      <div className="wrap">
        <h2 id="method-title" className="visually-hidden">Slik jobber vi</h2>
        <ol className="steps">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="step-number" aria-hidden="true">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function RotatingQuestion() {
  const { index, pauseHandlers } = useRotation(contactRoles.length, 3200);
  const [who, what] = contactRoles[index];

  return (
    <h2 id="contact-title" className="rotating" {...pauseHandlers}>
      <span className="visually-hidden">
        Hvor mye arbeid gjør folkene deres før de er klare til å gjøre jobben?
      </span>
      <span aria-hidden="true">
        Hvor mye arbeid gjør{" "}
        <mark key={`who-${index}`}>{who}</mark> deres før de er klare til å{" "}
        <mark key={`what-${index}`} className="is-second is-job">{what}</mark>?
      </span>
    </h2>
  );
}

function Contact() {
  const subject = encodeURIComponent("Forarbeid som tar for mye tid");
  const body = encodeURIComponent(
    "Hei Johnny,\n\nOppgaven som tar tid hos oss er:\n\nDen gjøres av:\n\nOmtrent så ofte:\n\nMvh\n"
  );

  return (
    <section className="contact" id="kontakt" aria-labelledby="contact-title">
      <div className="wrap contact-inner">
        <RotatingQuestion />
        <div className="contact-body">
          <p>
            Hvilken oppgave tar mer tid enn den burde hos dere? Fortell meg hva den går ut på, hvem som gjør den og hvor ofte. Så finner vi ut om den egner seg.
          </p>
          <a className="button" href={`mailto:${EMAIL}?subject=${subject}&body=${body}`}>
            Send meg en e-post
          </a>
          <dl className="contact-details">
            <div>
              <dt>E-post</dt>
              <dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd><a href="tel:+4790732947">907 32 947</a></dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main id="innhold">
        <Hero />
        <Intro />
        <Case />
        <Method />
        <Contact />
      </main>
      <footer className="site-footer wrap">
        <p>© {new Date().getFullYear()} Johnny Bakaas</p>
        <a href="#top">Til toppen</a>
      </footer>
    </>
  );
}
