export default defineNuxtPlugin(() => {
	const { websiteId, hostUrl } = useRuntimeConfig().public.umami;
	if (!websiteId) {
		return;
	}

	useScriptUmamiAnalytics({
		websiteId,
		hostUrl,
	});
});
