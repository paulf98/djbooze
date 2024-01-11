<template>
    <div>
        <Navbar />
        <div>
            <NuxtPage />
        </div>
        <UNotifications />
        <Footer />
    </div>
</template>

<script setup>
useHead({
    htmlAttrs: {
        lang: 'de-DE',
    }
})
</script>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>