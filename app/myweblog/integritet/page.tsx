import type { Metadata } from "next";
import Shell from "../Shell";

// The page is static: prerendered to HTML for GitHub Pages.
export const dynamic = "force-static";

const title = "Integritetspolicy för appen myWebLog";
const description =
  "Hur appen myWebLog för iPhone och Android hanterar dina uppgifter: vad som visas, vad som sparas på telefonen, vad som skickas till myWebLog och vem som ansvarar.";

export const metadata: Metadata = {
  title: `${title} | ALT CRZ Solutions`,
  description,
  alternates: {
    canonical: "/myweblog/integritet",
    languages: { sv: "/myweblog/integritet", en: "/myweblog/privacy" },
  },
  openGraph: { title, description, url: "/myweblog/integritet", locale: "sv_SE" },
};

export default function PrivacyPolicySwedish() {
  return (
    <Shell
      language="sv"
      eyebrow="Appen myWebLog · Integritet"
      title={title}
      intro="Appen myWebLog visar din flygklubbs bokningar, meddelanden, flygningar och saldo från myWebLog i telefonen. Här beskriver vi vilka uppgifter appen hanterar, var de finns och vad du kan göra med dem."
      updated="23 oktober 2026"
      alternate={{ href: "/myweblog/privacy", label: "Read this policy in English" }}
    >
      <section aria-labelledby="ansvar">
        <h2 id="ansvar">Vem som ansvarar för uppgifterna</h2>
        <p>
          Appen myWebLog för iPhone och Android utvecklas och publiceras av ALT CRZ Solutions AB
          (org.nr 559478-9819, Norra Kustvägen 411, 263 92 Jonstorp) på uppdrag av myWebLog. Appen
          är en klient till tjänsten myWebLog (
          <a href="https://www.myweblog.se/">myweblog.se</a>), det boknings- och medlemssystem din
          flygklubb använder.
        </p>
        <p>
          De personuppgifter som visas i appen, till exempel ditt namn, dina bokningar och dina
          flygningar, finns i klubbens myWebLog-system. Din klubb är personuppgiftsansvarig för
          dem, och myWebLogs leverantör behandlar dem för klubbens räkning enligt klubbens avtal
          med myWebLog. Appen hämtar uppgifterna direkt från myWebLogs servrar.
        </p>
        <p>
          ALT CRZ Solutions AB har inga egna servrar bakom appen och tar inte emot några uppgifter
          från den. Vi behandlar bara det du själv skickar till oss, till exempel när du mejlar
          vår support.
        </p>
      </section>

      <section aria-labelledby="inloggning">
        <h2 id="inloggning">Inloggning</h2>
        <p>
          Du loggar in på myWebLogs egen inloggningssida, som öppnas i appen. Appen ser aldrig
          ditt lösenord. Efter inloggningen får appen en åtkomstnyckel, som sparas krypterat i
          telefonens skyddade lagring (nyckelringen på iPhone, Keystore på Android). Vid
          inloggningen skickas telefonens namn, till exempel &quot;Annas iPhone&quot;, till myWebLog
          så att du kan se och avsluta appens inloggning bland dina enheter i myWebLog.
        </p>
        <p>
          När du loggar ut raderas åtkomstnyckeln från telefonen och återkallas hos myWebLog.
        </p>
      </section>

      <section aria-labelledby="visas">
        <h2 id="visas">Uppgifter som appen hämtar och visar</h2>
        <p>Appen hämtar från myWebLog det som du också ser när du är inloggad på webben:</p>
        <ul>
          <li>ditt namn, medlemsnummer och vilken klubb du tillhör,</li>
          <li>klubbens bokningskalender med dina och andra medlemmars bokningar,</li>
          <li>meddelanden från klubben med eventuella bilagor, och anmärkningar på flygplan,</li>
          <li>flygloggen med klubbens flygningar och de du själv loggar,</li>
          <li>ditt kontosaldo, dina transaktioner och betalningar.</li>
        </ul>
        <p>
          Uppgifterna visas i appen men lagras inte varaktigt i telefonen. Bilagor du öppnar
          sparas tillfälligt för visning och rensas av telefonen.
        </p>
      </section>

      <section aria-labelledby="skickas">
        <h2 id="skickas">Uppgifter som appen skickar till myWebLog</h2>
        <ul>
          <li>
            <strong>Det du gör i appen:</strong> bokningar du skapar, ändrar eller avbokar,
            meddelanden du markerar som lästa eller bekräftar, och flygningar du loggar.
          </li>
          <li>
            <strong>För pushnotiser:</strong> en push-token som Apple respektive Google ger din
            telefon, tillsammans med plattform, appens version och ditt språk. Det gör att
            myWebLog kan skicka notiser till just din telefon, till exempel när du får ett
            meddelande eller en bokning ändras.
          </li>
          <li>
            <strong>För Live Activities på iPhone:</strong> en separat push-token per bokning, så
            att låsskärmen kan följa en pågående bokning. Den tas bort när bokningen är klar.
          </li>
        </ul>
        <p>
          Push-tokens raderas hos myWebLog när du loggar ut. Du kan även stänga av notiser i
          telefonens inställningar när som helst.
        </p>
        <p>
          myWebLog loggar också appens anrop till servern, med vilket konto som gjorde dem, för
          att se hur mycket appen används. Loggarna används inte för reklam och inte för att
          följa dig utanför appen.
        </p>
      </section>

      <section aria-labelledby="tredje-part">
        <h2 id="tredje-part">Tjänster från andra</h2>
        <ul>
          <li>
            <strong>Apple och Google</strong> förmedlar pushnotiserna (Apple Push Notification
            service respektive Firebase Cloud Messaging). Notisens innehåll passerar deras
            servrar.
          </li>
          <li>
            <strong>Swish och Nets</strong> hanterar betalningar. Appen öppnar deras egna appar
            eller sidor; appen hanterar inte kortuppgifter och sparar inga betaluppgifter.
          </li>
        </ul>
        <p>
          Appen innehåller inga verktyg från andra för analys, annonsering eller spårning, och den delar
          eller säljer inga uppgifter. Den spårar dig inte över andra företags appar eller
          webbplatser.
        </p>
      </section>

      <section aria-labelledby="telefonen">
        <h2 id="telefonen">Det som sparas på telefonen</h2>
        <ul>
          <li>åtkomstnyckeln till myWebLog (krypterad, raderas vid utloggning),</li>
          <li>ditt språkval och vilken typ av konto du loggat in med,</li>
          <li>en kopia av appens gränssnittstexter, så att de kan uppdateras utan ny appversion.</li>
        </ul>
        <p>Allt detta försvinner när du avinstallerar appen.</p>
      </section>

      <section aria-labelledby="behorigheter">
        <h2 id="behorigheter">Behörigheter</h2>
        <p>
          Appen ber bara om tillstånd att visa notiser, och det är frivilligt. Den använder inte
          plats, kamera, kontakter eller bilder.
        </p>
      </section>

      <section aria-labelledby="rattigheter">
        <h2 id="rattigheter">Dina rättigheter</h2>
        <p>
          Enligt dataskyddsförordningen (GDPR) har du rätt att få veta vilka uppgifter som
          behandlas om dig, att få dem rättade eller raderade och att invända mot behandlingen.
          Eftersom uppgifterna finns i klubbens myWebLog-system vänder du dig till din klubb för
          sådana ärenden. Frågor om hur appen fungerar skickar du till oss på{" "}
          <a href="mailto:info@altcrz.se">info@altcrz.se</a>.
        </p>
        <p>
          Du kan också klaga hos Integritetsskyddsmyndigheten (
          <a href="https://www.imy.se/">imy.se</a>) om du anser att dina uppgifter behandlas fel.
        </p>
      </section>

      <section aria-labelledby="barn">
        <h2 id="barn">Barn och unga</h2>
        <p>
          Appen riktar sig till medlemmar i flygklubbar som använder myWebLog. Den samlar inte in
          några uppgifter utöver dem klubben redan har registrerat om sina medlemmar.
        </p>
      </section>

      <section aria-labelledby="andringar">
        <h2 id="andringar">Ändringar i policyn</h2>
        <p>
          Om appen börjar hantera uppgifter på ett nytt sätt uppdaterar vi den här sidan och
          datumet högst upp. Större ändringar berättar vi om i appen.
        </p>
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
