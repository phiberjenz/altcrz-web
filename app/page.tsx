const services = [
  {
    number: "01",
    title: "Tjänsteutveckling",
    text: "Digitala tjänster formade efter verksamhetens behov och människorna som använder dem.",
  },
  {
    number: "02",
    title: "Drift & förvaltning",
    text: "Löpande hantering och vidareutveckling av IT-tjänster över tid.",
  },
  {
    number: "03",
    title: "Fokus på flyg",
    text: "Vår primära inriktning är digitala lösningar för verksamheter inom flygbranschen.",
  },
];

const companyDetails = [
  ["Juridiskt namn", "ALT CRZ Solutions AB"],
  ["Organisationsnummer", "559478-9819"],
  ["Säte", "Höganäs kommun"],
  ["Land", "Sverige"],
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ALT CRZ Solutions",
  legalName: "ALT CRZ Solutions AB",
  url: "https://altcrz.se",
  email: "info@altcrz.se",
  taxID: "559478-9819",
  description:
    "Utveckling och drift av IT-tjänster, primärt riktat mot flygbranschen.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Norra Kustvägen 411",
    postalCode: "263 92",
    addressLocality: "Jonstorp",
    addressCountry: "SE",
  },
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Hoppa till innehållet
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="ALT CRZ Solutions, startsida">
          <span className="brand-code" aria-hidden="true">
            ALT<span>/</span>CRZ
          </span>
          <span className="brand-legal">Solutions</span>
        </a>

        <nav className="site-nav" aria-label="Huvudnavigation">
          <a href="#tjanster">Tjänster</a>
          <a href="#om-oss">Om oss</a>
          <a className="nav-contact" href="#kontakt">
            Kontakt <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <div className="site-top" id="top">
          <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              IT-tjänster · Sverige
            </p>
            <h1 id="hero-title">
              IT-tjänster för en bransch i <em>ständig rörelse.</em>
            </h1>
            <p className="hero-intro">
              ALT CRZ Solutions utvecklar och driver IT-tjänster med primärt
              fokus på flygbranschen.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#tjanster">
                Vår inriktning <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href="#om-oss">
                Företagsuppgifter <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="flight-visual" aria-hidden="true">
            <div className="visual-grid" />
            <div className="radar-ring radar-ring-one" />
            <div className="radar-ring radar-ring-two" />
            <div className="route-line route-line-one" />
            <div className="waypoint waypoint-start" />
            <div className="waypoint waypoint-end">
              <span />
            </div>
            <div className="map-label label-start">
              <span>56.2503° N · 12.6607° E</span>
            </div>
            <div className="map-label label-end">
              <span>56.1945° N · 14.0842° E</span>
            </div>
          </div>
          </section>

          <div className="hero-footer" aria-hidden="true">
            <span>UTVECKLING</span>
            <i />
            <span>DRIFT</span>
            <i />
            <span>FLYGFOKUS</span>
            <span className="scroll-note">SCROLLA FÖR MER ↓</span>
          </div>
        </div>

        <section className="services section-shell" id="tjanster" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="section-kicker">Vår inriktning</p>
            <h2 id="services-title">Från idé till stabil drift.</h2>
            <p>
              Vi arbetar med utveckling och drift av digitala tjänster med
              flygbranschen som primärt fokus.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="card-topline">
                  <span>{service.number}</span>
                  <i aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="direction-section" aria-labelledby="direction-title">
          <div className="direction-orbit" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit-dot" />
          </div>
          <div className="direction-content section-shell">
            <div>
              <p className="section-kicker section-kicker-light">Vårt perspektiv</p>
              <h2 id="direction-title">
                Digitalt arbete med <em>tydlig riktning.</em>
              </h2>
            </div>
            <div className="direction-copy">
              <p>
                Vi tror på IT-tjänster som utgår från ett verkligt behov, har
                ett tydligt syfte och kan utvecklas i takt med verksamheten.
              </p>
              <div className="principles">
                <div>
                  <span>01</span>
                  <strong>Tydligt syfte</strong>
                </div>
                <div>
                  <span>02</span>
                  <strong>Långsiktig drift</strong>
                </div>
                <div>
                  <span>03</span>
                  <strong>Branschnära fokus</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about section-shell" id="om-oss" aria-labelledby="about-title">
          <div className="about-intro">
            <p className="section-kicker">Om företaget</p>
            <h2 id="about-title">ALT CRZ Solutions</h2>
            <p>
              Ett svenskt aktiebolag med registrerad verksamhet inom utveckling
              och drift av IT-tjänster, primärt riktat mot flygbranschen.
            </p>
          </div>

          <dl className="company-details">
            {companyDetails.map(([term, detail]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="contact section-shell" id="kontakt" aria-labelledby="contact-title">
          <div className="contact-panel">
            <div className="contact-copy">
              <p className="section-kicker section-kicker-light">Kontakt</p>
              <h2 id="contact-title">Låt oss börja med en riktning.</h2>
              <p>
                För affärsförfrågningar och frågor om bolaget är du välkommen
                att kontakta ALT CRZ Solutions.
              </p>
            </div>

            <address className="contact-address">
              <span className="contact-company">ALT CRZ Solutions</span>
              Norra Kustvägen 411
              <br />
              263 92 Jonstorp
              <br />
              Sverige
              <br />
              <a className="contact-email" href="mailto:info@altcrz.se">
                info@altcrz.se <span aria-hidden="true">↗</span>
              </a>
            </address>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner section-shell">
          <a className="brand brand-footer" href="#top" aria-label="Till sidans början">
            <span className="brand-code" aria-hidden="true">
              ALT<span>/</span>CRZ
            </span>
            <span className="brand-legal">Solutions</span>
          </a>
          <div className="footer-meta">
            <span>© 2026 ALT CRZ Solutions</span>
            <span>Org.nr 559478-9819</span>
            <span>Sverige</span>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
