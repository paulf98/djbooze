<template>
    <section
        class="container flex flex-col items-center md:flex-row justify-between gap-16 max-w-5xl mx-auto p-8 py-16 md:py-32"
        id="about">
        <div class="flex-1">
            <div class="flex flex-col items-center gap-16 max-w-5xl mx-auto mb-8 md:mb-16">
                <Heading text="About" />
            </div>
            <div class="text-justify flex flex-col gap-8">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque velit nihil ad! Quos laborum
                    libero
                    dolore dignissimos aperiam mollitia, incidunt quibusdam facilis, nam facere quam est voluptatem saepe
                    quas?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptate et ipsam quis nam ad optio
                    reprehenderit. Illum libero, veniam earum neque id sit rem hic consequuntur illo voluptatibus
                    accusantium?
                </p>
            </div>
        </div>
        <div class="flex-1">
            <NuxtImg class="rounded-md w-full h-auto max-w-md grayscale" src="/controller.jpg" />
        </div>
    </section>
</template>