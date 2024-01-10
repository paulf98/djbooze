<template>
    <footer class="bg-black w-full pt-16 border-t border-white">
        <div class="container max-w-5xl mx-auto flex justify-between gap-8">
            <div>
                <NuxtImg src="djbooze-dark.png" alt="DJ Booze Logo" class="max-w-40" />
            </div>
            <div class="flex flex-col gap-2">
                <h4 class="mb-4 text-xl">Folge mir auf Instagram!</h4>
                <NuxtLink to="https://www.instagram.com/djbooze_official/" target="_blank" rel="noopener noreferrer">
                    <NuxtImg src="instagram.png" alt="Instagram Logo" class="max-w-10" />
                </NuxtLink>
            </div>
            <div class="flex flex-col gap-2">
                <h4 class="mb-4 text-xl">Rechtliches</h4>
                <NuxtLink class="hover:underline" to="/impressum">Impressum</NuxtLink>
                <NuxtLink class="hover:underline" to="/datenschutz">Datenschutz</NuxtLink>
            </div>
        </div>
        <div class="py-8">
            <p class="text-center text-sm text-white italic">© {{ new Date().getFullYear() }} DJ Booze</p>
        </div>
    </footer>
</template>