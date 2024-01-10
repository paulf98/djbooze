<template>
    <div>
        <NuxtImg :src="props.image" :alt="props.name" class="max-w-xs mb-4 rounded-md" />
        <div class="flex flex-col items-start justify-center gap-4">
            <p class="dark:text-white text-3xl font-thin tracking-wider">
                {{ props.name }}
            </p>
            <p class="dark:text-white">
                {{ props.description }}
            </p>
            <div class="flex justify-between gap-2 w-full">
                <p class="dark:text-white font-thin tracking-wider">
                    {{ props.date }}
                </p>
                <p class="dark:text-white font-thin tracking-wider">
                    {{ props.location }}
                </p>
            </div>
            <a v-if="props.link" class="hover:underline text-red-600 hover:text-red-700" :href="props.link">Zum Event</a>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
    name: string,
    description?: string,
    date: string,
    location: string,
    image: string,
    link?: string
}>(), {
    name: 'Event',
    description: undefined,
    date: '01.01.24',
    location: 'Location',
    image: '/sample-event.JPEG',
    link: undefined
})

</script>