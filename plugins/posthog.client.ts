import posthog from 'posthog-js';

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();

	// Development debug mode - log when PostHog would be initialized
	if (import.meta.env.MODE === 'development') {
		console.log('🐛 PostHog Debug Mode:', {
			hasKey: !!config.public.posthogKey,
			key: config.public.posthogKey ? `${config.public.posthogKey.substring(0, 10)}...` : 'none',
			host: config.public.posthogHost || 'https://eu.i.posthog.com',
		});
	}

	// Initialize PostHog if API key is available and not a placeholder (works in both dev and production)
	if (config.public.posthogKey && !config.public.posthogKey.includes('phc_development_test_key')) {
		posthog.init(config.public.posthogKey, {
			api_host: config.public.posthogHost || 'https://eu.i.posthog.com',
			// Enable cookieless analytics
			persistence: 'memory',
			// Disable cookies and local storage
			disable_cookie: true,
			disable_session_recording: true,
			// Use cookieless identification
			bootstrap: {
				distinctID: posthog.get_distinct_id(),
			},
			// Additional cookieless settings
			autocapture: {
				dom_event_allowlist: ['click', 'change', 'submit'],
				css_selector_allowlist: ['a', 'button', 'form', 'input', 'select', 'textarea'],
			},
			// Disable features that require cookies
			capture_pageview: true,
			capture_pageleave: true,
			// Use memory-based session management
			session_recording: {
				recordCrossOriginIframes: false,
			},
			// Privacy-focused settings
			respect_dnt: true,
			opt_out_capturing_by_default: false,
			// Disable features that might use cookies
			disable_persistence: true,
			// Use cookieless tracking
			loaded: (posthog) => {
				if (import.meta.env.MODE === 'development') posthog.debug();
				// Set up cookieless user identification
				if (typeof window !== 'undefined') {
					// Use browser fingerprinting for cookieless identification
					posthog.register({
						$browser: navigator.userAgent,
						$browser_version: navigator.userAgent.match(
							/(?:Chrome|Firefox|Safari|Edge)\/(\d+)/
						)?.[1],
						$os: navigator.platform,
						$current_url: window.location.href,
						$host: window.location.hostname,
					});
				}
			},
		});

		// Make PostHog available globally
		return {
			provide: {
				posthog: () => posthog,
			},
		};
	} else if (import.meta.env.MODE === 'development') {
		// In development without a key, provide a mock PostHog for testing
		const mockPosthog = {
			capture: (event: string, properties?: any) => {
				console.log('🐛 PostHog Mock - Event:', event, properties);
			},
			identify: (userId: string, properties?: any) => {
				console.log('🐛 PostHog Mock - Identify:', userId, properties);
			},
			reset: () => {
				console.log('🐛 PostHog Mock - Reset');
			},
			register: (properties: any) => {
				console.log('🐛 PostHog Mock - Register:', properties);
			},
			debug: () => {
				console.log('🐛 PostHog Debug Mode Enabled (Mock)');
			},
		} as any;

		return {
			provide: {
				posthog: () => mockPosthog,
			},
		};
	}
});
