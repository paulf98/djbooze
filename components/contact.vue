<template>
    <section class="py-16 px-8 bg-neutral-900 text-white" id="contact">
        <div class="container max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
            <div class="flex flex-col">
                <div class="container flex flex-col items-center max-w-5xl mx-auto mb-8">
                    <Heading text="Kontakt"></Heading>
                </div>
                <p class="max-w-md text-justify">
                    Du möchtest DJ Booze für deine Veranstaltung buchen? Dann schreib mir einfach eine Nachricht über das
                    Kontaktformular. Alternativ freue ich mich auch über eine Nachricht auf Instagram.
                </p>
            </div>
            <UForm :schema="schema" :state="state" :validate="validate" class="w-full flex-grow" @submit="submit">
                <div class="container flex flex-col items-stretch gap-4 max-w-xl mx-auto py-8">
                    <UFormGroup label="Name" name="name" eager-validation>
                        <UInput v-model="state.name" placeholder="Name" variant="outline" color="green" />
                    </UFormGroup>
                    <UFormGroup label="Email" name="email" eager-validation>
                        <UInput v-model="state.email" placeholder="Email" variant="outline" color="green" />
                    </UFormGroup>
                    <UFormGroup label="Nachricht" name="message" eager-validation>
                        <UTextarea v-model="state.message" placeholder="Nachricht ..." variant="outline" color="green" />
                    </UFormGroup>
                    <Button type="submit"
                        :disabled="!state.name || !state.email || !state.message || !token">Senden</Button>
                    <NuxtTurnstile v-model="token" :options="{ theme: 'dark' }" class="self-center" />
                </div>
            </UForm>
        </div>
    </section>
</template>

<script setup lang="ts">
import { z } from 'zod'
import type { FormError } from '#ui/types'


const mail = useMail()
const toast = useToast()

const token = ref<string | undefined>(undefined)

const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.name) errors.push({ path: 'name', message: 'Name ist ein Pflichtfeld' })
    if (!state.email) errors.push({ path: 'email', message: 'Email ist ein Pflichtfeld' })
    if (!state.message) errors.push({ path: 'message', message: 'Nachricht ist ein Pflichtfeld' })
    return errors
}

function submit() {
    if (!mail || !token) {
        alert('Ihre Anmeldung konnte nicht versendet werden.')
        return
    }

    mail.send({
        from: state.email,
        subject: `Anfrage an DJ Booze von ${state.name}`,
        text: `
        Es gibt eine neue Anfrage an DJ Booze von ${state.name}.

        E-Mail-Adresse: ${state.email}

        Nachricht:
        ${state.message}
        `,
    }).then(() => {
        toast.add({
            title: 'Anfrage versendet',
            description: 'Ihre Anfrage wurde erfolgreich versendet.',
            color: 'green',
            timeout: 4000,
        })

    }).catch(() => {
        alert('Ihre Anfrage konnte nicht versendet werden.')
    })

    // Reset form
    Object.assign(state, defaultState)
}

const schema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    message: z.string().min(10),
})

const defaultState = {
    name: "",
    email: "",
    message: "",
}

const state = reactive(defaultState)
</script>