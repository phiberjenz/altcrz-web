# ALT CRZ Solutions

En enkel, modern och responsiv företagswebbplats för ALT CRZ Solutions.
Sidan är statiskt byggd och förberedd för GitHub Pages på den egna domänen
`altcrz.se`.

## Köra lokalt

Du behöver Node.js 22.13 eller senare.

```bash
npm install
npm run dev
```

Öppna sedan adressen som visas i terminalen. Kontrollera produktionsbygget med:

```bash
npm test
```

## Publicera med GitHub Pages

1. Skapa ett GitHub-repo och skicka upp projektet till grenen `main`.
2. Öppna **Settings → Pages** i repot och välj **GitHub Actions** som källa.
3. Lägg till `altcrz.se` under **Custom domain**. GitHub rekommenderar att
   domänen verifieras innan DNS-posterna ändras.
4. När GitHub visar att domänen är redo, byt domänens befintliga parkeringsposter
   hos Loopia mot dessa fyra `A`-poster:

   ```text
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

5. Lägg gärna även en `CNAME`-post för `www` som pekar på GitHub-kontots
   standarddomän, exempelvis `ditt-konto.github.io`.
6. Slå på **Enforce HTTPS** i GitHub när certifikatet är klart.

Viktigt: behåll domänens `MX`- och övriga e-postposter. De behövs för
`info@altcrz.se` och ska inte ersättas av webbplatsens `A`-poster. DNS-ändringar
kan ta upp till 24 timmar att slå igenom.

GitHub-workflowen i `.github/workflows/deploy.yml` bygger, testar och publicerar
sidan automatiskt vid varje ändring på `main`.

## Inför Apple Developer Program

Sidan visar bolagets juridiska namn, organisationsnummer, adress, verksamhet och
kontaktadress. Använd `info@altcrz.se` som fungerande arbetsmejl och se till att
webbplatsen är publik på `https://altcrz.se` innan ansökan skickas. Apple kräver
även ett D‑U‑N‑S-nummer för organisationsregistrering.

- [Apple – Program enrollment](https://developer.apple.com/help/account/membership/program-enrollment)
- [Apple – D‑U‑N‑S Number](https://developer.apple.com/help/account/membership/D-U-N-S/)
- [GitHub – Custom domain för Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
