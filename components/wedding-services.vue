<template>
	<section class="py-16 md:py-32 bg-black text-white" id="services">
		<div class="container max-w-6xl mx-auto px-8">
			<div v-motion-slide-visible-top :duration="800" class="text-center mb-16">
				<Heading text="Mein Service" class="mb-8" />
				<p class="text-xl text-neutral-400 max-w-3xl mx-auto">
					Von der romantischen Trauung bis zur ausgelassenen Tanzparty – ich sorge für die perfekte
					musikalische Untermalung eures besonderen Tages.
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<!-- Service 1: Musikberatung -->
				<div
					v-motion-slide-visible-left
					:duration="800"
					:delay="100"
					class="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-xl border border-neutral-700 hover:border-neutral-600 transition-all duration-300 group">
					<div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
						🎵
					</div>
					<h3 class="text-2xl font-bold mb-4">Individuelle Musikberatung</h3>
					<p class="text-neutral-400 mb-6 leading-relaxed">
						Gemeinsam erstellen wir maßgeschneiderte Playlists für jeden Moment eurer Hochzeit. Von
						der romantischen Trauung bis zur wilden Tanzparty.
					</p>
					<ul class="space-y-2 text-sm text-neutral-300">
						<li class="flex items-center gap-2">
							<span class="text-green-400">•</span>
							Persönliches Beratungsgespräch
						</li>
						<li class="flex items-center gap-2">
							<span class="text-green-400">•</span>
							Individuelle Playlist
						</li>
						<li class="flex items-center gap-2">
							<span class="text-green-400">•</span>
							Wunschliste-Management
						</li>
					</ul>
				</div>

				<!-- Service 2: Technik -->
				<div
					v-motion-slide-visible-top
					:duration="800"
					:delay="200"
					class="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-xl border border-neutral-700 hover:border-neutral-600 transition-all duration-300 group">
					<div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
						🔊
					</div>
					<h3 class="text-2xl font-bold mb-4">Professionelle Technik</h3>
					<p class="text-neutral-400 mb-6 leading-relaxed">
						Hochwertige DJ-Ausstattung für perfekten Sound in jedem Raum. Von intimen Feiern bis zu
						großen Hochzeitspartys.
					</p>
					<ul class="space-y-2 text-sm text-neutral-300">
						<li class="flex items-center gap-2">
							<span class="text-green-400">•</span>
							Professionelle DJ-Anlage
						</li>
						<li class="flex items-center gap-2">
							<span class="text-green-400">•</span>
							Hochwertige Lautsprecher & Mikrofone
						</li>
						<li class="flex items-center gap-2">
							<span class="text-green-400">•</span>
							LED-Beleuchtung mit Effekten und Steuerung
						</li>
					</ul>
				</div>

				<!-- Service 3: Moderation -->
				<div
					v-motion-slide-visible-right
					:duration="800"
					:delay="300"
					class="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-xl border border-neutral-700 hover:border-neutral-600 transition-all duration-300 group">
					<div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
						🎤
					</div>
					<h3 class="text-2xl font-bold mb-4">Moderation</h3>
					<p class="text-neutral-400 mb-6 leading-relaxed">
						Diskrete und charmante Moderation für einen reibungslosen Ablauf eurer Feier. Ansagen
						und Programmführung.
					</p>
					<ul class="space-y-2 text-sm text-neutral-300">
						<li class="flex items-center gap-2">
							<span class="text-green-400">•</span>
							Unterstützung der Trauzeugen
						</li>
						<li class="flex items-center gap-2">
							<span class="text-green-400">•</span>
							Diskrete Ansagen
						</li>
						<li class="flex items-center gap-2">
							<span class="text-green-400">•</span>
							Programmführung
						</li>
					</ul>
				</div>

				<!-- Service 4: Aufbau & Ablauf -->
				<div
					v-motion-slide-visible-left
					:duration="800"
					:delay="400"
					class="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-xl border border-neutral-700 hover:border-neutral-600 transition-all duration-300 group">
					<div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
						⚙️
					</div>
					<h3 class="text-2xl font-bold mb-4">Aufbau & Ablauf</h3>
					<p class="text-neutral-400 mb-6 leading-relaxed">
						Sorgfältige Planung und professionelle Umsetzung. Ich kümmere mich um alle technischen
						Details, damit Ihr euch entspannt auf eure Hochzeit freuen können.
					</p>
					<ul class="space-y-2 text-sm text-neutral-300">
						<li class="flex items-center gap-2">
							<span class="text-green-400">•</span>
							Frühzeitiger Aufbau
						</li>
						<li class="flex items-center gap-2">
							<span class="text-green-400">•</span>
							Soundcheck vor Beginn
						</li>
						<li class="flex items-center gap-2">
							<span class="text-green-400">•</span>
							Kompletter Auf- und Abbau inklusive
						</li>
					</ul>
				</div>

				<!-- Service 5: Flexibilität -->
				<div
					v-motion-slide-visible-right
					:duration="800"
					:delay="600"
					class="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-xl border border-neutral-700 hover:border-neutral-600 transition-all duration-300 group">
					<div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
						🎯
					</div>
					<h3 class="text-2xl font-bold mb-4">Maximale Flexibilität</h3>
					<p class="text-neutral-400 mb-6 leading-relaxed">
						Anpassung an eure Wünsche und spontane Änderungen. Ich reagiere flexibel auf die
						Stimmung der Gäste und sorge für den perfekten Abend.
					</p>
					<ul class="space-y-2 text-sm text-neutral-300">
						<li class="flex items-center gap-2">
							<span class="text-green-400">•</span>
							Spontane Wunschmusik
						</li>
						<li class="flex items-center gap-2">
							<span class="text-green-400">•</span>
							Anpassung an die Stimmung
						</li>
						<li class="flex items-center gap-2">
							<span class="text-green-400">•</span>
							Längere Spielzeiten möglich
						</li>
					</ul>
				</div>

				<!-- Service 6: Service & Organisation -->
				<div
					v-motion-slide-visible-left
					:duration="800"
					:delay="700"
					class="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-xl border border-neutral-700 hover:border-neutral-600 transition-all duration-300 group">
					<div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
						💼
					</div>
					<h3 class="text-2xl font-bold mb-4">Service & Organisation</h3>
					<p class="text-neutral-400 mb-6 leading-relaxed">
						Ich bin für euch da, um alles so organisiert wie möglich zu machen, sodass ihr euch
						entspannt auf eure Hochzeit freuen könnt.
					</p>
					<ul class="space-y-2 text-sm text-neutral-300">
						<li class="flex items-center gap-2">
							<span class="text-green-400">•</span>
							Weitere Ideen für die Feier
						</li>
						<li class="flex items-center gap-2">
							<span class="text-green-400">•</span>
							Absprachen mit Trauzeugen
						</li>
						<li class="flex items-center gap-2">
							<span class="text-green-400">•</span>
							Absprachen mit Location
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>
