
import type { _primary } from '#tailwind-config/theme/accentColor';
<template>
    <div class="w-full bg-black flex flex-row justify-around gap-8 p-8">
        <div class="flex flex-col items-start justify-center gap-8">
            <NuxtImg src="djbooze-dark.png" alt="DJ Booze Logo" class="max-w-80" />
            <p class="dark:text-white text-xl">
                Get the party started with DJ Booze.
            </p>
            <UButton>
                Jetzt Anfrage senden
            </UButton>
        </div>
        <NuxtImg src="hero-image.jpeg" alt="DJ Booze" style="border-radius: 79% 21% 25% 75% / 30% 42% 58% 70% ;"
            class="max-w-80" />
    </div>
</template>