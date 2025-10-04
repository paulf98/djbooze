<template>
	<section class="py-16 md:py-32 bg-neutral-900 text-white">
		<div class="container max-w-6xl mx-auto px-8">
			<div v-motion-slide-visible-top :duration="800" class="text-center mb-16">
				<Heading text="Galerie" class="mb-8" />
				<p class="text-xl text-neutral-400 max-w-3xl mt-16 mx-auto">
					Ein Blick auf einige meiner bisherigen Hochzeiten – von romantischen Trauungen bis zu
					ausgelassenen Feiern.
				</p>
			</div>

			<!-- Gallery Container -->
			<div v-motion-slide-visible-bottom :duration="800" :delay="200" class="relative">
				<div class="flex items-center gap-8">
					<!-- Left Navigation -->
					<button
						@click="previousImage"
						:disabled="currentImageIndex === 0"
						class="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-neutral-800 hover:bg-neutral-700 disabled:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all duration-300 group"
						:class="{ 'hover:scale-110': currentImageIndex > 0 }">
						<svg
							class="w-6 h-6 md:w-8 md:h-8 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 19l-7-7 7-7" />
						</svg>
					</button>

					<!-- Image Container -->
					<div class="flex-1 max-w-md mx-auto">
						<div class="relative overflow-hidden rounded-xl bg-neutral-800 aspect-[3/4]">
							<transition name="fade" mode="out-in">
								<div
									:key="currentImageIndex"
									class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500"
									:style="{ backgroundImage: `url(${currentImage.src})` }">
									<!-- Gradient Overlay -->
									<div
										class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

									<!-- Content Overlay -->
									<div class="absolute bottom-0 left-0 right-0 p-6">
										<h3 class="text-xl md:text-2xl font-bold mb-2">{{ currentImage.location }}</h3>
										<p class="text-neutral-300 text-sm md:text-base leading-relaxed">
											{{ currentImage.description }}
										</p>
									</div>
								</div>
							</transition>
						</div>
					</div>

					<!-- Right Navigation -->
					<button
						@click="nextImage"
						:disabled="currentImageIndex === images.length - 1"
						class="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-neutral-800 hover:bg-neutral-700 disabled:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all duration-300 group"
						:class="{ 'hover:scale-110': currentImageIndex < images.length - 1 }">
						<svg
							class="w-6 h-6 md:w-8 md:h-8 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</div>

				<!-- Dot Indicators -->
				<div class="flex justify-center mt-8 gap-3">
					<button
						v-for="(image, index) in images"
						:key="index"
						@click="goToImage(index)"
						class="w-3 h-3 rounded-full transition-all duration-300"
						:class="
							index === currentImageIndex
								? 'bg-white scale-125'
								: 'bg-neutral-600 hover:bg-neutral-500'
						"></button>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref, computed } from 'vue';

// Wedding gallery images with descriptions
const images = ref([
	{
		src: '/wedding/wedding-dj-falkenstein-2.jpg',
		location: 'Eventlocation, Falkenstein',
		description: 'Eine wunderschöne Aussicht hinter dem DJ-Pult',
	},
	{
		src: '/wedding/wedding-dj-falkenstein.jpg',
		location: 'Eventlocation, Falkenstein',
		description: 'Märchenhafte Hochzeit in exklusivem Ambiente',
	},
	{
		src: '/wedding/wedding-dj-setup-feiersaal.jpg',
		location: 'Feiersaal, Pirmasens',
		description: 'Perfekt eingerichtetet im Maschinenraum.',
	},
	{
		src: '/wedding/wedding-dj-trauung.jpeg',
		location: 'Freie Trauung - Weidenkirche, Kaiserslautern',
		description: 'Mikrofonierung und musikalische Untermalung während der Trauung.',
	},
	{
		src: '/wedding/wedding-dj-zum-hannes.jpeg',
		location: 'Zum Hannes, Winterbach',
		description: 'Gemütliche Hochzeitsfeier in familiärer Atmosphäre. ',
	},
]);

const currentImageIndex = ref(0);

const currentImage = computed(() => images.value[currentImageIndex.value]);

const nextImage = () => {
	if (currentImageIndex.value < images.value.length - 1) {
		currentImageIndex.value++;
	}
};

const previousImage = () => {
	if (currentImageIndex.value > 0) {
		currentImageIndex.value--;
	}
};

const goToImage = (index) => {
	currentImageIndex.value = index;
};

// Auto-play functionality (optional)
// setInterval(() => {
// 	nextImage()
// 	if (currentImageIndex.value === images.value.length - 1) {
// 		currentImageIndex.value = 0
// 	}
// }, 5000)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
	.flex.items-center.gap-8 {
		gap: 1rem;
	}
}
</style>
