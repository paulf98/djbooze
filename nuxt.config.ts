// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: process.env.NODE_ENV === 'development' },

	modules: [
		'nuxt-security',
		'@nuxt/ui',
		'@nuxt/image',
		'@nuxtjs/turnstile',
		[
			'nuxt-mail',
			{
				message: {
					to: process.env.EMAIL_APP_EMAIL,
				},
				smtp: {
					host: process.env.EMAIL_APP_HOST,
					port: 587,
					auth: {
						user: process.env.EMAIL_APP_EMAIL,
						pass: process.env.EMAIL_APP_PASSWORD,
					},
				},
			},
		],
		'@nuxt/scripts',
		'@nuxtjs/seo',
		'@vueuse/motion/nuxt',
	],

	image: {
		// Vercel: native image optimizer. Local: serve /public files directly (avoids IPX/sharp 500s).
		provider: process.env.VERCEL ? 'vercel' : 'none',
		format: ['webp'],
	},

	ui: {
		// @ts-expect-error Somehow the typing for this is wrong
		notifications: {
			// Show toasts at the top right of the screen
			position: 'top-0 bottom-auto',
			class: 'bg-gray-800 border-red-600 text-white',
		},
	},

	colorMode: {
		preference: 'dark',
	},

	turnstile: {
		siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY || '',
	},

	runtimeConfig: {
		turnstile: {
			secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY || '',
		},
	},

	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
	},

	compatibilityDate: '2024-07-06',
	site: {
		url: 'https://www.djbooze.de',
		name: 'DJ Booze',
		description:
			'DJ Booze - Pirmasens und Umgebung. Egal ob Club, Hochzeit oder Event - DJ Booze hat immer die richtigen Tracks dabei.',
		defaultLocale: 'de-DE',
		indexable: true,
	},

	// SEO Configuration
	seo: {
		redirectToCanonicalSiteUrl: true,
	},

	// Sitemap Configuration (part of @nuxtjs/seo)
	sitemap: {
		enabled: true,
	},

	// Robots.txt Configuration (part of @nuxtjs/seo)
	robots: {
		enabled: true,
		disallow: ['/admin', '/private'],
	},

	// Strict CSP with nonces for Nuxt inline scripts; allowlisted third-party scripts
	security: {
		nonce: true,
		headers: {
			contentSecurityPolicy: {
				'img-src': ["'self'", 'data:', 'https:', 'blob:'],
				'script-src': [
					"'self'",
					"'nonce-{{nonce}}'",
					"'strict-dynamic'",
					"'unsafe-eval'",
					'https://challenges.cloudflare.com',
				],
				'connect-src': ["'self'", 'https://challenges.cloudflare.com'],
				'frame-src': ["'self'", 'https://w.soundcloud.com', 'https://challenges.cloudflare.com'],
			},
		},
	},
});
