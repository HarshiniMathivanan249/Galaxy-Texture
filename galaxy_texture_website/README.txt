GALAXY TEXTURE UMBRELLA MANUFACTURER - RESPONSIVE STATIC WEBSITE
================================================================

Pages
-----
index.html             Home
about.html             About Us
manufacturing.html     Umbrella Manufacturing
contact.html           Contact Us / Quote form

Business details used
---------------------
Galaxy Texture Umbrella Manufacturer
69-A/1, S.S. Colony 4th St, Thomas Colony,
Madurai, Tamil Nadu 625010
Phone: 081245 20173
Hours: Monday-Saturday 10:00 AM-8:00 PM, Sunday Closed

Project structure
-----------------
assets/css/tailwind.css    Locally compiled utility CSS (no Tailwind CDN dependency)
assets/css/style.css       Responsive layout, header, mobile navigation and page fixes
assets/js/main.js          Mobile navigation, form demo interactions and upload feedback
assets/images/             Local umbrella imagery, logo and map artwork
reference/                 Original Stitch screenshots for visual reference

Responsive/frontend improvements in this version
------------------------------------------------
1. Rebuilt the header so desktop navigation never squeezes into phone/tablet widths.
2. Removed the unnecessary user/profile icon from the header.
3. Added a clean call button + hamburger menu for phone/tablet layouts.
4. Rebuilt the mobile drawer navigation with proper page links and quote/call actions.
5. Replaced Material Symbols icon-font text with embedded SVG icons so words such as
   "menu", "call" and "person" cannot appear when an icon font fails to load.
6. Added a compact mobile bottom action bar with safe spacing so it does not cover page content.
7. Improved mobile typography, spacing, hero badges, cards and CTA wrapping.
8. Reworked the Manufacturing customizer for phones:
   - size buttons become a readable 2-column grid
   - base/pole options stack vertically
   - quote fields stack on small screens
   - customizer CTAs no longer overflow
9. Added intentional horizontal scrolling for the wide specification table with a mobile hint.
10. Added footer wrapping fixes for smaller screens.
11. Tailwind is compiled locally into assets/css/tailwind.css, so the layout no longer depends
    on cdn.tailwindcss.com at runtime.
12. All internal page links and anchor links have been checked for valid targets.

Important notes
---------------
1. The layouts remain based on the supplied Google Stitch design and imagery.
2. Google Fonts are requested online, but system font fallbacks are included if they are unavailable.
3. The enquiry forms are FRONT-END DEMOS ONLY in this stage. They do not send email yet.
   SMTP/server-side submission can be added after frontend approval.
4. Review any technical product specifications/claims in the manufacturing page with the
   business owner before publishing them as final product specifications.

Preview
-------
Open index.html directly, or run a small local server from this folder:

python -m http.server 8080

Then open:
http://localhost:8080/
