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
        key: '2025-01-04',
        highlight: true,
        dates: ['2025-01-04'],
        popover: {
            label: 'Die Erste Party des Jahres - WGW',
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
]) 
</script>