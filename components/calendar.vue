<template>
	<div class="py-8 flex flex-col items-center gap-4 justify-center">
		<Heading class="mb-16" text="Dates →" v-motion-slide-visible-bottom :duration="800" />
		<div
			class="flex justify-center items-center py-4"
			v-motion-slide-visible-bottom
			:duration="800">
			<div v-if="pending" class="text-center">
				<p>Loading calendar events...</p>
			</div>
			<div v-else-if="error" class="text-center text-red-500">
				<p>Error loading calendar events. Please try again later.</p>
			</div>
			<VCalendar
				v-else
				v-model="date"
				:min-date="date"
				:color="color"
				:attributes="attributes"
				locale="de-DE" />
		</div>
		<p class="text-center" v-motion-slide-visible-bottom :duration="800">
			Du hast Interesse und willst dir deinen eigenen Termin mit mir sichern?
			<br />
			Schreibe mir einfach eine Nachricht über das Kontaktformular oder Instagram. Wir klären alle
			Details persönlich.
		</p>
		<NuxtLink to="#contact" v-motion-slide-visible-bottom :duration="800">
			<Button> Jetzt Anfrage senden </Button>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
import type { GoogleCalendarResponse } from '~/types/google-calendar';

const date = useState('date', () => new Date());
const color = ref('red');

// Fetch calendar data
const { data: calendarData, pending, error } = await useFetch<GoogleCalendarResponse>('/api/gigs');

// Transform Google Calendar events into VCalendar attributes
const attributes = computed(() => {
	if (!calendarData.value?.items) {
		return [];
	}

	return calendarData.value.items.map((event) => {
		// Determine the date(s) for this event
		let dates: string[] = [];

		if (event.start.dateTime) {
			// Single day event with time
			const startDate = new Date(event.start.dateTime);
			dates = [startDate.toISOString().split('T')[0]];
		} else if (event.start.date) {
			// All-day event
			dates = [event.start.date];
		}

		// Handle multi-day events
		if (event.end.dateTime && event.start.dateTime) {
			const startDate = new Date(event.start.dateTime);
			const endDate = new Date(event.end.dateTime);

			// Generate all dates between start and end
			const currentDate = new Date(startDate);
			while (currentDate <= endDate) {
				dates.push(currentDate.toISOString().split('T')[0]);
				currentDate.setDate(currentDate.getDate() + 1);
			}
		} else if (event.end.date && event.start.date) {
			const startDate = new Date(event.start.date);
			const endDate = new Date(event.end.date);

			// Generate all dates between start and end (exclusive of end date for all-day events)
			const currentDate = new Date(startDate);
			while (currentDate < endDate) {
				dates.push(currentDate.toISOString().split('T')[0]);
				currentDate.setDate(currentDate.getDate() + 1);
			}
		}

		// Remove duplicates
		dates = [...new Set(dates)];

		return {
			key: event.id,
			highlight: true,
			dates: dates,
			popover: {
				label: [
					event.summary,
					event.location && `📍 ${event.location}`,
					event.description && event.description.length > 100
						? `${event.description.substring(0, 100)}...`
						: event.description,
				]
					.filter(Boolean)
					.join('\n'),
				color: 'red',
				placement: 'bottom' as const,
				visibility: 'click' as const,
			},
		};
	});
});
</script>
