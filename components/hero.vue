
<template>
    <section class="w-full bg-black py-16" id="hero">
        <div class="container flex flex-col sm:flex-row items-center justify-between gap-8 max-w-5xl mx-auto px-8">
            <div class="flex flex-col items-center sm:items-start justify-center gap-8">
                <NuxtImg src="djbooze-dark.png" alt="DJ Booze Logo" class="max-w-60 md:max-w-80" />
                <p class="dark:text-white text-xl md:text-3xl font-thin tracking-wider">
                    DJ für Clubs, Hochzeiten & Events <br>
                    in Pirmasens und Umgebung
                </p>
                <NuxtLink to="#contact">
                    <Button>
                        Jetzt Anfrage senden
                    </Button>
                </NuxtLink>
            </div>
            <div>

                <NuxtImg src="hero-image.jpeg" alt="DJ Booze" style="border-radius: 79% 21% 25% 75% / 30% 42% 58% 70% ;"
                    class="w-full h-auto max-w-md mx-auto" />
            </div>
        </div>
    </section>
</template>