<template>
    <button class="px-4 py-2 rounded-sm text-sm sm:text-base"
        :class="props.primary ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-600 hover:bg-gray-700'">
        <slot />
    </button>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
    primary?: boolean
}>(), {
    primary: true
})

</script>
