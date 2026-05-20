<template>
	<div
		class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-neutral-900 text-white p-4 rounded border-2 border-neutral-700 shadow">
		<div class="flex items-center justify-between space-x-2 mb-1">
			<div class="text-lg font-bold">{{ props.heading }}</div>
		</div>
		<div class="text-white text-justify">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		heading: string;
	}>(),
	{
		heading: '',
	}
);
</script>
