<template>
	<UApp
		:toaster="{
			position: 'top-right',
		}">
		<div style="background-color: black; max-width: 100%; overflow-x: hidden">
			<Banner v-if="$route.path !== '/hochzeit'" />
			<Navbar v-if="$route.path !== '/hochzeit'" />
			<div>
				<NuxtPage />
			</div>
			<Footer />
		</div>
	</UApp>
</template>

<script setup>
useHead({
	htmlAttrs: {
		lang: 'de-DE',
	},
	title: 'DJ Booze',
	meta: [
		{
			name: 'description',
			content:
				'DJ Booze legt in Pirmasens und Umgebung auf. Egal ob Club, Hochzeit oder Event, DJ Booze hat immer die richtigen Tracks dabei.',
		},
	],
});

useSeoMeta({
	title: 'DJ Booze',
	ogTitle: 'DJ Booze',
	description:
		'DJ Booze - Pirmasens und Umgebung. Egal ob Club, Hochzeit oder Event - DJ Booze hat immer die richtigen Tracks dabei.',
	ogDescription:
		'DJ Booze - Pirmasens und Umgebung. Egal ob Club, Hochzeit oder Event - DJ Booze hat immer die richtigen Tracks dabei.',
	ogImage: 'https://www.djbooze.de/_vercel/image?url=/djbooze-dark.png&w=1200&q=75',
});
</script>

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}

/* Toast / Sonner-style surface (Nuxt UI v4 + Reka UI) */
[data-slot='toast'] {
	background-color: var(--toast-bg, #1f2937) !important;
	border: 1px solid var(--toast-border, #dc2626) !important;
	color: var(--toast-text, #ffffff) !important;
	border-radius: 0.375rem !important;
	box-shadow:
		0 10px 15px -3px rgba(0, 0, 0, 0.3),
		0 4px 6px -2px rgba(0, 0, 0, 0.1) !important;
}

[data-slot='toast'] [data-slot='title'] {
	color: #ffffff !important;
	font-weight: 600 !important;
}

[data-slot='toast'] [data-slot='description'] {
	color: #d1d5db !important;
}

[data-slot='toast'] [data-slot='close'] {
	color: #ffffff !important;
}

[data-slot='toast'] [data-slot='close']:hover {
	color: #dc2626 !important;
}
</style>
