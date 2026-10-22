import type { Metadata } from "next";
import Shell from "../../Shell";

// The page is static: prerendered to HTML for GitHub Pages.
export const dynamic = "force-static";

const title = "Support for the myWebLog app";
const description =
  "Help with the myWebLog app for iPhone and Android: what the app does, where to turn with questions about your account and bookings, and how to report a problem in the app.";

export const metadata: Metadata = {
  title: `${title} | ALT CRZ Solutions`,
  description,
  alternates: {
    canonical: "/myweblog/support/en",
    languages: { sv: "/myweblog/support", en: "/myweblog/support/en" },
  },
  openGraph: { title, description, url: "/myweblog/support/en", locale: "en_GB" },
};

export default function SupportEnglish() {
  return (
    <Shell
      language="en"
      eyebrow="The myWebLog app · Support"
      title={title}
      intro="The myWebLog app gives members of flying clubs that use myWebLog their bookings, messages, flights and account balance on their phone. Here are answers to the most common questions and where to turn."
      updated="22 October 2026"
      alternate={{ href: "/myweblog/support", label: "Support på svenska" }}
    >
      <section aria-labelledby="about">
        <h2 id="about">About the app</h2>
        <p>
          The app is a mobile version of myWebLog (
          <a href="https://www.myweblog.se/">myweblog.se</a>), the booking and membership system
          your club uses. You sign in with the same user and password as on the web. The app is
          developed by ALT CRZ Solutions AB on behalf of myWebLog and is available for iPhone (iOS
          18 or later) and Android.
        </p>
        <p>In the app you can:</p>
        <ul>
          <li>see the club&apos;s booking calendar and create, change or cancel your own bookings,</li>
          <li>read the club&apos;s messages and remarks, and acknowledge those that require it,</li>
          <li>see the flight log and log your own flights,</li>
          <li>see your balance and transactions, and top up with Swish or card,</li>
          <li>get push notifications when you receive a message or a booking changes, and on
            iPhone follow a booking in progress on the Lock Screen.</li>
        </ul>
      </section>

      <section aria-labelledby="where">
        <h2 id="where">Where do I turn?</h2>
        <h3>Questions about your account, your club or your bookings</h3>
        <p>
          Everything about your membership, permissions, booking rules, prices, balance and
          forgotten passwords is handled by your club in myWebLog, just as on the web. Contact
          your club&apos;s myWebLog administrator. A forgotten password is reset on the login page.
        </p>
        <h3>Problems in the app</h3>
        <p>
          If something in the app does not work, crashes or shows the wrong thing, email us at{" "}
          <a href="mailto:info@altcrz.se?subject=myWebLog%20app">info@altcrz.se</a>. Please
          include which phone and which app version you have (shown under More in the app), which
          club you belong to and what happened. A screenshot helps. We normally answer within a
          few working days.
        </p>
      </section>

      <section aria-labelledby="faq">
        <h2 id="faq">Common questions</h2>
        <dl>
          <dt>I cannot sign in.</dt>
          <dd>
            Check that your user and password work on{" "}
            <a href="https://app.myweblog.se/">app.myweblog.se</a>. If they do but the app does
            not, email us. If they do not, contact your club.
          </dd>
          <dt>I get no notifications.</dt>
          <dd>
            Check that the app is allowed to show notifications in the phone&apos;s settings, and
            that you are signed in. The notifications are sent by myWebLog, and the club may have
            limited which events notify. Under More &gt; Notifications in the app you can see
            whether the phone is registered.
          </dd>
          <dt>I do not see every feature from the web.</dt>
          <dd>
            The app covers what members do most in myWebLog. Administration and rarer features
            remain on the web. We extend the app continuously, and suggestions are welcome.
          </dd>
          <dt>How do I sign out or switch account?</dt>
          <dd>
            Under More in the app, Sign out is at the bottom. That removes the app&apos;s session
            from the phone and from myWebLog.
          </dd>
          <dt>How do I delete my data?</dt>
          <dd>
            The app stores nothing about you beyond the session, which goes when you sign out or
            uninstall the app. Your member data lives with your club in myWebLog; see the{" "}
            <a href="/myweblog/privacy">privacy policy</a>.
          </dd>
        </dl>
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
