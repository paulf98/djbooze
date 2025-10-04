// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	modules: [
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
		'@samk-dev/nuxt-vcalendar',
		'@nuxt/scripts',
		'@nuxtjs/seo',
		'@vueuse/motion/nuxt',
	],

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
		siteKey: process.env.TURNSTILE_SITE_KEY,
	},

	runtimeConfig: {
		turnstile: {
			secretKey: process.env.TURNSTILE_SECRET_KEY,
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
		defaultLocale: 'de-DE', // not needed if you have @nuxtjs/i18n installed
		indexable: true,
	},
});
