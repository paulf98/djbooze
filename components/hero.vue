
<template>
    <section class="w-full bg-black text-white py-16" id="hero">
        <div class="container flex flex-col sm:flex-row items-center justify-between gap-8 max-w-5xl mx-auto px-8">
            <div class="flex flex-1 flex-col items-center sm:items-start justify-center gap-8">
                <NuxtImg src="djbooze-dark.png" alt="DJ Booze Logo" class="max-w-60 md:max-w-80 w-full" fit="contain" />
                <p class="dark:text-white text-xl md:text-3xl font-thin tracking-wider">
                    DJ für Clubs & Events <br>
                    in Pirmasens und Umgebung
                </p>
                <NuxtLink to="#contact">
                    <Button>
                        Jetzt Anfrage senden
                    </Button>
                </NuxtLink>
            </div>
            <div class="flex-1">
                <NuxtImg src="hero-image.jpg" alt="DJ Booze" style="border-radius: 79% 21% 25% 75% / 30% 42% 58% 70% ;"
                    class="w-full h-auto max-w-md mx-auto" fit="contain" />
            </div>
        </div>
    </section>
</template>