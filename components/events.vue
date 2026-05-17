<template>
	<section class="w-full bg-black text-white py-16 md:py-32 px-8" id="events">
		<div
			class="container flex flex-col items-center gap-16 max-w-5xl mx-auto mb-8 md:mb-16">
			<Heading text="Next →" v-motion-slide-visible-bottom :duration="800" />
			<p class="text-center" v-motion-slide-visible-bottom :duration="800">
				Hier findest du anstehende öffentliche Termine, für die ich bereits
				gebucht bin. <br />
				Komm vorbei und lass uns gemeinsam feiern! 🎉
			</p>
		</div>
		<div>
			<div
				class="container flex flex-col md:flex-row items-stretch justify-center gap-8 max-w-5xl mx-auto py-8 flex-wrap">
				<Event
					v-if="upcomingEvents && upcomingEvents.length"
					v-for="event in upcomingEvents"
					:key="event.name"
					:name="event.name"
					:description="event.description"
					:date="event.date"
					:location="event.location"
					:image="event.image"
					:link="event.link" />
				<div
					v-else
					class="flex flex-col items-center justify-center gap-8 mx-auto">
					<p class="text-2xl md:text-3xl font-thin tracking-wider text-center">
						Aktuell sind keine öffentliche Termine geplant.
					</p>
				</div>
			</div>
			<Calendar />
		</div>
		<div
			class="container flex flex-col items-center gap-16 max-w-5xl mx-auto my-8 md:my-16">
			<Heading text="← Past" v-motion-slide-visible-bottom :duration="800" />
			<p class="text-center" v-motion-slide-visible-bottom :duration="800">
				Hier findest du vergangene Veranstaltungen, bei denen ich bereits
				aufgelegt habe. <br />
				Vielleicht warst du ja auch schon dabei? 🤔
			</p>
		</div>
		<div>
			<div
				class="container flex flex-col md:flex-row items-stretch justify-center gap-8 max-w-5xl mx-auto py-8 flex-wrap">
				<Event
					v-for="event in displayedPastEvents"
					:key="event.name"
					:name="event.name"
					:description="event.description"
					:image="event.image"
					:date="event.date"
					:location="event.location" />
			</div>
		</div>
		<div
			class="flex justify-center mt-8"
			v-motion-slide-visible-bottom
			:duration="800">
			<NuxtLink to="/archiv">
				<Button>Mehr anzeigen</Button>
			</NuxtLink>
		</div>
	</section>
</template>

<script setup lang="ts">
import { pastEvents, upcomingEvents } from '~/events';

const PAST_EVENTS_HOME_LIMIT = 8;
const displayedPastEvents = computed(() => pastEvents.slice(0, PAST_EVENTS_HOME_LIMIT));
</script>
