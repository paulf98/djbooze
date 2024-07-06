<template>
    <section class="w-full bg-black text-white py-16 md:py-32 px-8" id="events">
        <div class="container flex flex-col items-center gap-16 max-w-5xl mx-auto mb-8 md:mb-16">
            <Heading text="Next →" />
        </div>
        <div>
            <div
                class="container flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto py-8 flex-wrap">
                <Event v-if="upcomingEvents && upcomingEvents.length" v-for="event in upcomingEvents" :key="event.name"
                    :name="event.name" :description="event.description" :date="event.date" :location="event.location"
                    :image="event.image" :link="event.link" />
                <div v-else class="flex flex-col items-center justify-center gap-8 mx-auto">
                    <p class="text-2xl md:text-3xl font-thin tracking-wider text-center">
                        Aktuell sind keine öffentliche Termine geplant.
                    </p>
                </div>
            </div>
            <!-- <Calendar /> -->
        </div>
        <div class="container flex flex-col items-center gap-16 max-w-5xl mx-auto my-8 md:my-16">
            <Heading text="← Past" />
        </div>
        <div>
            <div
                class="container flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto py-8 flex-wrap">
                <Event v-for="event in pastEvents" :key="event.name" :name="event.name" :description="event.description"
                    :image="event.image" :date="event.date" :location="event.location" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { type MyEvent } from '~/types/event';

const upcomingEvents: MyEvent[] = [];

const pastEvents: MyEvent[] = [
    {
        name: 'SportHouse',
        date: '31.05.24',
        location: "SV Lemberg",
        image: "/sporthouse.jpg"
    },
    {
        name: 'Teen Disco',
        date: '17.05.24',
        location: "MATRIX Pirmasens",
        image: "/teendisco.jpg"
    },
    {
        name: 'After Kubb Party',
        date: '11.05.24',
        location: "Dahn | An der Reichenbach 2",
        image: "/afterkubb.jpg"
    },
    {
        name: 'Bärmesenser Hexentour',
        date: '30.04.24',
        location: "Mobil/Bus",
        description: "Die Hexen sind los! Ich begleite euch im Bus, dass euch zwischen den Stationen nicht langweilig wird 😜",
        image: "/hexentour.jpg",
        link: 'http://www.pshexentour.de/'
    },
    {
        name: 'Trink dich zum Profit',
        date: '16.03.24',
        location: "MATRIX Pirmasens",
        description: "Kaufe dir am Eingang einen Becher für 10€ und bekomme die ganze Nacht die Getränke zum halben Preis!",
        image: "/profitsaufen.jpg"
    },
    {
        name: 'I ❤️ Après Ski',
        date: '03.02.24',
        location: "MATRIX Pirmasens",
        description: undefined,
        image: "/apresski.jpg"
    },
    {
        name: "Hip Hop & RnB Party",
        date: "16.12.23",
        location: "MATRIX Pirmasens",
        description: undefined,
        image: "/hiphopparty.JPEG"
    },
    {
        name: "Mallorca Party",
        date: "25.11.23",
        location: "MATRIX Pirmasens",
        description: undefined,
        image: "/malleparty.JPEG"
    },
    {
        name: "Lemberger Kerweparty",
        date: "21.10.23",
        location: "Freizeithalle Lemberg",
        description: undefined,
        image: "/kerweparty.JPEG"
    }
]

</script>