import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';
import type { RuntimeConfig } from 'nuxt/schema';

type MailMessageConfig = {
	to?: string;
	from?: string;
	cc?: string;
	bcc?: string;
	name?: string;
};

type MailRuntimeConfig = {
	message: MailMessageConfig | MailMessageConfig[];
	smtp: {
		host?: string;
		port?: number;
		auth?: { user?: string; pass?: string };
	};
};

export type MailSendBody = {
	subject?: string;
	text?: string;
	html?: string;
	replyTo?: string;
	turnstileToken?: string;
	config?: number | string;
	to?: string;
	cc?: string;
	bcc?: string;
};

let transport: Transporter | null = null;

function normalizeMessage(message: MailRuntimeConfig['message']): MailMessageConfig[] {
	return Array.isArray(message) ? message : [message];
}

function assertMailConfig(mail: MailRuntimeConfig) {
	if (!mail.smtp?.host) {
		throw new Error('SMTP-Konfiguration fehlt (EMAIL_APP_HOST).');
	}
	const messages = normalizeMessage(mail.message);
	if (messages.length === 0) {
		throw new Error('Mail-Empfänger fehlt (EMAIL_APP_EMAIL).');
	}
	if (messages.some((m) => !m.to && !m.cc && !m.bcc)) {
		throw new Error('Mail-Empfänger (to/cc/bcc) ist nicht konfiguriert.');
	}
}

export async function sendMailFromBody(
	bodyInput: MailSendBody,
	config: RuntimeConfig
): Promise<void> {
	const mail = config.mail as MailRuntimeConfig;
	assertMailConfig(mail);

	const messages = normalizeMessage(mail.message);
	const configIndex =
		typeof bodyInput.config === 'string'
			? messages.findIndex((m) => m.name === bodyInput.config)
			: typeof bodyInput.config === 'number'
				? bodyInput.config
				: 0;

	if (configIndex < 0 || !messages[configIndex]) {
		throw new Error('Mail-Konfiguration nicht gefunden.');
	}

	const messageDefaults = messages[configIndex];
	const { turnstileToken: _token, config: _cfg, to, cc, bcc, ...fields } = bodyInput;

	if (!transport) {
		transport = nodemailer.createTransport(mail.smtp);
	}

	await transport.sendMail({
		...fields,
		...messageDefaults,
		...(to ? { to } : {}),
		...(cc ? { cc } : {}),
		...(bcc ? { bcc } : {}),
	});
}
