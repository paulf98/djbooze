<template>
	<section class="py-16 px-8 bg-neutral-950 text-white" id="contact">
		<div
			class="container max-w-5xl mx-auto flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
			<div class="w-full shrink-0 md:max-w-md" v-motion-slide-visible-left :duration="800">
				<div class="mb-8 flex flex-col items-center md:items-start">
					<Heading text="Kontakt" />
				</div>
				<p class="max-w-md text-justify mb-4">
					Du möchtest mich für deine Veranstaltung buchen? Dann schreib mir einfach eine Nachricht
					über das Kontaktformular. Alternativ freue ich mich auch über eine Nachricht auf
					Instagram.
				</p>

				<a
					href="https://www.instagram.com/dj.booze/"
					class="hover:underline text-red-600 hover:text-red-700"
					target="_blank"
					rel="noopener noreferrer">
					Mein Instagram →
				</a>
			</div>
			<div class="w-full min-w-0 md:flex-1">
				<UForm
					:schema="schema"
					:state="state"
					:validate="validate"
					class="w-full"
					@submit="submit"
					v-motion-slide-visible-right
					:duration="800">
					<div class="flex w-full flex-col gap-4 py-8">
						<UFormField
							label="Name"
							name="name"
							eager-validation
							class="w-full"
							:ui="contactFormFieldUi">
							<UInput
								v-model="state.name"
								placeholder="Name"
								variant="outline"
								color="neutral"
								:ui="contactFieldUi" />
						</UFormField>
						<UFormField
							label="Email"
							name="email"
							eager-validation
							class="w-full"
							:ui="contactFormFieldUi">
							<UInput
								v-model="state.email"
								placeholder="Email"
								type="email"
								variant="outline"
								color="neutral"
								:ui="contactFieldUi" />
						</UFormField>
						<UFormField
							label="Nachricht"
							name="message"
							eager-validation
							class="w-full"
							:ui="contactFormFieldUi">
							<UTextarea
								v-model="state.message"
								placeholder="Nachricht ..."
								:rows="6"
								variant="outline"
								color="neutral"
								:ui="contactFieldUi" />
						</UFormField>
						<ClientOnly>
							<div class="flex w-full justify-center">
								<NuxtTurnstile
									ref="turnstileRef"
									v-model="token"
									:options="{ theme: 'dark', language: 'de' }" />
							</div>
							<template #fallback>
								<div
									class="mx-auto h-[65px] w-[300px] max-w-full rounded bg-neutral-800 animate-pulse" />
							</template>
						</ClientOnly>
						<Button
							type="submit"
							class="w-full sm:w-auto"
							:disabled="!state.name || !state.email || !state.message || !token">
							Senden
						</Button>
					</div>
				</UForm>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { z } from 'zod';
import type { FormError } from '#ui/types';

/** Dark field chrome for neutral-950 sections (matches wedding-contact native inputs). */
const contactFormFieldUi = {
	root: 'w-full',
	wrapper: 'w-full',
	container: 'mt-1 block w-full',
};

const contactFieldUi = {
	root: 'flex w-full min-w-0',
	base: 'w-full min-w-0 rounded-lg border border-neutral-600 bg-neutral-800 px-4 py-3 text-white shadow-none outline-none transition-colors placeholder:text-neutral-400 focus-visible:border-white focus-visible:ring-2 focus-visible:ring-white/25',
};

const mail = useMail();
const toast = useToast();

const token = ref<string | undefined>(undefined);
const turnstileRef = ref<{ reset: () => void } | null>(null);

const validate = (state: any): FormError[] => {
	const errors = [];
	if (!state.name) errors.push({ name: 'name', message: 'Name ist ein Pflichtfeld' });
	if (!state.email) errors.push({ name: 'email', message: 'E-Mail ist ein Pflichtfeld' });
	if (!state.message) errors.push({ name: 'message', message: 'Nachricht ist ein Pflichtfeld' });
	return errors;
};

function submit() {
	if (!mail || !token.value) {
		toast.add({
			title: 'Fehler',
			description: 'Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.',
			color: 'error',
		});
		return;
	}

	mail
		.send({
			replyTo: state.email,
			subject: `Anfrage an DJ Booze von ${state.name}`,
			text: `
        Es gibt eine neue Anfrage an DJ Booze von ${state.name}.

        E-Mail-Adresse: ${state.email}

        Nachricht:
        ${state.message}
        `,
			turnstileToken: token.value,
		})
		.then(() => {
			toast.add({
				title: 'Anfrage versendet',
				description: 'Ihre Anfrage wurde erfolgreich gesendet.',
				color: 'primary',
				duration: 4000,
			});
			Object.assign(state, defaultState);
			token.value = undefined;
			turnstileRef.value?.reset();
		})
		.catch((err: unknown) => {
			const description =
				err instanceof Error && err.message
					? err.message
					: 'Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.';
			toast.add({
				title: 'Fehler',
				description,
				color: 'error',
				duration: 8000,
			});
			turnstileRef.value?.reset();
			token.value = undefined;
		});
}

const schema = z.object({
	name: z.string().min(3, 'Der Name muss mindestens 3 Zeichen lang sein.'),
	email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein.'),
	message: z.string().min(10, 'Die Nachricht muss mindestens 10 Zeichen lang sein.'),
});

const defaultState = {
	name: '',
	email: '',
	message: '',
};

const state = reactive(defaultState);
</script>
