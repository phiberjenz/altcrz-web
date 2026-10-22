import Link from "next/link";
import type { ReactNode } from "react";

type Language = "sv" | "en";

type ShellProps = {
  language: Language;
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  /** The same page in the other language. */
  alternate: { href: string; label: string };
  children: ReactNode;
};

const labels = {
  sv: {
    skip: "Hoppa till innehållet",
    home: "ALT CRZ Solutions, startsida",
    nav: "Huvudnavigation",
    start: "Start",
    support: "Support",
    privacy: "Integritet",
    contact: "Kontakt",
    updated: "Senast uppdaterad",
    top: "Till sidans början",
  },
  en: {
    skip: "Skip to content",
    home: "ALT CRZ Solutions, home page",
    nav: "Main navigation",
    start: "Home",
    support: "Support",
    privacy: "Privacy",
    contact: "Contact",
    updated: "Last updated",
    top: "Back to top",
  },
} as const;

const links = {
  sv: { support: "/myweblog/support", privacy: "/myweblog/integritet" },
  en: { support: "/myweblog/support/en", privacy: "/myweblog/privacy" },
} as const;

/** The frame of the myWebLog app pages: the site's header and footer around a readable document. */
export default function Shell({
  language,
  eyebrow,
  title,
  intro,
  updated,
  alternate,
  children,
}: ShellProps) {
  const text = labels[language];
  const nav = links[language];

  // The site's root layout is Swedish; the English pages mark their own content.
  return (
    <div lang={language}>
      <a className="skip-link" href="#main-content">
        {text.skip}
      </a>

      <div className="doc-top" id="top">
        <header className="site-header">
          <Link className="brand" href="/" aria-label={text.home}>
            <span className="brand-code" aria-hidden="true">
              ALT<span>/</span>CRZ
            </span>
            <span className="brand-legal">Solutions</span>
          </Link>

          <nav className="site-nav" aria-label={text.nav}>
            <Link className="nav-home" href="/">
              {text.start}
            </Link>
            <Link href={nav.support}>{text.support}</Link>
            <Link href={nav.privacy}>{text.privacy}</Link>
            <a className="nav-contact" href="mailto:info@altcrz.se">
              {text.contact} <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </header>

        <div className="doc-hero section-shell">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1>{title}</h1>
          <p className="doc-intro">{intro}</p>
          <p className="doc-meta">
            <span>
              {text.updated} {updated}
            </span>
            <Link href={alternate.href} lang={language === "sv" ? "en" : "sv"}>
              {alternate.label}
            </Link>
          </p>
        </div>
      </div>

      <main id="main-content" tabIndex={-1} className="doc section-shell">
        {children}
      </main>

      <footer className="site-footer">
        <div className="footer-inner section-shell">
          <a className="brand brand-footer" href="#top" aria-label={text.top}>
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
    </div>
  );
}
