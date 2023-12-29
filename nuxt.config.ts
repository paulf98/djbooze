// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'@nuxt/ui',
		[
			'@nuxtjs/google-fonts',
			{
				families: {
					Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900],
				},
				display: 'swap',
			},
		],
	],
	colorMode: {
		preference: 'dark',
	},
});
