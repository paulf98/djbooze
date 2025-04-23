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
		key: '2025-04-26',
		highlight: true,
		dates: ['2025-04-26'],
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
		key: '2025-05-31',
		highlight: true,
		dates: ['2025-05-31'],
		popover: {
			label: 'After Kubb Party - Dahn',
			color: 'red',
			placement: 'bottom',
			visibility: 'click',
		},
	},
	{
		key: '2025-06-06',
		highlight: true,
		dates: ['2025-06-06'],
		popover: {
			label: 'Pfingstfest - Dahn',
			color: 'red',
			placement: 'bottom',
			visibility: 'click',
		},
	},
	{
		key: '2025-06-21',
		highlight: true,
		dates: ['2025-06-19', '2025-06-20', '2025-06-21', '2025-06-22'],
		popover: {
			label: 'Privat',
			color: 'red',
			placement: 'bottom',
			visibility: 'click',
		},
	},
	{
		key: '2025-07-05',
		highlight: true,
		dates: ['2025-07-05'],
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
		key: '2025-07-13',
		highlight: true,
		dates: ['2025-07-13'],
		popover: {
			label: 'Dorfmeisterschaft - SV Lemberg',
			color: 'red',
			placement: 'bottom',
			visibility: 'click',
		},
	},
	{
		key: '2025-07-18',
		highlight: true,
		dates: ['2025-07-18'],
		popover: {
			label: 'Afterwork Malleparty mit DJ Danny Malle - Next Level',
			color: 'red',
			placement: 'bottom',
			visibility: 'click',
		},
	},
	{
		key: '2025-07-19',
		highlight: true,
		dates: ['2025-07-19'],
		popover: {
			label: 'Private Veranstaltung',
			color: 'red',
			placement: 'bottom',
			visibility: 'click',
		},
	},
	{
		key: '2025-07-21',
		highlight: true,
		dates: [
			'2025-07-21',
			'2025-07-22',
			'2025-07-23',
			'2025-07-24',
			'2025-07-25',
			'2025-07-26',
			'2025-07-27',
		],
		popover: {
			label: 'Nicht verfügbar',
			color: 'red',
			placement: 'bottom',
			visibility: 'click',
		},
	},
	{
		key: '2025-08-01',
		highlight: true,
		dates: ['2025-08-01'],
		popover: {
			label: 'SchlabbeflickerFESTival - Pirmasens',
			color: 'red',
			placement: 'bottom',
			visibility: 'click',
		},
	},
	{
		key: '2025-08-02',
		highlight: true,
		dates: ['2025-08-02'],
		popover: {
			label: 'SchlabbeflickerFESTival - Pirmasens',
			color: 'red',
			placement: 'bottom',
			visibility: 'click',
		},
	},
	{
		key: '2025-08-23',
		highlight: true,
		dates: ['2025-08-23'],
		popover: {
			label: '60 Jahre HKS',
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
	{
		key: '2026-06-06',
		highlight: true,
		dates: ['2026-06-06'],
		popover: {
			label: 'Private Veranstaltung',
			color: 'red',
			placement: 'bottom',
			visibility: 'click',
		},
	},
]);
</script>
