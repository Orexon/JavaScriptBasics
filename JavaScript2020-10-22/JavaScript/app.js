'use strict';

let knygos = 
[
	{ //0
		grozine: 
		[ // this is object key
			{
				ISBN: 'GR1236A',
				leidimoMetai: '2015',
				pavadinimas: 'Knyga1',
				puslapiuSkaicius: '221'
			}
			,
			{
				ISBN: 'GR1236B',
				leidimoMetai: '2014',
				pavadinimas: 'Knyga2',
				puslapiuSkaicius: '222'
			}
			,
			{
				ISBN: 'GR1236C',
				leidimoMetai: '2013',
				pavadinimas: 'Knyga3',
				puslapiuSkaicius: '223'
			}
			,
			{
				ISBN: 'GR1236D',
				leidimoMetai: '2012',
				pavadinimas: 'Knyga4',
				puslapiuSkaicius: '224'
			}
			,
			{
				ISBN: 'GR1236E',
				leidimoMetai: '2011',
				pavadinimas: 'Knyga5',
				puslapiuSkaicius: '225'
			}
			,
			{
				ISBN: 'GR1236F',
				leidimoMetai: '2020',
				pavadinimas: 'Knyga6',
				puslapiuSkaicius: '226'
			}
			,
			{
				ISBN: 'GR1236G',
				leidimoMetai: '2020',
				pavadinimas: 'Knyga7',
				puslapiuSkaicius: '227'
			}
			,
			{
				ISBN: 'GR1236H',
				leidimoMetai: '2058',
				pavadinimas: 'Knyga8',
				puslapiuSkaicius: '228'
			}
			,
			{
				ISBN: 'GR1236I',
				leidimoMetai: '2014',
				pavadinimas: 'Knyga9',
				puslapiuSkaicius: '229'
			}
			,
			{
				ISBN: 'GR1236J',
				leidimoMetai: '2015',
				pavadinimas: 'Knyga10',
				puslapiuSkaicius: '230'
			}
		]
	},
	{
		fantastika: 
		[ 
			{
				ISBN: 'GR1236KAT',
				leidimoMetai: '2016',
				pavadinimas: 'fantastikosKnyga1',
				puslapiuSkaicius: '231'
			}
			,
			{
				ISBN: 'GR1236KAD',
				leidimoMetai: '2017',
				pavadinimas: 'fantastikosKnyga2',
				puslapiuSkaicius: '232'
			}
			,
			{
				ISBN: 'GR1236KAM',
				leidimoMetai: '2018',
				pavadinimas: 'fantastikosKnyga3',
				puslapiuSkaicius: '233'
			}
			,
			{
				ISBN: 'GR1236KAL',
				leidimoMetai: '2019',
				pavadinimas: 'fantastikosKnyga4',
				puslapiuSkaicius: '234'
			}
			,
			{
				ISBN: 'GR1236KAP',
				leidimoMetai: '2020',
				pavadinimas: 'fantastikosKnyga5',
				puslapiuSkaicius: '235'
			}
			,
			{
				ISBN: 'GR1236KAI',
				leidimoMetai: '2021',
				pavadinimas: 'fantastikosKnyga6',
				puslapiuSkaicius: '236'
			}
			,
			{
				ISBN: 'GR1236KAR',
				leidimoMetai: '2018',
				pavadinimas: 'fantastikosKnyga7',
				puslapiuSkaicius: '237'
			}
			,
			{
				ISBN: 'GR1236KAX',
				leidimoMetai: '2020',
				pavadinimas: 'fantastikosKnyga8',
				puslapiuSkaicius: '238'
			}
			,
			{
				ISBN: 'GR1236KAV',
				leidimoMetai: '2019',
				pavadinimas: 'fantastikosKnyga9',
				puslapiuSkaicius: '239'
			}
			,
			{
				ISBN: 'GR1236KAC',
				leidimoMetai: '2017',
				pavadinimas: 'fantastikosKnyga10',
				puslapiuSkaicius: '240'
			}
		]
	},
	{
		siaubo: 
		[ 
			{
				ISBN: 'GR1236KYQ',
				leidimoMetai: '2019',
				pavadinimas: 'siauboKnyga1',
				puslapiuSkaicius: '241'
			}
			,
			{
				ISBN: 'GR1236KUT',
				leidimoMetai: '2020',
				pavadinimas: 'siauboKnyga2',
				puslapiuSkaicius: '242'
			}
			,
			{
				ISBN: 'GR1236KIO',
				leidimoMetai: '2019',
				pavadinimas: 'siauboKnyga3',
				puslapiuSkaicius: '243'
			}
			,
			{
				ISBN: 'GR1236KPO',
				leidimoMetai: '2018',
				pavadinimas: 'siauboKnyga4',
				puslapiuSkaicius: '244'
			}
			,
			{
				ISBN: 'GR1236KKI',
				leidimoMetai: '2019',
				pavadinimas: 'siauboKnyga5',
				puslapiuSkaicius: '245'
			}
			,
			{
				ISBN: 'GR1236KHY',
				leidimoMetai: '2021',
				pavadinimas: 'siauboKnyga6',
				puslapiuSkaicius: '246'
			}
			,
			{
				ISBN: 'GR1236KMK',
				leidimoMetai: '2020',
				pavadinimas: 'siauboKnyga7',
				puslapiuSkaicius: '247'
			}
			,
			{
				ISBN: 'GR1236KLK',
				leidimoMetai: '2019',
				pavadinimas: 'siauboKnyga8',
				puslapiuSkaicius: '248'
			}
			,
			{
				ISBN: 'GR1236KJN',
				leidimoMetai: '2018',
				pavadinimas: 'siauboKnyga9',
				puslapiuSkaicius: '249'
			}
			,
			{
				ISBN: 'GR1236KGY',
				leidimoMetai: '2016',
				pavadinimas: 'siauboKnyga10',
				puslapiuSkaicius: '250'
			}
		]
	}
]


for (let kateg of knygos) {
	for (let kategorija in kateg) {
		console.log("kategorija: " + kategorija + " ir  " + kategorija.length + " knygos " + kategorija + " kategorijoje")
		console.log("----------------------------------");

		for (let kiek in kategorija) {
			for (let bookInfo in kateg[kategorija][kiek]) {
				(bookInfo == 'leidimoMetai') && (kateg[kategorija][kiek][bookInfo] == '2020') ? console.log("     "+ bookInfo + ":   " + kateg[kategorija][kiek][bookInfo] + " Nauja knyga") : console.log("     "+bookInfo+ ":   " +kateg[kategorija][kiek][bookInfo]);
			}
			console.log("----------------------------------------------")
		}
	}
}