# DAMM-B Registration Website

**DigiTech Analyst Manuel Mentorship BootCamp (DAMM-B)**

WhatsApp coordinator: **+233 550 564 384**

## Upload
This folder is ready for static hosting such as Netlify or GitHub Pages.

## IMPORTANT: Formspree setup
1. Create a Formspree form.
2. Copy its form endpoint, for example `https://formspree.io/f/xxxxxxxx`.
3. Open `index.html`.
4. Find:
   `https://formspree.io/f/YOUR_FORMSPREE_ID`
5. Replace only `YOUR_FORMSPREE_ID` with your real Formspree form ID.
6. Upload the whole folder.

## WhatsApp
The site already has the DAMM-B coordinator WhatsApp number:
`233550564384`

After a successful backup submission, the participant gets a button that opens WhatsApp with the registration details pre-filled.

For direct WhatsApp notification without participant action, connect your preferred WhatsApp/Formspree notification service separately. Do not put API secrets in the website files.

## Test before launch
- Open the site on your phone.
- Submit a test registration.
- Confirm the Formspree submission arrives.
- Confirm the WhatsApp button opens the correct number.
- Test on mobile data.

## Files
- `index.html` — main site and form
- `style.css` — mobile-first design
- `script.js` — form + WhatsApp workflow
- `manifest.webmanifest` — PWA configuration
- `sw.js` — offline shell
- `assets/icon.svg` — app icon
