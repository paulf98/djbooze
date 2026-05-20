import type { GoogleCalendarResponse } from '#shared/types/google-calendar';

export default defineEventHandler(async (): Promise<GoogleCalendarResponse> => {
	const calendarId = process.env.GOOGLE_CALENDAR_ID;
	const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;

	// Validate environment variables
	if (!calendarId) {
		throw createError({
			statusCode: 500,
			statusMessage: 'Umgebungsvariable GOOGLE_CALENDAR_ID ist nicht gesetzt.',
		});
	}

	if (!apiKey) {
		throw createError({
			statusCode: 500,
			statusMessage: 'Umgebungsvariable GOOGLE_CALENDAR_API_KEY ist nicht gesetzt.',
		});
	}

	const timeMin = new Date().toISOString();

	try {
		const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${timeMin}&singleEvents=true&orderBy=startTime`;
		const res = await $fetch<GoogleCalendarResponse>(url);
		return res;
	} catch (error: any) {
		console.error('Error fetching Google Calendar events:', error);
		throw createError({
			statusCode: 500,
			statusMessage: 'Kalendertermine konnten nicht geladen werden.',
		});
	}
});
