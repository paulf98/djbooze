// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'@nuxt/ui',
		'@nuxt/image',
		'@nuxtjs/turnstile',
		[
			'@nuxtjs/google-fonts',
			{
				families: {
					Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900],
				},
				display: 'swap',
			},
		],
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
	],
	ui: {
		// @ts-expect-error Somehow the typing for this is wrong
		notifications: {
			// Show toasts at the top right of the screen
			position: 'top-0 bottom-auto',
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
});
