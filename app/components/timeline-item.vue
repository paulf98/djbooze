<template>
	<div
		v-motion-pop-visible
		:duration="800"
		class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
		<div
			class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-red-600 text-white group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
			{{ props.step }}
		</div>
		<slot />
	</div>
</template>

<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		step: number;
	}>(),
	{
		step: 0,
	}
);
</script>
