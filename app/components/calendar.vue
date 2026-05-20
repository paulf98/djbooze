<template>
	<div class="py-6 flex flex-col items-center gap-4 justify-center w-full max-w-6xl mx-auto">
		<Heading class="mb-8" text="Dates →" v-motion-slide-visible-bottom :duration="800" />

		<div class="w-full flex flex-col gap-4 px-4 mt-4 md:mt-8" v-motion-slide-visible-bottom :duration="800">


			<!-- Calendar Section -->
			<div class="w-full sm:max-w-lg mx-auto bg-neutral-900 rounded-2xl p-4 border border-white/10 shadow-xl">
				<!-- Calendar Header -->
				<div class="flex items-center justify-between mb-4">
					<button @click="prevMonth" class="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
						aria-label="Vorheriger Monat">
						<span class="i-heroicons-chevron-left-20-solid text-xl">←</span>
					</button>
					<h3 class="text-xl font-bold text-white capitalize">
						{{ format(currentMonth, 'MMMM yyyy', { locale: de }) }}
					</h3>
					<button @click="nextMonth" class="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
						aria-label="Nächster Monat">
						<span class="i-heroicons-chevron-right-20-solid text-xl">→</span>
					</button>
				</div>

				<!-- Weekdays -->
				<div class="grid grid-cols-7 mb-2 text-center">
					<div v-for="day in weekDays" :key="day" class="text-xs font-medium text-neutral-400 py-2">
						{{ day }}
					</div>
				</div>

				<!-- Days Grid -->
				<div class="grid grid-cols-7 gap-1 sm:gap-2">
					<template v-if="pending">
						<div class="col-span-7 py-12 text-center text-neutral-500">Lädt...</div>
					</template>
					<template v-else-if="error">
						<div class="col-span-7 py-12 text-center text-red-500">
							Fehler beim Laden der Events.
						</div>
					</template>
					<template v-else>
						<div v-for="day in calendarDays" :key="day.date.toString()"
							class="aspect-square hover:cursor-default relative flex flex-col items-center justify-start py-1 sm:py-2 rounded-xl transition-all group border"
							:class="[
								!day.isCurrentMonth
									? 'text-neutral-600 border-transparent'
									: 'text-neutral-200 border-transparent hover:border-white/10 hover:bg-white/5',
								isToday(day.date) ? 'bg-white/10 font-bold text-white ring-1 ring-red-500/50' : '',
								day.hasEvents
									? 'bg-red-500/10 border-red-500/20 cursor-pointer shadow-[0_0_15px_rgba(239,68,68,0.1)] hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:border-red-500/40 hover:bg-red-500/20'
									: '',
							]">
							<span class="text-xs sm:text-sm" :class="{ 'font-bold text-white': day.hasEvents }">{{
								format(day.date, 'd')
							}}</span>

							<!-- Event Indicators -->
							<div v-if="day.events.length"
								class="flex flex-col gap-0.5 mt-0.5 sm:mt-1 w-full px-1 items-center">
								<div class="flex gap-1 justify-center flex-wrap">
									<div v-for="event in day.events" :key="event.id"
										class="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-red-500"></div>
								</div>
								<span class="text-[0.6rem] text-red-200/70 hidden sm:block truncate max-w-full px-1"
									v-if="day.events[0]">{{ day.events[0].summary }}</span>
								<span class="text-[0.6rem] text-red-200/50 hidden sm:block"
									v-if="day.events.length > 1">+{{ day.events.length - 1 }}</span>
							</div>

							<!-- Popover -->
							<div v-if="day.events.length"
								class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-neutral-900 border border-white/20 rounded-xl p-4 text-xs z-20 hidden group-hover:block shadow-2xl pointer-events-none">
								<div v-for="evt in day.events" :key="evt.id"
									class="mb-3 last:mb-0 border-b border-white/10 last:border-0 pb-3 last:pb-0">
									<div class="font-bold text-center text-white text-sm mb-1">{{ evt.summary }}</div>
									<div class="text-neutral-400 flex items-start gap-1.5 mb-1 text-left"
										v-if="evt.location">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
											class="w-4 h-4 text-red-500 shrink-0 mt-0.5">
											<path fill-rule="evenodd"
												d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
												clip-rule="evenodd" />
										</svg>
										<span class="leading-tight break-words">{{ evt.location }}</span>
									</div>
									<div class="text-neutral-500 italic" v-if="evt.description">
										{{ evt.description }}
									</div>
								</div>
							</div>
						</div>
					</template>
				</div>
			</div>

			<!-- Upcoming List Section -->
			<div
				class="w-full sm:max-w-lg mx-auto bg-neutral-900 rounded-2xl p-4 border border-white/10 shadow-xl flex flex-col">
				<h3 class="text-xl font-bold text-white mb-4">Anstehende Events</h3>

				<div class="flex flex-col gap-2">
					<div v-if="pending" class="text-neutral-500 py-4 text-center">
						Events werden geladen...
					</div>
					<div v-else-if="!nextEvents.length" class="text-neutral-500 py-4 text-center">
						Keine anstehenden Events gefunden.
					</div>

					<div v-for="event in nextEvents" :key="event.id"
						class="flex items-center gap-3 group p-2 rounded-xl bg-black/20 hover:cursor-default hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
						<div
							class="flex flex-col items-center justify-center bg-black/40 rounded-lg p-1.5 min-w-[3rem] border border-white/5 group-hover:border-white/10 transition-colors">
							<span class="text-[0.6rem] text-red-400 uppercase font-bold tracking-wider">{{
								format(getEventDate(event), 'MMM', { locale: de })
							}}</span>
							<span class="text-lg font-bold text-white leading-none mt-0.5">{{
								format(getEventDate(event), 'dd', { locale: de })
							}}</span>
						</div>
						<div class="flex-1 min-w-0">
							<h4 class="font-bold text-sm md:text-base text-white mb-0.5 group-hover:text-red-400 transition-colors"
								:title="event.summary">
								{{ event.summary }}
							</h4>
							<div class="flex flex-wrap gap-4 text-sm text-neutral-400">
								<span v-if="event.location" class="flex items-start gap-1.5 text-xs md:text-sm">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
										class="w-4 h-4 text-red-500 shrink-0 mt-0 md:mt-0.5">
										<path fill-rule="evenodd"
											d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
											clip-rule="evenodd" />
									</svg>
									{{ event.location }}
								</span>
								<span v-if="event.start.dateTime" class="flex items-center gap-1.5">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
										class="w-4 h-4 text-red-500 shrink-0">
										<path fill-rule="evenodd"
											d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
											clip-rule="evenodd" />
									</svg>
									Beginn: {{ format(new Date(event.start.dateTime), 'HH:mm', { locale: de }) }} Uhr
								</span>
							</div>
						</div>
						<div class="hidden sm:block">
							<span
								class="i-heroicons-chevron-right-20-solid text-neutral-600 group-hover:text-white transition-colors text-xl"></span>
						</div>
					</div>
				</div>

				<div class="mt-8 pt-4 border-t border-white/5 text-center">
					<NuxtLink to="/archiv"
						class="text-sm text-neutral-400 hover:text-white transition-colors flex items-center justify-center gap-2 group/link">
						Vergangene Events im Archiv
						<span
							class="i-heroicons-arrow-right-20-solid group-hover/link:translate-x-1 transition-transform"></span>
					</NuxtLink>
				</div>
			</div>
		</div>

		<p class="text-center mt-4 text-neutral-300 max-w-2xl px-4" v-motion-slide-visible-bottom :duration="800">
			Du hast Interesse und willst dir deinen eigenen Termin mit mir sichern?
			<br class="hidden md:block" />
			Schreibe mir einfach eine Nachricht über das Kontaktformular oder Instagram. Wir klären alle
			Details persönlich.
		</p>
		<NuxtLink to="#contact" v-motion-slide-visible-bottom :duration="800">
			<Button> Jetzt Anfrage senden </Button>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
import {
	format,
	startOfMonth,
	endOfMonth,
	startOfWeek,
	endOfWeek,
	eachDayOfInterval,
	addMonths,
	subMonths,
	isSameMonth,
	isSameDay,
	isToday,
	parseISO,
	startOfDay,
} from 'date-fns';
import { de } from 'date-fns/locale';
import type { GoogleCalendarResponse, GoogleCalendarEvent } from '#shared/types/google-calendar';

const currentMonth = ref(new Date());

useHead({
	meta: [
		{
			name: 'format-detection',
			content: 'address=no',
		},
	],
});

const { data: calendarData, pending, error } = useFetch<GoogleCalendarResponse>('/api/gigs', {
	lazy: true,
});

const prevMonth = () => {
	currentMonth.value = subMonths(currentMonth.value, 1);
};

const nextMonth = () => {
	currentMonth.value = addMonths(currentMonth.value, 1);
};

const weekDays = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

const getEventDate = (event: GoogleCalendarEvent) => {
	return new Date(event.start.dateTime || event.start.date!);
};

const eventsByDate = computed(() => {
	const map = new Map<string, GoogleCalendarEvent[]>();
	if (!calendarData.value?.items) return map;

	calendarData.value.items.forEach((event) => {
		let dates: string[] = [];

		if (event.start.dateTime) {
			dates = [event.start.dateTime.slice(0, 10)];
		} else if (event.start.date) {
			dates = [event.start.date];
		}

		if (event.end.dateTime && event.start.dateTime) {
			const s = new Date(event.start.dateTime);
			const e = new Date(event.end.dateTime);
			const current = new Date(s);
			while (current <= e) {
				dates.push(current.toISOString().slice(0, 10));
				current.setDate(current.getDate() + 1);
			}
		} else if (event.end.date && event.start.date) {
			const s = new Date(event.start.date);
			const e = new Date(event.end.date);
			const current = new Date(s);
			while (current < e) {
				dates.push(current.toISOString().slice(0, 10));
				current.setDate(current.getDate() + 1);
			}
		}

		dates = [...new Set(dates)];

		dates.forEach((dateStr) => {
			if (!map.has(dateStr)) map.set(dateStr, []);
			map.get(dateStr)?.push(event);
		});
	});
	return map;
});

const calendarDays = computed(() => {
	const start = startOfWeek(startOfMonth(currentMonth.value), { locale: de, weekStartsOn: 1 });
	const end = endOfWeek(endOfMonth(currentMonth.value), { locale: de, weekStartsOn: 1 });

	const days = eachDayOfInterval({ start, end });

	return days.map((date) => {
		const dateStr = format(date, 'yyyy-MM-dd');
		const events = eventsByDate.value.get(dateStr) || [];
		return {
			date,
			isCurrentMonth: isSameMonth(date, currentMonth.value),
			events,
			hasEvents: events.length > 0,
		};
	});
});

const nextEvents = computed(() => {
	if (!calendarData.value?.items) return [];

	const today = startOfDay(new Date());

	const allEvents = [...calendarData.value.items]
		.filter((e) => {
			const start = e.start.dateTime ? new Date(e.start.dateTime) : new Date(e.start.date!);
			// Filter out past events, keeping everything from today onwards
			return start >= today;
		})
		.sort((a, b) => {
			const dateA = new Date(a.start.dateTime || a.start.date!);
			const dateB = new Date(b.start.dateTime || b.start.date!);
			return dateA.getTime() - dateB.getTime();
		});

	return allEvents.slice(0, 5);
});
</script>
