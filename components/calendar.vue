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
        key: '2024-07-19',
        highlight: true,
        dates: ['2024-07-19'],
        popover: {
            label: 'Private Veranstaltung',
            color: 'red',
            placement: 'bottom',
            visibility: 'click',
        },
    },
    {
        key: '2024-08-02',
        highlight: true,
        dates: ['2024-08-02', '2024-08-03'],
        popover: {
            label: 'MATRIX Schlabbeflicker Festival Afterparty',
            color: 'red',
            placement: 'bottom',
            visibility: 'click',
        },
    },
    {
        key: '2024-08-10',
        highlight: true,
        dates: ['2024-08-10'],
        popover: {
            label: 'Feuerwehrfest Lemberg',
            color: 'red',
            placement: 'bottom',
            visibility: 'click',
        },
    },
    {
        key: '2024-09-07',
        highlight: true,
        dates: ['2024-09-07'],
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
]) 
</script>