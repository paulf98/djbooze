// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
	// Nuxt 4 Standard: Vue-App unter ./app (Alias ~ und @ zeigen hierher)
	srcDir: 'app',

	devtools: { enabled: process.env.NODE_ENV === 'development' },

	modules: [
		'nuxt-security',
		'@nuxt/ui',
		'@nuxt/image',
		'@nuxtjs/turnstile',
		'@nuxt/scripts',
		'@nuxtjs/seo',
		'@vueuse/motion/nuxt',
	],

	vite: {
		optimizeDeps: {
			include: ['@vue/devtools-core', '@vue/devtools-kit', 'date-fns', 'date-fns/locale', 'zod'],
		},
	},

	css: ['~/assets/css/main.css'],

	image: {
		// Vercel: native image optimizer. Local: serve /public files directly (avoids IPX/sharp 500s).
		provider: process.env.VERCEL ? 'vercel' : 'none',
		format: ['webp'],
	},

	colorMode: {
		preference: 'dark',
	},

	turnstile: {
		siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY || '',
	},

	runtimeConfig: {
		mail: {
			message: {
				to: process.env.EMAIL_APP_EMAIL,
				/** Must match SMTP auth; visitor address goes in replyTo from the form body. */
				from: process.env.EMAIL_APP_EMAIL,
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
		turnstile: {
			secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY || '',
		},
		public: {
			/** Umami (https://umami.is/) — set NUXT_PUBLIC_UMAMI_WEBSITE_ID to enable */
			umami: {
				websiteId: process.env.NUXT_PUBLIC_UMAMI_WEBSITE_ID || '',
				/** Collector base URL; default matches Umami Cloud script origin. Override via NUXT_PUBLIC_UMAMI_HOST_URL (add origin to CSP connect-src if needed). */
				hostUrl: process.env.NUXT_PUBLIC_UMAMI_HOST_URL || 'https://cloud.umami.is',
			},
		},
	},

	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
	},

	compatibilityDate: '2026-01-01',
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
			// SoundCloud (and similar embeds) do not send COEP headers — credentialless blocks them
			crossOriginEmbedderPolicy: 'unsafe-none',
			contentSecurityPolicy: {
				'img-src': ["'self'", 'data:', 'https:', 'blob:'],
				'script-src': [
					"'self'",
					"'nonce-{{nonce}}'",
					"'strict-dynamic'",
					"'unsafe-eval'",
					'https://challenges.cloudflare.com',
				],
				'connect-src': ["'self'", 'https://challenges.cloudflare.com', 'https://cloud.umami.is'],
				'frame-src': [
					"'self'",
					'https://w.soundcloud.com',
					'https://soundcloud.com',
					'https://challenges.cloudflare.com',
				],
			},
			permissionsPolicy: {
				fullscreen: ['self', 'https://w.soundcloud.com'],
			},
		},
	},
});
