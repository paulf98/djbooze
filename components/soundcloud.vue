<template>
	<div ref="root" v-motion-pop-visible :duration="800" class="min-h-[300px] w-full">
		<iframe
			v-if="visible"
			width="100%"
			height="300"
			scrolling="no"
			frameborder="no"
			allow="autoplay"
			:title="`SoundCloud Player: ${url}`"
			:src="playerSrc" />
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	url: string;
}>();

const root = ref<HTMLElement | null>(null);
const visible = ref(false);

const playerSrc = computed(
	() =>
		`https://w.soundcloud.com/player/?url=${encodeURIComponent(props.url)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`,
);

onMounted(() => {
	const el = root.value;
	if (!el) return;

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry?.isIntersecting) {
				visible.value = true;
				observer.disconnect();
			}
		},
		{ rootMargin: '200px' },
	);

	observer.observe(el);
	onUnmounted(() => observer.disconnect());
});
</script>
