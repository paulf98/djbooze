import { type MyEvent } from '~/types/event';

export const upcomingEvents: MyEvent[] = [
	{
		name: 'SchlabbeflickerFESTival',
		date: '01.08.2025',
		description: 'von 18:00 - 00:00 Uhr',
		location: 'Münzplatz Pirmasens',
		image: '/schlabbeflicker-freitag-25.jpg',
	},
	{
		name: 'Players Night',
		date: '02.08.2025',
		location: 'TC Erlenbrunn',
		description: '17:00 - 22:00 Uhr',
		image: '/players-night.JPEG',
	},
	{
		name: 'SchlabbeflickerFESTival',
		date: '02.08.2025',
		location: 'MaTriX Pirmasens',
		description: 'ab 23:00 Uhr',
		image: '/schlabbeflicker-samstag-25.JPEG',
	},
	{
		name: 'Feuerwehrfest Lemberg',
		date: '09.08.2025',
		location: 'Feuerwache Lemberg',
		description: '20:00 bis 01:00 Uhr',
		image: '/feuerwehrfest-25.JPEG',
	},
];

export const pastEvents: MyEvent[] = [
	{
		name: 'Malle After Work Party',
		date: '18.07.2025',
		location: 'Next Level Pirmasens',
		image: '/malleparty-juli-25.JPG',
	},
	{
		name: 'After Kubb',
		date: '31.05.2025',
		location: 'Dahn (Reichenbach)',
		image: '/AfterKubb25.JPEG',
	},
	{
		name: 'Hexentour',
		date: '30.04.2025',
		location: 'Next Level Pirmasens',
		image: '/hexentour25.jpg',
	},
	{
		name: 'Bad Bunny Beats',
		date: '17.04.2025',
		location: 'MATRIX Pirmasens',
		image: '/bunny-beats-matrix-2025.jpg',
	},
	{
		name: 'Bunny Beats',
		date: '20.04.2025',
		location: 'Sportheim Gersbach',
		image: '/bunny-beats-gersbach-2025.JPG',
	},
	{
		name: 'The Heavy Booze Experience',
		date: '29.03.2025',
		location: 'Next Level Pirmasens',
		image: '/HeavyBooze.png',
	},
	{
		name: 'Bad Taste Party',
		date: '28.02.2025',
		location: 'Next Level Pirmasens',
		image: '/bad-taste.jpg',
	},
	{
		name: 'Faschingsparty',
		date: '01.03.2025',
		location: 'MaTriX Pirmasens',
		image: '/fasching25.jpg',
	},
	{
		name: 'Vermoddelte Turnstunde',
		date: '21.02.2025',
		location: 'TV Lemberg',
		image: '/VermoddelteTurnstunde.JPG',
	},
	{
		name: 'Ladies Night',
		date: '08.02.2025',
		location: 'MaTriX Pirmasens',
		image: '/ladies-night.jpg',
	},
	{
		name: 'Friday Night Revival',
		date: '31.01.2025',
		location: 'MaTriX Pirmasens',
		image: '/friday-night.JPEG',
	},
	{
		name: 'Die Erste Party des Jahres #wiegeilwerdzn',
		date: '04.01.2025',
		location: 'Messehalle Pirmasens',
		image: '/wgw25.jpg',
	},
];

export const archivedEvents: MyEvent[] = [
	...pastEvents,
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
