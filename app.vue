<template>
	<div style="background-color: black; max-width: 100%; overflow-x: hidden">
		<Navbar v-if="$route.path !== '/hochzeit'" />
		<div>
			<NuxtPage />
		</div>
		<UNotifications />
		<Footer />
	</div>
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
	ogImage: 'https://www.djbooze.de/_vercel/image?url=/djbooze-dark.png&w=1536&q=100',
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

/* Custom toast styles to match DJ Booze brand */
:root {
	--toast-bg: #1f2937;
	--toast-border: #dc2626;
	--toast-text: #ffffff;
	--toast-success-bg: #1f2937;
	--toast-success-border: #dc2626;
	--toast-error-bg: #1f2937;
	--toast-error-border: #b91c1c;
}

/* Override Nuxt UI toast styles */
[data-headlessui-state] {
	background-color: var(--toast-bg) !important;
	border: 1px solid var(--toast-border) !important;
	color: var(--toast-text) !important;
	border-radius: 0.375rem !important;
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1) !important;
}

/* Success toast styling */
[data-headlessui-state][data-color='red'] {
	background-color: var(--toast-success-bg) !important;
	border-color: var(--toast-success-border) !important;
}

/* Error toast styling */
[data-headlessui-state][data-color='red'] {
	background-color: var(--toast-error-bg) !important;
	border-color: var(--toast-error-border) !important;
}

/* Toast title styling */
[data-headlessui-state] h4 {
	color: #ffffff !important;
	font-weight: 600 !important;
}

/* Toast description styling */
[data-headlessui-state] p {
	color: #d1d5db !important;
}

/* Toast close button styling */
[data-headlessui-state] button {
	color: #ffffff !important;
}

[data-headlessui-state] button:hover {
	color: #dc2626 !important;
}
</style>
