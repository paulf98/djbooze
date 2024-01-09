<template>
    <div class="w-full bg-black py-16">
        <div class="container flex flex-col items-center gap-16 max-w-5xl mx-auto p-8 mb-8">
            <Heading text="Next Events →" />
        </div>
        <div>
            <div class="container flex flex-row justify-between gap-8 max-w-5xl mx-auto py-8 flex-wrap">
                <Event name="Event 1" description="Description 1" date="01.01.24" location="Location 1" />
                <Event name="Event 2" description="Description 2" date="01.01.24" location="Location 2" />
                <Event name="Event 3" description="Description 3" date="01.01.24" location="Location 3" />
            </div>
        </div>
    </div>
</template>