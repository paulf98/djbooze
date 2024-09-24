<template>
    <div class="py-8 flex flex-col items-center gap-4 justify-center">
        <Heading class="mb-16" text="Dates →" />
        <div class="flex justify-center items-center py-4">
            <VCalendar v-model="date" :min-date="date" :color="color" :attributes="attributes" />
        </div>
        <p class="text-center">
            Du hast Interesse und willst dir deinen eigenen Termin mit mir sichern? <br>
            Schreibe mir einfach eine Nachricht über das Kontaktformular oder Instagram.
            Wir klären alle Details persönlich.
        </p>
        <NuxtLink to="#contact">
            <Button>
                Jetzt Anfrage senden
            </Button>
        </NuxtLink>
    </div>

</template>

<script setup lang="ts">

const date = useState('date', () => new Date())
const color = ref('red')

const attributes: any = ref([
    {
        key: '2024-09-28',
        highlight: true,
        dates: ['2024-09-28'],
        popover: {
            label: 'Private Veranstaltung',
            color: 'red',
            placement: 'bottom',
            visibility: 'click',
        },
    },
    {
        key: '2024-10-02',
        highlight: true,
        dates: ['2024-10-02'],
        popover: {
            label: 'Kneipentour @Next Level',
            color: 'red',
            placement: 'bottom',
            visibility: 'click',
        },
    },
    {
        key: '2024-10-05',
        highlight: true,
        dates: ['2024-10-05'],
        popover: {
            label: 'Private Veranstaltung',
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
    {
        key: '2024-10-31',
        highlight: true,
        dates: ['2024-10-31'],
        popover: {
            label: 'MATRIX Halloween Party',
            color: 'red',
            placement: 'bottom',
            visibility: 'click',
        },
    },
    {
        key: '2024-12-07',
        highlight: true,
        dates: ['2024-12-07'],
        popover: {
            label: 'Elias B-Day Bash',
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
]) 
</script>