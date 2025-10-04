<template>
	<div style="background-color: black; max-width: 100%; overflow-x: hidden">
		<Navbar />
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
</style>
