
import type { _primary } from '#tailwind-config/theme/accentColor';
<template>
    <section class="w-full bg-black py-16" id="hero">
        <div class="container flex flex-row justify-between gap-8 max-w-5xl mx-auto p-8">
            <div class="flex flex-col items-start justify-center gap-8">
                <NuxtImg src="djbooze-dark.png" alt="DJ Booze Logo" class="max-w-80" />
                <p class="dark:text-white text-3xl font-thin tracking-wider">
                    DJ für Clubs, Hochzeiten & Events <br>
                    in Pirmasens und Umgebung
                </p>
                <Button>
                    Jetzt Anfrage senden
                </Button>
            </div>
            <NuxtImg src="hero-image.jpeg" alt="DJ Booze" style="border-radius: 79% 21% 25% 75% / 30% 42% 58% 70% ;"
                class="max-w-80" />
        </div>
    </section>
</template>