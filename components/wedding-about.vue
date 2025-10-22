<template>
	<section class="py-16 md:py-32 bg-neutral-900 text-white" id="about">
		<div
			class="container flex flex-col items-center md:flex-row-reverse justify-between gap-16 max-w-5xl mx-auto p-8">
			<div class="flex-1">
				<div
					v-motion-slide-visible-right
					:duration="800"
					class="flex flex-col items-center gap-16 max-w-5xl mx-auto mb-8 md:mb-16">
					<Heading text="Euer Tag" />
				</div>
				<div class="text-justify flex flex-col gap-4" v-motion-slide-visible-right :duration="800">
					<p class="text-2xl font-bold">Ein besonderer Tag verdient besondere Musik 👰🤵</p>
					<p>
						Als erfahrener Hochzeits-DJ verstehe ich, dass eure Hochzeit ein einzigartiger Moment
						ist, der perfekt organisiert werden muss. Mit meiner Erfahrung in der Eventbranche
						bringe ich nicht nur die richtige Musik, sondern auch das nötige Feingefühl für
						unvergessliche Momente mit.
					</p>
					<p>
						Meine Leidenschaft ist Musik und die perfekte Atmosphäre. Von der romantischen Trauung
						bis zur ausgelassenen Tanzparty – ich sorge dafür, dass jeder Moment eurer Hochzeit mit
						der passenden Musik untermalt wird. Dabei berücksichtige ich eure persönlichen Wünsche
						und schaffe eine einzigartige musikalische Reise durch euren besonderen Tag.
					</p>
				</div>
			</div>
			<div class="flex-1">
				<LazyNuxtImg
					v-motion-slide-visible-left
					:duration="800"
					class="rounded-2xl w-full h-auto max-w-48 m-auto"
					fit="contain"
					src="/Variante_3_Transparent-Mit_Logo.png"
					alt="DJ Booze - Ihr Hochzeits-DJ"
					loading="lazy" />
				<div class="bg-neutral-800 p-6 rounded-lg border border-neutral-700 mt-6">
					<h4 class="text-xl font-semibold mb-4">Warum bin ich der richtige DJ?</h4>
					<ul class="space-y-2 text-neutral-300">
						<li class="flex items-center gap-2">
							<span class="text-green-400">✓</span>
							Professionelle DJ-Technik und hochwertige Ausstattung
						</li>
						<li class="flex items-center gap-2">
							<span class="text-green-400">✓</span>
							Individuelle Beratung und maßgeschneiderte Playlists
						</li>
						<li class="flex items-center gap-2">
							<span class="text-green-400">✓</span>
							Gepflegter Auftritt passend zu eurem Stil
						</li>
						<li class="flex items-center gap-2">
							<span class="text-green-400">✓</span>
							Zuverlässigkeit und professioneller Service
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>
