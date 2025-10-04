# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

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

# PostHog Analytics Configuration
POSTHOG_KEY=your_posthog_project_key_here
POSTHOG_HOST=https://app.posthog.com  # Optional, defaults to PostHog cloud
```

### Setting up Google Calendar API

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Calendar API
4. Create credentials (API Key)
5. Get your Calendar ID from Google Calendar settings
6. Add the credentials to your `.env` file

### Setting up PostHog Analytics

1. Go to [PostHog](https://app.posthog.com/) and create an account
2. Create a new project or use an existing one
3. Go to Project Settings → API Keys
4. Copy your Project API Key
5. Add the key to your `.env` file as `POSTHOG_KEY`

The PostHog integration is configured with cookieless analytics for privacy compliance:

- No cookies are stored
- Uses memory-based session management
- Respects Do Not Track (DNT) headers
- Browser fingerprinting for user identification
- Automatic page view tracking

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
