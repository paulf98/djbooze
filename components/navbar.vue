<template>
    <nav class="bg-black py-4 sticky w-full top-0 z-50">
        <div class="flex justify-between items-center container mx-auto max-w-5xl gap-8">
            <NuxtLink to="/">
                <NuxtImg src="/djbooze-dark.png" alt="logo" class="h-10" />
            </NuxtLink>
            <div>
                <ul class="flex justify-center gap-8">
                    <li v-for="item in menuItems">
                        <NuxtLink :to="item.link" class="text-white">{{ item.name }}</NuxtLink>
                    </li>
                </ul>
            </div>
            <Button>
                <NuxtLink to="#contact">Jetzt kontaktieren</NuxtLink>
            </Button>
        </div>
    </nav>
</template>

<script setup lang="ts">

const menuItems = [
    {
        name: 'About',
        link: '#about'
    },
    {
        name: 'Events',
        link: '#events'
    },
]

</script>