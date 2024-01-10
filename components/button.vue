<template>
    <button class="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-sm">
        <slot />
    </button>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
    primary: boolean
}>(), {
    primary: true
})

</script>
