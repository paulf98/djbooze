<template>
	<footer
		class="bg-black text-white w-full pt-16 px-8"
		v-motion-fade-visible
		:duration="800">
		<div
			class="container max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
			<div>
				<NuxtImg
					src="djbooze-dark.png"
					alt="DJ Booze Logo"
					class="max-w-40"
					loading="lazy" />
			</div>
			<div class="flex flex-col items-center gap-2">
				<p class="mb-4 text-xl">Folge mir auf Instagram!</p>
				<NuxtLink
					to="https://www.instagram.com/dj.booze"
					target="_blank"
					rel="noopener noreferrer">
					<NuxtImg
						src="instagram.png"
						alt="Instagram Logo"
						class="max-w-10"
						loading="lazy" />
				</NuxtLink>
			</div>
			<div class="flex flex-col gap-2 text-center md:text-left">
				<p class="mb-4 text-xl">Rechtliches</p>
				<NuxtLink class="hover:underline" to="/impressum">Impressum</NuxtLink>
				<NuxtLink class="hover:underline" to="/datenschutz"
					>Datenschutz</NuxtLink
				>
			</div>
		</div>
		<div class="py-8">
			<p class="text-center text-sm text-white italic">
				© {{ new Date().getFullYear() }} DJ Booze
			</p>
		</div>
	</footer>
</template>
