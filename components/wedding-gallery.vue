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
				<div class="flex items-center gap-4 md:gap-8">
					<!-- Left Navigation -->
					<button
						@click="previousImage"
						:disabled="currentImageIndex === 0"
						class="flex-shrink-0 w-10 h-10 md:w-16 md:h-16 bg-neutral-800 hover:bg-neutral-700 disabled:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all duration-300 group"
						:class="{ 'hover:scale-110': currentImageIndex > 0 }">
						<svg
							class="w-5 h-5 md:w-8 md:h-8 text-white"
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
					<div class="flex-1 max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
						<div
							@click="openLightbox"
							class="relative overflow-hidden rounded-xl bg-neutral-800 aspect-[3/4] cursor-pointer hover:scale-105 transition-transform duration-300">
							<transition name="fade" mode="out-in">
								<div
									:key="currentImageIndex"
									class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500"
									:style="{ backgroundImage: `url(${currentImage.src})` }">
									<!-- Gradient Overlay -->
									<div
										class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

									<!-- Content Overlay -->
									<div class="absolute bottom-0 left-0 right-0 p-4 md:p-6">
										<h3 class="text-lg md:text-xl lg:text-2xl font-bold mb-2">
											{{ currentImage.location }}
										</h3>
										<p class="text-neutral-300 text-sm md:text-base leading-relaxed">
											{{ currentImage.description }}
										</p>
									</div>

									<!-- Click to expand indicator -->
									<div
										class="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
										<svg
											class="w-4 h-4 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
										</svg>
									</div>
								</div>
							</transition>
						</div>
					</div>

					<!-- Right Navigation -->
					<button
						@click="nextImage"
						:disabled="currentImageIndex === images.length - 1"
						class="flex-shrink-0 w-10 h-10 md:w-16 md:h-16 bg-neutral-800 hover:bg-neutral-700 disabled:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all duration-300 group"
						:class="{ 'hover:scale-110': currentImageIndex < images.length - 1 }">
						<svg
							class="w-5 h-5 md:w-8 md:h-8 text-white"
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
				<div class="flex justify-center mt-6 md:mt-8 gap-3">
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

		<!-- Lightbox Modal -->
		<teleport to="body">
			<div
				v-if="isLightboxOpen"
				@click="closeLightbox"
				class="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
				@keydown.esc="closeLightbox"
				tabindex="0">
				<!-- Close Button -->
				<button
					@click="closeLightbox"
					class="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300 z-10">
					<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>

				<!-- Navigation Arrows -->
				<button
					v-if="currentImageIndex > 0"
					@click.stop="previousImage"
					class="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300 z-10">
					<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7" />
					</svg>
				</button>

				<button
					v-if="currentImageIndex < images.length - 1"
					@click.stop="nextImage"
					class="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300 z-10">
					<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7" />
					</svg>
				</button>

				<!-- Image Container -->
				<div @click.stop class="relative max-w-full max-h-full">
					<img
						:src="currentImage.src"
						:alt="currentImage.location"
						class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />

					<!-- Image Info -->
					<div
						class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
						<h3 class="text-xl md:text-2xl font-bold mb-2 text-white">
							{{ currentImage.location }}
						</h3>
						<p class="text-neutral-300 text-sm md:text-base leading-relaxed">
							{{ currentImage.description }}
						</p>
					</div>
				</div>

				<!-- Image Counter -->
				<div
					class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white text-sm">
					{{ currentImageIndex + 1 }} / {{ images.length }}
				</div>
			</div>
		</teleport>
	</section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

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
const isLightboxOpen = ref(false);

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

const openLightbox = () => {
	isLightboxOpen.value = true;
	document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
	isLightboxOpen.value = false;
	document.body.style.overflow = '';
};

// Keyboard navigation
const handleKeydown = (event) => {
	if (!isLightboxOpen.value) return;

	switch (event.key) {
		case 'Escape':
			closeLightbox();
			break;
		case 'ArrowLeft':
			previousImage();
			break;
		case 'ArrowRight':
			nextImage();
			break;
	}
};

onMounted(() => {
	document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
	document.removeEventListener('keydown', handleKeydown);
	document.body.style.overflow = '';
});

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

/* Lightbox animations */
.lightbox-enter-active,
.lightbox-leave-active {
	transition: all 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
	opacity: 0;
	backdrop-filter: blur(0px);
}

.lightbox-enter-active .lightbox-content,
.lightbox-leave-active .lightbox-content {
	transition: all 0.3s ease;
}

.lightbox-enter-from .lightbox-content,
.lightbox-leave-to .lightbox-content {
	opacity: 0;
	transform: scale(0.9);
}

/* Responsive adjustments */
@media (max-width: 640px) {
	.container {
		padding-left: 1rem;
		padding-right: 1rem;
	}

	.text-xl {
		font-size: 1.125rem;
	}

	.mb-16 {
		margin-bottom: 3rem;
	}
}

/* Touch-friendly navigation buttons */
@media (hover: none) and (pointer: coarse) {
	button {
		min-height: 44px;
		min-width: 44px;
	}
}

/* Prevent zoom on iOS when tapping buttons */
@media (hover: none) and (pointer: coarse) {
	button {
		touch-action: manipulation;
	}
}
</style>
