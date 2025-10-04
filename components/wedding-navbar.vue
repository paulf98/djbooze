<template>
	<nav
		class="bg-transparent py-4 absolute w-full top-0 z-50 px-4"
		v-motion-slide-top
		:duration="800">
		<div class="flex justify-center items-center container mx-auto max-w-5xl">
			<NuxtLink to="/" class="hover:cursor-pointer">
				<NuxtImg src="/djbooze-dark.png" alt="DJ Booze Logo" class="max-h-8" />
			</NuxtLink>
		</div>
	</nav>
</template>

<script setup lang="ts">
// Simple wedding navbar with just the logo linking to home
</script>
