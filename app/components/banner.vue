<template>
	<div
		class="bg-red-600 text-white py-2 px-4 text-center sticky top-0 z-50"
		v-motion-slide-top
		:duration="600"
		:delay="300">
		<NuxtLink to="/hochzeit" class="hover:text-gray-200 transition-all duration-300 inline-block">
			<span class="font-semibold text-sm">Hochzeits-DJ gesucht?</span>
			<span class="ml-2 underline text-sm hover:no-underline transition-all duration-300"
				>Schau hier vorbei →</span
			>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
// Banner component for promoting wedding DJ services
</script>
