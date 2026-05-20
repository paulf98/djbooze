<template>
	<section class="py-16 md:py-32 px-4 md:px-8 bg-black text-white" id="about">
		<div
			class="container flex flex-col items-center md:flex-row-reverse justify-between gap-16 max-w-5xl mx-auto p-8">
			<div class="flex flex-col items-center gap-16 max-w-5xl mx-auto mb-8 md:mb-16">
				<Heading text="Dein Event" v-motion-slide-visible-bottom :duration="800" />
			</div>
		</div>
		<p class="text-center mb-4 font-bold" v-motion-slide-visible-bottom :duration="800">
			🎧 Dein Event, Dein Sound - mit Deinem mobilen DJ! 🎉
		</p>
		<p
			class="text-center prose prose-invert text-white mx-auto"
			v-motion-slide-visible-bottom
			:duration="800">
			Egal ob Hochzeit, Geburtstag, Jubiläum oder private Feier - ich bringe den passenden
			Soundtrack für Deine unvergesslichen Momente. Mit professionellem Equipment, einem flexiblen
			Musikrepertoire und Leidenschaft sorge ich dafür, dass Deine Gäste tanzen und Dein Event in
			Erinnerung bleibt.
		</p>
		<h3
			class="text-center text-2xl mb-4 font-bold mt-8"
			v-motion-slide-visible-bottom
			:duration="800">
			💡 So läuft's ab:
		</h3>
		<div
			class="max-w-screen-lg mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent py-8 md:py-16">
			<TimelineItem :step="1">
				<Card heading="📨 Kontaktaufnahme">
					<div>
						<p class="prose prose-invert text-white mb-4">
							Nimm Kontakt mit mir auf und wir besprechen Deine Wünsche und Vorstellungen. Sich
							kennenlernen und Fragen klären ist mir wichtig.
						</p>
						<NuxtLink to="/#contact">
							<Button>Zum Kontaktformular</Button>
						</NuxtLink>
					</div>
				</Card>
			</TimelineItem>
			<TimelineItem :step="2">
				<Card heading="📦 Angebot">
					It's a match? Dann erstelle ich Dir ein individuelles Angebot, das perfekt auf Deine
					Veranstaltung zugeschnitten ist.
				</Card>
			</TimelineItem>
			<TimelineItem :step="3">
				<Card heading="💌 Entscheidung">
					Wenn Dir mein Angebot zusagt, bestätigst Du es und wir besprechen alle weiteren Details im
					Vorgespräch.
				</Card>
			</TimelineItem>
			<TimelineItem :step="4">
				<Card heading="🎙️ Vorgespräch">
					<p>
						Insbesondere bei Hochzeiten ist ein Vorgespräch wichtig, um alle Details zu klären und
						den Ablauf zu besprechen.
					</p>
					<p class="mt-2">
						Besondere Musikwünsche, Moderationen und Abläufe werden hier besprochen. Erfordertes
						technisches Equipment, Auf- und Abbau und Besonderheiten der Location sollten hier
						ebenfalls geklärt werden.
					</p>
				</Card>
			</TimelineItem>
			<TimelineItem :step="5">
				<Card heading="🎉 Party">
					Alles geklärt? Dann steht Deiner Party nichts mehr im Wege! Lass uns gemeinsam feiern und
					Dein Event unvergesslich machen!
				</Card>
			</TimelineItem>
		</div>
	</section>
</template>
