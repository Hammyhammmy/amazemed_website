---
name: AmazeMed Website
overview: Create a new static HTML website for AmazeMed, a dev shop where developers are doctors. The site will be GitHub Pages-ready with a homepage, about page, services page, and contact page, following the structure and styling approach of the example site.
todos:
  - id: create-structure
    content: "Create base file structure: index.html, home.html, about.html, services.html, contact.html, 404.html"
    status: pending
  - id: create-styles
    content: Create styles.css with AmazeMed branding, adapting from example site
    status: pending
  - id: create-nav
    content: Create nav.js with AmazeMed navigation menu (Home, About, Services, Contact)
    status: pending
  - id: build-homepage
    content: Build home.html with hero section, company intro, and services/capabilities showcase sections (future-facing)
    status: pending
    dependencies:
      - create-styles
      - create-nav
  - id: build-about
    content: Build about.html explaining physician-developer model, company mission, and co-founders section (Hanmu Yan and Dr. Ali Okhowat)
    status: pending
    dependencies:
      - create-styles
      - create-nav
  - id: build-services
    content: Build services.html with dev shop services and capabilities sections (future-facing, no specific products)
    status: pending
    dependencies:
      - create-styles
      - create-nav
  - id: build-contact
    content: Build contact.html with email contact information
    status: pending
    dependencies:
      - create-styles
      - create-nav
  - id: create-404
    content: Create 404.html with routing logic for clean URLs
    status: pending
  - id: create-readme
    content: Create README.md with GitHub Pages setup instructions
    status: pending
  - id: create-gitignore
    content: Create .gitignore file for Python cache and backup files
    status: pending
---

# AmazeMed Website for GitHub Pages

Create a new static HTML website for AmazeMed, a dev shop company where developers are also physicians. The site will be built using the same structure and styling approach as the example site, adapted for AmazeMed's unique positioning.

## Structure

The website will consist of:

- **Homepage** (`home.html`) - Hero section introducing AmazeMed, highlighting the unique combination of developers who are doctors, and showcasing services/capabilities
- **About Page** (`about.html`) - Company story, mission, and the physician-developer team approach
- **Services Page** (`services.html`) - Dev shop services offered and development capabilities
- **Contact Page** (`contact.html`) - Contact form and email information
- **404 Page** (`404.html`) - Custom 404 with routing logic for clean URLs
- **Index** (`index.html`) - Redirects to homepage

## Files to Create

1. **`home.html`** - Main landing page with hero section, company intro, and featured services/capabilities
2. **`about.html`** - About page explaining the physician-developer model and company mission
3. **`services.html`** - Services page listing dev shop capabilities and development approach
4. **`contact.html`** - Contact page with email information
5. **`index.html`** - Simple redirect to `home.html`
6. **`404.html`** - Custom 404 page with routing logic (adapted from example)
7. **`styles.css`** - Shared stylesheet (adapted from example with AmazeMed branding)
8. **`nav.js`** - Shared navigation component (adapted for AmazeMed pages)
9. **`README.md`** - Setup instructions for GitHub Pages
10. **`.gitignore`** - Git ignore file for Python cache, backups, etc.

## Design Approach

- Adapt the example site's clean, modern design with medical/tech aesthetic
- Use a color scheme that reflects both medical and tech industries
- Maintain responsive design with mobile navigation
- Keep the same component structure (hero sections, product cards, benefit lists, CTA sections)
- Update all branding from "TranslationalAI" to "AmazeMed"
- Emphasize the unique value proposition: developers who are also physicians

## Key Content Areas

### Homepage

- Hero: "AmazeMed - Dev Shop by Developers Who Are Doctors"
- Intro: Company description highlighting the physician-developer advantage
- Featured services section (future-facing, no specific products)
- Value propositions (why physician-developers matter)
- Call-to-action

### About Page

- Mission statement
- The physician-developer advantage
- Company values
- Co-founders section:
- **Hanmu Yan, MD FRCSC** - Practicing Canadian urologist, surgeon, and app builder. Works on AI trust and hallucination-free outputs for medicine. Focus on building reliable, clinically-safe software systems.
- **Dr. Ali Okhowat** - Physician and bioethicist, Co-Lead of WHO Innovation Hub. Previously Health Emergency Officer at WHO. Graduate of University of Toronto Medical School, McGill Family Medicine Residency, Harvard Business School alumnus, currently completing PhD in Bioethics at University of Montreal.

### Services Page

- Dev shop services (custom development, consulting, etc.)
- Development capabilities and expertise areas
- Development approach
- Technology stack (if applicable)

### Contact Page

- Email contact information
- Simple contact form or direct email link
- Response time expectations

## Technical Implementation

- All HTML files will be self-contained with shared CSS and JS
- Navigation will be injected via `nav.js` (same pattern as example)
- Responsive design with mobile menu toggle
- GitHub Pages routing via `404.html`
- Clean URL support (e.g., `/about`, `/services`, `/contact`)

## Co-Founders Information

The About page will feature both co-founders:

1. **Hanmu Yan, MD FRCSC**

- Practicing Canadian urologist and surgeon
- App builder and reliability engineering for LLMs
- Focus on building hallucination-free AI tools for medicine
- Built tools: Partner in Practice (clinical decision support), LightScribe (AI scribe), ChartPrepper (chart prep assistant)
- Philosophy: Surgery and software engineering are one mission - clinical work shows where AI fails, coding fixes it

2. **Dr. Ali Okhowat**

- Physician and bioethicist
- Co-Lead of World Health Organization (WHO) Innovation Hub (Geneva)
- Previously Health Emergency Officer at WHO, worked with ICRC
- Education: University of Toronto Medical School, McGill Family Medicine Residency, Harvard Business School, currently completing PhD in Bioethics at University of Montreal

## Customization Points

The following will need to be customized:

- Specific services/capabilities to highlight (placeholders will be added, future-facing)
- Contact email address
- Any specific branding colors (defaults to medical/tech theme)
- Company tagline/mission details