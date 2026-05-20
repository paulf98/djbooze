<template>
	<main class="pt-16">
		<div
			class="container flex flex-col items-center gap-16 max-w-5xl mx-auto mb-8 md:mb-16">
			<Heading text="Archiv" />
			<p class="text-center">
				Hier findest du eine Übersicht über vergangene Veranstaltungen.
			</p>
		</div>

		<div
			class="container flex flex-col md:flex-row items-stretch justify-center gap-8 max-w-5xl mx-auto pb-16 flex-wrap">
			<Event
				v-for="event in archivedEvents"
				:key="event.name"
				:name="event.name"
				:description="event.description"
				:image="event.image"
				:date="event.date"
				:location="event.location" />
		</div>
	</main>
</template>

<script setup lang="ts">
import { archivedEvents } from '~/events';
</script>
