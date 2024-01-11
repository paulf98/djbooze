<template>
    <section
        class="container flex flex-col items-center md:flex-row-reverse justify-between gap-16 max-w-5xl mx-auto p-8 py-16 md:py-32 bg-zinc-900 text-white"
        id="about">
        <div class="flex-1">
            <div class="flex flex-col items-center gap-16 max-w-5xl mx-auto mb-8 md:mb-16">
                <Heading text="About" />
            </div>
            <div class="text-justify flex flex-col gap-4">
                <p class="text-xl font-bold">Willkommen auf meiner Website!</p>
                <p>
                    Mein Name ist Paul Faass und ich bin DJ aus Leidenschaft.
                    Meine Reise als DJ begann auf Partys, wo ich schon immer für die Musik verantwortlich war. Zur
                    Kerweparty in
                    meiner Heimat wollte ich nicht länger nur "Spotify DJ" sein, sondern eine professionelle Abendgestaltung
                    bieten. DJ Booze war geboren 🎉
                </p>
                <p>
                    Seitdem habe ich immer wieder auf privaten Feiern aufgelegt und mich stetig weiterentwickelt. Nun habe
                    ich bereits auf mehreren öffentlichen Veranstaltungen und in Clubs aufgelegt.
                    Dabei bin ich musikalisch sehr flexibel. Ob Hip-Hop und R&B, House und Techno oder Schlager und
                    Partyhits, ich habe für jeden Anlass die passende Musik.
                </p>
            </div>
        </div>
        <div class="flex-1">
            <NuxtImg class="rounded-full w-full h-auto max-w-sm " src="/paulfaass.jpg" alt="Portrait von Paul Faass" loading="lazy" />
        </div>
    </section>
</template>