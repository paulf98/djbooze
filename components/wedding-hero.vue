<template>
	<section
		class="w-full bg-gradient-to-br from-black via-neutral-900 to-black text-white pt-32 pb-16 relative overflow-hidden">
		<!-- Background decoration -->
		<div class="absolute inset-0 opacity-10">
			<div class="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
			<div class="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
		</div>

		<div
			class="container flex flex-col items-center justify-center gap-8 max-w-5xl mx-auto px-8 relative z-10">
			<div
				v-motion-slide-visible-top
				:duration="800"
				class="text-center flex flex-col items-center gap-8">
				<h1 class="text-4xl md:text-6xl font-bold tracking-tight">
					Eure
					<span
						class="text-gradient bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent"
						>Traumhochzeit</span
					>
				</h1>
				<h2 class="text-xl md:text-3xl font-thin tracking-wider text-neutral-300">
					Professioneller Hochzeits-DJ in Pirmasens und Umgebung
				</h2>
				<p class="text-lg md:text-xl text-neutral-400 max-w-3xl leading-relaxed">
					Hochwertige Ausstattung, maßgeschneiderte Musik und unvergessliche Momente für Euren
					besonderen Tag. Eure Feier mit professionellem DJ.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 mt-4">
					<NuxtLink to="#contact">
						<Button class="bg-white text-black hover:bg-neutral-200 transition-colors">
							Kostenloses Beratungsgespräch
						</Button>
					</NuxtLink>
					<NuxtLink to="#services">
						<Button
							variant="outline"
							class="border-white text-white hover:bg-white hover:text-black">
							Leistungen ansehen
						</Button>
					</NuxtLink>
				</div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
				<div
					v-motion-slide-visible-left
					:duration="800"
					:delay="600"
					class="text-center p-6 bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700">
					<div class="text-3xl mb-3">🎵</div>
					<h3 class="text-xl font-semibold mb-2">Maßgeschneiderte Musik</h3>
					<p class="text-neutral-400">Individuelle Playlists für jeden Moment eurer Hochzeit</p>
				</div>

				<div
					v-motion-slide-visible-top
					:duration="800"
					:delay="700"
					class="text-center p-6 bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700">
					<div class="text-3xl mb-3">🔊</div>
					<h3 class="text-xl font-semibold mb-2">Professionelle Technik</h3>
					<p class="text-neutral-400">Hochwertige Ausstattung für perfekten Sound</p>
				</div>

				<div
					v-motion-slide-visible-right
					:duration="800"
					:delay="800"
					class="text-center p-6 bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700">
					<div class="text-3xl mb-3">💎</div>
					<h3 class="text-xl font-semibold mb-2">Premium Service</h3>
					<p class="text-neutral-400">Unvergessliche Momente für euch und eure Gäste</p>
				</div>
			</div>
		</div>
	</section>
</template>
