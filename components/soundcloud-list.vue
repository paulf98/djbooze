<template>
    <section class="py-16 md:py-32 bg-neutral-900 text-white" id="about">
        <div class="flex flex-col items-center gap-16 max-w-5xl mx-auto mb-8 md:mb-16">
            <Heading text="SoundCloud" />
            <p class="text-center max-w-3xl">
                Einige kurze Mixing-Sessions, die ich auf SoundCloud veröffentlicht habe. Viel Spaß beim Hören!
            </p>
        </div>
        <div class="container flex flex-col md:flex-row items-center justify-center gap-8 mx-auto py-8 flex-wrap">
            <Soundcloud v-for="soundcloud in soundclouds" :key="soundcloud.id" :url="soundcloud.url" />
        </div>
    </section>
</template>

<script setup lang="ts">

const soundclouds = [
    {
        id: 1,
        url: 'https://soundcloud.com/paul-faass/1-tech-house-weekend-mix?si=fb0a4394e60543f59d5f6dd42d2bb8f2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
    },
    {
        id: 2,
        url: 'https://soundcloud.com/paul-faass/2-hip-hop-weekend-mix?si=76444704975147fea3a9703d7f2abfde&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
    },
    {
        id: 3,
        url: 'https://soundcloud.com/paul-faass/3-00er-10er-remixed-weekend-mix?si=2c74c8fff9654c6f8469c3495fd02a81&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
    },
    {
        id: 4,
        url: 'https://soundcloud.com/paul-faass/4-2000er-hip-hop-rnb-throwback-weekend-mix?si=0eb5a80088ae493caf6a28832226faf3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
    }
]

</script>