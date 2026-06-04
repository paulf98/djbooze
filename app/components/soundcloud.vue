<template>
	<a
		:href="url"
		target="_blank"
		rel="noopener noreferrer"
		v-motion-pop-visible
		:duration="800"
		class="group flex h-full min-h-[120px] flex-col justify-between rounded border-2 border-neutral-700 bg-neutral-900 p-4 shadow transition-colors hover:border-red-600/60 hover:bg-neutral-800">
		<div>
			<p class="text-xs font-medium uppercase tracking-wider text-neutral-400">Mix auf SoundCloud</p>
			<p class="mt-2 text-base font-semibold leading-snug text-white group-hover:text-red-500">
				{{ title }}
			</p>
		</div>
		<span class="mt-4 text-sm text-red-600 group-hover:text-red-500">Auf SoundCloud anhören →</span>
	</a>
</template>

<script setup lang="ts">
defineProps<{
	url: string;
	title: string;
}>();
</script>
