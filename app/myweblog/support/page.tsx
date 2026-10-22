import type { Metadata } from "next";
import Shell from "../Shell";

// The page is static: prerendered to HTML for GitHub Pages.
export const dynamic = "force-static";

const title = "Support för appen myWebLog";
const description =
  "Hjälp med appen myWebLog för iPhone och Android: vad appen gör, vart du vänder dig med frågor om ditt konto och dina bokningar, och hur du rapporterar fel i appen.";

export const metadata: Metadata = {
  title: `${title} | ALT CRZ Solutions`,
  description,
  alternates: {
    canonical: "/myweblog/support",
    languages: { sv: "/myweblog/support", en: "/myweblog/support/en" },
  },
  openGraph: { title, description, url: "/myweblog/support", locale: "sv_SE" },
};

export default function SupportSwedish() {
  return (
    <Shell
      language="sv"
      eyebrow="Appen myWebLog · Support"
      title={title}
      intro="Appen myWebLog ger medlemmar i flygklubbar som använder myWebLog sina bokningar, meddelanden, flygningar och sitt saldo direkt i telefonen. Här hittar du svar på de vanligaste frågorna och vart du vänder dig."
      updated="22 oktober 2026"
      alternate={{ href: "/myweblog/support/en", label: "Support in English" }}
    >
      <section aria-labelledby="om-appen">
        <h2 id="om-appen">Om appen</h2>
        <p>
          Appen är en mobilversion av myWebLog (
          <a href="https://www.myweblog.se/">myweblog.se</a>), det boknings- och medlemssystem
          din klubb använder. Du loggar in med samma användare och lösenord som på webben. Appen
          utvecklas av ALT CRZ Solutions AB på uppdrag av myWebLog och finns för iPhone (iOS 18
          eller senare) och Android.
        </p>
        <p>I appen kan du:</p>
        <ul>
          <li>se klubbens bokningskalender och boka, ändra eller avboka dina egna bokningar,</li>
          <li>läsa klubbens meddelanden och anmärkningar, och bekräfta dem som kräver det,</li>
          <li>se flygloggen och logga egna flygningar,</li>
          <li>se ditt saldo och dina transaktioner, och fylla på med Swish eller kort,</li>
          <li>få pushnotiser när du får ett meddelande eller en bokning ändras, och på iPhone
            följa en pågående bokning på låsskärmen.</li>
        </ul>
      </section>

      <section aria-labelledby="vart">
        <h2 id="vart">Vart vänder jag mig?</h2>
        <h3>Frågor om ditt konto, din klubb eller dina bokningar</h3>
        <p>
          Allt som rör ditt medlemskap, dina behörigheter, bokningsregler, priser, saldo och
          glömt lösenord hanteras av din klubb i myWebLog, precis som på webben. Kontakta
          klubbens myWebLog-ansvarige. Glömt lösenord återställer du på inloggningssidan.
        </p>
        <h3>Fel i appen</h3>
        <p>
          Om något i appen inte fungerar som det ska, kraschar eller visar fel, mejla oss på{" "}
          <a href="mailto:info@altcrz.se?subject=myWebLog-appen">info@altcrz.se</a>. Skriv
          gärna vilken telefon och vilken version av appen du har (står under Mer i appen), vilken
          klubb du tillhör och vad som hände. En skärmbild hjälper. Vi svarar normalt inom några
          arbetsdagar.
        </p>
      </section>

      <section aria-labelledby="vanliga-fragor">
        <h2 id="vanliga-fragor">Vanliga frågor</h2>
        <dl>
          <dt>Jag kan inte logga in.</dt>
          <dd>
            Kontrollera att användare och lösenord fungerar på{" "}
            <a href="https://app.myweblog.se/">app.myweblog.se</a>. Gör de det men inte i appen,
            mejla oss. Gör de inte det, kontakta din klubb.
          </dd>
          <dt>Jag får inga notiser.</dt>
          <dd>
            Kontrollera att appen får visa notiser i telefonens inställningar, och att du är
            inloggad i appen. Notiserna skickas av myWebLog, och klubben kan ha begränsat vilka
            händelser som ger notis. Under Mer &gt; Notiser i appen ser du om telefonen är
            registrerad.
          </dd>
          <dt>Jag ser inte alla funktioner från webben.</dt>
          <dd>
            Appen täcker det medlemmar oftast gör i myWebLog. Administration och mer sällsynta
            funktioner finns kvar på webben. Vi bygger ut appen löpande, och förslag är välkomna.
          </dd>
          <dt>Hur loggar jag ut eller byter konto?</dt>
          <dd>
            Under Mer i appen finns Logga ut längst ned. Då raderas appens inloggning från
            telefonen och från myWebLog.
          </dd>
          <dt>Hur tar jag bort mina uppgifter?</dt>
          <dd>
            Appen lagrar inget om dig utöver inloggningen, som försvinner när du loggar ut eller
            avinstallerar appen. Dina medlemsuppgifter finns hos klubben i myWebLog; läs mer i{" "}
            <a href="/myweblog/integritet">integritetspolicyn</a>.
          </dd>
        </dl>
      </section>

      <section aria-labelledby="kontakt">
        <h2 id="kontakt">Kontakt</h2>
        <address>
          ALT CRZ Solutions AB
          <br />
          Norra Kustvägen 411, 263 92 Jonstorp, Sverige
          <br />
          <a href="mailto:info@altcrz.se">info@altcrz.se</a>
        </address>
      </section>
    </Shell>
  );
}
