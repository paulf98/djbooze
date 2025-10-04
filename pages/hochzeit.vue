<template>
	<div>
		<WeddingNavbar />
		<main>
			<WeddingHero />
			<WeddingAbout />
			<WeddingServices />
			<WeddingGallery />
			<WeddingContact />
		</main>
	</div>
</template>

<script setup>
useHead({
	title: 'Hochzeits-DJ | DJ Booze - Professionelle Musik für Ihren besonderen Tag',
	meta: [
		{
			name: 'description',
			content:
				'Professioneller Hochzeits-DJ in Pirmasens und Umgebung. Hochwertige Ausstattung, maßgeschneiderte Musik und unvergessliche Momente für Ihre Traumhochzeit.',
		},
	],
});

useSeoMeta({
	title: 'Hochzeits-DJ | DJ Booze - Professionelle Musik für Ihren besonderen Tag',
	ogTitle: 'Hochzeits-DJ | DJ Booze',
	description:
		'Professioneller Hochzeits-DJ in Pirmasens und Umgebung. Hochwertige Ausstattung, maßgeschneiderte Musik und unvergessliche Momente für Ihre Traumhochzeit.',
	ogDescription:
		'Professioneller Hochzeits-DJ in Pirmasens und Umgebung. Hochwertige Ausstattung, maßgeschneiderte Musik und unvergessliche Momente für Ihre Traumhochzeit.',
	ogImage: 'https://www.djbooze.de/_vercel/image?url=/djbooze-dark.png&w=1536&q=100',
});
</script>
