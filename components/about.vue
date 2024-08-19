<template>
    <section class="py-16 md:py-32 bg-neutral-900 text-white" id="about">
        <div
            class="container flex flex-col items-center md:flex-row-reverse justify-between gap-16 max-w-5xl mx-auto p-8">
            <div class="flex-1">
                <div class="flex flex-col items-center gap-16 max-w-5xl mx-auto mb-8 md:mb-16">
                    <Heading text="About" />
                </div>
                <div class="text-justify flex flex-col gap-4">
                    <p class="text-2xl font-bold">Hi, ich bin Paul 👋🏻</p>
                    <p>
                        ... und ich bin Open-Format DJ aus Leidenschaft. <br />
                        Schon immer war ich als Partygast auf privaten Feiern für die Musik verantwortlich war.
                        Zur Kerweparty in meiner Heimat, wollte ich nicht länger nur "Spotify DJ" sein, sondern eine
                        professionellere
                        musikalische Abendgestaltung bieten. <br />
                        DJ Booze war geboren 🎉
                    </p>
                    <p>
                        Seitdem begeistere ich regelmäßig auf privaten und öffentlichen Feierlichkeiten Menschen mit
                        Musik.
                        Dabei bin ich musikalisch sehr flexibel. Ob Hip-Hop und R&B, House, Schlager und
                        Mallorca-Hits, oder doch die klassischen Dance-Dauerbrenner - ich finde für jeden Anlass die
                        passende
                        Musik.
                    </p>
                </div>
            </div>
            <div class="flex-1">
                <LazyNuxtImg class="rounded-full w-full h-auto max-w-sm " fit="contain" src="/DJBooze-DarkPortrait.png"
                    alt="Portrait von Paul Faass" loading="lazy" />
            </div>
        </div>
    </section>
</template>