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
import { type MyEvent } from '~/types/event';

const archivedEvents: MyEvent[] = [
	{
		name: 'Driving Home for Christmas',
		date: '21.12.2024',
		location: 'Next Level Pirmasens',
		image: '/driving-home-for-christmas.JPEG',
	},
	{
		name: 'Icedisco Belznickelmarkt',
		date: '13.12.2024',
		location: 'Schloßplatz Pirmasens',
		image: '/Icedisco.png',
	},
	{
		name: 'DJ EL1AS Birthday Bash',
		date: '07.12.2024',
		location: 'MaTriX Pirmasens',
		image: '/bdaybash.jpg',
	},
	{
		name: 'Icedisco Belznickelmarkt',
		date: '06.12.2024',
		location: 'Schloßplatz Pirmasens',
		image: '/Icedisco.png',
	},
	{
		name: 'Life is a Party',
		date: '30.11.2024',
		location: 'MaTriX Pirmasens',
		image: '/abiparty-bbs-24.jpg',
	},
	{
		name: 'Halloween Teen Disco',
		date: '31.10.2024',
		location: 'MaTriX Pirmasens',
		image: '/halloween24-td.JPEG',
	},
	{
		name: 'Halloween Party',
		date: '31.10.2024',
		location: 'MaTriX Pirmasens',
		image: '/halloween24.JPEG',
	},
	{
		name: 'Lemberger Kerweparty',
		date: '19.10.2024',
		location: 'Freizeithalle Lemberg',
		image: '/kerweparty24.JPEG',
	},
	{
		name: 'KneipenKULTOUR',
		date: '02.10.2024',
		location: 'Next Level Pirmasens',
		image: '/kneipentour24.jpg',
	},
	{
		name: '10 Jahre Next Level',
		date: '14.09.24',
		location: 'Next Level Pirmasens',
		image: '/10JahreNext.JPEG',
	},
	{
		name: 'Teen Disco',
		date: '23.08.24',
		location: 'MATRIX Pirmasens',
		image: '/teendisco-august.JPEG',
	},
	{
		name: 'Feuerwehrfest Lemberg',
		date: '10.08.24',
		location: 'Freizeithalle Lemberg',
		image: '/feuerwehrfest.JPEG',
	},
	{
		name: 'SchlabbeflickerFESTival',
		date: '02.08.24 & 03.08.24',
		location: 'MATRIX Pirmasens',
		image: '/schlabbeflicker-aftershow.JPEG',
	},
	{
		name: 'SchlabbeflickerFESTival',
		date: '03.08.24',
		location: 'Bühne an der Münztreppe',
		image: '/schlabbeflicker.JPEG',
	},
	{
		name: 'SportHouse',
		date: '31.05.24',
		location: 'SV Lemberg',
		image: '/sporthouse.jpg',
	},
	{
		name: 'Teen Disco',
		date: '17.05.24',
		location: 'MATRIX Pirmasens',
		image: '/teendisco.jpg',
	},
	{
		name: 'After Kubb Party',
		date: '11.05.24',
		location: 'Dahn | An der Reichenbach 2',
		image: '/afterkubb.jpg',
	},
	{
		name: 'Bärmesenser Hexentour',
		date: '30.04.24',
		location: 'Mobil/Bus',
		description:
			'Die Hexen sind los! Ich begleite euch im Bus, dass euch zwischen den Stationen nicht langweilig wird 😜',
		image: '/hexentour.jpg',
		link: 'http://www.pshexentour.de/',
	},
	{
		name: 'Trink dich zum Profit',
		date: '16.03.24',
		location: 'MATRIX Pirmasens',
		description:
			'Kaufe dir am Eingang einen Becher für 10€ und bekomme die ganze Nacht die Getränke zum halben Preis!',
		image: '/profitsaufen.jpg',
	},
	{
		name: 'I ❤️ Après Ski',
		date: '03.02.24',
		location: 'MATRIX Pirmasens',
		description: undefined,
		image: '/apresski.jpg',
	},
	{
		name: 'Hip Hop & RnB Party',
		date: '16.12.23',
		location: 'MATRIX Pirmasens',
		description: undefined,
		image: '/hiphopparty.JPEG',
	},
	{
		name: 'Mallorca Party',
		date: '25.11.23',
		location: 'MATRIX Pirmasens',
		description: undefined,
		image: '/malleparty.JPEG',
	},
	{
		name: 'Lemberger Kerweparty',
		date: '21.10.23',
		location: 'Freizeithalle Lemberg',
		description: undefined,
		image: '/kerweparty.JPEG',
	},
];
</script>
