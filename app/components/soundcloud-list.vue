<template>
	<section class="py-16 md:py-32 bg-neutral-900 text-white" id="about">
		<div
			class="flex flex-col items-center gap-16 max-w-5xl mx-auto mb-8 md:mb-16">
			<Heading
				text="SoundCloud"
				v-motion-slide-visible-bottom
				:duration="800" />
			<p
				class="text-center max-w-3xl px-4"
				v-motion-slide-visible-bottom
				:duration="800">
				Hier findest du ein paar Mixe auf SoundCloud. Die Tracks öffnen sich auf soundcloud.com –
				auf dieser Website werden keine Player eingebunden.
				<br />
				Viel Spaß beim Hören! 🎧
			</p>
		</div>
		<div
			class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto py-8 px-4">
			<Soundcloud
				v-for="track in tracks"
				:key="track.id"
				:url="track.url"
				:title="track.title" />
		</div>
	</section>
</template>

<script setup lang="ts">
const tracks = [
	{
		id: 1,
		title: 'Tech House Weekend Mix',
		url: 'https://soundcloud.com/paul-faass/1-tech-house-weekend-mix',
	},
	{
		id: 2,
		title: 'Hip-Hop Weekend Mix',
		url: 'https://soundcloud.com/paul-faass/2-hip-hop-weekend-mix',
	},
	{
		id: 3,
		title: '00er & 10er Remixed Weekend Mix',
		url: 'https://soundcloud.com/paul-faass/3-00er-10er-remixed-weekend-mix',
	},
	{
		id: 4,
		title: '2000er Hip-Hop & R&B Throwback Weekend Mix',
		url: 'https://soundcloud.com/paul-faass/4-2000er-hip-hop-rnb-throwback-weekend-mix',
	},
	{
		id: 5,
		title: '2010er Throwback Weekend Mix',
		url: 'https://soundcloud.com/paul-faass/5-2010er-throwback-weekend-mix',
	},
];
</script>
