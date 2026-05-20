import { FetchError } from 'ofetch';

export default defineNuxtPlugin(() => ({
	provide: {
		mail: {
			send: async (config: Record<string, unknown>) => {
				try {
					await $fetch('/mail/send', {
						method: 'POST',
						body: config,
					});
				} catch (error) {
					if (error instanceof FetchError) {
						const message =
							(error.data as { statusMessage?: string } | undefined)?.statusMessage ??
							error.statusMessage ??
							error.message;
						throw new TypeError(message);
					}
					throw error;
				}
			},
		},
	},
}));
