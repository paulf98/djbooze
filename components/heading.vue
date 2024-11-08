<template>
    <div class="flex flex-col items-start mb-4 max-w-full">
        <div class="text-6xl sm:text-8xl -mb-20 opacity-20 text-red-600 z-0">{{ props.text }}
        </div>
        <h1 class="text-4xl font-bold text-center ml-8 text-red-600 z-10 tracking-wider">
            {{ props.text }}
        </h1>
        <div class="w-1/6 h-2 bg-red-600 ml-8 mt-1 z-10 rounded-md" />
    </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
    text: string
}>(), {
    text: 'Heading'
})
</script>