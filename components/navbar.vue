<template>
	<nav
		class="bg-black py-4 sticky w-full top-0 z-50 px-4"
		v-motion-slide-top
		:duration="800">
		<div
			class="flex justify-between items-center container mx-auto max-w-5xl gap-8">
			<NuxtLink to="/" class="hover:cursor-pointer">
				<NuxtImg src="/djbooze-dark.png" alt="logo" class="max-h-8" />
			</NuxtLink>

			<ul class="hidden md:flex justify-center gap-8">
				<li v-for="item in menuItems" class="hover:cursor-pointer">
					<NuxtLink :to="item.link" class="text-white">{{
						item.name
					}}</NuxtLink>
				</li>
			</ul>

			<Button>
				<NuxtLink class="text-white" to="#contact">Jetzt kontaktieren</NuxtLink>
			</Button>
		</div>
	</nav>
</template>

<script setup lang="ts">
const menuItems = [
	{
		name: 'About',
		link: '/#about',
	},
	{
		name: 'Events',
		link: '/#events',
	},
];
</script>
