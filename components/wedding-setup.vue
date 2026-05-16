<template>
	<section
		id="setup"
		class="relative overflow-hidden bg-gradient-to-b from-black via-neutral-900 to-neutral-900 text-white py-16 md:py-32">
		<div class="pointer-events-none absolute inset-0 opacity-10">
			<div class="absolute top-16 left-1/4 h-40 w-40 rounded-full bg-white blur-3xl" />
			<div class="absolute bottom-16 right-1/4 h-56 w-56 rounded-full bg-white blur-3xl" />
		</div>

		<div class="container relative z-10 max-w-6xl mx-auto px-8">
			<div v-motion-slide-visible-top :duration="800" class="text-center mb-12 md:mb-16">
				<Heading text="Meine Ausstattung" />
				<p class="text-xl text-neutral-400 max-w-3xl mt-16 mx-auto leading-relaxed">
					Weiße Premium-Technik, dezente Ambientebeleuchtung und ein Setup, das sich nahtlos in eure
					Location einfügt - ohne aufdringliche Club-Optik.
				</p>
			</div>

			<div
				v-motion-slide-visible-bottom
				:duration="800"
				:delay="150"
				class="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
				<figure
					class="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-neutral-700 shadow-2xl shadow-black/40">
					<LazyNuxtImg
						src="/wedding/wedding-setup-premium.jpg"
						alt="Weißes Hochzeits-DJ-Setup mit Ambientebeleuchtung in einer Weinkeller-Location"
						class="absolute inset-0 h-full w-full object-cover"
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
						loading="eager"
						fetchpriority="high" />
					<figcaption
						class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 md:p-8">
						<p class="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-2">Aktuelles Setup</p>
						<h3 class="text-2xl md:text-3xl font-bold mb-2">Elegant &amp; unaufdringlich</h3>
						<p class="text-neutral-300 text-sm md:text-base leading-relaxed">
							Weiße Lautsprecher, DJ-Pult und Lichttechnik - perfekt für stilvolle Locations wie
							Weinkeller, Schlösser und festliche Säle.
						</p>
					</figcaption>
				</figure>

				<WeddingSetupVideo
					v-for="video in videos"
					:key="video.src"
					:src="video.src"
					:poster="video.poster"
					:title="video.title"
					:description="video.description" />
			</div>

			<ul
				v-motion-slide-visible-bottom
				:duration="800"
				:delay="300"
				class="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				<li
					v-for="highlight in highlights"
					:key="highlight.title"
					class="rounded-xl border border-neutral-700 bg-neutral-800/50 backdrop-blur-sm px-5 py-4">
					<p class="text-white text-sm font-medium mb-1">{{ highlight.title }}</p>
					<p class="text-neutral-400 text-sm leading-relaxed">{{ highlight.text }}</p>
				</li>
			</ul>
		</div>
	</section>
</template>

<script setup>
const videos = [
	{
		src: '/wedding/wedding-setup-overview.mp4',
		poster: '/wedding/wedding-setup-overview-poster.jpg',
		title: 'Gesamtansicht',
		description: 'Komplettes Setup mit PA, DJ-Pult und stimmungsvoller Beleuchtung.',
	},
	{
		src: '/wedding/wedding-setup-lighting.mp4',
		poster: '/wedding/wedding-setup-lighting-poster.jpg',
		title: 'Nebel für besondere Momente',
		description:
			'Dezenter Fog-Effekt für den Eröffnungstanz oder emotionale Höhepunkte – dramatisch im Licht, perfekt auf Fotos und Video.',
	},
];

const highlights = [
	{
		title: 'Weiße Premium-Technik',
		text: 'Dezentes Erscheinungsbild, das auch bei Tageslicht und Fotos überzeugt.',
	},
	{
		title: 'Flexible Beleuchtung',
		text: 'Ambiente-Licht in warmen Tönen - von dezent bis festlich.',
	},
	{
		title: 'Klarer Sound',
		text: 'Professionelle PA für Trauung, Dinner und Tanzfläche.',
	},
	{
		title: 'Alles aus einer Hand',
		text: 'Aufbau, Soundcheck und Abbau - ihr müsst euch um nichts kümmern.',
	},
];
</script>
