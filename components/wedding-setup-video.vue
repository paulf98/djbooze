<template>
	<figure
		ref="containerRef"
		class="group relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
		<video
			ref="videoRef"
			class="absolute inset-0 h-full w-full object-cover"
			:poster="poster"
			playsinline
			muted
			loop
			preload="none"
			@play="isPlaying = true"
			@pause="onPause" />

		<button
			v-if="!isPlaying"
			type="button"
			class="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-black/35 transition-opacity duration-300"
			:aria-label="`${title} abspielen`"
			@click.stop="playVideo">
			<span
				class="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-black shadow-lg transition-transform group-hover:scale-105">
				<svg
					class="h-7 w-7 translate-x-0.5"
					fill="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true">
					<path d="M8 5v14l11-7z" />
				</svg>
			</span>
			<span class="text-sm font-medium text-white/90">Video abspielen</span>
		</button>

		<button
			v-else
			type="button"
			class="absolute top-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
			:aria-label="`${title} anhalten`"
			@click.stop="stopVideo">
			<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
			</svg>
		</button>

		<figcaption
			class="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 md:p-8">
			<h3 class="text-lg md:text-xl font-semibold mb-1">{{ title }}</h3>
			<p class="text-neutral-300 text-sm md:text-base leading-relaxed">{{ description }}</p>
		</figcaption>
	</figure>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
	src: { type: String, required: true },
	poster: { type: String, required: true },
	title: { type: String, required: true },
	description: { type: String, required: true },
});

const containerRef = ref(null);
const videoRef = ref(null);
const isPlaying = ref(false);
let observer;
let playListener;

const loadSource = () => {
	const video = videoRef.value;
	if (!video || video.dataset.loaded) return;
	video.src = props.src;
	video.dataset.loaded = 'true';
	video.load();
};

const startPlayback = async () => {
	const video = videoRef.value;
	if (!video) return;
	video.muted = true;
	await video.play();
};

const playVideo = () => {
	loadSource();
	const video = videoRef.value;
	if (!video) return;

	if (playListener) {
		video.removeEventListener('canplay', playListener);
		playListener = null;
	}

	if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
		startPlayback();
		return;
	}

	playListener = () => {
		playListener = null;
		startPlayback();
	};
	video.addEventListener('canplay', playListener, { once: true });
};

const stopVideo = () => {
	const video = videoRef.value;
	if (!video) return;
	video.pause();
	video.currentTime = 0;
	isPlaying.value = false;
};

const onPause = () => {
	if (videoRef.value && !videoRef.value.paused) return;
	isPlaying.value = false;
};

onMounted(() => {
	observer = new IntersectionObserver(
		(entries) => {
			const entry = entries[0];
			if (!entry?.isIntersecting) return;
			loadSource();
			observer?.disconnect();
		},
		{ rootMargin: '200px' },
	);
	if (containerRef.value) observer.observe(containerRef.value);
});

onUnmounted(() => {
	observer?.disconnect();
	if (playListener && videoRef.value) {
		videoRef.value.removeEventListener('canplay', playListener);
	}
});
</script>
