import type { Metadata } from "next";
import Shell from "../Shell";

// The page is static: prerendered to HTML for GitHub Pages.
export const dynamic = "force-static";

const title = "Privacy Policy for the myWebLog app";
const description =
  "How the myWebLog app for iPhone and Android handles your data: what it shows, what it stores on the phone, what it sends to myWebLog and who is responsible.";

export const metadata: Metadata = {
  title: `${title} | ALT CRZ Solutions`,
  description,
  alternates: {
    canonical: "/myweblog/privacy",
    languages: { sv: "/myweblog/integritet", en: "/myweblog/privacy" },
  },
  openGraph: { title, description, url: "/myweblog/privacy", locale: "en_GB" },
};

export default function PrivacyPolicyEnglish() {
  return (
    <Shell
      language="en"
      eyebrow="The myWebLog app · Privacy"
      title={title}
      intro="The myWebLog app shows your flying club's bookings, messages, flights and account balance from myWebLog on your phone. This page describes which data the app handles, where it lives and what you can do about it."
      updated="23 October 2026"
      alternate={{ href: "/myweblog/integritet", label: "Läs policyn på svenska" }}
    >
      <section aria-labelledby="controller">
        <h2 id="controller">Who is responsible for the data</h2>
        <p>
          The myWebLog app for iPhone and Android is developed and published by ALT CRZ Solutions
          AB (Swedish company no. 559478-9819, Norra Kustvägen 411, SE-263 92 Jonstorp, Sweden)
          on behalf of myWebLog. The app is a client for the myWebLog service (
          <a href="https://www.myweblog.se/">myweblog.se</a>), the booking and membership system
          your flying club uses.
        </p>
        <p>
          The personal data shown in the app, such as your name, your bookings and your flights,
          lives in your club&apos;s myWebLog system. Your club is the data controller for it, and
          the provider of myWebLog processes it on the club&apos;s behalf under the club&apos;s
          agreement with myWebLog. The app fetches the data directly from myWebLog&apos;s servers.
        </p>
        <p>
          ALT CRZ Solutions AB runs no servers of its own behind the app and receives no data from
          it. We only process what you send us yourself, for example when you email our support.
        </p>
      </section>

      <section aria-labelledby="sign-in">
        <h2 id="sign-in">Signing in</h2>
        <p>
          You sign in on myWebLog&apos;s own login page, which opens inside the app. The app never
          sees your password. After signing in, the app receives an access token, which is stored
          encrypted in the phone&apos;s protected storage (the Keychain on iPhone, the Keystore on
          Android). At sign-in the phone&apos;s name, for example &quot;Anna&apos;s iPhone&quot;,
          is sent to myWebLog so that you can see and end the app&apos;s session among your devices
          in myWebLog.
        </p>
        <p>When you sign out, the token is deleted from the phone and revoked at myWebLog.</p>
      </section>

      <section aria-labelledby="shown">
        <h2 id="shown">Data the app fetches and shows</h2>
        <p>The app fetches from myWebLog what you also see when signed in on the web:</p>
        <ul>
          <li>your name, member number and club,</li>
          <li>the club&apos;s booking calendar with your and other members&apos; bookings,</li>
          <li>messages from the club with any attachments, and remarks on aircraft,</li>
          <li>the flight log with the club&apos;s flights and the ones you log yourself,</li>
          <li>your account balance, transactions and payments.</li>
        </ul>
        <p>
          The data is shown in the app but not kept on the phone. Attachments you open are saved
          temporarily for viewing and cleared by the phone.
        </p>
      </section>

      <section aria-labelledby="sent">
        <h2 id="sent">Data the app sends to myWebLog</h2>
        <ul>
          <li>
            <strong>What you do in the app:</strong> bookings you create, change or cancel,
            messages you mark as read or acknowledge, and flights you log.
          </li>
          <li>
            <strong>For push notifications:</strong> a push token that Apple or Google assigns to
            your phone, together with the platform, the app version and your language. This lets
            myWebLog notify your phone, for example when you receive a message or a booking
            changes.
          </li>
          <li>
            <strong>For Live Activities on iPhone:</strong> a separate push token per booking, so
            that the Lock Screen can follow a booking in progress. It is removed when the booking
            is over.
          </li>
        </ul>
        <p>
          Push tokens are deleted at myWebLog when you sign out. You can also turn notifications
          off in the phone&apos;s settings at any time.
        </p>
        <p>
          myWebLog also logs the app&apos;s requests to its server, with the account that made
          them, to see how much the app is used. The logs are not used for advertising or to
          follow you outside the app.
        </p>
      </section>

      <section aria-labelledby="third-parties">
        <h2 id="third-parties">Services from others</h2>
        <ul>
          <li>
            <strong>Apple and Google</strong> deliver the push notifications (Apple Push
            Notification service and Firebase Cloud Messaging). The content of a notification
            passes through their servers.
          </li>
          <li>
            <strong>Swish and Nets</strong> handle payments. The app opens their own apps or
            pages; the app does not handle card details and stores no payment data.
          </li>
        </ul>
        <p>
          The app contains no third-party analytics, advertising or tracking tools, and it does not share or
          sell any data. It does not track you across other companies&apos; apps or websites.
        </p>
      </section>

      <section aria-labelledby="on-the-phone">
        <h2 id="on-the-phone">What is stored on the phone</h2>
        <ul>
          <li>the access token for myWebLog (encrypted, deleted at sign-out),</li>
          <li>your language choice and the kind of account you signed in with,</li>
          <li>a copy of the app&apos;s interface texts, so they can be updated without a new app version.</li>
        </ul>
        <p>All of this is removed when you uninstall the app.</p>
      </section>

      <section aria-labelledby="permissions">
        <h2 id="permissions">Permissions</h2>
        <p>
          The app only asks for permission to show notifications, and that is optional. It does
          not use location, camera, contacts or photos.
        </p>
      </section>

      <section aria-labelledby="rights">
        <h2 id="rights">Your rights</h2>
        <p>
          Under the General Data Protection Regulation (GDPR) you have the right to know which
          data is processed about you, to have it corrected or erased, and to object to the
          processing. Since the data lives in your club&apos;s myWebLog system, please contact your
          club for such requests. Questions about how the app works go to us at{" "}
          <a href="mailto:info@altcrz.se">info@altcrz.se</a>.
        </p>
        <p>
          You can also complain to the Swedish Authority for Privacy Protection (
          <a href="https://www.imy.se/">imy.se</a>) if you believe your data is handled wrongly.
        </p>
      </section>

      <section aria-labelledby="children">
        <h2 id="children">Children and young people</h2>
        <p>
          The app is intended for members of flying clubs that use myWebLog. It collects no data
          beyond what the club has already registered about its members.
        </p>
      </section>

      <section aria-labelledby="changes">
        <h2 id="changes">Changes to this policy</h2>
        <p>
          If the app starts handling data in a new way, we update this page and the date at the
          top. We announce larger changes in the app.
        </p>
      </section>

      <section aria-labelledby="contact">
        <h2 id="contact">Contact</h2>
        <address>
          ALT CRZ Solutions AB
          <br />
          Norra Kustvägen 411, SE-263 92 Jonstorp, Sweden
          <br />
          <a href="mailto:info@altcrz.se">info@altcrz.se</a>
        </address>
      </section>
    </Shell>
  );
}
