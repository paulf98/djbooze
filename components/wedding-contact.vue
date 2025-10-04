<template>
	<section class="py-16 md:py-32 bg-black text-white" id="contact">
		<div class="container max-w-6xl mx-auto px-8">
			<div v-motion-slide-visible-top :duration="800" class="text-center mb-16">
				<Heading text="Kontakt" />
				<p class="text-xl text-neutral-400 mt-16 max-w-3xl mx-auto">
					Bereit für Ihre Traumhochzeit? Lassen Sie uns gemeinsam den perfekten musikalischen Rahmen
					für Ihren besonderen Tag schaffen.
				</p>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
				<!-- Contact Form -->
				<div
					v-motion-slide-visible-left
					:duration="800"
					:delay="100"
					class="bg-neutral-900 p-8 rounded-xl border border-neutral-700">
					<h3 class="text-2xl font-bold mb-6">Kostenlose Beratung anfordern</h3>
					<p class="text-neutral-400 mb-8">
						Erzählen Sie mir von Ihrer geplanten Hochzeit und ich erstelle Ihnen ein individuelles
						Angebot für Ihren besonderen Tag.
					</p>

					<form @submit.prevent="submitForm" class="space-y-6">
						<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label for="name" class="block text-sm font-medium mb-2">Ihr Name *</label>
								<input
									id="name"
									v-model="form.name"
									type="text"
									required
									class="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
									placeholder="Max Mustermann" />
							</div>
							<div>
								<label for="email" class="block text-sm font-medium mb-2">E-Mail *</label>
								<input
									id="email"
									v-model="form.email"
									type="email"
									required
									class="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
									placeholder="max@beispiel.de" />
							</div>
						</div>

						<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label for="phone" class="block text-sm font-medium mb-2">Telefonnummer</label>
								<input
									id="phone"
									v-model="form.phone"
									type="tel"
									class="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
									placeholder="+49 123 456789" />
							</div>
							<div>
								<label for="weddingDate" class="block text-sm font-medium mb-2"
									>Hochzeitsdatum</label
								>
								<input
									id="weddingDate"
									v-model="form.weddingDate"
									type="date"
									class="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-colors" />
							</div>
						</div>

						<div>
							<label for="location" class="block text-sm font-medium mb-2">Hochzeitslocation</label>
							<input
								id="location"
								v-model="form.location"
								type="text"
								class="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-colors"
								placeholder="z.B. Schloss Hotel, Pirmasens" />
						</div>

						<div>
							<label for="guests" class="block text-sm font-medium mb-2">Anzahl Gäste</label>
							<select
								id="guests"
								v-model="form.guests"
								class="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-colors">
								<option value="">Bitte wählen</option>
								<option value="bis-50">bis 50 Gäste</option>
								<option value="50-100">50-100 Gäste</option>
								<option value="100-150">100-150 Gäste</option>
								<option value="über-150">über 150 Gäste</option>
							</select>
						</div>

						<div>
							<label for="message" class="block text-sm font-medium mb-2">Nachricht</label>
							<textarea
								id="message"
								v-model="form.message"
								rows="4"
								class="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-colors resize-none"
								placeholder="Erzählen Sie mir mehr über Ihre Traumhochzeit..."></textarea>
						</div>

						<Button
							type="submit"
							:disabled="isSubmitting"
							class="w-full bg-white text-black hover:bg-neutral-200 transition-colors disabled:opacity-50">
							<span v-if="isSubmitting">Wird gesendet...</span>
							<span v-else>Kostenlose Beratung anfordern</span>
						</Button>
					</form>
				</div>

				<!-- Contact Info -->
				<div v-motion-slide-visible-right :duration="800" :delay="200" class="space-y-8">
					<!-- Contact Details -->
					<div class="bg-neutral-900 p-8 rounded-xl border border-neutral-700">
						<h3 class="text-2xl font-bold mb-6">Kontaktdaten</h3>
						<div class="space-y-4">
							<div class="flex items-center gap-4">
								<div class="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center">
									<span class="text-xl">📧</span>
								</div>
								<div>
									<div class="font-semibold">E-Mail</div>
									<div class="text-neutral-400">paulfaass@gmail.com</div>
								</div>
							</div>
							<div class="flex items-center gap-4">
								<div class="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center">
									<span class="text-xl">📱</span>
								</div>
								<div>
									<div class="font-semibold">Telefon</div>
									<div class="text-neutral-400">+49 175 1159748</div>
								</div>
							</div>
							<div class="flex items-center gap-4">
								<div class="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center">
									<span class="text-xl">📍</span>
								</div>
								<div>
									<div class="font-semibold">Standort</div>
									<div class="text-neutral-400">Pirmasens und Umgebung</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Why Choose Me -->
					<div class="bg-neutral-900 p-8 rounded-xl border border-neutral-700">
						<h3 class="text-2xl font-bold mb-6">Warum DJ Booze?</h3>
						<div class="space-y-4">
							<div class="flex items-start gap-3">
								<span class="text-green-400 text-xl mt-1">✓</span>
								<div>
									<div class="font-semibold">Zufriedene Brautpaare</div>
									<div class="text-sm text-neutral-400">Erfahrung aus vielen Hochzeiten</div>
								</div>
							</div>
							<div class="flex items-start gap-3">
								<span class="text-green-400 text-xl mt-1">✓</span>
								<div>
									<div class="font-semibold">Professionelle Ausstattung</div>
									<div class="text-sm text-neutral-400">
										Hochwertige Technik für perfekten Sound
									</div>
								</div>
							</div>
							<div class="flex items-start gap-3">
								<span class="text-green-400 text-xl mt-1">✓</span>
								<div>
									<div class="font-semibold">Individuelle Beratung</div>
									<div class="text-sm text-neutral-400">
										Maßgeschneiderte Lösungen für jeden Anlass
									</div>
								</div>
							</div>
							<div class="flex items-start gap-3">
								<span class="text-green-400 text-xl mt-1">✓</span>
								<div>
									<div class="font-semibold">Zuverlässiger Service</div>
									<div class="text-sm text-neutral-400">
										Pünktlichkeit und Professionalität garantiert
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Response Time -->
					<div
						class="bg-gradient-to-r from-neutral-800 to-neutral-700 p-8 rounded-xl border border-neutral-600">
						<h3 class="text-2xl font-bold mb-4">Schnelle Antwort garantiert</h3>
						<p class="text-neutral-300 mb-4">
							Ich antworte in der Regel innerhalb von 24 Stunden auf Ihre Anfrage.
						</p>
						<p class="text-neutral-300 mb-4">Bei dringenden Anfragen gerne auch telefonisch.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const form = ref({
	name: '',
	email: '',
	phone: '',
	weddingDate: '',
	location: '',
	guests: '',
	message: '',
});

const isSubmitting = ref(false);

const submitForm = async () => {
	isSubmitting.value = true;

	try {
		// Here you would typically send the form data to your backend
		// For now, we'll just simulate a submission
		await new Promise((resolve) => setTimeout(resolve, 2000));

		// Show success message
		const toast = useToast();
		toast.add({
			title: 'Anfrage gesendet!',
			description: 'Vielen Dank für Ihre Anfrage. Ich melde mich schnellstmöglich bei Ihnen.',
			color: 'green',
		});

		// Reset form
		form.value = {
			name: '',
			email: '',
			phone: '',
			weddingDate: '',
			location: '',
			guests: '',
			message: '',
		};
	} catch (error) {
		const toast = useToast();
		toast.add({
			title: 'Fehler',
			description: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
			color: 'red',
		});
	} finally {
		isSubmitting.value = false;
	}
};
</script>
