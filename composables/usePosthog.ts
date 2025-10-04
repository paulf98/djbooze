import type { PostHog } from 'posthog-js';

export const usePosthog = () => {
	const { $posthog } = useNuxtApp();

	return {
		posthog: $posthog as () => PostHog | undefined,

		// Helper methods for common tracking
		track: (event: string, properties?: Record<string, any>) => {
			const posthog = $posthog?.();
			if (posthog) {
				posthog.capture(event, properties);
			}
		},

		identify: (userId: string, properties?: Record<string, any>) => {
			const posthog = $posthog?.();
			if (posthog) {
				posthog.identify(userId, properties);
			}
		},

		reset: () => {
			const posthog = $posthog?.();
			if (posthog) {
				posthog.reset();
			}
		},

		// Check if PostHog is available
		isAvailable: () => {
			return !!$posthog?.();
		},
	};
};
