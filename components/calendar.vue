<template>
	<div class="py-8 flex flex-col items-center gap-4 justify-center">
		<Heading
			class="mb-16"
			text="Dates →"
			v-motion-slide-visible-bottom
			:duration="800" />
		<div
			class="flex justify-center items-center py-4"
			v-motion-slide-visible-bottom
			:duration="800">
			<VCalendar
				v-model="date"
				:min-date="date"
				:color="color"
				:attributes="attributes" />
		</div>
		<p class="text-center" v-motion-slide-visible-bottom :duration="800">
			Du hast Interesse und willst dir deinen eigenen Termin mit mir sichern?
			<br />
			Schreibe mir einfach eine Nachricht über das Kontaktformular oder
			Instagram. Wir klären alle Details persönlich.
		</p>
		<NuxtLink to="#contact" v-motion-slide-visible-bottom :duration="800">
			<Button> Jetzt Anfrage senden </Button>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
const date = useState('date', () => new Date());
const color = ref('red');

const attributes: any = ref([
	{
		key: '2025-01-31',
		highlight: true,
		dates: ['2025-01-31'],
		popover: {
			label: 'Friday Night - MaTriX',
			color: 'red',
			placement: 'bottom',
			visibility: 'click',
		},
	},
	{
		key: '2025-02-21',
		highlight: true,
		dates: ['2025-02-21'],
		popover: {
			label: 'Vermoddelte Turnstunde - TV Lemberg',
			color: 'red',
			placement: 'bottom',
			visibility: 'click',
		},
	},
	{
		key: '2025-02-28',
		highlight: true,
		dates: ['2025-02-28'],
		popover: {
			label: 'Next Level - Bad Taste Party',
			color: 'red',
			placement: 'bottom',
			visibility: 'click',
		},
	},
	{
		key: '2025-04-12',
		highlight: true,
		dates: ['2025-04-12'],
		popover: {
			label: 'Private Veranstaltung',
			color: 'red',
			placement: 'bottom',
			visibility: 'click',
		},
	},
	{
		key: '2025-04-30',
		highlight: true,
		dates: ['2025-04-30'],
		popover: {
			label: 'Bärmesenser Hexentour @Next Level',
			color: 'red',
			placement: 'bottom',
			visibility: 'click',
		},
	},
	{
		key: '2025-05-16',
		highlight: true,
		dates: ['2025-05-16'],
		popover: {
			label: 'Private Veranstaltung',
			color: 'red',
			placement: 'bottom',
			visibility: 'click',
		},
	},
	{
		key: '2025-07-12',
		highlight: true,
		dates: ['2025-07-12'],
		popover: {
			label: 'Private Veranstaltung',
			color: 'red',
			placement: 'bottom',
			visibility: 'click',
		},
	},
	{
		key: '2025-09-06',
		highlight: true,
		dates: ['2025-09-06'],
		popover: {
			label: 'Private Veranstaltung',
			color: 'red',
			placement: 'bottom',
			visibility: 'click',
		},
	},
]);
</script>
