export default defineEventHandler(async (event) => {
	if (getMethod(event) !== 'POST') {
		return;
	}

	const { pathname } = getRequestURL(event);
	if (pathname !== '/mail/send') {
		return;
	}

	const body = await readBody<Record<string, unknown>>(event);
	const token = body.turnstileToken;

	if (typeof token !== 'string' || !token) {
		throw createError({
			statusCode: 403,
			statusMessage: 'Captcha verification required.',
		});
	}

	const result = await verifyTurnstileToken(token, event);

	if (!result.success) {
		throw createError({
			statusCode: 403,
			statusMessage: 'Captcha verification failed.',
		});
	}

	delete body.turnstileToken;
});
