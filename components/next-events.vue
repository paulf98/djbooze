<template>
    <section class="w-full bg-black py-16 md:py-32 px-8" id="events">
        <div class="container flex flex-col items-center gap-16 max-w-5xl mx-auto mb-8 md:mb-16">
            <Heading text="Next →" />
        </div>
        <div>
            <div
                class="container flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto py-8 flex-wrap">
                <Event name="Event 1" description="Description 1" date="01.01.24" location="Location 1" />
                <Event name="Event 2" description="Description 2" date="01.01.24" location="Location 2" />
                <Event name="Event 3" description="Description 3" date="01.01.24" location="Location 3" />
            </div>
        </div>
    </section>
</template>