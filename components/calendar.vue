<template>
    <div class="py-8 flex flex-col items-center gap-4 justify-center">
        <h2 class="text-center text-3xl">Meine Termine</h2>
        <div class="flex justify-center items-center py-4">
            <VCalendar v-model="date" :min-date="Date.now()" :max-date="new Date(new Date().setFullYear(new Date().getFullYear() + 1))
                " :color="color" :attributes="attributes" />
        </div>
        <p class="text-center">
            Hier siehst du meinen Terminkalender. Wenn du auch einen Termin mit mir planen möchtest, schreib mir
            einfach eine Nachricht über das Kontaktformular oder Instagram.
        </p>
        <NuxtLink to="#contact">
            <Button>
                Jetzt Anfrage senden
            </Button>
        </NuxtLink>
    </div>

</template>

<script setup lang="ts">

const date = ref(new Date())
const color = ref('red')

const attributes: any = ref([
    {
        key: '2024-05-11',
        highlight: true,
        dates: ['2024-05-11'],
        popover: {
            label: 'Kubb Afershow',
            color: 'red',
            placement: 'bottom',
            visibility: 'click',
        },
    },
    {
        key: '2024-05-17',
        highlight: true,
        dates: ['2024-05-17'],
        popover: {
            label: 'Teen Disco MATRIX',
            color: 'red',
            placement: 'bottom',
            visibility: 'click',
        },
    },
    {
        key: '2024-05-19',
        highlight: true,
        dates: ['2024-05-19'],
        popover: {
            label: 'Club Night MATRIX',
            color: 'red',
            placement: 'bottom',
            visibility: 'click',
        },
    },
    {
        key: '2024-05-24',
        highlight: true,
        dates: ['2024-05-24'],
        popover: {
            label: 'Private Veranstaltung',
            color: 'red',
            placement: 'bottom',
            visibility: 'click',
        },
    },
    {
        key: '2024-05-25',
        highlight: true,
        dates: ['2024-05-25'],
        popover: {
            label: 'Mein Geburtstag',
            color: 'red',
            placement: 'bottom',
            visibility: 'click',
        },
    },
    {
        key: '2024-05-31',
        highlight: true,
        dates: ['2024-05-31'],
        popover: {
            label: 'SportHouse SV Lemberg',
            color: 'red',
            placement: 'bottom',
            visibility: 'click',
        },
    },
    {
        key: '2024-06-15',
        highlight: true,
        dates: ['2024-06-15'],
        popover: {
            label: 'Grün Weiße Nacht SV Lemberg',
            color: 'red',
            placement: 'bottom',
            visibility: 'click',
        },
    },
    {
        key: '2024-07-13',
        highlight: true,
        dates: ['2024-07-13', '2024-07-14'],
        popover: {
            label: 'Sportfest SV Lemberg',
            color: 'red',
            placement: 'bottom',
            visibility: 'click',
        },
    },
    {
        key: '2024-10-12',
        highlight: true,
        dates: ['2024-10-12'],
        popover: {
            label: 'Die Anonyme Giddarischde - Aftershow',
            color: 'red',
            placement: 'bottom',
            visibility: 'click',
        },
    },
    {
        key: '2024-10-19',
        highlight: true,
        dates: ['2024-10-19'],
        popover: {
            label: 'Kerweparty Lemberg',
            color: 'red',
            placement: 'bottom',
            visibility: 'click',
        },
    },
    {
        key: '2024-10-26',
        highlight: true,
        dates: ['2024-10-26'],
        popover: {
            label: 'Private Veranstaltung',
            color: 'red',
            placement: 'bottom',
            visibility: 'click',
        },
    },
]) 
</script>