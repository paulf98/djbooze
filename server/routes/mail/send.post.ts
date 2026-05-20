import { verifyTurnstileToken } from '#imports';
import { sendMailFromBody, type MailSendBody } from '../../utils/mail';

export default defineEventHandler(async (event) => {
	const body = await readBody<MailSendBody>(event);
	const token = body?.turnstileToken;

	if (typeof token !== 'string' || !token) {
		throw createError({
			statusCode: 403,
			statusMessage: 'Captcha-Überprüfung erforderlich.',
		});
	}

	const result = await verifyTurnstileToken(token, event);
	if (!result.success) {
		throw createError({
			statusCode: 403,
			statusMessage: 'Captcha-Überprüfung fehlgeschlagen.',
		});
	}

	const { turnstileToken: _token, ...mailBody } = body;

	try {
		await sendMailFromBody(mailBody, useRuntimeConfig(event));
	} catch (error) {
		throw createError({
			statusCode: 500,
			statusMessage: error instanceof Error ? error.message : String(error),
		});
	}

	return '';
});
