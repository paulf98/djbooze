# DJ Booze (Nuxt 4)

Vue-App unter [`app/`](./app/), Server unter [`server/`](./server/), gemeinsame Typen unter [`shared/types/`](./shared/types/) (Import-Alias `#shared/...`). Siehe [Nuxt 4 – Verzeichnisstruktur](https://nuxt.com/docs/guide/directory-structure).

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# Google Calendar API Configuration
GOOGLE_CALENDAR_ID=your_calendar_id_here
GOOGLE_CALENDAR_API_KEY=your_api_key_here

# Kontaktformular (nuxt-mail + SMTP)
EMAIL_APP_EMAIL=booking@example.com
EMAIL_APP_HOST=smtp.example.com
EMAIL_APP_PASSWORD=your_smtp_password

# Cloudflare Turnstile (Pflicht für POST /mail/send)
NUXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key
NUXT_TURNSTILE_SECRET_KEY=your_secret_key
```

Die Absender-Adresse im Browser ist nur noch `Reply-To`; der SMTP-Header `From` entspricht `EMAIL_APP_EMAIL`, damit gängige Provider den Versand nicht ablehnen.

### Setting up Google Calendar API

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Calendar API
4. Create credentials (API Key)
5. Get your Calendar ID from Google Calendar settings
6. Add the credentials to your `.env` file

### Umami Analytics (optional)

Set a website ID from [Umami Cloud](https://cloud.umami.is/) (or self-hosted) to load the tracker globally via `@nuxt/scripts` (`useScriptUmamiAnalytics`). If the variable is unset, no script is injected.

```bash
NUXT_PUBLIC_UMAMI_WEBSITE_ID=your-website-id
# Optional: override collector base URL (default: https://cloud.umami.is — same origin as the bundled Umami Cloud script)
# NUXT_PUBLIC_UMAMI_HOST_URL=https://analytics.example.com
```

If you point `NUXT_PUBLIC_UMAMI_HOST_URL` at another origin, add that origin to `security.headers.contentSecurityPolicy['connect-src']` in `nuxt.config.ts` so pageviews can be sent.

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
